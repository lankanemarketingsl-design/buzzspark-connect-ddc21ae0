import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import {
  CheckCircle, Mail, Smartphone, MessageSquare, Globe, Layout, Share2,
  HelpCircle, ArrowRight, Zap, Target, TrendingUp,
  GraduationCap, ShoppingCart, Shirt, Building2, Home, Heart, Briefcase,
} from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

/* ── Types of Advertising ── */
const adTypes = [
  {
    icon: Globe,
    title: "Digital Advertising",
    desc: "Digital advertising is the most powerful form of advertising today. It includes online platforms, mobile campaigns, and targeted promotions that allow businesses to reach specific audiences.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Advertising",
    desc: "WhatsApp advertising enables direct communication with customers. With extremely high open rates, it is one of the most effective tools for engagement and conversions.",
    link: "/whatsapp-marketing",
  },
  {
    icon: Mail,
    title: "Email Advertising",
    desc: "Email marketing allows businesses to send targeted messages to thousands of users. It is ideal for promotions, updates, and long-term customer engagement.",
    link: "/email-marketing",
  },
  {
    icon: Smartphone,
    title: "SMS Advertising",
    desc: "SMS campaigns deliver instant messages directly to users' phones. With near 100% open rates, SMS is perfect for urgent promotions and announcements.",
    link: "/sms-marketing",
  },
  {
    icon: Layout,
    title: "Display & Banner Advertising",
    desc: "Display ads help increase brand visibility through banners placed on websites and platforms.",
    link: "/web-banner-advertising-sri-lanka",
  },
  {
    icon: Share2,
    title: "Social Media Advertising",
    desc: "Platforms like Facebook and Instagram allow precise targeting based on user behavior, interests, and demographics.",
    link: "/social-media-marketing-sri-lanka",
  },
];

/* ── Evolution Factors ── */
const evolutionFactors = [
  { title: "Rise of Mobile Usage", desc: "Sri Lanka has a high mobile penetration rate, with a large percentage of the population using smartphones daily. This makes mobile-based advertising one of the most effective channels." },
  { title: "Growth of Internet Access", desc: "Increased internet availability has enabled businesses to connect with customers through online platforms and digital campaigns." },
  { title: "Changing Consumer Behavior", desc: "Consumers now prefer quick, personalized, and relevant content rather than generic advertisements." },
  { title: "Demand for Measurable Results", desc: "Businesses want clear data on reach, engagement, and conversions — something digital advertising provides easily." },
];

/* ── Why Important ── */
const whyImportant = [
  "Increased brand awareness",
  "Faster customer reach",
  "Higher sales and conversions",
  "Competitive advantage",
  "Improved customer engagement",
];

/* ── Challenges Without Advertising ── */
const challenges = [
  "Low visibility",
  "Limited customer reach",
  "Slow business growth",
  "Poor brand recognition",
  "Missed sales opportunities",
];

/* ── Multi-Channel System ── */
const channelsList = [
  { label: "WhatsApp Campaigns", link: "/whatsapp-marketing" },
  { label: "Bulk Email Marketing", link: "/email-marketing" },
  { label: "SMS Campaigns", link: "/sms-marketing" },
  { label: "Display Advertising", link: "/web-banner-advertising-sri-lanka" },
  { label: "Findit.lk Promotions", link: "/online-advertising-sri-lanka" },
];

const multiChannelBenefits = [
  "Reaches users across different platforms",
  "Increases frequency of exposure",
  "Improves engagement rates",
  "Boosts conversions",
];

/* ── How It Works ── */
const processSteps = [
  { title: "Audience Targeting", desc: "We identify your ideal audience based on demographics, interests, and behavior." },
  { title: "Campaign Planning", desc: "We create a customized strategy tailored to your business goals." },
  { title: "Creative Development", desc: "We design compelling messages and visuals." },
  { title: "Campaign Execution", desc: "We launch your campaign across multiple platforms." },
  { title: "Performance Tracking", desc: "We monitor results and optimize campaigns." },
];

/* ── Case Studies ── */
const caseStudies = [
  { title: "Education Sector", desc: "A course provider achieved massive reach within a few days, resulting in a high number of student inquiries.", icon: GraduationCap },
  { title: "Restaurant Business", desc: "A restaurant increased daily orders through SMS and WhatsApp promotions.", icon: ShoppingCart },
  { title: "E-Commerce Brand", desc: "An online store boosted sales using email campaigns and remarketing strategies.", icon: Shirt },
];

/* ── Industries ── */
const industries = [
  { icon: GraduationCap, label: "Education & training institutes", link: "/education-marketing-sri-lanka" },
  { icon: ShoppingCart, label: "Restaurants & food businesses", link: "/restaurant-marketing-sri-lanka" },
  { icon: Shirt, label: "E-commerce & retail", link: "/fashion-marketing-sri-lanka" },
  { icon: Home, label: "Real estate", link: "/real-estate-marketing-sri-lanka" },
  { icon: Heart, label: "Healthcare services", link: "/" },
  { icon: Briefcase, label: "Service-based businesses", link: "/" },
];

/* ── Stats ── */
const stats = [
  { stat: "50M+", label: "Impressions Delivered" },
  { stat: "500+", label: "Campaigns Executed" },
  { stat: "100+", label: "Businesses Served" },
  { stat: "10+", label: "Years of Experience" },
];

/* ── Why Choose Us ── */
const whyUs = [
  "Proven multi-channel advertising system",
  "50M+ impressions delivered",
  "500+ campaigns executed",
  "Fast campaign launch (48–72 hours)",
  "Affordable and scalable packages",
  "Results-driven approach",
];

/* ── Packages ── */
const packages = [
  "Starter packages",
  "Multi-channel campaigns",
  "High-reach campaigns",
];

/* ── Future Trends ── */
const futureTrends = [
  "Increased digital adoption",
  "AI-driven targeting",
  "Personalized marketing",
  "Data-driven strategies",
];

/* ── FAQs ── */
const faqs = [
  { q: "What is the best advertising method in Sri Lanka?", a: "Digital and multi-channel advertising provides the best results." },
  { q: "How much does advertising cost?", a: "Costs depend on campaign size and channels." },
  { q: "How fast can I see results?", a: "Most campaigns deliver results within 24–72 hours." },
  { q: "Can I target specific audiences?", a: "Yes, campaigns can be customized based on audience segments." },
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
      provider: {
        "@type": "Organization",
        name: "BuzzConnect",
        url: "https://buzzconnect.lk",
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Advertising in Sri Lanka made easy. Reach 500,000+ customers fast with WhatsApp, SMS & email campaigns. Launch within 48 hours.",
      serviceType: "Digital Advertising",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "5000",
        highPrice: "50000",
        priceCurrency: "LKR",
      },
    },
  ], []);

  return (
    <ServicePageLayout
      badge="#1 Advertising Company in Sri Lanka"
      title="Advertising in Sri Lanka"
      subtitle="Reach 500,000+ customers fast with WhatsApp, SMS & email campaigns. Launch within 48 hours."
    >
      <SEOHead
        title="Advertising in Sri Lanka | Best Advertising Company for Fast Results"
        description="Advertising in Sri Lanka made easy. Reach 500,000+ customers fast with WhatsApp, SMS & email campaigns. Launch within 48 hours."
        canonical="/advertising-sri-lanka"
        keywords="advertising sri lanka, advertising in sri lanka, best advertising company sri lanka, digital advertising sri lanka, online advertising sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Advertising Sri Lanka", url: "/advertising-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* ── Introduction ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          <strong>Advertising in Sri Lanka</strong> has undergone a major transformation over the past decade. Traditional methods such as newspaper ads, billboards, and television commercials have gradually been supplemented — and in many cases replaced — by powerful digital and mobile-driven marketing strategies.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Today, businesses in Sri Lanka are operating in a fast-paced, highly competitive environment where reaching the right audience at the right time is critical. Consumers are more connected than ever before, using smartphones, social media platforms, messaging apps, and email daily. This shift has created new opportunities for businesses to connect with customers more directly, more efficiently, and at a much larger scale.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Modern <strong>advertising in Sri Lanka</strong> is no longer just about visibility — it is about targeted reach, measurable performance, and fast results. Companies now demand advertising solutions that can generate leads, increase brand awareness, and drive sales within days, not months.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          At BuzzConnect, we specialize in delivering high-performance advertising campaigns designed specifically for the Sri Lankan market. By combining multiple channels such as WhatsApp, SMS, email, and online platforms, we help businesses reach over <strong>500,000+ potential customers</strong> quickly and effectively.
        </p>
      </motion.div>

      {/* ── What is Advertising in Sri Lanka ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">What is Advertising in Sri Lanka?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Advertising in Sri Lanka refers to the strategic promotion of products, services, or brands through various communication channels to reach a targeted audience. It includes both traditional and modern approaches, but the focus has increasingly shifted toward digital and mobile-first strategies.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">In the past, businesses relied heavily on:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {["Newspaper advertisements", "Television commercials", "Radio promotions", "Outdoor billboards"].map(item => (
            <div key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">While these methods still exist, they often lack precise targeting and measurable results. Today, advertising has evolved into a data-driven process that includes:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {["Digital advertising", "Mobile marketing", "Direct marketing (SMS, WhatsApp, email)", "Display and banner advertising", "Social media promotions"].map(item => (
            <div key={item} className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Evolution of Advertising ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">The Evolution of Advertising in Sri Lanka</h2>
        <p className="text-muted-foreground mb-6">The advertising landscape in Sri Lanka has shifted dramatically due to several key factors:</p>
        <div className="space-y-4">
          {evolutionFactors.map((factor, i) => (
            <div key={factor.title} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent font-bold text-sm">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{factor.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{factor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Types of Advertising ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Types of Advertising in Sri Lanka</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adTypes.map((ad, i) => {
            const content = (
              <>
                <ad.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{ad.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ad.desc}</p>
                {ad.link && (
                  <span className="inline-flex items-center gap-1 mt-4 text-sm text-accent font-semibold">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </>
            );
            return (
              <motion.div key={ad.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                {ad.link ? (
                  <Link to={ad.link} className="block h-full p-6 rounded-2xl bg-card border border-border shadow-card hover:border-accent/40 hover:shadow-lg transition-all group">
                    {content}
                  </Link>
                ) : (
                  <div className="block h-full p-6 rounded-2xl bg-card border border-border shadow-card group">{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ── Why Advertising is Important ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Why Advertising is Important in Sri Lanka</h2>
        <p className="text-muted-foreground mb-6">Advertising plays a crucial role in business growth. Without effective advertising, even the best products or services may struggle to gain visibility.</p>
        <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Key Benefits:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {whyImportant.map(item => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-muted-foreground">Businesses that invest in advertising are able to scale faster and build stronger brand recognition.</p>
      </motion.div>

      {/* ── Challenges Without Advertising ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-card border border-border shadow-card">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Challenges Businesses Face Without Advertising</h2>
        <p className="text-muted-foreground mb-6">Many businesses in Sri Lanka face challenges due to lack of proper advertising:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {challenges.map(item => (
            <div key={item} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground font-medium">Advertising solves these problems by connecting businesses with their target audience efficiently.</p>
      </motion.div>

      {/* ── Multi-Channel Advertising System ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Multi-Channel Advertising Approach</h2>
        <p className="text-muted-foreground mb-6">At BuzzConnect, we use a multi-channel advertising system designed to maximize reach and impact.</p>

        <h3 className="font-heading text-lg font-bold text-foreground mb-4">Channels We Use:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {channelsList.map(ch => (
            <Link key={ch.label} to={ch.link} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all group">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{ch.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        <h3 className="font-heading text-lg font-bold text-foreground mb-4">Why Multi-Channel Works:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {multiChannelBenefits.map(item => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground">Instead of relying on a single channel, we combine multiple strategies to deliver better results.</p>
      </motion.div>

      {/* ── How Our Advertising System Works ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">How Our Advertising System Works</h2>
        <div className="space-y-4">
          {processSteps.map((step, i) => (
            <div key={step.title} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent font-bold text-sm">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Real Campaign Results ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">Real Campaign Results</h2>
        <p className="text-muted-foreground mb-6">Our campaigns are designed to deliver measurable outcomes:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {["Reach 500,000+ users per campaign", "Generate millions of impressions", "Increase inquiries and leads", "Deliver results within 24–72 hours"].map(item => (
            <div key={item} className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Case Studies ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Case Studies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div key={cs.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl bg-card border border-border shadow-card">
              <cs.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{cs.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cs.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Industries We Serve ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Industries We Serve</h2>
        <p className="text-muted-foreground mb-6">Our advertising solutions are effective across multiple industries:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {industries.map(ind => (
            <Link key={ind.label} to={ind.link} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all group">
              <ind.icon className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-foreground text-sm font-medium">{ind.label}</span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ── Why Choose BuzzConnect ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Why Choose BuzzConnect as Your Advertising Company in Sri Lanka</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl bg-card border border-border shadow-card text-center">
              <div className="font-heading text-3xl font-bold text-accent mb-1">{item.stat}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-primary/5 border border-primary/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {whyUs.map(item => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Advertising Packages ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Advertising Packages</h2>
        <p className="text-muted-foreground mb-6">We offer flexible advertising solutions:</p>
        <div className="space-y-3 mb-6">
          {packages.map(pkg => (
            <div key={pkg} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground font-medium">{pkg}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground">Each package is designed to meet specific business needs. <Link to="/contact-us" className="text-accent hover:underline font-semibold">Contact us</Link> for a customized plan.</p>
      </motion.div>

      {/* ── Future of Advertising ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">The Future of Advertising in Sri Lanka</h2>
        <p className="text-muted-foreground mb-6">Advertising will continue to evolve with:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {futureTrends.map(item => (
            <div key={item} className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground">Businesses that adapt to these changes will stay ahead of the competition.</p>
      </motion.div>

      {/* ── Internal Link to Support Page ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-6 rounded-2xl bg-card border border-border shadow-card">
        <h2 className="font-heading text-xl font-bold text-foreground mb-2">Online Advertising Solutions</h2>
        <p className="text-muted-foreground">
          Looking for digital-specific strategies? Explore our{" "}
          <Link to="/online-advertising-sri-lanka" className="text-accent hover:underline font-semibold">Online Advertising in Sri Lanka</Link>{" "}
          services for targeted digital campaigns across WhatsApp, SMS, email, and display platforms.
        </p>
      </motion.div>

      {/* ── FAQ ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
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

      {/* ── Conclusion ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Conclusion</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong>Advertising in Sri Lanka</strong> is no longer optional — it is essential for business success. With the right strategy, businesses can reach thousands of customers, increase visibility, and drive growth in a short period.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          BuzzConnect provides powerful advertising solutions designed to deliver real results. Whether you are a small business or a large company, our multi-channel approach ensures maximum reach and impact.
        </p>
      </motion.div>

      {/* ── Related Articles ── */}
      <RelatedArticles currentPath="/advertising-sri-lanka" max={4} />

      {/* ── Final CTA ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-hero">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
          Start Your Advertising Campaign in Sri Lanka Today
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Reach more customers, grow your business, and achieve real results with BuzzConnect.
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
