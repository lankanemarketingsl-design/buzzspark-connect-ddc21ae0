import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import {
  CheckCircle, Mail, Smartphone, MessageSquare, Globe, Layout,
  HelpCircle, ArrowRight, Zap, Target,
  GraduationCap, ShoppingCart, Shirt,
} from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

/* ── Types of Advertising ── */
const adTypes = [
  {
    icon: Globe,
    title: "Digital Advertising",
    desc: "Digital advertising is the fastest-growing form of advertising in Sri Lanka. It includes online platforms, mobile marketing, and targeted campaigns.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Advertising",
    desc: "Reach customers directly through personalized messages. WhatsApp advertising delivers high engagement and quick responses.",
    link: "/whatsapp-marketing",
  },
  {
    icon: Mail,
    title: "Email Advertising",
    desc: "Email campaigns allow businesses to communicate with thousands of customers efficiently while promoting offers and updates.",
    link: "/email-marketing",
  },
  {
    icon: Smartphone,
    title: "SMS Advertising",
    desc: "SMS marketing provides instant reach with extremely high open rates, making it ideal for promotions and alerts.",
    link: "/sms-marketing",
  },
  {
    icon: Layout,
    title: "Display & Banner Advertising",
    desc: "Banner ads and featured placements help increase brand awareness and visibility across platforms.",
    link: "/web-banner-advertising-sri-lanka",
  },
];

/* ── Why Advertising is Important ── */
const whyImportant = [
  "Growing online audience",
  "Increased competition across industries",
  "Need for fast brand awareness",
  "Demand for measurable marketing results",
];

/* ── Multi-Channel System ── */
const channels = [
  { label: "WhatsApp Campaigns", link: "/whatsapp-marketing" },
  { label: "Bulk Email Marketing", link: "/email-marketing" },
  { label: "SMS Campaigns", link: "/sms-marketing" },
  { label: "Display Advertising", link: "/web-banner-advertising-sri-lanka" },
  { label: "Findit.lk Promotions", link: "/online-advertising-sri-lanka" },
];

/* ── Case Studies ── */
const caseStudies = [
  {
    title: "Education Sector",
    desc: "A course provider reached thousands of students within days, generating a high number of inquiries.",
    icon: GraduationCap,
  },
  {
    title: "Restaurant Business",
    desc: "A restaurant increased orders through targeted SMS and WhatsApp promotions.",
    icon: ShoppingCart,
  },
  {
    title: "E-commerce Brand",
    desc: "An online store boosted sales using email marketing and remarketing campaigns.",
    icon: Shirt,
  },
];

/* ── Stats ── */
const stats = [
  { stat: "50M+", label: "Impressions Delivered" },
  { stat: "500+", label: "Campaigns Executed" },
  { stat: "100+", label: "Businesses Served" },
  { stat: "10+", label: "Years of Experience" },
];

/* ── Why Choose BuzzConnect ── */
const whyUs = [
  "Fast campaign execution (48–72 hours)",
  "Proven multi-channel strategy",
  "Affordable pricing",
  "Experienced marketing team",
  "Results-focused approach",
];

/* ── Packages ── */
const packages = [
  "Starter campaigns",
  "Multi-channel campaigns",
  "High-reach advertising solutions",
];

/* ── FAQs ── */
const faqs = [
  { q: "What is the best advertising method in Sri Lanka?", a: "Digital and multi-channel advertising provides the fastest and most effective results." },
  { q: "How much does advertising cost in Sri Lanka?", a: "Costs vary depending on the campaign size and channels used. BuzzConnect offers flexible packages to suit every budget." },
  { q: "How fast can I see results?", a: "Most campaigns generate results within 24–72 hours." },
];

const AdvertisingSriLanka = () => {
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
      name: "Advertising in Sri Lanka",
      provider: {
        "@type": "Organization",
        name: "BuzzConnect",
        url: "https://buzzconnect.lk",
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Advertising in Sri Lanka made easy. Reach 500,000+ customers with WhatsApp, SMS & email campaigns. Fast results within 48 hours.",
      serviceType: "Digital Advertising",
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
      badge="#1 Advertising Company in Sri Lanka"
      title="Advertising in Sri Lanka"
      subtitle="Reach 500,000+ customers with WhatsApp, SMS & email campaigns. Fast results within 48 hours."
    >
      <SEOHead
        title="Advertising in Sri Lanka | Best Advertising Company for Fast Results"
        description="Advertising in Sri Lanka made easy. Reach 500,000+ customers with WhatsApp, SMS & email campaigns. Fast results within 48 hours."
        canonical="/advertising-sri-lanka"
        keywords="advertising sri lanka, advertising in sri lanka, best advertising company sri lanka, digital advertising sri lanka, online advertising sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Advertising Sri Lanka", url: "/advertising-sri-lanka" },
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
          <strong>Advertising in Sri Lanka</strong> has become essential for businesses looking to grow quickly in a competitive market. With increasing digital adoption and mobile usage, companies now require smarter, faster, and more targeted advertising strategies to reach their ideal customers.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          BuzzConnect is a leading <strong>advertising company in Sri Lanka</strong>, offering powerful multi-channel campaigns that combine WhatsApp, SMS, email, and online advertising to deliver massive reach and real results. Our campaigns can reach over <strong>500,000+ potential customers</strong> within just a few days.
        </p>
      </motion.div>

      {/* ── What is Advertising in Sri Lanka ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">What is Advertising in Sri Lanka?</h2>
        <p className="text-muted-foreground mb-4">
          Advertising in Sri Lanka includes both traditional and digital methods used by businesses to promote products and services. While traditional advertising still exists, modern businesses rely heavily on digital and mobile-based platforms for faster and more measurable results.
        </p>
        <p className="text-muted-foreground">
          Today, successful advertising strategies focus on reaching the right audience at the right time using multiple channels.
        </p>
      </motion.div>

      {/* ── Types of Advertising ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Types of Advertising in Sri Lanka</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adTypes.map((ad, i) => {
            const content = (
              <>
                <ad.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{ad.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ad.desc}</p>
                {ad.link && (
                  <span className="inline-flex items-center gap-1 mt-4 text-sm text-accent font-semibold">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </>
            );
            return (
              <motion.div
                key={ad.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {ad.link ? (
                  <Link to={ad.link} className="block h-full p-6 rounded-2xl bg-card border border-border shadow-card hover:border-accent/40 hover:shadow-lg transition-all group">
                    {content}
                  </Link>
                ) : (
                  <div className="block h-full p-6 rounded-2xl bg-card border border-border shadow-card group">
                    {content}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ── Why Advertising is Important ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">Why Advertising is Important for Businesses in Sri Lanka</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {whyImportant.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground">
          Businesses that invest in advertising gain a significant advantage in reaching and converting customers.
        </p>
      </motion.div>

      {/* ── Multi-Channel Advertising System ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Multi-Channel Advertising System</h2>
        <p className="text-muted-foreground mb-6">
          At BuzzConnect, we combine multiple advertising channels into one powerful system:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {channels.map((ch) => (
            <Link
              key={ch.label}
              to={ch.link}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all group"
            >
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{ch.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
        <p className="text-muted-foreground mt-6">
          This multi-channel approach ensures <strong>repeated exposure</strong>, higher engagement, and better conversion rates.
        </p>
      </motion.div>

      {/* ── Real Campaign Results ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Real Campaign Results</h2>
        <p className="text-muted-foreground mb-6">We focus on delivering measurable results:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-foreground text-sm">Reach over 500,000+ users per campaign</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-foreground text-sm">50M+ impressions delivered</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-foreground text-sm">500+ successful campaigns</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-foreground text-sm">High engagement within 24–72 hours</span>
          </div>
        </div>
      </motion.div>

      {/* ── Case Studies ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Case Studies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card"
            >
              <cs.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{cs.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cs.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Why Choose BuzzConnect ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Why Choose BuzzConnect as Your Advertising Company in Sri Lanka</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card text-center"
            >
              <div className="font-heading text-3xl font-bold text-accent mb-1">{item.stat}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-primary/5 border border-primary/20">
          <div className="space-y-3">
            {whyUs.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Advertising Packages ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Advertising Packages</h2>
        <p className="text-muted-foreground mb-6">We offer flexible packages for businesses of all sizes:</p>
        <div className="space-y-3 mb-6">
          {packages.map((pkg) => (
            <div key={pkg} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground font-medium">{pkg}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground">
          <Link to="/contact-us" className="text-accent hover:underline font-semibold">Contact us</Link> to find the best plan for your business.
        </p>
      </motion.div>

      {/* ── Internal Link to Support Page ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-6 rounded-2xl bg-card border border-border shadow-card"
      >
        <h2 className="font-heading text-xl font-bold text-foreground mb-2">Online Advertising Solutions</h2>
        <p className="text-muted-foreground">
          Looking for digital-specific strategies? Explore our{" "}
          <Link to="/online-advertising-sri-lanka" className="text-accent hover:underline font-semibold">
            Online Advertising in Sri Lanka
          </Link>{" "}
          services for targeted digital campaigns across WhatsApp, SMS, email, and display platforms.
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
      <RelatedArticles currentPath="/advertising-sri-lanka" max={4} />

      {/* ── Final CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 rounded-2xl gradient-hero"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
          Start Your Advertising Campaign in Sri Lanka Today
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Reach thousands of customers and grow your business faster with BuzzConnect.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact-us"
            className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Get a Free Quote
          </Link>
          <a
            href="https://wa.me/94771437707?text=Hi%20BuzzConnect%2C%20I%27m%20interested%20in%20advertising%20in%20Sri%20Lanka."
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

export default AdvertisingSriLanka;
