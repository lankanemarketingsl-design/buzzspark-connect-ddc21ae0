import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Search, FileText, Settings, Link2, BarChart3, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const SeoServicesSriLanka = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="SEO Services in Sri Lanka: What You Should Expect"
      subtitle=""
    >
      <SEOHead
        title="SEO Services in Sri Lanka: What You Should Expect | Buzz Connect"
        description="Learn what professional SEO services in Sri Lanka include — from keyword research to link building. Discover what to expect from a top SEO company."
        canonical="/seo-services-sri-lanka"
        ogType="article"
        keywords="seo services sri lanka, seo company sri lanka, best seo company in sri lanka, seo sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "SEO Services Sri Lanka", url: "/seo-services-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "SEO Services in Sri Lanka: What You Should Expect",
          datePublished: "2026-04-13",
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
            <p className="text-muted-foreground leading-relaxed mb-3">
              Professional SEO services in Sri Lanka go beyond basic optimization. A complete SEO strategy covers every aspect of search engine visibility — from technical foundations to content creation and authority building.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When you work with a reputable <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO company in Sri Lanka</Link>, you should expect a comprehensive, results-driven approach that aligns with your business objectives.
            </p>
          </div>

          {/* What's Included */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">What Professional SEO Services Include</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Search, title: "Keyword Research", desc: "Identifying high-value search terms your customers use" },
                { icon: Shield, title: "Website Audit", desc: "Comprehensive analysis of technical and on-page issues" },
                { icon: FileText, title: "Content Optimization", desc: "Creating and improving content for target keywords" },
                { icon: Link2, title: "Backlink Building", desc: "Earning quality links from reputable websites" },
                { icon: Settings, title: "Technical SEO", desc: "Fixing speed, mobile, and crawlability issues" },
                { icon: BarChart3, title: "Performance Monitoring", desc: "Monthly tracking of rankings, traffic, and leads" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-background border border-border">
                  <item.icon className="w-5 h-5 text-accent mb-2" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Goal */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">The Goal of SEO Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">The goal is simple: increase traffic and generate leads. Professional SEO delivers:</p>
            <ul className="space-y-2">
              {[
                "Higher Google rankings for your target keywords",
                "More organic visitors to your website every month",
                "Increased customer inquiries and conversions",
                "Stronger brand authority and online credibility",
                "Sustainable growth that compounds over time",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What to Expect Monthly */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">What to Expect Month by Month</h2>
            <div className="space-y-3">
              {[
                { month: "Month 1", work: "Website audit, keyword research, and technical fixes" },
                { month: "Month 2", work: "Content optimization and on-page improvements" },
                { month: "Month 3", work: "Link building and authority development" },
                { month: "Month 4+", work: "Ranking improvements, traffic growth, and ongoing optimization" },
              ].map((item) => (
                <div key={item.month} className="flex gap-3 items-start p-3 rounded-xl bg-background border border-border">
                  <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold flex-shrink-0">{item.month}</span>
                  <p className="text-sm text-foreground">{item.work}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Choosing the Right Provider */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Choosing the Right SEO Provider</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Working with the <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">best SEO company in Sri Lanka</Link> ensures your strategy is aligned with business growth. Look for a provider that offers transparent reporting, ethical techniques, and proven results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Explore how a professional <Link to="/seo-consultant-sri-lanka" className="text-accent hover:underline font-semibold">SEO consultant in Sri Lanka</Link> can help you develop the right strategy, and understand <Link to="/seo-cost-sri-lanka" className="text-accent hover:underline font-semibold">SEO pricing in Sri Lanka</Link> to plan your budget.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Read about <Link to="/seo-investment-long-term-strategy-sri-lanka" className="text-accent hover:underline font-semibold">why SEO is the best long-term investment</Link> for your business.
            </p>
          </div>

          {/* CTA */}
          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Get Professional SEO Services in Sri Lanka</h3>
            <p className="text-primary-foreground/80 mb-4">Increase your traffic, rankings, and leads with expert SEO services.</p>
            <Link to="/seo-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View SEO Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/seo-services-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default SeoServicesSriLanka;
