import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/article-best-advertising.jpg";

const BestAdvertisingCompanySriLanka = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Best Advertising Company in Sri Lanka",
      description: "Discover why BuzzConnect is the best advertising company in Sri Lanka offering email, SMS, WhatsApp and online advertising solutions.",
      author: { "@type": "Organization", name: "Buzz Connect" },
      publisher: { "@type": "Organization", name: "Buzz Connect" },
      datePublished: "2025-03-24",
    },
  ];

  return (
    <ServicePageLayout
      badge="Advertising Sri Lanka"
      title="Best Advertising Company in Sri Lanka"
      subtitle="Find out why BuzzConnect is trusted by 2,000+ businesses as the #1 advertising company in Sri Lanka."
    >
      <SEOHead
        title="Best Advertising Company in Sri Lanka | BuzzConnect"
        description="BuzzConnect is the best advertising company in Sri Lanka. Email, SMS, WhatsApp & online advertising solutions with proven results for 2,000+ businesses."
        canonical="/best-advertising-company-sri-lanka"
        keywords="best advertising company sri lanka, advertising company sri lanka, top advertising agency sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Best Advertising Company in Sri Lanka", url: "/best-advertising-company-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={articleImage} alt="Best advertising company in Sri Lanka" className="w-full rounded-2xl mb-8" loading="lazy" width={800} height={600} />

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Choosing the <strong>best advertising company in Sri Lanka</strong> can make or break your marketing success. With the rapid growth of digital platforms, businesses need a partner that understands the local market and delivers measurable results.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">What Makes an Advertising Company the Best?</h2>
            <p>
              The best advertising company in Sri Lanka should offer multi-channel solutions, have a proven track record, and provide affordable packages. BuzzConnect checks all these boxes with over 2,000 satisfied clients across industries.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Why BuzzConnect is #1</h2>
            <ul className="space-y-2 my-4">
              <li>✅ Multi-channel advertising (Email + SMS + WhatsApp + Banner Ads)</li>
              <li>✅ 250,000+ email subscriber reach</li>
              <li>✅ Affordable packages starting from LKR 1,000</li>
              <li>✅ Integration with Findit.lk for maximum visibility</li>
              <li>✅ 10+ years of experience in Sri Lankan market</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Services We Offer</h2>
            <p>
              BuzzConnect provides comprehensive advertising solutions including email marketing campaigns, SMS blasts, WhatsApp promotions, banner advertising on Findit.lk, and social media marketing. Each channel is optimized for the Sri Lankan market.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Results That Speak</h2>
            <p>
              Our clients consistently see increased brand visibility, higher engagement rates, and more qualified leads. Whether you're a small business or a large enterprise, BuzzConnect has the right advertising solution for you.
            </p>

            <p className="mt-8">
              👉 Ready to work with the best? Explore our{" "}
              <Link to="/online-advertising-sri-lanka" className="text-accent hover:underline font-semibold">
                Advertising Services in Sri Lanka
              </Link>
            </p>
          </div>
        </motion.div>

        <RelatedArticles
          articles={[
            { title: "Digital Advertising Sri Lanka: Complete Guide", path: "/digital-advertising-sri-lanka-complete-guide" },
            { title: "Online vs Traditional Advertising Sri Lanka", path: "/online-vs-traditional-advertising-sri-lanka" },
          ]}
        />
      </article>
    </ServicePageLayout>
  );
};

export default BestAdvertisingCompanySriLanka;
