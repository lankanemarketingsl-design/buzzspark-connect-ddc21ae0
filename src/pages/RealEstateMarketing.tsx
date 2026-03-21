import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, Home, Building2, MapPin, Users, TrendingUp,
  ArrowRight, Send, Eye, Key, Landmark, DollarSign
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import IndustryStatsBanner from "@/components/IndustryStatsBanner";

const services = [
  { icon: Smartphone, title: "SMS Property Alerts", desc: "Send new property listings and price updates to 600,000+ targeted mobile users." },
  { icon: MessageSquare, title: "WhatsApp Buyer Inquiries", desc: "Enable instant property inquiries and virtual tour scheduling via WhatsApp." },
  { icon: Mail, title: "Email Brochures & Details", desc: "Deliver property brochures, floor plans, and detailed listings to 350,000+ contacts." },
  { icon: Globe, title: "Findit.lk Real Estate Visibility", desc: "Get listed in Real Estate categories on Findit.lk for high-intent buyer discovery." },
  { icon: Eye, title: "Banner Property Campaigns", desc: "Showcase premium properties with visually stunning banner advertising campaigns." },
  { icon: Target, title: "Investor & Buyer Database", desc: "Reach property investors, first-time buyers, and corporate clients with precision targeting." },
];

const channels = [
  { icon: Smartphone, channel: "SMS", action: "Property alerts & updates", color: "bg-green-500/10 text-green-600" },
  { icon: MessageSquare, channel: "WhatsApp", action: "Buyer inquiries & tours", color: "bg-emerald-500/10 text-emerald-600" },
  { icon: Mail, channel: "Email", action: "Brochures & detailed listings", color: "bg-blue-500/10 text-blue-600" },
  { icon: Globe, channel: "Findit.lk", action: "Real Estate category visibility", color: "bg-purple-500/10 text-purple-600" },
];

const benefits = [
  "High-ticket lead generation",
  "Long-term visibility",
  "Strong inquiry pipeline",
  "Reach property investors",
  "Fast listing promotion",
  "Measurable ROI tracking",
];

const useCases = [
  { icon: Building2, label: "Property Developers" },
  { icon: Home, label: "Real Estate Agencies" },
  { icon: Key, label: "Rental Property Managers" },
  { icon: Landmark, label: "Commercial Property" },
  { icon: MapPin, label: "Land Sales" },
  { icon: DollarSign, label: "Property Investment Firms" },
];

const processSteps = [
  { icon: Target, title: "Define Buyer Profiles", desc: "Target by budget, location preference, and property type" },
  { icon: Mail, title: "Launch Property Campaigns", desc: "Coordinate SMS alerts, email brochures & WhatsApp inquiries" },
  { icon: Globe, title: "Activate Findit.lk Listing", desc: "Get visible in Real Estate category" },
  { icon: Send, title: "Capture Buyer Inquiries", desc: "Convert interest into property viewings and offers" },
  { icon: BarChart3, title: "Optimize & Scale", desc: "Track leads and optimize for better conversion" },
];

const whyChoose = [
  "Access to property investor database",
  "High-ticket lead generation expertise",
  "Integration with Findit.lk Real Estate category",
  "Fast campaign execution for new listings",
  "Multi-channel reach for maximum exposure",
  "Dedicated real estate campaign team",
];

const faqs = [
  { q: "What is real estate marketing in Sri Lanka?", a: "Real estate marketing involves promoting properties, developments, and real estate services to potential buyers and investors through targeted digital marketing channels." },
  { q: "How can Buzz Connect help sell properties faster?", a: "We combine SMS property alerts, WhatsApp buyer inquiries, email brochures, and Findit.lk Real Estate category visibility to reach thousands of potential buyers simultaneously." },
  { q: "Can you target property investors specifically?", a: "Yes, our database includes property investors, high-net-worth individuals, and corporate buyers — allowing precise targeting for premium property listings." },
  { q: "How much does real estate marketing cost in Sri Lanka?", a: "Buzz Connect offers real estate marketing packages starting from LKR 8,000. Contact us for a customized quote based on your property portfolio." },
  { q: "How quickly can I start getting buyer inquiries?", a: "Most property campaigns start generating inquiries within 24-48 hours of launch, with sustained visibility through Findit.lk for weeks." },
];

const RealEstateMarketing = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Real Estate Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Multi-channel real estate marketing services in Sri Lanka combining SMS, WhatsApp, email, and Findit.lk visibility to generate property buyer leads.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Real Estate Marketing"
      title="Real Estate Marketing Sri Lanka – Generate Property Buyer Leads Fast"
      subtitle="Reach property buyers, investors, and renters through targeted SMS, WhatsApp, email campaigns and Findit.lk Real Estate category visibility."
    >
      <SEOHead
        title="Real Estate Marketing Sri Lanka | Property Lead Generation"
        description="No.1 real estate marketing company in Sri Lanka. Generate property buyer leads via SMS, WhatsApp, email & Findit.lk. Reach investors & buyers. Multi-channel property campaigns."
        canonical="/real-estate-marketing-sri-lanka"
        keywords="real estate marketing sri lanka, property marketing colombo, real estate advertising sri lanka, property lead generation, land sales marketing, property promotion sri lanka, real estate digital marketing, property buyer leads"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Real Estate Marketing", url: "/real-estate-marketing-sri-lanka" }]}
        jsonLd={jsonLd}
      />

      <IndustryStatsBanner
        icon={Building2}
        gradient="gradient-realestate"
        tagline="Property Lead Generation Campaigns"
        stats={[
          { value: "300K+", label: "Targeted Contacts" },
          { value: "High-Ticket", label: "Lead Quality" },
          { value: "Weeks", label: "Sustained Visibility" },
          { value: "48hrs", label: "First Inquiries" },
        ]}
      />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">Buzz Connect delivers <strong>high-impact real estate marketing campaigns in Sri Lanka</strong>, helping property developers, agencies, and landlords reach buyers and investors through targeted multi-channel promotions.</p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">Our property lead generation strategy combines <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp marketing</Link>, <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing</Link>, and <strong>Findit.lk Real Estate category visibility</strong> to generate qualified buyer inquiries.</p>
        <p className="text-lg text-muted-foreground leading-relaxed">Whether you're selling apartments, houses, commercial properties, or land, our campaigns are designed to build a strong inquiry pipeline and close deals faster.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Challenges in Real Estate Marketing in Sri Lanka</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">Sri Lanka's real estate market is highly competitive with numerous developers and agencies competing for a limited pool of serious buyers. Traditional marketing methods like newspaper ads and property expos are expensive and hard to measure.</p>
        <p className="text-muted-foreground leading-relaxed"><strong>Buzz Connect's multi-channel approach</strong> provides both instant reach through direct messaging and long-term visibility through Findit.lk — ensuring your properties stay visible to active buyers.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Solutions</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Real Estate Marketing Solutions in Sri Lanka</h2>
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
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Property Lead Generation Strategy</h2>
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

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 p-8 rounded-2xl gradient-realestate text-white relative overflow-hidden">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Findit.lk Real Estate Advantage</h2>
        <p className="text-primary-foreground/80 mb-6">Get your properties promoted in Findit.lk's <a href="https://www.findit.lk/promotions/real-estate" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Real Estate</a> category for continuous visibility to active property seekers.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["Access to active property seekers", "High visibility in Real Estate category", "Long-term listing promotion", "Better qualified leads than classifieds"].map((item) => (
            <div key={item} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-primary-foreground/90">{item}</span></div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Benefits of Real Estate Marketing with Buzz Connect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {benefits.map((b) => (<div key={b} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-foreground font-medium">{b}</span></div>))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Who Needs Real Estate Marketing?</h2>
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
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">How Our Real Estate Marketing Process Works</h2>
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
            {["New apartment launch SMS to 300K+ contacts", "WhatsApp virtual tour scheduling", "Property brochure email campaigns", "Findit.lk Real Estate featured listing", "Land sale alert campaigns to investors"].map((item) => (
              <li key={item} className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-accent shrink-0" /><span className="text-muted-foreground">{item}</span></li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Frequently Asked Questions – Real Estate Marketing Sri Lanka</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <h3 className="flex items-start gap-2 font-heading font-semibold text-foreground mb-2"><HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />{faq.q}</h3>
              <p className="text-muted-foreground text-sm pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-realestate text-white relative overflow-hidden">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Start Your Real Estate Marketing Campaign Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">Sell properties faster with <strong>multi-channel real estate marketing in Sri Lanka</strong>. Contact Buzz Connect today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact-us"><button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">Get a Free Quote <ArrowRight className="inline w-4 h-4 ml-1" /></button></Link>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20real%20estate%20marketing%20services." target="_blank" rel="noopener noreferrer"><button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">Chat on WhatsApp</button></a>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/real-estate-marketing-sri-lanka" />
    </ServicePageLayout>
  );
};

export default RealEstateMarketing;
