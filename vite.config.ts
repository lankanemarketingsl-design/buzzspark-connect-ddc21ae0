import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { htmlPrerender } from "vite-plugin-html-prerender";

const allRoutes = [
  "/",
  "/email-marketing",
  "/sms-marketing",
  "/whatsapp-marketing",
  "/multi-channel-marketing-sri-lanka",
  "/special-advertising-packages",
  "/online-advertising-sri-lanka",
  "/graphic-designing-in-sri-lanka",
  "/seo-sri-lanka",
  "/website-design-sri-lanka",
  "/lead-generation-sri-lanka",
  "/social-media-marketing-sri-lanka",
  "/web-banner-advertising-sri-lanka",
  "/resources",
  "/about-us",
  "/why-choose-us",
  "/contact-us",
  "/hotel-marketing-sri-lanka",
  "/education-marketing-sri-lanka",
  "/finance-marketing-sri-lanka",
  "/restaurant-marketing-sri-lanka",
  "/real-estate-marketing-sri-lanka",
  "/fashion-marketing-sri-lanka",
  "/why-email-marketing-is-important",
  "/why-you-need-email-marketing",
  "/best-seo-services-sri-lanka",
  "/sms-marketing-in-sri-lanka",
  
  "/enable-missing-images-to-display",
  "/multi-channel-marketing-in-sri-lanka",
  "/future-of-email-marketing-sri-lanka",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    htmlPrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: allRoutes,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
