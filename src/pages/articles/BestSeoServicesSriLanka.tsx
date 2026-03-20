import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const BestSeoServicesSriLanka = () => {

  return (
    <ServicePageLayout
      badge="Resources"
      title="SEO Sri Lanka – Search Engine Optimization"
      subtitle=""
    >
      <SEOHead
        title="Best SEO Services Sri Lanka | Search Engine Optimization | Buzz Connect"
        description="Learn about SEO in Sri Lanka and how to rank your website on Google. Professional SEO services by Buzz Connect."
        canonical="/best-seo-services-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "SEO Sri Lanka", url: "/best-seo-services-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "SEO Sri Lanka (Search Engine Optimization)",
          datePublished: "2020-08-06",
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
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <p className="text-muted-foreground leading-relaxed mb-3">
              SEO stands for <strong className="text-foreground">Search Engine Optimization</strong>, which is the practice of increasing the quantity and quality of traffic to your website through organic search engine results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              If you like to get the benefit of SEO for your promotion or offer, working with <a href="https://findit.lk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Findit.lk</a> is your best solution. That is because Findit.lk is ranked on the 1st page of Google search for "offers in Sri Lanka", "promotions in Sri Lanka", "discounts in Sri Lanka" and similar keywords — which will help you find online leads easily.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              SEO is the most important function when it comes to attracting visitors to your website. Investing in <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO</Link> will be one of the best business decisions you can take.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Why SEO Matters for Sri Lankan Businesses</h2>
            <ul className="space-y-2">
              {[
                "Increase organic traffic from Google",
                "Rank higher for keywords relevant to your business",
                "Attract high-intent visitors ready to buy",
                "Build long-term online credibility",
                "Cost-effective compared to paid advertising",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Improve Your Google Rankings Today</h3>
            <p className="text-primary-foreground/80 mb-4">Professional SEO services tailored for Sri Lankan businesses.</p>
            <Link to="/seo-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View SEO Packages
            </Link>
          </div>
        </motion.article>
      </div>
    </ServicePageLayout>
  );
};

export default BestSeoServicesSriLanka;
