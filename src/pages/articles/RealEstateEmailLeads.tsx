import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, Building2, Mail, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImg from "@/assets/blog/article-realestate-email-leads.jpg";
import RelatedArticles from "@/components/RelatedArticles";

const faqs = [
  { q: "Why is email marketing effective for real estate in Sri Lanka?", a: "Property buyers take time to decide. Email marketing keeps your listings and offers in front of interested buyers throughout their decision journey." },
  { q: "How can real estate businesses generate quality leads?", a: "By combining email marketing with Findit.lk listings and multi-channel campaigns, you reach high-intent buyers actively searching for properties." },
  { q: "What types of email campaigns work for real estate?", a: "Property launches, price drop alerts, investment campaigns, and site visit invitations are the most effective campaign types." },
  { q: "Is email marketing cost-effective for real estate?", a: "Yes. Email marketing delivers lower cost per lead and higher ROI compared to paid social media ads, making it ideal for property marketing." },
];

const RealEstateEmailLeads = () => {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }), []);

  const articleJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Real Estate Marketing in Sri Lanka: How Email Campaigns Generate High-Quality Property Leads",
    author: { "@type": "Organization", name: "Buzz Connect" },
    publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
    datePublished: "2026-03-29",
    description: "How email marketing helps real estate businesses in Sri Lanka generate high-quality property leads with targeted campaigns and multi-channel strategies.",
  }), []);

  return (
    <ServicePageLayout
      badge="Article"
      title="Real Estate Marketing in Sri Lanka: How Email Campaigns Generate High-Quality Property Leads"
      subtitle="Connect directly with serious buyers and investors through targeted email campaigns and multi-channel strategies."
    >
      <SEOHead
        title="Real Estate Email Marketing Sri Lanka | Generate Property Leads"
        description="How email marketing generates high-quality property leads for real estate businesses in Sri Lanka. Targeted campaigns, Findit.lk integration & multi-channel strategies."
        canonical="/real-estate-email-marketing-leads-sri-lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Real Estate Email Marketing", url: "/real-estate-email-marketing-leads-sri-lanka" },
        ]}
        jsonLd={[jsonLd, articleJsonLd]}
      />

      <article className="max-w-4xl mx-auto space-y-12">
        <div className="rounded-2xl overflow-hidden shadow-card">
          <img src={articleImg} alt="Real estate email marketing to generate property leads in Sri Lanka" className="w-full h-auto" />
        </div>

        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The real estate market in Sri Lanka requires a strategic approach to reach serious buyers and investors. Traditional advertising alone is no longer enough.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> helps real estate businesses connect directly with interested buyers and convert leads more effectively.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-7 h-7 text-accent" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Why Email Marketing is Ideal for Real Estate</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Property buyers take time to make decisions. <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> allows you to stay connected throughout the buying journey.
          </p>
          <p className="text-muted-foreground mb-3">You can:</p>
          <ul className="space-y-2 mb-6">
            {["Share property listings", "Promote new projects", "Send investment opportunities", "Follow up with interested buyers"].map(item => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground">
            👉 Our <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing Sri Lanka</Link> services help real estate businesses generate quality leads.
          </p>
        </section>

        <section className="bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-7 h-7 text-accent" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Multi-Channel Marketing Advantage</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Combining email with <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp</Link>, and listing platforms increases visibility and trust.
          </p>
          <p className="text-muted-foreground">
            👉 Discover <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing campaigns</Link> for real estate.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-7 h-7 text-accent" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Use High-Intent Platforms</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Platforms like <strong>Findit.lk</strong> help capture users actively searching for properties. These leads are more likely to convert compared to social media audiences.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Campaign Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Property launches", "Price drop alerts", "Investment campaigns", "Site visit invitations"].map(item => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <Building2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Benefits</h2>
          <ul className="space-y-2">
            {["Higher quality inquiries", "Better conversion rates", "Lower cost per lead", "Long-term customer relationships"].map(item => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.q} className="p-5 rounded-xl bg-muted/30 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-10">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-3">
            Looking for Real Estate Marketing Services in Sri Lanka?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Generate high-quality property leads with <Link to="/email-marketing" className="text-accent hover:underline font-bold">email marketing</Link> and <Link to="/real-estate-marketing-sri-lanka" className="text-accent hover:underline font-bold">real estate marketing</Link> campaigns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/real-estate-marketing-sri-lanka">
              <Button variant="hero-outline" size="lg" className="text-base">Real Estate Marketing <ArrowRight className="ml-1" /></Button>
            </Link>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20real%20estate%20email%20marketing%20campaigns." target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base">Chat on WhatsApp <ArrowRight className="ml-1" /></Button>
            </a>
          </div>
        </section>
      </article>
      <div className="container mx-auto px-4">
        <RelatedArticles currentPath="/real-estate-email-marketing-leads-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default RealEstateEmailLeads;
