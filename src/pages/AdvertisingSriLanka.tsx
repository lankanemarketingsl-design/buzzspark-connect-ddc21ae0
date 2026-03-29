import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import {
  CheckCircle, Globe, Mail, Smartphone, MessageSquare, Share2, Layout,
  TrendingUp, HelpCircle, Users, Shield, Zap, Target, BarChart3,
  GraduationCap, Building2, Home, ShoppingCart, Briefcase, Shirt,
  Star, ArrowRight,
} from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

/* ── Trust badges ── */
const trustBadges = [
  { icon: Users, label: "2,000+ Clients" },
  { icon: Shield, label: "100% Data Safe" },
  { icon: Zap, label: "24hr Campaign Launch" },
  { icon: TrendingUp, label: "Proven ROI" },
  { icon: Star, label: "10+ Years Trusted" },
];

/* ── Types of Advertising ── */
const adTypes = [
  {
    icon: Mail,
    title: "Email Advertising Sri Lanka",
    desc: "Reach 350,000+ corporate subscribers with targeted email campaigns. BuzzConnect's email advertising delivers the highest ROI in digital marketing — perfect for product launches, promotions, and brand awareness across Sri Lanka.",
    link: "/email-marketing",
  },
  {
    icon: Smartphone,
    title: "SMS Advertising Sri Lanka",
    desc: "With 90%+ open rates, SMS advertising in Sri Lanka is the fastest way to reach customers. Send bulk SMS campaigns to 600,000+ contacts for flash sales, appointment reminders, and time-sensitive offers.",
    link: "/sms-marketing",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Advertising Sri Lanka",
    desc: "WhatsApp is Sri Lanka's most-used messaging app. BuzzConnect's WhatsApp advertising lets you send rich media campaigns — images, videos, and documents — directly to thousands of potential customers.",
    link: "/whatsapp-marketing",
  },
  {
    icon: Share2,
    title: "Social Media Advertising Sri Lanka",
    desc: "Amplify your brand across Facebook, Instagram, and LinkedIn. Our social media advertising campaigns in Sri Lanka build awareness, drive engagement, and generate quality leads for your business.",
    link: "/social-media-marketing-sri-lanka",
  },
  {
    icon: Layout,
    title: "Display & Banner Advertising Sri Lanka",
    desc: "Premium banner placements on Findit.lk — one of Sri Lanka's highest-traffic promotion platforms. Get 200,000+ monthly impressions with homepage banners, popup ads, and featured promotion listings.",
    link: "/web-banner-advertising-sri-lanka",
  },
];

/* ── Why Choose Us ── */
const whyUs = [
  "Largest corporate email database in Sri Lanka (350,000+ subscribers)",
  "Multi-channel reach: Email + SMS + WhatsApp + Social + Banners",
  "Industry-specific audience targeting for maximum conversion",
  "Exclusive Findit.lk integration for premium ad placements",
  "Fast 24-hour campaign launch — no long setup times",
  "Affordable packages starting from just LKR 5,000",
  "10+ years of proven results for Sri Lankan businesses",
  "Dedicated campaign manager for every client",
];

/* ── Industries ── */
const industries = [
  { icon: Building2, label: "Hotel & Travel Advertising", link: "/hotel-marketing-sri-lanka" },
  { icon: GraduationCap, label: "Education Advertising", link: "/education-marketing-sri-lanka" },
  { icon: Briefcase, label: "Finance & Banking Advertising", link: "/finance-marketing-sri-lanka" },
  { icon: ShoppingCart, label: "Restaurant & Retail Advertising", link: "/restaurant-marketing-sri-lanka" },
  { icon: Home, label: "Real Estate Advertising", link: "/real-estate-marketing-sri-lanka" },
  { icon: Shirt, label: "Fashion & Clothing Advertising", link: "/fashion-marketing-sri-lanka" },
];


/* ── Case Studies ── */
const caseStudies = [
  { stat: "50,000+", label: "Students Reached in 3 Days", desc: "Education institute filled intake within one week using email + SMS combo campaign." },
  { stat: "200+", label: "Leads for Real Estate Project", desc: "Property developer generated 200+ qualified leads through targeted WhatsApp and email campaigns." },
  { stat: "3x", label: "ROI for Hotel Chain", desc: "Leading hotel chain tripled their direct bookings using our multi-channel advertising strategy." },
  { stat: "15,000+", label: "Restaurant Orders Generated", desc: "Fast food chain saw 15,000+ orders from a single SMS + social media advertising campaign." },
];

/* ── Comparison ── */
const comparisonRows = [
  { feature: "Multi-channel reach (Email + SMS + WhatsApp)", buzz: true, trad: false, gads: false },
  { feature: "Largest Sri Lankan email database", buzz: true, trad: false, gads: false },
  { feature: "Findit.lk integration", buzz: true, trad: false, gads: false },
  { feature: "Industry-specific targeting", buzz: true, trad: false, gads: true },
  { feature: "Campaign launch within 24 hours", buzz: true, trad: false, gads: true },
  { feature: "Packages from LKR 5,000", buzz: true, trad: false, gads: false },
  { feature: "Direct WhatsApp support", buzz: true, trad: false, gads: false },
  { feature: "Dedicated campaign manager", buzz: true, trad: true, gads: false },
  { feature: "Geo-targeted for Sri Lanka", buzz: true, trad: true, gads: true },
  { feature: "No minimum spend requirement", buzz: true, trad: false, gads: false },
];

/* ── FAQs ── */
const faqs = [
  { q: "What is the best advertising method in Sri Lanka?", a: "The best advertising method in Sri Lanka is multi-channel digital advertising combining email, SMS, WhatsApp, and online ads. BuzzConnect offers all these channels in one platform, giving businesses maximum reach and ROI." },
  { q: "How much does advertising cost in Sri Lanka?", a: "Advertising in Sri Lanka starts from as low as LKR 5,000 with BuzzConnect. Costs vary by channel — email campaigns from LKR 4,000, SMS campaigns from LKR 5,000, and multi-channel packages from LKR 15,000." },
  { q: "Which is the best advertising company in Sri Lanka?", a: "BuzzConnect is the #1 advertising company in Sri Lanka with 10+ years of experience, the largest corporate email database, and exclusive Findit.lk integration — trusted by over 2,000 businesses." },
  { q: "Is digital advertising better than traditional advertising in Sri Lanka?", a: "Yes, digital advertising in Sri Lanka offers better targeting, measurable results, and significantly lower costs compared to traditional advertising like newspapers and TV. BuzzConnect helps businesses reach their exact target audience." },
  { q: "Can I advertise to specific industries in Sri Lanka?", a: "Yes, BuzzConnect offers industry-specific targeting for hotels, education, finance, real estate, restaurants, and fashion businesses in Sri Lanka. Our database is segmented by industry for precise campaign delivery." },
  { q: "How fast can I launch an advertising campaign?", a: "BuzzConnect launches advertising campaigns within 24 hours. Simply share your creative material and target audience, and we'll have your campaign live across email, SMS, WhatsApp, or social media the next day." },
  { q: "What results can I expect from advertising in Sri Lanka?", a: "Businesses using BuzzConnect's advertising services typically see 3-5x ROI. Email campaigns reach 350,000+ subscribers, SMS campaigns achieve 90%+ open rates, and multi-channel campaigns generate hundreds of quality leads." },
  { q: "Does BuzzConnect offer social media advertising?", a: "Yes, BuzzConnect provides complete social media advertising services in Sri Lanka including Facebook, Instagram, and LinkedIn campaigns for brand awareness, engagement, and lead generation." },
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
      description: "Sri Lanka's #1 multi-channel advertising platform. Email, SMS, WhatsApp & social media advertising solutions with proven results.",
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
      badge="#1 Advertising Platform in Sri Lanka"
      title="Advertising in Sri Lanka – #1 Multi-Channel Advertising Platform"
      subtitle="Reach millions of Sri Lankan customers through targeted email, SMS, WhatsApp, social media & display advertising. BuzzConnect is trusted by 2,000+ businesses to deliver results-driven advertising campaigns with proven ROI."
    >
      <SEOHead
        title="Advertising Sri Lanka | Digital Advertising Solutions | BuzzConnect"
        description="Reach thousands of customers with targeted advertising in Sri Lanka. Email, SMS, WhatsApp & social media campaigns. Fast results with BuzzConnect."
        canonical="/advertising-sri-lanka"
        keywords="advertising sri lanka, digital advertising sri lanka, online advertising sri lanka, advertising company sri lanka, best advertising company sri lanka, email advertising sri lanka, sms advertising sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Advertising Sri Lanka", url: "/advertising-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* ── Trust Badges ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12 py-4 px-6 rounded-2xl bg-primary/5 border border-primary/10"
      >
        {trustBadges.map((b) => (
          <div key={b.label} className="flex items-center gap-2">
            <b.icon className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-semibold text-foreground">{b.label}</span>
          </div>
        ))}
      </motion.div>

      {/* ── 1. Keyword-Rich Intro ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Looking for the best <strong>advertising solutions in Sri Lanka</strong>? BuzzConnect offers targeted <strong>digital advertising</strong> including <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing</Link>, <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS campaigns</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp marketing</Link>, and <Link to="/social-media-marketing-sri-lanka" className="text-accent hover:underline font-semibold">social media campaigns</Link> to reach the right audience fast.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          As the #1 <strong>advertising company in Sri Lanka</strong>, we combine the power of <strong>online advertising</strong> with Sri Lanka's largest corporate database to deliver campaigns that generate real leads, real customers, and real revenue. Whether you're a startup or an enterprise, our <strong>advertising in Sri Lanka</strong> solutions are designed to maximize your ROI.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          With 10+ years of experience and 2,000+ satisfied clients, BuzzConnect is the trusted partner for businesses that want results from <strong>digital advertising in Sri Lanka</strong>. Our multi-channel approach ensures your message reaches customers through email, SMS, WhatsApp, social media, and premium banner placements on Findit.lk.
        </p>
      </motion.div>

      {/* ── 2. Types of Advertising ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Types of Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">BuzzConnect offers every major <strong>digital advertising</strong> channel to ensure your brand reaches the right audience at the right time.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* ── 3. Why Choose Us ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">Why Choose BuzzConnect for Advertising in Sri Lanka</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {whyUs.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-6">
          No other <strong>advertising company in Sri Lanka</strong> offers this combination of reach, targeting, speed, and affordability. BuzzConnect is the smart choice for businesses that demand results.
        </p>
      </motion.div>

      {/* ── 4. Industries We Serve ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Industries We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Specialized <strong>advertising in Sri Lanka</strong> for every major industry — with category-based targeting for maximum conversions.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
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

      {/* ── 5. Packages ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Advertising Packages</h2>
          <p className="text-muted-foreground">Flexible pricing for every budget. All packages include campaign setup and reporting.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-6 rounded-2xl border ${
                pkg.highlight
                  ? "bg-primary text-primary-foreground border-primary shadow-xl scale-[1.03]"
                  : "bg-card border-border shadow-card"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-heading text-lg font-bold mb-1">{pkg.name}</h3>
              <div className="text-2xl font-bold mb-1">{pkg.price}</div>
              <p className={`text-xs mb-4 ${pkg.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {pkg.reach} impressions
              </p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-accent" : "text-accent"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20advertising%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-2.5 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 ${
                  pkg.highlight
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── 6. Case Studies ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Proven Results</h2>
          <p className="text-muted-foreground">Real results from real <strong>advertising campaigns in Sri Lanka</strong> powered by BuzzConnect.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card text-center"
            >
              <div className="font-heading text-3xl font-bold text-accent mb-1">{cs.stat}</div>
              <div className="font-semibold text-foreground text-sm mb-2">{cs.label}</div>
              <p className="text-xs text-muted-foreground">{cs.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── 7. Comparison Table ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Why BuzzConnect is the Best Advertising Platform in Sri Lanka
          </h2>
          <p className="text-muted-foreground">See how we compare to traditional agencies, Facebook Ads, and Google Ads.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-foreground font-semibold">Feature</th>
                <th className="py-3 px-4 text-center font-bold text-accent">BuzzConnect</th>
                <th className="py-3 px-4 text-center text-muted-foreground">Traditional Agencies</th>
                <th className="py-3 px-4 text-center text-muted-foreground">Google / Facebook Ads</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">{row.feature}</td>
                  <td className="py-3 px-4 text-center">
                    {row.buzz ? <CheckCircle className="w-5 h-5 text-accent mx-auto" /> : <span className="text-muted-foreground">✕</span>}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.trad ? <CheckCircle className="w-5 h-5 text-accent mx-auto" /> : <span className="text-muted-foreground">✕</span>}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.gads ? <CheckCircle className="w-5 h-5 text-accent mx-auto" /> : <span className="text-muted-foreground">✕</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
          <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions – Advertising in Sri Lanka</h2>
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
          Join 2,000+ businesses that trust BuzzConnect — the #1 <strong>advertising company in Sri Lanka</strong>. Get multi-channel advertising that delivers real results.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact-us"
            className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Get a Free Quote Today
          </Link>
          <a
            href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20advertising%20in%20Sri%20Lanka."
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
