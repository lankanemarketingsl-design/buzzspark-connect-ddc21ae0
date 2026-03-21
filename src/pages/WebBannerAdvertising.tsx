import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, Zap, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, GraduationCap, ShoppingCart, Building2, Home, Calendar, Rocket,
  TrendingUp, ArrowRight, Users, Eye, PenTool, Image, Layers, Send, Monitor,
  MousePointer, Layout, Palette, RefreshCw
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const bannerServices = [
  { icon: Layout, title: "Homepage Banner Advertising", desc: "Premium placements on high-traffic homepages for maximum brand exposure across Sri Lanka." },
  { icon: Layers, title: "Category Page Banner Placements", desc: "Targeted banners on specific category pages to reach relevant audiences." },
  { icon: Zap, title: "Featured Promotion Banners", desc: "Highlighted promotional banners designed to drive immediate action and conversions." },
  { icon: Target, title: "Campaign-Based Advertising", desc: "Time-bound banner campaigns aligned with your marketing goals and seasonal offers." },
  { icon: RefreshCw, title: "Retargeting Display Ads", desc: "Re-engage visitors who have shown interest in your products or services." },
  { icon: Monitor, title: "Cross-Platform Banners", desc: "Responsive banners optimized for desktop, tablet, and mobile devices." },
];

const benefits = [
  "High visibility across popular platforms",
  "Reach targeted audiences",
  "Increase brand recognition",
  "Drive traffic to your website or landing page",
  "Support marketing campaigns",
  "Cost-effective advertising solution",
];

const finditAdvantages = [
  "Reach users actively searching for offers and services",
  "Gain exposure across multiple categories",
  "Increase engagement and conversions",
  "Achieve better ROI",
];

const designFeatures = [
  { icon: Eye, title: "Eye-catching visuals" },
  { icon: MousePointer, title: "Clear call-to-action" },
  { icon: Smartphone, title: "Mobile-friendly design" },
  { icon: BarChart3, title: "Optimized for performance" },
];

const useCases = [
  { icon: GraduationCap, label: "Education institutes" },
  { icon: ShoppingCart, label: "E-commerce businesses" },
  { icon: Building2, label: "Hotels and travel companies" },
  { icon: Home, label: "Real estate companies" },
  { icon: Calendar, label: "Event organizers" },
  { icon: Rocket, label: "SMEs and corporate brands" },
];

const processSteps = [
  { icon: Target, title: "Understand Goals", desc: "Analyze your campaign goals and target audience" },
  { icon: Palette, title: "Design Banners", desc: "Create high-quality banner creatives" },
  { icon: Layers, title: "Select Placements", desc: "Choose strategic placement positions" },
  { icon: Send, title: "Launch Campaign", desc: "Deploy banners across selected platforms" },
  { icon: BarChart3, title: "Track & Optimize", desc: "Monitor performance and optimize results" },
];

const whyChoose = [
  "Experts in online advertising",
  "Integration with Findit.lk",
  "Cost-effective campaign solutions",
  "Fast campaign setup",
  "Proven results",
];

const results = [
  "Increased brand visibility",
  "More website traffic",
  "Higher engagement",
  "Increased leads and inquiries",
  "Better return on investment",
];

const faqs = [
  { q: "What is web banner advertising?", a: "It is a form of online advertising where visual banners are displayed on websites to promote businesses, products, or services to a wide audience." },
  { q: "Is banner advertising effective in Sri Lanka?", a: "Yes, especially when placed on high-traffic platforms like Findit.lk. Banner ads provide high visibility and help drive targeted traffic to your business." },
  { q: "Can I target specific audiences?", a: "Yes, campaigns can be targeted based on categories, audience interests, and user behavior to ensure your ads reach the right people." },
  { q: "How much does banner advertising cost?", a: "Pricing depends on placement, duration, and campaign requirements. Contact Buzz Connect for a customized quote tailored to your budget." },
  { q: "Why choose Buzz Connect for banner advertising?", a: "Buzz Connect provides integrated banner advertising with Findit.lk placements, multi-channel support, creative design, and proven ROI-driven results." },
];

const WebBannerAdvertising = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Web Banner Advertising Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "High-impact web banner advertising services in Sri Lanka with strategic online placements through Findit.lk and leading platforms.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Web Banner Advertising Sri Lanka"
      title="Web Banner Advertising Sri Lanka – High-Impact Online Ads for Maximum Visibility"
      subtitle="Promote your business with high-visibility banner ads in Sri Lanka. Reach thousands of potential customers through strategic online placements with Buzz Connect."
    >
      <SEOHead
        title="Web Banner Advertising Sri Lanka | Online Ads | Buzz Connect"
        description="Best web banner advertising Sri Lanka with high visibility placements. Promote your business with Buzz Connect & Findit.lk."
        canonical="/web-banner-advertising-sri-lanka"
        keywords="web banner advertising sri lanka, online banner ads sri lanka, display advertising sri lanka, banner advertising colombo, findit.lk advertising, online ads sri lanka, web advertising sri lanka, banner ad placements sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Web Banner Advertising", url: "/web-banner-advertising-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Power Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Buzz Connect offers powerful <strong>web banner advertising services in Sri Lanka</strong>, helping businesses gain high visibility, attract targeted audiences, and generate quality leads through strategic online placements.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Our banner advertising campaigns are designed to deliver maximum exposure at a low cost, making them ideal for businesses looking to promote products, services, and special offers effectively.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          With integration through leading platforms like <strong>Findit.lk</strong>, we ensure your brand reaches a large and active audience across Sri Lanka. Combine with our <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing</Link>, <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing</Link>, and <Link to="/social-media-marketing-sri-lanka" className="text-accent hover:underline font-semibold">social media marketing</Link> services for maximum impact.
        </p>
      </motion.div>

      {/* Banner Advertising Solutions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Solutions</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Banner Advertising Solutions in Sri Lanka
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Complete web banner advertising solutions tailored to your business needs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bannerServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-xl bg-card shadow-card border border-border hover:border-accent/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Banner Advertising is Effective */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          Why Web Banner Advertising is Effective
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Web banner advertising is one of the most effective ways to increase brand awareness and drive traffic in Sri Lanka.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-foreground font-medium">{b}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Findit.lk Integration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl gradient-hero text-primary-foreground"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Advertise with Findit.lk</h2>
        <p className="text-primary-foreground/80 mb-6">
          Buzz Connect enhances banner advertising through integration with <strong>Findit.lk</strong>, one of Sri Lanka's leading online promotion platforms. This allows your business to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {finditAdvantages.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-primary-foreground/90">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Multi-Channel Advantage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-card shadow-card border border-border"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Multi-Channel Advertising Advantage</h2>
        <p className="text-muted-foreground mb-6">
          We combine banner advertising with our full suite of digital marketing channels for maximum reach and conversions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Email marketing", path: "/email-marketing", icon: Mail },
            { label: "SMS marketing", path: "/sms-marketing", icon: Smartphone },
            { label: "WhatsApp marketing", path: "/whatsapp-marketing", icon: MessageSquare },
            { label: "Social media promotions", path: "/social-media-marketing-sri-lanka", icon: Globe },
          ].map((item) => (
            <Link key={item.path} to={item.path} className="flex items-center gap-3 group p-3 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium group-hover:text-accent transition-colors">{item.label}</span>
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4 italic">
          This ensures your campaign reaches customers across multiple channels, maximizing results.
        </p>
      </motion.div>

      {/* Creative Banner Design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-card shadow-card border border-border"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">Creative Banner Design</h2>
        <p className="text-muted-foreground mb-6">Our team creates high-quality banner designs that attract attention and drive clicks.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {designFeatures.map((ct) => (
            <div key={ct.title} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 border border-border">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center shrink-0">
                <ct.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{ct.title}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4 italic">
          Need professional designs? Check out our <Link to="/graphic-designing-in-sri-lanka" className="text-accent hover:underline font-semibold">graphic design services</Link>.
        </p>
      </motion.div>

      {/* Use Cases */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          Who Can Benefit from Web Banner Advertising?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {useCases.map((uc) => (
            <div key={uc.label} className="flex flex-col items-center gap-2 p-5 rounded-xl bg-card shadow-card border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <uc.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">{uc.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          How Our Banner Campaign Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {processSteps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center p-5 rounded-xl bg-card shadow-card border border-border relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full gradient-accent flex items-center justify-center text-xs font-bold text-primary">
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mt-3 mb-3">
                <step.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose + Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-card shadow-card border border-border"
        >
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">
            Why Choose Buzz Connect?
          </h2>
          <ul className="space-y-3">
            {whyChoose.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-card shadow-card border border-border"
        >
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">
            Results You Can Expect
          </h2>
          <ul className="space-y-3">
            {results.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-3xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          Frequently Asked Questions – Web Banner Advertising Sri Lanka
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <h3 className="flex items-start gap-2 font-heading font-semibold text-foreground mb-2">
                <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                {faq.q}
              </h3>
              <p className="text-muted-foreground text-sm pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 rounded-2xl gradient-hero text-primary-foreground"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Start Your Web Banner Advertising Campaign Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
          Promote your business with high-visibility banner ads in Sri Lanka. Contact Buzz Connect today and reach thousands of potential customers.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact-us">
            <button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">
              Get a Free Quote <ArrowRight className="inline w-4 h-4 ml-1" />
            </button>
          </Link>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20web%20banner%20advertising%20services." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-bold hover:bg-primary-foreground/10 transition-colors text-base">
              Chat on WhatsApp
            </button>
          </a>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/web-banner-advertising-sri-lanka" />
    </ServicePageLayout>
  );
};

export default WebBannerAdvertising;
