import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, Zap, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, GraduationCap, ShoppingCart, Building2, Home, Calendar, Rocket,
  TrendingUp, ArrowRight, Users, Eye, PenTool, Image, Video, Share2,
  Megaphone, Settings, Layers, Send, Heart
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

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

const benefits = [
  "Increase brand awareness",
  "Reach targeted audiences",
  "Improve customer engagement",
  "Generate leads and sales",
  "Build long-term customer relationships",
  "Cost-effective advertising",
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

const whyChoose = [
  "Experienced social media experts",
  "Data-driven campaign strategies",
  "Cost-effective solutions",
  "Creative and engaging content",
  "Integration with multi-channel marketing",
  "Proven results across industries",
];

const results = [
  "Increased followers and engagement",
  "Higher brand visibility",
  "More website traffic",
  "Increased leads and sales",
  "Better return on investment",
];

const faqs = [
  { q: "What is social media marketing?", a: "Social media marketing is the process of promoting businesses through social media platforms like Facebook, Instagram, TikTok, and LinkedIn to reach, engage, and convert customers." },
  { q: "Which social media platforms are best in Sri Lanka?", a: "Facebook, Instagram, and TikTok are among the most popular and effective platforms for marketing in Sri Lanka." },
  { q: "How effective is social media marketing?", a: "Social media marketing is highly effective for building brand awareness, engaging audiences, and generating leads, especially when combined with a multi-channel strategy." },
  { q: "Why choose Buzz Connect for social media marketing?", a: "Buzz Connect provides integrated, results-driven social media marketing solutions with multi-channel support including email, SMS, WhatsApp, and Findit.lk advertising." },
  { q: "How much does social media marketing cost in Sri Lanka?", a: "Buzz Connect offers cost-effective social media marketing packages tailored to your budget. Contact us for a customized quote." },
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
      description: "Result-driven social media marketing services in Sri Lanka including Facebook, Instagram, TikTok, and LinkedIn advertising.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Social Media Marketing Sri Lanka"
      title="Social Media Marketing Sri Lanka – Grow Your Brand with Targeted Campaigns"
      subtitle="Increase brand awareness, engagement, and conversions through strategic social media campaigns with Buzz Connect."
    >
      <SEOHead
        title="Social Media Marketing Sri Lanka | Facebook & Instagram Ads"
        description="Best social media marketing in Sri Lanka. Facebook, Instagram, TikTok & LinkedIn ad campaigns. Content creation, audience targeting & performance tracking. Grow your brand today."
        canonical="/social-media-marketing-sri-lanka"
        keywords="social media marketing sri lanka, social media marketing services sri lanka, facebook advertising sri lanka, instagram marketing sri lanka, tiktok ads sri lanka, smm services colombo, social media agency sri lanka, facebook ads sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Social Media Marketing", url: "/social-media-marketing-sri-lanka" },
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
          Buzz Connect offers result-driven <strong>social media marketing services in Sri Lanka</strong>, helping businesses increase brand awareness, engagement, and conversions through strategic campaigns.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          With the growing use of platforms like Facebook, Instagram, and TikTok in Sri Lanka, businesses need a strong social media presence to stay competitive. Our expert team creates targeted campaigns that connect with your audience and deliver measurable results. Combine with our <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing</Link>, <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing</Link>, and <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead generation</Link> services for maximum impact.
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
        <p className="text-muted-foreground leading-relaxed">
          Social media marketing is the process of promoting your business through platforms like Facebook, Instagram, LinkedIn, and TikTok. It allows businesses in Sri Lanka to reach their target audience, build relationships, and drive sales through engaging content and advertisements. A well-planned <strong>social media marketing strategy</strong> helps you stay visible, relevant, and connected with your customers.
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

      {/* Multi-Channel Integration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl gradient-hero text-primary-foreground"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Integrated Marketing Approach</h2>
        <p className="text-primary-foreground/80 mb-6">
          Buzz Connect combines <strong>social media marketing</strong> with our full suite of digital marketing channels for maximum reach and conversions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Email marketing", path: "/email-marketing" },
            { label: "SMS marketing", path: "/sms-marketing" },
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
          This ensures your campaigns reach customers across multiple platforms, increasing effectiveness and <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline">lead generation</Link> results.
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          Benefits of Social Media Marketing in Sri Lanka
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-foreground font-medium">{b}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Use Cases */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          Who Can Benefit from Social Media Marketing?
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

      {/* Process */}
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
      </motion.div>

      {/* Why Choose + Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-card shadow-card border border-border"
        >
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">
            Why Choose Buzz Connect for Social Media Marketing?
          </h2>
          <ul className="space-y-3">
            {whyChoose.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-card shadow-card border border-border"
        >
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">
            Results You Can Expect
          </h2>
          <ul className="space-y-3">
            {results.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

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

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 rounded-2xl gradient-hero text-primary-foreground"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Start Your Social Media Marketing Campaign Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
          Grow your brand and reach thousands of customers across Sri Lanka. Contact Buzz Connect today and launch your campaign.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/#contactus">
            <button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">
              Get a Free Quote <ArrowRight className="inline w-4 h-4 ml-1" />
            </button>
          </Link>
          <a href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20social%20media%20marketing%20services." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">
              Chat on WhatsApp
            </button>
          </a>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/social-media-marketing-sri-lanka" />
    </ServicePageLayout>
  );
};

export default SocialMediaMarketing;
