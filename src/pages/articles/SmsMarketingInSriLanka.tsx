import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const SmsMarketingInSriLanka = () => {

  return (
    <ServicePageLayout
      badge="Resources"
      title="SMS Marketing in Sri Lanka"
      subtitle=""
    >
      <SEOHead
        title="SMS Marketing in Sri Lanka | Bulk SMS Campaigns | Buzz Connect"
        description="Learn about SMS marketing in Sri Lanka. Target campaigns gender-wise or area-wise with Buzz Connect's data-driven approach."
        canonical="/sms-marketing-in-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "SMS Marketing in Sri Lanka", url: "/sms-marketing-in-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "SMS Marketing in Sri Lanka",
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
            <p className="text-muted-foreground leading-relaxed">
              <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS Marketing</Link> is sending promotional campaigns for marketing purposes using text messages (SMS). These messages are mostly meant to communicate sensitive offers, updates, and promotions to people.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Why Choose Buzz Connect as Your SMS Marketing Partner</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You can target your <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS campaign</Link> gender-wise or area-wise with the data-driven approach of Buzz Connect. Without stopping there, you can create a dedicated landing page for your promotion and connect an artwork with more details and link that to your SMS campaign.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Buzz Connect provides the best SMS marketing solutions to you in the most cost-effective manner.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">SMS Marketing Advantages</h2>
            <ul className="space-y-2">
              {[
                "Instant message delivery to thousands",
                "High open rates (over 95%)",
                "Target by gender, area, or profession",
                "Cost-effective — starting from LKR 2 per message",
                "Create dedicated landing pages for campaigns",
                "Combine with email and WhatsApp for maximum reach",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Launch Your SMS Campaign Today</h3>
            <p className="text-primary-foreground/80 mb-4">Reach 600,000+ targeted contacts across Sri Lanka.</p>
            <Link to="/sms-marketing" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View SMS Marketing Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/sms-marketing-in-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default SmsMarketingInSriLanka;
