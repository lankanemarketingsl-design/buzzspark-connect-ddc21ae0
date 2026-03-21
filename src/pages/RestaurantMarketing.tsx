import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, ShoppingCart, Store, Coffee, UtensilsCrossed, Users, TrendingUp,
  ArrowRight, Send, Eye, Clock, MapPin, Tag
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import IndustryStatsBanner from "@/components/IndustryStatsBanner";

const services = [
  { icon: Smartphone, title: "SMS Daily Offers", desc: "Send daily deals, discounts, and promotions to 600,000+ mobile users instantly." },
  { icon: MessageSquare, title: "WhatsApp Menu & Promotions", desc: "Share menus, daily specials, and promotional offers directly via WhatsApp." },
  { icon: Mail, title: "Email Loyalty Campaigns", desc: "Build customer loyalty with targeted email campaigns featuring exclusive deals." },
  { icon: Globe, title: "Findit.lk Food Visibility", desc: "Get listed in Food & Supermarket categories on Findit.lk for local discovery." },
  { icon: Eye, title: "Social Media Campaigns", desc: "Visually stunning food campaigns across social media platforms." },
  { icon: Target, title: "Local Area Targeting", desc: "Reach customers within your delivery radius with precision geo-targeting." },
];

const channels = [
  { icon: Smartphone, channel: "SMS", action: "Daily offers & discounts", color: "bg-green-500/10 text-green-600" },
  { icon: MessageSquare, channel: "WhatsApp", action: "Menu + promotions", color: "bg-emerald-500/10 text-emerald-600" },
  { icon: Mail, channel: "Email", action: "Loyalty & special offers", color: "bg-blue-500/10 text-blue-600" },
  { icon: Globe, channel: "Findit.lk", action: "Food & Supermarket categories", color: "bg-purple-500/10 text-purple-600" },
];

const benefits = [
  "High-frequency campaigns",
  "Instant customer response",
  "Increased foot traffic",
  "Build repeat customers",
  "Cost-effective promotions",
  "Boost delivery orders",
];

const useCases = [
  { icon: UtensilsCrossed, label: "Restaurants & Cafes" },
  { icon: Coffee, label: "Coffee Shops & Bakeries" },
  { icon: ShoppingCart, label: "Supermarkets & Groceries" },
  { icon: Store, label: "Retail Stores" },
  { icon: Tag, label: "Fashion & Clothing" },
  { icon: MapPin, label: "Local Service Businesses" },
];

const processSteps = [
  { icon: Target, title: "Define Local Audience", desc: "Target by location, preferences, and buying behavior" },
  { icon: Smartphone, title: "Launch Daily Campaigns", desc: "High-frequency SMS & WhatsApp promotions" },
  { icon: Globe, title: "Activate Findit.lk Listing", desc: "Get visible in Food & Retail categories" },
  { icon: Send, title: "Drive Foot Traffic", desc: "Convert offers into store visits and orders" },
  { icon: BarChart3, title: "Track & Optimize", desc: "Monitor response rates and optimize campaigns" },
];

const whyChoose = [
  "High-frequency campaign expertise",
  "Local area targeting capabilities",
  "Integration with Findit.lk Food categories",
  "Same-day campaign execution",
  "Proven restaurant marketing results",
  "Affordable daily promotion packages",
];

const faqs = [
  { q: "What is restaurant marketing in Sri Lanka?", a: "Restaurant marketing involves promoting your food business, daily deals, and menu items to local customers through digital channels like SMS, WhatsApp, email, and directory listings." },
  { q: "How can SMS marketing help my restaurant?", a: "SMS has a 98% open rate and delivers instantly — perfect for daily deals, lunch specials, and time-sensitive promotions that drive immediate foot traffic." },
  { q: "Can you help with retail store marketing too?", a: "Yes, our multi-channel approach works for all retail businesses including supermarkets, fashion stores, and local service businesses." },
  { q: "How much does restaurant marketing cost?", a: "Buzz Connect offers restaurant marketing packages starting from LKR 5,000 per month. Contact us for a customized quote." },
  { q: "How quickly can campaigns go live?", a: "We can launch your campaign within hours of confirmation, making it perfect for same-day promotions and flash deals." },
];

const RestaurantMarketing = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Restaurant & Retail Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Multi-channel restaurant and retail marketing services in Sri Lanka combining SMS, WhatsApp, email, and Findit.lk visibility to drive foot traffic and sales.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Restaurant & Retail Marketing"
      title="Restaurant Marketing Sri Lanka – Drive Foot Traffic with Daily Promotions"
      subtitle="Boost your restaurant or retail store's sales with high-frequency SMS, WhatsApp, and email campaigns combined with Findit.lk Food category visibility."
    >
      <SEOHead
        title="Restaurant Marketing Sri Lanka | Retail Promotion Campaigns"
        description="No.1 restaurant marketing company in Sri Lanka. Drive foot traffic via SMS, WhatsApp & Findit.lk daily promotions. Retail marketing campaigns that deliver instant results."
        canonical="/restaurant-marketing-sri-lanka"
        keywords="restaurant marketing sri lanka, food promotion colombo, retail marketing sri lanka, restaurant advertising sri lanka, supermarket marketing, daily deals campaigns, food delivery marketing, restaurant sms marketing"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Restaurant Marketing", url: "/restaurant-marketing-sri-lanka" }]}
        jsonLd={jsonLd}
      />

      <IndustryStatsBanner
        icon={UtensilsCrossed}
        gradient="gradient-restaurant"
        tagline="Daily Promotion & Foot Traffic Campaigns"
        stats={[
          { value: "600K+", label: "Mobile Reach" },
          { value: "98%", label: "SMS Open Rate" },
          { value: "Same Day", label: "Campaign Launch" },
          { value: "5,000+", label: "Monthly Campaigns" },
        ]}
      />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">Buzz Connect delivers <strong>high-frequency restaurant and retail marketing campaigns in Sri Lanka</strong>, helping food businesses and retail stores drive daily foot traffic and boost sales.</p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">Our daily promotion strategy combines <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp marketing</Link>, and <strong>Findit.lk Food & Supermarket category visibility</strong> for instant customer response.</p>
        <p className="text-lg text-muted-foreground leading-relaxed">Whether you run a restaurant, cafe, supermarket, or retail store, our campaigns are designed to turn promotions into visits and orders.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Challenges in Restaurant & Retail Marketing</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">Food and retail businesses face intense local competition, low customer loyalty, and the need for constant promotional activity. Social media algorithms limit organic reach, and paid ads are increasingly expensive.</p>
        <p className="text-muted-foreground leading-relaxed"><strong>Buzz Connect's direct marketing approach</strong> bypasses these limitations by delivering your promotions directly to customers' phones — ensuring instant visibility and immediate response.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Solutions</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Restaurant & Retail Marketing Solutions</h2>
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
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Daily Promotion & Foot Traffic Strategy</h2>
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

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 p-8 rounded-2xl gradient-restaurant text-white relative overflow-hidden">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Findit.lk Food & Supermarket Advantage</h2>
        <p className="text-primary-foreground/80 mb-6">Get your business promoted in Findit.lk's <a href="https://www.findit.lk/promotions/food-and-drink" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Food & Drink</a> category for continuous local discovery by hungry customers.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["Local customer discovery", "High visibility in Food category", "Continuous daily promotion", "Drive repeat visits"].map((item) => (
            <div key={item} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-primary-foreground/90">{item}</span></div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Benefits of Restaurant Marketing with Buzz Connect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {benefits.map((b) => (<div key={b} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-foreground font-medium">{b}</span></div>))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Who Needs Restaurant & Retail Marketing?</h2>
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
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">How Our Restaurant Marketing Process Works</h2>
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
            {["Lunch special SMS blasts to office areas", "WhatsApp menu sharing for delivery orders", "Weekend promotion email campaigns", "Findit.lk Food category feature listing", "Flash sale SMS for retail stores"].map((item) => (
              <li key={item} className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-accent shrink-0" /><span className="text-muted-foreground">{item}</span></li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Frequently Asked Questions – Restaurant Marketing Sri Lanka</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <h3 className="flex items-start gap-2 font-heading font-semibold text-foreground mb-2"><HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />{faq.q}</h3>
              <p className="text-muted-foreground text-sm pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-restaurant text-white relative overflow-hidden">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Start Your Restaurant Marketing Campaign Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">Drive more customers to your door with <strong>multi-channel restaurant marketing in Sri Lanka</strong>. Contact Buzz Connect today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact-us"><button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">Get a Free Quote <ArrowRight className="inline w-4 h-4 ml-1" /></button></Link>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20restaurant%20marketing%20services." target="_blank" rel="noopener noreferrer"><button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">Chat on WhatsApp</button></a>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/restaurant-marketing-sri-lanka" />
    </ServicePageLayout>
  );
};

export default RestaurantMarketing;
