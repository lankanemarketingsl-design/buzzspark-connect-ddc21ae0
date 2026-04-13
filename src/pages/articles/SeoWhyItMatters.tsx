import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const SeoWhyItMatters = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="What is SEO and Why It Matters for Businesses in Sri Lanka"
      subtitle=""
    >
      <SEOHead
        title="What is SEO and Why It Matters for Businesses in Sri Lanka | Buzz Connect"
        description="Learn what SEO is and why it's essential for Sri Lankan businesses. Discover how search engine optimization drives organic traffic, leads, and long-term growth."
        canonical="/seo-why-it-matters-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "What is SEO and Why It Matters", url: "/seo-why-it-matters-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What is SEO and Why It Matters for Businesses in Sri Lanka",
          datePublished: "2025-03-24",
          author: { "@type": "Organization", name: "Buzz Connect" },
          publisher: { "@type": "Organization", name: "Buzz Connect", logo: { "@type": "ImageObject", url: "https://buzzconnect.lk/og-image.png" } },
        }]}
      />
      <div className="max-w-3xl mx-auto">
        <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Resources
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Search Engine Optimization (SEO) is the process of improving your website to rank higher on Google and attract more customers organically. Partnering with the <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">best SEO company in Sri Lanka</Link> can accelerate this process significantly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In Sri Lanka, businesses are increasingly moving online, making <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO Sri Lanka</Link> one of the most important digital marketing strategies for sustainable growth. A qualified <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO specialist Sri Lanka</Link> can help you outrank competitors and drive consistent leads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Why SEO is Important in Sri Lanka</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> More people search online before buying</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Google is the #1 traffic source for Sri Lankan websites</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Organic traffic reduces advertising costs significantly</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Builds long-term brand visibility and authority</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Businesses that invest in SEO can consistently generate leads without relying only on paid ads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">How SEO Helps Your Business Grow</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              SEO improves your visibility when customers search for your services. Whether it's "email marketing Sri Lanka" or "best hotels in Colombo," ranking on Google means more traffic and more sales.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you want to rank your business on Google, work with an experienced{" "}
              <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">
                SEO consultant Sri Lanka
              </Link>. SEO is not optional anymore — it's essential for growth.
            </p>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Rank Your Business on Google Today</h3>
            <p className="text-primary-foreground/80 mb-4">Get found by customers searching for your services in Sri Lanka.</p>
            <Link to="/seo-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View SEO Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/seo-why-it-matters-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default SeoWhyItMatters;
