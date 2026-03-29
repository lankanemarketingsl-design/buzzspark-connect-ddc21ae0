import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import {
  CheckCircle, Mail, MessageSquare, Smartphone, Globe, Target, Zap,
  BarChart3, GraduationCap, Building2, ShoppingCart, Home, Calendar,
  Rocket, HelpCircle, Check, X, ArrowRight, Clock, TrendingUp, Shield,
  Users, AlertTriangle, Shirt, Store, Star, Megaphone, PartyPopper,
  Phone, BookOpen, Landmark, RefreshCw, Eye
} from "lucide-react";
import { useMemo, useState, useEffect, useCallback } from "react";
import SEOHead from "@/components/SEOHead";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
            <div key={i} className="min-w-full px-4">
              <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card text-center">
                <div className="flex justify-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-5 h-5 fill-accent text-accent" />
                  ))}
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
          <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted-foreground/30"}`} aria-label={`Go to testimonial ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

/* ── Data ── */

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

const traditionalVsUs = [
  { trad: "Takes months to show results", buzz: "Launch campaigns in 48–72 hours" },
  { trad: "Limited to one channel", buzz: "Multi-channel exposure (Email + SMS + WhatsApp + Web)" },
  { trad: "No audience targeting", buzz: "Category-based & industry-specific targeting" },
  { trad: "Hard to measure results", buzz: "Detailed performance tracking & reports" },
  { trad: "Expensive for SMEs", buzz: "Affordable packages for every budget" },
];

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

const ComparisonTable = ({ title, subtitle, features, emoji }: { title: string; subtitle: string; features: FeatureRow[]; emoji: string }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
    <div className="mb-6">
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
        <span>{emoji}</span> {title}
      </h3>
      <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
    </div>
    <div className="rounded-2xl overflow-hidden border border-border shadow-card">
      <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] bg-muted/50">
        <div className="p-3 sm:p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Features</div>
        {tierLabels.map((tier, i) => (
          <div key={tier} className={`p-3 sm:p-4 text-center text-xs font-bold uppercase tracking-wider ${i === 3 ? "bg-accent text-primary" : "text-muted-foreground"}`}>
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
    <div className="mt-6 text-center">
      <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20multi-channel%20marketing%20packages." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-primary font-bold text-sm hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/25 hover:scale-105">
        Get Started on WhatsApp <ArrowRight className="w-4 h-4" />
      </a>
      <p className="text-muted-foreground text-xs mt-2">Fast response · Quick campaign launch</p>
    </div>
  </motion.div>
);

const SectionBlock = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`mb-16 ${className}`}>
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

      {/* ─── 1. SPEED + SCALE HERO BLOCK ─── */}
      <SectionBlock className="max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">⚡ Massive Reach in a Short Time</h2>
          </div>
          <p className="text-muted-foreground text-lg mb-2">
            Unlike traditional marketing that takes <strong>months</strong> to show results…
          </p>
          <p className="text-foreground text-lg font-semibold mb-6">
            Our multi-channel campaigns deliver results <span className="text-accent">within days</span>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { icon: Clock, text: "Launch in 48–72 hours" },
              { icon: Users, text: "Reach hundreds of thousands instantly" },
              { icon: TrendingUp, text: "Generate awareness & inquiries fast" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <Icon className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground italic">
            👉 Perfect for time-sensitive promotions, course intakes, property launches & events.
          </p>
        </div>
      </SectionBlock>

      {/* ─── 2. IMPACT NUMBERS ─── */}
      <SectionBlock>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">📈 Campaign Reach Potential</h2>
        <p className="text-muted-foreground text-center mb-8">One campaign = multiple touchpoints = faster results</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "1.2M+", label: "Total Reach", icon: Users },
            { number: "350,000+", label: "Email Database", icon: Mail },
            { number: "400,000+", label: "SMS Reach", icon: Smartphone },
            { number: "4+", label: "Marketing Channels", icon: Target },
          ].map(({ number, label, icon: Icon }) => (
            <div key={label} className="text-center p-6 rounded-2xl bg-card shadow-card border border-border">
              <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-1">{number}</div>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* ─── 3. POWER STATEMENT ─── */}
      <SectionBlock className="max-w-4xl mx-auto">
        <div className="text-center p-8 sm:p-10 rounded-2xl bg-card border border-border shadow-card">
          <Rocket className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">🚀 One Campaign. Maximum Exposure.</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Instead of relying on a single platform, your campaign appears across <strong>multiple high-impact channels simultaneously</strong>.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Mail, label: "Email Inboxes" },
              { icon: Smartphone, label: "SMS Messages" },
              { icon: MessageSquare, label: "WhatsApp" },
              { icon: Globe, label: "Findit.lk" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
                <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-semibold text-foreground">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-6 font-medium">
            👉 Increasing visibility, brand recall, and conversions significantly
          </p>
        </div>
      </SectionBlock>

      {/* ─── 4. PACKAGES (MOVED UP) ─── */}
      <SectionBlock>
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Compare & Choose</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Our Multi-Channel Advertising Packages
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Run high-impact campaigns across SMS, Email, WhatsApp &amp; Findit.lk with fully managed execution.
          </p>
        </div>
        <ComparisonTable title="SMS Marketing Packages" subtitle="A cost-effective way to reach large audiences instantly" features={smsFeatures} emoji="📱" />
        <ComparisonTable title="WhatsApp Marketing Packages" subtitle="Engage customers directly with high open and response rates" features={waFeatures} emoji="💬" />
      </SectionBlock>

      {/* ─── 5. FINDIT.LK UNFAIR ADVANTAGE ─── */}
      <SectionBlock className="max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-primary" />
            <h2 className="font-heading text-2xl font-bold text-foreground">🌐 Powered by Findit.lk — Your Unfair Advantage</h2>
          </div>
          <p className="text-muted-foreground text-lg mb-2">
            Most agencies only <em>send</em> messages. <strong>We go further.</strong>
          </p>
          <p className="text-foreground font-medium mb-6">
            👉 Your campaign is also placed on a high-traffic platform where users are <strong>actively searching</strong> for products and services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Category-based visibility across industries",
              "Banner placements on high-traffic pages",
              "Exposure to high-intent, actively searching audiences",
              "Continuous awareness — even after campaigns end",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 p-3 rounded-lg bg-card border border-border">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
            <p className="text-sm font-medium text-foreground text-center">
              💡 You don't just reach people — you <strong>capture demand</strong>. No other marketing provider in Sri Lanka offers this.
            </p>
          </div>
        </div>
      </SectionBlock>

      {/* ─── 6. TRADITIONAL VS MULTI-CHANNEL ─── */}
      <SectionBlock>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">❌ Traditional Marketing vs ✅ Buzz Connect Campaigns</h2>
        <div className="rounded-2xl overflow-hidden border border-border shadow-card max-w-3xl mx-auto">
          <div className="grid grid-cols-2 bg-muted/50">
            <div className="p-4 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-center gap-2">
              <X className="w-4 h-4 text-destructive" /> Traditional
            </div>
            <div className="p-4 text-center text-xs font-bold uppercase tracking-wider text-accent flex items-center justify-center gap-2">
              <Check className="w-4 h-4" /> Buzz Connect
            </div>
          </div>
          {traditionalVsUs.map((row, i) => (
            <div key={i} className={`grid grid-cols-2 border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/20"}`}>
              <div className="p-4 text-sm text-muted-foreground border-r border-border">{row.trad}</div>
              <div className="p-4 text-sm font-medium text-foreground">{row.buzz}</div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* ─── 7. PROCESS FLOW ─── */}
      <SectionBlock>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">🔄 How It Works</h2>
        <p className="text-muted-foreground text-center mb-8">Simple. Fast. Effective.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Target, title: "Choose Audience", desc: "Select your target audience by industry & category", step: 1 },
            { icon: Rocket, title: "Launch Campaign", desc: "We execute across all channels in 48–72 hours", step: 2 },
            { icon: Mail, title: "Reach Customers", desc: "Your message reaches hundreds of thousands instantly", step: 3 },
            { icon: BarChart3, title: "Track Results", desc: "Monitor engagement, inquiries & conversions", step: 4 },
          ].map(({ icon: Icon, title, desc, step }) => (
            <div key={title} className="p-6 rounded-2xl bg-card shadow-card border border-border text-center relative">
              <span className="absolute top-3 right-3 text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-full">Step {step}</span>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* ─── 8. WHO THIS IS FOR ─── */}
      <SectionBlock className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">🎯 Who Should Use Multi-Channel Campaigns?</h2>
        <p className="text-muted-foreground mb-6">If you need <strong>quick results</strong>, this is the best solution.</p>
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
          ].map(({ icon: Icon, label, result }) => (
            <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-muted/40 border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-sm font-semibold text-foreground">{label}</span>
                <span className="text-sm text-accent font-medium ml-2">{result}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* ─── WHAT YOU CAN ACHIEVE ─── */}
      <SectionBlock className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">🚀 What You Can Achieve with Multi-Channel Campaigns</h2>
          <p className="text-muted-foreground">Powerful outcomes for every business goal</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { icon: Target, title: "Brand Awareness", desc: "Reach thousands of potential customers across Sri Lanka within days" },
            { icon: Rocket, title: "Business & Product Launches", desc: "Create instant visibility for new businesses, services, or products" },
            { icon: ShoppingCart, title: "Promotions & Offers", desc: "Promote discounts, seasonal deals, and limited-time campaigns fast" },
            { icon: Phone, title: "Lead Generation", desc: "Generate calls, WhatsApp inquiries, and customer interest quickly" },
            { icon: GraduationCap, title: "Student Recruitment", desc: "Attract students for courses, degrees, and training programs" },
            { icon: Landmark, title: "Real Estate Marketing", desc: "Promote properties, lands, and projects to a wide audience" },
            { icon: PartyPopper, title: "Event Promotion", desc: "Drive registrations and attendance for events and workshops" },
            { icon: TrendingUp, title: "Sales Boost", desc: "Increase sales and customer engagement in a short period" },
            { icon: RefreshCw, title: "Customer Re-Engagement", desc: "Reconnect with existing customers and bring them back" },
            { icon: Globe, title: "Expand Your Reach", desc: "Target new audiences across multiple platforms including Findit.lk" },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-4 rounded-xl bg-card border border-border shadow-card text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionBlock>

      {/* ─── WHAT YOU CAN USE CAMPAIGNS FOR ─── */}
      <SectionBlock className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">✅ What You Can Use Multi-Channel Campaigns For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
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
            "Boosting visibility across multiple platforms",
            "Supporting short-term marketing goals",
            "Generating quick market response",
            "Testing new products or services",
            "Expanding business reach across Sri Lanka",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 py-1">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* ─── 9. TRUST SIGNALS ─── */}
      <SectionBlock className="max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-7 h-7 text-primary" />
            <h2 className="font-heading text-2xl font-bold text-foreground">🏆 Why Businesses Choose Buzz Connect</h2>
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
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 text-center italic">
            "Unlike typical agencies, Buzz Connect combines Email, SMS, WhatsApp &amp; Findit.lk into one powerful campaign system."
          </p>
        </div>
      </SectionBlock>

      {/* ─── 10. CAMPAIGNS DONE COUNTER ─── */}
      <SectionBlock>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Campaigns Executed", icon: Rocket },
            { number: "100+", label: "Businesses Served", icon: Building2 },
            { number: "50M+", label: "Impressions", icon: Mail },
            { number: "10+", label: "Years Experience", icon: Shield },
          ].map(({ number, label, icon: Icon }) => (
            <div key={label} className="text-center p-5 rounded-2xl bg-primary/5 border border-primary/15">
              <Icon className="w-7 h-7 text-primary mx-auto mb-2" />
              <div className="font-heading text-2xl sm:text-3xl font-bold text-foreground">{number}</div>
              <span className="text-xs text-muted-foreground font-medium">{label}</span>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* ─── 11. TESTIMONIALS CAROUSEL ─── */}
      <SectionBlock className="max-w-5xl mx-auto">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">⭐ What Our Clients Say</h2>
        <p className="text-muted-foreground text-center mb-8">Real results from real businesses across Sri Lanka</p>
        <TestimonialsCarousel />
      </SectionBlock>

      {/* ─── 12. URGENCY ─── */}
      <SectionBlock className="max-w-3xl mx-auto">
        <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <h3 className="font-heading text-lg font-bold text-foreground">⏳ Limited Weekly Campaign Slots</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            We only run a limited number of campaigns each week to ensure performance. <strong>Book early to secure your campaign slot.</strong>
          </p>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20secure%20a%20campaign%20slot." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-destructive text-destructive-foreground font-bold text-sm hover:bg-destructive/90 transition-all">
            Secure Your Slot Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </SectionBlock>

      {/* ─── FAQ ─── */}
      <SectionBlock className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
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
      </SectionBlock>

      {/* ─── FINAL CTA ─── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-hero">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
          🚀 Launch Your Campaign in 48 Hours
        </h2>
        <p className="text-primary-foreground/80 mb-2 max-w-2xl mx-auto">
          Reach thousands of customers this week through SMS, WhatsApp, Email &amp; Findit.lk.
        </p>
        <p className="text-primary-foreground/90 font-semibold mb-6">
          👉 The fastest way to boost awareness and generate inquiries in Sri Lanka
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/70 text-sm mb-6">
          <span className="flex items-center gap-1"><Check className="w-4 h-4 text-accent" /> Fast execution</span>
          <span className="flex items-center gap-1"><Check className="w-4 h-4 text-accent" /> Multi-channel reach</span>
          <span className="flex items-center gap-1"><Check className="w-4 h-4 text-accent" /> 1.2M+ audience</span>
        </div>
        <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20launch%20a%20multi-channel%20campaign." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-primary font-bold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/25 hover:scale-105">
          Chat on WhatsApp Now <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-primary-foreground/50 text-xs mt-3">Limited slots available — secure yours today</p>
      </motion.div>
    </ServicePageLayout>
  );
};

export default SpecialPackages;
