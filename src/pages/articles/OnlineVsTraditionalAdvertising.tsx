import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/article-online-vs-traditional.jpg";

const OnlineVsTraditionalAdvertising = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Online Advertising vs Traditional Advertising in Sri Lanka",
      description: "Compare online and traditional advertising in Sri Lanka. Discover which method delivers better ROI for your business.",
      author: { "@type": "Organization", name: "Buzz Connect" },
      publisher: { "@type": "Organization", name: "Buzz Connect" },
      datePublished: "2025-03-24",
    },
  ];

  return (
    <ServicePageLayout
      badge="Advertising Comparison"
      title="Online Advertising vs Traditional Advertising in Sri Lanka"
      subtitle="Which advertising method delivers better results for Sri Lankan businesses? A detailed comparison."
    >
      <SEOHead
        title="Online vs Traditional Advertising Sri Lanka | Which is Better?"
        description="Compare online advertising vs traditional advertising in Sri Lanka. Learn which delivers better ROI, reach, and results for your business."
        canonical="/online-vs-traditional-advertising-sri-lanka"
        keywords="online advertising vs traditional advertising sri lanka, advertising comparison sri lanka, digital vs print advertising"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Online vs Traditional Advertising", url: "/online-vs-traditional-advertising-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={articleImage} alt="Online advertising vs traditional advertising in Sri Lanka" className="w-full rounded-2xl mb-8" loading="lazy" width={800} height={600} />

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Sri Lankan businesses face a critical decision: invest in <strong>online advertising</strong> or stick with <strong>traditional advertising</strong>? This comparison helps you make the right choice for your business.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Traditional Advertising in Sri Lanka</h2>
            <p>Traditional advertising includes newspapers, TV commercials, radio spots, billboards, and print flyers. While these have wide reach, they come with limitations:</p>
            <ul className="space-y-2 my-4">
              <li>❌ High costs (newspaper ads can cost LKR 50,000+)</li>
              <li>❌ Difficult to measure ROI</li>
              <li>❌ Limited targeting options</li>
              <li>❌ No real-time performance tracking</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Online Advertising in Sri Lanka</h2>
            <p>Online advertising offers significant advantages for businesses of all sizes:</p>
            <ul className="space-y-2 my-4">
              <li>✅ <li>✅ Affordable — start from LKR 5,000</li></li>
              <li>✅ Precise audience targeting</li>
              <li>✅ Measurable results and analytics</li>
              <li>✅ Multiple channels (Email, SMS, WhatsApp, Banners)</li>
              <li>✅ Higher engagement and conversion rates</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">The Verdict</h2>
            <p>
              For most businesses in Sri Lanka, online advertising delivers better ROI, more precise targeting, and measurable results. The best strategy combines digital channels for maximum impact.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Why Choose Online Advertising?</h2>
            <p>
              With platforms like Findit.lk and multi-channel campaigns through BuzzConnect, businesses can reach their exact target audience at a fraction of the cost of traditional media.
            </p>

            <p className="mt-8">
              👉 Switch to effective online advertising with{" "}
              <Link to="/online-advertising-sri-lanka" className="text-accent hover:underline font-semibold">
                BuzzConnect's Advertising Solutions in Sri Lanka
              </Link>
            </p>
          </div>
        </motion.div>

        <RelatedArticles currentPath="/online-vs-traditional-advertising-sri-lanka" />
      </article>
    </ServicePageLayout>
  );
};

export default OnlineVsTraditionalAdvertising;
