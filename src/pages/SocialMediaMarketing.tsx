import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, Zap, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, GraduationCap, ShoppingCart, Building2, Home, Calendar, Rocket,
  TrendingUp, ArrowRight, Users, Eye, PenTool, Image, Video, Share2,
  Megaphone, Settings, Layers, Send, Heart, Star, Shield, Award
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";

const smmServices = [
  { icon: Target, title: "Social Media Strategy Development", desc: "Custom strategies aligned with your business goals and target audience in Sri Lanka." },
  { icon: PenTool, title: "Content Creation & Post Design", desc: "Eye-catching social media posts, banners, and promotional creatives." },
  { icon: Megaphone, title: "Facebook & Instagram Advertising", desc: "High-performing paid campaigns to reach targeted audiences and generate leads." },
  { icon: Users, title: "Audience Targeting & Segmentation", desc: "Precision targeting to connect with the right customers at the right time." },
  { icon: Settings, title: "Campaign Management & Optimization", desc: "Ongoing management and optimization to maximize campaign ROI." },
  { icon: BarChart3, title: "Performance Tracking & Reporting", desc: "Detailed analytics and reporting to measure campaign success." },
];

const adPlatforms = [
  { name: "Facebook Ads", desc: "Reach Sri Lanka's largest social audience", color: "bg-blue-500/10 text-blue-600" },
  { name: "Instagram Ads", desc: "Visual storytelling that converts", color: "bg-pink-500/10 text-pink-600" },
  { name: "TikTok Ads", desc: "Engage younger demographics", color: "bg-purple-500/10 text-purple-600" },
  { name: "LinkedIn Ads", desc: "Target B2B decision-makers", color: "bg-sky-500/10 text-sky-600" },
];

const contentTypes = [
  { icon: Image, title: "Eye-catching social media posts" },
  { icon: Megaphone, title: "Promotional banners and creatives" },
  { icon: Video, title: "Video and animated content" },
  { icon: PenTool, title: "Campaign-specific visuals" },
];

const comparisonData = [
  { feature: "Campaign Strategy", standard: "Generic Approach", bc: "✅ Custom Multi-Platform Strategy" },
  { feature: "Content Creation", standard: "Basic Posts", bc: "✅ Professional Creatives & Videos" },
  { feature: "Platform Coverage", standard: "Single Platform", bc: "✅ Facebook, Instagram, TikTok & More" },
  { feature: "Multi-Channel Support", standard: "Not Included", bc: "✅ Email, SMS & Findit.lk Integration" },
  { feature: "Audience Targeting", standard: "⚠️ Basic", bc: "✅ Advanced Segmentation" },
  { feature: "Campaign Visibility", standard: "One-Time Reach", bc: "✅ Extended Multi-Platform Visibility" },
  { feature: "Performance Tracking", standard: "Limited Reports", bc: "✅ Detailed Analytics & Optimization" },
];

const useCases = [
  { icon: GraduationCap, label: "Education institutes" },
  { icon: ShoppingCart, label: "E-commerce businesses" },
  { icon: Building2, label: "Hotels and travel companies" },
  { icon: Home, label: "Real estate companies" },
  { icon: Calendar, label: "Event promotions" },
  { icon: Rocket, label: "SMEs and startups" },
];

const processSteps = [
  { icon: Target, title: "Understand Goals", desc: "Analyze your business goals and target audience" },
  { icon: Layers, title: "Create Strategy", desc: "Develop a tailored social media strategy" },
  { icon: PenTool, title: "Design Content", desc: "Create engaging content and creatives" },
  { icon: Send, title: "Launch Campaigns", desc: "Execute campaigns across chosen platforms" },
  { icon: BarChart3, title: "Monitor & Optimize", desc: "Track performance and optimize for results" },
];

const faqs = [
  { q: "What is social media marketing?", a: "Social media marketing is the process of promoting businesses through social media platforms like Facebook, Instagram, TikTok, and LinkedIn to reach, engage, and convert customers." },
  { q: "Which social media platforms are best in Sri Lanka?", a: "Facebook, Instagram, and TikTok are among the most popular and effective platforms for marketing in Sri Lanka." },
  { q: "How much does social media marketing cost in Sri Lanka?", a: "Buzz Connect offers social media marketing campaigns starting from LKR 50,000. Packages are tailored to your business goals and campaign scale." },
  { q: "How effective is social media marketing?", a: "Social media marketing is highly effective for building brand awareness, engaging audiences, and generating leads, especially when combined with a multi-channel strategy." },
  { q: "Why choose Buzz Connect for social media marketing?", a: "Buzz Connect provides integrated, results-driven social media marketing solutions with multi-channel support including email, SMS, WhatsApp, and Findit.lk advertising." },
];

const SocialMediaMarketing = () => {
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
      name: "Social Media Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Result-driven social media marketing services in Sri Lanka including Facebook, Instagram, TikTok, and LinkedIn advertising. Campaigns starting from LKR 50,000.",
      offers: {
        "@type": "Offer",
        priceCurrency: "LKR",
        price: "50000",
        priceValidUntil: "2026-12-31",
      },
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Social Media Marketing Sri Lanka"
      title="Social Media Marketing That Builds Brands — and Drives Results"
      subtitle="Targeted campaigns across Facebook, Instagram & TikTok to grow your brand, engage customers, and generate real business results."
    >
      <SEOHead
        title="Social Media Marketing Sri Lanka | Facebook & Instagram Ads | Buzz Connect"
        description="Best social media marketing in Sri Lanka from LKR 50,000. Facebook, Instagram, TikTok & LinkedIn ad campaigns. Content creation, audience targeting & multi-channel integration."
        canonical="/social-media-marketing-sri-lanka"
        keywords="social media marketing sri lanka, social media marketing services sri lanka, facebook advertising sri lanka, instagram marketing sri lanka, tiktok ads sri lanka, smm services colombo, social media agency sri lanka, facebook ads sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Social Media Marketing", url: "/social-media-marketing-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Trust Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-accent font-bold text-sm">Campaigns from LKR 50,000</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Users className="w-4 h-4 text-secondary-foreground" />
            <span className="text-secondary-foreground font-bold text-sm">Multi-Platform Reach</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Globe className="w-4 h-4 text-secondary-foreground" />
            <span className="text-secondary-foreground font-bold text-sm">Findit.lk Integration</span>
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { value: "4", suffix: "+", label: "Platforms Covered" },
            { value: "500", suffix: "+", label: "Campaigns Delivered" },
            { value: "10", suffix: "+", label: "Years Experience" },
            { value: "200K", suffix: "+", label: "Audience via Findit.lk" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
              <p className="text-2xl font-bold text-accent">{stat.value}<span className="text-accent">{stat.suffix}</span></p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Buzz Connect offers result-driven <strong>social media marketing services in Sri Lanka</strong>, helping businesses increase brand awareness, engagement, and conversions through strategic multi-channel campaigns.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We don't just post on social media — we create integrated campaigns that combine social media with <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing</Link>, <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing</Link>, and <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead generation</Link> to maximize your results.
        </p>
      </motion.div>

      {/* What is Social Media Marketing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">What is Social Media Marketing?</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Social media marketing is the process of promoting your business through platforms like Facebook, Instagram, LinkedIn, and TikTok. It allows businesses in Sri Lanka to reach their target audience, build relationships, and drive sales through engaging content and advertisements.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          At Buzz Connect, we go beyond basic social media campaigns by combining <strong>social media advertising</strong> with multi-channel promotion — ensuring your business gets maximum visibility and engagement.
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
            Buzz Connect vs Standard Social Media Marketing
          </h2>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-4 font-heading font-bold text-foreground">Feature</th>
                  <th className="text-left p-4 font-heading font-bold text-muted-foreground">Standard Agencies</th>
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
          👉 Buzz Connect doesn't just manage social media — it multiplies your reach across platforms.
        </p>
      </motion.div>

      {/* Our Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Solutions</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Social Media Marketing Services in Sri Lanka
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Complete social media marketing solutions designed to grow your brand and drive results.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {smmServices.map((s, i) => (
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
      </motion.div>

      {/* Paid Social Media Advertising */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Paid Advertising</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Social Media Advertising in Sri Lanka
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">High-performing paid campaigns to reach a highly targeted audience and generate leads quickly.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {adPlatforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card shadow-card border border-border text-center"
            >
              <div className={`w-14 h-14 rounded-full ${p.color} flex items-center justify-center mx-auto mb-4`}>
                <Megaphone className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Content Creation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-card shadow-card border border-border"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">Creative Content That Engages</h2>
        <p className="text-muted-foreground mb-6">Our team creates compelling content optimized to capture attention and drive engagement across all social platforms.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contentTypes.map((ct) => (
            <div key={ct.title} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 border border-border">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center shrink-0">
                <ct.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{ct.title}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4 italic">
          Need professional designs? Check out our <Link to="/graphic-designing-in-sri-lanka" className="text-accent hover:underline font-semibold">graphic design services</Link>.
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
          How Our Social Media Marketing Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
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
          👉 Result: More visibility → More engagement → More business growth
        </p>
      </motion.div>

      {/* Multi-Channel Integration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl gradient-hero text-primary-foreground"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Integrated Multi-Channel Marketing Approach</h2>
        <p className="text-primary-foreground/80 mb-6">
          Social media is the trigger. Buzz Connect multiplies the impact by combining it with our full suite of digital marketing channels.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Email marketing campaigns", path: "/email-marketing" },
            { label: "SMS marketing campaigns", path: "/sms-marketing" },
            { label: "WhatsApp marketing", path: "/whatsapp-marketing" },
            { label: "Online advertising through Findit.lk", path: "/online-advertising-sri-lanka" },
          ].map((item) => (
            <Link key={item.path} to={item.path} className="flex items-center gap-3 group">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-primary-foreground/90 group-hover:text-accent transition-colors">{item.label}</span>
            </Link>
          ))}
        </div>
        <p className="text-primary-foreground/70 text-sm mt-4">
          👉 Multiple platforms = More visibility = More <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline">leads</Link> and conversions.
        </p>
      </motion.div>

      {/* Why This Works - Psychology */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Why Multi-Channel Social Media Marketing Works</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Today's customers interact with brands across multiple platforms before making a decision. Our approach ensures your business stays visible wherever your audience is.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Increase brand visibility across platforms",
            "Build trust through repeated exposure",
            "Reach audiences on platforms they actively use",
            "Improve chances of conversion",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-foreground text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mt-4 italic">
          👉 More visibility = More engagement = More business growth
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
        <p className="text-muted-foreground leading-relaxed mb-4">
          Buzz Connect campaigns are amplified through Findit.lk, giving your business access to a high-intent audience actively searching for services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Users, value: "200,000+", label: "Monthly Active Users" },
            { icon: Eye, value: "High-Intent", label: "Audience Searching Services" },
            { icon: TrendingUp, value: "Extended", label: "Visibility Beyond Social Media" },
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
            Social Media Marketing Campaign Pricing
          </h2>
        </div>
        <div className="p-8 rounded-2xl bg-card shadow-card border-2 border-accent/30 text-center">
          <p className="text-muted-foreground mb-3">Social Media Marketing Campaigns</p>
          <p className="text-3xl font-bold text-foreground mb-1">
            Starting from <span className="text-accent">LKR 50,000</span>
          </p>
          <p className="text-sm text-muted-foreground mb-6">Multi-platform campaigns tailored to your business</p>
          <div className="text-left space-y-2 mb-6 max-w-sm mx-auto">
            {[
              "Multi-platform campaign setup",
              "Professional content creation",
              "Audience targeting & segmentation",
              "Paid ad management & optimization",
              "Findit.lk integration & visibility",
              "Performance tracking & reporting",
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
            href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20social%20media%20marketing%20packages."
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
            "Increased followers and engagement",
            "Higher brand visibility across platforms",
            "More website traffic and inquiries",
            "Increased leads and sales",
            "Better return on investment",
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
          Frequently Asked Questions – Social Media Marketing Sri Lanka
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
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Ready to Grow Your Brand on Social Media?</h2>
        <p className="text-primary-foreground/80 mb-2 max-w-xl mx-auto">
          Launch a campaign that goes beyond posts — and delivers real visibility, engagement, and results.
        </p>
        <p className="text-primary-foreground/70 text-sm mb-6">
          👉 Campaigns starting from LKR 50,000 | Multi-platform strategy included
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20social%20media%20marketing%20services."
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

      <RelatedArticles currentPath="/social-media-marketing-sri-lanka" />
    </ServicePageLayout>
  );
};

export default SocialMediaMarketing;
