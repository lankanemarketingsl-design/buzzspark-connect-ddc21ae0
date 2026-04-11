import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Globe, Layout, Megaphone, TrendingUp, HelpCircle, GraduationCap, ShoppingCart, Building2, Home, Calendar, Rocket, Mail, Smartphone, MessageSquare, Share2 } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";

const finditPackages = [
  { item: "Image of Promotion Ad", impressions: "25,000+", price: "LKR 5,000", duration: "4 Weeks" },
  { item: "Popup Banner", impressions: "35,000+", price: "LKR 2,500", duration: "1 Week" },
  { item: "Featured Promotion", impressions: "200,000+", price: "LKR 5,000", duration: "4 Weeks" },
  { item: "Email Campaign", impressions: "350,000+", price: "LKR 4,000", duration: "4 Weeks" },
  { item: "Push Notification", impressions: "350,000+", price: "—", duration: "4 Weeks" },
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
    desc: "For those who are large enterprise, increase brand awareness and brand recognition, with featured Ads and website banners for the most demanded website for offers, discounts, and promotions. Provide effective email campaigns for 350,000 subscribers.",
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
  "Increased brand visibility across Sri Lanka",
  "More website traffic and customer inquiries",
  "Higher engagement rates from targeted campaigns",
  "Increased leads and conversions",
  "Better return on advertising investment",
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
  { q: "What is online advertising in Sri Lanka?", a: "Online advertising in Sri Lanka involves promoting your business through digital platforms like websites, banners, email campaigns, SMS, and social media to reach targeted audiences effectively." },
  { q: "How much does advertising in Sri Lanka cost?", a: "Advertising in Sri Lanka varies by channel. Banner ads start from LKR 5,000, email campaigns from LKR 4,000, and multi-channel combo packages from LKR 10,000. BuzzConnect offers flexible pricing for every budget." },
  { q: "Which is the best advertising company in Sri Lanka?", a: "BuzzConnect is the #1 direct marketing and advertising company in Sri Lanka, offering email, SMS, WhatsApp, and online advertising solutions with proven results for over 2,000 businesses." },
  { q: "What is Findit.lk?", a: "Findit.lk is a leading online promotion platform in Sri Lanka where businesses can advertise their products and services to thousands of active users searching for deals and offers." },
  { q: "How effective are banner ads for advertising in Sri Lanka?", a: "Banner ads are highly effective for advertising in Sri Lanka, especially on high-traffic platforms like Findit.lk. They provide continuous brand visibility and drive targeted traffic to your business." },
  { q: "What is multi-channel advertising?", a: "Multi-channel advertising combines email marketing, SMS campaigns, WhatsApp marketing, and online banner ads to reach your audience across multiple platforms for maximum impact." },
  { q: "Who can benefit from digital advertising in Sri Lanka?", a: "Any business from SMEs to large enterprises can benefit from digital advertising in Sri Lanka — including hotels, education institutes, real estate companies, restaurants, and retail businesses." },
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
      name: "Advertising in Sri Lanka",
      provider: {
        "@type": "Organization",
        name: "BuzzConnect",
        url: "https://buzzconnect.lk",
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Best online advertising, email, SMS & WhatsApp advertising solutions in Sri Lanka. Multi-channel digital advertising company with proven results.",
      serviceType: "Online Advertising",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "1000",
        highPrice: "50000",
        priceCurrency: "LKR",
      },
    },
  ], []);

  return (
    <ServicePageLayout
      badge="#1 Advertising Company Sri Lanka"
      title="Advertising in Sri Lanka"
      subtitle="BuzzConnect is the #1 direct marketing & advertising company in Sri Lanka. We offer powerful online, email, SMS & WhatsApp advertising solutions to grow your business fast. Reach millions of customers through multi-channel digital advertising campaigns."
    >
      <SEOHead
        title="Advertising in Sri Lanka | Best Online Advertising Company Sri Lanka"
        description="Looking for the best advertising in Sri Lanka? BuzzConnect offers powerful online, email, SMS & WhatsApp advertising solutions to grow your business fast."
        canonical="/online-advertising-sri-lanka"
        keywords="advertising in sri lanka, online advertising sri lanka, digital advertising sri lanka, advertising company sri lanka, best advertising company sri lanka, banner advertising sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Advertising in Sri Lanka", url: "/online-advertising-sri-lanka" },
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
          <strong>Advertising in Sri Lanka</strong> has evolved dramatically. Businesses that embrace <strong>digital advertising</strong> are reaching more customers, generating more leads, and growing faster than ever before. Whether you need <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing</Link>, <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS campaigns</Link>, or <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp marketing</Link>, BuzzConnect delivers results-driven <strong>online advertising in Sri Lanka</strong>.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          As the best <strong>advertising company in Sri Lanka</strong>, we combine Findit.lk integration with multi-channel campaigns to give your brand maximum exposure. Explore our complete <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">advertising in Sri Lanka</Link> solutions to see how we help businesses of all sizes generate quality leads and increase revenue through targeted <strong>digital advertising in Sri Lanka</strong>.
        </p>
        <p className="text-lg text-accent font-bold">
          🏆 #1 Direct Marketing & Advertising Company in Sri Lanka
        </p>
      </motion.div>

      {/* Online Advertising in Sri Lanka */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-8 h-8 text-accent" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Online Advertising in Sri Lanka</h2>
        </div>
        <p className="text-muted-foreground mb-4 max-w-4xl">
          <strong>Online advertising in Sri Lanka</strong> is the most effective way to reach your target audience. Through Findit.lk — one of Sri Lanka's leading online promotion platforms — your business gets premium visibility to thousands of users actively searching for products, services, and offers.
        </p>
        <p className="text-muted-foreground mb-4 max-w-4xl">
          Findit.lk promotions Directory with more than 1000 latest offers and discounts from Travel Agents, Banks, Credit Cards offers, Hotel Offers, Restaurant Promotions, Clothing Offers, Electronics, and Mobile Phones Deals, Food and Drink Promotions, Latest Events, Holiday Deals, and Education opportunities.
        </p>
        <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Why Advertise with Findit.lk?</h3>
        <ul className="space-y-2 mb-6 max-w-4xl">
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> No 1 Ranking in Google search for promotions in Sri Lanka, discounts in Sri Lanka, offers in Sri Lanka — reach local and global customers
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> 100% web traffic from people interested in promotions, discounts, and offers
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> 2000+ registered companies and 350,000+ subscribers database
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> 200,000+ monthly hits from people looking for offers and promotions
          </li>
          <li className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> Facebook fan page 22,000+ followers
          </li>
        </ul>
      </motion.div>

      {/* Email, SMS & WhatsApp Advertising */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Email, SMS & WhatsApp Advertising</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Beyond banner <strong>advertising in Sri Lanka</strong>, BuzzConnect supercharges your campaigns with direct marketing channels that deliver instant results:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <Link to="/email-marketing" className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border hover:border-accent/30 transition-colors">
            <Mail className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-foreground text-sm font-medium"><span className="text-foreground text-sm font-medium">Email Marketing — 350,000+ subscriber reach</span></span>
          </Link>
          <Link to="/sms-marketing" className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border hover:border-accent/30 transition-colors">
            <Smartphone className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-foreground text-sm font-medium">SMS Marketing — 90%+ open rates</span>
          </Link>
          <Link to="/whatsapp-marketing" className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border hover:border-accent/30 transition-colors">
            <MessageSquare className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-foreground text-sm font-medium">WhatsApp Marketing — Direct communication</span>
          </Link>
          <Link to="/social-media-marketing-sri-lanka" className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border hover:border-accent/30 transition-colors">
            <Share2 className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-foreground text-sm font-medium">Social Media — Brand awareness</span>
          </Link>
        </div>
        <p className="text-muted-foreground">
          This multi-channel approach to <strong>digital advertising in Sri Lanka</strong> ensures your campaign reaches both targeted and mass audiences for maximum ROI.
        </p>
      </motion.div>

      {/* Why Choose BuzzConnect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why Choose BuzzConnect for Advertising in Sri Lanka</h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-foreground">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> #1 direct marketing & <strong>advertising company in Sri Lanka</strong>
          </li>
          <li className="flex items-center gap-3 text-foreground">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> 2,000+ businesses trust our advertising solutions
          </li>
          <li className="flex items-center gap-3 text-foreground">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Multi-channel campaigns (Email + SMS + WhatsApp + Banners)
          </li>
          <li className="flex items-center gap-3 text-foreground">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Affordable packages starting from LKR 5,000
          </li>
          <li className="flex items-center gap-3 text-foreground">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Proven track record of high ROI for Sri Lankan businesses
          </li>
          {whyFindit.map((item) => (
            <li key={item} className="flex items-center gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground mt-4">
          BuzzConnect is the trusted <strong>advertising company in Sri Lanka</strong> for businesses that want real results from their <strong>digital advertising</strong> campaigns.
        </p>
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
        <p className="text-muted-foreground mb-4">Our banner <strong>advertising in Sri Lanka</strong> solutions on Findit.lk are designed to give your brand premium visibility and drive targeted traffic.</p>
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

      {/* Benefits of Advertising in Sri Lanka */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Benefits of Advertising in Sri Lanka</h2>
        <p className="text-muted-foreground mb-4">
          Investing in <strong>advertising in Sri Lanka</strong> gives your business a competitive edge. Here's what you gain:
        </p>
        <ul className="space-y-3">
          {expectedResults.map((r) => (
            <li key={r} className="flex items-center gap-3 text-foreground">
              <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" /> {r}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground mt-4">
          Businesses using BuzzConnect's <strong>online advertising in Sri Lanka</strong> consistently outperform competitors who rely solely on traditional marketing. Combined with <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead generation services</Link>, your advertising campaigns convert more prospects into paying customers.
        </p>
      </motion.div>

      {/* Multi-Channel Advertising Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Multi-Channel Advertising Strategy</h2>
        <p className="text-muted-foreground mb-4">
          The most effective <strong>advertising in Sri Lanka</strong> combines multiple channels for maximum reach. BuzzConnect's multi-channel strategy integrates:
        </p>
        <ul className="space-y-2 mb-4">
          {["Email campaigns reaching 350,000+ subscribers", "SMS blasts with 90%+ open rates", "WhatsApp marketing for direct engagement", "Findit.lk banner ads for premium visibility", "Social media advertising for brand awareness"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-foreground text-sm">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground">
          This integrated approach to <strong>digital advertising in Sri Lanka</strong> ensures your message reaches customers wherever they are — delivering better results than any single-channel campaign.
        </p>
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
        <p className="text-muted-foreground">Your promotions will be displayed to users actively looking for deals, increasing the chances of conversion through effective <strong>advertising in Sri Lanka</strong>.</p>
      </motion.div>

      {/* Combo Packages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Combined Web Advertising Packages</h2>
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

      {/* Use Cases */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Who Should Use Advertising in Sri Lanka?</h2>
        <p className="text-muted-foreground mb-6">Our <strong>online advertising in Sri Lanka</strong> solutions are ideal for:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.map((uc) => (
            <div key={uc.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border">
              <uc.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{uc.label}</span>
            </div>
          ))}
        </div>
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

      {/* Related Articles */}
      <RelatedArticles currentPath="/online-advertising-sri-lanka" max={4} />

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 rounded-2xl gradient-hero"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Start Your Advertising Campaign in Sri Lanka Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Join 2,000+ businesses that trust BuzzConnect — the #1 <strong>advertising company in Sri Lanka</strong>. Get high-visibility banner advertising, email campaigns, SMS blasts, and WhatsApp marketing to grow your business fast.
        </p>
        <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
          Get a Free Quote Today
        </a>
      </motion.div>
      <DigitalMarketingCTA variant="alt" />
    </ServicePageLayout>
  );
};

export default OnlineAdvertising;
