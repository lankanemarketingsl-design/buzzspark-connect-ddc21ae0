import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Target, Users, BarChart3, Megaphone, ArrowRight, Star, Zap, TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";

const BestSocialMediaMarketingCompanySriLanka = () => {
  return (
    <ServicePageLayout>
      <SEOHead
        title="Best Social Media Marketing Company in Sri Lanka (2026 Guide)"
        description="Find the best social media marketing company in Sri Lanka. Expert Facebook, Instagram & TikTok marketing to grow your brand and generate leads."
        keywords="best social media marketing company sri lanka, social media agency sri lanka, facebook marketing sri lanka, instagram marketing sri lanka"
        canonical="https://buzzconnect.lk/best-social-media-marketing-company-sri-lanka"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Best Social Media Marketing Company in Sri Lanka (2026 Guide)",
          "description": "Find the best social media marketing company in Sri Lanka for Facebook, Instagram & TikTok marketing.",
          "author": { "@type": "Organization", "name": "Buzz Connect" },
          "publisher": { "@type": "Organization", "name": "Buzz Connect" },
          "datePublished": "2026-04-12",
          "dateModified": "2026-04-12"
        }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Best Social Media Marketing Company in Sri Lanka (2026 Guide)
          </h1>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Looking for the Best Social Media Marketing Company in Sri Lanka?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With millions of users active on platforms like Facebook, Instagram, and TikTok, social media has become one of the most powerful marketing channels in Sri Lanka.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sri Lanka has over <strong>8–9 million social media users</strong>, covering a large portion of the population. Choosing the right <Link to="/social-media-marketing-sri-lanka" className="text-accent font-semibold hover:underline">social media marketing company</Link> can help you turn this audience into real customers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Why Businesses Need Social Media Marketing</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Users, text: "Reach a massive audience across Sri Lanka" },
                { icon: Star, text: "Build brand awareness and loyalty" },
                { icon: TrendingUp, text: "Generate leads and increase sales" },
                { icon: Zap, text: "Engage directly with customers in real time" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <item.icon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">What Makes a Good Social Media Marketing Company?</h2>
            <ul className="space-y-3">
              {["Creative content strategy tailored for Sri Lankan audiences", "Paid advertising expertise across Facebook, Instagram & TikTok", "Advanced audience targeting and segmentation", "Performance tracking with transparent reporting"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Services You Should Expect</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Megaphone, title: "Facebook & Instagram Ads", desc: "Targeted paid campaigns to reach your ideal customers" },
                { icon: Target, title: "Content Creation", desc: "Engaging posts, reels, and stories designed for your brand" },
                { icon: BarChart3, title: "Campaign Management", desc: "End-to-end management and optimization for best results" },
                { icon: TrendingUp, title: "Lead Generation", desc: "Convert social media engagement into real business leads" },
              ].map((service, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border border-border">
                  <service.icon className="w-6 h-6 text-accent mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Work With Social Media Experts in Sri Lanka</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Partnering with an experienced agency like <strong>Buzz Connect</strong> helps you:
            </p>
            <ul className="space-y-2">
              {["Reach the right audience with precision targeting", "Improve engagement and brand visibility", "Increase conversions and generate consistent leads"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10 p-6 rounded-2xl bg-accent/10 border border-accent/20">
            <p className="font-medium text-foreground mb-3">🚀 Ready to grow your business with social media?</p>
            <Link to="/social-media-marketing-sri-lanka" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              Explore our social media marketing services in Sri Lanka <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Get Started Today</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Contact us today for a <strong>free social media marketing consultation</strong> and start reaching your customers where they spend their time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          <RelatedArticles
            articles={[
              { title: "Social Media Marketing Cost in Sri Lanka (2026)", path: "/social-media-marketing-cost-sri-lanka" },
              { title: "How Social Media Marketing Works in Sri Lanka", path: "/how-social-media-marketing-works-sri-lanka" },
              { title: "Social Media Marketing – Why Your Business Needs It", path: "/social-media-marketing-why-your-business-needs-it-sri-lanka" },
              { title: "Multi-Channel Marketing for Maximum Reach", path: "/multi-channel-marketing-maximum-reach-sri-lanka" },
            ]}
          />

          <DigitalMarketingCTA />
        </motion.div>
      </article>
    </ServicePageLayout>
  );
};

export default BestSocialMediaMarketingCompanySriLanka;
