import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const SITE_URL = "https://buzzconnect.lk";

interface RouteSeoEntry {
  route: string;
  title: string;
  description: string;
  canonical: string;
  h1: string;
}

const extractProp = (block: string, prop: string) => {
  const match = block.match(new RegExp(`${prop}="([^"]+)"`));
  return match?.[1]?.trim() ?? "";
};

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const toAbsoluteCanonical = (canonical: string, route: string) => {
  if (canonical.startsWith("http")) return canonical;
  const basePath = canonical || route || "/";
  return `${SITE_URL}${basePath}`;
};

const collectRouteSeo = (projectRoot: string): RouteSeoEntry[] => {
  const appFile = path.join(projectRoot, "src", "App.tsx");
  const appContent = fs.readFileSync(appFile, "utf8");

  const importMap = new Map<string, string>();
  const importRegex = /import\s+(\w+)\s+from\s+"(\.\/pages\/[^"]+)";/g;

  for (const match of appContent.matchAll(importRegex)) {
    const component = match[1];
    const relativeImport = match[2];
    const resolvedPath = path.join(projectRoot, "src", relativeImport.replace("./", ""));
    importMap.set(component, resolvedPath.endsWith(".tsx") ? resolvedPath : `${resolvedPath}.tsx`);
  }

  const entries: RouteSeoEntry[] = [];
  const routeRegex = /<Route\s+path="([^"]+)"\s+element={<(\w+)\s*\/>}\s*\/>/g;

  for (const match of appContent.matchAll(routeRegex)) {
    const route = match[1];
    const component = match[2];

    if (route === "*") continue;

    const componentPath = importMap.get(component);
    if (!componentPath || !fs.existsSync(componentPath)) continue;

    const pageContent = fs.readFileSync(componentPath, "utf8");
    const seoHeadBlock = pageContent.match(/<SEOHead[\s\S]*?\/>/)?.[0] ?? "";

    const title = extractProp(seoHeadBlock, "title") || "Buzz Connect | Digital Marketing Sri Lanka";
    const description =
      extractProp(seoHeadBlock, "description") ||
      "No.1 Email Marketing, SMS Marketing, WhatsApp Marketing & Digital Advertising Company in Sri Lanka.";
    const canonical = toAbsoluteCanonical(extractProp(seoHeadBlock, "canonical"), route);

    const serviceLayoutTitle = pageContent.match(/<ServicePageLayout[\s\S]*?title="([^"]+)"/)?.[1] ?? "";
    const inlineH1 = stripHtml(pageContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "");
    const h1 = serviceLayoutTitle || inlineH1 || title;

    entries.push({ route, title, description, canonical, h1 });
  }

  return entries;
};

const upsertTag = (html: string, regex: RegExp, replacement: string) =>
  regex.test(html) ? html.replace(regex, replacement) : html.replace("</head>", `  ${replacement}\n  </head>`);

const applyRouteSeo = (templateHtml: string, entry: RouteSeoEntry) => {
  let html = templateHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(entry.title)}</title>`);

  html = upsertTag(
    html,
    /<meta\s+name="description"[^>]*>/i,
    `<meta name="description" content="${escapeHtml(entry.description)}" />`,
  );
  html = upsertTag(
    html,
    /<link\s+rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${escapeHtml(entry.canonical)}" />`,
  );
  html = upsertTag(html, /<meta\s+property="og:title"[^>]*>/i, `<meta property="og:title" content="${escapeHtml(entry.title)}" />`);
  html = upsertTag(
    html,
    /<meta\s+property="og:description"[^>]*>/i,
    `<meta property="og:description" content="${escapeHtml(entry.description)}" />`,
  );
  html = upsertTag(html, /<meta\s+property="og:url"[^>]*>/i, `<meta property="og:url" content="${escapeHtml(entry.canonical)}" />`);
  html = upsertTag(html, /<meta\s+name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(entry.title)}" />`);
  html = upsertTag(
    html,
    /<meta\s+name="twitter:description"[^>]*>/i,
    `<meta name="twitter:description" content="${escapeHtml(entry.description)}" />`,
  );

  if (!html.includes('id="seo-route-h1"')) {
    const fallbackH1 = `<div id="seo-route-h1" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;"><h1>${escapeHtml(entry.h1)}</h1></div>`;
    html = html.replace(/<div id="root"><\/div>/i, `${fallbackH1}\n    <div id="root"></div>`);
  }

  return html;
};

const staticRouteSeoPlugin = (): Plugin => ({
  name: "static-route-seo-plugin",
  apply: "build",
  enforce: "post",
  closeBundle() {
    const projectRoot = __dirname;
    const distDir = path.join(projectRoot, "dist");
    const distIndex = path.join(distDir, "index.html");

    if (!fs.existsSync(distIndex)) {
      console.warn("[static-route-seo] dist/index.html not found. Skipping route HTML generation.");
      return;
    }

    const template = fs.readFileSync(distIndex, "utf8");
    const routeSeo = collectRouteSeo(projectRoot);

    routeSeo.forEach((entry) => {
      if (entry.route === "/") {
        fs.writeFileSync(path.join(distDir, "index.html"), applyRouteSeo(template, entry), "utf8");
      } else {
        // Flat file (e.g. dist/sms-marketing.html) — avoids Netlify folder-based trailing-slash issues
        const flatPath = path.join(distDir, `${entry.route.replace(/^\//, "")}.html`);
        fs.mkdirSync(path.dirname(flatPath), { recursive: true });
        fs.writeFileSync(flatPath, applyRouteSeo(template, entry), "utf8");
      }
    });

    console.log(`[static-route-seo] Generated static SEO HTML for ${routeSeo.length} routes.`);
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), staticRouteSeoPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
