import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, DollarSign, BarChart3, TrendingUp, ArrowRight, Zap, Target } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";

const SocialMediaMarketingCostSriLanka = () => {
  return (
    <ServicePageLayout>
      <SEOHead
        title="Social Media Marketing Cost in Sri Lanka (2026 Pricing Guide)"
        description="How much does social media marketing cost in Sri Lanka? Learn about pricing models, factors that affect cost, and how to get the best ROI."
        keywords="social media marketing cost sri lanka, social media pricing sri lanka, facebook ads cost sri lanka, instagram marketing cost"
        canonical="https://buzzconnect.lk/social-media-marketing-cost-sri-lanka"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Social Media Marketing Cost in Sri Lanka (2026 Pricing Guide)",
          "description": "Complete pricing guide for social media marketing services in Sri Lanka.",
          "author": { "@type": "Organization", "name": "Buzz Connect" },
          "publisher": { "@type": "Organization", "name": "Buzz Connect" },
          "datePublished": "2026-04-12",
          "dateModified": "2026-04-12"
        }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Social Media Marketing Cost in Sri Lanka (2026 Pricing Guide)
          </h1>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How Much Does Social Media Marketing Cost in Sri Lanka?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Social media marketing is one of the most affordable digital marketing strategies, but costs vary depending on your goals and campaign type. This guide explains what you should expect when investing in <Link to="/social-media-marketing-sri-lanka" className="text-accent font-semibold hover:underline">social media marketing services</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Factors That Affect Social Media Marketing Pricing</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: DollarSign, title: "Ad Budget", desc: "The amount you invest in paid promotions across platforms" },
                { icon: Target, title: "Platform Selection", desc: "Facebook, Instagram, TikTok — each has different costs" },
                { icon: Zap, title: "Target Audience", desc: "Niche audiences may cost more to reach effectively" },
                { icon: BarChart3, title: "Content Creation", desc: "Custom graphics, videos, and copy add to the investment" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border border-border">
                  <item.icon className="w-6 h-6 text-accent mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Common Social Media Marketing Pricing Models</h2>
            <div className="space-y-4">
              {[
                { title: "Monthly Management", desc: "Ongoing campaigns, content creation, and optimization — the most popular choice for sustained growth." },
                { title: "Ad Spend-Based", desc: "Budget depends on campaign size and target reach across platforms." },
                { title: "Campaign-Based", desc: "Short-term promotions with defined goals and timelines." },
              ].map((model, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-1">🔹 {model.title}</h3>
                  <p className="text-sm text-muted-foreground">{model.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Is Social Media Marketing Worth the Investment?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Absolutely — social media marketing helps businesses:
            </p>
            <ul className="space-y-2">
              {["Increase visibility across Sri Lanka", "Drive targeted traffic to your website", "Generate quality leads and boost sales", "Studies show it significantly improves engagement and sales performance"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Get the Best Results for Your Budget</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Working with professionals like <strong>Buzz Connect</strong> ensures better targeting, higher ROI, and consistent growth for your social media campaigns.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-2xl bg-accent/10 border border-accent/20">
            <p className="font-medium text-foreground mb-3">💰 Want a customized pricing plan for your business?</p>
            <Link to="/social-media-marketing-sri-lanka" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              Explore our social media marketing services <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Request a Quote</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Contact us today for a <strong>customized social media marketing pricing plan</strong> tailored to your business goals.
            </p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Get Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          <RelatedArticles
            articles={[
              { title: "Best Social Media Marketing Company in Sri Lanka", path: "/best-social-media-marketing-company-sri-lanka" },
              { title: "How Social Media Marketing Works in Sri Lanka", path: "/how-social-media-marketing-works-sri-lanka" },
              { title: "Social Media Marketing – Why Your Business Needs It", path: "/social-media-marketing-why-your-business-needs-it-sri-lanka" },
            ]}
          />

          <DigitalMarketingCTA />
        </motion.div>
      </article>
    </ServicePageLayout>
  );
};

export default SocialMediaMarketingCostSriLanka;
