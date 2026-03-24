import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const FinanceMarketingGenerateLeads = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="Finance Marketing in Sri Lanka: How to Generate High-Quality Leads"
      subtitle=""
    >
      <SEOHead
        title="Finance Marketing Sri Lanka: How to Generate High-Quality Leads | Buzz Connect"
        description="Finance marketing in Sri Lanka requires trust and precision. Learn how email, SMS, WhatsApp, and targeted advertising generate quality leads for financial businesses."
        canonical="/finance-marketing-generate-leads-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Finance Marketing Generate Leads", url: "/finance-marketing-generate-leads-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Finance Marketing in Sri Lanka: How to Generate High-Quality Leads",
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
              The finance sector requires trust, precision, and targeted communication. Marketing plays a crucial role in attracting the right customers and building lasting relationships with clients.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Best Marketing Channels for Finance</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> for personalized offers</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link> for transaction alerts and promotions</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp</Link> for customer support</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Targeted advertising for <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead generation</Link></li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Why Finance Marketing Needs Strategy</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Highly competitive industry requiring differentiation</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Customers require trust and credibility before engaging</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Need for accurate targeting to reach qualified prospects</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Financial businesses that use data-driven marketing achieve better results. The <Link to="/real-estate-marketing-generate-property-leads-sri-lanka" className="text-accent hover:underline font-semibold">real estate sector</Link> faces similar challenges and benefits from the same targeted approach.
            </p>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Targeted Marketing Drives Quality Leads in Finance</h3>
            <p className="text-primary-foreground/80 mb-4">Reach the right customers with precision campaigns by Buzz Connect.</p>
            <Link to="/finance-marketing-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View Finance Marketing Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/finance-marketing-generate-leads-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default FinanceMarketingGenerateLeads;
