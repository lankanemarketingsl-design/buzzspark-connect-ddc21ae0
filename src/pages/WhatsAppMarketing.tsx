import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Users, Crown, Target, Briefcase, MessageSquare, Zap, Eye, RefreshCw, TrendingUp, Globe, HelpCircle, Rocket, Image, Mail, Smartphone, ArrowRight, Shield } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";

const databases = [
  {
    icon: Users,
    title: "Corporate database for executive decisions",
    desc: "This is our general and most popular database, you can target majority of the Colombo based private sector organizations employees through this database. Subscribers: 300,000+ age between 18 and 65.",
    items: ["Executives & Officers", "Small business owners", "Managers", "General Managers", "Association members", "Gender - Male 80% & Female 20%"],
    pricing: "1 LKR for one text message\nVideo LKR 2 For one message",
  },
  {
    icon: Crown,
    title: "VIP Database For Achievers",
    desc: "Our database has more than 50,000+ contacts in Colombo and greater colombo area, Age between 30 and 65 with majority being 80% Male and 20% Female.",
    items: ["Premium business leaders", "Multinational companies Directors", "CEOs", "Celebrities", "Sports personals", "Doctors", "Entrepreneurs", "Private sector high salary earning employees (Over 500,000 per month)", "Head of Government institutes"],
    pricing: "2 LKR for one text message\nVideo LKR 3 For one message",
  },
  {
    icon: Target,
    title: "Marketing Database to Promote your business",
    desc: "This database consist of marketing fraternity professionals which attach to marketing related works. Our database has more than 200,000+ contacts in All Island.",
    items: ["Director marketing", "Marketing Managers", "Brand managers", "Advertising Managers", "Sales Managers", "DGM Marketing", "Marketing Executives", "Sales Executives"],
    pricing: "2 LKR for one text message\nVideo LKR 3 For one message",
  },
  {
    icon: Briefcase,
    title: "HR Database to Promote your business",
    desc: "Human resources specialists are responsible for recruiting, screening, interviewing and placing workers. Our database has more than 25,000+ contacts in All Island.",
    items: ["HR Directors", "HR Managers", "Senior HR Managers", "Assistant HR Managers", "HR Executives", "Administrative managers", "Training Managers"],
    pricing: "2 LKR for one text message\nVideo LKR 3 For one message",
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

const faqs = [
  { q: "What is WhatsApp marketing in Sri Lanka?", a: "WhatsApp marketing is a method of promoting products and services through direct messaging on WhatsApp. It allows businesses to send text, images, and videos directly to customers' phones." },
  { q: "Why is WhatsApp marketing effective?", a: "It allows direct communication with customers and has very high open and engagement rates — much higher than email or social media ads." },
  { q: "Can I send images and videos?", a: "Yes, WhatsApp marketing supports text, images, videos, and promotional content — making it one of the most versatile marketing channels." },
  { q: "What is the minimum campaign size?", a: "The minimum send count is 30,000 contacts." },
  { q: "How much does WhatsApp marketing cost?", a: "Text messages start from just LKR 1 per message and video messages from LKR 2. Campaign packages start from LKR 30,000." },
  { q: "Can I target specific audiences?", a: "Yes, we offer corporate, VIP, marketing, HR, gender-wise, and district-wise databases for precise targeting." },
];

const WhatsAppMarketing = () => {
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
      name: "WhatsApp Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Best WhatsApp marketing services in Sri Lanka with targeted databases.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="WhatsApp Marketing Sri Lanka"
      title="WhatsApp Marketing That Engages — and Converts"
      subtitle="Targeted WhatsApp campaigns + Multi-Channel Promotion to maximize visibility and customer engagement"
    >
      <SEOHead
        title="WhatsApp Marketing Sri Lanka | Bulk Campaigns from LKR 1"
        description="No.1 WhatsApp marketing company in Sri Lanka. Bulk WhatsApp campaigns with text, image & video. Reach 600,000+ users from LKR 1/msg. Corporate & VIP databases. Fast results."
        canonical="/whatsapp-marketing"
        keywords="whatsapp marketing sri lanka, bulk whatsapp sri lanka, whatsapp advertising colombo, whatsapp campaign sri lanka, whatsapp bulk messaging service, whatsapp business marketing sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "WhatsApp Marketing", url: "/whatsapp-marketing" },
        ]}
        jsonLd={jsonLd}
      />

      {/* 1. Trust Strip + Price Anchor + Hook */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 max-w-4xl mx-auto"
      >
        {/* Trust indicators */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-accent font-bold text-sm"><span className="text-accent font-bold text-sm">Campaigns from LKR 25,000</span></span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/60 border border-border">
            <Users className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-muted-foreground text-xs font-medium">600,000+ Targeted Contacts</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/60 border border-border">
            <Shield className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-muted-foreground text-xs font-medium">Text, Image & Video Support</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/60 border border-border">
            <Globe className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-muted-foreground text-xs font-medium">Extended Reach via Findit.lk</span>
          </div>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
          Don't Just Send Messages — <span className="text-accent">Turn Every Chat Into a Customer</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          With one of the largest <strong>WhatsApp marketing databases in Sri Lanka</strong>, Buzz Connect enables businesses to engage their audience using text, images, and video messages — driving higher engagement and real conversions across <Link to="/" className="text-muted-foreground">WhatsApp marketing Sri Lanka</Link>.
        </p>
        <p className="text-foreground font-medium mb-6">
          👉 From LKR 1 per message — reach thousands instantly with rich media campaigns.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base shadow-lg">
            Start Your WhatsApp Campaign <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20WhatsApp%20marketing." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-accent/30 text-foreground font-semibold hover:bg-accent/5 transition-colors text-base">
            <MessageSquare className="w-4 h-4 text-accent" /> Chat on WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Social Proof Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-5 px-6 rounded-2xl bg-muted/30 border border-border">
          {[
            { value: "600K+", label: "Targeted Contacts" },
            { value: "26", label: "Districts Covered" },
            { value: "1 LKR", label: "Per Text Message" },
            { value: "Rich Media", label: "Text, Image & Video" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-accent text-xl sm:text-2xl">{stat.value}</div>
              <div className="text-[11px] text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Expand the Power */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-primary/5 border border-primary/20"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Expand the Power of WhatsApp Marketing</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          WhatsApp marketing is one of the most personal and engaging ways to reach your audience — with instant delivery, rich media support, and high open rates.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          At Buzz Connect, we enhance its impact by combining WhatsApp with a multi-channel strategy. This helps your business:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Reach the right audience with targeted messaging",
            "Send text, images, and videos for maximum impact",
            "Reinforce your message across multiple platforms",
            "Create more opportunities for engagement and conversion",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
        <p className="text-foreground font-semibold">
          👉 Because real results come from visibility + repetition, not just delivery.
        </p>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">Standard WhatsApp Campaigns vs Buzz Connect</h2>
        <p className="text-muted-foreground text-center mb-6 text-sm">See why businesses choose our integrated approach</p>
        <div className="overflow-x-auto">
          <table className="w-full rounded-xl overflow-hidden border border-border">
            <thead>
              <tr className="bg-primary/10">
                <th className="text-left p-4 font-heading font-bold text-foreground">Feature</th>
                <th className="text-center p-4 font-heading font-bold text-foreground">Standard WhatsApp</th>
                <th className="text-center p-4 font-heading font-bold text-accent">Buzz Connect ⭐</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Message Delivery", "✅ Included", "✅ Included"],
                ["Rich Media (Image/Video)", "⚠️ Limited", "✅ Full Support"],
                ["Audience Targeting", "⚠️ Basic", "✅ Advanced Targeting"],
                ["Multi-Channel Support", "Not Included", "✅ Integrated Approach"],
                ["Campaign Visibility", "One-Time Reach", "Extended Across Platforms"],
                ["Engagement Potential", "Limited", "High Engagement"],
                ["Customer Touchpoints", "Single Channel", "Multiple Touchpoints"],
                ["Campaign Impact", "Short-Term", "Sustained & Reinforced"],
              ].map(([feature, standard, bc]) => (
                <tr key={feature} className="border-t border-border hover:bg-muted/30 transition-colors">
                  <td className="p-4 text-foreground font-medium">{feature}</td>
                  <td className="p-4 text-center text-muted-foreground text-sm">{standard}</td>
                  <td className="p-4 text-center text-accent font-semibold text-sm">{bc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Mid-page CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto text-center py-8 px-6 rounded-2xl bg-accent/5 border border-accent/20"
      >
        <p className="text-foreground font-bold text-lg mb-2">Ready to engage thousands of customers directly?</p>
        <p className="text-muted-foreground text-sm mb-5">WhatsApp campaigns starting from just LKR 30,000</p>
        <Link to="/contact-us" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity shadow-lg">
          Get a Free Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">How Our WhatsApp Campaign Works</h2>
        <p className="text-muted-foreground text-center mb-8 text-sm">Simple. Personal. Results-driven.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Target Your Audience", desc: "We send WhatsApp messages to the right users based on demographics, location, and industry", num: "01" },
            { icon: Eye, title: "Expand Your Reach", desc: "Campaign is supported with multi-channel exposure for extended visibility across platforms", num: "02" },
            { icon: TrendingUp, title: "Drive Responses", desc: "Customers engage directly through WhatsApp — generating real inquiries and conversions", num: "03" },
          ].map((step) => (
            <div key={step.title} className="p-6 rounded-2xl bg-card shadow-card border border-border text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">{step.num}</div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-foreground font-semibold mt-6">
          👉 More reach → More engagement → Better results
        </p>
      </motion.div>

      {/* Perfect For */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Perfect For</h2>
        <p className="text-muted-foreground text-sm mb-6">Businesses across every industry use our WhatsApp campaigns</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "Promotions & offers",
            "Event announcements",
            "Product launches",
            "Customer reminders",
            "Retail & service businesses",
            "Corporate communications",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 p-4 rounded-xl bg-muted/40 border border-border hover:border-accent/30 transition-colors">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why This Approach Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-accent/5 border border-accent/20"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Why This Approach Works</h2>
        <p className="text-muted-foreground text-sm mb-6">The marketing psychology behind our strategy</p>
        <div className="space-y-4">
          {[
            { icon: Zap, bold: "Instant personal connection", text: "WhatsApp delivers your message directly — seen within minutes" },
            { icon: Image, bold: "Rich media impact", text: "Images and videos create stronger emotional engagement than text alone" },
            { icon: Eye, bold: "Repeated exposure", text: "Multi-channel creates visibility across platforms for maximum recall" },
            { icon: RefreshCw, bold: "Trust through repetition", text: "Consistent presence builds credibility and drives action over time" },
          ].map((item) => (
            <div key={item.bold} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">{item.bold}</p>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
          <p className="text-foreground font-bold text-center">
            💡 WhatsApp is the conversation starter. Buzz Connect multiplies the impact.
          </p>
        </div>
      </motion.div>

      {/* Databases — The Product */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Our WhatsApp Marketing Databases in Sri Lanka</h2>
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
              <div className="inline-block px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold text-sm whitespace-pre-line">
                Pricing -<br />{db.pricing}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <p className="text-sm text-muted-foreground text-center mb-2">
        * Minimum send number count 30,000 Numbers.
      </p>
      <p className="text-sm text-muted-foreground text-center mb-8">
        ** Payment should be settled before the campaign.
      </p>

      {/* Database Consultation CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
        <p className="text-foreground font-bold text-lg mb-1">Not sure which database is right for you?</p>
        <p className="text-muted-foreground text-sm mb-5">Our team will recommend the best targeting strategy for your business</p>
        <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20need%20help%20choosing%20the%20right%20WhatsApp%20database." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
          <MessageSquare className="w-4 h-4" /> Get Free Consultation
        </a>
      </motion.div>

      {/* Gender-wise Database */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Gender-wise Database</h2>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <div className="text-center p-6 rounded-xl bg-secondary/10 border border-secondary/20 min-w-[160px]">
            <div className="text-3xl font-heading font-bold text-secondary">350,000+</div>
            <div className="text-sm text-muted-foreground mt-1">Male Subscribers</div>
            <div className="text-xs text-muted-foreground">Age 18 - 65</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-accent/10 border border-accent/20 min-w-[160px]">
            <div className="text-3xl font-heading font-bold text-accent">250,000+</div>
            <div className="text-sm text-muted-foreground mt-1">Female Subscribers</div>
            <div className="text-xs text-muted-foreground">Age 18 - 65</div>
          </div>
        </div>
      </motion.div>

      {/* District Coverage - Map Layout */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">District-wise Database</h2>
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-primary/5 border border-primary/20 rounded-3xl p-6 sm:p-10">
            <div className="mb-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 text-center">Northern & Eastern</p>
              <div className="flex flex-wrap justify-center gap-2">
                {districts.filter(d => ["Jaffna", "Kilinochchi", "Mullaitivu", "Vavuniya", "Mannar", "Trincomalee", "Batticaloa", "Ampara"].includes(d.name)).map((d) => (
                  <div key={d.name} className="px-3 py-2 rounded-lg bg-card shadow-card border border-border text-center min-w-[100px]">
                    <div className="font-heading font-bold text-accent text-sm">{d.count}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{d.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 text-center">North Central & Central</p>
              <div className="flex flex-wrap justify-center gap-2">
                {districts.filter(d => ["Anuradhapura", "Polonnaruwa", "Kurunegala", "Puttalam", "Matale", "Kandy", "Nuwara Eliya", "Badulla", "Monaragala", "Kegalle"].includes(d.name)).map((d) => (
                  <div key={d.name} className="px-3 py-2 rounded-lg bg-card shadow-card border border-border text-center min-w-[100px]">
                    <div className="font-heading font-bold text-accent text-sm">{d.count}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{d.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 text-center">Western & Sabaragamuwa</p>
              <div className="flex flex-wrap justify-center gap-2">
                {districts.filter(d => ["Colombo", "Gampaha", "Kalutara", "Wattala", "Ratnapura"].includes(d.name)).map((d) => (
                  <div key={d.name} className="px-3 py-2 rounded-lg bg-card shadow-card border border-accent/30 text-center min-w-[100px]">
                    <div className="font-heading font-bold text-accent text-base">{d.count}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{d.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 text-center">Southern</p>
              <div className="flex flex-wrap justify-center gap-2">
                {districts.filter(d => ["Galle", "Matara", "Hambantota"].includes(d.name)).map((d) => (
                  <div key={d.name} className="px-3 py-2 rounded-lg bg-card shadow-card border border-border text-center min-w-[100px]">
                    <div className="font-heading font-bold text-accent text-sm">{d.count}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{d.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-block px-6 py-3 rounded-full bg-accent/10 border border-accent/30">
                <span className="font-heading font-bold text-accent text-lg">2,000,000+</span>
                <span className="text-muted-foreground text-sm ml-2">Total WhatsApp Reach Across Sri Lanka</span>
              </div>
            </div>
          </div>
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
        <p className="text-muted-foreground leading-relaxed mb-4">
          Buzz Connect enhances WhatsApp campaigns with additional exposure through <strong>Findit.lk</strong>, one of Sri Lanka's leading online promotion platforms. This ensures:
        </p>
        <ul className="space-y-2">
          {["Wider audience reach beyond WhatsApp", "Increased visibility across platforms", "Better campaign performance", "Higher return on investment"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-foreground text-sm">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Multi-Channel Upsell */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Scale Your Marketing</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">📈 Need Larger Reach for WhatsApp Marketing?</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">For businesses looking to go beyond WhatsApp and reach massive audiences — we offer advanced multi-channel marketing campaigns across Sri Lanka.</p>
        </div>

        <Link to="/multi-channel-marketing-sri-lanka" className="block p-8 pt-10 rounded-2xl upsell-highlight mb-8 relative overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform duration-300">
          <div className="absolute top-0 right-0 px-5 py-2 rounded-bl-xl bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider animate-pulse">🔥 Most Popular</div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">🌐 Upgrade WhatsApp Campaigns to Multi-Channel</h3>
          <p className="text-muted-foreground mb-5">Combine your WhatsApp campaigns with:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { icon: Mail, label: "Email Marketing" },
              { icon: Smartphone, label: "SMS Campaigns" },
              { icon: MessageSquare, label: "WhatsApp Marketing" },
              { icon: Globe, label: "Exposure on Findit.lk" },
            ].map((ch, i) => (
              <motion.div key={ch.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-accent/5 border border-accent/20 text-center">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <ch.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground font-medium text-sm">{ch.label}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-accent font-semibold text-center text-lg">👉 Reach hundreds of thousands to 1M+ audiences within days</p>
        </Link>

        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">💬 Ideal for Large-Scale Campaigns</h3>
          <p className="text-muted-foreground mb-4">This solution is best suited for:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Large businesses & corporate brands",
              "New product or service launches",
              "Seasonal promotions & flash sales",
              "Brand awareness campaigns",
              "Event marketing & registrations",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-muted-foreground text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8 overflow-x-auto">
          <h3 className="font-heading text-lg font-bold text-foreground mb-5">🆚 WhatsApp Only vs Multi-Channel Campaigns</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Feature</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-semibold">WhatsApp Only</th>
                <th className="text-left py-3 px-4 text-accent font-semibold">Multi-Channel Campaign</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Reach", "Limited to WhatsApp contacts", "Nationwide multi-platform reach"],
                ["Platforms", "Single platform", "SMS + Email + WhatsApp + Findit.lk"],
                ["Speed", "Fast delivery", "Fast results across all channels"],
                ["Awareness", "Basic awareness", "High visibility + recall"],
              ].map(([feature, standard, multi]) => (
                <tr key={feature} className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground font-medium">{feature}</td>
                  <td className="py-3 px-4 text-muted-foreground">{standard}</td>
                  <td className="py-3 px-4 text-accent font-semibold">{multi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-8 rounded-2xl gradient-hero text-center relative overflow-hidden">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary-foreground mb-3">🚀 Scale Your Marketing Beyond WhatsApp</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">For businesses looking to go beyond WhatsApp and achieve nationwide visibility, our multi-channel campaigns deliver unmatched reach and impact.</p>
          <Link to="/multi-channel-marketing-sri-lanka">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-full text-base">
              <Rocket className="w-5 h-5 mr-2" /> View Multi-Channel Campaigns
            </Button>
          </Link>
        </div>
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
          <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions – WhatsApp Marketing Sri Lanka</h2>
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
        className="text-center p-10 sm:p-14 rounded-2xl gradient-hero relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.15),transparent_70%)]" />
        <div className="relative z-10">
          <p className="text-accent font-bold text-sm uppercase tracking-wider mb-3">Ready to grow your business?</p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">Launch Your WhatsApp Campaign Today</h2>
          <p className="text-primary-foreground/80 mb-3 max-w-2xl mx-auto text-lg">
            Engage Customers Directly. Get Real Results.
          </p>
          <p className="text-primary-foreground/60 mb-8 max-w-xl mx-auto text-sm">
            From LKR 1 per message — reach thousands with text, images, and video across Sri Lanka
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base shadow-lg">
              Start Your WhatsApp Campaign <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20start%20a%20WhatsApp%20campaign." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors text-base">
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
      <RelatedArticles currentPath="/whatsapp-marketing" />
    </ServicePageLayout>
  );
};

export default WhatsAppMarketing;
