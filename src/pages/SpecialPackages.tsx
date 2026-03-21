import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Mail, MessageSquare, Smartphone, Globe, Target, Zap, BarChart3, GraduationCap, Building2, ShoppingCart, Home, Calendar, Rocket, HelpCircle } from "lucide-react";
import { useMemo } from "react";
import SEOHead from "@/components/SEOHead";

const smsPackages = [
  {
    name: "Budget Package - SMS Marketing",
    reach: "Reach 450,000",
    items: ["SMS Campaign for 20,000 contacts", "Email Campaign for 350,000 subscribers", "Findit.lk feature Ad 50,000 hits for month for free", "Promotion landing page creation", "Findit.lk Pop up Banner for one day", "Facebook Boosting"],
  },
  {
    name: "Silver Package - SMS Marketing",
    reach: "Reach 550,000",
    items: ["SMS Campaign For 50,000 contacts", "Email campaign for 350,000 subscribers", "Findit.lk feature Ad 50,000 hits for month for free", "Findit.lk Pop - Up Banner for a One Day", "Promotion landing page creation", "Facebook Boosting"],
  },
  {
    name: "Gold Package - SMS Marketing",
    reach: "Reach 950,000",
    items: ["SMS Campaign For 150,000 contacts", "Two email campaign for 350,000 subscribers", "Findit.lk feature ad 50,000 hits for month for free", "Findit.lk Pop - Up Banner for a Two Days", "Promotion landing page creation", "Findit.lk Main Banner for two Weeks", "Findit.lk Side Banner for one week", "Facebook Boosting"],
  },
  {
    name: "Platinum Package - SMS Marketing",
    reach: "Reach 1.2 Million +",
    items: ["SMS Campaign For 400,000 contacts", "Two email campaign for 350,000 subscribers", "Findit.lk feature ad 50,000 hits for month for free", "Findit.lk Pop - Up Banner for a Four Days", "Findit.lk main banner Advertisement (One month for free)", "Promotion landing page creation", "Findit.lk Side Banner for two weeks", "Facebook boosting"],
  },
];

const waPackages = [
  {
    name: "Budget Package - WhatsApp",
    reach: "Reach 450,000",
    items: ["WhatsApp campaign for 30,000 contacts", "Email Campaign for 350,000 corporate database", "Findit.lk feature Ad 50,000 hits for month for free", "Findit.lk Pop up Banner for one day", "Facebook Boosting"],
  },
  {
    name: "Silver Package - WhatsApp",
    reach: "Reach 550,000",
    items: ["WhatsApp Campaign for 60,000 contacts", "Email campaign for 350,000 corporate database", "Findit.lk feature Ad 50,000 hits for month for free", "Findit.lk main banner Advertisement (2 weeks for free)", "Facebook Boosting"],
  },
  {
    name: "Gold Package - WhatsApp",
    reach: "Reach 575,000",
    items: ["WhatsApp campaign for 110,000 contacts", "Two email campaign for 350,000 corporate database", "Findit.lk life time Feature Profile", "Findit.lk feature ad 50,000 hits for month for free", "Findit.lk main banner Advertisement (3 Weeks for free)", "Findit.lk Main Banner for two Weeks", "Findit.lk Side Banner for one week", "Facebook Boosting"],
  },
  {
    name: "Platinum Package - WhatsApp",
    reach: "Reach 625,000",
    items: ["WhatsApp campaign for 175,000 contacts", "Two email campaign for 350,000 corporate database", "Findit.lk life time Feature Profile", "Findit.lk feature ad 50,000 hits for month for free", "Findit.lk main banner Advertisement (One month for free)", "Findit.lk Side Banner for two weeks", "Facebook boosting"],
  },
];

const benefits = [
  "Reach customers across multiple platforms",
  "Increase brand visibility and recall",
  "Improve engagement and response rates",
  "Deliver consistent messaging",
  "Maximize ROI with cost-effective campaigns",
  "Generate high-quality leads faster",
];

const channels = [
  { icon: Mail, title: "Email Marketing", desc: "Reach targeted inbox audiences" },
  { icon: Smartphone, title: "SMS Marketing", desc: "Deliver instant messages with high open rates" },
  { icon: MessageSquare, title: "WhatsApp Marketing", desc: "Engage customers in real-time" },
  { icon: Globe, title: "Findit.lk Integration", desc: "Expand reach to Sri Lanka's largest offer-seeking audience" },
];

const processSteps = [
  { icon: Target, title: "Audience Selection", desc: "Choose your target audience" },
  { icon: Zap, title: "Channel Strategy", desc: "Select email, SMS, WhatsApp, and web ads" },
  { icon: Rocket, title: "Campaign Launch", desc: "Run synchronized campaigns across channels" },
  { icon: BarChart3, title: "Performance Tracking", desc: "Measure engagement and results" },
];

const useCases = [
  { icon: GraduationCap, label: "Education institutes promoting student intakes" },
  { icon: ShoppingCart, label: "E-commerce and retail businesses" },
  { icon: Building2, label: "Hotels and travel companies" },
  { icon: Home, label: "Real estate and property developers" },
  { icon: Calendar, label: "Event promotions and exhibitions" },
  { icon: Rocket, label: "SMEs and corporate brands" },
];

const faqs = [
  { q: "What is multi channel marketing?", a: "It is a strategy that uses multiple platforms like email, SMS, WhatsApp, and web ads to reach customers." },
  { q: "Why is multi channel marketing effective in Sri Lanka?", a: "Because customers use multiple platforms daily, combining channels increases reach and engagement." },
  { q: "What makes Buzz Connect different?", a: "Buzz Connect combines targeted marketing with mass exposure using Findit.lk, offering maximum reach at a lower cost." },
  { q: "Which channels are included?", a: "Email marketing, SMS marketing, WhatsApp marketing, and web advertising." },
];

const PackageCard = ({ pkg, index }: { pkg: { name: string; reach: string; items: string[] }; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="p-6 rounded-2xl bg-card shadow-card border-2 border-border hover:shadow-card-hover transition-all"
  >
    <div className="text-sm font-semibold text-accent uppercase tracking-wider">{pkg.name}</div>
    <div className="font-heading text-3xl font-bold text-foreground mt-1">{pkg.reach}</div>
    <ul className="mt-5 space-y-2">
      {pkg.items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-foreground">
          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const SpecialPackages = () => {
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
  ], []);

  return (
    <ServicePageLayout
      badge="Multi Channel Marketing Sri Lanka"
      title="Multi Channel Marketing Sri Lanka – Integrated Email, SMS, WhatsApp & Web Advertising"
      subtitle="Buzz Connect offers the most advanced multi channel marketing solution in Sri Lanka, combining email marketing, SMS marketing, WhatsApp marketing, and web advertising into one powerful campaign strategy."
    >
      <SEOHead
        title="Multi-Channel Marketing Sri Lanka | Reach 1.2 Million+"
        description="No.1 multi-channel marketing in Sri Lanka. Combined email, SMS, WhatsApp & Findit.lk advertising packages. Reach 1.2 million+ customers. Budget to Platinum plans available."
        canonical="/multi-channel-marketing-sri-lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Multi Channel Marketing", url: "/multi-channel-marketing-sri-lanka" },
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
          Our integrated approach ensures your business reaches customers across multiple platforms simultaneously, increasing visibility, engagement, and conversions.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Powered by one of Sri Lanka's largest audience networks and enhanced by <strong>Findit.lk</strong>, our campaigns deliver unmatched reach and cost-effective results for businesses of all sizes.
        </p>
      </motion.div>

      {/* What is Multi Channel Marketing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What is Multi Channel Marketing?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Multi channel marketing is a strategy that uses multiple communication channels such as email, SMS, WhatsApp, and web platforms to reach customers. In Sri Lanka, this approach is becoming the most effective way to engage audiences because customers interact with brands across different platforms.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          By combining multiple channels into one campaign, businesses can maximize reach, reinforce messaging, and improve overall marketing performance.
        </p>
      </motion.div>

      {/* Why Buzz Connect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">Why Buzz Connect is the Best Multi Channel Marketing Provider in Sri Lanka</h2>
        <p className="text-muted-foreground text-center mb-8">Buzz Connect stands out by combining direct marketing channels with mass audience platforms.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((ch) => (
            <div key={ch.title} className="p-6 rounded-2xl bg-card shadow-card border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <ch.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{ch.title}</h3>
              <p className="text-sm text-muted-foreground">{ch.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-center mt-6">
          This combination ensures your campaign reaches both targeted and mass audiences, giving you <strong>maximum exposure at the lowest cost</strong>.
        </p>
      </motion.div>

      {/* Packages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Our Multi Channel Advertising Packages in Sri Lanka</h2>

        <h3 className="font-heading text-xl font-bold text-foreground mb-6">SMS Marketing Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {smsPackages.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} index={i} />
          ))}
        </div>

        <h3 className="font-heading text-xl font-bold text-foreground mb-6">WhatsApp Marketing Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {waPackages.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} index={i} />
          ))}
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Benefits of Multi Channel Marketing in Sri Lanka</h2>
        <ul className="space-y-3">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {b}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">How Our Multi Channel Campaign Works</h2>
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
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Who Should Use Multi Channel Marketing?</h2>
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

      {/* Findit.lk Advantage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Extended Reach with Findit.lk</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Buzz Connect integrates campaigns with <strong>Findit.lk</strong>, one of Sri Lanka's leading online promotion platforms, allowing businesses to reach a massive audience actively searching for deals and services.
        </p>
        <ul className="space-y-2">
          {["Higher visibility", "Longer exposure duration", "Better engagement rates", "Increased lead generation"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-foreground text-sm">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
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
          <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions – Multi Channel Marketing Sri Lanka</h2>
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
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Start Your Multi Channel Marketing Campaign Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Reach thousands of potential customers across Sri Lanka through a powerful multi-channel strategy. Contact Buzz Connect today and launch your campaign.
        </p>
        <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
          Contact Buzz Connect
        </a>
      </motion.div>
    </ServicePageLayout>
  );
};

export default SpecialPackages;
