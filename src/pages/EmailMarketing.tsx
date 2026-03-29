import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Users, Crown, CheckCircle, Mail, Target, BarChart3, Zap, GraduationCap, Building2, ShoppingCart, Home, Calendar, Rocket, HelpCircle, Smartphone, MessageSquare, Globe, ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import EmailHeroContent from "@/components/email/EmailHeroContent";

const packages = [
  { name: "One Email Campaign + Findit.lk Web Ad", corp: "LKR 6,000", full: "LKR 8,000", fb: "✔", ig: "✔", li: "✔", webAd: "01", appAd: "01", feed: "✔" },
  { name: "Two Email Campaigns + Findit.lk Web Ads", corp: "LKR 10,800", full: "LKR 15,000", fb: "✔", ig: "✔", li: "✔", webAd: "02", appAd: "02", feed: "✔" },
  { name: "Five Email Campaigns (One month period) + Findit.lk Web Ads", corp: "LKR 28,000", full: "LKR 38,000", fb: "✔", ig: "✔", li: "✔", webAd: "05", appAd: "05", feed: "✔" },
  { name: "Ten Email Campaigns (Two months) + Findit.lk Web Ads", corp: "LKR 54,000", full: "LKR 72,000", fb: "✔", ig: "✔", li: "✔", webAd: "10", appAd: "10", feed: "✔" },
  { name: "Twenty Email Campaigns + Findit.lk Web Ads", corp: "LKR 108,000", full: "LKR 140,000", fb: "✔", ig: "✔", li: "✔", webAd: "40", appAd: "40", feed: "✔" },
  { name: "VIP Email Campaign (For 50,000 VIP database)", corp: "LKR 7,500", full: "", fb: "✔", ig: "✔", li: "✔", webAd: "01", appAd: "01", feed: "✔" },
];

const benefits = [
  "Reach thousands of customers instantly",
  "Highly cost-effective compared to traditional advertising",
  "Target specific customer segments",
  "Increase brand awareness and engagement",
  "Drive website traffic and conversions",
  "Track campaign performance in real time",
  "Multi-channel reinforcement through Findit.lk advertising",
];

const processSteps = [
  { icon: Target, title: "Audience Selection", desc: "Choose from our 350,000+ database or a custom target group" },
  { icon: Mail, title: "Campaign Creation", desc: "Design professional email creatives" },
  { icon: Zap, title: "Campaign Launch", desc: "Send emails instantly to your audience" },
  { icon: BarChart3, title: "Performance Tracking", desc: "Monitor open rates, clicks, and conversions" },
];

const useCases = [
  { icon: GraduationCap, label: "Education institutes promoting student intakes" },
  { icon: Building2, label: "Hotels and travel companies" },
  { icon: ShoppingCart, label: "E-commerce and retail businesses" },
  { icon: Home, label: "Real estate companies" },
  { icon: Calendar, label: "Event organizers" },
  { icon: Rocket, label: "SMEs and startups" },
];

const faqs = [
  { q: "What is email marketing in Sri Lanka?", a: "Email marketing is a digital marketing method that allows businesses to send targeted promotional messages directly to customers via email. It is one of the most cost-effective ways to reach large audiences in Sri Lanka." },
  { q: "How effective is email marketing in Sri Lanka?", a: "Email marketing offers one of the highest ROI among all digital marketing channels. When combined with multi-channel strategies like Findit.lk advertising, conversion rates increase significantly." },
  { q: "How many people can I reach with Buzz Connect?", a: "You can reach over 350,000+ corporate email users and 50,000+ VIP contacts, including highly targeted audiences across Sri Lanka." },
  { q: "Why choose Buzz Connect for email marketing?", a: "Buzz Connect is the only email marketing company in Sri Lanka that combines bulk email campaigns with Findit.lk multi-channel advertising, offering the largest databases, cost-effective packages, and proven campaign success." },
  { q: "What is multi-channel email marketing?", a: "Multi-channel email marketing uses multiple platforms together — email, web ads, app ads, and social media — to reinforce your message and improve engagement and conversion rates." },
  { q: "How much does email marketing cost in Sri Lanka?", a: "Email marketing packages at Buzz Connect start from LKR 6,000 for the corporate database and LKR 8,000 for the full 500,000 database. All packages include Findit.lk advertising at no extra cost." },
];

const EmailMarketing = () => {
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
      name: "Email Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Best email marketing services in Sri Lanka with 350,000+ corporate database and multi-channel Findit.lk advertising integration.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Email Marketing Sri Lanka"
      title="Email Marketing Sri Lanka That Actually Converts"
      subtitle="We combine high-performing email campaigns with Findit.lk advertising to reach the same audience across multiple channels — increasing engagement and conversions."
    >
      <SEOHead
        title="Email Marketing Sri Lanka | Multi-Channel Campaigns + Findit.lk Advertising"
        description="Boost your business with email marketing in Sri Lanka. We combine bulk email campaigns with multi-channel marketing strategies to increase conversions and ROI. Start today."
        canonical="/email-marketing"
        keywords="email marketing sri lanka, email campaigns sri lanka, email advertising sri lanka, bulk email marketing sri lanka, email marketing services sri lanka, best email marketing company sri lanka, email marketing packages sri lanka, email database sri lanka, corporate email marketing"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Email Marketing", url: "/email-marketing" },
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
          We go beyond basic <strong>bulk email marketing in Sri Lanka</strong>. At Buzz Connect, we combine <strong>email marketing campaigns</strong> with multi-channel advertising strategies through Findit.lk to turn messages into real customers. From campaign planning to conversion tracking, we help Sri Lankan businesses get measurable results — not just delivery reports.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          With over a decade of experience, one of the largest <strong>email databases in Sri Lanka</strong> (350,000+ corporate contacts), and exclusive Findit.lk integration, Buzz Connect delivers <strong>email marketing services</strong> that no other provider can match.
        </p>
      </motion.div>

      {/* Corporate & VIP Reach */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-card shadow-card border border-border"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Users className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">Corporate Reach</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Buzz Connect is a proven leader in email marketing in Sri Lanka, with 350,000 active contacts and 500,000 active contacts, age between 18 – 55 covering mostly western province.
          </p>
          <ul className="space-y-2">
            {["Managers", "General Managers", "Executive & officers", "Small business owners", "Undergraduate students", "House wives", "Association Members", "Gender - Male 60% & Female 40%"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-2xl bg-card shadow-card border border-border"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">VIP Reach</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Our database has more than 50,000+ contacts in Colombo and greater Colombo area, age between 35 and 60 with majority being 80% men and 20% female.
          </p>
          <ul className="space-y-2">
            {["Premium business leaders", "Multinational companies Directors", "CEO'S", "Celebrities", "Sports personals", "Doctors", "Entrepreneurs", "Private sector high salary earning employees (Over 350,000 per month)", "Heads of Government institutes"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Packages — PRIORITY POSITION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">Our Email Marketing Packages in Sri Lanka</h2>
        <p className="text-muted-foreground text-center mb-2">No hidden charges – choose your plan</p>
        <p className="text-muted-foreground text-center mb-8 text-sm">We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the industry.</p>

        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-xl shadow-card border border-border overflow-hidden text-sm">
            <thead>
              <tr className="gradient-hero text-primary-foreground">
                <th className="text-left p-3 font-heading"></th>
                <th className="text-center p-3 font-heading">Facebook sharing & Story updates</th>
                <th className="text-center p-3 font-heading">Instagram story updates</th>
                <th className="text-center p-3 font-heading">Linkedin post sharing</th>
                <th className="text-center p-3 font-heading">Findit.lk Web ad for Two weeks</th>
                <th className="text-center p-3 font-heading">Findit.lk App ad for Two weeks</th>
                <th className="text-center p-3 font-heading">Promote in Findit.lk Business Feed</th>
                <th className="text-center p-3 font-heading">350,000 Corporate Database</th>
                <th className="text-center p-3 font-heading">Findit.lk Featured ad one month</th>
                <th className="text-center p-3 font-heading">500,000 Corporate Database</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, i) => (
                <tr key={pkg.name} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="p-3 text-foreground font-medium">{pkg.name}</td>
                  <td className="p-3 text-center">{pkg.fb}</td>
                  <td className="p-3 text-center">{pkg.ig}</td>
                  <td className="p-3 text-center">{pkg.li}</td>
                  <td className="p-3 text-center">{pkg.webAd}</td>
                  <td className="p-3 text-center">{pkg.appAd}</td>
                  <td className="p-3 text-center">{pkg.feed}</td>
                  <td className="p-3 text-center font-semibold text-accent">{pkg.corp}</td>
                  <td className="p-3 text-center">✔</td>
                  <td className="p-3 text-center font-semibold text-secondary">{pkg.full}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* NEW SEO CONTENT SECTIONS */}
      <EmailHeroContent />

      {/* Why Choose Email Marketing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why Choose Email Marketing in Sri Lanka?</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          <strong>Email marketing</strong> remains one of the most effective digital marketing strategies in Sri Lanka due to its high return on investment and ability to target specific audiences. Unlike traditional advertising, <strong>email campaigns</strong> allow businesses to communicate directly with potential customers in a personalized and measurable way.
        </p>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          With Buzz Connect, businesses can leverage advanced targeting, segmentation, and analytics to ensure every <strong>email advertising campaign in Sri Lanka</strong> reaches the right audience — and with Findit.lk integration, your message gets reinforced across multiple channels.
        </p>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Benefits of Email Marketing for Sri Lankan Businesses</h3>
        <ul className="space-y-3">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {b}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">How Our Email Marketing Works</h2>
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
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Who Can Benefit from Email Marketing in Sri Lanka?</h2>
        <p className="text-muted-foreground mb-6">Our <strong>email marketing services in Sri Lanka</strong> are ideal for:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.map((uc) => (
            <div key={uc.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border">
              <uc.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{uc.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 🚀 Multi-Channel Upsell Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Scale Your Marketing</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">📈 Need Larger Reach & Brand Awareness?</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">For businesses looking to go beyond email and reach massive audiences — we offer advanced multi-channel marketing campaigns across Sri Lanka.</p>
        </div>

        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">🌐 Upgrade to Multi-Channel Campaigns</h3>
          <p className="text-muted-foreground mb-5">Combine your email campaigns with:</p>
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
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">📧 Ideal for Large-Scale Campaigns</h3>
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
          <h3 className="font-heading text-lg font-bold text-foreground mb-4">💡 Why Businesses Choose Multi-Channel Over Email Alone</h3>
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
          <h3 className="font-heading text-lg font-bold text-foreground mb-5">🆚 Email Only vs Multi-Channel Campaigns</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Feature</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Email Only</th>
                <th className="text-left py-3 px-4 text-accent font-semibold">Multi-Channel Campaign</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Reach", "Limited to email subscribers", "Nationwide multi-platform reach"],
                ["Platforms", "Single platform", "SMS + Email + WhatsApp + Findit.lk"],
                ["Speed", "Depends on open rates", "Fast results across all channels"],
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
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary-foreground mb-3">🚀 Scale Your Marketing Beyond Email</h3>
          <p className="text-primary-foreground/80 mb-2 max-w-xl mx-auto">For businesses looking to go beyond email and achieve nationwide visibility, our multi-channel campaigns deliver unmatched reach and impact.</p>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">If you're looking for maximum reach, faster visibility, and large-scale campaigns — explore our full solution.</p>
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
          <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions – Email Marketing Sri Lanka</h2>
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
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Start Your Email Marketing Campaign Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Reach thousands of potential customers across Sri Lanka with one powerful email campaign powered by multi-channel Findit.lk advertising. Contact Buzz Connect today and grow your business with targeted <strong>email marketing in Sri Lanka</strong>.
        </p>
        <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
          Contact Buzz Connect
        </a>
      </motion.div>
      <RelatedArticles currentPath="/email-marketing" />
    </ServicePageLayout>
  );
};

export default EmailMarketing;
