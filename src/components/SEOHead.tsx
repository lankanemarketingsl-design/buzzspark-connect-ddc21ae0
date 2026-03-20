import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  breadcrumbs?: { name: string; url: string }[];
  jsonLd?: object[];
}

const SITE_URL = "https://buzzconnect.lk";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const SEOHead = ({ title, description, canonical, ogImage, ogType = "website", breadcrumbs, jsonLd = [] }: SEOHeadProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta tags
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Open Graph
    const fullCanonical = canonical.startsWith("http") ? canonical : `${SITE_URL}${canonical}`;
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", fullCanonical, "property");
    setMeta("og:type", ogType, "property");
    setMeta("og:image", ogImage || DEFAULT_OG_IMAGE, "property");
    setMeta("og:site_name", "Buzz Connect", "property");
    setMeta("og:locale", "en_LK", "property");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage || DEFAULT_OG_IMAGE);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", fullCanonical);

    // JSON-LD schemas
    const scripts: HTMLScriptElement[] = [];

    // Organization schema (always present)
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: "Buzz Connect",
      url: SITE_URL,
      logo: `${SITE_URL}/og-image.png`,
      description: "No.1 email marketing, SMS marketing, WhatsApp marketing and digital advertising company in Sri Lanka.",
      telephone: ["+94771437707", "+94771976351"],
      email: "infobuzzconnect@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressCountry: "LK",
      },
      areaServed: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      sameAs: [
        "https://www.facebook.com/buzzconnect/",
        "https://www.instagram.com/buzzconnect/",
      ],
      priceRange: "LKR",
    };
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.text = JSON.stringify(orgSchema);
    orgScript.setAttribute("data-seo-head", "true");
    document.head.appendChild(orgScript);
    scripts.push(orgScript);

    // Breadcrumbs
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((bc, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: bc.name,
          item: bc.url.startsWith("http") ? bc.url : `${SITE_URL}${bc.url}`,
        })),
      };
      const bcScript = document.createElement("script");
      bcScript.type = "application/ld+json";
      bcScript.text = JSON.stringify(breadcrumbSchema);
      bcScript.setAttribute("data-seo-head", "true");
      document.head.appendChild(bcScript);
      scripts.push(bcScript);
    }

    // Additional JSON-LD (FAQPage, etc.)
    jsonLd.forEach((schema) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(schema);
      s.setAttribute("data-seo-head", "true");
      document.head.appendChild(s);
      scripts.push(s);
    });

    return () => {
      scripts.forEach((s) => {
        if (s.parentNode) s.parentNode.removeChild(s);
      });
    };
  }, [title, description, canonical, ogImage, ogType, breadcrumbs, jsonLd]);

  return null;
};

export default SEOHead;
