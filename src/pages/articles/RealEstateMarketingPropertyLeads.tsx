import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const RealEstateMarketingPropertyLeads = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="Real Estate Marketing in Sri Lanka: How to Generate Property Leads"
      subtitle=""
    >
      <SEOHead
        title="Real Estate Marketing Sri Lanka: How to Generate Property Leads | Buzz Connect"
        description="Real estate marketing in Sri Lanka helps attract serious buyers and investors. Learn how email, SMS, WhatsApp, and landing pages drive quality property leads."
        canonical="/real-estate-marketing-generate-property-leads-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Real Estate Marketing Property Leads", url: "/real-estate-marketing-generate-property-leads-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Real Estate Marketing in Sri Lanka: How to Generate Property Leads",
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
              Real estate businesses rely heavily on lead generation. Digital marketing helps attract serious buyers and investors who are actively searching for properties in Sri Lanka.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Best Strategies for Real Estate Marketing</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email campaigns</Link> for property listings and updates</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS alerts</Link> for new properties and price drops</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp</Link> for direct communication with buyers</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Landing pages for <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead capture</Link></li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Why Digital Marketing Works for Real Estate</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Targets high-intent buyers actively searching</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Faster communication leads to quicker closings</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Higher conversion rates through personalized outreach</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Real estate companies using multi-channel marketing see better lead quality and faster sales. The <Link to="/finance-marketing-generate-leads-sri-lanka" className="text-accent hover:underline font-semibold">finance sector</Link> uses similar data-driven strategies to attract qualified prospects.
            </p>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Effective Marketing Turns Prospects into Buyers</h3>
            <p className="text-primary-foreground/80 mb-4">Generate quality property leads with Buzz Connect campaigns.</p>
            <Link to="/real-estate-marketing-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View Real Estate Marketing Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/real-estate-marketing-generate-property-leads-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default RealEstateMarketingPropertyLeads;
