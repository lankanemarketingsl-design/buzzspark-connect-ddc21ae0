import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Users, Crown, Target, Briefcase, MessageSquare, Zap, BarChart3, Globe, HelpCircle, GraduationCap, ShoppingCart, Building2, Home, Calendar, Rocket, Image, Mail, Smartphone, ArrowRight } from "lucide-react";
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

const benefits = [
  "Direct and instant communication",
  "High open and engagement rates",
  "Ability to send text, images, and videos",
  "Cost-effective marketing solution",
  "Personalized customer interaction",
  "Ideal for promotions and lead generation",
];

const processSteps = [
  { icon: Target, title: "Select Audience", desc: "Select your target audience database" },
  { icon: Image, title: "Create Message", desc: "Create your message (text, image, or video)" },
  { icon: Zap, title: "Launch Campaign", desc: "Launch your WhatsApp campaign and reach thousands instantly" },
  { icon: BarChart3, title: "Track Results", desc: "Track engagement and results" },
];

const useCases = [
  { icon: GraduationCap, label: "Education institutes promoting course intakes" },
  { icon: ShoppingCart, label: "E-commerce and retail businesses" },
  { icon: Building2, label: "Hotels and travel companies" },
  { icon: Home, label: "Real estate marketing" },
  { icon: Calendar, label: "Event promotions" },
  { icon: Rocket, label: "SMEs and corporate organizations" },
];

const faqs = [
  { q: "What is WhatsApp marketing in Sri Lanka?", a: "WhatsApp marketing is a method of promoting products and services through direct messaging on WhatsApp." },
  { q: "Why is WhatsApp marketing effective?", a: "It allows direct communication with customers and has very high open and engagement rates." },
  { q: "Can I send images and videos?", a: "Yes, WhatsApp marketing supports text, images, videos, and promotional content." },
  { q: "What is the minimum campaign size?", a: "The minimum send count is 30,000 contacts." },
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
      title="WhatsApp Marketing Sri Lanka – Bulk WhatsApp Advertising & Business Messaging"
      subtitle="Buzz Connect offers advanced WhatsApp marketing services in Sri Lanka, helping businesses reach thousands of customers instantly through direct and personalized messaging."
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

      {/* 1. Power Intro — Hook */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          With one of the largest <strong>WhatsApp marketing databases in Sri Lanka</strong>, we enable businesses to engage with their audience using text, images, and video messages, driving higher engagement and conversions.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our <strong>WhatsApp marketing solutions</strong> are ideal for promotions, lead generation, customer communication, and brand awareness campaigns.
        </p>
      </motion.div>

      {/* 2. Why WhatsApp Marketing — Build Desire */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why WhatsApp Marketing is Powerful in Sri Lanka</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          WhatsApp marketing is one of the fastest-growing digital marketing channels in Sri Lanka. With a high number of active mobile users, WhatsApp allows businesses to communicate directly with customers in a more personal and engaging way.
        </p>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Unlike traditional marketing methods, WhatsApp messages have high open rates and allow businesses to share rich media content such as images, videos, and promotional flyers.
        </p>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Benefits of WhatsApp Marketing for Businesses</h3>
        <ul className="space-y-3">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {b}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* 3. How It Works — Reduce Friction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">How Our WhatsApp Marketing Works</h2>
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

      {/* 4. Use Cases — Relevance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Who Can Use WhatsApp Marketing in Sri Lanka?</h2>
        <p className="text-muted-foreground mb-6">Our WhatsApp marketing services are ideal for:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.map((uc) => (
            <div key={uc.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border">
              <uc.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{uc.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 5. Databases — The Product */}
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
      <p className="text-sm text-muted-foreground text-center mb-16">
        ** Payment should be settled before the campaign.
      </p>

      {/* 6. Gender-wise Database */}
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

      {/* 7. District Coverage */}
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

      {/* 8. Findit.lk Advantage */}
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
          {["Wider audience reach", "Increased visibility", "Better campaign performance", "Higher return on investment"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-foreground text-sm">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* 9. Multi-Channel Upsell Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Scale Your Marketing</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">📈 Need Larger Reach & Brand Awareness?</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">For businesses looking to go beyond WhatsApp and reach massive audiences — we offer advanced multi-channel marketing campaigns across Sri Lanka.</p>
        </div>

        <div className="p-8 pt-10 rounded-2xl upsell-highlight mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 px-5 py-2 rounded-bl-xl bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider animate-pulse">🔥 Most Popular</div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">🌐 Upgrade to Multi-Channel Campaigns</h3>
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
        </div>

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
          <p className="text-xs text-muted-foreground mt-4 italic">Designed for businesses that need mass visibility + fast impact</p>
        </div>

        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">🎯 What You Can Achieve with Multi-Channel Campaigns</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              "Brand awareness campaigns across Sri Lanka",
              "New business & product launches",
              "Promotional offers and seasonal deals",
              "Driving website traffic and inquiries",
              "Generating leads in a short time",
              "Reaching new target audiences nationwide",
              "Re-engaging existing customers",
              "Building strong top-of-mind brand recall",
              "Expanding your business reach across Sri Lanka",
              "Generating quick market response",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4">💡 Why Businesses Choose Multi-Channel Over WhatsApp Alone</h3>
          <p className="text-muted-foreground mb-4">Instead of relying on a single platform:</p>
          <ul className="space-y-2.5">
            {[
              "Reach customers through multiple touchpoints",
              "Increase brand recall and trust",
              "Drive faster inquiries and conversions",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-foreground font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-accent font-semibold mt-4">👉 The result: higher visibility + better conversion rates</p>
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
          <p className="text-primary-foreground/80 mb-2 max-w-xl mx-auto">For businesses looking to go beyond WhatsApp and achieve nationwide visibility, our multi-channel campaigns deliver unmatched reach and impact.</p>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">If you're looking for maximum reach, faster visibility, and large-scale campaigns — explore our full solution.</p>
          <Link to="/multi-channel-marketing-sri-lanka">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-full text-base">
              <Rocket className="w-5 h-5 mr-2" /> View Multi-Channel Campaigns
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* 10. FAQ — Handle Objections */}
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

      {/* 11. Final CTA — Close */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 rounded-2xl gradient-hero"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Start Your WhatsApp Marketing Campaign Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Reach thousands of potential customers across Sri Lanka with targeted WhatsApp campaigns. Contact Buzz Connect today and launch your campaign.
        </p>
        <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
          Contact Buzz Connect
        </a>
      </motion.div>
      <RelatedArticles currentPath="/whatsapp-marketing" />
    </ServicePageLayout>
  );
};

export default WhatsAppMarketing;
