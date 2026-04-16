import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import {
  CheckCircle, Mail, Smartphone, MessageSquare, Globe, Layout, Share2,
  HelpCircle, ArrowRight, Zap, Target, TrendingUp,
  GraduationCap, ShoppingCart, Shirt, Building2, Home, Briefcase,
  BarChart3, Users, Clock, Shield, Star, Send, Eye, DollarSign,
} from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

/* ── Table of Contents ── */
const tocItems = [
  { id: "digital-audience", label: "Digital Audience in Sri Lanka" },
  { id: "what-is", label: "What is Advertising in Sri Lanka?" },
  { id: "why-different", label: "Why BuzzConnect is Different" },
  { id: "direct-marketing", label: "Why Direct Marketing Works Better" },
  { id: "comparison", label: "Direct Marketing vs Social Media" },
  { id: "industries", label: "Industries We Serve" },
  { id: "results", label: "Real Campaign Results" },
  { id: "cost", label: "Cost of Advertising" },
  { id: "platforms", label: "Best Advertising Platforms" },
  { id: "faq", label: "FAQs" },
];

/* ── FAQs ── */
const faqs = [
  {
    q: "What is the best way to advertise in Sri Lanka?",
    a: "A multi-channel strategy combining email, WhatsApp, SMS, and web ads delivers the best results. BuzzConnect's integrated campaigns reach 500,000+ users across multiple platforms simultaneously.",
  },
  {
    q: "How much does advertising cost in Sri Lanka?",
    a: "Costs vary, but BuzzConnect offers affordable packages with high reach and ROI. Our multi-channel campaigns deliver more reach per rupee than traditional advertising or social media ads alone.",
  },
  {
    q: "How fast can I launch a campaign?",
    a: "Campaigns can be launched within 48–72 hours. WhatsApp and SMS campaigns generate immediate engagement, while email campaigns typically show results within 48 hours.",
  },
  {
    q: "Is digital advertising effective in Sri Lanka?",
    a: "Yes — with over 13 million active internet users and 29 million mobile connections, digital advertising is one of the most effective ways to reach customers in Sri Lanka.",
  },
];

/* ── Industries ── */
const industries = [
  { icon: GraduationCap, label: "Education & Courses", desc: "Promote degree programs, diplomas, and training courses to students.", link: "/education-marketing-sri-lanka" },
  { icon: ShoppingCart, label: "Retail & Ecommerce", desc: "Drive sales for clothing, electronics, and online stores.", link: "/fashion-marketing-sri-lanka" },
  { icon: Shirt, label: "Restaurants & Food Businesses", desc: "Promote offers, new menus, and seasonal deals.", link: "/restaurant-marketing-sri-lanka" },
  { icon: Home, label: "Real Estate", desc: "Generate leads for property sales and rentals.", link: "/real-estate-marketing-sri-lanka" },
  { icon: Briefcase, label: "Recruitment Campaigns", desc: "Reach thousands of job seekers instantly.", link: "/" },
  { icon: Building2, label: "Hotels & Hospitality", desc: "Fill rooms and boost bookings year-round.", link: "/hotel-marketing-sri-lanka" },
];

/* ── Stats ── */
const heroStats = [
  { stat: "13M+", label: "Internet Users" },
  { stat: "29M+", label: "Mobile Connections" },
  { stat: "2,000+", label: "Businesses Served" },
  { stat: "48hrs", label: "Campaign Launch" },
];

const AdvertisingSriLanka = () => {
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
      name: "Advertising in Sri Lanka",
      provider: { "@type": "Organization", name: "BuzzConnect", url: "https://buzzconnect.lk" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Leading advertising company in Sri Lanka offering multi-channel campaigns via WhatsApp, SMS, email, and display advertising.",
      serviceType: "Digital Advertising",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Advertising in Sri Lanka | Best Advertising Company",
      url: "https://buzzconnect.lk/advertising-sri-lanka",
      isPartOf: { "@type": "WebSite", name: "BuzzConnect", url: "https://buzzconnect.lk" },
    },
  ], []);

  const fadeIn = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

  return (
    <ServicePageLayout
      badge="#1 Advertising Company in Sri Lanka"
      title="Advertising in Sri Lanka – Reach Millions of Customers Fast with BuzzConnect"
      subtitle="Buzz Connect offers powerful advertising solutions in Sri Lanka designed to help businesses reach targeted audiences quickly and effectively."
    >
      <SEOHead
        title="Advertising in Sri Lanka | Best Advertising Company for Fast Results"
        description="Advertising in Sri Lanka made easy. Reach 500,000+ customers fast with WhatsApp, SMS & email campaigns. Launch within 48 hours."
        canonical="/advertising-sri-lanka"
        keywords="advertising sri lanka, advertising in sri lanka, best advertising company sri lanka, digital advertising sri lanka, online advertising sri lanka, advertising agency sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Advertising Sri Lanka", url: "/advertising-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">

        {/* ── Hero Stats Bar ── */}
        <motion.div {...fadeIn} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {heroStats.map(s => (
            <div key={s.label} className="text-center p-5 rounded-2xl bg-accent/10 border border-accent/20">
              <div className="text-2xl sm:text-3xl font-bold text-accent font-heading">{s.stat}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Introduction ── */}
        <motion.div {...fadeIn} className="mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Buzz Connect offers powerful <strong>advertising solutions in Sri Lanka</strong> designed to help businesses reach targeted audiences quickly and effectively. Using a combination of email marketing, WhatsApp campaigns, SMS marketing, and high-traffic web placements, we deliver measurable results within days.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you're looking for the fastest way to promote your business in Sri Lanka, generate leads, and increase sales — BuzzConnect provides the most cost-effective multi-channel advertising system available.
          </p>
        </motion.div>

        {/* ── Table of Contents ── */}
        <motion.nav {...fadeIn} className="mb-16 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card" aria-label="Table of Contents">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4">📑 In This Guide</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </motion.nav>

        {/* ── Digital Audience in Sri Lanka ── */}
        <motion.div id="digital-audience" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            🌍 Digital Audience in Sri Lanka – Why Advertising Works
          </h2>
          <p className="text-muted-foreground mb-6">
            Sri Lanka's digital landscape is growing rapidly, creating massive opportunities for businesses to reach customers online.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: Globe, text: "Over 13+ million internet users actively browse online" },
              { icon: Smartphone, text: "More than 29 million mobile connections across the country" },
              { icon: Users, text: "Millions of users engage daily on WhatsApp, email, and websites" },
              { icon: TrendingUp, text: "Internet usage continues to grow every year" },
            ].map(item => (
              <div key={item.text} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-foreground font-semibold mb-2">👉 This means one thing:</p>
            <p className="text-muted-foreground leading-relaxed">
              Your customers are already online — you just need to reach them. <strong>BuzzConnect</strong> helps you tap into this growing audience instantly.
            </p>
          </div>
        </motion.div>

        {/* ── What is Advertising in Sri Lanka ── */}
        <motion.div id="what-is" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            📢 What is Advertising in Sri Lanka?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>Advertising in Sri Lanka</strong> includes a range of digital and direct marketing strategies used to promote products and services to local audiences.
          </p>

          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Common advertising methods:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { icon: Share2, text: "Social media advertising (Facebook, Instagram)" },
              { icon: Globe, text: "Google Ads (search & display)" },
              { icon: Mail, text: "Email marketing" },
              { icon: Smartphone, text: "SMS marketing" },
              { icon: MessageSquare, text: "WhatsApp marketing" },
              { icon: Layout, text: "Website banner advertising" },
              { icon: BarChart3, text: "Classified platforms" },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-foreground text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <p className="text-muted-foreground leading-relaxed">
              While many businesses rely only on social media ads, the most effective strategy in Sri Lanka is <strong>multi-channel direct advertising</strong> — combining multiple platforms for maximum reach.
            </p>
          </div>
        </motion.div>

        {/* ── Why BuzzConnect is Different ── */}
        <motion.div id="why-different" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            ⚡ Why BuzzConnect is Different
          </h2>
          <p className="text-muted-foreground mb-8">
            Unlike traditional agencies, Buzz Connect combines multiple high-performing channels into one campaign.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Multi-Channel Reach */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">🚀 Multi-Channel Reach</h3>
              <ul className="space-y-2">
                {[
                  "Email campaigns to thousands of targeted users",
                  "WhatsApp campaigns with high open rates",
                  "SMS campaigns for instant delivery",
                  "Banner ads on high-traffic platforms",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Targeted Audience */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">🎯 Targeted Audience Access</h3>
              <p className="text-sm text-muted-foreground mb-3">Reach:</p>
              <ul className="space-y-2">
                {["Students", "Job seekers", "Online shoppers", "Business owners", "General consumers across Sri Lanka"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fast Results */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">📈 Fast Results</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Launch campaigns within <strong>48–72 hours</strong> and start receiving inquiries immediately. No long waiting periods — your message reaches thousands of potential customers within days.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Why Direct Marketing Works Better ── */}
        <motion.div id="direct-marketing" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            📊 Why Direct Marketing Works Better in Sri Lanka
          </h2>
          <p className="text-muted-foreground mb-8">
            Sri Lanka is a mobile-first country, and direct communication channels perform significantly better than traditional ads.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card text-center">
              <MessageSquare className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-heading font-bold text-foreground mb-2">💬 WhatsApp Marketing</h3>
              <p className="text-sm text-muted-foreground mb-1">Extremely high open rates</p>
              <p className="text-sm text-muted-foreground">Direct communication with users</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card text-center">
              <Mail className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-heading font-bold text-foreground mb-2">📧 Email Marketing</h3>
              <p className="text-sm text-muted-foreground mb-1">Cost-effective mass reach</p>
              <p className="text-sm text-muted-foreground">Ideal for promotions, courses & offers</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card text-center">
              <Smartphone className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-heading font-bold text-foreground mb-2">📱 SMS Marketing</h3>
              <p className="text-sm text-muted-foreground mb-1">Instant delivery to thousands</p>
              <p className="text-sm text-muted-foreground">Works even without internet</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-foreground font-semibold">
              👉 Combining all three ensures maximum visibility and engagement.
            </p>
          </div>
        </motion.div>

        {/* ── Direct Marketing vs Social Media ── */}
        <motion.div id="comparison" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            🆚 Direct Marketing vs Social Media Advertising
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-card mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-4 font-heading font-bold text-foreground">Feature</th>
                  <th className="text-left p-4 font-heading font-bold text-accent">Direct Marketing</th>
                  <th className="text-left p-4 font-heading font-bold text-muted-foreground">Social Media Ads</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Reach Speed", direct: "Instant", social: "Slower" },
                  { feature: "Cost Efficiency", direct: "High", social: "Can be expensive" },
                  { feature: "Targeting", direct: "Database-based", social: "Algorithm-based" },
                  { feature: "Visibility", direct: "Guaranteed", social: "Not guaranteed" },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-4 font-medium text-foreground">{row.feature}</td>
                    <td className="p-4 text-foreground">{row.direct}</td>
                    <td className="p-4 text-muted-foreground">{row.social}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-foreground font-semibold">
              👉 With BuzzConnect, your message is delivered directly — not dependent on algorithms.
            </p>
          </div>
        </motion.div>

        {/* ── Industries We Serve ── */}
        <motion.div id="industries" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            🏢 Industries We Serve
          </h2>
          <p className="text-muted-foreground mb-6">
            Our advertising solutions are trusted by businesses across multiple industries in Sri Lanka:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map(ind => (
              <Link key={ind.label} to={ind.link} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all group">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <ind.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{ind.label}</h3>
                  <p className="text-sm text-muted-foreground">{ind.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-accent ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── Real Campaign Results ── */}
        <motion.div id="results" {...fadeIn} className="mb-16 scroll-mt-24 p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            📈 Real Campaign Results
          </h2>
          <p className="text-muted-foreground mb-6">Here's what businesses achieve with BuzzConnect:</p>
          <div className="space-y-4 mb-6">
            {[
              { icon: TrendingUp, text: "1,000+ inquiries generated within days" },
              { icon: Eye, text: "Massive reach across Sri Lanka" },
              { icon: Users, text: "Increased brand visibility and engagement" },
            ].map(item => (
              <div key={item.text} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground font-semibold">
            👉 Our campaigns are designed for real business results, not just impressions.
          </p>
        </motion.div>

        {/* ── Cost of Advertising ── */}
        <motion.div id="cost" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            💰 Cost of Advertising in Sri Lanka
          </h2>
          <p className="text-muted-foreground mb-6">
            Advertising costs in Sri Lanka vary depending on platform and reach.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
              <h3 className="font-heading font-bold text-foreground mb-4">Typical options:</h3>
              <ul className="space-y-3">
                {[
                  "Social media ads – ongoing budget required",
                  "Google Ads – competitive and costly",
                  "Traditional media – expensive",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
              <h3 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-accent" /> BuzzConnect Advantage:
              </h3>
              <ul className="space-y-3">
                {[
                  "Fixed packages – no hidden costs",
                  "Massive reach at low cost",
                  "Multi-channel exposure included",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground font-semibold">
            👉 You get more reach for less cost compared to traditional advertising.
          </p>
        </motion.div>

        {/* ── Best Advertising Platforms ── */}
        <motion.div id="platforms" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            🌐 Best Advertising Platforms in Sri Lanka
          </h2>
          <p className="text-muted-foreground mb-6">Some of the most effective platforms include:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { icon: Share2, text: "Social media networks" },
              { icon: Globe, text: "Search engines" },
              { icon: Mail, text: "Email & messaging platforms" },
              { icon: Layout, text: "High-traffic local websites" },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <p className="text-muted-foreground leading-relaxed">
              BuzzConnect integrates all these into one powerful system — including access to <strong>Findit.lk</strong>, one of Sri Lanka's leading classified platforms.
            </p>
          </div>
        </motion.div>

        {/* ── Internal Links ── */}
        <motion.div {...fadeIn} className="mb-16 p-6 rounded-2xl bg-card border border-border shadow-card">
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">Explore More Advertising Solutions</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>🌐 <Link to="/online-advertising-sri-lanka" className="text-accent hover:underline font-semibold">Online Advertising in Sri Lanka</Link> — Digital-specific strategies for maximum online visibility</p>
            <p>🚀 <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">Multi-Channel Marketing Campaigns</Link> — Combine all channels for maximum reach</p>
            <p>📊 <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">Lead Generation Services</Link> — Convert advertising reach into qualified leads</p>
            <p>🏆 <Link to="/best-advertising-company-sri-lanka" className="text-accent hover:underline font-semibold">Best Advertising Company in Sri Lanka</Link> — Why businesses trust BuzzConnect</p>
          </div>
        </motion.div>

        {/* ── FAQ ── */}
        <motion.div id="faq" {...fadeIn} className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-7 h-7 text-primary" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(faq => (
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

        <RelatedArticles currentPath="/advertising-sri-lanka" max={4} />
      </article>

      {/* ── Final CTA ── */}
      <motion.div {...fadeIn} className="text-center p-10 rounded-2xl gradient-hero mt-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
          🚀 Start Advertising in Sri Lanka Today
        </h2>
        <p className="text-primary-foreground/80 mb-2 max-w-2xl mx-auto">
          Reach more customers, grow your business, and achieve real results with BuzzConnect.
        </p>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto font-semibold">
          👉 Contact us now for a free quote.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact-us" className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
            Get a Free Quote
          </Link>
          <a href="https://wa.me/94771437707?text=Hi%20BuzzConnect%2C%20I%27m%20interested%20in%20advertising%20in%20Sri%20Lanka." target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full bg-primary-foreground/10 text-primary-foreground font-bold border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors">
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </ServicePageLayout>
  );
};

export default AdvertisingSriLanka;
