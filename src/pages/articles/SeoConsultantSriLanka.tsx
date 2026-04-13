import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Search, Users, BarChart3, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const SeoConsultantSriLanka = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="SEO Consultant in Sri Lanka: How to Choose the Right Expert for Your Business"
      subtitle=""
    >
      <SEOHead
        title="SEO Consultant in Sri Lanka: How to Choose the Right Expert | Buzz Connect"
        description="Looking for an SEO consultant in Sri Lanka? Learn how to choose the right expert, what to expect, and how professional SEO consulting drives long-term business growth."
        canonical="/seo-consultant-sri-lanka"
        ogType="article"
        keywords="seo consultant sri lanka, seo expert sri lanka, seo specialist sri lanka, best seo company sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "SEO Consultant Sri Lanka", url: "/seo-consultant-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "SEO Consultant in Sri Lanka: How to Choose the Right Expert for Your Business",
          datePublished: "2026-04-13",
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
            <p className="text-muted-foreground leading-relaxed mb-3">
              If you're looking to grow your business online, hiring an experienced SEO consultant in Sri Lanka can make a significant difference. While many businesses try to handle SEO in-house, working with a dedicated consultant ensures you get expert guidance tailored to the Sri Lankan market.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              An SEO consultant helps businesses develop and execute strategies that deliver measurable results — from higher Google rankings to increased customer inquiries and revenue growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a startup or an established company, the right <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO company in Sri Lanka</Link> can transform your online presence and drive sustainable growth.
            </p>
          </div>

          {/* What an SEO Consultant Does */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">What Does an SEO Consultant Do?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">An SEO consultant in Sri Lanka helps businesses:</p>
            <ul className="space-y-2">
              {[
                "Identify high-value keywords that your customers are searching for",
                "Improve website structure for better crawlability and user experience",
                "Increase search engine visibility through on-page and off-page optimization",
                "Develop content strategies that attract and convert visitors",
                "Monitor performance and continuously refine the strategy",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Unlike generic marketing services, a professional SEO consultant focuses on long-term growth and measurable results rather than short-term vanity metrics.
            </p>
          </div>

          {/* What to Look For */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">What to Look for in an SEO Consultant</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: BarChart3, title: "Proven Results", desc: "Case studies and real rankings that demonstrate expertise" },
                { icon: Search, title: "Local Market Experience", desc: "Deep understanding of the Sri Lankan digital landscape" },
                { icon: Shield, title: "Data-Driven Strategies", desc: "Decisions backed by analytics, not guesswork" },
                { icon: Users, title: "Transparent Reporting", desc: "Regular updates on progress, rankings, and ROI" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-muted/50 border border-border">
                  <item.icon className="w-5 h-5 text-accent mb-2" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Consultant vs DIY */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">SEO Consultant vs Doing It Yourself</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Many business owners wonder if they can handle SEO on their own. While basic optimization is possible, professional SEO requires specialized knowledge that takes years to develop.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-3 bg-muted/50 border border-border font-semibold text-foreground">Factor</th>
                    <th className="text-left p-3 bg-accent/10 border border-border font-semibold text-foreground">SEO Consultant</th>
                    <th className="text-left p-3 bg-muted/50 border border-border font-semibold text-foreground">DIY SEO</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Expertise", "Years of experience", "Learning curve"],
                    ["Time Investment", "Handled for you", "Significant time required"],
                    ["Results Speed", "Faster, strategic", "Slower, trial & error"],
                    ["Cost Efficiency", "Higher ROI long-term", "Hidden costs from mistakes"],
                  ].map(([factor, consultant, diy]) => (
                    <tr key={factor}>
                      <td className="p-3 border border-border text-muted-foreground font-medium">{factor}</td>
                      <td className="p-3 border border-border text-foreground">{consultant}</td>
                      <td className="p-3 border border-border text-muted-foreground">{diy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Why Right Consultant Matters */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Why Choosing the Right Consultant Matters</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Choosing the right consultant ensures your investment delivers real returns. A skilled SEO expert in Sri Lanka will align your strategy with business goals and local search behaviour.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Learn more about <Link to="/how-seo-works-sri-lanka" className="text-accent hover:underline font-semibold">how SEO works in Sri Lanka</Link> and <Link to="/seo-investment-long-term-strategy-sri-lanka" className="text-accent hover:underline font-semibold">why SEO is the smartest long-term investment</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Understanding <Link to="/seo-cost-sri-lanka" className="text-accent hover:underline font-semibold">SEO pricing in Sri Lanka</Link> will also help you budget effectively.
            </p>
          </div>

          {/* CTA */}
          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Work with a Trusted SEO Consultant in Sri Lanka</h3>
            <p className="text-primary-foreground/80 mb-4">Get expert guidance to improve your rankings, traffic, and leads.</p>
            <Link to="/seo-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              Explore SEO Services
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/seo-consultant-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default SeoConsultantSriLanka;
