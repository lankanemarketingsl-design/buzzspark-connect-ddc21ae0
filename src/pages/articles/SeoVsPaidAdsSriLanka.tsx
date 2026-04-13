import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, TrendingUp, DollarSign, Clock, Zap, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const SeoVsPaidAdsSriLanka = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="SEO vs Paid Ads in Sri Lanka: Which is Better for Your Business?"
      subtitle=""
    >
      <SEOHead
        title="SEO vs Paid Ads in Sri Lanka: Which is Better? | Buzz Connect"
        description="SEO vs paid ads — which is the better investment for Sri Lankan businesses? Compare costs, results, and ROI to make the right marketing decision."
        canonical="/seo-vs-paid-ads-sri-lanka"
        ogType="article"
        keywords="seo vs paid ads sri lanka, seo sri lanka, google ads sri lanka, best seo company sri lanka, seo expert sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "SEO vs Paid Ads", url: "/seo-vs-paid-ads-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "SEO vs Paid Ads in Sri Lanka: Which is Better for Your Business?",
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
              Businesses in Sri Lanka often ask whether to invest in SEO or paid advertising. Both have their place in a marketing strategy, but understanding the differences helps you make smarter decisions with your budget.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As one of the <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">leading SEO companies in Sri Lanka</Link>, we help businesses understand when to use each strategy — and how to combine them for maximum results.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">SEO vs Paid Ads: Side-by-Side Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-3 bg-muted/50 border border-border font-semibold text-foreground">Factor</th>
                    <th className="text-left p-3 bg-accent/10 border border-border font-semibold text-foreground">SEO</th>
                    <th className="text-left p-3 bg-muted/50 border border-border font-semibold text-foreground">Paid Ads</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Results Timeline", "Long-term, sustainable", "Instant, temporary"],
                    ["Authority", "Builds domain authority", "No authority benefit"],
                    ["ROI Over Time", "Higher ROI (compounds)", "Continuous spend required"],
                    ["Traffic", "Sustainable organic traffic", "Stops when budget ends"],
                    ["Cost", "More cost-effective long-term", "Ongoing cost per click"],
                    ["Trust", "Higher user trust (organic)", "Perceived as ads"],
                    ["Click-Through Rate", "Higher for organic results", "Lower (ad blindness)"],
                  ].map(([factor, seo, ads]) => (
                    <tr key={factor}>
                      <td className="p-3 border border-border text-muted-foreground font-medium">{factor}</td>
                      <td className="p-3 border border-border text-foreground">{seo}</td>
                      <td className="p-3 border border-border text-muted-foreground">{ads}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Benefits of SEO */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Why SEO Wins Long-Term</h2>
            <ul className="space-y-2">
              {[
                "SEO builds lasting authority that compounds over time",
                "Organic traffic is free — no cost per click",
                "Higher trust from users who prefer organic results",
                "SEO results continue even when you pause investment",
                "Better ROI compared to paid advertising over 12+ months",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Read more about <Link to="/seo-investment-long-term-strategy-sri-lanka" className="text-accent hover:underline font-semibold">why SEO is the smartest long-term strategy</Link> for businesses in Sri Lanka.
            </p>
          </div>

          {/* When Paid Ads Make Sense */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">When Paid Ads Make Sense</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Paid ads are useful in specific situations:
            </p>
            <ul className="space-y-2">
              {[
                "Launching a new product or service and need immediate visibility",
                "Promoting time-sensitive offers or events",
                "Testing new keywords before committing to SEO",
                "Supplementing SEO while waiting for organic rankings to build",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <Zap className="w-4 h-4 text-primary flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Learn about <Link to="/google-ads-sri-lanka" className="text-accent hover:underline font-semibold">Google Ads in Sri Lanka</Link> and how to use them strategically.
            </p>
          </div>

          {/* The Best Strategy */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">The Best Strategy: Combine Both</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              The smartest businesses use both SEO and paid ads, but rely on SEO as the foundation for sustainable growth. Paid ads provide short-term boosts, while SEO builds the long-term asset.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: Shield, label: "SEO = Foundation", desc: "Long-term rankings and sustainable traffic" },
                { icon: Zap, label: "Paid Ads = Boost", desc: "Immediate visibility for specific campaigns" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                  <item.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground text-sm">{item.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              An experienced <Link to="/seo-consultant-sri-lanka" className="text-accent hover:underline font-semibold">SEO consultant in Sri Lanka</Link> can help you develop the right mix of SEO and paid advertising for your business.
            </p>
          </div>

          {/* CTA */}
          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Start Building Long-Term Growth with SEO</h3>
            <p className="text-primary-foreground/80 mb-4">Work with the best SEO company in Sri Lanka and invest in sustainable, high-ROI marketing.</p>
            <Link to="/seo-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              Explore SEO Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/seo-vs-paid-ads-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default SeoVsPaidAdsSriLanka;
