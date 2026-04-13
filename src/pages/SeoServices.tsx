import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, DollarSign, Search, Settings, FileText, Target, Zap, BarChart3, Rocket, GraduationCap, Building2, Home, HelpCircle, Award, Star, Users, ArrowUpRight, Shield, Clock, Link2 } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import FinditlkAdvantage from "@/components/FinditlkAdvantage";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";

const packages = [
  {
    name: "Starter",
    price: "LKR 30,000/-",
    period: "",
    features: ["Keyword Research", "Website audit"],
  },
  {
    name: "Growth",
    price: "LKR 60,000/-",
    period: "monthly",
    features: ["Keyword Research", "Website audit", "3 Keywords", "1 URL Optimization", "Title & Meta Information optimization", "CTA based Development", "Monthly Monitoring", "Reputed & Relevant Backlinks", "Recommendations"],
  },
  {
    name: "Premium",
    price: "LKR 100,000/-",
    period: "monthly",
    features: ["Keyword Research", "Website audit", "5 Keywords", "3 URL Optimizations", "Title & Meta Information optimization", "CTA based Development", "Monthly Monitoring", "Reputed & Relevant Backlinks", "Recommendations", "Priority Support"],
    popular: true,
  },
];

const faqs = [
  { q: "What is the best SEO company in Sri Lanka?", a: "The best SEO company is one that delivers real results — rankings, traffic, and customer inquiries. Buzz Connect focuses on all three with data-driven strategies and a proven track record of 1,500+ businesses served." },
  { q: "How long does SEO take?", a: "SEO typically shows results within 2–4 months, depending on competition and strategy. Month 1 focuses on optimization and foundation, months 2–3 show ranking improvements, and months 3–6 deliver strong traffic and lead growth." },
  { q: "How much does SEO cost in Sri Lanka?", a: "SEO packages in Sri Lanka vary, but our pricing starts from LKR 30,000. We offer Starter, Growth (LKR 60,000/month), and Premium (LKR 100,000/month) packages to suit different business needs." },
  { q: "Why is SEO important?", a: "SEO helps your business appear on Google when customers search, bringing high-quality traffic and long-term growth. Over 80% of consumers search Google before making a purchase — without SEO, your competitors capture those customers." },
  { q: "What is the difference between SEO and Google Ads?", a: "SEO provides organic (free) traffic through ranking improvements, while Google Ads provides paid traffic. SEO is more cost-effective long-term and builds lasting authority, while Google Ads delivers instant but temporary visibility." },
  { q: "Why choose Buzz Connect for SEO in Sri Lanka?", a: "Buzz Connect is a leading SEO company in Sri Lanka with proven results across multiple industries. We use white-hat strategies that deliver sustainable rankings and real business growth, with transparent reporting and dedicated SEO specialists." },
];

const SeoServices = () => {
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
      name: "SEO Services Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Best SEO company in Sri Lanka for real business growth. Rank higher on Google and turn search traffic into real customer inquiries.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Best SEO Company Sri Lanka"
      title="Best SEO Company in Sri Lanka for Real Business Growth"
      subtitle="Rank higher on Google and turn search traffic into real customer inquiries with a proven, data-driven SEO strategy."
    >
      <SEOHead
        title="Best SEO Company in Sri Lanka | SEO Consultant & Specialist"
        description="Looking for the best SEO company in Sri Lanka? Work with an expert SEO consultant to boost rankings, traffic & leads. 1,500+ clients served."
        canonical="/seo-sri-lanka"
        keywords="best seo company sri lanka, seo company sri lanka, seo consultant sri lanka, seo specialist sri lanka, seo sri lanka, seo services sri lanka, seo packages sri lanka, search engine optimization sri lanka, google ranking sri lanka, local seo sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "SEO Services", url: "/seo-sri-lanka" },
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
            <span className="text-accent font-bold text-sm">1,500+ Businesses Served</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Target className="w-4 h-4 text-secondary-foreground" />
            <span className="text-secondary-foreground font-bold text-sm">100,000+ Inquiries Generated</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <BarChart3 className="w-4 h-4 text-secondary-foreground" />
            <span className="text-secondary-foreground font-bold text-sm">20,000+ Campaigns Executed</span>
          </div>
        </div>
      </motion.div>

      {/* SEO Services Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Looking for a Trusted SEO Company in Sri Lanka?</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          At Buzz Connect, we go beyond rankings. Our focus is simple: <strong className="text-foreground">get your business found by the right people at the right time</strong>.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We help businesses across Sri Lanka:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Rank for high-intent keywords",
            "Increase organic traffic",
            "Generate consistent leads",
            "Build long-term online visibility",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Whether you need an <strong className="text-accent font-bold">SEO consultant in Sri Lanka</strong> or a full-service solution, we deliver measurable results. Combine SEO with our <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead generation</Link> and <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing</Link> services for maximum impact.
        </p>
      </motion.div>

      {/* Why We Are the Best */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Why We Are the Best SEO Company in Sri Lanka</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">Most agencies focus only on rankings. <strong className="text-foreground">We focus on business results.</strong></p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: BarChart3, title: "Data-Driven SEO Strategies", desc: "Every decision is based on real data, not guesswork" },
            { icon: Target, title: "Conversion-Focused Approach", desc: "We optimize not just for traffic — but for inquiries and sales" },
            { icon: Building2, title: "Local Market Expertise", desc: "Deep understanding of Sri Lankan search behavior" },
            { icon: Award, title: "Proven Track Record", desc: "1,500+ clients and thousands of successful campaigns" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl bg-card shadow-card border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-accent font-semibold mt-6">We don't just improve rankings — we grow your business</p>
      </motion.div>

      {/* Our SEO Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Our SEO Process — Step by Step</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Search, step: 1, title: "Keyword Research", desc: "We identify high-value keywords like 'best seo company sri lanka', 'seo services sri lanka', 'seo specialist sri lanka' — focused on buyer intent and conversions." },
            { icon: Settings, step: 2, title: "Website Audit", desc: "We analyze technical SEO issues, page speed, structure & usability to identify quick wins and long-term improvements." },
            { icon: FileText, step: 3, title: "On-Page Optimization", desc: "We optimize titles & meta descriptions, content structure, URLs and internal linking for maximum search visibility." },
            { icon: TrendingUp, step: 4, title: "Strategy & Growth Planning", desc: "We create a roadmap to improve rankings, increase traffic, and maximize conversions over time." },
            { icon: Link2, step: 5, title: "Backlink Development", desc: "We build reputed and relevant backlinks to increase your domain authority and search rankings." },
            { icon: BarChart3, step: 6, title: "Monthly Monitoring & Optimization", desc: "We track keyword rankings, traffic growth, and performance improvements. Continuous improvement = better results." },
          ].map((step) => (
            <div key={step.title} className="p-6 rounded-2xl bg-card shadow-card border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-accent mb-1 block">Step {step.step}</span>
              <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* What Results Can You Expect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What Results Can You Expect?</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">SEO is a long-term growth strategy. Here's the typical timeline:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { period: "Month 1", label: "Optimization & Foundation", color: "bg-primary/10 border-primary/30" },
            { period: "Month 2–3", label: "Ranking Improvements", color: "bg-accent/10 border-accent/30" },
            { period: "Month 3–6", label: "Strong Traffic & Lead Growth", color: "bg-accent/20 border-accent/40" },
          ].map((t) => (
            <div key={t.period} className={`p-5 rounded-xl border ${t.color} text-center`}>
              <div className="font-heading font-bold text-foreground mb-1">{t.period}</div>
              <p className="text-sm text-muted-foreground">{t.label}</p>
            </div>
          ))}
        </div>
        <p className="text-accent font-semibold flex items-center gap-2">
          <Clock className="w-5 h-5" /> We start improving your website from day one
        </p>
      </motion.div>

      {/* Packages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">SEO Packages in Sri Lanka</h2>
        <p className="text-muted-foreground mb-8 text-center">Affordable <strong className="text-foreground">SEO packages</strong> designed for Sri Lankan businesses of all sizes</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl bg-card shadow-card border-2 ${pkg.popular ? 'border-accent' : 'border-border'} relative`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-accent text-xs font-bold text-primary">
                  🔥 MOST POPULAR
                </div>
              )}
              <div className="text-sm font-semibold text-accent uppercase">{pkg.name}</div>
              <div className="font-heading text-3xl font-bold text-foreground mt-2">{pkg.price}</div>
              {pkg.period && <div className="text-sm text-muted-foreground mb-6">{pkg.period}</div>}
              {!pkg.period && <div className="mb-6"></div>}
              <ul className="space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Who Needs SEO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Who Needs SEO Services?</h2>
        <p className="text-muted-foreground mb-6">Our <strong className="text-foreground">SEO services in Sri Lanka</strong> are ideal for:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Building2, label: "Hotels looking for direct bookings" },
            { icon: GraduationCap, label: "Educational institutes generating student leads" },
            { icon: Home, label: "Local businesses targeting Sri Lankan customers" },
            { icon: Rocket, label: "Companies aiming to dominate Google search results" },
          ].map((ind) => (
            <div key={ind.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border">
              <ind.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{ind.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Unique Advantage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Our Unique Advantage</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">Unlike other <strong className="text-foreground">SEO companies in Sri Lanka</strong>, we combine:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-accent" />
              <h3 className="font-heading font-bold text-foreground">Immediate Impact</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> Direct marketing campaigns
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> High-intent traffic sources
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold text-foreground">Long-Term Growth</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> SEO rankings
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Organic traffic
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Sustainable lead generation
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-accent font-semibold mt-6">You get results now AND growth for the future</p>
      </motion.div>

      {/* Multi-Channel Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Multi-Channel Marketing with SEO</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          SEO works best when combined with other digital marketing channels. Buzz Connect offers a complete suite of marketing services:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Email Marketing", href: "/email-marketing" },
            { label: "SMS Marketing", href: "/sms-marketing" },
            { label: "WhatsApp Marketing", href: "/whatsapp-marketing" },
            { label: "Social Media Marketing", href: "/social-media-marketing-sri-lanka" },
            { label: "Lead Generation", href: "/lead-generation-sri-lanka" },
            { label: "Online Advertising", href: "/online-advertising-sri-lanka" },
          ].map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="flex items-center gap-3 p-4 rounded-xl bg-card shadow-card border border-border hover:border-accent/50 transition-colors"
            >
              <ArrowUpRight className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{link.label}</span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Findit.lk Advantage */}
      <FinditlkAdvantage
        title="The Findit.lk SEO Advantage"
        description="As the team behind Findit.lk — Sri Lanka's top-ranked promotions platform — we apply the same SEO expertise that keeps Findit.lk on Google page 1 to your business."
        links={[
          { label: "Offers in Sri Lanka", url: "https://findit.lk" },
          { label: "Promotions in Sri Lanka", url: "https://findit.lk" },
        ]}
        benefits={[
          "Proven Google page 1 rankings",
          "SEO strategies tested on high-traffic sites",
          "Direct access to 350,000+ subscriber network",
          "Combined SEO + marketing approach for maximum ROI",
        ]}
        gradient="bg-gradient-to-br from-accent/60 via-primary/40 to-accent/60"
      />

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions — SEO Sri Lanka</h2>
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
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Ready to Grow with the Best SEO Company in Sri Lanka?</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Work with a trusted <strong>SEO specialist in Sri Lanka</strong> and start building long-term visibility and consistent customer inquiries.
        </p>
        <a
          href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20SEO%20services.%20Can%20you%20share%20more%20details%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
        >
          Get Started Today
        </a>
      </motion.div>
      <RelatedArticles currentPath="/seo-sri-lanka" />
      <DigitalMarketingCTA />
    </ServicePageLayout>
  );
};

export default SeoServices;
