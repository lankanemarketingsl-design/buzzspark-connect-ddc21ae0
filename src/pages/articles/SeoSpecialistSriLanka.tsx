import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Search, Settings, FileText, BarChart3 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const SeoSpecialistSriLanka = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="SEO Specialist in Sri Lanka: Why Your Business Needs One"
      subtitle=""
    >
      <SEOHead
        title="SEO Specialist in Sri Lanka: Why Your Business Needs One | Buzz Connect"
        description="Discover why hiring an SEO specialist in Sri Lanka is critical for your business growth. Learn what they do and how they help you rank on Google."
        canonical="/seo-specialist-sri-lanka"
        ogType="article"
        keywords="seo specialist sri lanka, seo specialist in sri lanka, seo expert sri lanka, seo sri lanka, best seo company sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "SEO Specialist Sri Lanka", url: "/seo-specialist-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "SEO Specialist in Sri Lanka: Why Your Business Needs One",
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
              A skilled SEO specialist in Sri Lanka plays a key role in improving your online visibility and driving qualified traffic to your website. In an increasingly competitive digital landscape, businesses that invest in professional SEO gain a significant advantage.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're targeting local customers or expanding nationally, an experienced <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO specialist in Sri Lanka</Link> ensures your website ranks for the searches that matter most.
            </p>
          </div>

          {/* What They Focus On */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">What an SEO Specialist Focuses On</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: FileText, title: "On-Page Optimization", desc: "Content, keywords, meta tags, headings, and internal linking" },
                { icon: Settings, title: "Technical SEO", desc: "Site speed, mobile-friendliness, crawlability, and indexing" },
                { icon: Search, title: "Keyword Targeting", desc: "Identifying and targeting high-intent search terms" },
                { icon: BarChart3, title: "Performance Tracking", desc: "Monitoring rankings, traffic, and conversions monthly" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-background border border-border">
                  <item.icon className="w-5 h-5 text-accent mb-2" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Keywords They Help You Rank For */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Keywords an SEO Specialist Helps You Rank For</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              An SEO specialist ensures your website ranks for high-value searches that drive real business:
            </p>
            <ul className="space-y-2">
              {[
                '"SEO Sri Lanka"',
                '"SEO expert Sri Lanka"',
                '"best SEO company in Sri Lanka"',
                '"[your service] in Sri Lanka"',
                '"[your product] near me"',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <Search className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This helps attract high-intent customers who are actively looking for what you offer.
            </p>
          </div>

          {/* Why Your Business Needs One */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Why Your Business Needs an SEO Specialist</h2>
            <ul className="space-y-2">
              {[
                "Over 80% of consumers search Google before making a purchase",
                "SEO provides sustainable, long-term traffic without ongoing ad spend",
                "Professional SEO avoids costly mistakes that can hurt rankings",
                "Expert optimization delivers faster and better results than DIY",
                "Combines with other channels for maximum impact",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Learn about <Link to="/seo-investment-long-term-strategy-sri-lanka" className="text-accent hover:underline font-semibold">why SEO is the smartest long-term strategy</Link> and <Link to="/seo-vs-paid-ads-sri-lanka" className="text-accent hover:underline font-semibold">how SEO compares to paid ads</Link>.
            </p>
          </div>

          {/* Specialist vs Generalist */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">SEO Specialist vs General Marketing Agency</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              A dedicated SEO specialist in Sri Lanka brings focused expertise that general marketing agencies often lack. They stay updated with Google algorithm changes, understand technical SEO intricacies, and have the tools to track and improve performance effectively.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Working with the <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">best SEO company Sri Lanka</Link> ensures you get specialist-level attention combined with a full-service team.
            </p>
          </div>

          {/* CTA */}
          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Work with an SEO Specialist in Sri Lanka</h3>
            <p className="text-primary-foreground/80 mb-4">Get expert SEO services that deliver rankings, traffic, and real business growth.</p>
            <Link to="/seo-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View SEO Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/seo-specialist-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default SeoSpecialistSriLanka;
