import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/article-google-ads-cost.jpg";

const GoogleAdsCostGuide = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Google Ads Sri Lanka Cost Guide",
      description: "Complete cost guide for Google Ads in Sri Lanka. Learn about CPC rates, budgets, and how to maximize your advertising ROI.",
      author: { "@type": "Organization", name: "Buzz Connect" },
      publisher: { "@type": "Organization", name: "Buzz Connect" },
      datePublished: "2025-03-24",
    },
  ];

  return (
    <ServicePageLayout
      badge="Google Ads"
      title="Google Ads Sri Lanka Cost Guide"
      subtitle="How much do Google Ads cost in Sri Lanka? A practical cost guide for businesses planning their advertising budget."
    >
      <SEOHead
        title="Google Ads Sri Lanka Cost Guide 2025 | BuzzConnect"
        description="How much do Google Ads cost in Sri Lanka? Complete cost guide covering CPC rates, budgets, and tips to maximize ROI. Compare with alternative advertising options."
        canonical="/google-ads-sri-lanka-cost-guide"
        keywords="google ads sri lanka cost, google advertising sri lanka, PPC cost sri lanka, google ads budget"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Google Ads Cost Guide", url: "/google-ads-sri-lanka-cost-guide" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={articleImage} alt="Google Ads Sri Lanka cost guide" className="w-full rounded-2xl mb-8" loading="lazy" width={800} height={600} />

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              <strong>Google Ads in Sri Lanka</strong> can be an effective advertising channel, but understanding the costs is essential for budget planning. This guide covers everything you need to know about Google Ads pricing in the Sri Lankan market.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">How Google Ads Pricing Works</h2>
            <p>
              Google Ads operates on a pay-per-click (PPC) model. You only pay when someone clicks on your ad. The cost per click (CPC) varies based on industry, competition, and keyword difficulty.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Average Google Ads Costs in Sri Lanka</h2>
            <ul className="space-y-2 my-4">
              <li>💰 Average CPC: LKR 15 – LKR 150 per click</li>
              <li>💰 Monthly budget (small business): LKR 15,000 – LKR 50,000</li>
              <li>💰 Monthly budget (medium business): LKR 50,000 – LKR 200,000</li>
              <li>💰 Competitive industries (finance, real estate): LKR 100 – LKR 300+ per click</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Google Ads vs Direct Marketing</h2>
            <p>
              While Google Ads is effective, many Sri Lankan businesses find better ROI with direct marketing channels. Consider:
            </p>
            <ul className="space-y-2 my-4">
              <li>📧 Email campaigns — LKR 4,000 for 250,000+ impressions</li>
              <li>📱 SMS campaigns — Instant delivery, 90%+ open rate</li>
              <li>💬 WhatsApp marketing — Direct personal engagement</li>
              <li>🖥️ Findit.lk banner ads — From LKR 1,000</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Maximizing Your Advertising Budget</h2>
            <p>
              The smartest approach is to combine Google Ads with direct marketing channels. This ensures you capture both search intent and reach your audience directly through email, SMS, and WhatsApp.
            </p>

            <p className="mt-8">
              👉 Get maximum ROI with{" "}
              <Link to="/online-advertising-sri-lanka" className="text-accent hover:underline font-semibold">
                BuzzConnect's Complete Advertising Solutions in Sri Lanka
              </Link>
            </p>
          </div>
        </motion.div>

        <RelatedArticles
          articles={[
            { title: "Best Advertising Company in Sri Lanka", path: "/best-advertising-company-sri-lanka" },
            { title: "Online vs Traditional Advertising", path: "/online-vs-traditional-advertising-sri-lanka" },
          ]}
        />
      </article>
    </ServicePageLayout>
  );
};

export default GoogleAdsCostGuide;
