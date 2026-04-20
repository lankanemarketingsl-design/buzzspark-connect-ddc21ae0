import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import {
  Mail, MessageSquare, Smartphone, Globe, Target, BarChart3, Zap, Send,
  TrendingUp, Users, MapPin, ListChecks, ArrowRight, CheckCircle,
  GraduationCap, ShoppingCart, Utensils, Building2, Home, Briefcase,
  Heart, Plane, Banknote, Rocket, ShieldCheck, Award,
} from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

/* ── Hero Stats ── */
const heroStats = [
  { stat: "500+", label: "Campaigns Delivered" },
  { stat: "98%", label: "Client Retention Rate" },
  { stat: "10M+", label: "Messages Sent" },
  { stat: "50+", label: "Industries Served" },
];

/* ── Table of Contents ── */
const tocItems = [
  { id: "what-is", label: "What Is Digital Marketing & Why It Matters in Sri Lanka" },
  { id: "why-local", label: "Why Choose a Digital Marketing Company in Sri Lanka" },
  { id: "why-buzzconnect", label: "Why BuzzConnect Is a Leading Digital Marketing Company" },
  { id: "services", label: "Our Digital Marketing Services in Sri Lanka" },
  { id: "whatsapp", label: "WhatsApp Marketing — The Most Direct Channel" },
  { id: "how-it-works", label: "How WhatsApp Bulk Messaging Works at BuzzConnect" },
  { id: "use-cases", label: "Best Use Cases for WhatsApp Marketing" },
  { id: "email", label: "Email Marketing Sri Lanka — Long-Term Growth" },
  { id: "comparison", label: "WhatsApp vs Email Marketing" },
  { id: "industries", label: "Industries We Serve in Sri Lanka" },
  { id: "faq", label: "Frequently Asked Questions" },
];

/* ── Why choose local ── */
const localAdvantages = [
  { icon: MapPin, title: "Local Market Expertise", desc: "Understand Sri Lankan customer behavior, cultural trends, and buying patterns that international platforms simply cannot grasp." },
  { icon: Globe, title: "Multilingual Targeting", desc: "Reach audiences in Sinhala, Tamil, and English — communicate with every segment of the Sri Lankan market in the language they prefer." },
  { icon: BarChart3, title: "Cost-Effective Marketing", desc: "Achieve significantly better results at a lower cost compared to traditional advertising channels like TV, radio, or newspapers." },
  { icon: Zap, title: "Faster Campaign Execution", desc: "Quick setup, faster communication, and real-time adjustments — campaigns go live within 48 hours, not weeks." },
];

/* ── Approach ── */
const approach = [
  { icon: Target, title: "Reach", desc: "We identify and target the right audience for your business using our pre-filtered database of Sri Lankan consumers, professionals, and businesses." },
  { icon: Send, title: "Engage", desc: "We create compelling messages — text, images, videos, PDFs — that capture attention instantly and drive meaningful action." },
  { icon: TrendingUp, title: "Convert", desc: "We optimize every campaign in real time to generate real business results — inquiries, leads, calls, and sales — not just vanity metrics." },
];

/* ── Services ── */
const services = [
  {
    icon: MessageSquare,
    title: "WhatsApp Bulk Messaging",
    desc: "Connect with customers through Sri Lanka's most used messaging platform.",
    points: ["Bulk WhatsApp messaging campaigns", "Rich media messages (images, videos, PDFs)", "Promotional broadcasts", "Direct customer engagement"],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Build long-term relationships and drive repeat sales with cost-effective email.",
    points: ["Bulk email campaigns", "Targeted audience segmentation", "Professionally designed templates", "Performance tracking"],
  },
  {
    icon: Target,
    title: "Audience Targeting",
    desc: "Reach the right people at the right time with precision filtering.",
    points: ["Filtered audience selection", "Location-based targeting", "Interest-based segmentation", "Demographic filters"],
  },
  {
    icon: BarChart3,
    title: "Campaign Analytics",
    desc: "Track and improve your campaign performance with transparent reporting.",
    points: ["Delivery insights", "Engagement reports", "Data-driven optimization", "Real-time dashboards"],
  },
  {
    icon: Globe,
    title: "Multilingual Campaigns",
    desc: "Communicate effectively across every demographic in Sri Lanka.",
    points: ["Sinhala campaigns", "Tamil campaigns", "English campaigns", "Bilingual creative"],
  },
];

/* ── WhatsApp benefits ── */
const whatsappBenefits = [
  "Reach customers instantly — most messages read within minutes",
  "Deliver messages directly to inboxes with 85–95% open rates",
  "Increase engagement and response rates dramatically",
  "Send rich media — promotional offers, product images, flyers",
  "Share videos, PDFs, catalogs, and clickable website links",
  "Personalize messages for higher conversion",
];

/* ── How WhatsApp works steps ── */
const whatsappSteps = [
  { num: "01", title: "Define your campaign goal", desc: "Tell us what you want to achieve — leads, sales, footfall, awareness, or recruitment." },
  { num: "02", title: "Audience targeting from our database", desc: "We pull a filtered audience from our pre-segmented internal database — no contact list needed from you." },
  { num: "03", title: "Message creation by our team", desc: "Our team crafts compelling copy, prepares creative assets, and optimizes the message for WhatsApp." },
  { num: "04", title: "Campaign approval", desc: "You review and approve the final message before we send anything. Total transparency." },
  { num: "05", title: "Bulk message delivery", desc: "We dispatch the campaign through carrier-grade infrastructure for maximum delivery and minimum bounces." },
  { num: "06", title: "Performance reporting", desc: "You receive a detailed report covering delivery rates, engagement, and the leads generated." },
];

/* ── WhatsApp use cases ── */
const useCases = [
  { icon: Zap, title: "Flash Sales & Promotions", desc: "Drive immediate response with time-limited offers." },
  { icon: Rocket, title: "Product Launches", desc: "Announce new products to thousands of customers instantly." },
  { icon: Users, title: "Event Marketing", desc: "Fill seats for events, webinars, and open days quickly." },
  { icon: TrendingUp, title: "Seasonal Campaigns", desc: "Maximize festive season sales with targeted broadcasts." },
  { icon: Heart, title: "Customer Re-engagement", desc: "Win back inactive customers with personalized offers." },
  { icon: Send, title: "Business Announcements", desc: "Communicate updates, openings, and important news." },
];

/* ── Email benefits ── */
const emailBenefits = [
  "Send targeted campaigns to thousands of inboxes simultaneously",
  "Promote offers, new products, and updates with rich layouts",
  "Nurture leads over time with sequences and newsletters",
  "Track performance in real time — opens, clicks, conversions",
  "Cost-effective at scale — one of the highest ROI channels globally",
  "Build long-term customer relationships and brand loyalty",
];

/* ── Industries ── */
const industries = [
  { icon: ShoppingCart, label: "Retail & E-commerce" },
  { icon: Plane, label: "Hospitality & Tourism" },
  { icon: Utensils, label: "Restaurants & Food" },
  { icon: Heart, label: "Healthcare & Wellness" },
  { icon: GraduationCap, label: "Education & Training" },
  { icon: Home, label: "Real Estate" },
  { icon: Banknote, label: "Financial Services" },
  { icon: Building2, label: "Events & Entertainment" },
];

/* ── FAQs ── */
const faqs = [
  {
    q: "What does a digital marketing company in Sri Lanka do?",
    a: "A digital marketing company helps businesses promote their products and services using online channels such as WhatsApp, email, SMS, social media, and search engines. At BuzzConnect, we specialise in direct, high-conversion channels — WhatsApp bulk messaging and email marketing — that deliver measurable results within days rather than months.",
  },
  {
    q: "Which is the best digital marketing company in Sri Lanka?",
    a: "BuzzConnect is a leading digital marketing company in Sri Lanka, offering WhatsApp bulk messaging and email marketing solutions that deliver measurable results. With 500+ campaigns delivered, 10M+ messages sent, and a 98% client retention rate, we consistently outperform traditional agencies on speed, cost, and ROI.",
  },
  {
    q: "How much does digital marketing cost in Sri Lanka?",
    a: "Costs vary depending on the campaign size, channels used, and audience scale. BuzzConnect offers flexible, fixed-price packages for businesses of all sizes — starting from affordable entry-level options for small businesses up to high-volume multi-channel campaigns for enterprises. Contact us for a customised quote based on your goals and budget.",
  },
  {
    q: "Why is digital marketing important in Sri Lanka?",
    a: "With over 13 million internet users and 29 million mobile connections, digital marketing is the most effective and cost-efficient way to reach modern Sri Lankan customers. Consumers spend hours on WhatsApp and email every day — businesses that reach them on these channels see far higher engagement than traditional TV, radio, or print advertising.",
  },
  {
    q: "Do you serve businesses outside Colombo?",
    a: "Yes. BuzzConnect serves businesses island-wide — from Kandy and Galle to Jaffna, Kurunegala, Anuradhapura, and beyond. Our database covers every district, and our fully digital service model means location is never a barrier.",
  },
  {
    q: "How fast can my campaign go live?",
    a: "Most BuzzConnect campaigns launch within 48 hours of receiving your brief, creative, and payment. For urgent flash sales or time-sensitive promotions, we can sometimes expedite delivery to 24 hours.",
  },
];

const DigitalMarketingCompanySriLanka = () => {
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
      name: "Digital Marketing Company in Sri Lanka",
      provider: { "@type": "Organization", name: "BuzzConnect", url: "https://buzzconnect.lk" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Leading digital marketing company in Sri Lanka specialising in WhatsApp bulk messaging and email marketing campaigns that drive real results.",
      serviceType: "Digital Marketing",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Digital Marketing Company in Sri Lanka | BuzzConnect",
      url: "https://buzzconnect.lk/digital-marketing-company-in-sri-lanka",
      isPartOf: { "@type": "WebSite", name: "BuzzConnect", url: "https://buzzconnect.lk" },
    },
  ], []);

  const fadeIn = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

  return (
    <ServicePageLayout
      badge="Leading Digital Marketing Company in Sri Lanka"
      title="Digital Marketing Company in Sri Lanka"
      subtitle="Reach thousands of customers instantly through WhatsApp bulk messaging and email marketing — the most direct, high-impact channels available for businesses today."
    >
      <SEOHead
        title="Digital Marketing Company in Sri Lanka | BuzzConnect"
        description="Looking for a trusted digital marketing company in Sri Lanka? BuzzConnect delivers WhatsApp bulk messaging & email marketing campaigns with 500+ campaigns and 98% client retention."
        canonical="/digital-marketing-company-in-sri-lanka"
        keywords="digital marketing company sri lanka, digital marketing sri lanka, whatsapp bulk messaging sri lanka, whatsapp marketing sri lanka, email marketing sri lanka, online marketing company colombo, best digital marketing company sri lanka, buzzconnect"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Digital Marketing Company Sri Lanka", url: "/digital-marketing-company-in-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">

        {/* ── Hero Stats ── */}
        <motion.div {...fadeIn} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {heroStats.map(s => (
            <div key={s.label} className="text-center p-5 rounded-2xl bg-accent/10 border border-accent/20">
              <div className="text-2xl sm:text-3xl font-bold text-accent font-heading">{s.stat}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Intro ── */}
        <motion.div {...fadeIn} className="mb-16 space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you're searching for a reliable <strong>digital marketing company in Sri Lanka</strong>, BuzzConnect delivers targeted campaigns that connect your business with the right audience and drive real results.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We combine <strong>WhatsApp bulk messaging</strong> and <strong>email marketing</strong> — the most direct, highest-engagement channels available in Sri Lanka today — to help businesses reach more customers, increase sales, and grow faster than traditional advertising allows.
          </p>
          <div className="pt-2">
            <a href="https://wa.me/94771437707?text=Hi%20BuzzConnect%2C%20I%27d%20like%20a%20free%20digital%20marketing%20strategy%20session." target="_blank" rel="noopener noreferrer">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all">
                Get a Free Strategy Session <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </motion.div>

        {/* ── Table of Contents ── */}
        <motion.nav {...fadeIn} className="mb-16 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card" aria-label="Table of Contents">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-accent" /> In This Guide
          </h2>
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

        {/* ── 1. What Is Digital Marketing ── */}
        <motion.section id="what-is" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            What Is Digital Marketing & Why It Matters in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Digital marketing is the process of promoting your business using online channels where your customers are already active — on their phones, in their inboxes, and on messaging platforms.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            In Sri Lanka, digital usage has grown rapidly, with millions of active internet and smartphone users. This means businesses must adapt to stay competitive — or risk losing customers to competitors who already have.
          </p>
          <div className="p-6 rounded-2xl bg-accent/5 border-l-4 border-accent">
            <p className="font-semibold text-foreground mb-3">A professional digital marketing company in Sri Lanka helps you:</p>
            <ul className="space-y-2">
              {["Reach targeted audiences quickly", "Increase brand visibility across multiple channels", "Drive more sales with measurable campaigns", "Measure real results, not vanity metrics"].map(item => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* ── 2. Why Choose Local ── */}
        <motion.section id="why-local" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Why Choose a Digital Marketing Company in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Working with a local <strong>digital marketing company in Sri Lanka</strong> gives your business a clear advantage over generic international platforms.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {localAdvantages.map(item => (
              <div key={item.title} className="p-6 rounded-2xl bg-card border border-border hover:border-accent/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 3. Why BuzzConnect ── */}
        <motion.section id="why-buzzconnect" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Why BuzzConnect Is a Leading Digital Marketing Company in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            BuzzConnect is a specialised <strong>digital marketing company in Sri Lanka</strong> focused on direct communication channels that deliver measurable results. We don't rely on guesswork — every campaign is built to perform.
          </p>
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Approach: Reach. Engage. Convert.</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {approach.map(item => (
              <div key={item.title} className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                <item.icon className="w-8 h-8 text-accent mb-3" />
                <h4 className="font-heading font-bold text-foreground text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 4. Services ── */}
        <motion.section id="services" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Our Digital Marketing Services in Sri Lanka
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map(s => (
              <div key={s.title} className="p-6 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-card transition-all">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.points.map(p => (
                    <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 5. WhatsApp Marketing ── */}
        <motion.section id="whatsapp" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            WhatsApp Marketing in Sri Lanka — The Most Direct Channel
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            WhatsApp is the most widely used communication platform in Sri Lanka. Millions of users check WhatsApp multiple times a day, making it one of the most powerful marketing channels available.
          </p>
          <p className="text-foreground font-semibold mb-3">With WhatsApp marketing, businesses can:</p>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {whatsappBenefits.map(b => (
              <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {b}
              </li>
            ))}
          </ul>
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <h3 className="font-heading font-bold text-foreground mb-3">What You Can Send</h3>
            <div className="flex flex-wrap gap-2">
              {["Promotional offers", "Product images & flyers", "Videos", "PDFs & catalogs", "Website links", "Personalized messages"].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-card border border-border text-sm text-foreground">{t}</span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 6. How it works ── */}
        <motion.section id="how-it-works" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            How WhatsApp Bulk Messaging Works at BuzzConnect
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Getting started is simple. We handle the entire process using our pre-filtered internal database — so you don't need to manage contacts.
          </p>
          <div className="space-y-3">
            {whatsappSteps.map(step => (
              <div key={step.num} className="flex gap-4 p-5 rounded-2xl bg-card border border-border">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-accent text-accent-foreground font-heading font-bold flex items-center justify-center">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 7. Use cases ── */}
        <motion.section id="use-cases" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Best Use Cases for WhatsApp Marketing
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map(uc => (
              <div key={uc.title} className="p-5 rounded-2xl bg-card border border-border hover:border-accent/40 transition-colors">
                <uc.icon className="w-7 h-7 text-accent mb-2" />
                <h3 className="font-heading font-bold text-foreground mb-1">{uc.title}</h3>
                <p className="text-sm text-muted-foreground">{uc.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 8. Email Marketing ── */}
        <motion.section id="email" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Email Marketing Sri Lanka — Build Long-Term Growth
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Email marketing is one of the most effective ways to build customer relationships and maintain consistent engagement at scale. With BuzzConnect, you can:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 mb-4">
            {emailBenefits.map(b => (
              <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {b}
              </li>
            ))}
          </ul>
          <Link to="/email-marketing" className="inline-flex items-center gap-1 text-accent font-semibold hover:underline">
            Learn more about our email marketing services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>

        {/* ── 9. WhatsApp vs Email ── */}
        <motion.section id="comparison" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
            WhatsApp vs Email Marketing
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Both channels are powerful — but they serve different goals. Here's how they compare for Sri Lankan businesses.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-accent text-accent-foreground">
                <tr>
                  <th className="text-left p-4 font-heading">Factor</th>
                  <th className="text-left p-4 font-heading">WhatsApp</th>
                  <th className="text-left p-4 font-heading">Email</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Speed", "Instant", "Medium"],
                  ["Engagement", "Very High", "High"],
                  ["Content Length", "Short", "Long"],
                  ["Best Use", "Promotions & flash offers", "Relationship building & nurturing"],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? "bg-card" : "bg-muted/40"}>
                    <td className="p-4 font-semibold text-foreground">{row[0]}</td>
                    <td className="p-4 text-muted-foreground">{row[1]}</td>
                    <td className="p-4 text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-foreground font-semibold">
            👉 Best results come from combining both channels in a coordinated multi-channel campaign.
          </p>
        </motion.section>

        {/* ── 10. Industries ── */}
        <motion.section id="industries" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Industries We Serve in Sri Lanka
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {industries.map(ind => (
              <div key={ind.label} className="p-5 rounded-2xl bg-card border border-border text-center hover:border-accent/40 hover:bg-accent/5 transition-all">
                <ind.icon className="w-7 h-7 text-accent mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">{ind.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 11. FAQ ── */}
        <motion.section id="faq" {...fadeIn} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map(f => (
              <details key={f.q} className="group p-5 rounded-2xl bg-card border border-border">
                <summary className="font-heading font-bold text-foreground cursor-pointer list-none flex items-start justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-accent text-2xl leading-none group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </motion.section>

        {/* ── Final CTA ── */}
        <motion.section {...fadeIn} className="rounded-3xl bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground p-8 sm:p-12 text-center">
          <Award className="w-12 h-12 mx-auto mb-4 text-accent-foreground" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
            Start Growing with a Trusted Digital Marketing Company in Sri Lanka
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Ready to scale your business? BuzzConnect helps you reach more customers, increase engagement, and drive real results through powerful digital marketing strategies built for the Sri Lankan market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/94771437707?text=Hi%20BuzzConnect%2C%20I%27d%20like%20to%20start%20a%20digital%20marketing%20campaign." target="_blank" rel="noopener noreferrer">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-foreground text-primary font-semibold hover:scale-105 transition-transform">
                Start Your Campaign Today <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <Link to="/contact-us">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-foreground/40 font-semibold hover:bg-primary-foreground/10 transition-colors">
                <ShieldCheck className="w-4 h-4" /> Get a Free Consultation
              </span>
            </Link>
          </div>
        </motion.section>

      </article>
    </ServicePageLayout>
  );
};

export default DigitalMarketingCompanySriLanka;
