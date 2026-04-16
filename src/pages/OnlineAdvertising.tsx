import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import {
  CheckCircle, Globe, Mail, Smartphone, MessageSquare, Layout,
  TrendingUp, HelpCircle, Zap, Target, BarChart3, ArrowRight,
} from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";

/* ── Channels ── */
const adChannels = [
  {
    icon: MessageSquare,
    title: "WhatsApp Marketing",
    desc: "Send targeted messages directly to users with high engagement rates and instant visibility.",
    link: "/whatsapp-marketing",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Promote your business to thousands of potential customers with personalized email campaigns.",
    link: "/email-marketing",
  },
  {
    icon: Smartphone,
    title: "SMS Marketing",
    desc: "Deliver quick promotional messages with extremely high open rates.",
    link: "/sms-marketing",
  },
  {
    icon: Layout,
    title: "Display Advertising",
    desc: "Showcase your brand through banners and featured placements across platforms.",
    link: "/web-banner-advertising-sri-lanka",
  },
];

/* ── Benefits ── */
const benefits = [
  "Fast execution and results",
  "Highly targeted audience reach",
  "Cost-effective campaigns",
  "Real-time performance tracking",
  "Scalable marketing solutions",
];

/* ── Strategy Steps ── */
const strategySteps = [
  "Audience targeting",
  "Campaign planning",
  "Creative development",
  "Multi-channel execution",
  "Performance tracking",
];

/* ── Results ── */
const expectedResults = [
  "Reach up to 500,000+ users",
  "Increase brand awareness",
  "Generate leads and inquiries",
  "Boost sales and conversions",
];

/* ── Why BuzzConnect ── */
const whyBuzz = [
  "Expertise in multi-channel campaigns",
  "Proven track record",
  "Fast campaign deployment",
  "Data-driven strategies",
];

/* ── FAQs ── */
const faqs = [
  { q: "What is the best online advertising platform?", a: "It depends on your target audience, but WhatsApp, email, and SMS are highly effective in Sri Lanka for reaching large audiences quickly." },
  { q: "How quickly can campaigns be launched?", a: "Most campaigns can go live within 48 hours with BuzzConnect." },
  { q: "Is online advertising affordable?", a: "Yes, it is one of the most cost-effective marketing methods available. BuzzConnect offers flexible packages for every budget." },
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
      description: "Boost your business with online advertising in Sri Lanka. WhatsApp, email & SMS campaigns for fast reach and high conversions.",
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
      subtitle="Boost your business with online advertising in Sri Lanka. WhatsApp, email & SMS campaigns for fast reach and high conversions."
    >
      <SEOHead
        title="Online Advertising Sri Lanka | Digital Marketing & Campaign Solutions"
        description="Boost your business with online advertising in Sri Lanka. WhatsApp, email & SMS campaigns for fast reach and high conversions."
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
          <strong>Online advertising in Sri Lanka</strong> has become the most effective way to reach large audiences quickly and efficiently. With increasing internet and mobile usage, businesses can now connect directly with customers through targeted digital campaigns.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          BuzzConnect specializes in high-performance online advertising solutions designed to deliver <strong>instant reach and measurable results</strong>.
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
        <p className="text-muted-foreground">
          Online advertising refers to promoting products or services through digital platforms such as mobile, email, messaging apps, and websites. It allows businesses to reach specific audiences based on interests, behavior, and location.
        </p>
      </motion.div>

      {/* ── Channels ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Our Online Advertising Channels</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {adChannels.map((ch, i) => (
            <motion.div
              key={ch.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={ch.link}
                className="block h-full p-6 rounded-2xl bg-card border border-border shadow-card hover:border-accent/40 hover:shadow-lg transition-all group"
              >
                <ch.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{ch.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ch.desc}</p>
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
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">Benefits of Online Advertising in Sri Lanka</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Strategy</h2>
        <p className="text-muted-foreground mb-6">We follow a proven process to ensure maximum impact and ROI:</p>
        <div className="space-y-3">
          {strategySteps.map((step, i) => (
            <div key={step} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-bold text-sm">{i + 1}</span>
              </div>
              <span className="text-foreground font-medium">{step}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Results ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">Results You Can Expect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {expectedResults.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Why Choose BuzzConnect ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">Why Choose BuzzConnect for Online Advertising</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {whyBuzz.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Internal Link ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-6 rounded-2xl bg-card border border-border shadow-card"
      >
        <p className="text-muted-foreground">
          For complete solutions, explore our main{" "}
          <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">
            Advertising in Sri Lanka
          </Link>{" "}
          services to combine both online and offline strategies.
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
          Start Your Online Advertising Campaign Today
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Reach thousands of potential customers instantly with BuzzConnect's online advertising solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact-us"
            className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Get a Free Quote
          </Link>
          <a
            href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20online%20advertising%20in%20Sri%20Lanka."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-primary-foreground/10 text-primary-foreground font-bold border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
      <DigitalMarketingCTA variant="alt" />
    </ServicePageLayout>
  );
};

export default OnlineAdvertising;
