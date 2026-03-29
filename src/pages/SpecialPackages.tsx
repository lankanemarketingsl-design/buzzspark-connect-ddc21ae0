import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import {
  CheckCircle, Mail, MessageSquare, Smartphone, Globe, Target, Zap,
  BarChart3, GraduationCap, Building2, ShoppingCart, Home, Calendar,
  Rocket, HelpCircle, Check, X, ArrowRight, Clock, TrendingUp, Shield,
  Users, AlertTriangle, Shirt, Store, Star, Phone, Landmark,
  PartyPopper, RefreshCw, ChevronLeft, ChevronRight, Sparkles
} from "lucide-react";
import { useMemo, useState, useEffect, useCallback } from "react";
import SEOHead from "@/components/SEOHead";

/* ── Testimonials Data & Carousel ── */

const testimonials = [
  "We contacted them last minute for our outlet opening. Campaign started within a few hours. With SMS, WhatsApp and Findit.lk, we had a good crowd on the first day itself. People already knew about us.",
  "We used SMS and email together for a promotion. Reach was very good and inquiries started from day one. Also got extra visibility through Findit.lk.",
  "They handled SMS, email and WhatsApp campaigns for us. What we noticed is customers were already aware of our brand when they contacted. Multi-channel really works for quick awareness.",
  "We tried this for our course promotion. Within a few days we got a good number of student inquiries. Many said they saw our ad more than once, which helped them decide.",
  "One thing we liked is people saw our brand in multiple places — SMS, WhatsApp and Findit.lk. It created strong recall and better response.",
  "We have used other marketing before, but this worked faster. With SMS, email, WhatsApp and Findit.lk combined, we got visibility and inquiries in a short time.",
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative px-10 sm:px-14">
      <div className="overflow-hidden rounded-2xl">
        <div className="flex transition-transform duration-600 ease-[cubic-bezier(0.25,0.1,0.25,1)]" style={{ transform: `translateX(-${current * 100}%)` }}>
          {testimonials.map((quote, i) => (
            <div key={i} className="min-w-full px-2">
              <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-card via-card to-muted/20 border border-border shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.08)] text-center">
                <div className="flex justify-center gap-1 mb-5">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-[1.8] italic max-w-lg mx-auto">"{quote}"</p>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="w-8 h-[1px] bg-border" />
                  <p className="text-xs font-semibold text-foreground tracking-wide uppercase">Valued Client</p>
                  <div className="w-8 h-[1px] bg-border" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-card flex items-center justify-center hover:bg-muted hover:shadow-card-hover transition-all" aria-label="Previous">
        <ChevronLeft className="w-4 h-4 text-foreground" />
      </button>
      <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-card flex items-center justify-center hover:bg-muted hover:shadow-card-hover transition-all" aria-label="Next">
        <ChevronRight className="w-4 h-4 text-foreground" />
      </button>
      <div className="flex justify-center gap-2.5 mt-6">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-accent" : "w-1.5 bg-muted-foreground/25 hover:bg-muted-foreground/40"}`} aria-label={`Testimonial ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

/* ── Package Data ── */

type FeatureRow = {
  label: string;
  starter: string | boolean;
  silver: string | boolean;
  gold: string | boolean;
  platinum: string | boolean;
};

const smsFeatures: FeatureRow[] = [
  { label: "Total Reach", starter: "450,000+ impressions", silver: "550,000+ impressions", gold: "950,000+ impressions", platinum: "1.2 Million+ impressions" },
  { label: "SMS Campaign", starter: "20,000", silver: "50,000", gold: "150,000", platinum: "400,000" },
  { label: "Email Campaign", starter: "350,000", silver: "350,000", gold: "2 Campaigns", platinum: "2 Campaigns" },
  { label: "Findit.lk Featured Ad", starter: true, silver: true, gold: true, platinum: true },
  { label: "Findit.lk Pop-Up Banner", starter: "1 Day", silver: "1 Day", gold: "2 Days", platinum: "4 Days" },
  { label: "Landing Page", starter: true, silver: true, gold: true, platinum: true },
  { label: "Findit.lk Main Banner", starter: false, silver: false, gold: "2 Weeks", platinum: "1 Month" },
  { label: "Findit.lk Side Banner", starter: false, silver: false, gold: "1 Week", platinum: "2 Weeks" },
  { label: "Facebook Boosting", starter: true, silver: true, gold: true, platinum: true },
];

const waFeatures: FeatureRow[] = [
  { label: "Total Reach", starter: "450,000+ impressions", silver: "550,000+ impressions", gold: "575,000+ impressions", platinum: "625,000+ impressions" },
  { label: "WhatsApp Campaign", starter: "30,000", silver: "60,000", gold: "110,000", platinum: "175,000" },
  { label: "Email Campaign", starter: "350,000", silver: "350,000", gold: "2 Campaigns", platinum: "2 Campaigns" },
  { label: "Findit.lk Featured Ad", starter: true, silver: true, gold: true, platinum: true },
  { label: "Findit.lk Lifetime Profile", starter: false, silver: false, gold: true, platinum: true },
  { label: "Findit.lk Main Banner", starter: false, silver: "2 Weeks", gold: "3 Weeks + 2 Weeks", platinum: "1 Month" },
  { label: "Findit.lk Side Banner", starter: false, silver: false, gold: "1 Week", platinum: "2 Weeks" },
  { label: "Findit.lk Pop-Up Banner", starter: false, silver: false, gold: false, platinum: "4 Days" },
  { label: "Facebook Boosting", starter: true, silver: true, gold: true, platinum: true },
];

const tierLabels = ["Starter", "Silver", "Gold", "Platinum"];
const tierKeys = ["starter", "silver", "gold", "platinum"] as const;

const faqs = [
  { q: "What is multi channel marketing?", a: "It is a strategy that uses multiple platforms like email, SMS, WhatsApp, and web ads to reach customers simultaneously for maximum engagement." },
  { q: "Why is multi channel marketing effective in Sri Lanka?", a: "Because customers use multiple platforms daily, combining channels increases reach, brand recall, and conversion rates significantly." },
  { q: "What makes Buzz Connect different?", a: "Buzz Connect combines targeted direct marketing with mass exposure using Findit.lk, offering maximum reach at lower cost — something no other provider in Sri Lanka offers." },
  { q: "How fast can I launch a campaign?", a: "Most campaigns are launched within 48–72 hours of confirmation, ensuring you never miss time-sensitive opportunities." },
  { q: "Which channels are included?", a: "Email marketing, SMS marketing, WhatsApp marketing, Findit.lk platform exposure, and Facebook boosting." },
];

/* ── Shared Components ── */

const CellValue = ({ value }: { value: string | boolean }) => {
  if (value === true) return <Check className="w-4 h-4 text-emerald-500 mx-auto" />;
  if (value === false) return <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />;
  return <span className="text-xs sm:text-sm font-medium text-foreground">{value}</span>;
};

const WhatsAppButton = ({ text, label = "Get Started on WhatsApp", className = "" }: { text: string; label?: string; className?: string }) => (
  <a
    href={`https://wa.me/94771437707?text=${encodeURIComponent(text)}`}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-bold text-sm shadow-[0_4px_20px_-4px_hsl(var(--accent)/0.4)] hover:shadow-[0_8px_30px_-4px_hsl(var(--accent)/0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 ${className}`}
  >
    {label} <ArrowRight className="w-4 h-4" />
  </a>
);

const ComparisonTable = ({ title, subtitle, features, emoji }: { title: string; subtitle: string; features: FeatureRow[]; emoji: string }) => {
  const [activeTier, setActiveTier] = useState(3); // Default to Platinum on mobile
  
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
      <div className="mb-6">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2.5">
          <span className="text-2xl">{emoji}</span> {title}
        </h3>
        <p className="text-muted-foreground text-sm mt-1.5">{subtitle}</p>
      </div>

      {/* Mobile: Tier selector tabs + single column */}
      <div className="block sm:hidden">
        <div className="flex rounded-xl overflow-hidden border border-border mb-4">
          {tierLabels.map((tier, i) => (
            <button
              key={tier}
              onClick={() => setActiveTier(i)}
              className={`flex-1 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all ${
                i === activeTier
                  ? i === 3 ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                  : "bg-muted/60 text-muted-foreground"
              }`}
            >
              {tier}
              {i === 3 && <span className="block text-[8px] font-medium opacity-80">Popular</span>}
            </button>
          ))}
        </div>
        <div className="rounded-2xl overflow-hidden border border-border shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.1)]">
          {features.map((row, i) => {
            const isReach = row.label === "Total Reach";
            const value = row[tierKeys[activeTier]];
            return (
              <div key={row.label} className={`flex items-center justify-between p-3.5 border-t first:border-t-0 border-border/60 ${isReach ? "bg-primary/8 border-t-2 border-b-2 border-primary/25" : i % 2 === 0 ? "bg-card" : "bg-muted/10"}`}>
                <span className={`text-xs flex items-center gap-1.5 ${isReach ? "font-bold text-primary" : "font-medium text-foreground"}`}>
                  {isReach && <span className="text-sm">📡</span>}
                  {row.label}
                </span>
                <span className={`text-right ${isReach ? "font-extrabold text-primary text-sm" : ""}`}>
                  <CellValue value={value} />
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop: Full comparison table */}
      <div className="hidden sm:block rounded-2xl overflow-hidden border border-border shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.1)]">
        <div className="grid grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="p-3.5 sm:p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-muted/60 border-b border-border">Features</div>
          {tierLabels.map((tier, i) => (
            <div key={tier} className={`p-3.5 sm:p-4 text-center text-xs font-bold uppercase tracking-wider border-b border-border ${i === 3 ? "bg-accent text-accent-foreground" : "bg-muted/60 text-muted-foreground"}`}>
              {tier}
              {i === 3 && <span className="block text-[9px] font-medium mt-0.5 opacity-80">Most Popular</span>}
            </div>
          ))}
        </div>
        {features.map((row, i) => {
          const isReach = row.label === "Total Reach";
          return (
            <div key={row.label} className={`grid grid-cols-[1.4fr_repeat(4,1fr)] border-t border-border/60 ${isReach ? "bg-primary/8 border-t-2 border-b-2 border-primary/25" : i % 2 === 0 ? "bg-card" : "bg-muted/10"} hover:bg-muted/30 transition-colors`}>
              <div className={`p-3 sm:p-4 text-xs sm:text-sm flex items-center gap-2 ${isReach ? "font-bold text-primary" : "font-medium text-foreground"}`}>
                {isReach && <span className="text-base">📡</span>}
                {row.label}
              </div>
              {tierKeys.map((key, ti) => (
                <div key={key} className={`p-3 sm:p-4 flex items-center justify-center text-center ${isReach ? "font-extrabold text-primary text-sm sm:text-base" : ""} ${ti === 3 ? "bg-accent/[0.04]" : ""}`}>
                  <CellValue value={row[key]} />
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <WhatsAppButton text={`Hi Buzz Connect, I'm interested in your ${title}.`} />
        <p className="text-muted-foreground text-xs mt-2.5 tracking-wide">Fast response · Campaign launch in 48–72 hrs</p>
      </div>
    </motion.div>
  );
};

const SectionDivider = () => (
  <div className="flex items-center justify-center gap-3 my-16">
    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-accent/30 to-border" />
    <div className="w-2 h-2 rounded-full bg-accent/50 shadow-[0_0_8px_hsl(var(--accent)/0.3)]" />
    <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-accent/30 to-border" />
  </div>
);

const Fade = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }} className={className}>
    {children}
  </motion.div>
);

/* ── Animated Counter ── */
const AnimatedNumber = ({ value }: { value: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 12 }}
      className="font-heading text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-foreground via-foreground to-accent bg-clip-text text-transparent tracking-tight"
    >
      {value}
    </motion.span>
  );
};

/* ── Page ── */

const SpecialPackages = () => {
  const jsonLd = useMemo(() => [{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }], []);

  return (
    <ServicePageLayout
      badge="Multi Channel Marketing Sri Lanka"
      title="Reach 1 Million+ Customers in Days with Multi-Channel Campaigns in Sri Lanka"
      subtitle="The fastest way to reach massive audiences in Sri Lanka — SMS, Email, WhatsApp & Findit.lk combined into one powerful campaign system."
    >
      <SEOHead
        title="Multi-Channel Marketing Sri Lanka | Reach 1.2 Million+ in 72 Hours"
        description="No.1 multi-channel marketing in Sri Lanka. Combined email, SMS, WhatsApp & Findit.lk advertising packages. Reach 1.2 million+ customers. Launch in 48-72 hours."
        canonical="/multi-channel-marketing-sri-lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Multi Channel Marketing", url: "/multi-channel-marketing-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* ═══ SECTION 1 — TRUST BAR ═══ */}
      <Fade className="mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Campaigns Executed", icon: Rocket },
            { number: "100+", label: "Businesses Served", icon: Building2 },
            { number: "50M+", label: "Impressions", icon: BarChart3 },
            { number: "10+", label: "Years Experience", icon: Shield },
          ].map(({ number, label, icon: Icon }, i) => (
            <Fade key={label} delay={i * 0.1} className="text-center p-6 rounded-2xl bg-gradient-to-b from-card to-muted/30 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_12px_-2px_hsl(var(--accent)/0.15)]">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <AnimatedNumber value={number} />
                <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-[0.15em] mt-1.5 block">{label}</span>
              </div>
            </Fade>
          ))}
        </div>
      </Fade>

      {/* ═══ SECTION 2 — SPEED + SCALE ═══ */}
      <Fade className="mb-0 max-w-4xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl border border-accent/20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(var(--accent) / 0.06) 0%, hsl(var(--primary) / 0.04) 50%, hsl(var(--accent) / 0.08) 100%)" }}>
          {/* Decorative orbs */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/[0.08] blur-[100px] animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-primary/[0.06] blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-accent/[0.04] blur-[60px]" />
          <div className="relative">
            <div className="flex items-center gap-4 mb-7">
              <motion.div
                initial={{ rotate: -10, scale: 0.8 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/20 shadow-[0_8px_24px_-4px_hsl(var(--accent)/0.2)]"
              >
                <Zap className="w-6 h-6 text-accent" />
              </motion.div>
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">Massive Reach in a Short Time</h2>
                <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mt-1">Speed × Scale × Impact</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed text-base max-w-2xl">
              Unlike traditional marketing that takes months, our multi-channel campaigns deliver <strong className="text-foreground">results within days</strong>.
              Your message reaches customers across <strong className="text-foreground">Email, SMS, WhatsApp & Findit.lk simultaneously</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Clock, text: "Launch in 48–72 hours", sub: "Fast execution", color: "from-accent/15 to-accent/5" },
                { icon: Users, text: "1.2M+ total reach", sub: "Multi-channel exposure", color: "from-primary/12 to-primary/4" },
                { icon: TrendingUp, text: "Results within days", sub: "Not months", color: "from-secondary/12 to-secondary/4" },
              ].map(({ icon: Icon, text, sub, color }, i) => (
                <Fade key={text} delay={i * 0.12} className="flex items-center gap-4 p-5 rounded-xl bg-card/80 border border-border/80 backdrop-blur-md shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-foreground block leading-tight">{text}</span>
                    <span className="text-xs text-muted-foreground">{sub}</span>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 3 — CHANNELS OVERVIEW ═══ */}
      <Fade className="mb-0 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.15em] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> 4 Channels, 1 Campaign
          </motion.div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground mb-3 tracking-tight">Your Campaign Appears Across</h2>
          <p className="text-muted-foreground text-sm">One campaign = 4 powerful channels working together for maximum visibility</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { icon: Mail, label: "Email Marketing", reach: "350,000+", gradient: "from-blue-500/12 to-blue-600/4", iconBg: "from-blue-500/20 to-blue-600/10", iconColor: "text-blue-500", borderColor: "border-blue-500/15 hover:border-blue-500/30" },
            { icon: Smartphone, label: "SMS Marketing", reach: "400,000+", gradient: "from-emerald-500/12 to-emerald-600/4", iconBg: "from-emerald-500/20 to-emerald-600/10", iconColor: "text-emerald-500", borderColor: "border-emerald-500/15 hover:border-emerald-500/30" },
            { icon: MessageSquare, label: "WhatsApp Marketing", reach: "175,000+", gradient: "from-green-500/12 to-green-600/4", iconBg: "from-green-500/20 to-green-600/10", iconColor: "text-green-500", borderColor: "border-green-500/15 hover:border-green-500/30" },
            { icon: Globe, label: "Findit.lk Exposure", reach: "Active Users", gradient: "from-accent/12 to-accent/4", iconBg: "from-accent/25 to-accent/10", iconColor: "text-accent", borderColor: "border-accent/20 hover:border-accent/40" },
          ].map(({ icon: Icon, label, reach, gradient, iconBg, iconColor, borderColor }, i) => (
            <Fade key={label} delay={i * 0.1} className={`p-6 sm:p-7 rounded-2xl bg-gradient-to-b ${gradient} border ${borderColor} shadow-card text-center group hover:shadow-card-hover hover:-translate-y-2 transition-all duration-400 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconBg} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </motion.div>
                <h3 className="text-sm font-bold text-foreground mb-2">{label}</h3>
                <span className="text-xs font-extrabold text-accent tracking-wider bg-accent/8 px-3 py-1 rounded-full">{reach}</span>
              </div>
            </Fade>
          ))}
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 4 — PACKAGES ═══ */}
      <div className="mb-0" id="packages">
        <Fade>
          <div className="text-center mb-12">
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] bg-gradient-to-r from-accent/15 to-accent/5 text-accent border border-accent/20 mb-5 shadow-[0_4px_16px_-4px_hsl(var(--accent)/0.15)]"
            >
              ✨ Choose Your Package
            </motion.span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
              Our Multi-Channel Advertising Packages
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
              Fully managed campaigns across SMS, Email, WhatsApp & Findit.lk — choose the reach that fits your goals.
            </p>
          </div>
        </Fade>
        <ComparisonTable title="WhatsApp Marketing Packages" subtitle="High open rates, direct engagement, personal touch" features={waFeatures} emoji="💬" />
        <ComparisonTable title="SMS Marketing Packages" subtitle="Cost-effective way to reach large audiences instantly" features={smsFeatures} emoji="📱" />
      </div>

      <SectionDivider />

      {/* ═══ SECTION 5 — FINDIT.LK ADVANTAGE ═══ */}
      <Fade className="mb-0 max-w-4xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl border border-primary/15 relative overflow-hidden" style={{ background: "linear-gradient(160deg, hsl(var(--primary) / 0.06) 0%, hsl(var(--primary) / 0.02) 60%, hsl(var(--accent) / 0.06) 100%)" }}>
          <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-primary/[0.06] blur-[80px]" />
          <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-accent/[0.06] blur-[60px]" />
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center border border-primary/15 shadow-[0_8px_24px_-4px_hsl(var(--primary)/0.15)]">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-foreground">Powered by Findit.lk</h2>
                <p className="text-xs font-bold text-primary uppercase tracking-[0.15em] mt-0.5">Your Unfair Advantage</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-7 leading-relaxed text-[15px] max-w-2xl">
              Most agencies only <em>send</em> messages. We place your brand on a <strong className="text-foreground">high-traffic platform</strong> where users are actively searching for products and services like yours.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
              {[
                "Category-based visibility across industries",
                "Banner placements on high-traffic pages",
                "Exposure to actively searching audiences",
                "Continuous awareness even after campaigns end",
              ].map((item, i) => (
                <Fade key={item} delay={i * 0.08} className="flex items-center gap-3 p-4 rounded-xl bg-card/80 border border-border/80 backdrop-blur-sm shadow-sm hover:shadow-card transition-shadow group">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </Fade>
              ))}
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/15 text-center shadow-[0_4px_20px_-8px_hsl(var(--accent)/0.12)]">
              <p className="text-sm font-semibold text-foreground leading-relaxed">
                💡 You don't just reach people — you <strong className="text-accent">capture demand</strong>. No other provider in Sri Lanka offers this.
              </p>
            </div>
          </div>
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 6 — WHAT YOU CAN ACHIEVE ═══ */}
      <Fade className="mb-0">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground mb-3 tracking-tight">What You Can Achieve</h2>
          <p className="text-muted-foreground text-sm">Powerful outcomes for every business goal</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {[
            { icon: Target, title: "Brand Awareness", desc: "Reach thousands within days" },
            { icon: Rocket, title: "Product Launches", desc: "Instant visibility for new products" },
            { icon: ShoppingCart, title: "Promotions", desc: "Seasonal deals & limited offers" },
            { icon: Phone, title: "Lead Generation", desc: "Calls, inquiries & WhatsApp leads" },
            { icon: GraduationCap, title: "Student Recruitment", desc: "Courses, degrees & programs" },
            { icon: Landmark, title: "Real Estate", desc: "Property & project promotions" },
            { icon: PartyPopper, title: "Events", desc: "Registrations & attendance" },
            { icon: TrendingUp, title: "Sales Boost", desc: "Short-term revenue increase" },
            { icon: RefreshCw, title: "Re-Engagement", desc: "Bring back existing customers" },
            { icon: Globe, title: "Expand Reach", desc: "New audiences via Findit.lk" },
          ].map(({ icon: Icon, title, desc }, i) => (
            <Fade key={title} delay={i * 0.04} className="p-5 rounded-2xl bg-gradient-to-b from-card to-muted/20 border border-border shadow-card text-center group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/12 to-primary/4 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xs font-bold text-foreground mb-1 tracking-wide">{title}</h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 7 — WHO THIS IS FOR ═══ */}
      <Fade className="mb-0 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground mb-3 tracking-tight">Who Should Use Multi-Channel Campaigns?</h2>
        <p className="text-muted-foreground text-sm mb-8">If you need <strong className="text-foreground">quick results</strong>, this is the best solution.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: GraduationCap, label: "Education Institutes", result: "→ Student inquiries" },
            { icon: Home, label: "Real Estate Companies", result: "→ Property leads" },
            { icon: Calendar, label: "Event Organizers", result: "→ Ticket sales" },
            { icon: ShoppingCart, label: "E-commerce & Retail", result: "→ Quick sales" },
            { icon: Building2, label: "Hotels & Travel", result: "→ Bookings" },
            { icon: Shirt, label: "Fashion & Clothing", result: "→ Brand growth" },
            { icon: Store, label: "Retail & Supermarkets", result: "→ Foot traffic & sales" },
            { icon: Rocket, label: "SMEs & Corporates", result: "→ Brand awareness" },
          ].map(({ icon: Icon, label, result }, i) => (
            <Fade key={label} delay={i * 0.05} className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-card to-muted/10 border border-border shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/12 to-primary/4 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm font-bold text-foreground">{label}</span>
                <span className="text-xs font-bold text-accent bg-gradient-to-r from-accent/12 to-accent/5 px-3 py-1 rounded-full border border-accent/15">{result}</span>
              </div>
            </Fade>
          ))}
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 8 — USE CASES CHECKLIST ═══ */}
      <Fade className="mb-0 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground mb-8 text-center tracking-tight">What You Can Use Multi-Channel Campaigns For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-card to-muted/20 border border-border shadow-card">
          {[
            "Brand awareness campaigns",
            "New business or outlet openings",
            "Product or service launches",
            "Promotional offers and discounts",
            "Seasonal marketing campaigns",
            "Lead generation (calls, WhatsApp, inquiries)",
            "Student recruitment for courses",
            "Real estate and property promotions",
            "Event marketing and registrations",
            "Driving website traffic",
            "Increasing sales in a short time",
            "Reaching new target audiences",
            "Re-engaging existing customers",
            "Building top-of-mind brand recall",
            "Boosting visibility across platforms",
            "Supporting short-term marketing goals",
            "Generating quick market response",
            "Testing new products or services",
            "Expanding business reach across Sri Lanka",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 py-2 group">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                <CheckCircle className="w-3 h-3 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 9 — HOW IT WORKS ═══ */}
      <Fade className="mb-0">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground mb-3 tracking-tight">How It Works</h2>
          <p className="text-muted-foreground text-sm">Simple. Fast. Effective.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-accent/10 via-accent/30 to-accent/10" />
          {[
            { icon: Target, title: "Choose Audience", desc: "Select your industry & target", step: 1 },
            { icon: Rocket, title: "Launch Campaign", desc: "We execute in 48–72 hours", step: 2 },
            { icon: Mail, title: "Reach Customers", desc: "Multi-channel delivery", step: 3 },
            { icon: BarChart3, title: "Track Results", desc: "Monitor engagement & ROI", step: 4 },
          ].map(({ icon: Icon, title, desc, step }, i) => (
            <Fade key={title} delay={i * 0.12} className="p-6 rounded-2xl bg-gradient-to-b from-card to-muted/20 border border-border shadow-card text-center relative group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-accent to-accent/80 text-accent-foreground text-[11px] font-extrabold flex items-center justify-center shadow-[0_4px_12px_-2px_hsl(var(--accent)/0.3)] z-10"
              >
                {step}
              </motion.span>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/12 to-primary/4 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm mt-2">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-bold text-foreground mb-1.5">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </Fade>
          ))}
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 10 — TRADITIONAL VS BUZZ CONNECT ═══ */}
      <Fade className="mb-0 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground text-center mb-8 tracking-tight">Traditional Marketing vs Buzz Connect</h2>
        <div className="rounded-2xl overflow-hidden border border-border shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.1)]">
          <div className="grid grid-cols-2">
            <div className="p-5 sm:p-6 text-center text-xs font-bold uppercase tracking-[0.12em] text-destructive flex items-center justify-center gap-2 bg-destructive/8 border-b-2 border-destructive/15">
              <X className="w-4 h-4" /> Traditional
            </div>
            <div className="p-5 sm:p-6 text-center text-xs font-bold uppercase tracking-[0.12em] text-accent flex items-center justify-center gap-2 bg-accent/8 border-b-2 border-accent/20">
              <Check className="w-4 h-4" /> Buzz Connect
            </div>
          </div>
          {[
            { trad: "Takes months to show results", buzz: "Launch campaigns in 48–72 hours" },
            { trad: "Limited to one channel", buzz: "Multi-channel exposure (Email + SMS + WhatsApp + Web)" },
            { trad: "No audience targeting", buzz: "Category-based & industry-specific targeting" },
            { trad: "Hard to measure results", buzz: "Detailed performance tracking & reports" },
            { trad: "Expensive for SMEs", buzz: "Affordable packages for every budget" },
          ].map((row, i) => (
            <div key={i} className={`grid grid-cols-2 border-t border-border/60 ${i % 2 === 0 ? "bg-card" : "bg-muted/10"} hover:bg-muted/20 transition-colors`}>
              <div className="p-4 sm:p-5 text-sm text-muted-foreground border-r border-border/60 leading-relaxed">{row.trad}</div>
              <div className="p-4 sm:p-5 text-sm font-medium text-foreground leading-relaxed">{row.buzz}</div>
            </div>
          ))}
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 11 — TESTIMONIALS ═══ */}
      <Fade className="mb-0 max-w-5xl mx-auto">
        <div className="text-center mb-9">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground mb-3 tracking-tight">What Our Clients Say</h2>
          <p className="text-muted-foreground text-sm">Real results from real businesses across Sri Lanka</p>
        </div>
        <TestimonialsCarousel />
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 12 — WHY CHOOSE US ═══ */}
      <Fade className="mb-0 max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-card to-muted/20 border border-border shadow-card">
          <div className="flex items-center gap-4 mb-7">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center shadow-sm">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-foreground">Why Businesses Choose Buzz Connect</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Proven multi-channel marketing strategy",
              "350,000+ segmented audience database",
              "Campaign launch within 48–72 hours",
              "Exclusive Findit.lk platform integration",
              "End-to-end campaign management",
              "Affordable packages for every business size",
              "Industry-specific audience targeting",
              "Detailed performance tracking & reports",
            ].map((item, i) => (
              <Fade key={item} delay={i * 0.04} className="flex items-center gap-3 p-4 rounded-xl bg-muted/20 border border-border/50 hover:bg-muted/40 hover:border-accent/20 transition-all group">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-sm text-foreground font-medium">{item}</span>
              </Fade>
            ))}
          </div>
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 13 — URGENCY ═══ */}
      <Fade className="mb-0 max-w-3xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl bg-destructive/[0.05] border-2 border-destructive/15 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--destructive)/0.08),transparent_60%)]" />
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-destructive/[0.04] blur-[60px] animate-pulse" />
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center justify-center gap-3 mb-5"
            >
              <div className="w-11 h-11 rounded-full bg-destructive/12 flex items-center justify-center shadow-[0_4px_16px_-4px_hsl(var(--destructive)/0.2)]">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-extrabold text-foreground">Limited Weekly Campaign Slots</h3>
            </motion.div>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
              We only run a limited number of campaigns each week to ensure quality. <strong className="text-foreground">Book early to secure your slot.</strong>
            </p>
            <WhatsAppButton text="Hi Buzz Connect, I want to secure a campaign slot." label="Secure Your Slot Now" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[0_4px_20px_-4px_hsl(var(--destructive)/0.3)]" />
          </div>
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 14 — FAQ ═══ */}
      <Fade className="mb-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-7">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center shadow-sm">
            <HelpCircle className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-foreground">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-5 sm:p-6 rounded-xl bg-gradient-to-r from-card to-muted/10 border border-border shadow-sm hover:shadow-card transition-all">
              <summary className="font-heading font-semibold text-sm text-foreground cursor-pointer list-none flex items-center justify-between gap-4">
                <span>{faq.q}</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform duration-300 shrink-0">
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-sm text-muted-foreground leading-[1.8] pl-0">{faq.a}</p>
            </details>
          ))}
        </div>
      </Fade>

      {/* ═══ FINAL CTA ═══ */}
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center p-10 sm:p-16 rounded-3xl gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,hsl(var(--accent)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,hsl(var(--secondary)/0.12),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_100%,hsl(var(--accent)/0.08),transparent_40%)]" />
        <div className="relative">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-5 tracking-tight leading-tight">
              Launch Your Campaign<br className="hidden sm:block" /> in 48 Hours
            </h2>
          </motion.div>
          <p className="text-primary-foreground/75 mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Reach thousands of customers this week through SMS, WhatsApp, Email & Findit.lk — the fastest way to boost awareness in Sri Lanka.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-primary-foreground/60 text-xs sm:text-sm mb-9">
            {["Fast execution", "1.2M+ reach", "Multi-channel", "Findit.lk exposure"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" /> {item}
              </span>
            ))}
          </div>
          <WhatsAppButton text="Hi Buzz Connect, I want to launch a multi-channel campaign." label="Chat on WhatsApp Now" className="px-10 py-4 text-base shadow-[0_8px_30px_-4px_hsl(var(--accent)/0.5)]" />
          <p className="text-primary-foreground/40 text-xs mt-5 tracking-wide">Limited slots available — secure yours today</p>
        </div>
      </motion.div>
    </ServicePageLayout>
  );
};

export default SpecialPackages;
