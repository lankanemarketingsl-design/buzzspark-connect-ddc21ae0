import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/article-digital-advertising-guide.jpg";

const DigitalAdvertisingGuide = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Digital Advertising Sri Lanka: Complete Guide",
      description: "A complete guide to digital advertising in Sri Lanka covering email, SMS, WhatsApp, social media and banner advertising strategies.",
      author: { "@type": "Organization", name: "Buzz Connect" },
      publisher: { "@type": "Organization", name: "Buzz Connect" },
      datePublished: "2025-03-24",
    },
  ];

  return (
    <ServicePageLayout
      badge="Digital Advertising"
      title="Digital Advertising Sri Lanka: Complete Guide"
      subtitle="Everything you need to know about digital advertising in Sri Lanka — channels, strategies, costs, and how to get started."
    >
      <SEOHead
        title="Digital Advertising Sri Lanka: Complete Guide | BuzzConnect"
        description="Complete guide to digital advertising in Sri Lanka. Learn about email, SMS, WhatsApp, banner ads and social media advertising strategies for Sri Lankan businesses."
        canonical="/digital-advertising-sri-lanka-complete-guide"
        keywords="digital advertising sri lanka, online advertising guide, digital marketing sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Digital Advertising Guide", url: "/digital-advertising-sri-lanka-complete-guide" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={articleImage} alt="Digital advertising Sri Lanka guide" className="w-full rounded-2xl mb-8" loading="lazy" width={800} height={600} />

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              <strong>Digital advertising in Sri Lanka</strong> is transforming how businesses reach customers. This complete guide covers every channel, strategy, and best practice you need to succeed in the Sri Lankan market.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">What is Digital Advertising?</h2>
            <p>
              Digital advertising uses online platforms and digital communication channels to promote products and services. In Sri Lanka, the most effective digital advertising channels include email marketing, SMS campaigns, WhatsApp marketing, banner ads, and social media.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Top Digital Advertising Channels in Sri Lanka</h2>
            <ul className="space-y-2 my-4">
              <li>📧 <strong>Email Marketing</strong> — <li>📧 <strong>Email Marketing</strong> — Reach 350,000+ subscribers with targeted campaigns</li> with targeted campaigns</li>
              <li>📱 <strong>SMS Marketing</strong> — 90%+ open rates for instant engagement</li>
              <li>💬 <strong>WhatsApp Marketing</strong> — Direct, personal communication with customers</li>
              <li>🖥️ <strong>Banner Advertising</strong> — Premium visibility on Findit.lk</li>
              <li>📲 <strong>Social Media</strong> — Build brand awareness on Facebook, Instagram, TikTok</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">How Much Does Digital Advertising Cost?</h2>
            <p>
              Digital advertising in Sri Lanka is surprisingly affordable. Digital advertising in Sri Lanka is surprisingly affordable. Banner ads start from LKR 5,000, email campaigns from LKR 4,000, and comprehensive multi-channel packages are available for businesses of all sizes., and comprehensive multi-channel packages are available for businesses of all sizes.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Getting Started</h2>
            <p>
              The key to successful digital advertising is choosing the right partner. Look for an agency that offers multi-channel solutions, has local market expertise, and can show proven results.
            </p>

            <p className="mt-8">
              👉 Start your digital advertising journey with{" "}
              <Link to="/online-advertising-sri-lanka" className="text-accent hover:underline font-semibold">
                BuzzConnect's Advertising Solutions in Sri Lanka
              </Link>
            </p>
          </div>
        </motion.div>

        <RelatedArticles currentPath="/digital-advertising-sri-lanka-complete-guide" />
      </article>
    </ServicePageLayout>
  );
};

export default DigitalAdvertisingGuide;
