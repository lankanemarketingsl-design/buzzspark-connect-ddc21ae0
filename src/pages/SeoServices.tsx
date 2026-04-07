import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Eye, TrendingUp, DollarSign, Search, Settings, FileText, MapPin, Target, Zap, BarChart3, Rocket, GraduationCap, ShoppingCart, Building2, Home, Briefcase, Globe, HelpCircle, Award, Star, Users, ArrowUpRight, Shield } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import FinditlkAdvantage from "@/components/FinditlkAdvantage";

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
  },
];

const coreBenefits = [
  { icon: Eye, title: "Increase Online Visibility", desc: "Dominate search results and drive potential customers to your website. Our proven SEO strategies help Sri Lankan businesses outrank competitors on Google." },
  { icon: TrendingUp, title: "Drive More Customers", desc: "Our unique Search Engine Optimisation strategy increases organic visitors and drives high-intent customers who are ready to buy." },
  { icon: DollarSign, title: "Increase Business Revenue", desc: "More visibility + more visitors = more revenue. Our clients see measurable ROI from SEO within 3–6 months." },
];

const services = [
  "Keyword research and competitor analysis",
  "On-page SEO optimization",
  "Technical SEO improvements (speed, mobile, crawlability)",
  "Content creation and optimization",
  "Link building and authority growth",
  "Local SEO for Sri Lankan businesses",
  "Google Business Profile optimization",
  "Performance tracking and monthly reporting",
];

const seoTypes = [
  { icon: Search, title: "On-Page SEO", desc: "We optimize your website content, meta tags, headings, and internal links to rank for high-intent keywords like \"SEO Sri Lanka\", \"best SEO company Sri Lanka\", and \"affordable SEO Sri Lanka\"." },
  { icon: Settings, title: "Technical SEO", desc: "Our technical SEO ensures your website is fast, mobile-friendly, secure (HTTPS), and easy for Google to crawl and index — critical ranking factors in 2026." },
  { icon: FileText, title: "Content-Driven SEO", desc: "We create optimized, in-depth content that answers real user questions, builds topical authority, and targets long-tail keywords for higher conversion rates." },
  { icon: MapPin, title: "Local SEO Sri Lanka", desc: "We help businesses rank for location-based searches such as \"SEO company in Colombo\", \"SEO services near me\", and \"best SEO agency Sri Lanka\"." },
];

const caseStudies = [
  {
    industry: "Hotel & Tourism",
    result: "Page 5 → Page 1 in 60 days",
    detail: "Ranked a Colombo hotel website from page 5 to Google page 1 for 'hotel booking Sri Lanka' within 60 days using on-page + local SEO.",
    metric: "350% traffic increase",
  },
  {
    industry: "Education Institute",
    result: "300+ leads per month",
    detail: "Generated over 300 qualified student leads monthly for a leading education institute through SEO and content marketing.",
    metric: "300+ monthly leads",
  },
  {
    industry: "Real Estate",
    result: "#1 ranking for key terms",
    detail: "Achieved #1 Google ranking for 'real estate Sri Lanka' and related property keywords, driving consistent organic leads.",
    metric: "5x ROI in 6 months",
  },
];

const results = [
  "Rank higher on Google for competitive keywords",
  "Increase organic traffic by 200–500%",
  "Generate more leads and sales",
  "Improve brand visibility and credibility",
  "Achieve long-term, sustainable growth",
];

const whyUs = [
  { icon: Award, text: "10+ years of proven SEO experience in Sri Lanka" },
  { icon: BarChart3, text: "Data-driven strategies with measurable results" },
  { icon: Shield, text: "White-hat SEO — no shortcuts, no penalties" },
  { icon: Users, text: "Dedicated SEO specialists for your account" },
  { icon: DollarSign, text: "Cost-effective packages from LKR 30,000" },
  { icon: Star, text: "Transparent reporting — you see everything" },
];

const processSteps = [
  { icon: Search, title: "Website Audit", desc: "Comprehensive website audit and competitor analysis" },
  { icon: Target, title: "Keyword Research", desc: "In-depth keyword research for your industry" },
  { icon: Settings, title: "On-Page Optimization", desc: "Optimize content, meta tags, and site structure" },
  { icon: FileText, title: "Content Creation", desc: "SEO-optimized content that ranks and converts" },
  { icon: Globe, title: "Link Building", desc: "Build high-quality backlinks for authority" },
  { icon: BarChart3, title: "Track & Improve", desc: "Monthly performance tracking and optimization" },
];

const industries = [
  { icon: Building2, label: "Hotels & travel companies" },
  { icon: GraduationCap, label: "Education institutes" },
  { icon: Home, label: "Real estate companies" },
  { icon: ShoppingCart, label: "E-commerce businesses" },
  { icon: Rocket, label: "SMEs & startups" },
  { icon: Briefcase, label: "Corporate organizations" },
];

const faqs = [
  { q: "What is SEO in Sri Lanka?", a: "SEO (Search Engine Optimization) is the process of optimizing a website to rank higher on Google and other search engines. In Sri Lanka, SEO helps businesses increase online visibility, attract more customers, and grow revenue through organic search traffic." },
  { q: "How much does SEO cost in Sri Lanka?", a: "SEO services in Sri Lanka typically range from LKR 30,000 to LKR 100,000+ per month depending on the scope and competitiveness of your industry. BuzzConnect offers affordable SEO packages starting from LKR 30,000 with proven results." },
  { q: "How long does SEO take to show results?", a: "SEO typically takes 3 to 6 months to show significant results. However, some improvements like better indexing and local rankings can happen within the first 4–8 weeks. Long-term SEO delivers compounding returns over time." },
  { q: "Why is SEO important for Sri Lankan businesses?", a: "With growing digital competition in Sri Lanka, SEO is essential for businesses to be found online. Over 80% of consumers search Google before making a purchase. Without SEO, your competitors will capture those customers instead." },
  { q: "What is the difference between SEO and Google Ads?", a: "SEO provides organic (free) traffic through ranking improvements, while Google Ads provides paid traffic. SEO is more cost-effective long-term and builds lasting authority, while Google Ads delivers instant but temporary visibility." },
  { q: "Why choose BuzzConnect for SEO in Sri Lanka?", a: "BuzzConnect is a leading SEO company in Sri Lanka with 10+ years of experience, proven results across multiple industries, and affordable packages. We use white-hat strategies that deliver sustainable rankings and real business growth." },
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
      description: "Professional SEO services in Sri Lanka. #1 SEO company for fast Google rankings, real leads, and proven results.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="#1 SEO Company Sri Lanka"
      title="SEO Services in Sri Lanka – #1 SEO Company for Fast Google Rankings"
      subtitle="BuzzConnect delivers results-driven SEO services in Sri Lanka — helping businesses rank on Google page 1, increase organic traffic by 200–500%, and generate high-quality leads. 10+ years of proven results."
    >
      <SEOHead
        title="SEO Sri Lanka | SEO Packages Sri Lanka | SEO Services in Sri Lanka | #1 SEO Company"
        description="Looking for the best SEO Services in Sri Lanka? BuzzConnect delivers fast rankings, real leads, and proven results. Affordable SEO packages from LKR 30,000. Contact us today."
        canonical="/seo-sri-lanka"
        keywords="seo sri lanka, seo packages sri lanka, seo services in sri lanka, best seo company sri lanka, seo services sri lanka, seo services colombo, affordable seo sri lanka, seo agency sri lanka, google ranking sri lanka, local seo sri lanka, seo for hotels sri lanka, search engine optimization sri lanka"
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
            <span className="text-accent font-bold text-sm">SEO Packages from LKR 30,000/-</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Star className="w-4 h-4 text-secondary-foreground" />
            <span className="text-secondary-foreground font-bold text-sm">10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Users className="w-4 h-4 text-secondary-foreground" />
            <span className="text-secondary-foreground font-bold text-sm">200+ Clients Served</span>
          </div>
        </div>
      </motion.div>

      {/* Power Intro with USP */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          As the <strong className="text-foreground">#1 SEO company in Sri Lanka</strong>, BuzzConnect offers the best <strong className="text-foreground">SEO services in Sri Lanka</strong> — specializing in getting your website to Google page 1, fast. Our proven SEO strategies have helped hotels, education institutes, real estate companies, and SMEs across Sri Lanka achieve top rankings and generate real business leads.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Whether you need <strong className="text-foreground">affordable SEO in Sri Lanka</strong>, <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead generation</Link>, or a complete digital marketing strategy — we deliver measurable results that grow your revenue.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold">10+ Years Experience</span>
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold">500+ Keywords Ranked</span>
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold">200+ Clients Served</span>
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold">Proven Results</span>
        </div>
      </motion.div>

      {/* Why Choose BuzzConnect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Why Choose BuzzConnect for SEO in Sri Lanka?</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Choosing the right <strong className="text-foreground">SEO company in Sri Lanka</strong> can make or break your online success. Here's why 200+ businesses trust BuzzConnect:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {whyUs.map((item) => (
            <div key={item.text} className="flex items-center gap-3 p-4 rounded-xl bg-card shadow-card border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Core Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {coreBenefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-8 rounded-2xl bg-card shadow-card border border-border"
          >
            <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
              <b.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* SEO Services We Offer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">SEO Services We Offer in Sri Lanka</h2>
        <p className="text-muted-foreground mb-6">Comprehensive <strong className="text-foreground">SEO services in Sri Lanka</strong> tailored to your business goals:</p>
        <ul className="space-y-3">
          {services.map((s) => (
            <li key={s} className="flex items-center gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {s}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* SEO Types */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seoTypes.map((t) => (
            <div key={t.title} className="p-6 rounded-2xl bg-card shadow-card border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <t.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground">{t.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Case Studies — GAME CHANGER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">Proven SEO Results in Sri Lanka</h2>
        <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">Real results from real Sri Lankan businesses. Here's what our SEO strategies have achieved:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card shadow-card border-2 border-accent/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full" />
              <span className="text-xs font-bold text-accent uppercase tracking-wider">{cs.industry}</span>
              <div className="font-heading text-xl font-bold text-foreground mt-2 mb-1">{cs.result}</div>
              <p className="text-sm text-muted-foreground mb-4">{cs.detail}</p>
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <ArrowUpRight className="w-4 h-4" /> {cs.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* SEO Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Our SEO Process — Step by Step</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Packages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">SEO Pricing in Sri Lanka</h2>
        <p className="text-muted-foreground mb-8 text-center">Affordable <strong className="text-foreground">SEO packages</strong> designed for Sri Lankan businesses of all sizes</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl bg-card shadow-card border-2 ${i === 2 ? 'border-accent' : 'border-border'} relative`}
            >
              {i === 2 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-accent text-xs font-bold text-primary">
                  MOST POPULAR
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

      {/* Benefits of SEO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Benefits of SEO for Sri Lankan Businesses</h2>
        <ul className="space-y-3">
          {results.map((r) => (
            <li key={r} className="flex items-center gap-3 text-foreground">
              <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" /> {r}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Industries */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Industries We Serve with SEO in Sri Lanka</h2>
        <p className="text-muted-foreground mb-6">Our <strong className="text-foreground">SEO services</strong> are ideal for businesses across Sri Lanka:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {industries.map((ind) => (
            <div key={ind.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border">
              <ind.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{ind.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Internal Linking Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Multi-Channel Marketing with SEO</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          SEO works best when combined with other digital marketing channels. BuzzConnect offers a complete suite of marketing services to maximize your online presence in Sri Lanka:
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
          <h2 className="font-heading text-2xl font-bold text-foreground">FAQs About SEO in Sri Lanka</h2>
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
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Start Your SEO Campaign in Sri Lanka Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Ready to rank #1 on Google? Contact BuzzConnect today and discover how our proven SEO strategies can grow your business.
        </p>
        <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
          Contact Buzz Connect
        </a>
      </motion.div>
      <RelatedArticles currentPath="/seo-sri-lanka" />
    </ServicePageLayout>
  );
};

export default SeoServices;
