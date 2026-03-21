import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, Users, Zap, Globe, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImg from "@/assets/blog/article-7.jpg";
import RelatedArticles from "@/components/RelatedArticles";

const faqs = [
  { q: "What is multi-channel marketing?", a: "Multi-channel marketing is a strategy that reaches customers through multiple platforms like email, SMS, WhatsApp, and web advertising simultaneously for maximum engagement and conversions." },
  { q: "Why is multi-channel marketing important in Sri Lanka?", a: "Sri Lankan consumers use multiple digital platforms daily. A multi-channel approach ensures your brand stays visible across every touchpoint, improving recall and conversion rates." },
  { q: "How does Findit.lk integration help my business?", a: "Findit.lk is one of Sri Lanka's leading online promotion platforms. Integration with Buzz Connect's direct marketing channels amplifies your reach to users actively searching for products and services." },
  { q: "What industries benefit from multi-channel marketing?", a: "Education institutes, e-commerce, hotels, real estate, event organizers, SMEs, and corporate organizations all benefit from multi-channel marketing strategies." },
];

const MultiChannelMarketingSriLanka = () => {
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
    headline: "The Power of Multi-Channel Marketing in Sri Lanka with Buzz Connect",
    author: { "@type": "Organization", name: "Buzz Connect" },
    publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
    datePublished: "2025-03-20",
    description: "Discover how Buzz Connect's multi-channel marketing strategy combining Email, SMS, WhatsApp, and Findit.lk delivers maximum reach and faster results for Sri Lankan businesses.",
  }), []);

  return (
    <ServicePageLayout
      badge="Article"
      title="The Power of Multi-Channel Marketing in Sri Lanka"
      subtitle="How Buzz Connect combines direct marketing with Findit.lk to deliver unmatched visibility and engagement."
    >
      <SEOHead
        title="Multi-Channel Marketing Sri Lanka | Buzz Connect + Findit.lk"
        description="Discover how Buzz Connect's multi-channel marketing combines Email, SMS, WhatsApp & Findit.lk for maximum reach. The most powerful integrated marketing solution in Sri Lanka."
        canonical="/multi-channel-marketing-in-sri-lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Multi-Channel Marketing Sri Lanka", url: "/multi-channel-marketing-in-sri-lanka" },
        ]}
        jsonLd={[jsonLd, articleJsonLd]}
      />

      <article className="max-w-4xl mx-auto space-y-12">
        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-card">
          <img src={articleImg} alt="Multi-channel marketing in Sri Lanka - Email, SMS, WhatsApp and Findit.lk" className="w-full h-auto" />
        </div>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            In today's fast-moving digital landscape, businesses in Sri Lanka need more than just a single marketing channel to succeed. Customers interact with brands across multiple platforms, making it essential to adopt a <strong>multi-channel marketing strategy</strong> that delivers consistent messaging and maximum reach.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong>Buzz Connect</strong> introduces a unique, results-driven approach to multi-channel marketing in Sri Lanka, combining direct marketing tools with the power of <strong>Findit.lk</strong> to deliver unmatched visibility and engagement.
          </p>
        </section>

        {/* What Makes Buzz Connect Different */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">What Makes Buzz Connect Different?</h2>
          <p className="text-muted-foreground mb-6">
            Unlike traditional marketing providers, Buzz Connect offers an <strong>integrated marketing solution</strong> that combines:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Email Marketing", link: "/email-marketing" },
              { label: "SMS Marketing", link: "/sms-marketing" },
              { label: "WhatsApp Marketing", link: "/whatsapp-marketing" },
              { label: "Online Advertising & Banners", link: "/online-advertising-sri-lanka" },
              { label: "Findit.lk Promotional Exposure", link: null },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                {item.link ? (
                  <Link to={item.link} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-4">
            This combination allows businesses to reach both targeted audiences and mass markets simultaneously, ensuring higher engagement and faster results.
          </p>
        </section>

        {/* Multi-Channel Marketing Section */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Multi-Channel Marketing – The Future of Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground mb-6">
            Multi-channel marketing is the process of reaching customers through multiple platforms at the same time. Instead of relying on a single channel, businesses can deliver their message through email, mobile, web, and social platforms.
          </p>
          <p className="text-muted-foreground mb-4">With Buzz Connect, this strategy becomes even more powerful by integrating:</p>
          <div className="space-y-3 ml-4">
            {[
              { label: "Email campaigns", link: "/email-marketing" },
              { label: "SMS campaigns", link: "/sms-marketing" },
              { label: "WhatsApp campaigns", link: "/whatsapp-marketing" },
              { label: "Multi-channel advertising packages", link: "/multi-channel-marketing-sri-lanka" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                <Link to={item.link} className="text-foreground hover:text-accent transition-colors font-medium">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-4">
            This ensures your brand stays visible across every touchpoint of the customer journey.
          </p>
        </section>

        {/* Findit.lk Section */}
        <section className="bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-7 h-7 text-accent" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Amplified Reach with Findit.lk</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            One of the biggest advantages of Buzz Connect is its integration with <strong>Findit.lk</strong> — one of Sri Lanka's leading online promotion platforms.
          </p>
          <p className="text-muted-foreground mb-4">Findit.lk allows businesses to:</p>
          <ul className="space-y-2 mb-6">
            {[
              "Promote offers to a large active audience",
              "Gain visibility across multiple categories",
              "Reach users actively searching for products and services",
              "Increase brand awareness with banner advertising",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mb-4">By combining direct marketing channels with Findit.lk exposure, Buzz Connect delivers:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Target, label: "Maximum Reach" },
              { icon: Zap, label: "Higher Engagement" },
              { icon: BarChart3, label: "Better Conversions" },
              { icon: Users, label: "Cost-Effective" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="text-center p-4 rounded-xl bg-background border border-border">
                <Icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <span className="text-sm font-semibold text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Direct Marketing + Mass Exposure */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Direct Marketing + Mass Exposure = Faster Results</h2>
          <p className="text-muted-foreground mb-4">
            Traditional marketing methods often take time to deliver results. Buzz Connect solves this by combining:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">Direct Marketing Tools</h3>
              <p className="text-sm text-muted-foreground">Email, SMS, WhatsApp → Instant reach to thousands within minutes</p>
            </div>
            <div className="p-5 rounded-xl bg-accent/5 border border-accent/20">
              <h3 className="font-semibold text-foreground mb-2">Findit.lk Promotions</h3>
              <p className="text-sm text-muted-foreground">Continuous visibility → Stays visible for a longer duration</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            This hybrid strategy ensures your campaign reaches thousands within minutes, stays visible for a longer duration, and engages both cold and warm audiences.
          </p>
        </section>

        {/* Why Multi-Channel Marketing Works */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why Multi-Channel Marketing Works</h2>
          <p className="text-muted-foreground mb-4">Businesses in Sri Lanka are increasingly adopting multi-channel strategies because:</p>
          <ul className="space-y-2 mb-4">
            {[
              "Customers use multiple platforms daily",
              "Repetition improves brand recall",
              "Different channels serve different purposes",
              "Combined campaigns increase conversion rates",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground">
            With Buzz Connect, all channels are strategically aligned, ensuring consistent messaging and better results.
          </p>
        </section>

        {/* Who Can Benefit */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Who Can Benefit from This Approach?</h2>
          <p className="text-muted-foreground mb-4">Buzz Connect's multi-channel marketing solution is ideal for:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Education institutes",
              "E-commerce & retail",
              "Hotels & travel companies",
              "Real estate developers",
              "Event organizers",
              "SMEs & corporates",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-muted/40 border border-border">
                <Users className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Results You Can Expect */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Results You Can Expect</h2>
          <p className="text-muted-foreground mb-4">By using Buzz Connect's integrated marketing solution, businesses can:</p>
          <ul className="space-y-2">
            {[
              "Reach hundreds of thousands of customers quickly",
              "Generate high-quality leads",
              "Increase brand awareness",
              "Improve marketing ROI",
              "Achieve faster campaign results",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Smart Integration */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Smart Integration Across Services</h2>
          <p className="text-muted-foreground mb-4">Buzz Connect ensures all services work together to create a complete digital marketing ecosystem:</p>
          <div className="space-y-3 ml-4">
            {[
              { label: "Graphic Design Services", link: "/graphic-designing-in-sri-lanka" },
              { label: "SEO Optimization", link: "/seo-sri-lanka" },
              { label: "Website Design & Support", link: "/website-design-sri-lanka" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                <Link to={item.link} className="text-foreground hover:text-accent transition-colors font-medium">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl bg-muted/30 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-10">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-3">
            Ready to Launch Your Multi-Channel Campaign?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Chat with us on WhatsApp and get a free consultation for your next marketing campaign.
          </p>
          <a
            href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20multi-channel%20marketing%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg" className="text-base">
              Chat on WhatsApp <ArrowRight className="ml-1" />
            </Button>
          </a>
        </section>
      </article>
      <div className="container mx-auto px-4">
        <RelatedArticles currentPath="/multi-channel-marketing-in-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default MultiChannelMarketingSriLanka;
