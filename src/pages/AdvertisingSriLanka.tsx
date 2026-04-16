import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import {
  CheckCircle, Mail, Smartphone, MessageSquare, Globe, Layout, Share2,
  HelpCircle, ArrowRight, Zap, Target, TrendingUp,
  GraduationCap, ShoppingCart, Shirt, Building2, Home, Heart, Briefcase,
  BarChart3, Users, Clock, Shield, Star,
} from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

/* ── Table of Contents ── */
const tocItems = [
  { id: "what-is", label: "What is Advertising in Sri Lanka?" },
  { id: "evolution", label: "The Evolution of Advertising" },
  { id: "types", label: "Types of Advertising" },
  { id: "why-important", label: "Why Advertising is Important" },
  { id: "challenges", label: "Challenges Without Advertising" },
  { id: "multi-channel", label: "Multi-Channel Advertising" },
  { id: "how-it-works", label: "How It Works" },
  { id: "results", label: "Real Campaign Results" },
  { id: "case-studies", label: "Case Studies" },
  { id: "industries", label: "Industries We Serve" },
  { id: "why-buzzconnect", label: "Why Choose BuzzConnect" },
  
  { id: "comparison", label: "Digital vs Traditional" },
  { id: "future", label: "Future of Advertising" },
  { id: "faq", label: "FAQs" },
];

/* ── Types of Advertising ── */
const adTypes = [
  {
    icon: Globe,
    title: "Digital Advertising",
    desc: "Digital advertising is the most powerful form of advertising in Sri Lanka today. It includes online platforms, mobile campaigns, and targeted promotions that allow businesses to reach specific audiences with measurable results.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Advertising",
    desc: "WhatsApp advertising in Sri Lanka enables direct communication with customers. With open rates exceeding 90%, it is one of the most effective tools for engagement, lead generation, and conversions.",
    link: "/whatsapp-marketing",
  },
  {
    icon: Mail,
    title: "Email Advertising",
    desc: "Email marketing allows businesses in Sri Lanka to send targeted messages to thousands of users. It is ideal for promotions, product launches, updates, and long-term customer relationship building.",
    link: "/email-marketing",
  },
  {
    icon: Smartphone,
    title: "SMS Advertising",
    desc: "SMS campaigns deliver instant messages directly to users' phones across Sri Lanka. With near 100% open rates and immediate delivery, SMS is perfect for urgent promotions, flash sales, and event announcements.",
    link: "/sms-marketing",
  },
  {
    icon: Layout,
    title: "Display & Banner Advertising",
    desc: "Display ads and banner placements on high-traffic websites like Findit.lk help increase brand visibility and awareness among Sri Lankan consumers browsing online.",
    link: "/web-banner-advertising-sri-lanka",
  },
  {
    icon: Share2,
    title: "Social Media Advertising",
    desc: "Platforms like Facebook and Instagram allow precise targeting based on user behavior, interests, and demographics — reaching millions of active Sri Lankan social media users.",
    link: "/social-media-marketing-sri-lanka",
  },
];

/* ── Evolution Factors ── */
const evolutionFactors = [
  { title: "Rise of Mobile Usage", desc: "Sri Lanka has over 15 million mobile internet users. With a high smartphone penetration rate, mobile-based advertising has become the most effective channel for reaching consumers across the island.", icon: Smartphone },
  { title: "Growth of Internet Access", desc: "Internet penetration in Sri Lanka has grown significantly, with affordable data plans making online platforms accessible to businesses and consumers in both urban and rural areas.", icon: Globe },
  { title: "Changing Consumer Behavior", desc: "Sri Lankan consumers now prefer quick, personalized, and relevant content delivered through messaging apps and social platforms rather than generic traditional advertisements.", icon: Users },
  { title: "Demand for Measurable Results", desc: "Businesses in Sri Lanka want clear data on reach, engagement, and conversions — something digital advertising provides easily through real-time analytics and campaign dashboards.", icon: BarChart3 },
];

/* ── Why Important ── */
const whyImportant = [
  "Increased brand awareness across Sri Lanka",
  "Faster customer reach through digital channels",
  "Higher sales and conversions within days",
  "Competitive advantage in your industry",
  "Improved customer engagement and loyalty",
  "Cost-effective compared to traditional methods",
];

/* ── Challenges Without Advertising ── */
const challenges = [
  "Low visibility in a competitive market",
  "Limited customer reach beyond word-of-mouth",
  "Slow business growth compared to competitors",
  "Poor brand recognition among target audiences",
  "Missed sales opportunities during peak seasons",
  "Inability to track marketing ROI",
];

/* ── Multi-Channel System ── */
const channelsList = [
  { label: "WhatsApp Campaigns", link: "/whatsapp-marketing", desc: "Direct messaging to 500K+ users" },
  { label: "Bulk Email Marketing", link: "/email-marketing", desc: "Targeted campaigns to 350K+ subscribers" },
  { label: "SMS Campaigns", link: "/sms-marketing", desc: "Instant delivery with 98% open rates" },
  { label: "Display Advertising", link: "/web-banner-advertising-sri-lanka", desc: "Banner placements on Findit.lk" },
  { label: "Findit.lk Promotions", link: "/online-advertising-sri-lanka", desc: "Featured listings for maximum visibility" },
];

const multiChannelBenefits = [
  "Reaches users across different platforms simultaneously",
  "Increases frequency of brand exposure by 3-5x",
  "Improves engagement rates through multi-touchpoint contact",
  "Boosts conversions by reinforcing your message across channels",
  "Provides comprehensive analytics across all campaigns",
  "Maximizes ROI through integrated strategy",
];

/* ── How It Works ── */
const processSteps = [
  { title: "Audience Targeting", desc: "We identify your ideal audience based on demographics, location, interests, and purchasing behavior across Sri Lanka.", icon: Target },
  { title: "Campaign Planning", desc: "We create a customized multi-channel strategy tailored to your business goals, budget, and timeline.", icon: BarChart3 },
  { title: "Creative Development", desc: "Our team designs compelling messages, visuals, and call-to-actions optimized for each advertising channel.", icon: Star },
  { title: "Campaign Execution", desc: "We launch your campaign across WhatsApp, SMS, email, and display platforms — often within 48 hours of approval.", icon: Zap },
  { title: "Performance Tracking", desc: "We monitor results in real-time, provide detailed reports, and optimize campaigns for maximum performance.", icon: TrendingUp },
];

/* ── Case Studies ── */
const caseStudies = [
  {
    title: "Education Sector — Course Provider",
    desc: "A leading course provider in Colombo used our multi-channel advertising to promote their new intake. Within 5 days, the campaign reached 120,000+ potential students via WhatsApp and email, generating over 800 inquiries and filling 95% of available seats.",
    icon: GraduationCap,
    stats: "800+ inquiries in 5 days",
  },
  {
    title: "Restaurant Business — Franchise Launch",
    desc: "A restaurant franchise launching a new outlet used SMS and WhatsApp promotions to drive foot traffic. The campaign delivered 50,000+ messages, resulting in a 40% increase in daily orders during the first week.",
    icon: ShoppingCart,
    stats: "40% increase in orders",
  },
  {
    title: "E-Commerce Brand — Seasonal Sale",
    desc: "An online retail store ran an email and display advertising campaign for their annual sale. The multi-channel approach generated 200,000+ impressions, drove 15,000 website visits, and increased sales by 65% compared to the previous year.",
    icon: Shirt,
    stats: "65% sales increase",
  },
  {
    title: "Real Estate — Property Launch",
    desc: "A real estate developer used targeted WhatsApp and email campaigns to promote a new housing project. The campaign reached 80,000+ potential buyers, generating 350+ qualified leads within 10 days.",
    icon: Building2,
    stats: "350+ leads in 10 days",
  },
];

/* ── Industries ── */
const industries = [
  { icon: GraduationCap, label: "Education & training institutes", link: "/education-marketing-sri-lanka" },
  { icon: ShoppingCart, label: "Restaurants & food businesses", link: "/restaurant-marketing-sri-lanka" },
  { icon: Shirt, label: "E-commerce & retail", link: "/fashion-marketing-sri-lanka" },
  { icon: Home, label: "Real estate & property", link: "/real-estate-marketing-sri-lanka" },
  { icon: Heart, label: "Healthcare & wellness", link: "/" },
  { icon: Briefcase, label: "Service-based businesses", link: "/" },
  { icon: Building2, label: "Hotels & hospitality", link: "/hotel-marketing-sri-lanka" },
  { icon: Star, label: "Events & entertainment", link: "/event-marketing-sri-lanka" },
];

/* ── Stats ── */
const stats = [
  { stat: "50M+", label: "Impressions Delivered" },
  { stat: "500+", label: "Campaigns Executed" },
  { stat: "2,000+", label: "Businesses Served" },
  { stat: "10+", label: "Years of Experience" },
];

/* ── Why Choose Us ── */
const whyUs = [
  { text: "Proven multi-channel advertising system", icon: Shield },
  { text: "50M+ impressions delivered across Sri Lanka", icon: TrendingUp },
  { text: "500+ successful campaigns executed", icon: BarChart3 },
  { text: "Fast campaign launch within 48–72 hours", icon: Clock },
  { text: "Affordable packages starting from LKR 5,000", icon: Star },
  { text: "Results-driven approach with real-time tracking", icon: Target },
  { text: "Dedicated account managers for every client", icon: Users },
  { text: "10+ years of advertising experience in Sri Lanka", icon: Shield },
];

/* ── Digital vs Traditional ── */
const comparisonRows = [
  { feature: "Audience Targeting", digital: "Precise — by demographics, interests, location", traditional: "Broad — limited targeting options" },
  { feature: "Speed of Launch", digital: "48–72 hours", traditional: "Weeks to months" },
  { feature: "Cost", digital: "Starting from LKR 5,000", traditional: "LKR 50,000+" },
  { feature: "Measurability", digital: "Real-time tracking & analytics", traditional: "Difficult to measure" },
  { feature: "Reach", digital: "500,000+ targeted users", traditional: "Varies widely" },
  { feature: "Engagement", digital: "High — direct interaction", traditional: "Low — one-way communication" },
  { feature: "Scalability", digital: "Instantly scalable", traditional: "Limited by budget & logistics" },
];


/* ── Future Trends ── */
const futureTrends = [
  { title: "Increased Digital Adoption", desc: "More Sri Lankan businesses are shifting budgets from traditional to digital advertising, creating new opportunities for growth." },
  { title: "AI-Driven Targeting", desc: "Artificial intelligence will enable even more precise audience targeting, improving campaign performance and reducing wasted spend." },
  { title: "Personalized Marketing", desc: "Consumers expect personalized messages tailored to their interests, making data-driven personalization essential for advertising success." },
  { title: "Video & Interactive Content", desc: "Video ads and interactive content formats are gaining traction in Sri Lanka, offering higher engagement rates than static advertisements." },
];

/* ── FAQs ── */
const faqs = [
  {
    q: "What is the best advertising method in Sri Lanka?",
    a: "The best advertising method in Sri Lanka is multi-channel digital advertising, which combines WhatsApp, SMS, email, and display ads. This approach provides the widest reach, highest engagement rates, and most measurable results. At BuzzConnect, our multi-channel campaigns reach over 500,000+ users and deliver results within 24–72 hours.",
  },
  {
    q: "How much does advertising cost in Sri Lanka?",
    a: "Advertising costs in Sri Lanka vary based on the channels used and campaign scope. At BuzzConnect, starter campaigns begin from LKR 5,000 for single-channel advertising. Multi-channel campaigns start from LKR 15,000, and high-reach campaigns covering all channels start from LKR 35,000. All packages include targeting, creative development, and performance reporting.",
  },
  {
    q: "How fast can I see results from advertising?",
    a: "Most advertising campaigns launched through BuzzConnect deliver initial results within 24–72 hours. WhatsApp and SMS campaigns generate immediate engagement due to high open rates (90%+ and 98% respectively). Email campaigns typically show results within 48 hours. Multi-channel campaigns build momentum quickly as messages reach users across multiple platforms simultaneously.",
  },
  {
    q: "Can I target specific audiences in Sri Lanka?",
    a: "Yes, our advertising campaigns can be precisely targeted based on demographics, geographic location, industry, interests, and purchasing behavior. Whether you want to reach students in Colombo, business owners in Kandy, or homebuyers across Sri Lanka, we can segment and target your ideal audience for maximum campaign effectiveness.",
  },
  {
    q: "What industries benefit most from advertising in Sri Lanka?",
    a: "All industries benefit from advertising, but the sectors seeing the strongest results in Sri Lanka include education and training, restaurants and food businesses, e-commerce and retail, real estate, healthcare, hotels, and event management. Each industry has unique advertising needs, and BuzzConnect customizes campaigns to suit specific industry requirements.",
  },
  {
    q: "Why is digital advertising better than traditional advertising?",
    a: "Digital advertising offers several advantages over traditional advertising in Sri Lanka: precise audience targeting, real-time performance tracking, lower costs (starting from LKR 5,000 vs LKR 50,000+ for traditional), faster launch times (48 hours vs weeks), and higher engagement rates. Digital campaigns are also easily scalable and adjustable based on performance data.",
  },
  {
    q: "How do I get started with advertising in Sri Lanka?",
    a: "Getting started is simple. Contact BuzzConnect for a free consultation — we'll discuss your business goals, target audience, and budget. Our team will create a customized advertising strategy and can launch your campaign within 48–72 hours. You can reach us through our contact form or WhatsApp for an immediate response.",
  },
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
      description: "Leading advertising company in Sri Lanka offering multi-channel campaigns via WhatsApp, SMS, email, and display advertising. Reach 500,000+ customers within 48 hours.",
      serviceType: "Digital Advertising",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "5000",
        highPrice: "50000",
        priceCurrency: "LKR",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Advertising in Sri Lanka | Best Advertising Company",
      description: "Comprehensive guide to advertising in Sri Lanka. Learn about digital advertising methods, multi-channel campaigns, and how to reach 500,000+ customers fast.",
      url: "https://buzzconnect.lk/advertising-sri-lanka",
      isPartOf: { "@type": "WebSite", name: "BuzzConnect", url: "https://buzzconnect.lk" },
    },
  ], []);

  return (
    <ServicePageLayout
      badge="#1 Advertising Company in Sri Lanka"
      title="Advertising in Sri Lanka"
      subtitle="Reach 500,000+ customers fast with WhatsApp, SMS & email campaigns. Launch within 48 hours. Trusted by 2,000+ businesses across Sri Lanka."
    >
      <SEOHead
        title="Advertising in Sri Lanka | Best Advertising Company for Fast Results"
        description="Advertising in Sri Lanka made easy. Reach 500,000+ customers fast with WhatsApp, SMS & email campaigns. Launch within 48 hours."
        canonical="/advertising-sri-lanka"
        keywords="advertising sri lanka, advertising in sri lanka, best advertising company sri lanka, digital advertising sri lanka, online advertising sri lanka, advertising agency sri lanka, marketing company sri lanka, whatsapp advertising sri lanka, sms advertising sri lanka, email advertising sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Advertising Sri Lanka", url: "/advertising-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">

        {/* ── Table of Contents ── */}
        <motion.nav initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card" aria-label="Table of Contents">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4">📑 Table of Contents</h2>
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

        {/* ── Introduction ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            <strong>Advertising in Sri Lanka</strong> has undergone a major transformation over the past decade. Traditional methods such as newspaper ads, billboards, and television commercials have gradually been supplemented — and in many cases replaced — by powerful digital and mobile-driven marketing strategies.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Today, businesses in Sri Lanka are operating in a fast-paced, highly competitive environment where reaching the right audience at the right time is critical. Consumers are more connected than ever before, using smartphones, social media platforms, messaging apps, and email daily. This shift has created unprecedented opportunities for businesses to connect with customers more directly, more efficiently, and at a much larger scale than traditional advertising ever allowed.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Modern <strong>advertising in Sri Lanka</strong> is no longer just about visibility — it is about targeted reach, measurable performance, and fast results. Companies now demand advertising solutions that can generate qualified leads, increase brand awareness, and drive sales within days, not months. The businesses that understand this shift and invest in modern advertising strategies are the ones dominating their industries.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At <strong>BuzzConnect</strong>, we are Sri Lanka's leading advertising company, specializing in delivering high-performance multi-channel campaigns designed specifically for the Sri Lankan market. By combining WhatsApp, SMS, email, and online display platforms, we help businesses reach over <strong>500,000+ potential customers</strong> quickly and effectively — with campaigns launching in as little as 48 hours.
          </p>
        </motion.div>

        {/* ── What is Advertising in Sri Lanka ── */}
        <motion.div id="what-is" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">What is Advertising in Sri Lanka?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Advertising in Sri Lanka</strong> refers to the strategic promotion of products, services, or brands through various communication channels to reach a targeted audience. It encompasses both traditional and modern approaches, but the focus has increasingly shifted toward digital and mobile-first strategies that deliver faster, more measurable results.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">In the past, businesses in Sri Lanka relied heavily on traditional advertising methods:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {["Newspaper advertisements", "Television commercials", "Radio promotions", "Outdoor billboards"].map(item => (
              <div key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">While these methods still exist in Sri Lanka, they often lack precise targeting, real-time tracking, and measurable ROI. Today, successful <strong>advertising in Sri Lanka</strong> has evolved into a data-driven process that leverages digital platforms for maximum impact:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Digital advertising campaigns", "Mobile marketing (SMS & WhatsApp)", "Direct marketing via email", "Display and banner advertising", "Social media promotions", "Search engine marketing"].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4">
            This evolution allows businesses across Sri Lanka to reach highly specific audiences, track performance in real time, and continuously optimize campaigns for better results — making modern advertising significantly more effective and cost-efficient than traditional methods.
          </p>
        </motion.div>

        {/* ── Evolution of Advertising ── */}
        <motion.div id="evolution" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">The Evolution of Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground mb-6">The advertising landscape in Sri Lanka has shifted dramatically due to several key factors that are reshaping how businesses connect with their customers:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evolutionFactors.map((factor, i) => (
              <div key={factor.title} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <factor.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground">{i + 1}. {factor.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-6">
            These factors have fundamentally changed how <strong>advertising in Sri Lanka</strong> works. Businesses that embrace digital and mobile-first advertising strategies are seeing significantly better results compared to those still relying solely on traditional methods.
          </p>
        </motion.div>

        {/* ── Types of Advertising ── */}
        <motion.div id="types" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Types of Advertising in Sri Lanka</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Understanding the different types of advertising available in Sri Lanka helps businesses choose the right strategy for their goals and budget.</p>
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
        <motion.div id="why-important" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Why Advertising is Important for Businesses in Sri Lanka</h2>
          <p className="text-muted-foreground mb-4">
            <strong>Advertising in Sri Lanka</strong> plays a crucial role in business growth and success. In today's competitive market, even the best products or services may struggle to gain visibility without effective advertising. Sri Lanka's growing digital economy means businesses that invest in modern advertising strategies gain a significant advantage over competitors who rely solely on word-of-mouth or traditional marketing.
          </p>
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 mb-8">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">Key Benefits of Advertising in Sri Lanka:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whyImportant.map(item => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-muted-foreground">
            Businesses across Sri Lanka that invest in strategic advertising are able to scale faster, build stronger brand recognition, and generate consistent leads and sales. Whether you operate in Colombo, Kandy, Galle, or any other part of Sri Lanka, effective advertising is the key to sustainable growth.
          </p>
        </motion.div>

        {/* ── Challenges Without Advertising ── */}
        <motion.div id="challenges" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 scroll-mt-24 p-8 sm:p-10 rounded-2xl bg-card border border-border shadow-card">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Challenges Businesses Face Without Advertising</h2>
          <p className="text-muted-foreground mb-6">Many businesses in Sri Lanka face significant challenges due to lack of proper advertising strategies:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {challenges.map(item => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground font-medium">
            Professional <strong>advertising in Sri Lanka</strong> solves these problems by connecting businesses with their target audience efficiently, affordably, and with measurable results.
          </p>
        </motion.div>

        {/* ── Multi-Channel Advertising System ── */}
        <motion.div id="multi-channel" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Multi-Channel Advertising Approach</h2>
          <p className="text-muted-foreground mb-6">
            At BuzzConnect, we use a proven multi-channel advertising system designed to maximize reach and impact for businesses across Sri Lanka. Instead of relying on a single channel, we combine multiple strategies to deliver significantly better results.
          </p>

          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Channels We Use for Advertising in Sri Lanka:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {channelsList.map(ch => (
              <Link key={ch.label} to={ch.link} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all group">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="text-foreground text-sm font-medium block">{ch.label}</span>
                  <span className="text-xs text-muted-foreground">{ch.desc}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-accent ml-auto opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
              </Link>
            ))}
          </div>

          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Why Multi-Channel Advertising Works:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {multiChannelBenefits.map(item => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-4">
            Want to learn more about multi-channel strategies? Explore our{" "}
            <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing campaigns</Link> for comprehensive solutions.
          </p>
        </motion.div>

        {/* ── How Our Advertising System Works ── */}
        <motion.div id="how-it-works" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">How Our Advertising System Works</h2>
          <p className="text-muted-foreground mb-6">Our advertising process is structured to deliver maximum results for businesses in Sri Lanka:</p>
          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">Step {i + 1}: {step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Real Campaign Results ── */}
        <motion.div id="results" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 scroll-mt-24 p-8 sm:p-10 rounded-2xl bg-primary/5 border border-primary/20">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">Real Campaign Results</h2>
          <p className="text-muted-foreground mb-6">Our advertising campaigns consistently deliver measurable outcomes for businesses across Sri Lanka:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Reach over 500,000+ users per campaign",
              "Generate millions of impressions monthly",
              "Increase qualified inquiries and leads by 40-65%",
              "Deliver measurable results within 24–72 hours",
              "Achieve 90%+ open rates on WhatsApp campaigns",
              "98% delivery rate on SMS campaigns",
            ].map(item => (
              <div key={item} className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-6">We focus on delivering real business outcomes — not just visibility. Every advertising campaign is optimized for leads, conversions, and ROI.</p>
        </motion.div>

        {/* ── Case Studies ── */}
        <motion.div id="case-studies" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 scroll-mt-24">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Advertising Case Studies from Sri Lanka</h2>
            <p className="text-muted-foreground">Real results from real businesses using BuzzConnect advertising</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div key={cs.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <cs.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{cs.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{cs.desc}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5" /> {cs.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Industries We Serve ── */}
        <motion.div id="industries" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Industries We Serve with Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground mb-6">Our advertising solutions are effective across multiple industries in Sri Lanka. Each campaign is customized to suit the specific needs, audience, and goals of the industry:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map(ind => (
              <Link key={ind.label} to={ind.link} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all group">
                <ind.icon className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-foreground text-sm font-medium">{ind.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── Why Choose BuzzConnect ── */}
        <motion.div id="why-buzzconnect" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 scroll-mt-24">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Why Choose BuzzConnect as Your Advertising Company in Sri Lanka</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">With 10+ years of experience and 2,000+ satisfied clients, BuzzConnect is the trusted advertising partner for businesses across Sri Lanka.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl bg-card border border-border shadow-card text-center">
                <div className="font-heading text-3xl font-bold text-accent mb-1">{item.stat}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map(item => (
                <div key={item.text} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Digital vs Traditional Comparison ── */}
        <motion.div id="comparison" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Digital vs Traditional Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground mb-6">Understanding the differences between digital and traditional advertising helps Sri Lankan businesses make smarter marketing decisions:</p>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-4 font-heading font-bold text-foreground">Feature</th>
                  <th className="text-left p-4 font-heading font-bold text-accent">Digital Advertising</th>
                  <th className="text-left p-4 font-heading font-bold text-muted-foreground">Traditional Advertising</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-4 font-medium text-foreground">{row.feature}</td>
                    <td className="p-4 text-foreground">{row.digital}</td>
                    <td className="p-4 text-muted-foreground">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground mt-4">
            As the comparison shows, digital advertising offers clear advantages for businesses in Sri Lanka looking for fast, affordable, and measurable results.
          </p>
        </motion.div>

        {/* ── Future of Advertising ── */}
        <motion.div id="future" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 scroll-mt-24">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">The Future of Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground mb-6">The advertising industry in Sri Lanka will continue to evolve rapidly. Businesses that adapt to these emerging trends will stay ahead of the competition:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureTrends.map(item => (
              <div key={item.title} className="p-5 rounded-xl bg-card border border-border shadow-card">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0" />
                  <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-6">
            At BuzzConnect, we continuously evolve our advertising strategies to leverage these trends, ensuring our clients always have access to the most effective advertising solutions in Sri Lanka.
          </p>
        </motion.div>

        {/* ── Internal Link to Support Pages ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 p-6 rounded-2xl bg-card border border-border shadow-card">
          <h2 className="font-heading text-xl font-bold text-foreground mb-3">Explore More Advertising Solutions</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>
              🌐 <Link to="/online-advertising-sri-lanka" className="text-accent hover:underline font-semibold">Online Advertising in Sri Lanka</Link> — Digital-specific strategies for maximum online visibility
            </p>
            <p>
              🚀 <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">Multi-Channel Marketing Campaigns</Link> — Combine all channels for maximum reach
            </p>
            <p>
              📊 <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">Lead Generation Services</Link> — Convert advertising reach into qualified business leads
            </p>
            <p>
              🏆 <Link to="/best-advertising-company-sri-lanka" className="text-accent hover:underline font-semibold">Best Advertising Company in Sri Lanka</Link> — Why businesses trust BuzzConnect
            </p>
          </div>
        </motion.div>

        {/* ── FAQ ── */}
        <motion.div id="faq" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-7 h-7 text-primary" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions About Advertising in Sri Lanka</h2>
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Advertising in Sri Lanka</strong> is no longer optional — it is essential for business success in today's competitive market. With the right strategy, the right channels, and the right advertising partner, businesses can reach thousands of customers, increase visibility, and drive sustainable growth in a short period.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            BuzzConnect has helped over 2,000 businesses across Sri Lanka achieve their advertising goals through proven multi-channel campaigns. Whether you are a small startup or a large enterprise, our advertising solutions are designed to deliver maximum reach, engagement, and ROI.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Don't let your competitors dominate the market while you wait. Start your <strong>advertising campaign in Sri Lanka</strong> today and see measurable results within days, not months.
          </p>
        </motion.div>

        {/* ── Related Articles ── */}
        <RelatedArticles currentPath="/advertising-sri-lanka" max={4} />
      </article>

      {/* ── Final CTA ── */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-hero mt-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
          Start Your Advertising Campaign in Sri Lanka Today
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Reach 500,000+ customers, grow your business, and achieve real results with BuzzConnect — Sri Lanka's #1 advertising company.
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
