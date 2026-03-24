import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const FashionMarketingGrowBrand = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="Fashion Marketing in Sri Lanka: How to Grow Your Brand Online"
      subtitle=""
    >
      <SEOHead
        title="Fashion Marketing Sri Lanka: How to Grow Your Brand Online | Buzz Connect"
        description="Learn how fashion brands in Sri Lanka can grow online with social media, influencer collaborations, email marketing, and WhatsApp campaigns for higher sales."
        canonical="/fashion-marketing-grow-brand-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Fashion Marketing Grow Brand", url: "/fashion-marketing-grow-brand-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Fashion Marketing in Sri Lanka: How to Grow Your Brand Online",
          datePublished: "2025-03-24",
          author: { "@type": "Organization", name: "Buzz Connect" },
          publisher: { "@type": "Organization", name: "Buzz Connect", logo: { "@type": "ImageObject", url: "https://buzzconnect.lk/og-image.png" } },
        }]}
      />
      <div className="max-w-3xl mx-auto">
        <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Resources
        </Link>

        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <p className="text-muted-foreground leading-relaxed">
              The fashion industry thrives on visibility and trends. Digital marketing helps brands reach a wider audience and increase sales in an increasingly competitive Sri Lankan market.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Key Fashion Marketing Strategies</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/social-media-marketing-sri-lanka" className="text-accent hover:underline font-semibold">Social media campaigns</Link> for brand awareness</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Influencer collaborations for wider reach</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> for promotions and new collections</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp</Link> for customer engagement and VIP access</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Why Fashion Marketing Matters</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Builds brand identity and recognition</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Drives online sales and store visits</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Engages with customers directly and personally</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Fashion brands that use digital marketing grow faster and stay ahead of trends. A strong <Link to="/social-media-marketing-sri-lanka" className="text-accent hover:underline font-semibold">social media presence</Link> is the backbone of any fashion brand's marketing strategy.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Want to generate more leads for your fashion brand? Explore our <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">Lead Generation services</Link>.
            </p>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Strong Marketing Builds Strong Fashion Brands</h3>
            <p className="text-primary-foreground/80 mb-4">Grow your fashion brand online with Buzz Connect campaigns.</p>
            <Link to="/fashion-marketing-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View Fashion Marketing Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/fashion-marketing-grow-brand-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default FashionMarketingGrowBrand;
