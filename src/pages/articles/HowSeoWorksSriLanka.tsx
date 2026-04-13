import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Settings, ExternalLink, Clock, Layers } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const HowSeoWorksSriLanka = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="How SEO Works in Sri Lanka (Beginner to Advanced Guide)"
      subtitle=""
    >
      <SEOHead
        title="How SEO Works in Sri Lanka (Beginner to Advanced Guide) | Buzz Connect"
        description="Learn how SEO works in Sri Lanka — from on-page optimization to link building. A complete guide for beginners and advanced marketers."
        canonical="/how-seo-works-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "How SEO Works Sri Lanka", url: "/how-seo-works-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How SEO Works in Sri Lanka (Beginner to Advanced Guide)",
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
          {/* What is SEO */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">What is SEO?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              SEO (Search Engine Optimization) is the process of improving your website to rank higher on search engines like Google. When done right, SEO brings consistent organic traffic to your website without paying for ads.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Working with an experienced <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO expert Sri Lanka</Link> ensures your website is optimized correctly from the start. Learn more about our <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO Sri Lanka</Link> services.
            </p>
          </div>

          {/* How SEO Works - 3 Pillars */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">How SEO Works: The 3 Main Areas</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: FileText, title: "On-Page SEO", desc: "Optimizing content, keywords, meta tags, and site structure" },
                { icon: Settings, title: "Technical SEO", desc: "Improving website speed, indexing, mobile-friendliness, and crawlability" },
                { icon: ExternalLink, title: "Off-Page SEO", desc: "Building backlinks and domain authority from external sources" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-background border border-border text-center">
                  <item.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Process Step by Step */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">SEO Process Step-by-Step</h2>
            <div className="space-y-3">
              {[
                { step: "1", title: "Keyword Research", desc: "Identify the terms your customers are searching for" },
                { step: "2", title: "Content Optimization", desc: "Create and optimize content around target keywords" },
                { step: "3", title: "Technical Improvements", desc: "Fix site speed, mobile issues, and crawl errors" },
                { step: "4", title: "Link Building", desc: "Earn high-quality backlinks from authoritative websites" },
                { step: "5", title: "Monitoring & Updates", desc: "Track rankings and continuously improve your strategy" },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start">
                  <span className="w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">{item.step}</span>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Local SEO */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">SEO in Sri Lanka: Local Advantage</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Local SEO helps businesses target customers specifically in Sri Lanka and nearby regions.</p>
            <ul className="space-y-2">
              {[
                "Target Sri Lankan customers searching for your products",
                "Rank for local keywords like 'best [service] in Sri Lanka'",
                "Increase phone calls and walk-in inquiries",
                "Appear in Google Maps and local search results",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* How Long Does SEO Take */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">How Long Does SEO Take?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">SEO is a long-term strategy. Here's a realistic timeline:</p>
            <div className="space-y-3">
              {[
                { icon: Clock, period: "1–3 Months", result: "Initial improvements in crawling & indexing" },
                { icon: Layers, period: "3–6 Months", result: "Noticeable ranking improvements for target keywords" },
                { icon: ExternalLink, period: "6+ Months", result: "Strong, sustainable rankings and consistent traffic" },
              ].map((item) => (
                <div key={item.period} className="flex gap-3 items-center p-3 rounded-xl bg-muted/50 border border-border">
                  <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground text-sm">{item.period}</span>
                    <span className="text-muted-foreground text-sm"> → {item.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO + Digital Marketing */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">SEO + Digital Marketing Strategy</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">SEO works best when combined with other digital marketing channels:</p>
            <ul className="space-y-2">
              {[
                { text: "Content marketing", link: null },
                { text: "Email marketing", link: "/email-marketing" },
                { text: "Social media marketing", link: "/social-media-marketing-sri-lanka" },
                { text: "Multi-channel campaigns", link: "/multi-channel-marketing-in-sri-lanka" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item.link ? (
                    <Link to={item.link} className="text-accent hover:underline font-semibold">{item.text}</Link>
                  ) : item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Start Your SEO Journey Today</h3>
            <p className="text-primary-foreground/80 mb-4">Work with experienced SEO professionals to improve your rankings and grow your business.</p>
            <Link to="/seo-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View SEO Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/how-seo-works-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default HowSeoWorksSriLanka;
