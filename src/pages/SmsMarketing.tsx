import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Users, Crown, Target, Briefcase, Smartphone, Zap, BarChart3, Globe, HelpCircle, GraduationCap, ShoppingCart, Building2, Home, Calendar, Rocket, Stethoscope } from "lucide-react";
import { useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import SmsHeroContent from "@/components/sms/SmsHeroContent";

const databases = [
  {
    icon: Users,
    title: "Corporate database for executive decisions",
    desc: "This is our general and most popular database, you can target majority of the Colombo based private sector organizations employees through this database. Subscribers: 300,000+ age between 18 and 65.",
    items: ["Executives & Officers", "Small business owners", "Managers", "General Managers", "Association members", "Gender - Male 80% & Female 20%"],
    pricing: "Pricing - 2 LKR for one message",
  },
  {
    icon: Crown,
    title: "VIP Database For Achievers",
    desc: "Our database has more than 50,000+ contacts in Colombo and greater colombo area, Age between 30 and 65 with majority being 80% Male and 20% Female.",
    items: ["Premium business leaders", "Multinational companies Directors", "CEOs", "Celebrities", "Sports personals", "Doctors", "Entrepreneurs", "Private sector high salary earning employees (Over 500,000 per month)", "Head of Government institutes"],
    pricing: "Pricing - 2.50 LKR for one message",
  },
  {
    icon: Target,
    title: "Marketing Database to Promote your business",
    desc: "This database consists of marketing fraternity professionals which attach to marketing related works. Our database has more than 200,000+ contacts in All Island.",
    items: ["Director marketing", "Marketing Managers", "Brand managers", "Advertising Managers", "Sales Managers", "DGM Marketing", "Marketing Executives", "Sales Executives"],
    pricing: "Pricing - 2 LKR for one message",
  },
  {
    icon: Briefcase,
    title: "HR Database to Promote your business",
    desc: "Human resources specialists are responsible for recruiting, screening, interviewing and placing workers. Our database has more than 25,000+ contacts in All Island.",
    items: ["HR Directors", "HR Managers", "Senior HR Managers", "Assistant HR Managers", "HR Executives", "Administrative managers", "Training Managers"],
    pricing: "Pricing - 2 LKR for one message",
  },
];

const districts = [
  { name: "Colombo", count: "500,000" }, { name: "Galle", count: "185,000" }, { name: "Kandy", count: "175,000" },
  { name: "Kurunegala", count: "150,000" }, { name: "Matara", count: "120,000" }, { name: "Gampaha", count: "115,000" },
  { name: "Hambantota", count: "85,000" }, { name: "Kalutara", count: "80,000" }, { name: "Nuwara Eliya", count: "60,000" },
  { name: "Polonnaruwa", count: "52,000" }, { name: "Matale", count: "50,000" }, { name: "Anuradhapura", count: "45,000" },
  { name: "Monaragala", count: "45,000" }, { name: "Ratnapura", count: "42,000" }, { name: "Kegalle", count: "42,000" },
  { name: "Badulla", count: "40,000" }, { name: "Batticaloa", count: "40,000" }, { name: "Mannar", count: "40,000" },
  { name: "Puttalam", count: "40,000" }, { name: "Kilinochchi", count: "35,000" }, { name: "Trincomalee", count: "31,000" },
  { name: "Jaffna", count: "31,000" }, { name: "Mullaitivu", count: "30,000" }, { name: "Vavuniya", count: "28,000" },
  { name: "Ampara", count: "15,000" }, { name: "Wattala", count: "10,000" },
];

const benefits = [
  "Instant message delivery",
  "High open and response rates",
  "Cost-effective marketing solution",
  "Target specific audiences",
  "Ideal for promotions and alerts",
  "Works on all mobile devices",
];

const processSteps = [
  { icon: Target, title: "Select Database", desc: "Select your target database" },
  { icon: Smartphone, title: "Create Message", desc: "Create your message content" },
  { icon: Zap, title: "Launch Campaign", desc: "Launch your SMS campaign and reach thousands instantly" },
  { icon: BarChart3, title: "Track Results", desc: "Track campaign performance" },
];

const useCases = [
  { icon: Building2, label: "Hotels & Travel" },
  { icon: GraduationCap, label: "Education Institutes" },
  { icon: Home, label: "Real Estate Companies" },
  { icon: Stethoscope, label: "Healthcare Providers" },
  { icon: ShoppingCart, label: "Retail Businesses" },
  { icon: Rocket, label: "SMEs and Corporate Businesses" },
];

const faqs = [
  { q: "What is SMS marketing in Sri Lanka?", a: "SMS marketing is a method of sending promotional or informational messages directly to customers' mobile phones." },
  { q: "How effective is SMS marketing?", a: "SMS marketing has one of the highest open rates, making it highly effective for promotions and alerts." },
  { q: "How many people can I reach?", a: "You can reach hundreds of thousands of targeted users across Sri Lanka using our databases." },
  { q: "What is the cost of SMS marketing?", a: "Pricing starts from as low as 2 LKR per message depending on the selected database." },
];

const SmsMarketing = () => {
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
      name: "SMS Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Best bulk SMS marketing services in Sri Lanka with 600,000+ reach.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="SMS Marketing Sri Lanka"
      title="SMS Marketing Sri Lanka – Bulk SMS Advertising with Targeted Databases"
      subtitle="Buzz Connect provides one of the most powerful SMS marketing services in Sri Lanka, enabling businesses to instantly reach thousands of customers with high-impact messaging."
    >
      <SEOHead
        title="SMS Marketing Sri Lanka | Bulk SMS to 600K+ from LKR 2"
        description="No.1 SMS marketing company in Sri Lanka. Reach 600,000+ contacts with targeted bulk SMS campaigns. Corporate, VIP & district-wise databases. From LKR 2 per SMS. Get instant results."
        canonical="/sms-marketing"
        keywords="sms marketing sri lanka, bulk sms sri lanka, sms advertising colombo, sms campaign sri lanka, targeted sms marketing, bulk sms service sri lanka, sms gateway sri lanka, cheap bulk sms sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "SMS Marketing", url: "/sms-marketing" },
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
          With access to one of the largest and most targeted <strong>SMS databases in Sri Lanka</strong>, we help businesses connect with the right audience, increase engagement, and generate leads at a low cost.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our <strong>bulk SMS marketing solutions</strong> are ideal for promotions, alerts, campaigns, and business communication, delivering fast and measurable results across all industries.
        </p>
      </motion.div>

      {/* Databases */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Our SMS Marketing Databases in Sri Lanka</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {databases.map((db, i) => (
            <motion.div
              key={db.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card shadow-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                  <db.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{db.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{db.desc}</p>
              <ul className="space-y-2 mb-4">
                {db.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="inline-block px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold text-sm">
                {db.pricing}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gender-wise Database */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Gender-wise Database</h2>
        <div className="flex justify-center gap-8">
          <div className="text-center p-6 rounded-xl bg-secondary/10 border border-secondary/20">
            <div className="text-2xl font-heading font-bold text-secondary">350,000+</div>
            <div className="text-sm text-muted-foreground">Male Subscribers</div>
            <div className="text-xs text-muted-foreground">Age - 18 - 65</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-accent/10 border border-accent/20">
            <div className="text-2xl font-heading font-bold text-accent">250,000+</div>
            <div className="text-sm text-muted-foreground">Female Subscribers</div>
            <div className="text-xs text-muted-foreground">Age - 18 - 65</div>
          </div>
        </div>
      </motion.div>

      {/* District Coverage */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">District-wise Database</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {districts.map((d) => (
            <div key={d.name} className="p-4 rounded-xl bg-card shadow-card border border-border text-center">
              <div className="font-heading font-bold text-accent text-lg">{d.count}</div>
              <div className="text-xs text-muted-foreground mt-1">{d.name}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why SMS Marketing is Effective */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why SMS Marketing is Effective in Sri Lanka</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          SMS marketing is one of the most powerful digital marketing channels in Sri Lanka due to its extremely high open rates and instant delivery. Unlike email or social media, SMS messages are typically read within minutes, making them ideal for time-sensitive promotions and direct communication.
        </p>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Businesses in Sri Lanka use SMS marketing to reach customers quickly, promote offers, and drive immediate responses.
        </p>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Benefits of SMS Marketing for Businesses</h3>
        <ul className="space-y-3">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {b}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">How Our SMS Marketing Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <div key={step.title} className="p-6 rounded-2xl bg-card shadow-card border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-accent mb-1 block">Step {i + 1}</span>
              <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
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
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Who Can Use SMS Marketing in Sri Lanka?</h2>
        <p className="text-muted-foreground mb-6">Our SMS marketing solutions are ideal for:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.map((uc) => (
            <div key={uc.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border">
              <uc.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{uc.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Findit.lk Advantage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Extended Reach with Integrated Advertising</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Buzz Connect enhances SMS campaigns with additional exposure through <strong>Findit.lk</strong>, one of Sri Lanka's leading promotion platforms. This ensures your campaign reaches both direct mobile users and a wider online audience, increasing visibility and engagement.
        </p>
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
          <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions – SMS Marketing Sri Lanka</h2>
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
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Start Your SMS Marketing Campaign Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Reach thousands of customers instantly with Buzz Connect's SMS marketing solutions in Sri Lanka. Contact us today and launch your campaign.
        </p>
        <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
          Contact Buzz Connect
        </a>
      </motion.div>
      <RelatedArticles currentPath="/sms-marketing" />
    </ServicePageLayout>
  );
};

export default SmsMarketing;
