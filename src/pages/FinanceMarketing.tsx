import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, Building2, CreditCard, Landmark, Users, TrendingUp,
  ArrowRight, Send, Eye, Shield, DollarSign, Briefcase
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const services = [
  { icon: Smartphone, title: "SMS Loan & Credit Offers", desc: "Send targeted loan, credit card, and insurance offers to 600,000+ mobile users." },
  { icon: Mail, title: "Email Financial Promotions", desc: "Deliver detailed financial product information to 350,000+ targeted contacts." },
  { icon: MessageSquare, title: "WhatsApp Lead Follow-ups", desc: "Enable instant lead qualification and follow-up through WhatsApp messaging." },
  { icon: Globe, title: "Findit.lk Finance Visibility", desc: "Get listed in Finance & Credit Card categories on Findit.lk for high-intent visibility." },
  { icon: Target, title: "VIP & Corporate Database", desc: "Access high-net-worth individuals and corporate decision-makers for premium targeting." },
  { icon: Eye, title: "Banner Campaigns", desc: "Promote financial products with professional banner advertising across top platforms." },
];

const channels = [
  { icon: Smartphone, channel: "SMS", action: "Loan & credit card offers", color: "bg-green-500/10 text-green-600" },
  { icon: Mail, channel: "Email", action: "Detailed financial promotions", color: "bg-blue-500/10 text-blue-600" },
  { icon: MessageSquare, channel: "WhatsApp", action: "Lead follow-ups & qualification", color: "bg-emerald-500/10 text-emerald-600" },
  { icon: Globe, channel: "Findit.lk", action: "Finance + Credit Card categories", color: "bg-purple-500/10 text-purple-600" },
];

const benefits = [
  "Access VIP & corporate database",
  "High-value lead generation",
  "Targeted audience reach",
  "Compliance-friendly messaging",
  "Fast campaign turnaround",
  "Measurable ROI tracking",
];

const useCases = [
  { icon: Landmark, label: "Banks & Financial Institutions" },
  { icon: CreditCard, label: "Credit Card Companies" },
  { icon: Shield, label: "Insurance Providers" },
  { icon: DollarSign, label: "Microfinance Companies" },
  { icon: Building2, label: "Leasing Companies" },
  { icon: Briefcase, label: "Investment Firms" },
];

const processSteps = [
  { icon: Target, title: "Define Financial Segments", desc: "Target by income level, profession, and financial needs" },
  { icon: Mail, title: "Launch Multi-Channel Campaign", desc: "Coordinate SMS, email & WhatsApp for maximum reach" },
  { icon: Globe, title: "Activate Findit.lk Listing", desc: "Get visible in Finance & Credit Card categories" },
  { icon: Send, title: "Capture High-Value Leads", desc: "Convert interest into qualified financial leads" },
  { icon: BarChart3, title: "Optimize & Report", desc: "Track performance and optimize for better results" },
];

const whyChoose = [
  "Access to VIP & corporate database",
  "Compliance-aware campaign execution",
  "Integration with Findit.lk Finance categories",
  "Fast campaign launch within 24 hours",
  "High-value lead generation expertise",
  "Dedicated financial campaign team",
];

const faqs = [
  { q: "What is finance marketing in Sri Lanka?", a: "Finance marketing involves promoting financial products like loans, credit cards, insurance, and investment opportunities to targeted audiences through digital marketing channels." },
  { q: "How can Buzz Connect help generate financial leads?", a: "We combine SMS offers, email promotions, WhatsApp follow-ups, and Findit.lk Finance category visibility to reach high-value prospects and generate qualified leads for financial institutions." },
  { q: "Can you target high-net-worth individuals?", a: "Yes, our VIP and corporate database allows precise targeting of high-net-worth individuals, business owners, and corporate decision-makers." },
  { q: "How much does financial marketing cost in Sri Lanka?", a: "Buzz Connect offers financial marketing packages starting from LKR 10,000. Contact us for a customized quote based on your requirements." },
  { q: "Is SMS marketing effective for financial products?", a: "Absolutely. SMS has a 98% open rate, making it ideal for time-sensitive offers like loan promotions, credit card deals, and insurance renewals." },
];

const FinanceMarketing = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Finance Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Multi-channel finance marketing services in Sri Lanka combining SMS, email, WhatsApp, and Findit.lk visibility to generate high-value financial leads.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Finance & Credit Card Marketing"
      title="Finance Marketing Sri Lanka – Generate High-Value Financial Leads"
      subtitle="Reach VIP clients, corporate executives, and targeted consumers with multi-channel financial marketing campaigns powered by Findit.lk."
    >
      <SEOHead
        title="Finance Marketing Sri Lanka | Credit Card & Loan Lead Generation"
        description="No.1 finance marketing company in Sri Lanka. Generate high-value leads for banks, credit cards & insurance via SMS, email, WhatsApp & Findit.lk. VIP database access."
        canonical="/finance-marketing-sri-lanka"
        keywords="finance marketing sri lanka, credit card marketing colombo, bank marketing sri lanka, insurance marketing sri lanka, financial lead generation, loan promotion sri lanka, financial advertising sri lanka"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Finance Marketing", url: "/finance-marketing-sri-lanka" }]}
        jsonLd={jsonLd}
      />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">Buzz Connect delivers <strong>high-value financial lead generation campaigns in Sri Lanka</strong>, helping banks, credit card companies, and insurance providers reach the right audience with targeted multi-channel promotions.</p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">Our strategy combines <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing</Link>, <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp marketing</Link>, and <strong>Findit.lk Finance & Credit Card category visibility</strong> to generate qualified leads.</p>
        <p className="text-lg text-muted-foreground leading-relaxed">Whether you're promoting credit cards, personal loans, insurance policies, or investment products, our campaigns deliver high-value leads with measurable ROI.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Challenges in Finance Marketing in Sri Lanka</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">Financial institutions face strict competition, regulatory constraints, and difficulty reaching high-value prospects. Traditional advertising is expensive and often reaches unqualified audiences.</p>
        <p className="text-muted-foreground leading-relaxed"><strong>Buzz Connect's targeted multi-channel approach</strong> solves this by reaching verified, high-income segments through direct channels with precise targeting capabilities.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Solutions</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Finance Marketing Solutions in Sri Lanka</h2>
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
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Multi-Channel Finance Marketing Strategy</h2>
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

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 p-8 rounded-2xl gradient-hero text-primary-foreground">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Findit.lk Finance & Credit Card Advantage</h2>
        <p className="text-primary-foreground/80 mb-6">Get your financial products promoted in Findit.lk's <strong>Finance</strong> and <strong>Credit Card</strong> categories for continuous visibility to high-intent prospects.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["Access to financial product seekers", "High visibility in Finance category", "Targeted credit card promotions", "Better qualified leads than ads"].map((item) => (
            <div key={item} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-primary-foreground/90">{item}</span></div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Benefits of Finance Marketing with Buzz Connect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {benefits.map((b) => (<div key={b} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-foreground font-medium">{b}</span></div>))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Who Needs Finance Marketing?</h2>
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
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">How Our Finance Marketing Process Works</h2>
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
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">Why Choose Buzz Connect for Finance Marketing?</h2>
          <ul className="space-y-3">{whyChoose.map((item) => (<li key={item} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-muted-foreground">{item}</span></li>))}</ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">Campaign Examples</h2>
          <ul className="space-y-3">
            {["Credit card offer SMS to 500K+ users", "Personal loan email campaigns to salaried professionals", "WhatsApp insurance renewal follow-ups", "Findit.lk Finance category promotions", "VIP investment opportunity campaigns"].map((item) => (
              <li key={item} className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-accent shrink-0" /><span className="text-muted-foreground">{item}</span></li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Frequently Asked Questions – Finance Marketing Sri Lanka</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <h3 className="flex items-start gap-2 font-heading font-semibold text-foreground mb-2"><HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />{faq.q}</h3>
              <p className="text-muted-foreground text-sm pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-hero text-primary-foreground">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Start Your Finance Marketing Campaign Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">Generate high-value financial leads with <strong>multi-channel finance marketing in Sri Lanka</strong>. Contact Buzz Connect today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact-us"><button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">Get a Free Quote <ArrowRight className="inline w-4 h-4 ml-1" /></button></Link>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20finance%20marketing%20services." target="_blank" rel="noopener noreferrer"><button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">Chat on WhatsApp</button></a>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/finance-marketing-sri-lanka" />
    </ServicePageLayout>
  );
};

export default FinanceMarketing;
