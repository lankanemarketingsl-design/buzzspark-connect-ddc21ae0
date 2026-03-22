import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, ShoppingBag, Shirt, Scissors, Sparkles, Users, TrendingUp,
  ArrowRight, Send, Eye, Tag, Star, Store, Rocket, Crown, RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import IndustryStatsBanner from "@/components/IndustryStatsBanner";
import FinditlkAdvantage from "@/components/FinditlkAdvantage";
import IndustryLogoCarousel from "@/components/IndustryLogoCarousel";

import nolimitLogo from "@/assets/clients/nolimit.jpg";
import crocodileLogo from "@/assets/clients/crocodile.png";
import shirtworksLogo from "@/assets/clients/shirtworks.png";
import emeraldLogo from "@/assets/clients/emerald.jpg";
import signatureLogo from "@/assets/clients/signature.jpg";
import odelLogo from "@/assets/clients/odel.jpg";
import mimosaLogo from "@/assets/clients/mimosa.png";
import swarnamahalLogo from "@/assets/clients/swarnamahal.jpg";
import vogueJewellersLogo from "@/assets/clients/vogue-jewellers.jpg";
import hameedialLogo from "@/assets/clients/hameedia.png";

const fashionClients = [
  { name: "NOLIMIT", logo: nolimitLogo },
  { name: "Crocodile", logo: crocodileLogo },
  { name: "SNX Shirtworks", logo: shirtworksLogo },
  { name: "Emerald", logo: emeraldLogo },
  { name: "Signature", logo: signatureLogo },
  { name: "ODEL", logo: odelLogo },
  { name: "Mimosa", logo: mimosaLogo },
  { name: "Swarnamahal Jewellers", logo: swarnamahalLogo },
  { name: "Vogue Jewellers", logo: vogueJewellersLogo },
  { name: "Hameedia", logo: hameedialLogo },
];

const services = [
  { icon: Smartphone, title: "SMS Flash Sale Alerts", desc: "Send flash sale alerts, new arrivals, and exclusive discounts to 600,000+ mobile users instantly." },
  { icon: MessageSquare, title: "WhatsApp Lookbook Sharing", desc: "Share new collections, styling tips, and exclusive previews directly via WhatsApp." },
  { icon: Mail, title: "Email Collection Launches", desc: "Promote seasonal collections, sale events, and loyalty offers to 350,000+ fashion-conscious contacts." },
  { icon: Globe, title: "Findit.lk Fashion Visibility", desc: "Get listed in Fashion & Clothing categories on Findit.lk for continuous shopper discovery." },
  { icon: Eye, title: "Visual Banner Campaigns", desc: "Showcase your latest styles with eye-catching banner advertising across top platforms." },
  { icon: Target, title: "Fashion Audience Targeting", desc: "Reach fashion-conscious shoppers, millennials, and trend followers with precision targeting." },
];

const channels = [
  { icon: Smartphone, channel: "SMS", action: "Flash sales & new arrivals", color: "bg-pink-500/10 text-pink-600" },
  { icon: MessageSquare, channel: "WhatsApp", action: "Lookbooks & exclusive previews", color: "bg-emerald-500/10 text-emerald-600" },
  { icon: Mail, channel: "Email", action: "Collection launches & loyalty", color: "bg-blue-500/10 text-blue-600" },
  { icon: Globe, channel: "Findit.lk", action: "Fashion & Clothing category", color: "bg-purple-500/10 text-purple-600" },
];

const benefits = [
  "Drive instant sales",
  "Build brand loyalty",
  "Promote new collections fast",
  "Increase store foot traffic",
  "Boost online orders",
  "Grow repeat customers",
];

const useCases = [
  { icon: Shirt, label: "Fashion Brands & Labels" },
  { icon: Store, label: "Clothing Retail Stores" },
  { icon: ShoppingBag, label: "Online Fashion Stores" },
  { icon: Sparkles, label: "Jewelry & Accessories" },
  { icon: Scissors, label: "Tailoring & Custom Wear" },
  { icon: Star, label: "Bridal & Occasion Wear" },
];

const processSteps = [
  { icon: Target, title: "Define Fashion Audience", desc: "Target by age, gender, style preferences, and shopping behavior" },
  { icon: Mail, title: "Launch Style Campaigns", desc: "Coordinate SMS alerts, email lookbooks & WhatsApp previews" },
  { icon: Globe, title: "Activate Findit.lk Listing", desc: "Get visible in Fashion & Clothing category" },
  { icon: Send, title: "Drive Sales & Visits", desc: "Convert fashion interest into purchases and store visits" },
  { icon: BarChart3, title: "Optimize & Scale", desc: "Track sales and optimize campaigns for peak seasons" },
];

const whyChoose = [
  "Proven fashion marketing strategies",
  "Access to fashion-conscious shopper database",
  "Integration with Findit.lk Fashion category",
  "Same-day campaign execution for flash sales",
  "Visual-first campaign approach",
  "Seasonal and trend-based targeting",
];

const faqs = [
  { q: "What is fashion marketing in Sri Lanka?", a: "Fashion marketing involves promoting clothing brands, collections, sales events, and fashion accessories to targeted shoppers through digital marketing channels like SMS, WhatsApp, email, and directory listings." },
  { q: "How can Buzz Connect help my fashion brand get more sales?", a: "We use a multi-channel approach combining SMS flash sale alerts, WhatsApp lookbook sharing, email collection launches, and Findit.lk Fashion category visibility to reach thousands of fashion shoppers and drive purchases." },
  { q: "Can you target specific fashion demographics?", a: "Yes, our database allows targeting by age group, gender, location, and shopping preferences — ensuring your campaigns reach the most relevant fashion-conscious audience." },
  { q: "How much does fashion marketing cost in Sri Lanka?", a: "Buzz Connect offers fashion marketing packages starting from LKR 5,000. Contact us for a customized quote based on your brand and target audience." },
  { q: "How quickly can I promote a flash sale?", a: "We can launch flash sale SMS and WhatsApp campaigns within hours of confirmation, making it perfect for time-sensitive promotions and seasonal sales." },
];

const FashionMarketing = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Fashion & Clothing Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Multi-channel fashion and clothing marketing services in Sri Lanka combining SMS, WhatsApp, email, and Findit.lk visibility to drive sales and brand awareness.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Fashion & Clothing Marketing"
      title="Fashion Marketing Sri Lanka – Drive Sales with Multi-Channel Style Campaigns"
      subtitle="Reach fashion-conscious shoppers through targeted SMS flash sales, WhatsApp lookbooks, email campaigns, and Findit.lk Fashion category visibility."
    >
      <SEOHead
        title="Fashion Marketing Sri Lanka | Clothing Brand Promotion Campaigns"
        description="No.1 fashion marketing company in Sri Lanka. Drive clothing sales via SMS, WhatsApp, email & Findit.lk. Reach fashion shoppers. Flash sale campaigns that deliver instant results."
        canonical="/fashion-marketing-sri-lanka"
        keywords="fashion marketing sri lanka, clothing promotion colombo, fashion advertising sri lanka, clothing brand marketing, fashion digital marketing, clothing sales campaigns, retail fashion marketing sri lanka, fashion sms marketing"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Fashion Marketing", url: "/fashion-marketing-sri-lanka" }]}
        jsonLd={jsonLd}
      />

      <IndustryStatsBanner
        icon={ShoppingBag}
        gradient="gradient-fashion"
        tagline="Flash Sale & Collection Launch Campaigns"
        stats={[
          { value: "600K+", label: "Mobile Reach" },
          { value: "350K+", label: "Email Database" },
          { value: "Instant", label: "Flash Sale Alerts" },
          { value: "98%", label: "SMS Open Rate" },
        ]}
      />

      <IndustryLogoCarousel
        title="Trusted by Leading Fashion & Lifestyle Brands"
        subtitle="We help Sri Lanka's top fashion and lifestyle brands drive sales and build loyalty"
        clients={fashionClients}
      />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">Buzz Connect delivers <strong>high-impact fashion and clothing marketing campaigns in Sri Lanka</strong>, helping fashion brands, clothing stores, and online retailers reach style-conscious shoppers through targeted multi-channel promotions.</p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">Our fashion marketing strategy combines <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp marketing</Link>, <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing</Link>, and <strong>Findit.lk Fashion & Clothing category visibility</strong> to drive sales and build brand loyalty.</p>
        <p className="text-lg text-muted-foreground leading-relaxed">Whether you're launching a new collection, running a flash sale, or building your brand presence, our campaigns are designed to turn fashion interest into purchases.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Challenges in Fashion Marketing in Sri Lanka</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">Sri Lanka's fashion industry is rapidly growing with both local and international brands competing for attention. Social media saturation, rising ad costs, and the fast-paced nature of fashion trends make traditional marketing difficult to keep up with.</p>
        <p className="text-muted-foreground leading-relaxed"><strong>Buzz Connect's direct marketing approach</strong> cuts through the noise by delivering your latest collections, sales, and promotions directly to fashion shoppers' phones — ensuring instant visibility and immediate action.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Solutions</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Fashion Marketing Solutions in Sri Lanka</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-xl bg-card shadow-card border border-border hover:border-accent/40 transition-all">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4"><s.icon className="w-6 h-6 text-primary" /></div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Campaign Strategy</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Multi-Channel Fashion Marketing Strategy</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {channels.map((ch, i) => (
            <motion.div key={ch.channel} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card shadow-card border border-border text-center">
              <div className={`w-14 h-14 rounded-full ${ch.color} flex items-center justify-center mx-auto mb-4`}><ch.icon className="w-7 h-7" /></div>
              <h3 className="font-heading font-bold text-foreground mb-1">{ch.channel}</h3>
              <p className="text-sm text-muted-foreground">{ch.action}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <FinditlkAdvantage
        title="Findit.lk Fashion & Clothing Advantage"
        description="Get your fashion brand promoted in Findit.lk's Fashion & Clothing category for continuous visibility to active fashion shoppers looking for the latest styles and deals."
        gradient="gradient-fashion"
        links={[
          { label: "Fashion & Clothing", url: "https://www.findit.lk/promotions/fashion-and-clothing" },
        ]}
        benefits={["Access to fashion-conscious shoppers", "High visibility in Fashion category", "Promote sales & new arrivals", "Better engagement than social ads"]}
      />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Benefits of Fashion Marketing with Buzz Connect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {benefits.map((b) => (<div key={b} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-foreground font-medium">{b}</span></div>))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Who Needs Fashion Marketing?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {useCases.map((uc) => (
            <div key={uc.label} className="flex flex-col items-center gap-2 p-5 rounded-xl bg-card shadow-card border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"><uc.icon className="w-6 h-6 text-secondary-foreground" /></div>
              <span className="text-sm font-medium text-foreground">{uc.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">How Our Fashion Marketing Process Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {processSteps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center p-5 rounded-xl bg-card shadow-card border border-border relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full gradient-accent flex items-center justify-center text-xs font-bold text-primary">{i + 1}</div>
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mt-3 mb-3"><step.icon className="w-6 h-6 text-secondary-foreground" /></div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">Why Choose Buzz Connect?</h2>
          <ul className="space-y-3">{whyChoose.map((item) => (<li key={item} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-muted-foreground">{item}</span></li>))}</ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">Campaign Examples</h2>
          <ul className="space-y-3">
            {["Flash sale SMS blast to 500K+ shoppers", "New collection WhatsApp lookbook preview", "Seasonal clearance email campaigns", "Findit.lk Fashion category featured listing", "Bridal wear promotion campaigns"].map((item) => (
              <li key={item} className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-accent shrink-0" /><span className="text-muted-foreground">{item}</span></li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Fashion Advertising Packages */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing Packages</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Fashion Marketing Packages with Remarketing</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Fashion customers don't buy the first time — they buy after seeing your brand multiple times.</p>
          <p className="text-accent font-semibold mt-3 max-w-2xl mx-auto">See → Interested → See offer → Buy. That's why remarketing is critical.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Brand Awareness */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Brand Awareness</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 14,900</p>
            <p className="text-xs text-muted-foreground mb-4">Best for small boutiques & new brands</p>
            <ul className="space-y-2 mb-4 flex-grow">
              {["1 Targeted Email Campaign (fashion audience)", "Featured listing in Findit 'Fashion & Clothing'", "7-day visibility boost", "🔁 Basic Remarketing (repeat exposure)", "Ad creative (product-focused visual)"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />{item}</li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Increase brand visibility & first-time buyers"</p>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Fashion%20Brand%20Awareness%20Package%20(LKR%2014%2C900).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* Sales Boost - Most Popular */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border-2 border-accent flex flex-col ring-2 ring-accent/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-xs font-bold">MOST POPULAR</div>
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Crown className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Sales Boost</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 39,900</p>
            <p className="text-xs text-muted-foreground mb-4">Drive consistent product sales</p>
            <ul className="space-y-2 mb-4 flex-grow">
              {["2–3 Targeted Email Campaigns (segmented)", "Premium Findit fashion placement", "Promotion campaigns (sales, new arrivals)", "🔁 Advanced Remarketing (multi-touch)", "Performance report"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />{item}</li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Drive consistent product sales"</p>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Fashion%20Sales%20Boost%20Package%20(LKR%2039%2C900).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* Trend Domination */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Trend Domination</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 89,900</p>
            <p className="text-xs text-muted-foreground mb-4">Maximize revenue & dominate fashion category</p>
            <ul className="space-y-2 mb-4 flex-grow">
              {["4–6 Email Campaigns (full funnel)", "Top ranking in Findit category", "🔁 Full Funnel Remarketing", "Custom promo / collection landing page", "Priority promotion during peak seasons"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />{item}</li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Maximize revenue & dominate fashion category"</p>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Fashion%20Trend%20Domination%20Package%20(LKR%2089%2C900).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Frequently Asked Questions – Fashion Marketing Sri Lanka</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <h3 className="flex items-start gap-2 font-heading font-semibold text-foreground mb-2"><HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />{faq.q}</h3>
              <p className="text-muted-foreground text-sm pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-fashion text-white relative overflow-hidden">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Start Your Fashion Marketing Campaign Today</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">Drive more sales with <strong>multi-channel fashion marketing in Sri Lanka</strong>. Contact Buzz Connect today and launch your next campaign.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact-us"><button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">Get a Free Quote <ArrowRight className="inline w-4 h-4 ml-1" /></button></Link>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20fashion%20marketing%20services." target="_blank" rel="noopener noreferrer"><button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">Chat on WhatsApp</button></a>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/fashion-marketing-sri-lanka" />
    </ServicePageLayout>
  );
};

export default FashionMarketing;
