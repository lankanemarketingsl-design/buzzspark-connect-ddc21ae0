import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, DollarSign, TrendingUp, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const SeoCostSriLanka = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="SEO Cost in Sri Lanka (2026 Pricing Guide)"
      subtitle=""
    >
      <SEOHead
        title="SEO Cost in Sri Lanka (2026 Pricing Guide) | Buzz Connect"
        description="How much does SEO cost in Sri Lanka? Learn about SEO pricing models, factors that affect cost, and how to get the best value from your SEO investment."
        canonical="/seo-cost-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "SEO Cost Sri Lanka", url: "/seo-cost-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "SEO Cost in Sri Lanka (2026 Pricing Guide)",
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
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">How Much Does SEO Cost in Sri Lanka?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              SEO pricing in Sri Lanka varies depending on the scope, competition, and goals of your business. This guide explains what you should expect when investing in <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO Sri Lanka</Link> services. Choosing the <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">best SEO company Sri Lanka</Link> ensures you get the best value for your investment.
            </p>
          </div>

          {/* Factors */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Factors That Affect SEO Pricing</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-1">Competition Level</h3>
                <p className="text-xs text-muted-foreground">Highly competitive industries require more effort and resources, increasing cost.</p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-1">Website Size</h3>
                <p className="text-xs text-muted-foreground">Larger websites with more pages require more optimization work.</p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-1">Services Included</h3>
                <p className="text-xs text-muted-foreground">On-page SEO, technical SEO, content creation, and link building all affect pricing.</p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-1">Target Keywords</h3>
                <p className="text-xs text-muted-foreground">More keywords or highly competitive terms require additional investment.</p>
              </div>
            </div>
          </div>

          {/* Pricing Models */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Common SEO Pricing Models</h2>
            <div className="space-y-4">
              {[
                { icon: DollarSign, title: "Monthly Packages", desc: "Most common option for ongoing SEO — pay a fixed monthly fee for continuous optimization and reporting." },
                { icon: Shield, title: "Project-Based Pricing", desc: "One-time SEO improvements such as audits, migrations, or website launches." },
                { icon: TrendingUp, title: "Performance-Based SEO", desc: "Pay based on results achieved, such as ranking improvements or traffic growth." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                  <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Is SEO Worth It */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Is SEO Worth the Investment?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Absolutely — SEO delivers long-term ROI that compounds over time. Unlike paid ads, organic traffic continues generating results even after you stop investing.
            </p>
            <ul className="space-y-2">
              {[
                "Generates consistent organic traffic",
                "Reduces dependence on paid advertising",
                "Increases brand visibility and trust",
                "Provides measurable, trackable results",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* How to Get Best Value */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">How to Get the Best Value from SEO</h2>
            <ul className="space-y-2">
              {[
                "Focus on long-term strategy over quick fixes",
                "Choose experienced agencies with proven track records",
                "Avoid cheap, low-quality SEO services",
                "Combine SEO with content marketing for best results",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              An experienced <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO specialist in Sri Lanka</Link> will create a custom strategy that delivers real ROI for your business.
            </p>
          </div>

          {/* CTA */}
          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Get a Custom SEO Quote</h3>
            <p className="text-primary-foreground/80 mb-4">Contact us today for a tailored SEO plan that fits your budget and goals.</p>
            <Link to="/seo-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View SEO Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/seo-cost-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default SeoCostSriLanka;
