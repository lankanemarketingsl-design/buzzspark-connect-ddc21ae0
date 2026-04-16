import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import {
  CheckCircle, Mail, Smartphone, MessageSquare, Layout, Share2,
  TrendingUp, HelpCircle, ArrowRight,
  GraduationCap, ShoppingCart, Building2, Home, Heart,
} from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

/* ── Ad Channels ── */
const adTypes = [
  {
    icon: MessageSquare,
    title: "WhatsApp Advertising",
    desc: "Direct communication with customers for instant engagement.",
    link: "/whatsapp-marketing",
  },
  {
    icon: Mail,
    title: "Email Advertising",
    desc: "Send promotional campaigns to a large audience efficiently.",
    link: "/email-marketing",
  },
  {
    icon: Smartphone,
    title: "SMS Advertising",
    desc: "Deliver time-sensitive messages with high open rates.",
    link: "/sms-marketing",
  },
  {
    icon: Layout,
    title: "Display Advertising",
    desc: "Increase brand visibility through banners and placements.",
    link: "/web-banner-advertising-sri-lanka",
  },
];

/* ── Strategy Steps ── */
const strategy = [
  { title: "Audience Targeting", desc: "Identify and segment your ideal audience." },
  { title: "Campaign Planning", desc: "Create a strategy tailored to your industry." },
  { title: "Creative Execution", desc: "Design engaging messages and visuals." },
  { title: "Multi-Channel Distribution", desc: "Launch across WhatsApp, SMS, email, and display." },
  { title: "Performance Optimization", desc: "Monitor results and optimize for better ROI." },
];

/* ── Benefits ── */
const benefits = [
  "Immediate reach",
  "Highly targeted campaigns",
  "Lower costs compared to traditional advertising",
  "Real-time analytics",
  "Scalable marketing solutions",
];

/* ── Results ── */
const results = [
  "Reach 500,000+ users",
  "Increase brand awareness",
  "Generate leads and inquiries",
  "Improve conversions",
];

/* ── Industries ── */
const industries = [
  { icon: GraduationCap, label: "Education", link: "/education-marketing-sri-lanka" },
  { icon: ShoppingCart, label: "Retail & e-commerce", link: "/fashion-marketing-sri-lanka" },
  { icon: Building2, label: "Restaurants", link: "/restaurant-marketing-sri-lanka" },
  { icon: Home, label: "Real estate", link: "/real-estate-marketing-sri-lanka" },
  { icon: Heart, label: "Service-based businesses", link: "/" },
];

/* ── FAQs ── */
const faqs = [
  { q: "What is online advertising?", a: "It is promoting businesses through digital platforms like WhatsApp, email, and SMS." },
  { q: "Is online advertising effective in Sri Lanka?", a: "Yes, it is one of the most effective and fastest-growing marketing methods." },
  { q: "How quickly can campaigns be launched?", a: "Most campaigns can be launched within 48 hours." },
  { q: "Can I target specific customers?", a: "Yes, campaigns can be targeted based on demographics, interests, and behavior." },
];

const OnlineAdvertising = () => {
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
      name: "Online Advertising in Sri Lanka",
      provider: {
        "@type": "Organization",
        name: "BuzzConnect",
        url: "https://buzzconnect.lk",
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Online advertising in Sri Lanka with WhatsApp, SMS & email campaigns. Reach targeted customers instantly and grow your business.",
      serviceType: "Online Advertising",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "5000",
        highPrice: "50000",
        priceCurrency: "LKR",
      },
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Online Advertising Sri Lanka"
      title="Online Advertising in Sri Lanka"
      subtitle="The fastest way for businesses to connect with their target audience through digital platforms."
    >
      <SEOHead
        title="Online Advertising Sri Lanka | Digital Advertising Solutions"
        description="Online advertising in Sri Lanka with WhatsApp, SMS & email campaigns. Reach targeted customers instantly and grow your business."
        canonical="/online-advertising-sri-lanka"
        keywords="online advertising sri lanka, digital advertising sri lanka, online marketing sri lanka, digital marketing sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Online Advertising Sri Lanka", url: "/online-advertising-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* ── Introduction ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          <strong>Online advertising in Sri Lanka</strong> is the fastest way for businesses to connect with their target audience. With the rise of smartphones and internet usage, digital platforms have become the most effective channel for advertising.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          BuzzConnect provides advanced online advertising solutions that help businesses reach large audiences quickly and efficiently using data-driven strategies.
        </p>
      </motion.div>

      {/* ── What is Online Advertising ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">What is Online Advertising?</h2>
        <p className="text-muted-foreground mb-4">
          Online advertising refers to promoting products and services through digital platforms such as messaging apps, email, and websites. It enables businesses to target specific audiences and track performance in real time.
        </p>
      </motion.div>

      {/* ── Key Online Advertising Channels ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Key Online Advertising Channels</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {adTypes.map((ad, i) => (
            <motion.div
              key={ad.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={ad.link}
                className="block h-full p-6 rounded-2xl bg-card border border-border shadow-card hover:border-accent/40 hover:shadow-lg transition-all group"
              >
                <ad.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{ad.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ad.desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm text-accent font-semibold">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Benefits ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">Benefits of Online Advertising in Sri Lanka</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {benefits.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Our Strategy ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Online Advertising Strategy</h2>
        <p className="text-muted-foreground mb-6">We follow a structured approach:</p>
        <div className="space-y-4">
          {strategy.map((step, i) => (
            <div key={step.title} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent font-bold text-sm">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Results You Can Expect ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Results You Can Expect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {results.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Industries ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Industries We Serve</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {industries.map((ind) => (
            <Link
              key={ind.label}
              to={ind.link}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all group"
            >
              <ind.icon className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-foreground text-sm font-medium">{ind.label}</span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ── Internal Link to Main Page ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-6 rounded-2xl bg-card border border-border shadow-card"
      >
        <h2 className="font-heading text-xl font-bold text-foreground mb-2">Complete Advertising Solutions</h2>
        <p className="text-muted-foreground">
          Looking for a broader approach? Explore our{" "}
          <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">
            Advertising in Sri Lanka
          </Link>{" "}
          services to combine online and multi-channel campaigns for maximum reach and effectiveness.
        </p>
      </motion.div>

      {/* ── FAQ ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">FAQs</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-5 rounded-xl bg-card shadow-card border border-border">
              <summary className="font-heading font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </motion.div>

      {/* ── Related Articles ── */}
      <RelatedArticles currentPath="/online-advertising-sri-lanka" max={4} />

      {/* ── Final CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 rounded-2xl gradient-hero"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
          Launch Your Online Advertising Campaign Today
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Reach thousands of potential customers and grow your business faster with BuzzConnect.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact-us"
            className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Get a Free Quote
          </Link>
          <a
            href="https://wa.me/94771437707?text=Hi%20BuzzConnect%2C%20I%27m%20interested%20in%20online%20advertising%20in%20Sri%20Lanka."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-primary-foreground/10 text-primary-foreground font-bold border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </ServicePageLayout>
  );
};

export default OnlineAdvertising;
