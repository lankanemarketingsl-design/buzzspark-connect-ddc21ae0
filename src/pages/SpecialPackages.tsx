import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Mail, MessageSquare, Smartphone, Globe, Target, Zap, BarChart3, GraduationCap, Building2, ShoppingCart, Home, Calendar, Rocket, HelpCircle, Check, X, ArrowRight } from "lucide-react";
import { useMemo } from "react";
import SEOHead from "@/components/SEOHead";

const smsFeatures = [
  { label: "Total Reach", budget: "450,000", silver: "550,000", gold: "950,000", platinum: "1.2 Million+" },
  { label: "SMS Campaign", budget: "20,000", silver: "50,000", gold: "150,000", platinum: "400,000" },
  { label: "Email Campaign", budget: "350,000", silver: "350,000", gold: "2 Campaigns", platinum: "2 Campaigns" },
  { label: "Findit.lk Featured Ad", budget: true, silver: true, gold: true, platinum: true },
  { label: "Findit.lk Pop-Up Banner", budget: "1 Day", silver: "1 Day", gold: "2 Days", platinum: "4 Days" },
  { label: "Landing Page", budget: true, silver: true, gold: true, platinum: true },
  { label: "Findit.lk Main Banner", budget: false, silver: false, gold: "2 Weeks", platinum: "1 Month" },
  { label: "Findit.lk Side Banner", budget: false, silver: false, gold: "1 Week", platinum: "2 Weeks" },
  { label: "Facebook Boosting", budget: true, silver: true, gold: true, platinum: true },
];

const waFeatures = [
  { label: "Total Reach", budget: "450,000", silver: "550,000", gold: "575,000", platinum: "625,000" },
  { label: "WhatsApp Campaign", budget: "30,000", silver: "60,000", gold: "110,000", platinum: "175,000" },
  { label: "Email Campaign", budget: "350,000", silver: "350,000", gold: "2 Campaigns", platinum: "2 Campaigns" },
  { label: "Findit.lk Featured Ad", budget: true, silver: true, gold: true, platinum: true },
  { label: "Findit.lk Lifetime Profile", budget: false, silver: false, gold: true, platinum: true },
  { label: "Findit.lk Main Banner", budget: false, silver: "2 Weeks", gold: "3 Weeks + 2 Weeks", platinum: "1 Month" },
  { label: "Findit.lk Side Banner", budget: false, silver: false, gold: "1 Week", platinum: "2 Weeks" },
  { label: "Findit.lk Pop-Up Banner", budget: "1 Day", silver: false, gold: false, platinum: false },
  { label: "Facebook Boosting", budget: true, silver: true, gold: true, platinum: true },
];

type FeatureRow = { label: string; budget: string | boolean; silver: string | boolean; gold: string | boolean; platinum: string | boolean };

const tierLabels = ["Budget", "Silver", "Gold", "Platinum"];
const tierKeys = ["budget", "silver", "gold", "platinum"] as const;

const CellValue = ({ value }: { value: string | boolean }) => {
  if (value === true) return <Check className="w-4 h-4 text-emerald-500 mx-auto" />;
  if (value === false) return <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
  return <span className="text-xs sm:text-sm font-medium text-foreground">{value}</span>;
};

const ComparisonTable = ({ title, subtitle, features, emoji }: { title: string; subtitle: string; features: typeof smsFeatures; emoji: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="mb-6">
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
        <span>{emoji}</span> {title}
      </h3>
      <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
    </div>

    <div className="rounded-2xl overflow-hidden border border-border shadow-card">
      {/* Header */}
      <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] bg-muted/50">
        <div className="p-3 sm:p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Features</div>
        {tierLabels.map((tier, i) => (
          <div
            key={tier}
            className={`p-3 sm:p-4 text-center text-xs font-bold uppercase tracking-wider ${
              i === 3 ? "bg-accent text-primary" : "text-muted-foreground"
            }`}
          >
            {tier}
          </div>
        ))}
      </div>

      {/* Rows */}
      {features.map((row, i) => (
        <div
          key={row.label}
          className={`grid grid-cols-[1.4fr_repeat(4,1fr)] border-t border-border ${
            i % 2 === 0 ? "bg-card" : "bg-muted/20"
          } hover:bg-muted/40 transition-colors`}
        >
          <div className="p-3 sm:p-4 text-xs sm:text-sm font-medium text-foreground flex items-center">
            {row.label}
          </div>
          {tierKeys.map((key, ti) => (
            <div
              key={key}
              className={`p-3 sm:p-4 flex items-center justify-center text-center ${
                ti === 3 ? "bg-accent/5 border-x border-accent/10" : ""
              }`}
            >
              <CellValue value={row[key]} />
            </div>
          ))}
        </div>
      ))}
    </div>

    {/* CTA under table */}
    <div className="mt-6 text-center">
      <a
        href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20multi-channel%20marketing%20packages."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-primary font-bold text-sm hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/25 hover:scale-105"
      >
        Get Started on WhatsApp
        <ArrowRight className="w-4 h-4" />
      </a>
      <p className="text-muted-foreground text-xs mt-2">Fast response · Quick campaign launch</p>
    </div>
  </motion.div>
);

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
          Run high-impact campaigns across SMS, Email, WhatsApp &amp; Findit.lk with fully managed execution by Buzz Connect.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our packages are designed to deliver <strong>maximum reach, strong visibility, and measurable results</strong> within a short period of time.
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

      {/* Packages - Comparison Tables */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Compare & Choose</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Our Multi-Channel Advertising Packages in Sri Lanka
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Run high-impact campaigns across SMS, Email, WhatsApp &amp; Findit.lk with fully managed execution by Buzz Connect.
          </p>
        </div>

        <ComparisonTable
          title="SMS Marketing Packages"
          subtitle="A cost-effective way to reach large audiences instantly"
          features={smsFeatures}
          emoji="📱"
        />

        <ComparisonTable
          title="WhatsApp Marketing Packages"
          subtitle="Engage customers directly with high open and response rates"
          features={waFeatures}
          emoji="💬"
        />
      </motion.div>

      {/* Need Help Choosing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-accent/10 border border-accent/20 text-center max-w-3xl mx-auto"
      >
        <h3 className="font-heading text-xl font-bold text-foreground mb-2">🚀 Need Help Choosing the Right Package?</h3>
        <p className="text-muted-foreground text-sm mb-4">Chat with our team and get a custom campaign recommendation instantly.</p>
        <a
          href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20need%20help%20choosing%20the%20right%20marketing%20package."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-primary font-bold text-sm hover:bg-accent/90 transition-all"
        >
          Chat on WhatsApp
          <ArrowRight className="w-4 h-4" />
        </a>
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
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Start Your Multi-Channel Campaign Today</h2>
        <p className="text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
          Promote your business through SMS, WhatsApp, Email &amp; Findit.lk and connect with thousands of potential customers across Sri Lanka.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/70 text-sm mb-6">
          <span className="flex items-center gap-1"><Check className="w-4 h-4 text-accent" /> Fast execution</span>
          <span className="flex items-center gap-1"><Check className="w-4 h-4 text-accent" /> Multi-channel reach</span>
          <span className="flex items-center gap-1"><Check className="w-4 h-4 text-accent" /> High visibility placements</span>
        </div>
        <a
          href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20start%20a%20multi-channel%20campaign."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-primary font-bold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/25 hover:scale-105"
        >
          Get Started with Buzz Connect
          <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-primary-foreground/50 text-xs mt-3">Start your campaign in 48–72 hours</p>
      </motion.div>
    </ServicePageLayout>
  );
};

export default SpecialPackages;
