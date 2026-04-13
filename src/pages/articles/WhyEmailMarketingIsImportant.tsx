import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const WhyEmailMarketingIsImportant = () => {

  return (
    <ServicePageLayout
      badge="Resources"
      title="4 Reasons Why Email Marketing Is Important For Your Internet Marketing"
      subtitle=""
    >
      <SEOHead
        title="4 Reasons Why Email Marketing Is Important | Buzz Connect Sri Lanka"
        description="Discover 4 key reasons why email marketing is important for your internet marketing strategy. Learn how email converts better than social media."
        canonical="/why-email-marketing-is-important"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Why Email Marketing Is Important", url: "/why-email-marketing-is-important" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "4 Reasons Why Email Marketing Is Important For Your Internet Marketing",
          datePublished: "2020-08-04",
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
          className="prose prose-lg max-w-none"
        >
          <div className="space-y-8 text-foreground">
            <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">1. More Effective Than Social Media (For Customer Conversions)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Don't get us wrong, social media is an extremely important component in any business' marketing strategy. Social media is a great channel for interacting with your audience and strengthening your personal relationships with them. But when it comes to converting people into members, customers or supporters, Don't get us wrong, social media is an extremely important component in any business' marketing strategy. Social media is a great channel for interacting with your audience and strengthening your personal relationships with them. But when it comes to converting people into members, customers or supporters, <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing companies in Sri Lanka</Link> is the way to go.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">2. Economic and Cost Effective</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                It's easy, effective, and inexpensive. Email marketing allows business owners to reach a large number of consumers at a rate of nearly nothing per message.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For small-business owners on a budget, this makes it a better choice than traditional marketing channels like TV, radio, or direct mail.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">3. Action Oriented</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Whether you realise it or not, everybody is trained to do something with an email — reply, forward, click-through, sign-up, or even straight buying.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Think about this! Email is transactional by nature and you can use it to direct traffic to your website and ultimately drive sales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">4. Mobile Devices Allow People to Check Their Email Constantly</h2>
              <p className="text-muted-foreground leading-relaxed">
                Because mobile devices have become so common, people are checking their emails all the time — in line at Starbucks, during their office commute, in the waiting room at the doctor's office, at the grocery store, everywhere.
              </p>
            </div>

            <div className="p-6 rounded-2xl gradient-hero text-center">
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Ready to Start Your Email Marketing Campaign?</h3>
              <p className="text-primary-foreground/80 mb-4">Reach 350,000+ targeted customers with Buzz Connect.</p>
              <Link to="/email-marketing" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
                View Email Marketing Packages in Sri Lanka
              </Link>
            </div>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/why-email-marketing-is-important" />
      </div>
    </ServicePageLayout>
  );
};

export default WhyEmailMarketingIsImportant;
