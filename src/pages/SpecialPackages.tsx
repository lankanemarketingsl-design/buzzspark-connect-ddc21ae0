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
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {testimonials.map((quote, i) => (
            <div key={i} className="min-w-full px-4 sm:px-8">
              <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card text-center">
                <div className="flex justify-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-5 h-5 fill-accent text-accent" />)}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic">"{quote}"</p>
                <p className="text-xs font-semibold text-foreground mt-4">— Valued Client</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card border border-border shadow-sm hover:bg-muted transition-colors" aria-label="Previous">
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card border border-border shadow-sm hover:bg-muted transition-colors" aria-label="Next">
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>
      <div className="flex justify-center gap-2 mt-5">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted-foreground/30"}`} aria-label={`Testimonial ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

/* ── Package Data ── */

type FeatureRow = {
  label: string;
  budget: string | boolean;
  silver: string | boolean;
  gold: string | boolean;
  platinum: string | boolean;
};

const smsFeatures: FeatureRow[] = [
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

const waFeatures: FeatureRow[] = [
  { label: "Total Reach", budget: "450,000", silver: "550,000", gold: "575,000", platinum: "625,000" },
  { label: "WhatsApp Campaign", budget: "30,000", silver: "60,000", gold: "110,000", platinum: "175,000" },
  { label: "Email Campaign", budget: "350,000", silver: "350,000", gold: "2 Campaigns", platinum: "2 Campaigns" },
  { label: "Findit.lk Featured Ad", budget: true, silver: true, gold: true, platinum: true },
  { label: "Findit.lk Lifetime Profile", budget: false, silver: false, gold: true, platinum: true },
  { label: "Findit.lk Main Banner", budget: false, silver: "2 Weeks", gold: "3 Weeks + 2 Weeks", platinum: "1 Month" },
  { label: "Findit.lk Side Banner", budget: false, silver: false, gold: "1 Week", platinum: "2 Weeks" },
  { label: "Findit.lk Pop-Up Banner", budget: "1 Day", silver: false, gold: false, platinum: "4 Days" },
  { label: "Facebook Boosting", budget: true, silver: true, gold: true, platinum: true },
];

const tierLabels = ["Budget", "Silver", "Gold", "Platinum"];
const tierKeys = ["budget", "silver", "gold", "platinum"] as const;

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
  if (value === false) return <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
  return <span className="text-xs sm:text-sm font-medium text-foreground">{value}</span>;
};

const WhatsAppButton = ({ text, label = "Get Started on WhatsApp", className = "" }: { text: string; label?: string; className?: string }) => (
  <a
    href={`https://wa.me/94771437707?text=${encodeURIComponent(text)}`}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/25 hover:scale-[1.03] ${className}`}
  >
    {label} <ArrowRight className="w-4 h-4" />
  </a>
);

const ComparisonTable = ({ title, subtitle, features, emoji }: { title: string; subtitle: string; features: FeatureRow[]; emoji: string }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
    <div className="mb-5">
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
        <span>{emoji}</span> {title}
      </h3>
      <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
    </div>
    <div className="rounded-2xl overflow-hidden border border-border shadow-card">
      <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] bg-muted/50">
        <div className="p-3 sm:p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Features</div>
        {tierLabels.map((tier, i) => (
          <div key={tier} className={`p-3 sm:p-4 text-center text-xs font-bold uppercase tracking-wider ${i === 3 ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}>
            {tier}
          </div>
        ))}
      </div>
      {features.map((row, i) => {
        const isReach = row.label === "Total Reach";
        return (
          <div key={row.label} className={`grid grid-cols-[1.4fr_repeat(4,1fr)] border-t border-border ${isReach ? "bg-primary/10 border-t-2 border-b-2 border-primary/30" : i % 2 === 0 ? "bg-card" : "bg-muted/20"} hover:bg-muted/40 transition-colors`}>
            <div className={`p-3 sm:p-4 text-xs sm:text-sm flex items-center gap-1.5 ${isReach ? "font-bold text-primary" : "font-medium text-foreground"}`}>
              {isReach && <span className="text-base">📡</span>}
              {row.label}
            </div>
            {tierKeys.map((key, ti) => (
              <div key={key} className={`p-3 sm:p-4 flex items-center justify-center text-center ${isReach ? "font-extrabold text-primary text-sm sm:text-base" : ""} ${ti === 3 ? "bg-accent/5 border-x border-accent/10" : ""}`}>
                <CellValue value={row[key]} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
    <div className="mt-5 text-center">
      <WhatsAppButton text={`Hi Buzz Connect, I'm interested in your ${title}.`} />
      <p className="text-muted-foreground text-xs mt-2">Fast response · Campaign launch in 48–72 hrs</p>
    </div>
  </motion.div>
);

const Fade = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={className}>
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

      {/* ═══════════════════════════════════════════
          SECTION 1 — TRUST BAR (Social Proof First)
          ═══════════════════════════════════════════ */}
      <Fade className="mb-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Campaigns Executed", icon: Rocket },
            { number: "100+", label: "Businesses Served", icon: Building2 },
            { number: "50M+", label: "Impressions", icon: BarChart3 },
            { number: "10+", label: "Years Experience", icon: Shield },
          ].map(({ number, label, icon: Icon }) => (
            <div key={label} className="text-center p-5 rounded-2xl bg-gradient-to-b from-card to-muted/30 border border-border shadow-card">
              <Icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="font-heading text-2xl sm:text-3xl font-bold text-foreground">{number}</div>
              <span className="text-xs text-muted-foreground font-medium">{label}</span>
            </div>
          ))}
        </div>
      </Fade>

      {/* ═══════════════════════════════════════════
          SECTION 2 — SPEED + SCALE VALUE PROP
          ═══════════════════════════════════════════ */}
      <Fade className="mb-14 max-w-4xl mx-auto">
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-primary/[0.04] via-accent/[0.06] to-primary/[0.04] border border-accent/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Massive Reach in a Short Time</h2>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Unlike traditional marketing that takes months, our multi-channel campaigns deliver <strong className="text-foreground">results within days</strong>.
              Your message reaches customers across <strong className="text-foreground">Email, SMS, WhatsApp & Findit.lk simultaneously</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: Clock, text: "Launch in 48–72 hours", sub: "Fast execution" },
                { icon: Users, text: "1.2M+ total reach", sub: "Multi-channel exposure" },
                { icon: TrendingUp, text: "Results within days", sub: "Not months" },
              ].map(({ icon: Icon, text, sub }) => (
                <div key={text} className="flex items-center gap-3 p-4 rounded-xl bg-card/80 border border-border backdrop-blur-sm">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground block">{text}</span>
                    <span className="text-xs text-muted-foreground">{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>

      {/* ═══════════════════════════════════════════
          SECTION 3 — CHANNELS OVERVIEW
          ═══════════════════════════════════════════ */}
      <Fade className="mb-14 max-w-4xl mx-auto">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground text-center mb-2">Your Campaign Appears Across</h2>
        <p className="text-muted-foreground text-center text-sm mb-8">One campaign = 4 powerful channels working together</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: Mail, label: "Email Marketing", reach: "350,000+", color: "bg-blue-500/10 text-blue-600" },
            { icon: Smartphone, label: "SMS Marketing", reach: "400,000+", color: "bg-emerald-500/10 text-emerald-600" },
            { icon: MessageSquare, label: "WhatsApp Marketing", reach: "175,000+", color: "bg-green-500/10 text-green-600" },
            { icon: Globe, label: "Findit.lk Exposure", reach: "Active Users", color: "bg-amber-500/10 text-amber-600" },
          ].map(({ icon: Icon, label, reach, color }) => (
            <div key={label} className="p-5 rounded-2xl bg-card border border-border shadow-card text-center hover:shadow-md transition-shadow group">
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1">{label}</h3>
              <span className="text-xs font-semibold text-accent">{reach}</span>
            </div>
          ))}
        </div>
      </Fade>

      {/* ═══════════════════════════════════════════
          SECTION 4 — PACKAGES (KEY CONVERSION SECTION)
          ═══════════════════════════════════════════ */}
      <div className="mb-14" id="packages">
        <Fade>
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 mb-3">
              Choose Your Package
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              Our Multi-Channel Advertising Packages
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm">
              Fully managed campaigns across SMS, Email, WhatsApp & Findit.lk — choose the reach that fits your goals.
            </p>
          </div>
        </Fade>
        <ComparisonTable title="SMS Marketing Packages" subtitle="Cost-effective way to reach large audiences instantly" features={smsFeatures} emoji="📱" />
        <ComparisonTable title="WhatsApp Marketing Packages" subtitle="High open rates, direct engagement, personal touch" features={waFeatures} emoji="💬" />
      </div>

      {/* ═══════════════════════════════════════════
          SECTION 5 — FINDIT.LK ADVANTAGE
          ═══════════════════════════════════════════ */}
      <Fade className="mb-14 max-w-4xl mx-auto">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] border border-primary/15">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-7 h-7 text-primary" />
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Powered by Findit.lk — Your Unfair Advantage</h2>
          </div>
          <p className="text-muted-foreground mb-5 leading-relaxed">
            Most agencies only <em>send</em> messages. We place your brand on a <strong className="text-foreground">high-traffic platform</strong> where users are actively searching for products and services like yours.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              "Category-based visibility across industries",
              "Banner placements on high-traffic pages",
              "Exposure to actively searching audiences",
              "Continuous awareness even after campaigns end",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 p-3 rounded-xl bg-card/80 border border-border">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-accent/10 border border-accent/15 text-center">
            <p className="text-sm font-medium text-foreground">
              💡 You don't just reach people — you <strong>capture demand</strong>. No other provider in Sri Lanka offers this.
            </p>
          </div>
        </div>
      </Fade>

      {/* ═══════════════════════════════════════════
          SECTION 6 — WHAT YOU CAN ACHIEVE (Outcomes Grid)
          ═══════════════════════════════════════════ */}
      <Fade className="mb-14">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground text-center mb-2">What You Can Achieve</h2>
        <p className="text-muted-foreground text-center text-sm mb-8">Powerful outcomes for every business goal</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
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
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-4 rounded-xl bg-card border border-border shadow-card text-center hover:shadow-md transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2.5">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-xs font-bold text-foreground mb-0.5">{title}</h3>
              <p className="text-[11px] text-muted-foreground leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </Fade>

      {/* ═══════════════════════════════════════════
          SECTION 7 — WHO THIS IS FOR
          ═══════════════════════════════════════════ */}
      <Fade className="mb-14 max-w-4xl mx-auto">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">Who Should Use Multi-Channel Campaigns?</h2>
        <p className="text-muted-foreground text-sm mb-6">If you need <strong className="text-foreground">quick results</strong>, this is the best solution.</p>
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
          ].map(({ icon: Icon, label, result }) => (
            <div key={label} className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/30 border border-border hover:bg-muted/50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-foreground">{label}</span>
                <span className="text-xs font-semibold text-accent">{result}</span>
              </div>
            </div>
          ))}
        </div>
      </Fade>

      {/* ═══════════════════════════════════════════
          SECTION 8 — USE CASES CHECKLIST
          ═══════════════════════════════════════════ */}
      <Fade className="mb-14 max-w-4xl mx-auto">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">What You Can Use Multi-Channel Campaigns For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card">
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
            <div key={item} className="flex items-center gap-2.5 py-1.5">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </Fade>

      {/* ═══════════════════════════════════════════
          SECTION 9 — HOW IT WORKS
          ═══════════════════════════════════════════ */}
      <Fade className="mb-14">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground text-center mb-2">How It Works</h2>
        <p className="text-muted-foreground text-center text-sm mb-8">Simple. Fast. Effective.</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Target, title: "Choose Audience", desc: "Select your industry & target", step: 1 },
            { icon: Rocket, title: "Launch Campaign", desc: "We execute in 48–72 hours", step: 2 },
            { icon: Mail, title: "Reach Customers", desc: "Multi-channel delivery", step: 3 },
            { icon: BarChart3, title: "Track Results", desc: "Monitor engagement & ROI", step: 4 },
          ].map(({ icon: Icon, title, desc, step }) => (
            <div key={title} className="p-5 rounded-2xl bg-card border border-border shadow-card text-center relative">
              <span className="absolute top-3 right-3 text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">Step {step}</span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-bold text-foreground mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Fade>

      {/* ═══════════════════════════════════════════
          SECTION 10 — TRADITIONAL VS BUZZ CONNECT
          ═══════════════════════════════════════════ */}
      <Fade className="mb-14 max-w-3xl mx-auto">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground text-center mb-6">Traditional Marketing vs Buzz Connect</h2>
        <div className="rounded-2xl overflow-hidden border border-border shadow-card">
          <div className="grid grid-cols-2 bg-muted/50">
            <div className="p-4 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-center gap-1.5">
              <X className="w-3.5 h-3.5 text-destructive" /> Traditional
            </div>
            <div className="p-4 text-center text-xs font-bold uppercase tracking-wider text-accent flex items-center justify-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> Buzz Connect
            </div>
          </div>
          {[
            { trad: "Takes months to show results", buzz: "Launch campaigns in 48–72 hours" },
            { trad: "Limited to one channel", buzz: "Multi-channel exposure (Email + SMS + WhatsApp + Web)" },
            { trad: "No audience targeting", buzz: "Category-based & industry-specific targeting" },
            { trad: "Hard to measure results", buzz: "Detailed performance tracking & reports" },
            { trad: "Expensive for SMEs", buzz: "Affordable packages for every budget" },
          ].map((row, i) => (
            <div key={i} className={`grid grid-cols-2 border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/20"}`}>
              <div className="p-4 text-sm text-muted-foreground border-r border-border">{row.trad}</div>
              <div className="p-4 text-sm font-medium text-foreground">{row.buzz}</div>
            </div>
          ))}
        </div>
      </Fade>

      {/* ═══════════════════════════════════════════
          SECTION 11 — TESTIMONIALS
          ═══════════════════════════════════════════ */}
      <Fade className="mb-14 max-w-5xl mx-auto">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground text-center mb-2">What Our Clients Say</h2>
        <p className="text-muted-foreground text-center text-sm mb-8">Real results from real businesses across Sri Lanka</p>
        <TestimonialsCarousel />
      </Fade>

      {/* ═══════════════════════════════════════════
          SECTION 12 — WHY CHOOSE US (TRUST)
          ═══════════════════════════════════════════ */}
      <Fade className="mb-14 max-w-4xl mx-auto">
        <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card">
          <div className="flex items-center gap-3 mb-5">
            <Shield className="w-6 h-6 text-primary" />
            <h2 className="font-heading text-xl font-bold text-foreground">Why Businesses Choose Buzz Connect</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              "Proven multi-channel marketing strategy",
              "350,000+ segmented audience database",
              "Campaign launch within 48–72 hours",
              "Exclusive Findit.lk platform integration",
              "End-to-end campaign management",
              "Affordable packages for every business size",
              "Industry-specific audience targeting",
              "Detailed performance tracking & reports",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/30">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Fade>

      {/* ═══════════════════════════════════════════
          SECTION 13 — URGENCY
          ═══════════════════════════════════════════ */}
      <Fade className="mb-14 max-w-3xl mx-auto">
        <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/15 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <h3 className="font-heading text-base font-bold text-foreground">Limited Weekly Campaign Slots</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            We only run a limited number of campaigns each week to ensure quality. <strong className="text-foreground">Book early to secure your slot.</strong>
          </p>
          <WhatsAppButton text="Hi Buzz Connect, I want to secure a campaign slot." label="Secure Your Slot Now" className="bg-destructive text-destructive-foreground hover:bg-destructive/90" />
        </div>
      </Fade>

      {/* ═══════════════════════════════════════════
          SECTION 14 — FAQ
          ═══════════════════════════════════════════ */}
      <Fade className="mb-14 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="w-6 h-6 text-primary" />
          <h2 className="font-heading text-xl font-bold text-foreground">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-4 sm:p-5 rounded-xl bg-card border border-border shadow-card">
              <summary className="font-heading font-semibold text-sm text-foreground cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <span className="text-muted-foreground group-open:rotate-180 transition-transform text-xs ml-2">▼</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </Fade>

      {/* ═══════════════════════════════════════════
          FINAL CTA — CONVERSION BLOCK
          ═══════════════════════════════════════════ */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-8 sm:p-12 rounded-3xl gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.15),transparent_50%)]" />
        <div className="relative">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">
            Launch Your Campaign in 48 Hours
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto text-sm sm:text-base">
            Reach thousands of customers this week through SMS, WhatsApp, Email & Findit.lk — the fastest way to boost awareness in Sri Lanka.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/70 text-xs sm:text-sm mb-6">
            <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-accent" /> Fast execution</span>
            <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-accent" /> 1.2M+ reach</span>
            <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-accent" /> Multi-channel</span>
            <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-accent" /> Findit.lk exposure</span>
          </div>
          <WhatsAppButton text="Hi Buzz Connect, I want to launch a multi-channel campaign." label="Chat on WhatsApp Now" className="px-8 py-4 text-base" />
          <p className="text-primary-foreground/50 text-xs mt-3">Limited slots available — secure yours today</p>
        </div>
      </motion.div>
    </ServicePageLayout>
  );
};

export default SpecialPackages;
