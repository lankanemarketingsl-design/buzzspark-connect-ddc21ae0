import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Zap, Eye, DollarSign, BarChart3, Target, Users, Settings, TrendingUp, MessageSquare } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const BestSmsMarketingCompanySriLanka = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="Best SMS Marketing Company in Sri Lanka"
      subtitle="2026 Guide — Find the right SMS marketing partner to grow your business"
    >
      <SEOHead
        title="Best SMS Marketing Company in Sri Lanka (2026 Guide) | Buzz Connect"
        description="Looking for the best SMS marketing company in Sri Lanka? Learn what to look for, key benefits, and how to choose the right SMS marketing partner for your business."
        canonical="/best-sms-marketing-company-sri-lanka"
        ogType="article"
        keywords="best sms marketing company sri lanka, sms marketing sri lanka, bulk sms sri lanka, sms campaign sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Best SMS Marketing Company in Sri Lanka", url: "/best-sms-marketing-company-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best SMS Marketing Company in Sri Lanka (2026 Guide)",
          datePublished: "2026-04-12",
          dateModified: "2026-04-12",
          author: { "@type": "Organization", name: "Buzz Connect" },
          publisher: { "@type": "Organization", name: "Buzz Connect", logo: { "@type": "ImageObject", url: "https://buzzconnect.lk/og-image.png" } },
        }]}
      />
      <div className="max-w-3xl mx-auto">
        <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Resources
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Intro */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Looking for the Best SMS Marketing Company in Sri Lanka?</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Choosing the right <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing company</Link> can make a huge difference in how effectively you reach your customers. With the right partner, you can send targeted messages, increase engagement, and generate real business results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This guide will help you find the best SMS marketing company in Sri Lanka for your business.
            </p>
          </div>

          {/* Why SMS is powerful */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Why SMS Marketing is Still Powerful in Sri Lanka</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing</Link> continues to be one of the most effective marketing channels because:
            </p>
            <ul className="space-y-3">
              {[
                { icon: Phone, text: "Almost everyone uses mobile phones" },
                { icon: Zap, text: "Messages are delivered instantly" },
                { icon: Eye, text: "Open rates are extremely high (over 95%)" },
                { icon: DollarSign, text: "Cost per message is low" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-foreground">
                  <Icon className="w-4 h-4 text-accent flex-shrink-0" /> {text}
                </li>
              ))}
            </ul>
          </div>

          {/* What makes the best */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">What Makes the Best SMS Marketing Company?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">When choosing a provider, look for these key features:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, title: "High Delivery Rates", desc: "Your messages must reach customers without delays." },
                { icon: Target, title: "Advanced Targeting", desc: "Segment your audience by gender, area, or profession for better results." },
                { icon: Settings, title: "Campaign Management", desc: "End-to-end support for your campaigns." },
                { icon: BarChart3, title: "Analytics & Reporting", desc: "Track performance and optimize campaigns." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-accent" />
                    <h3 className="font-heading font-bold text-foreground text-sm">{title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services to expect */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">SMS Marketing Services You Should Expect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">A professional SMS marketing company should offer:</p>
            <ul className="space-y-2">
              {[
                "Bulk SMS campaigns",
                "Promotional messaging",
                "Transactional SMS",
                "Automation & scheduling",
                "API integrations",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
              👉 Related: <Link to="/sms-marketing-in-sri-lanka" className="text-accent hover:underline font-semibold">SMS Marketing in Sri Lanka</Link>
            </p>
          </div>

          {/* Benefits */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Benefits of Hiring an SMS Marketing Company</h2>
            <ul className="space-y-2">
              {[
                "Save time and effort on campaign execution",
                "Get expert campaign strategies tailored to your market",
                "Improve ROI with data-driven targeting",
                "Access better tools and platforms",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* How to choose */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">How to Choose the Right SMS Marketing Company</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Before making a decision, check:</p>
            <ul className="space-y-2">
              {[
                "Experience in the Sri Lankan market",
                "Client success stories and testimonials",
                "Pricing transparency",
                "Support and service quality",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Trusted choice */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">A Trusted SMS Marketing Partner for Sri Lankan Businesses</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you're looking for reliable <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing services</Link>, working with an experienced agency like Buzz Connect can help you:
            </p>
            <ul className="space-y-2">
              {[
                "Reach thousands of customers instantly",
                "Run high-performing campaigns",
                "Generate more leads and sales",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Multi-channel */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">SMS + Multi-Channel Marketing Strategy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">The best results come when SMS is combined with:</p>
            <ul className="space-y-2">
              {[
                { label: "Email marketing", to: "/email-marketing" },
                { label: "WhatsApp campaigns", to: "/whatsapp-marketing" },
                { label: "Social media marketing", to: "/social-media-marketing-sri-lanka" },
              ].map(({ label, to }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-foreground">
                  <MessageSquare className="w-4 h-4 text-accent flex-shrink-0" />
                  <Link to={to} className="text-accent hover:underline font-semibold">{label}</Link>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
              👉 Learn more: <Link to="/multi-channel-marketing-in-sri-lanka" className="text-accent hover:underline font-semibold">Multi-Channel Marketing in Sri Lanka</Link>
            </p>
          </div>

          {/* CTA */}
          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Get Started with SMS Marketing Today</h3>
            <p className="text-primary-foreground/80 mb-4">Want to grow your business with SMS campaigns? Contact us for a free consultation.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/sms-marketing" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
                View SMS Marketing Packages
              </Link>
              <Link to="/contact-us" className="inline-block px-6 py-2.5 rounded-full bg-primary-foreground/20 text-primary-foreground font-bold hover:bg-primary-foreground/30 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/best-sms-marketing-company-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default BestSmsMarketingCompanySriLanka;
