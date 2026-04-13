import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedArticles from "@/components/RelatedArticles";

const HowEmailMarketingWorks = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How Email Marketing Works in Sri Lanka (Complete Guide 2026)",
      description: "Learn how email marketing works step-by-step — from building lists to tracking results. A complete guide for businesses in Sri Lanka.",
      author: { "@type": "Organization", name: "Buzz Connect" },
      publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
      datePublished: "2026-04-12",
      dateModified: "2026-04-12",
      mainEntityOfPage: "https://buzzconnect.lk/how-email-marketing-works-sri-lanka",
    },
  ];

  return (
    <>
      <SEOHead
        title="How Email Marketing Works in Sri Lanka | Complete Guide 2026"
        description="Learn how email marketing works step-by-step — from building lists to tracking results. A complete guide for businesses in Sri Lanka in 2026."
        keywords="how email marketing works Sri Lanka, email marketing guide, email campaign steps, email marketing strategy 2026"
        canonical="https://buzzconnect.lk/how-email-marketing-works-sri-lanka"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumbs />

          <article className="prose prose-lg max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              📧 How Email Marketing Works in Sri Lanka (Complete Guide 2026)
            </h1>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">What is Email Marketing?</h2>
              <p className="text-muted-foreground mb-4">
                Email marketing is a digital marketing strategy where businesses send targeted emails to customers to promote products, services, or updates.
              </p>
              <p className="text-muted-foreground mb-4">
                It is one of the most effective ways to communicate directly with your audience and generate leads.
              </p>
              <p className="text-muted-foreground">
                👉 Learn more about{" "}
                <Link to="/email-marketing" className="text-primary hover:underline font-semibold">
                  email marketing companies in Sri Lanka
                </Link>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">🚀 Why Email Marketing Works in Sri Lanka</h2>
              <p className="text-muted-foreground mb-4">Email marketing is highly effective in Sri Lanka because:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>📧 High email usage among professionals</li>
                <li>💰 Low cost compared to paid ads</li>
                <li>🎯 Ability to target specific audiences</li>
                <li>📈 High return on investment (ROI)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Businesses across industries use email marketing to drive consistent results.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">📊 How Email Marketing Works (Step-by-Step)</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">1. Build an Email List</h3>
              <p className="text-muted-foreground mb-2">The first step is collecting contacts from potential customers. This can be done through:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-6">
                <li>Website forms</li>
                <li>Landing pages</li>
                <li>Promotions and offers</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">2. Segment Your Audience</h3>
              <p className="text-muted-foreground mb-2">Not all customers are the same. Segment your audience based on:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-6">
                <li>Interests</li>
                <li>Location</li>
                <li>Behavior</li>
              </ul>
              <p className="text-muted-foreground mb-6">This helps you send more relevant emails.</p>

              <h3 className="text-xl font-semibold text-foreground mb-3">3. Create Email Campaigns</h3>
              <p className="text-muted-foreground mb-2">You design and write emails that:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
                <li>Provide value</li>
                <li>Promote products</li>
                <li>Encourage action</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                👉 Improve your emails with better{" "}
                <Link to="/email-subject-lines-guide-sri-lanka" className="text-primary hover:underline font-semibold">
                  subject lines
                </Link>.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">4. Send Targeted Emails</h3>
              <p className="text-muted-foreground mb-6">
                Send emails at the right time to maximize engagement. Timing plays a key role in open rates and conversions.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">5. Track and Optimize</h3>
              <p className="text-muted-foreground mb-2">Analyze campaign performance:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">
                <li>Open rates</li>
                <li>Click rates</li>
                <li>Conversions</li>
              </ul>
              <p className="text-muted-foreground">Then improve future campaigns.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">📈 Types of Email Marketing Campaigns</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">📢 Promotional Emails</h3>
                  <p className="text-muted-foreground text-sm">Used for offers, discounts, and announcements</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">📰 Newsletters</h3>
                  <p className="text-muted-foreground text-sm">Keep customers updated and engaged</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">🔁 Automated Emails</h3>
                  <p className="text-muted-foreground text-sm">Triggered emails based on user actions</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">🧑‍💼 Lead Nurturing Emails</h3>
                  <p className="text-muted-foreground text-sm">Convert leads into customers</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">🔗 Email Marketing + Multi-Channel Strategy</h2>
              <p className="text-muted-foreground mb-4">Email works best when combined with:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>SMS marketing</li>
                <li>WhatsApp marketing</li>
                <li>Social media</li>
              </ul>
              <p className="text-muted-foreground">
                👉 Learn more about{" "}
                <Link to="/multi-channel-marketing-in-sri-lanka" className="text-primary hover:underline font-semibold">
                  multi-channel marketing in Sri Lanka
                </Link>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">⚠️ Common Email Marketing Mistakes to Avoid</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Sending too many emails</li>
                <li>Not targeting the right audience</li>
                <li>Poor subject lines</li>
                <li>Ignoring analytics</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">💡 Benefits of Email Marketing</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Direct communication with customers</li>
                <li>High ROI</li>
                <li>Scalable marketing</li>
                <li>Strong customer relationships</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">🏆 Work With Email Marketing Experts</h2>
              <p className="text-muted-foreground mb-4">
                To get the best results from your campaigns, working with professionals like Buzz Connect helps you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Build targeted email lists</li>
                <li>Create high-converting campaigns</li>
                <li>Improve overall performance</li>
              </ul>
            </section>

            <section className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">📞 Start Your Email Marketing Today</h2>
              <p className="text-muted-foreground mb-6">
                👉 Want to grow your business with email marketing?
                Contact us today for a free consultation and campaign strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  Contact Us Today
                </Link>
                <Link
                  to="/email-marketing"
                  className="inline-flex items-center justify-center border border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/10 transition-colors"
                >
                  Explore Email Marketing Services
                </Link>
              </div>
            </section>

            <RelatedArticles currentPath="/how-email-marketing-works-sri-lanka" />
          </article>
        </div>
      </div>
    </>
  );
};

export default HowEmailMarketingWorks;
