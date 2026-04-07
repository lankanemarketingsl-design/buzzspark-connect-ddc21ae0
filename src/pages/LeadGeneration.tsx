import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, Zap, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, GraduationCap, ShoppingCart, Building2, Home, Calendar, Rocket,
  Users, TrendingUp, DollarSign, ArrowRight, Search, Send, Eye, Award, Shield, Brain, Repeat
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const comparisonData = [
  { feature: "Channels Used", standard: "Single Platform", bc: "✅ Multi-Channel Strategy" },
  { feature: "Audience Reach", standard: "Limited", bc: "✅ Expanded Targeted Reach" },
  { feature: "Visibility", standard: "One-Time Exposure", bc: "✅ Repeated Multi-Platform Visibility" },
  { feature: "Engagement", standard: "Moderate", bc: "✅ High Engagement Potential" },
  { feature: "Lead Quality", standard: "General", bc: "✅ Targeted & Relevant Leads" },
  { feature: "Marketplace Integration", standard: "Not Available", bc: "✅ Findit.lk Integration" },
  { feature: "Campaign Impact", standard: "Short-Term", bc: "✅ Sustained & Reinforced" },
];

const services = [
  { icon: Mail, title: "Email Marketing Campaigns", desc: "Reach 350,000+ targeted contacts with professional email promotions and offers." },
  { icon: Smartphone, title: "SMS Marketing Campaigns", desc: "Instant alerts and engagement to 600,000+ mobile users across Sri Lanka." },
  { icon: MessageSquare, title: "WhatsApp Marketing Campaigns", desc: "Direct and personalized communication with high open and response rates." },
  { icon: Globe, title: "Findit.lk Category Promotion", desc: "High-intent visibility on Sri Lanka's leading promotion platform with 200,000+ monthly users." },
  { icon: Eye, title: "Social Media Advertising", desc: "Expand your reach and generate leads through strategic social media campaigns." },
  { icon: Target, title: "Database Targeting & Segmentation", desc: "Precision audience targeting to reach the right customers with the right message." },
];

const useCases = [
  { icon: GraduationCap, label: "Education Institutes", link: "/education-marketing-sri-lanka" },
  { icon: Home, label: "Real Estate Companies", link: "/real-estate-marketing-sri-lanka" },
  { icon: Building2, label: "Job Recruitment Campaigns", link: "/staff-recruitment-campaigns-sri-lanka" },
  { icon: Rocket, label: "Hotels & Hospitality", link: "/hotel-marketing-sri-lanka" },
  { icon: ShoppingCart, label: "Restaurants & Food", link: "/restaurant-marketing-sri-lanka" },
  { icon: Calendar, label: "Events & Conferences", link: "/event-marketing-sri-lanka" },
];

const processSteps = [
  { icon: Search, title: "Understand Your Business & Audience", desc: "We analyze your target market, goals, and ideal customer profile to build the right strategy." },
  { icon: Send, title: "Launch Multi-Channel Campaigns", desc: "Coordinated campaigns across Email, SMS, WhatsApp, Findit.lk, and Social Media." },
  { icon: BarChart3, title: "Drive Traffic & Generate Inquiries", desc: "Capture leads, track performance, and optimize for better conversion rates." },
];

const whyItWorks = [
  { icon: Repeat, title: "Repeated Exposure", desc: "People respond to brands they see multiple times across platforms." },
  { icon: Shield, title: "Multi-Platform Trust", desc: "Appearing on multiple channels builds credibility and brand authority." },
  { icon: Brain, title: "Visibility Drives Action", desc: "The more visible your brand, the higher the chance of conversion." },
];

const faqs = [
  { q: "What is lead generation?", a: "Lead generation is the process of attracting potential customers who are interested in your products or services and converting them into real business opportunities." },
  { q: "How does Buzz Connect generate leads?", a: "We use a multi-channel strategy combining email marketing, SMS, WhatsApp, Findit.lk promotion, and social media advertising to reach targeted audiences and generate meaningful inquiries." },
  { q: "Why is multi-channel lead generation more effective?", a: "Today's customers interact with brands across multiple platforms before making a decision. Our approach ensures your business is visible on every platform they use, increasing trust and conversion." },
  { q: "What makes Buzz Connect different from other agencies?", a: "Our integration with Findit.lk gives your campaign access to 200,000+ high-intent monthly users — a competitive advantage no other agency in Sri Lanka offers." },
  { q: "How much does lead generation cost in Sri Lanka?", a: "Buzz Connect offers professional lead generation campaigns starting from LKR 100,000. Packages are flexible and customized based on your business goals and campaign scale." },
];

const LeadGeneration = () => {
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
      name: "Lead Generation Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Professional lead generation services in Sri Lanka using multi-channel marketing strategies including email, SMS, WhatsApp, Findit.lk, and social media advertising. Campaigns starting from LKR 100,000.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Lead Generation Sri Lanka"
      title="Generate High-Quality Leads for Your Business"
      subtitle="Looking for reliable lead generation services in Sri Lanka? Buzz Connect helps businesses generate real customer inquiries through a powerful multi-channel strategy designed for visibility, reach, and conversions."
    >
      <SEOHead
        title="Lead Generation Sri Lanka | Multi-Channel Lead Campaigns | Buzz Connect"
        description="No.1 lead generation company in Sri Lanka. Generate high-quality leads via Email, SMS, WhatsApp & Findit.lk. Multi-channel campaigns from LKR 100,000. Start today."
        canonical="/lead-generation-sri-lanka"
        keywords="lead generation sri lanka, lead generation services sri lanka, customer acquisition sri lanka, generate leads sri lanka, online lead generation colombo, digital marketing leads sri lanka, best lead generation company sri lanka, b2b leads sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Lead Generation", url: "/lead-generation-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Trust Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 max-w-4xl mx-auto"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-accent font-bold text-sm">Campaigns from LKR 100,000</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Users className="w-4 h-4 text-secondary-foreground" />
            <span className="text-secondary-foreground font-bold text-sm">Multi-Channel Reach</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Globe className="w-4 h-4 text-secondary-foreground" />
            <span className="text-secondary-foreground font-bold text-sm">Findit.lk Integration</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { value: "350K", suffix: "+", label: "Email Database" },
            { value: "600K", suffix: "+", label: "SMS Contacts" },
            { value: "200K", suffix: "+", label: "Findit.lk Users" },
            { value: "10", suffix: "+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
              <p className="text-2xl font-bold text-accent">{stat.value}<span className="text-accent">{stat.suffix}</span></p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* What is Lead Generation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
          What is Lead Generation?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Lead generation is the process of attracting and converting potential customers who are interested in your products or services.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          At Buzz Connect, we go beyond basic campaigns by combining multiple platforms to ensure your business reaches the right audience and generates meaningful results. Our <Link to="/" className="text-accent hover:underline font-semibold">lead generation services in Sri Lanka</Link> are designed to deliver consistent, high-quality business opportunities.
        </p>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why We're Different</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Buzz Connect vs Standard Approach
          </h2>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-4 font-heading font-bold text-foreground">Feature</th>
                  <th className="text-left p-4 font-heading font-bold text-muted-foreground">Standard Approach</th>
                  <th className="text-left p-4 font-heading font-bold text-accent">Buzz Connect</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-4 font-medium text-foreground">{row.feature}</td>
                    <td className="p-4 text-muted-foreground">{row.standard}</td>
                    <td className="p-4 text-foreground font-semibold">{row.bc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-center text-muted-foreground text-sm mt-4">
          👉 Buzz Connect helps you generate better leads through better visibility and targeting.
        </p>
      </motion.div>

      {/* Our Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Approach</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Our Lead Generation Strategy
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We use a multi-channel approach to maximize your campaign performance:</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-xl bg-card shadow-card border border-border hover:border-accent/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-6 italic">
          👉 This ensures your business is visible across multiple touchpoints — increasing engagement and lead potential.
        </p>
      </motion.div>

      {/* Why Multi-Channel Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Why Multi-Channel Lead Generation Works</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Today's customers interact with brands across multiple platforms before making a decision. Our approach ensures your business stays visible wherever your audience is.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {whyItWorks.map((item) => (
            <div key={item.title} className="text-center p-5 rounded-xl bg-muted/30 border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mt-4 italic text-center">
          👉 More visibility = More leads = More business growth
        </p>
      </motion.div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          How Our Lead Generation Campaign Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {processSteps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center p-5 rounded-xl bg-card shadow-card border border-border relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full gradient-accent flex items-center justify-center text-xs font-bold text-primary">
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mt-3 mb-3">
                <step.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-6">
          👉 Result: Consistent lead flow and measurable business impact
        </p>
      </motion.div>

      {/* Findit.lk Power */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-8 h-8 text-accent" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Powered by Findit.lk</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Buzz Connect campaigns are powered by <strong className="text-foreground">Findit.lk</strong>, giving your business a competitive advantage no other agency offers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Users, value: "200,000+", label: "Monthly Active Users" },
            { icon: Search, value: "High-Intent", label: "Audience Searching Services" },
            { icon: Eye, value: "Category-Based", label: "Visibility & Discovery" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
              <item.icon className="w-8 h-8 text-accent shrink-0" />
              <div>
                <p className="font-bold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mt-4 italic">
          👉 This is your competitive advantage in Sri Lanka.
        </p>
      </motion.div>

      {/* Industries */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {useCases.map((uc) => (
            <div key={uc.label} className="flex flex-col items-center gap-2 p-5 rounded-xl bg-card shadow-card border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <uc.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">{uc.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pricing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Lead Generation Campaign Pricing
          </h2>
        </div>
        <div className="p-8 rounded-2xl bg-card shadow-card border-2 border-accent/30 text-center">
          <p className="text-muted-foreground mb-3">Professional Multi-Channel Lead Generation</p>
          <p className="text-3xl font-bold text-foreground mb-1">
            Starting from <span className="text-accent">LKR 100,000</span>
          </p>
          <p className="text-sm text-muted-foreground mb-6">Campaigns tailored to your business goals</p>
          <div className="text-left space-y-2 mb-6 max-w-sm mx-auto">
            {[
              "Multi-channel campaign setup",
              "Audience targeting and segmentation",
              "Promotion across Email, SMS, Findit.lk & Social Media",
              "Campaign optimization for better performance",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            👉 Flexible packages available based on your business goals and campaign scale.
          </p>
          <a
            href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20lead%20generation%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Get a Custom Quote <ArrowRight className="inline w-4 h-4 ml-1" />
          </a>
        </div>
      </motion.div>

      {/* What You Can Expect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-3xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          What You Can Expect
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Increased inquiries and customer interest",
            "Higher visibility across platforms",
            "Better engagement with your target audience",
            "Measurable campaign performance",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <TrendingUp className="w-5 h-5 text-accent shrink-0" />
              <span className="text-foreground font-medium">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-3xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          Frequently Asked Questions – Lead Generation Sri Lanka
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <h3 className="flex items-start gap-2 font-heading font-semibold text-foreground mb-2">
                <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                {faq.q}
              </h3>
              <p className="text-muted-foreground text-sm pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 rounded-2xl gradient-hero text-primary-foreground"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Ready to Generate More Leads?</h2>
        <p className="text-primary-foreground/80 mb-2 max-w-xl mx-auto">
          Grow your business with professional <strong>lead generation services in Sri Lanka</strong>.
        </p>
        <p className="text-primary-foreground/70 text-sm mb-6">
          👉 Campaigns starting from LKR 100,000 | Multi-channel strategy included
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20lead%20generation%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">
              Start Your Campaign Today <ArrowRight className="inline w-4 h-4 ml-1" />
            </button>
          </a>
          <Link to="/contact-us">
            <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">
              Contact Us
            </button>
          </Link>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/lead-generation-sri-lanka" />
    </ServicePageLayout>
  );
};

export default LeadGeneration;
