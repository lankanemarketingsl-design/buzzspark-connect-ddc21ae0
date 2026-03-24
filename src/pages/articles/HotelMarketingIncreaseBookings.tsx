import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const HotelMarketingIncreaseBookings = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="Hotel Marketing in Sri Lanka: How to Increase Bookings and Revenue"
      subtitle=""
    >
      <SEOHead
        title="Hotel Marketing Sri Lanka: How to Increase Bookings and Revenue | Buzz Connect"
        description="Learn how hotels in Sri Lanka can increase bookings and revenue with digital marketing strategies including email, SMS, WhatsApp, and social media campaigns."
        canonical="/hotel-marketing-increase-bookings-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Hotel Marketing Increase Bookings", url: "/hotel-marketing-increase-bookings-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Hotel Marketing in Sri Lanka: How to Increase Bookings and Revenue",
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
              The hotel industry in Sri Lanka is highly competitive, especially with the growth of tourism and online booking platforms. To stand out, hotels need a strong digital marketing strategy that reaches both international and local travelers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Key Hotel Marketing Strategies</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email campaigns</Link> for promotions and seasonal offers</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS alerts</Link> for last-minute deals</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp</Link> for direct customer communication</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Social media for brand visibility and engagement</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Why Digital Marketing is Important for Hotels</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Attract international and local travelers</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Increase direct bookings (reduce OTA dependency)</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Build customer loyalty and repeat visits</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Hotels that use multi-channel marketing strategies see higher occupancy rates and better customer engagement. Similarly, <Link to="/restaurant-marketing-attract-customers-sri-lanka" className="text-accent hover:underline font-semibold">restaurants in Sri Lanka</Link> are using the same strategies to drive foot traffic and online orders.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Want to generate more qualified leads for your hotel? Explore our <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">Lead Generation services</Link>.
            </p>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Smart Marketing Leads to More Bookings</h3>
            <p className="text-primary-foreground/80 mb-4">Reach travelers and boost your hotel's revenue with Buzz Connect.</p>
            <Link to="/hotel-marketing-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View Hotel Marketing Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/hotel-marketing-increase-bookings-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default HotelMarketingIncreaseBookings;
