import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, DollarSign, Search, Settings, FileText, Target, Zap, BarChart3, Rocket, GraduationCap, Building2, Home, HelpCircle, Award, Star, Users, ArrowUpRight, Shield, Clock, Link2, Globe, Eye, MapPin, ShoppingCart, Briefcase, Phone } from "lucide-react";
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
  { q: "What is the best SEO company in Sri Lanka?", a: "The best SEO company in Sri Lanka is one that delivers real, measurable results — higher Google rankings, increased organic traffic, and genuine customer inquiries. Buzz Connect is widely recognized as the best SEO company Sri Lanka businesses trust, with 1,500+ clients served and a data-driven approach that focuses on business growth, not just vanity metrics." },
  { q: "How much does an SEO consultant in Sri Lanka charge?", a: "An SEO consultant in Sri Lanka typically charges between LKR 30,000 to LKR 100,000+ per month depending on the scope of work. At Buzz Connect, our SEO consultant Sri Lanka packages start from LKR 30,000 for keyword research and website audits, with comprehensive growth plans available at LKR 60,000/month and premium plans at LKR 100,000/month." },
  { q: "How long does SEO take to show results in Sri Lanka?", a: "SEO in Sri Lanka typically shows initial results within 2–4 months, depending on competition and strategy. Month 1 focuses on optimization and foundation, months 2–3 show ranking improvements, and months 3–6 deliver strong traffic and lead growth. As a leading SEO company Sri Lanka businesses rely on, we start improving your website from day one." },
  { q: "What does an SEO specialist in Sri Lanka do?", a: "An SEO specialist in Sri Lanka handles keyword research, on-page optimization, technical SEO audits, content strategy, link building, and monthly performance monitoring. Our SEO specialists at Buzz Connect go beyond rankings — we focus on generating real business inquiries and revenue growth for every client." },
  { q: "Why is SEO important for businesses in Sri Lanka?", a: "SEO is critical for Sri Lankan businesses because over 80% of consumers search Google before making a purchase. Without proper SEO Sri Lanka optimization, your competitors will capture those customers instead. SEO provides sustainable, long-term organic traffic that reduces dependence on paid advertising." },
  { q: "What is the difference between SEO and Google Ads?", a: "SEO provides organic (free) traffic through ranking improvements, while Google Ads provides paid traffic. SEO is more cost-effective long-term and builds lasting authority. As an SEO expert Sri Lanka businesses trust, we recommend combining both for maximum impact — SEO for sustainable growth and Google Ads for immediate visibility." },
  { q: "How do I choose the right SEO company in Sri Lanka?", a: "When choosing an SEO company Sri Lanka, look for proven results (case studies), transparent reporting, white-hat strategies, industry experience, and clear pricing. Avoid companies promising overnight rankings. Buzz Connect ticks all these boxes with 10+ years of experience and 1,500+ satisfied clients." },
  { q: "What SEO services does Buzz Connect offer?", a: "Buzz Connect offers comprehensive SEO services Sri Lanka including keyword research, website audits, on-page optimization, technical SEO, content strategy, backlink development, local SEO, Google Business Profile optimization, and monthly performance reporting. We are a full-service SEO company in Sri Lanka." },
  { q: "Can SEO help my small business in Sri Lanka?", a: "Absolutely. SEO is one of the most cost-effective marketing strategies for small businesses in Sri Lanka. Our Starter package at LKR 30,000 is specifically designed for small businesses. As an experienced SEO specialist Sri Lanka, we help small businesses compete with larger companies on Google." },
  { q: "What industries benefit most from SEO in Sri Lanka?", a: "Hotels, education institutes, real estate companies, e-commerce businesses, healthcare providers, restaurants, and professional services benefit significantly from SEO Sri Lanka. Our SEO expert Sri Lanka team has delivered results across all these industries." },
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
      provider: {
        "@type": "Organization",
        name: "Buzz Connect",
        url: "https://buzzconnect.lk",
        logo: "https://buzzconnect.lk/og-image.png",
        telephone: ["+94771437707", "+94771976351"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Colombo",
          addressRegion: "Western Province",
          addressCountry: "LK",
        },
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Best SEO company in Sri Lanka. Professional SEO consultant, SEO specialist, and SEO expert services for real business growth. Rank higher on Google with proven strategies.",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "30000",
        highPrice: "100000",
        priceCurrency: "LKR",
        offerCount: "3",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Buzz Connect - SEO Company Sri Lanka",
      description: "Best SEO company in Sri Lanka offering professional SEO consultant and SEO specialist services.",
      url: "https://buzzconnect.lk/seo-sri-lanka",
      priceRange: "LKR 30,000 - LKR 100,000",
      areaServed: "Sri Lanka",
      serviceType: "Search Engine Optimization",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Industry-Specific SEO Strategies in Sri Lanka",
      description: "Tailored SEO strategies for different industries in Sri Lanka to rank #1 on Google.",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hotels & Hospitality SEO", description: "Targeted SEO for hotels to increase direct bookings. Keywords: best hotels in Colombo, hotel deals Sri Lanka." },
        { "@type": "ListItem", position: 2, name: "Education & Courses SEO", description: "SEO strategies for institutes to generate student leads. Keywords: IT courses Sri Lanka, English classes Colombo." },
        { "@type": "ListItem", position: 3, name: "Healthcare SEO", description: "Trust-driven SEO for clinics and hospitals. Keywords: best dentist in Colombo, skin clinic Sri Lanka." },
        { "@type": "ListItem", position: 4, name: "Real Estate & Property SEO", description: "Location-based SEO for high-value property transactions. Keywords: land for sale Sri Lanka, apartments in Colombo." },
        { "@type": "ListItem", position: 5, name: "Finance & Banking SEO", description: "Authority-driven SEO for financial services. Keywords: loans Sri Lanka, insurance Colombo." },
        { "@type": "ListItem", position: 6, name: "Legal Services SEO", description: "Expert content and trust signals for law firms. Keywords: lawyers in Colombo, legal services Sri Lanka." },
        { "@type": "ListItem", position: 7, name: "IT & Software Companies SEO", description: "B2B-focused SEO with case studies and technical content. Keywords: software companies in Sri Lanka, IT services Colombo." },
        { "@type": "ListItem", position: 8, name: "Recruitment & HR Services SEO", description: "High-volume conversion SEO for recruitment agencies. Keywords: jobs in Sri Lanka, recruitment agencies Colombo." },
        { "@type": "ListItem", position: 9, name: "Restaurants & Cafes SEO", description: "Local SEO with Google Maps and reviews optimization. Keywords: restaurants in Colombo, cafes near me." },
        { "@type": "ListItem", position: 10, name: "Fashion & Retail SEO", description: "Product and category optimization for competitive markets. Keywords: buy online Sri Lanka, fashion brands Colombo." },
        { "@type": "ListItem", position: 11, name: "Beauty, Salon & Wellness SEO", description: "Local SEO with customer reviews for salons and spas. Keywords: beauty salons in Colombo, spa Sri Lanka." },
        { "@type": "ListItem", position: 12, name: "Home Services SEO", description: "Urgent local demand SEO with fast conversion landing pages. Keywords: home cleaning services Colombo, plumbing services Sri Lanka." },
        { "@type": "ListItem", position: 13, name: "Automotive Industry SEO", description: "Listing and service SEO for vehicle businesses. Keywords: car for sale Sri Lanka, car service Colombo." },
        { "@type": "ListItem", position: 14, name: "Travel & Tourism SEO", description: "Content-driven SEO with destination pages and travel guides. Keywords: Sri Lanka tour packages, things to do in Sri Lanka." },
        { "@type": "ListItem", position: 15, name: "Construction & Engineering SEO", description: "Portfolio-driven SEO for high-value construction projects. Keywords: construction companies Sri Lanka, house builders Colombo." },
        { "@type": "ListItem", position: 16, name: "Event Management & Weddings SEO", description: "Visual content and portfolio SEO for event planners. Keywords: wedding planners Sri Lanka, event management Colombo." },
        { "@type": "ListItem", position: 17, name: "Logistics & Delivery SEO", description: "Service page optimization for B2B and B2C delivery. Keywords: courier services Sri Lanka, delivery services Colombo." },
        { "@type": "ListItem", position: 18, name: "Accounting & Business Services SEO", description: "Professional service SEO with local targeting. Keywords: accountants in Colombo, audit firms Sri Lanka." },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Rank #1 on Google in Sri Lanka with Industry-Specific SEO",
      description: "A step-by-step guide to dominating Google search results in Sri Lanka using tailored industry strategies.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Target Industry-Specific Keywords", text: "Identify and target keywords your customers actually search for in your industry — such as 'best hotels in Colombo' for hospitality or 'IT courses Sri Lanka' for education." },
        { "@type": "HowToStep", position: 2, name: "Optimize Your Website for Your Industry", text: "Each industry needs a different approach: booking-focused pages for hotels, course landing pages for education, trust and credibility for healthcare, product optimization for e-commerce." },
        { "@type": "HowToStep", position: 3, name: "Create High-Quality Industry Content", text: "Publish expert content that matches search intent — such as 'Top Hotels in Negombo' for hospitality or 'Best IT Courses in Sri Lanka' for education." },
        { "@type": "HowToStep", position: 4, name: "Build Industry-Relevant Backlinks", text: "Earn backlinks from relevant industry sources — travel blogs for hotels, education directories for institutes, medical sites for healthcare." },
        { "@type": "HowToStep", position: 5, name: "Dominate Local SEO", text: "Optimize Google Business Profile, collect reviews, and target location-specific keywords like 'SEO company Colombo' or 'restaurant Colombo'." },
        { "@type": "HowToStep", position: 6, name: "Track Real Business Results", text: "Measure industry-specific KPIs: bookings for hotels, student leads for education, appointments for healthcare, and inquiries for professional services." },
      ],
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
        description="SEO Sri Lanka services from the best SEO company Sri Lanka. SEO consultant Sri Lanka and SEO specialist in Sri Lanka for growth."
        canonical="/seo-sri-lanka"
        keywords="best seo company in sri lanka, best seo company sri lanka, seo consultant sri lanka, seo company sri lanka, seo sri lanka, seo specialist sri lanka, seo specialist in sri lanka, seo expert sri lanka, seo services sri lanka, seo packages sri lanka, search engine optimization sri lanka, google ranking sri lanka, local seo sri lanka, best seo agency sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "SEO Services Sri Lanka", url: "/seo-sri-lanka" },
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

      {/* SEO Services Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Looking for the Best SEO Company in Sri Lanka?</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          At Buzz Connect, we are more than just an SEO company Sri Lanka — we are your growth partner. Our focus is simple: get your business found by the right people at the right time on Google.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Whether you're a startup looking for an affordable SEO specialist in Sri Lanka, a hotel seeking more direct bookings, or a corporate brand wanting to dominate search results — our team of experienced SEO experts will craft a custom strategy that delivers real results.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We help businesses across Sri Lanka achieve:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Rank for high-intent keywords on Google page 1",
            "Increase organic traffic by 200–500%",
            "Generate consistent, qualified leads every month",
            "Build long-term online visibility and brand authority",
            "Reduce dependence on paid advertising",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Whether you need an SEO consultant in Sri Lanka for a one-time audit or a full-service SEO specialist team for ongoing optimization, we deliver measurable results.
        </p>
      </motion.div>

      {/* Packages — MOVED UP */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">SEO Packages in Sri Lanka — Affordable Pricing</h2>
        <p className="text-muted-foreground mb-8 text-center">Professional SEO packages from the best SEO company Sri Lanka — designed for businesses of all sizes</p>
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

      {/* What is SEO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What is SEO and Why Do You Need It?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          SEO (Search Engine Optimization) is the process of optimizing your website to rank higher on Google and other search engines for relevant keywords. When someone in Sri Lanka searches for "best SEO company Sri Lanka" or "SEO services near me," proper SEO ensures your business appears at the top of the results.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          In today's digital landscape, over 80% of consumers search Google before making a purchase decision. If your business is not ranking on the first page, you are losing potential customers to your competitors every single day. That's why hiring a professional SEO expert in Sri Lanka is no longer optional — it's essential for survival and growth.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          As a leading SEO company in Sri Lanka, Buzz Connect uses white-hat, Google-compliant strategies that build sustainable rankings. We don't use shortcuts or black-hat techniques that risk Google penalties — we build your online presence the right way.
        </p>
      </motion.div>

      {/* Why We Are the Best */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Why Buzz Connect is the Best SEO Company in Sri Lanka</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">Most SEO companies in Sri Lanka focus only on rankings. We focus on business results. Here's what sets us apart:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {[
            { icon: BarChart3, title: "Data-Driven SEO Strategies", desc: "Every decision our SEO specialist team makes is backed by real data — keyword analysis, competitor research, and performance metrics." },
            { icon: Target, title: "Conversion-Focused Approach", desc: "We optimize not just for traffic — but for inquiries, leads, and sales. Every visitor has a clear path to conversion." },
            { icon: MapPin, title: "Local Market Expertise", desc: "Deep understanding of Sri Lankan search behavior, local keywords, and market dynamics." },
            { icon: Award, title: "Proven Track Record", desc: "1,500+ clients served and thousands of successful campaigns across hotels, education, real estate, finance, and more." },
            { icon: Shield, title: "White-Hat SEO Only", desc: "We follow Google's guidelines strictly. No black-hat shortcuts, no PBNs, no link schemes — just sustainable strategies that last." },
            { icon: Eye, title: "Transparent Reporting", desc: "Monthly reports showing keyword rankings, traffic growth, and ROI. You see exactly what we do and the results we deliver." },
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
      </motion.div>

      {/* SEO Services We Offer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Comprehensive SEO Services in Sri Lanka</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          As a full-service SEO company Sri Lanka, we offer every service you need to dominate Google search results:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: Search, title: "Keyword Research & Analysis", desc: "We identify high-value, high-intent keywords specific to your industry and the Sri Lankan market — targeting keywords that drive real business." },
            { icon: FileText, title: "On-Page SEO Optimization", desc: "We optimize your page titles, meta descriptions, headings, content structure, URLs, images, and internal linking for both Google and user experience." },
            { icon: Settings, title: "Technical SEO Audits & Fixes", desc: "We analyze site speed, mobile responsiveness, crawlability, indexing issues, schema markup, Core Web Vitals, and security (HTTPS)." },
            { icon: Link2, title: "Link Building & Authority Growth", desc: "We build high-quality, reputed backlinks from relevant sources to increase your domain authority with safe, sustainable strategies." },
            { icon: MapPin, title: "Local SEO Sri Lanka", desc: "We optimize your Google Business Profile, local citations, and location-based keywords for 'near me' and city-specific searches." },
            { icon: Globe, title: "Content Strategy & Creation", desc: "SEO-optimized content that answers user queries, builds topical authority, and targets long-tail keywords for higher conversions." },
            { icon: BarChart3, title: "Monthly Reporting & Analytics", desc: "Detailed monthly reports covering keyword rankings, organic traffic growth, conversion rates, and actionable recommendations." },
            { icon: TrendingUp, title: "Competitor Analysis", desc: "We analyze your top competitors' SEO strategies, backlink profiles, and content gaps to create a strategy that outperforms them." },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-2xl bg-card shadow-card border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Our SEO Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">How Our SEO Process Works</h2>
        <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">Our proven 6-step SEO process delivers consistent results for businesses across Sri Lanka</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Search, step: 1, title: "Keyword Research", desc: "We identify high-value keywords focused on buyer intent and conversions for your industry." },
            { icon: Settings, step: 2, title: "Website Audit", desc: "Complete technical SEO audit covering site speed, mobile-friendliness, crawl errors, and on-page gaps." },
            { icon: FileText, step: 3, title: "On-Page Optimization", desc: "We optimize titles, meta descriptions, content structure, URLs, images, and internal linking." },
            { icon: TrendingUp, step: 4, title: "Strategy & Growth Planning", desc: "Custom SEO roadmap to improve rankings, increase traffic, and maximize conversions." },
            { icon: Link2, step: 5, title: "Backlink Development", desc: "We build reputed, relevant backlinks from authoritative sources to boost your domain authority." },
            { icon: BarChart3, step: 6, title: "Monthly Monitoring", desc: "We track keyword rankings, traffic growth, and conversion metrics with continuous optimization." },
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
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What SEO Results Can You Expect?</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          SEO Sri Lanka is a long-term growth strategy that compounds over time. Here's the typical timeline when working with an experienced SEO specialist in Sri Lanka:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { period: "Month 1", label: "Optimization & Foundation", detail: "Audit, fixes, keyword targeting", color: "bg-primary/10 border-primary/30" },
            { period: "Month 2–3", label: "Ranking Improvements", detail: "Keywords start climbing Google", color: "bg-accent/10 border-accent/30" },
            { period: "Month 3–6", label: "Traffic & Lead Growth", detail: "Consistent organic visitors & inquiries", color: "bg-accent/20 border-accent/40" },
          ].map((t) => (
            <div key={t.period} className={`p-5 rounded-xl border ${t.color} text-center`}>
              <div className="font-heading font-bold text-foreground mb-1">{t.period}</div>
              <p className="text-sm text-foreground font-medium">{t.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{t.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-accent font-semibold flex items-center gap-2">
          <Clock className="w-5 h-5" /> We start improving your website from day one
        </p>
      </motion.div>

      {/* Industry-Specific SEO Strategies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Industry-Specific SEO Strategies in Sri Lanka</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          To rank #1 on Google, your SEO strategy must align with how customers search in your industry. Different industries have different search intent — and ranking successfully depends on targeting the right keywords, content, and user expectations.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">Here's how we help businesses across Sri Lanka dominate search results:</p>

        {/* Core Industries */}
        <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Rocket className="w-5 h-5 text-accent" /> Core Industries
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: Building2,
              title: "Hotels & Hospitality",
              keywords: ['"best hotels in Colombo"', '"hotel deals Sri Lanka"'],
              intent: "High booking intent",
              link: { text: "Hotel Digital Marketing in Sri Lanka", href: "/hotel-marketing-sri-lanka" },
            },
            {
              icon: GraduationCap,
              title: "Education & Courses",
              keywords: ['"IT courses Sri Lanka"', '"English classes Colombo"'],
              intent: "High lead generation potential",
              link: { text: "Student Lead Generation in Sri Lanka", href: "/education-marketing-sri-lanka" },
            },
            {
              icon: Shield,
              title: "Healthcare",
              keywords: ['"best dentist in Colombo"', '"skin clinic Sri Lanka"'],
              intent: "High trust + urgency",
              details: ["Credibility", "Patient trust", "Service-specific pages"],
            },
            {
              icon: Home,
              title: "Real Estate & Property",
              keywords: ['"land for sale Sri Lanka"', '"apartments in Colombo"'],
              intent: "High-value transactions",
              link: { text: "Real Estate Marketing Sri Lanka", href: "/real-estate-marketing-sri-lanka" },
            },
          ].map((ind) => (
            <div key={ind.title} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <div className="flex items-center gap-2 mb-2">
                <ind.icon className="w-5 h-5 text-primary" />
                <h4 className="font-heading font-bold text-foreground text-sm">{ind.title}</h4>
              </div>
              <div className="space-y-1 mb-2">
                {ind.keywords.map((kw) => (
                  <span key={kw} className="block text-xs text-muted-foreground italic">{kw}</span>
                ))}
              </div>
              <p className="text-xs font-semibold text-accent mb-2">👉 {ind.intent}</p>
              {ind.link && (
                <Link to={ind.link.href} className="text-xs text-accent hover:underline font-semibold">{ind.link.text} →</Link>
              )}
              {ind.details && (
                <ul className="space-y-1">
                  {ind.details.map((d) => (
                    <li key={d} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Professional & Business Services */}
        <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-accent" /> Professional & Business Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: DollarSign,
              title: "Finance & Banking",
              keywords: ['"loans Sri Lanka"', '"insurance Colombo"'],
              intent: "Trust-driven conversions",
              details: ["Authority content", "Financial guides", "Credibility signals"],
              link: { text: "Finance Marketing Sri Lanka", href: "/finance-marketing-sri-lanka" },
            },
            {
              icon: Shield,
              title: "Legal Services",
              keywords: ['"lawyers in Colombo"', '"legal services Sri Lanka"'],
              intent: "Authority-driven SEO",
              details: ["Expert content", "Trust signals", "Strong visibility"],
            },
            {
              icon: BarChart3,
              title: "Accounting & Business Services",
              keywords: ['"accountants in Colombo"', '"audit firms Sri Lanka"'],
              intent: "Professional service leads",
              details: ["Service pages", "Local SEO", "Industry-focused content"],
            },
            {
              icon: Settings,
              title: "IT & Software Companies",
              keywords: ['"software companies in Sri Lanka"', '"IT services Colombo"'],
              intent: "High-value B2B leads",
              details: ["Service pages", "Case studies", "Technical content"],
            },
            {
              icon: Users,
              title: "Recruitment & HR Services",
              keywords: ['"jobs in Sri Lanka"', '"recruitment agencies Colombo"'],
              intent: "High-volume + fast conversions",
              link: { text: "Staff Recruitment Campaigns Sri Lanka", href: "/staff-recruitment-sri-lanka" },
            },
          ].map((ind) => (
            <div key={ind.title} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <div className="flex items-center gap-2 mb-2">
                <ind.icon className="w-5 h-5 text-primary" />
                <h4 className="font-heading font-bold text-foreground text-sm">{ind.title}</h4>
              </div>
              <div className="space-y-1 mb-2">
                {ind.keywords.map((kw) => (
                  <span key={kw} className="block text-xs text-muted-foreground italic">{kw}</span>
                ))}
              </div>
              <p className="text-xs font-semibold text-accent mb-2">👉 {ind.intent}</p>
              {ind.details && (
                <ul className="space-y-1 mb-2">
                  {ind.details.map((d) => (
                    <li key={d} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
              )}
              {ind.link && (
                <Link to={ind.link.href} className="text-xs text-accent hover:underline font-semibold">{ind.link.text} →</Link>
              )}
            </div>
          ))}
        </div>

        {/* Local & Consumer Services */}
        <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5 text-accent" /> Local & Consumer Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: Target,
              title: "Restaurants & Cafes",
              keywords: ['"restaurants in Colombo"', '"cafes near me"'],
              intent: "Local SEO + reviews are critical",
              details: ["Google Maps optimization", "Reviews & ratings", "Local visibility"],
              link: { text: "Restaurant Marketing Sri Lanka", href: "/restaurant-marketing-sri-lanka" },
            },
            {
              icon: Star,
              title: "Fashion & Retail",
              keywords: ['"buy online Sri Lanka"', '"fashion brands Colombo"'],
              intent: "Highly competitive market",
              details: ["Product pages", "Category optimization", "Conversion-focused content"],
              link: { text: "Fashion Marketing Sri Lanka", href: "/fashion-marketing-sri-lanka" },
            },
            {
              icon: Eye,
              title: "Beauty, Salon & Wellness",
              keywords: ['"beauty salons in Colombo"', '"spa Sri Lanka"'],
              intent: "High local competition",
              details: ["Local SEO", "Customer reviews", "Service pages"],
            },
            {
              icon: Home,
              title: "Home Services",
              keywords: ['"home cleaning services Colombo"', '"plumbing services Sri Lanka"'],
              intent: "Urgent + local demand",
              details: ["Location-based pages", "Google Maps ranking", "Fast conversion landing pages"],
            },
            {
              icon: Settings,
              title: "Automotive Industry",
              keywords: ['"car for sale Sri Lanka"', '"car service Colombo"'],
              intent: "Listing + service SEO",
              details: ["Vehicle listings", "Service pages", "Local targeting"],
            },
          ].map((ind) => (
            <div key={ind.title} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <div className="flex items-center gap-2 mb-2">
                <ind.icon className="w-5 h-5 text-primary" />
                <h4 className="font-heading font-bold text-foreground text-sm">{ind.title}</h4>
              </div>
              <div className="space-y-1 mb-2">
                {ind.keywords.map((kw) => (
                  <span key={kw} className="block text-xs text-muted-foreground italic">{kw}</span>
                ))}
              </div>
              <p className="text-xs font-semibold text-accent mb-2">👉 {ind.intent}</p>
              {ind.details && (
                <ul className="space-y-1 mb-2">
                  {ind.details.map((d) => (
                    <li key={d} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
              )}
              {ind.link && (
                <Link to={ind.link.href} className="text-xs text-accent hover:underline font-semibold">{ind.link.text} →</Link>
              )}
            </div>
          ))}
        </div>

        {/* Growth & Niche Industries */}
        <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-accent" /> Growth & Niche Industries
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: Globe,
              title: "Travel & Tourism",
              keywords: ['"Sri Lanka tour packages"', '"things to do in Sri Lanka"'],
              intent: "Content-driven SEO",
              details: ["Blog content", "Destination pages", "Travel guides"],
            },
            {
              icon: Building2,
              title: "Construction & Engineering",
              keywords: ['"construction companies Sri Lanka"', '"house builders Colombo"'],
              intent: "High-value projects",
              details: ["Portfolio content", "Trust signals", "Location keywords"],
            },
            {
              icon: Star,
              title: "Event Management & Weddings",
              keywords: ['"wedding planners Sri Lanka"', '"event management Colombo"'],
              intent: "High emotional + high-value decisions",
              details: ["Visual content", "Portfolio pages", "Location targeting"],
              link: { text: "Event Marketing Sri Lanka", href: "/event-marketing-sri-lanka" },
            },
            {
              icon: Rocket,
              title: "Logistics & Delivery",
              keywords: ['"courier services Sri Lanka"', '"delivery services Colombo"'],
              intent: "B2B + B2C demand",
              details: ["Service pages", "Local targeting", "Fast conversion content"],
            },
          ].map((ind) => (
            <div key={ind.title} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <div className="flex items-center gap-2 mb-2">
                <ind.icon className="w-5 h-5 text-primary" />
                <h4 className="font-heading font-bold text-foreground text-sm">{ind.title}</h4>
              </div>
              <div className="space-y-1 mb-2">
                {ind.keywords.map((kw) => (
                  <span key={kw} className="block text-xs text-muted-foreground italic">{kw}</span>
                ))}
              </div>
              <p className="text-xs font-semibold text-accent mb-2">👉 {ind.intent}</p>
              {ind.details && (
                <ul className="space-y-1 mb-2">
                  {ind.details.map((d) => (
                    <li key={d} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
              )}
              {ind.link && (
                <Link to={ind.link.href} className="text-xs text-accent hover:underline font-semibold">{ind.link.text} →</Link>
              )}
            </div>
          ))}
        </div>

        {/* Why It Matters */}
        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
          <h3 className="font-heading text-lg font-bold text-foreground mb-3">Why Industry-Specific SEO Matters</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">Generic SEO strategies don't work anymore. Businesses that rank #1:</p>
          <ul className="space-y-2">
            {["Target industry-specific keywords", "Match customer intent precisely", "Build relevant content and authority"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Who Needs SEO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Who Needs an SEO Company in Sri Lanka?</h2>
        <p className="text-muted-foreground mb-6">Our SEO services in Sri Lanka are ideal for any business that wants to be found on Google:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Building2, label: "Hotels & tourism companies seeking direct bookings" },
            { icon: GraduationCap, label: "Education institutes generating student enrollments" },
            { icon: Home, label: "Real estate companies attracting property buyers" },
            { icon: ShoppingCart, label: "E-commerce businesses increasing online sales" },
            { icon: Rocket, label: "Startups & SMEs building brand visibility" },
            { icon: Briefcase, label: "Corporate organizations dominating their industry" },
            { icon: DollarSign, label: "Finance companies generating qualified leads" },
            { icon: Phone, label: "Service businesses increasing customer inquiries" },
          ].map((ind) => (
            <div key={ind.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border">
              <ind.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{ind.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* SEO Consultant vs SEO Company */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">SEO Consultant vs SEO Company in Sri Lanka — What's the Difference?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          When searching for SEO help, you'll encounter terms like SEO consultant Sri Lanka, SEO specialist Sri Lanka, and SEO company Sri Lanka. Here's what each means:
        </p>
        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-card shadow-card border border-border">
            <h3 className="font-heading font-bold text-foreground mb-2">SEO Consultant Sri Lanka</h3>
            <p className="text-sm text-muted-foreground">An SEO consultant in Sri Lanka provides strategic guidance, audits, and recommendations. They analyze your website, identify opportunities, and create an optimization roadmap. Buzz Connect's SEO consultants have 10+ years of experience in the Sri Lankan market.</p>
          </div>
          <div className="p-5 rounded-xl bg-card shadow-card border border-border">
            <h3 className="font-heading font-bold text-foreground mb-2">SEO Specialist Sri Lanka</h3>
            <p className="text-sm text-muted-foreground">An SEO specialist in Sri Lanka handles hands-on implementation — keyword optimization, content creation, technical fixes, and link building. Our SEO specialists execute every aspect of your SEO strategy.</p>
          </div>
          <div className="p-5 rounded-xl bg-card shadow-card border border-border">
            <h3 className="font-heading font-bold text-foreground mb-2">Full-Service SEO Company Sri Lanka</h3>
            <p className="text-sm text-muted-foreground">A full-service SEO company in Sri Lanka like Buzz Connect provides everything — consultation, strategy, implementation, monitoring, and reporting. You get an entire team of SEO experts working on your project.</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mt-4">
          At Buzz Connect, you get all three: SEO consultant, SEO specialist, and SEO expert — in one team. That's why we're considered the best SEO company in Sri Lanka.
        </p>
      </motion.div>

      {/* Unique Advantage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Our Unique SEO Advantage in Sri Lanka</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">Unlike other SEO companies in Sri Lanka, we combine immediate marketing impact with long-term SEO growth:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-accent" />
              <h3 className="font-heading font-bold text-foreground">Immediate Impact</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> Direct marketing campaigns via email & SMS
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> High-intent traffic from Findit.lk
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> Google Ads for instant visibility
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold text-foreground">Long-Term SEO Growth</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Google page 1 rankings
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Sustainable organic traffic
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /> Compounding lead generation
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* SEO Knowledge Hub */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">SEO Knowledge Hub</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Learn more about SEO and how it can grow your business:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "How SEO Works in Sri Lanka", href: "/how-seo-works-sri-lanka" },
            { label: "SEO Consultant Sri Lanka", href: "/seo-consultant-sri-lanka" },
            { label: "SEO Specialist Sri Lanka", href: "/seo-specialist-sri-lanka" },
            { label: "SEO Services Sri Lanka", href: "/seo-services-sri-lanka" },
            { label: "SEO vs Paid Ads", href: "/seo-vs-paid-ads-sri-lanka" },
            { label: "Why SEO is the Best Investment", href: "/seo-investment-long-term-strategy-sri-lanka" },
            { label: "SEO Cost in Sri Lanka", href: "/seo-cost-sri-lanka" },
            { label: "Rank #1 in Google Sri Lanka", href: "/rank-number-one-google-sri-lanka" },
            { label: "Why SEO Matters", href: "/seo-why-it-matters-sri-lanka" },
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

      {/* Multi-Channel Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Combine SEO with Multi-Channel Marketing</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          SEO works best when combined with other digital marketing channels:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Email Marketing", href: "/email-marketing" },
            { label: "SMS Marketing", href: "/sms-marketing" },
            { label: "Social Media Marketing", href: "/social-media-marketing-sri-lanka" },
            { label: "Lead Generation", href: "/lead-generation-sri-lanka" },
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
          "Proven Google page 1 rankings (live proof)",
          "SEO strategies tested on high-traffic sites",
          "Direct access to 350,000+ subscriber network",
          "Combined SEO + multi-channel marketing for maximum ROI",
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
          Work with a trusted SEO specialist in Sri Lanka and start building long-term visibility and consistent customer inquiries.
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
