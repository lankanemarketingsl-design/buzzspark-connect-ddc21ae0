import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";
import { Search, Monitor, Video, ShoppingCart, Target, BarChart3, Users, Zap, DollarSign, CheckCircle, ArrowRight } from "lucide-react";

const GoogleAdsSriLanka = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Google Ads Services Sri Lanka",
      description: "Professional Google Ads management services in Sri Lanka. Get instant leads with high-converting PPC campaigns.",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
    },
  ];

  const campaignTypes = [
    { icon: Search, title: "Search Ads", desc: "Appear on Google search results when users search for your keywords. Capture high-intent traffic." },
    { icon: Monitor, title: "Display Ads", desc: "Banner ads shown across websites and apps in the Google Display Network." },
    { icon: Video, title: "YouTube Ads", desc: "Promote your brand through engaging video ads on YouTube." },
    { icon: ShoppingCart, title: "Shopping Ads", desc: "Ideal for eCommerce businesses — showcase products directly in search results." },
  ];

  const services = [
    "Keyword research & strategy",
    "Campaign setup & structure",
    "Ad copywriting & A/B testing",
    "Landing page optimization",
    "Conversion tracking setup",
    "Performance optimization & reporting",
  ];

  const industries = [
    { emoji: "🏨", name: "Hotels & Travel" },
    { emoji: "🛒", name: "eCommerce" },
    { emoji: "🏢", name: "Real Estate" },
    { emoji: "🎓", name: "Education" },
    { emoji: "🏥", name: "Healthcare" },
    { emoji: "🍽️", name: "Restaurants & Retail" },
  ];

  return (
    <ServicePageLayout
      badge="Google Ads"
      title="Google Ads Services in Sri Lanka"
      subtitle="Run high-converting Google Ads campaigns and generate instant leads and sales for your business in Sri Lanka."
    >
      <SEOHead
        title="Google Ads Sri Lanka | PPC Advertising Services 2026 | Buzz Connect"
        description="Professional Google Ads management in Sri Lanka. Get instant leads with search, display, YouTube & shopping ads. Free consultation. High ROI campaigns."
        canonical="/google-ads-sri-lanka"
        keywords="google ads sri lanka, PPC advertising sri lanka, google ads management, google advertising sri lanka, pay per click sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Google Ads Sri Lanka", url: "/google-ads-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">
        {/* Intro */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Looking to generate <strong>instant leads and sales</strong>? Google Ads is one of the fastest ways to grow your business in Sri Lanka. With the right strategy, you can reach customers exactly when they are searching for your services.
            </p>
          </div>
        </motion.section>

        {/* What is Google Ads */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What is Google Ads?</h2>
          <p className="text-muted-foreground mb-4">
            Google Ads is an online advertising platform that allows businesses to display ads on Google search results, YouTube, and partner websites. It helps you target users based on:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Search, label: "Keywords" },
              { icon: Target, label: "Location" },
              { icon: Users, label: "Interests" },
              { icon: Zap, label: "Search Intent" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50 text-center">
                <item.icon className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why Google Ads is Powerful */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why Google Ads is Powerful in Sri Lanka</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Search, text: "Reach customers actively searching for your services" },
              { icon: Zap, text: "Instant visibility on Google" },
              { icon: Target, text: "Highly targeted advertising" },
              { icon: DollarSign, text: "Pay only for clicks — maximize your budget" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30">
                <item.icon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Campaign Types */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Types of Google Ads Campaigns</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {campaignTypes.map((type) => (
              <div key={type.title} className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
                <type.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Cost Section with CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Google Ads Cost in Sri Lanka</h2>
          <p className="text-muted-foreground mb-4">
            Costs depend on industry competition, keywords, target audience, and campaign strategy. Understanding the pricing helps you plan a budget that delivers maximum ROI.
          </p>
          <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
            <p className="text-foreground font-medium mb-3">📊 Want a detailed cost breakdown?</p>
            <Link to="/google-ads-sri-lanka-cost-guide" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              Read our complete Google Ads Cost Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>

        {/* Our Services */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Our Google Ads Services</h2>
          <p className="text-muted-foreground mb-4">We provide complete Google Ads management to help you get maximum results:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">{service}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Industries */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Industries We Serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
                <span className="text-2xl">{ind.emoji}</span>
                <span className="font-medium text-foreground">{ind.name}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Strategy */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">How We Deliver Results</h2>
          <div className="space-y-4">
            {[
              "Targeting high-intent keywords that drive conversions",
              "Optimizing ad performance with data-driven insights",
              "Reducing cost per click through continuous refinement",
              "Increasing conversions with optimized landing pages",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Multi-Channel */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Multi-Channel Marketing Advantage</h2>
          <p className="text-muted-foreground mb-4">Google Ads works best when combined with other channels:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>📧 <Link to="/email-marketing" className="text-accent hover:underline">Email marketing</Link> — nurture leads from ad clicks</li>
            <li>📱 <Link to="/sms-marketing" className="text-accent hover:underline">SMS campaigns</Link> — instant follow-up messaging</li>
            <li>📣 <Link to="/social-media-marketing-sri-lanka" className="text-accent hover:underline">Social media marketing</Link> — retarget your audience</li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            👉 Learn more about{" "}
            <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">
              multi-channel marketing in Sri Lanka
            </Link>
          </p>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Why Choose Buzz Connect?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Proven digital marketing expertise",
              "Data-driven strategies for high ROI",
              "Full campaign management & reporting",
              "Transparent pricing — no hidden fees",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Internal Links */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="p-6 rounded-2xl bg-secondary/30 space-y-2">
            <p className="font-medium text-foreground mb-3">Related Services:</p>
            <p className="text-muted-foreground">
              🔍 <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO services in Sri Lanka</Link> — rank organically alongside your paid campaigns
            </p>
            <p className="text-muted-foreground">
              🎯 <Link to="/lead-generation-agency-sri-lanka" className="text-accent hover:underline font-semibold">Lead generation agency in Sri Lanka</Link> — generate more qualified leads
            </p>
            <p className="text-muted-foreground">
              📊 <Link to="/google-ads-sri-lanka-cost-guide" className="text-accent hover:underline font-semibold">Google Ads cost guide</Link> — understand pricing before you start
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="p-8 rounded-2xl gradient-hero text-center">
            <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-3">Get More Leads with Google Ads</h2>
            <p className="text-primary-foreground/80 mb-6">Ready to grow your business? Contact us today for a free Google Ads consultation and campaign strategy.</p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>

        <DigitalMarketingCTA />
        <RelatedArticles currentPath="/google-ads-sri-lanka" />
      </article>
    </ServicePageLayout>
  );
};

export default GoogleAdsSriLanka;
