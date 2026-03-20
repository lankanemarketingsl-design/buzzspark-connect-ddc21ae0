import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const WhyYouNeedEmailMarketing = () => {

  return (
    <ServicePageLayout
      badge="Resources"
      title="Why You Need Email Marketing"
      subtitle=""
    >
      <SEOHead
        title="Why You Need Email Marketing | Buzz Connect Sri Lanka"
        description="Learn why email marketing is the most cost-effective digital strategy for converting prospects into customers. Buzz Connect Sri Lanka."
        canonical="/why-you-need-email-marketing"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Why You Need Email Marketing", url: "/why-you-need-email-marketing" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Why You Need Email Marketing",
          datePublished: "2020-08-05",
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
              Email marketing is the highly cost effective digital marketing strategy of sending direct emails to prospects and customers. Email marketing converts prospects into customers, and turns one-time buyers into loyal, raving fans.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Why Choose Buzz Connect as Your Email Marketing Partner</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Buzz Connect is the No.1 <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing company in Sri Lanka</Link> which offers Email Marketing, <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS Marketing</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp Marketing</Link> and <Link to="/online-advertising-sri-lanka" className="text-accent hover:underline font-semibold">Web Ads</Link> targeting Sri Lankans.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              The best reason to select Buzz Connect as your advertising and direct marketing partner is the website network which backs the company. Buzz Connect works with <a href="https://findit.lk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Findit.lk</a> which is the most preferred advertising website in Sri Lanka for offers and promotions, with over 200,000 website visitors per month — and advertising on Findit.lk is only possible for Buzz Connect customers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This combination will give a boost to your promotions via targeted email marketing campaigns, SMS Marketing campaigns and combining SEO traffic which drives through Findit.lk to generate maximum results.
            </p>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Start Your Email Marketing Campaign Today</h3>
            <p className="text-primary-foreground/80 mb-4">Reach 350,000+ targeted customers with Buzz Connect.</p>
            <Link to="/email-marketing" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View Email Marketing Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/why-you-need-email-marketing" />
      </div>
    </ServicePageLayout>
  );
};

export default WhyYouNeedEmailMarketing;
