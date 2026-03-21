import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Eye, TrendingUp, DollarSign, Search, Settings, FileText, MapPin, Target, Zap, BarChart3, Rocket, GraduationCap, ShoppingCart, Building2, Home, Briefcase, Globe, HelpCircle } from "lucide-react";
import { useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const packages = [
  {
    name: "Package 1",
    price: "LKR 30,000/-",
    period: "",
    features: ["Keyword Research", "Website audit"],
  },
  {
    name: "Package 2",
    price: "LKR 60,000/-",
    period: "monthly",
    features: ["Keyword Research", "Website audit", "3 Keywords", "1 URL Optimization", "Title & Meta Information optimization", "CTA based Development", "Monthly Monitoring", "Reputed & Relevant Backlinks", "Recommendations"],
  },
  {
    name: "Package 3",
    price: "LKR 100,000/-",
    period: "monthly",
    features: ["Keyword Research", "Website audit", "5 Keywords", "3 URL Optimizations", "Title & Meta Information optimization", "CTA based Development", "Monthly Monitoring", "Reputed & Relevant Backlinks", "Recommendations"],
  },
];

const coreBenefits = [
  { icon: Eye, title: "Increase Online Visibility", desc: "Increase the visibility of your business online, and it will drive potential customers. We will help you dominate your competitors on the search engines." },
  { icon: TrendingUp, title: "SEO Will Drive More Customers", desc: "Increased exposure online from our unique Search Engine Optimisation strategy will drive more customers to your website and increase organic visitors." },
  { icon: DollarSign, title: "Increase Business Revenue", desc: "The increase in online exposure and number of visitors to your website will enable your company to generate more revenue and grow your business." },
];

const services = [
  "Keyword research and competitor analysis",
  "On-page SEO optimization",
  "Technical SEO improvements",
  "Content creation and optimization",
  "Link building and authority growth",
  "Local SEO for Sri Lankan businesses",
  "Performance tracking and reporting",
];

const seoTypes = [
  { icon: Search, title: "On-Page SEO", desc: "We optimize your website content, structure, and keywords to ensure it ranks for targeted search terms like \"SEO Sri Lanka\" and other high-intent keywords." },
  { icon: Settings, title: "Technical SEO", desc: "Our technical SEO ensures your website is fast, mobile-friendly, and easy for search engines to crawl and index." },
  { icon: FileText, title: "Content-Driven SEO", desc: "High-quality content is the foundation of successful SEO. We create optimized content that targets relevant keywords and provides value to users." },
  { icon: MapPin, title: "Local SEO Sri Lanka", desc: "We help businesses rank for location-based searches such as \"SEO company in Sri Lanka\", \"digital marketing Sri Lanka\", and \"SEO services near me\"." },
];

const results = [
  "Rank higher on Google",
  "Increase organic traffic",
  "Generate more leads and sales",
  "Improve brand visibility",
  "Achieve long-term growth",
];

const whyUs = [
  "Proven SEO strategies",
  "Cost-effective solutions",
  "Experienced SEO specialists",
  "Data-driven approach",
  "Transparent reporting",
  "Long-term results",
];

const processSteps = [
  { icon: Search, title: "Website Audit", desc: "Website audit and analysis" },
  { icon: Target, title: "Keyword Research", desc: "In-depth keyword research" },
  { icon: Settings, title: "Optimization", desc: "On-page and technical optimization" },
  { icon: FileText, title: "Content Creation", desc: "SEO-optimized content creation" },
  { icon: Globe, title: "Link Building", desc: "Authority and backlink growth" },
  { icon: BarChart3, title: "Track & Improve", desc: "Performance tracking and improvement" },
];

const industries = [
  { icon: GraduationCap, label: "Education institutes" },
  { icon: ShoppingCart, label: "E-commerce businesses" },
  { icon: Building2, label: "Hotels and travel companies" },
  { icon: Home, label: "Real estate companies" },
  { icon: Rocket, label: "SMEs and startups" },
  { icon: Briefcase, label: "Corporate organizations" },
];

const faqs = [
  { q: "What is SEO in Sri Lanka?", a: "SEO is the process of optimizing a website to rank higher on Google and attract more visitors." },
  { q: "How long does SEO take?", a: "SEO typically takes 3 to 6 months to show significant results." },
  { q: "Why is SEO important for businesses?", a: "SEO helps businesses increase visibility, traffic, and revenue." },
  { q: "Why choose Buzz Connect for SEO?", a: "We provide cost-effective, results-driven SEO solutions tailored to the Sri Lankan market." },
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
      description: "Professional SEO services in Sri Lanka to rank your website on Google.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="SEO Sri Lanka"
      title="SEO Sri Lanka – Professional Search Engine Optimization Services for Business Growth"
      subtitle="Buzz Connect provides results-driven SEO services in Sri Lanka, helping businesses improve their Google rankings, increase website traffic, and generate high-quality leads."
    >
      <SEOHead
        title="SEO Services Sri Lanka | Rank #1 on Google | Buzz Connect"
        description="Professional SEO services in Sri Lanka. On-page, technical & local SEO packages from LKR 30,000/month. Boost Google rankings, traffic & leads. 10+ years experience. Free SEO audit."
        canonical="/seo-sri-lanka"
        keywords="seo sri lanka, seo services sri lanka, best seo company sri lanka, google ranking sri lanka, search engine optimization colombo, local seo sri lanka, seo agency sri lanka, seo packages sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "SEO Services", url: "/seo-sri-lanka" },
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
          As a leading provider of <strong>SEO in Sri Lanka</strong>, we specialize in optimizing websites for both search engines and users, ensuring long-term visibility and sustainable growth.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Whether you are a startup, SME, or established company, our <strong>SEO strategies</strong> are designed to deliver measurable results and maximize your online presence.
        </p>
      </motion.div>

      {/* What is SEO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What is SEO and Why It Matters in Sri Lanka?</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Search Engine Optimization (SEO) is the process of improving a website's visibility on search engines like Google. In Sri Lanka, where digital competition is rapidly growing, SEO is essential for businesses to attract potential customers online.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          A well-optimized website can appear on the first page of Google for relevant keywords, increasing traffic, credibility, and revenue.
        </p>
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

      {/* Complete SEO Solutions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Our SEO Services in Sri Lanka</h2>
        <p className="text-muted-foreground mb-6">We offer comprehensive SEO services in Sri Lanka tailored to your business needs:</p>
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

      {/* Packages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">SEO Packages</h2>
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
                  POPULAR
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

      {/* Why Choose Buzz Connect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Why Choose Buzz Connect for SEO in Sri Lanka?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {whyUs.map((item) => (
            <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Results You Can Expect</h2>
        <ul className="space-y-3">
          {results.map((r) => (
            <li key={r} className="flex items-center gap-3 text-foreground">
              <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" /> {r}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">How Our SEO Process Works</h2>
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

      {/* Industries */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Industries We Serve</h2>
        <p className="text-muted-foreground mb-6">Our SEO services are ideal for:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {industries.map((ind) => (
            <div key={ind.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border">
              <ind.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{ind.label}</span>
            </div>
          ))}
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
          <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions – SEO Sri Lanka</h2>
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
          Improve your Google rankings and grow your business with professional SEO services. Contact Buzz Connect today to get started.
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
