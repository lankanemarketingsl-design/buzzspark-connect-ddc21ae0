import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Search, BarChart3, Globe, Link2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const BestSeoCompanySriLanka = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="Best SEO Company in Sri Lanka (2026 Guide)"
      subtitle=""
    >
      <SEOHead
        title="Best SEO Company in Sri Lanka (2026 Guide) | Buzz Connect"
        description="Find the best SEO company in Sri Lanka. Learn what to look for, key services, and how professional SEO can help your business rank on Google."
        canonical="/best-seo-company-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Best SEO Company Sri Lanka", url: "/best-seo-company-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best SEO Company in Sri Lanka (2026 Guide)",
          datePublished: "2026-04-12",
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
          {/* Intro */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Looking for the Best SEO Company in Sri Lanka?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Choosing the right <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO company Sri Lanka</Link> can determine whether your business appears on the first page of Google or gets lost among competitors. If you're searching for a reliable <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO consultant Sri Lanka</Link>, this guide will help you make the right decision.
            </p>
          </div>

          {/* Why SEO is Important */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Why SEO is Important for Businesses in Sri Lanka</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">SEO helps your business grow organically by improving your visibility on search engines.</p>
            <ul className="space-y-2">
              {[
                "Rank higher on Google for relevant keywords",
                "Generate organic traffic without paying for ads",
                "Increase leads and sales consistently",
                "Build long-term online visibility and credibility",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              👉 Learn more about our <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO services Sri Lanka</Link> and discover why we're considered the <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">best SEO company Sri Lanka</Link>
            </p>
          </div>

          {/* What Makes the Best SEO Company */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">What Makes the Best SEO Company?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">A top SEO company should provide comprehensive services that deliver measurable results.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: CheckCircle, title: "Proven Results", desc: "Case studies and ranking improvements you can verify" },
                { icon: Search, title: "On-Page Optimization", desc: "Content, keywords, and site structure optimization" },
                { icon: BarChart3, title: "Technical SEO", desc: "Site speed, indexing, and performance improvements" },
                { icon: Link2, title: "Link Building", desc: "High-quality backlinks from authoritative sources" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-muted/50 border border-border">
                  <item.icon className="w-5 h-5 text-accent mb-2" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services You Should Expect */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">SEO Services You Should Expect</h2>
            <ul className="space-y-2">
              {[
                "Keyword research & competitor analysis",
                "Content optimization & creation",
                "Technical SEO audits & fixes",
                "Link building campaigns",
                "Monthly reporting & analytics",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* How to Choose */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">How to Choose the Right SEO Partner</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Before hiring an SEO company, evaluate these factors:</p>
            <ul className="space-y-2">
              {[
                "Experience in your specific industry",
                "Transparent pricing with no hidden fees",
                "Real, verifiable results and testimonials",
                "Long-term strategy focus (not quick fixes)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Benefits of Hiring a Professional SEO Company</h2>
            <ul className="space-y-2">
              {[
                "Save time with expert-managed campaigns",
                "Get data-driven strategies tailored to your market",
                "Improve ROI with sustainable organic growth",
                "Access advanced tools and industry expertise",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Start Ranking on Google Today</h3>
            <p className="text-primary-foreground/80 mb-4">Work with Sri Lanka's trusted SEO experts to grow your organic traffic and generate more leads.</p>
            <Link to="/seo-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View SEO Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/best-seo-company-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default BestSeoCompanySriLanka;
