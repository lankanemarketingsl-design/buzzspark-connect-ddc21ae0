import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Globe, Layout, Megaphone, TrendingUp, HelpCircle, GraduationCap, ShoppingCart, Building2, Home, Calendar, Rocket, Mail, Smartphone, MessageSquare, Share2 } from "lucide-react";
import { useMemo } from "react";
import SEOHead from "@/components/SEOHead";

const finditPackages = [
  { item: "Image of Promotion Ad", impressions: "25,000+", price: "LKR 1,000", duration: "4 Weeks" },
  { item: "Popup Banner", impressions: "35,000+", price: "LKR 2,500", duration: "1 Week" },
  { item: "Featured Promotion", impressions: "200,000+", price: "LKR 5,000", duration: "4 Weeks" },
  { item: "Email Campaign", impressions: "250,000+", price: "LKR 4,000", duration: "4 Weeks" },
  { item: "Push Notification", impressions: "250,000+", price: "—", duration: "4 Weeks" },
];

const comboPackages = [
  {
    name: "Package 1",
    impressions: "500,000",
    period: "2 Days",
    desc: "If you are a small business and you are interested in small rebranding then this is a perfect plan for you. Get results generating outcomes for a reasonable price. Increase your brand exposure by tapping all social media platforms.",
    features: ["Findit Popup", "Findit Featured", "Email Campaign", "Facebook Story / Post", "Instagram Story"],
  },
  {
    name: "Package 2",
    impressions: "750,000",
    period: "4 Days",
    desc: "For those who are large enterprise, increase brand awareness and brand recognition, with featured Ads and website banners for the most demanded website for offers, discounts, and promotions. Provide effective email campaigns for 250,000 subscribers.",
    features: ["Findit Popup", "Findit Featured", "Email Campaign", "Facebook Story / Post", "Instagram Story", "Sharing Social Media Promotions"],
  },
  {
    name: "Package 3",
    impressions: "1,000,000",
    period: "5 Days",
    desc: "For large enterprise who are interested in increasing brand awareness and brand recognition. Increase your brand visibility with a Featured Ad, a pop-up banner and the main banner for your business with a winning SMS marketing strategy. Get an effective email campaign and powerful results driven lead generation campaign.",
    features: ["Findit Popup", "Findit Featured", "2 Email Campaigns", "Push Notification", "SMS Campaign - 25,000", "Facebook Story / Post", "Instagram Story"],
  },
  {
    name: "Package 4",
    impressions: "1,200,000",
    period: "7 Days",
    desc: "Large enterprise can archive a winning enterprise marketing plan for large consumer markets as effectively as possible. We offer powerful SMS marketing strategy for a large audience of 75,000 subscribers and effective email campaigns. Guaranteeing quality lead generation campaigns.",
    features: ["Findit Popup", "Findit Featured", "3 Email Campaigns", "Push Notification", "SMS Campaign - 75,000", "Facebook Story / Post", "Instagram Story"],
  },
];

const bannerTypes = [
  "Homepage banner placements",
  "Category page banners",
  "Featured promotion banners",
  "Campaign-specific banners",
];

const bannerBenefits = [
  "High visibility across the platform",
  "Targeted audience reach",
  "Increased brand awareness",
  "Click-driven traffic to your business",
  "Continuous exposure throughout the campaign",
];

const whyFindit = [
  "One of Sri Lanka's largest promotion platforms",
  "High user intent (people actively searching)",
  "Wide category coverage",
  "Cost-effective advertising options",
  "Strong visibility for SMEs and large businesses",
];

const expectedResults = [
  "Increased brand visibility",
  "More website traffic",
  "Higher engagement rates",
  "Increased inquiries and leads",
  "Better return on investment",
];

const useCases = [
  { icon: GraduationCap, label: "Education institutes promoting intakes" },
  { icon: ShoppingCart, label: "E-commerce and retail businesses" },
  { icon: Building2, label: "Hotels and travel companies" },
  { icon: Home, label: "Real estate developers" },
  { icon: Calendar, label: "Event organizers" },
  { icon: Rocket, label: "SMEs and corporate brands" },
];

const faqs = [
  { q: "What is online advertising in Sri Lanka?", a: "Online advertising involves promoting your business through digital platforms like websites, banners, and promotional listings." },
  { q: "What is Findit.lk?", a: "Findit.lk is a leading online promotion platform in Sri Lanka where businesses can advertise their products and services." },
  { q: "How effective are banner ads?", a: "Banner ads are highly effective for increasing visibility and driving traffic when placed on high-traffic platforms like Findit.lk." },
  { q: "Who can advertise on Findit.lk?", a: "Any business, from SMEs to large companies, can use Findit.lk for promotions." },
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
      name: "Online Advertising Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Online advertising and banner campaigns on Findit.lk in Sri Lanka.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Online Advertising Sri Lanka"
      title="Online Advertising Sri Lanka – Banner Advertising & Promotions on Findit.lk"
      subtitle="Buzz Connect offers powerful online advertising services in Sri Lanka, specializing in high-visibility banner campaigns and promotions through Findit.lk — one of Sri Lanka's leading online advertising platforms."
    >
      <SEOHead
        title="Online Advertising Sri Lanka | Banner Ads & Web Promotions | Buzz Connect"
        description="Best online advertising Sri Lanka with banner campaigns on Findit.lk. Reach thousands with popup banners, featured ads & combo packages. Buzz Connect."
        canonical="/online-advertising-sri-lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Online Advertising", url: "/online-advertising-sri-lanka" },
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
          Our solutions are designed to help businesses reach a massive audience, increase brand awareness, and generate high-quality leads through cost-effective <strong>digital advertising</strong>.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          With <strong>Findit.lk integration</strong>, your brand gets maximum exposure to users actively searching for products, services, and offers.
        </p>
      </motion.div>

      {/* Advertise on Findit.lk */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-8 h-8 text-accent" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Advertise on Findit.lk – Sri Lanka's Leading Promotion Platform</h2>
        </div>
        <p className="text-muted-foreground mb-4 max-w-4xl">
          Findit.lk is one of the most popular online promotion directories in Sri Lanka, attracting thousands of users searching for deals, services, and business listings every day.
        </p>
        <p className="text-muted-foreground mb-4 max-w-4xl">
          Findit.lk promotions Directory with more than 1000 latest offers and discounts from Travel Agents, Banks, Credit Cards offers, Hotel Offers, Restaurant Promotions, Clothing Offers, Electronics, and Mobile Phones Deals, Food and Drink Promotions, Latest Events, Holiday Deals, and Education opportunities.
        </p>
        <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Why you advertise with Findit?</h3>
        <ul className="space-y-2 mb-6 max-w-4xl">
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> No 1 Ranking in google search for, promotions in Sri Lanka, discounts in Sri Lanka, offers in Sri Lanka. So you can reach local and globally customers.
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> 100% Web traffic only from people who are interested in promotions, Discounts and offers.
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> 2000+ registered companies and 250,000+ subscribers database who interested our promotions, discount and offers.
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> We have more 200,000 hits for the month people who are looking for offers and promotions and discounts.
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> Facebook fan page 22,000+
          </li>
        </ul>

        <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Findit.lk Packages</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-xl shadow-card border border-border overflow-hidden">
            <thead>
              <tr className="gradient-hero text-primary-foreground">
                <th className="text-left p-4 font-heading">Item</th>
                <th className="text-center p-4 font-heading">Impressions</th>
                <th className="text-center p-4 font-heading">Price</th>
                <th className="text-center p-4 font-heading">Duration</th>
              </tr>
            </thead>
            <tbody>
              {finditPackages.map((p, i) => (
                <tr key={p.item} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="p-4 text-sm text-foreground font-medium">{p.item}</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">{p.impressions}</td>
                  <td className="p-4 text-center text-sm font-semibold text-accent">{p.price}</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">{p.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Banner Advertising */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-4">
          <Layout className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Banner Advertising Campaigns in Sri Lanka</h2>
        </div>
        <p className="text-muted-foreground mb-4">Our banner advertising solutions on Findit.lk are designed to give your brand premium visibility.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Types of Banner Ads</h3>
            <ul className="space-y-2">
              {bannerTypes.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Benefits</h3>
            <ul className="space-y-2">
              {bannerBenefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Online Promotions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-4">
          <Megaphone className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Online Promotions & Offers</h2>
        </div>
        <p className="text-muted-foreground mb-4">Promote your:</p>
        <ul className="space-y-2 mb-4">
          {["Special offers", "Discounts", "Events", "New product launches", "Business services"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-foreground text-sm">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground">Your promotions will be displayed to users actively looking for deals, increasing the chances of conversion.</p>
      </motion.div>

      {/* Why Findit.lk */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why Choose Findit.lk for Online Advertising?</h2>
        <ul className="space-y-3">
          {whyFindit.map((item) => (
            <li key={item} className="flex items-center gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground mt-4">This makes Findit.lk one of the most effective platforms for <strong>online advertising in Sri Lanka</strong>.</p>
      </motion.div>

      {/* Combo Packages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Combined Web Ad Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comboPackages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card shadow-card border border-border"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold text-accent uppercase">{pkg.name}</div>
                <div className="text-xs text-muted-foreground">Period - {pkg.period}</div>
              </div>
              <div className="font-heading text-2xl font-bold text-foreground mb-3">{pkg.impressions} Impressions</div>
              <p className="text-sm text-muted-foreground mb-4">{pkg.desc}</p>
              <p className="text-sm text-foreground font-medium mb-2">We will provide a total solutions which includes,</p>
              <ul className="space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Integrated Advertising */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Integrated Advertising with Buzz Connect</h2>
        <p className="text-muted-foreground mb-4">In addition to Findit.lk banner advertising, Buzz Connect enhances your campaigns with:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Mail, label: "Email marketing" },
            { icon: Smartphone, label: "SMS marketing" },
            { icon: MessageSquare, label: "WhatsApp marketing" },
            { icon: Share2, label: "Social media exposure" },
          ].map((ch) => (
            <div key={ch.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border">
              <ch.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{ch.label}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-4">This multi-channel approach ensures your campaign reaches both targeted and mass audiences.</p>
      </motion.div>

      {/* Use Cases */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Who Should Use Online Advertising in Sri Lanka?</h2>
        <p className="text-muted-foreground mb-6">Our solutions are ideal for:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.map((uc) => (
            <div key={uc.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border">
              <uc.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{uc.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Results You Can Expect</h2>
        <ul className="space-y-3">
          {expectedResults.map((r) => (
            <li key={r} className="flex items-center gap-3 text-foreground">
              <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" /> {r}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions – Online Advertising Sri Lanka</h2>
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

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 rounded-2xl gradient-hero"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Start Your Online Advertising Campaign Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Promote your business with high-visibility banner advertising on Findit.lk. Contact Buzz Connect today and launch your campaign.
        </p>
        <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
          Contact Buzz Connect
        </a>
      </motion.div>
    </ServicePageLayout>
  );
};

export default OnlineAdvertising;
