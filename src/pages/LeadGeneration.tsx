import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, Zap, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, GraduationCap, ShoppingCart, Building2, Home, Calendar, Rocket,
  Users, TrendingUp, DollarSign, ArrowRight, Search, Layers, Send, Settings,
  Eye, Award
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const services = [
  { icon: Mail, title: "Email Marketing Campaigns", desc: "Reach 350,000+ targeted contacts with professional email promotions and offers." },
  { icon: Smartphone, title: "SMS Marketing Campaigns", desc: "Instant alerts and engagement to 600,000+ mobile users across Sri Lanka." },
  { icon: MessageSquare, title: "WhatsApp Marketing Campaigns", desc: "Direct and personalized communication with high open and response rates." },
  { icon: Globe, title: "Landing Page Creation", desc: "High-converting landing pages designed to capture leads effectively." },
  { icon: Eye, title: "Banner Advertising Campaigns", desc: "Mass visibility and brand awareness through strategic online ad placements." },
  { icon: Target, title: "Database Targeting & Segmentation", desc: "Precision audience targeting to reach the right customers with the right message." },
];

const channels = [
  { icon: Mail, channel: "Email", action: "Detailed promotions & offers", color: "bg-blue-500/10 text-blue-600" },
  { icon: Smartphone, channel: "SMS", action: "Instant alerts and engagement", color: "bg-green-500/10 text-green-600" },
  { icon: MessageSquare, channel: "WhatsApp", action: "Direct & personalized communication", color: "bg-emerald-500/10 text-emerald-600" },
  { icon: Globe, channel: "Online Ads", action: "Mass visibility and awareness", color: "bg-purple-500/10 text-purple-600" },
];

const benefits = [
  "Generate high-quality leads",
  "Reach targeted audiences",
  "Increase sales and revenue",
  "Improve marketing efficiency",
  "Reduce customer acquisition cost",
  "Achieve faster results",
];

const useCases = [
  { icon: GraduationCap, label: "Education institutes promoting intakes" },
  { icon: Home, label: "Real estate companies" },
  { icon: ShoppingCart, label: "E-commerce businesses" },
  { icon: Building2, label: "Hotels and travel companies" },
  { icon: Calendar, label: "Event organizers" },
  { icon: Rocket, label: "SMEs and corporate businesses" },
];

const processSteps = [
  { icon: Target, title: "Identify Target Audience", desc: "Define your ideal customer profile and target segments" },
  { icon: Layers, title: "Choose Marketing Channels", desc: "Select the best channels: email, SMS, WhatsApp, or ads" },
  { icon: Send, title: "Launch Multi-Channel Campaigns", desc: "Execute coordinated campaigns across all selected channels" },
  { icon: Settings, title: "Capture & Manage Leads", desc: "Collect and organize leads for your sales team" },
  { icon: BarChart3, title: "Optimize for Better Results", desc: "Continuously improve campaigns based on performance data" },
];

const results = [
  "Increased inquiries and conversions",
  "Higher engagement rates",
  "Strong brand visibility",
  "Consistent lead flow",
  "Improved ROI",
];

const whyChoose = [
  "Proven multi-channel strategy",
  "Large and targeted databases",
  "Cost-effective solutions",
  "Fast campaign execution",
  "Experienced marketing team",
  "Integration with Findit.lk",
];

const faqs = [
  { q: "What is lead generation?", a: "Lead generation is the process of attracting potential customers and converting them into business opportunities through targeted marketing campaigns." },
  { q: "How does lead generation work?", a: "It uses marketing channels like email, SMS, WhatsApp, and online ads to reach and engage potential customers, capturing their interest and contact details." },
  { q: "Why is lead generation important?", a: "It helps businesses grow by generating new customers, increasing sales, and building a consistent pipeline of business opportunities." },
  { q: "What makes Buzz Connect different for lead generation?", a: "Our multi-channel approach combining email, SMS, WhatsApp marketing and Findit.lk integration delivers faster and more effective results than single-channel strategies." },
  { q: "How much does lead generation cost in Sri Lanka?", a: "Buzz Connect offers cost-effective lead generation packages starting from LKR 6,000. Contact us for a customized quote based on your business requirements." },
];

const LeadGeneration = () => {
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
      name: "Lead Generation Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Result-driven lead generation services in Sri Lanka using multi-channel marketing strategies including email, SMS, WhatsApp, and online advertising.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Lead Generation Sri Lanka"
      title="Lead Generation Sri Lanka – High-Quality Leads for Your Business Growth"
      subtitle="Attract, engage, and convert potential customers into real sales opportunities with Buzz Connect's multi-channel lead generation services."
    >
      <SEOHead
        title="Lead Generation Sri Lanka | Multi-Channel Lead Campaigns"
        description="No.1 lead generation company in Sri Lanka. Generate high-quality leads via email, SMS, WhatsApp & Findit.lk. Reach 1.2M+ contacts. 20,000+ successful campaigns. Get leads fast."
        canonical="/lead-generation-sri-lanka"
        keywords="lead generation sri lanka, lead generation services sri lanka, customer acquisition sri lanka, generate leads sri lanka, online lead generation colombo, digital marketing leads sri lanka, best lead generation company sri lanka, b2b leads sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Lead Generation", url: "/lead-generation-sri-lanka" },
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
          Buzz Connect provides result-driven <strong>lead generation services in Sri Lanka</strong>, helping businesses attract, engage, and convert potential customers into real sales opportunities.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Our advanced multi-channel approach combines <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing</Link>, <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp marketing</Link>, and <Link to="/online-advertising-sri-lanka" className="text-accent hover:underline font-semibold">online advertising</Link> to deliver high-quality leads at scale.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Whether you are a startup, SME, or corporate organization, our solutions are designed to generate consistent leads and maximize your return on investment.
        </p>
      </motion.div>

      {/* What is Lead Generation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">What is Lead Generation?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Lead generation is the process of attracting potential customers and capturing their interest in your products or services. In today's digital world, businesses in Sri Lanka rely on effective <strong>lead generation strategies</strong> to grow their customer base and increase revenue. A well-executed lead generation campaign connects your business with decision-makers who are actively looking for solutions you offer.
        </p>
      </motion.div>

      {/* Our Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Solutions</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Lead Generation Solutions in Sri Lanka
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We offer a complete range of lead generation services to drive real business results.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
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

      {/* Multi-Channel Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Approach</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Multi-Channel Lead Generation Strategy
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We maximize lead generation results by reaching customers across multiple touchpoints simultaneously.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.channel}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card shadow-card border border-border text-center"
            >
              <div className={`w-14 h-14 rounded-full ${ch.color} flex items-center justify-center mx-auto mb-4`}>
                <ch.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{ch.channel}</h3>
              <p className="text-sm text-muted-foreground">{ch.action}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-6 max-w-xl mx-auto text-sm">
          This ensures your campaign reaches customers across multiple touchpoints, increasing conversion rates and reducing <strong>customer acquisition costs in Sri Lanka</strong>.
        </p>
      </motion.div>

      {/* Findit.lk Advantage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl gradient-hero text-primary-foreground"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Amplify Leads with Findit.lk</h2>
        <p className="text-primary-foreground/80 mb-6">
          Our lead generation campaigns are enhanced through integration with <strong>Findit.lk</strong>, one of Sri Lanka's leading promotion platforms.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["Access to a large active audience", "High visibility for your offers", "Increased engagement and inquiries", "Better conversion opportunities"].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-primary-foreground/90">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          Benefits of Lead Generation Services in Sri Lanka
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-foreground font-medium">{b}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Use Cases */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          Who Needs Lead Generation?
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
          How Our Lead Generation Process Works
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
            Why Choose Buzz Connect for Lead Generation?
          </h2>
          <ul className="space-y-3">
            {whyChoose.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground italic">We focus on delivering real results, not just traffic.</p>
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
          Frequently Asked Questions – Lead Generation Sri Lanka
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
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Start Generating Leads Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
          Grow your business with powerful <strong>lead generation services in Sri Lanka</strong>. Contact Buzz Connect today and start getting high-quality leads.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact-us">
            <button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">
              Get a Free Quote <ArrowRight className="inline w-4 h-4 ml-1" />
            </button>
          </Link>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20lead%20generation%20services." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">
              Chat on WhatsApp
            </button>
          </a>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/lead-generation-sri-lanka" />
    </ServicePageLayout>
  );
};

export default LeadGeneration;
