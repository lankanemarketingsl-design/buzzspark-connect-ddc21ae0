import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import {
  CheckCircle, Mail, MessageSquare, Smartphone, Globe, Target, Zap,
  BarChart3, GraduationCap, Building2, ShoppingCart, Home, Calendar,
  Rocket, HelpCircle, Check, X, ArrowRight, Clock, TrendingUp, Shield,
  Users, AlertTriangle, Shirt, Store, Star, Phone, Landmark,
  PartyPopper, RefreshCw, ChevronLeft, ChevronRight
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
  { label: "Total Reach", starter: "450,000", silver: "550,000", gold: "950,000", platinum: "1.2 Million+" },
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
  { label: "Total Reach", starter: "450,000", silver: "550,000", gold: "575,000", platinum: "625,000" },
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

const ComparisonTable = ({ title, subtitle, features, emoji }: { title: string; subtitle: string; features: FeatureRow[]; emoji: string }) => (
  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
    <div className="mb-6">
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2.5">
        <span className="text-2xl">{emoji}</span> {title}
      </h3>
      <p className="text-muted-foreground text-sm mt-1.5">{subtitle}</p>
    </div>
    <div className="rounded-2xl overflow-hidden border border-border shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.1)]">
      <div className="grid grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="p-3.5 sm:p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-muted/60 border-b border-border">Features</div>
        {tierLabels.map((tier, i) => (
          <div key={tier} className={`p-3.5 sm:p-4 text-center text-xs font-bold uppercase tracking-wider border-b border-border ${i === 2 ? "bg-accent text-accent-foreground" : "bg-muted/60 text-muted-foreground"}`}>
            {tier}
            {i === 2 && <span className="block text-[9px] font-medium mt-0.5 opacity-80">Most Popular</span>}
          </div>
        ))}
      </div>
      {features.map((row, i) => {
        const isReach = row.label === "Total Reach";
        return (
          <div key={row.label} className={`grid grid-cols-[1.4fr_repeat(3,1fr)] border-t border-border/60 ${isReach ? "bg-primary/8 border-t-2 border-b-2 border-primary/25" : i % 2 === 0 ? "bg-card" : "bg-muted/10"} hover:bg-muted/30 transition-colors`}>
            <div className={`p-3 sm:p-4 text-xs sm:text-sm flex items-center gap-2 ${isReach ? "font-bold text-primary" : "font-medium text-foreground"}`}>
              {isReach && <span className="text-base">📡</span>}
              {row.label}
            </div>
            {tierKeys.map((key, ti) => (
              <div key={key} className={`p-3 sm:p-4 flex items-center justify-center text-center ${isReach ? "font-extrabold text-primary text-sm sm:text-base" : ""} ${ti === 2 ? "bg-accent/[0.04]" : ""}`}>
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

const SectionDivider = () => (
  <div className="flex items-center justify-center gap-3 my-16">
    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-border" />
    <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-border" />
  </div>
);

const Fade = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }} className={className}>
    {children}
  </motion.div>
);

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
            <Fade key={label} delay={i * 0.1} className="text-center p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-foreground tracking-tight">{number}</div>
              <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mt-1 block">{label}</span>
            </Fade>
          ))}
        </div>
      </Fade>

      {/* ═══ SECTION 2 — SPEED + SCALE ═══ */}
      <Fade className="mb-0 max-w-4xl mx-auto">
        <div className="p-7 sm:p-10 rounded-3xl border border-accent/12 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(var(--accent) / 0.04) 0%, hsl(var(--primary) / 0.03) 50%, hsl(var(--accent) / 0.06) 100%)" }}>
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/[0.06] blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-primary/[0.04] blur-[60px]" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-accent/12 flex items-center justify-center border border-accent/15">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Massive Reach in a Short Time</h2>
              </div>
            </div>
            <p className="text-muted-foreground mb-7 leading-relaxed text-[15px]">
              Unlike traditional marketing that takes months, our multi-channel campaigns deliver <strong className="text-foreground">results within days</strong>.
              Your message reaches customers across <strong className="text-foreground">Email, SMS, WhatsApp & Findit.lk simultaneously</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: Clock, text: "Launch in 48–72 hours", sub: "Fast execution" },
                { icon: Users, text: "1.2M+ total reach", sub: "Multi-channel exposure" },
                { icon: TrendingUp, text: "Results within days", sub: "Not months" },
              ].map(({ icon: Icon, text, sub }, i) => (
                <Fade key={text} delay={i * 0.1} className="flex items-center gap-3 p-4 rounded-xl bg-card/90 border border-border/80 backdrop-blur-sm shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground block leading-tight">{text}</span>
                    <span className="text-[11px] text-muted-foreground">{sub}</span>
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
        <div className="text-center mb-8">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">Your Campaign Appears Across</h2>
          <p className="text-muted-foreground text-sm">One campaign = 4 powerful channels working together</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: Mail, label: "Email Marketing", reach: "350,000+", gradient: "from-blue-500/8 to-blue-600/4", iconBg: "bg-blue-500/12", iconColor: "text-blue-600" },
            { icon: Smartphone, label: "SMS Marketing", reach: "400,000+", gradient: "from-emerald-500/8 to-emerald-600/4", iconBg: "bg-emerald-500/12", iconColor: "text-emerald-600" },
            { icon: MessageSquare, label: "WhatsApp Marketing", reach: "175,000+", gradient: "from-green-500/8 to-green-600/4", iconBg: "bg-green-500/12", iconColor: "text-green-600" },
            { icon: Globe, label: "Findit.lk Exposure", reach: "Active Users", gradient: "from-amber-500/8 to-amber-600/4", iconBg: "bg-amber-500/12", iconColor: "text-amber-600" },
          ].map(({ icon: Icon, label, reach, gradient, iconBg, iconColor }, i) => (
            <Fade key={label} delay={i * 0.08} className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-b ${gradient} border border-border shadow-card text-center group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}>
              <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-6 h-6 ${iconColor}`} />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1.5">{label}</h3>
              <span className="text-xs font-bold text-accent tracking-wide">{reach}</span>
            </Fade>
          ))}
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 4 — PACKAGES ═══ */}
      <div className="mb-0" id="packages">
        <Fade>
          <div className="text-center mb-10">
            <span className="inline-block px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-accent/10 text-accent border border-accent/15 mb-4">
              Choose Your Package
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              Our Multi-Channel Advertising Packages
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
              Fully managed campaigns across SMS, Email, WhatsApp & Findit.lk — choose the reach that fits your goals.
            </p>
          </div>
        </Fade>
        <ComparisonTable title="SMS Marketing Packages" subtitle="Cost-effective way to reach large audiences instantly" features={smsFeatures} emoji="📱" />
        <ComparisonTable title="WhatsApp Marketing Packages" subtitle="High open rates, direct engagement, personal touch" features={waFeatures} emoji="💬" />
      </div>

      <SectionDivider />

      {/* ═══ SECTION 5 — FINDIT.LK ADVANTAGE ═══ */}
      <Fade className="mb-0 max-w-4xl mx-auto">
        <div className="p-7 sm:p-10 rounded-3xl border border-primary/12 relative overflow-hidden" style={{ background: "linear-gradient(160deg, hsl(var(--primary) / 0.05) 0%, hsl(var(--primary) / 0.02) 60%, hsl(var(--accent) / 0.04) 100%)" }}>
          <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-primary/[0.04] blur-[60px]" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/15">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Powered by Findit.lk — Your Unfair Advantage</h2>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-[15px]">
              Most agencies only <em>send</em> messages. We place your brand on a <strong className="text-foreground">high-traffic platform</strong> where users are actively searching for products and services like yours.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                "Category-based visibility across industries",
                "Banner placements on high-traffic pages",
                "Exposure to actively searching audiences",
                "Continuous awareness even after campaigns end",
              ].map((item, i) => (
                <Fade key={item} delay={i * 0.08} className="flex items-center gap-3 p-3.5 rounded-xl bg-card/80 border border-border backdrop-blur-sm">
                  <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </Fade>
              ))}
            </div>
            <div className="p-5 rounded-2xl bg-accent/8 border border-accent/12 text-center">
              <p className="text-sm font-medium text-foreground leading-relaxed">
                💡 You don't just reach people — you <strong>capture demand</strong>. No other provider in Sri Lanka offers this.
              </p>
            </div>
          </div>
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 6 — WHAT YOU CAN ACHIEVE ═══ */}
      <Fade className="mb-0">
        <div className="text-center mb-9">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">What You Can Achieve</h2>
          <p className="text-muted-foreground text-sm">Powerful outcomes for every business goal</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
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
            <Fade key={title} delay={i * 0.04} className="p-5 rounded-2xl bg-card border border-border shadow-card text-center group hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/12 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xs font-bold text-foreground mb-1 tracking-wide">{title}</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{desc}</p>
            </Fade>
          ))}
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 7 — WHO THIS IS FOR ═══ */}
      <Fade className="mb-0 max-w-4xl mx-auto">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">Who Should Use Multi-Channel Campaigns?</h2>
        <p className="text-muted-foreground text-sm mb-7">If you need <strong className="text-foreground">quick results</strong>, this is the best solution.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
            <Fade key={label} delay={i * 0.05} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-card transition-shadow group">
              <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-sm font-semibold text-foreground">{label}</span>
                <span className="text-xs font-bold text-accent bg-accent/8 px-2.5 py-0.5 rounded-full">{result}</span>
              </div>
            </Fade>
          ))}
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 8 — USE CASES CHECKLIST ═══ */}
      <Fade className="mb-0 max-w-4xl mx-auto">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-7 text-center">What You Can Use Multi-Channel Campaigns For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 p-7 sm:p-9 rounded-2xl bg-card border border-border shadow-card">
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
            <div key={item} className="flex items-center gap-3 py-1.5 group">
              <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
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
        <div className="text-center mb-9">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">How It Works</h2>
          <p className="text-muted-foreground text-sm">Simple. Fast. Effective.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {[
            { icon: Target, title: "Choose Audience", desc: "Select your industry & target", step: 1 },
            { icon: Rocket, title: "Launch Campaign", desc: "We execute in 48–72 hours", step: 2 },
            { icon: Mail, title: "Reach Customers", desc: "Multi-channel delivery", step: 3 },
            { icon: BarChart3, title: "Track Results", desc: "Monitor engagement & ROI", step: 4 },
          ].map(({ icon: Icon, title, desc, step }, i) => (
            <Fade key={title} delay={i * 0.1} className="p-6 rounded-2xl bg-card border border-border shadow-card text-center relative group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <span className="absolute top-3 right-3 text-[10px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/10">Step {step}</span>
              <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/12 transition-colors">
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
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground text-center mb-7">Traditional Marketing vs Buzz Connect</h2>
        <div className="rounded-2xl overflow-hidden border border-border shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.1)]">
          <div className="grid grid-cols-2">
            <div className="p-4 sm:p-5 text-center text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground flex items-center justify-center gap-2 bg-destructive/5 border-b border-border">
              <X className="w-4 h-4 text-destructive" /> Traditional
            </div>
            <div className="p-4 sm:p-5 text-center text-xs font-bold uppercase tracking-[0.12em] text-accent flex items-center justify-center gap-2 bg-accent/5 border-b border-border">
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
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">What Our Clients Say</h2>
          <p className="text-muted-foreground text-sm">Real results from real businesses across Sri Lanka</p>
        </div>
        <TestimonialsCarousel />
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 12 — WHY CHOOSE US ═══ */}
      <Fade className="mb-0 max-w-4xl mx-auto">
        <div className="p-7 sm:p-9 rounded-2xl bg-card border border-border shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-heading text-xl font-bold text-foreground">Why Businesses Choose Buzz Connect</h2>
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
              <Fade key={item} delay={i * 0.04} className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/20 border border-border/50 hover:bg-muted/40 transition-colors">
                <div className="w-6 h-6 rounded-full bg-accent/12 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-sm text-foreground">{item}</span>
              </Fade>
            ))}
          </div>
        </div>
      </Fade>

      <SectionDivider />

      {/* ═══ SECTION 13 — URGENCY ═══ */}
      <Fade className="mb-0 max-w-3xl mx-auto">
        <div className="p-7 sm:p-8 rounded-2xl bg-destructive/[0.04] border border-destructive/12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--destructive)/0.06),transparent_60%)]" />
          <div className="relative">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-destructive" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">Limited Weekly Campaign Slots</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto leading-relaxed">
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
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-heading text-xl font-bold text-foreground">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-5 sm:p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-card transition-shadow">
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
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center p-10 sm:p-14 rounded-3xl gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,hsl(var(--accent)/0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,hsl(var(--secondary)/0.1),transparent_50%)]" />
        <div className="relative">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 tracking-tight">
            Launch Your Campaign in 48 Hours
          </h2>
          <p className="text-primary-foreground/75 mb-7 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Reach thousands of customers this week through SMS, WhatsApp, Email & Findit.lk — the fastest way to boost awareness in Sri Lanka.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-primary-foreground/60 text-xs sm:text-sm mb-8">
            {["Fast execution", "1.2M+ reach", "Multi-channel", "Findit.lk exposure"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" /> {item}
              </span>
            ))}
          </div>
          <WhatsAppButton text="Hi Buzz Connect, I want to launch a multi-channel campaign." label="Chat on WhatsApp Now" className="px-9 py-4 text-base" />
          <p className="text-primary-foreground/40 text-xs mt-4 tracking-wide">Limited slots available — secure yours today</p>
        </div>
      </motion.div>
    </ServicePageLayout>
  );
};

export default SpecialPackages;
