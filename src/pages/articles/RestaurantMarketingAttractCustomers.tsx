import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const RestaurantMarketingAttractCustomers = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="Restaurant Marketing in Sri Lanka: How to Attract More Customers"
      subtitle=""
    >
      <SEOHead
        title="Restaurant Marketing Sri Lanka: How to Attract More Customers | Buzz Connect"
        description="Learn how restaurants in Sri Lanka can attract more customers with SMS, WhatsApp, social media, and email marketing strategies that drive foot traffic and online orders."
        canonical="/restaurant-marketing-attract-customers-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Restaurant Marketing Attract Customers", url: "/restaurant-marketing-attract-customers-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Restaurant Marketing in Sri Lanka: How to Attract More Customers",
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
              Restaurants in Sri Lanka need effective marketing to stand out in a crowded market. With more customers searching online for dining options, digital marketing is no longer optional.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Top Restaurant Marketing Strategies</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS promotions</Link> for daily offers and specials</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp campaigns</Link> for loyal customers</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Social media for food visuals and engagement</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email</Link> for special events and seasonal offers</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Benefits of Digital Marketing for Restaurants</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Increase foot traffic with targeted promotions</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Build loyal customers who return again and again</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Boost online orders and delivery revenue</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Restaurants that use direct marketing channels can drive consistent customer visits. <Link to="/hotel-marketing-increase-bookings-sri-lanka" className="text-accent hover:underline font-semibold">Hotels in Sri Lanka</Link> are using similar strategies to boost bookings and occupancy.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Need more customers? Our <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">Lead Generation services</Link> can help fill your tables.
            </p>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Good Marketing Brings Customers to Your Table</h3>
            <p className="text-primary-foreground/80 mb-4">Drive more foot traffic and online orders with Buzz Connect.</p>
            <Link to="/restaurant-marketing-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View Restaurant Marketing Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/restaurant-marketing-attract-customers-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default RestaurantMarketingAttractCustomers;
