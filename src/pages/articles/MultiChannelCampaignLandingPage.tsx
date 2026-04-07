import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, Mail, Globe, Smartphone, Target, BarChart3, Shield, Zap, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import articleImg from "@/assets/blog/article-multichannel-campaigns.jpg";
import RelatedArticles from "@/components/RelatedArticles";

const faqs = [
  { q: "What makes Buzz Connect different from traditional email marketing?", a: "Buzz Connect goes beyond email by combining Email, Findit.lk marketplace exposure, and Facebook Story amplification into one integrated campaign — giving your business multiple touchpoints instead of just one." },
  { q: "How many people can Buzz Connect reach?", a: "Buzz Connect campaigns reach over 200,000+ monthly audience through Findit.lk alone, plus 350,000+ email subscribers and targeted social media placements." },
  { q: "Is multi-channel marketing more effective than single-channel?", a: "Yes. Multi-channel campaigns deliver stronger engagement because they reach your audience across multiple platforms, increasing brand recall and conversion potential significantly." },
  { q: "What industries benefit from Buzz Connect campaigns?", a: "All industries benefit — including hotels, education, real estate, restaurants, fashion, finance, e-commerce, healthcare, and events across Sri Lanka." },
  { q: "How do I start a campaign with Buzz Connect?", a: "Simply click 'Launch Your Campaign Now' or contact us via WhatsApp for a free consultation. We'll design a multi-channel strategy tailored to your business goals." },
];

const whyChoosePoints = [
  { icon: Globe, title: "Multi-Channel Promotion", desc: "Your campaign runs across email, marketplace, and social media simultaneously." },
  { icon: TrendingUp, title: "Higher Visibility", desc: "Multiple platforms mean more impressions and stronger brand recall." },
  { icon: Users, title: "Active Search Audiences", desc: "Reach users actively searching for products and services on Findit.lk." },
  { icon: Target, title: "Stronger Lead Potential", desc: "More touchpoints create more opportunities for customer action." },
];

const comparisonData = [
  { feature: "Email Campaign", traditional: true, buzz: true },
  { feature: "Social Media Sharing", traditional: "Basic / Limited", buzz: "Targeted Facebook Story Promotion" },
  { feature: "Marketplace Exposure", traditional: false, buzz: "Findit.lk (200,000+ monthly audience)" },
  { feature: "Multi-Channel Strategy", traditional: false, buzz: true },
  { feature: "Audience Discovery", traditional: "Limited", buzz: "Active Search-Based Users" },
  { feature: "Campaign Visibility", traditional: "One-Time Exposure", buzz: "Multiple Touchpoints" },
  { feature: "Lead Generation Focus", traditional: "Basic Approach", buzz: "Strong Conversion Focus" },
];

const benefits = [
  "Increased brand visibility across multiple platforms",
  "Multiple audience touchpoints per campaign",
  "Access to high-intent users on Findit.lk",
  "Extended campaign lifespan beyond a single send",
  "Stronger engagement and conversion potential",
];

const MultiChannelCampaignLandingPage = () => {
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
    headline: "Multi-Channel Email Campaigns That Deliver Real Visibility",
    author: { "@type": "Organization", name: "Buzz Connect" },
    publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
    datePublished: "2026-04-07",
    description: "Discover how Buzz Connect's multi-channel campaigns go beyond email to deliver real visibility across Email, Findit.lk, and Facebook — generating more leads for Sri Lankan businesses.",
  }), []);

  return (
    <ServicePageLayout
      badge="Article"
      title="Multi-Channel Email Campaigns That Deliver Real Visibility"
      subtitle="Go beyond email with a campaign that reaches your audience across multiple high-impact platforms."
    >
      <SEOHead
        title="Multi-Channel Email Campaigns Sri Lanka | Buzz Connect"
        description="Buzz Connect multi-channel campaigns combine Email, Findit.lk & Facebook Story promotion to deliver real visibility. 200,000+ monthly audience reach for Sri Lankan businesses."
        canonical="/multi-channel-email-campaigns-sri-lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Multi-Channel Email Campaigns", url: "/multi-channel-email-campaigns-sri-lanka" },
        ]}
        jsonLd={[jsonLd, articleJsonLd]}
      />

      <article className="max-w-4xl mx-auto space-y-16">
        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-card">
          <img src={articleImg} alt="Multi-channel email campaigns that deliver real visibility - Buzz Connect Sri Lanka" className="w-full h-auto" width={1200} height={675} />
        </div>

        {/* SECTION 1: Hero intro with CTAs */}
        <section className="space-y-6">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="flex items-center gap-2 text-sm text-muted-foreground"><Mail className="w-4 h-4 text-accent" /> Email</span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground"><Globe className="w-4 h-4 text-accent" /> Marketplace</span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground"><Smartphone className="w-4 h-4 text-accent" /> Social Media</span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground"><Target className="w-4 h-4 text-accent" /> 200,000+ monthly reach</span>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Most businesses run email campaigns and hope for the best. But in today's competitive landscape, a single-channel approach limits your visibility and engagement. Buzz Connect changes the game by combining <Link to="/" className="text-muted-foreground underline-offset-2 hover:underline">email marketing Sri Lanka</Link> with Findit.lk marketplace exposure and Facebook Story amplification — ensuring your business is seen more often, by more people, across more platforms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're launching a new product, promoting a service, or building brand awareness, Buzz Connect's multi-channel campaigns are designed to deliver real, measurable visibility for businesses across Sri Lanka.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20launching%20a%20multi-channel%20campaign." target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="w-full sm:w-auto shadow-glow">
                Launch Your Campaign Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link to="/contact-us">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </section>

        {/* SECTION 2: Why Businesses Choose Buzz Connect */}
        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Why Businesses Choose Buzz Connect</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyChoosePoints.map((point) => (
              <Card key={point.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* SECTION 3: Problem → Solution */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">The Problem with Single-Channel Campaigns</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-destructive text-xl">✕</span> The Problem
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Most campaigns rely on a single platform, limiting visibility and engagement. Your message gets sent once, seen by a fraction of your audience, and quickly forgotten. There's no reinforcement, no discovery, and no multi-touchpoint strategy.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" /> The Buzz Connect Solution
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Buzz Connect expands your campaign across multiple channels — email inboxes, Findit.lk search results, and Facebook Stories — ensuring your business is seen more often and remembered longer. More visibility means more interest and more customers.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: How It Works */}
        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">How Buzz Connect Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: Mail, title: "Targeted Email Campaign", desc: "Your message reaches the right audience directly in their inbox — 350,000+ corporate subscribers across Sri Lanka." },
              { step: "02", icon: Globe, title: "Findit.lk Promotion", desc: "Your business appears in relevant categories on Findit.lk with 200,000+ monthly active users searching for products and services." },
              { step: "03", icon: Smartphone, title: "Facebook Story Amplification", desc: "High-visibility Facebook Story placements capture attention and drive engagement beyond the email inbox." },
            ].map((item) => (
              <Card key={item.step} className="border-border/50 bg-card/50 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">Step {item.step}</span>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground font-medium text-lg">
            More visibility → More interest → More customers
          </p>
        </section>

        {/* SECTION 5: Comparison Table */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Buzz Connect vs Traditional Email Marketing</h2>
          <p className="text-muted-foreground">See how a Buzz Connect multi-channel campaign compares to traditional single-channel <Link to="/sms-marketing" className="text-muted-foreground underline-offset-2 hover:underline">SMS marketing Sri Lanka</Link> and email-only approaches.</p>
          <div className="rounded-2xl border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Feature</TableHead>
                  <TableHead className="font-semibold text-center">Traditional Companies</TableHead>
                  <TableHead className="font-semibold text-center">Buzz Connect</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell className="text-center">
                      {row.traditional === true ? (
                        <span className="text-accent">✅ Yes</span>
                      ) : row.traditional === false ? (
                        <span className="text-destructive">❌ Not Available</span>
                      ) : (
                        <span className="text-yellow-600">⚠️ {row.traditional}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.buzz === true ? (
                        <span className="text-accent">✅ Yes</span>
                      ) : (
                        <span className="text-accent">✅ {row.buzz}</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Buzz Connect enhances your campaign by expanding visibility across multiple platforms — increasing engagement and opportunities for customer action. Unlike traditional email-only companies, every Buzz Connect campaign includes marketplace and social media amplification at no extra complexity.
          </p>
        </section>

        {/* SECTION 6: Benefits */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">What You Get with Buzz Connect</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/10">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            With <Link to="/whatsapp-marketing" className="text-muted-foreground underline-offset-2 hover:underline">WhatsApp marketing Sri Lanka</Link> and <Link to="/social-media-marketing-sri-lanka" className="text-muted-foreground underline-offset-2 hover:underline">social media marketing Sri Lanka</Link> integrated into your strategy, Buzz Connect ensures every campaign maximises its potential reach and impact.
          </p>
        </section>

        {/* SECTION 7: Trust */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Trusted by Growing Businesses Across Sri Lanka</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, text: "Campaigns across multiple industries" },
              { icon: Users, text: "Thousands of users reached monthly" },
              { icon: Shield, text: "Proven multi-channel approach" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            From hotels and education institutions to real estate developers and fashion brands, businesses across Sri Lanka trust Buzz Connect to amplify their marketing campaigns and generate real results.
          </p>
        </section>

        {/* SECTION 8: Final CTA */}
        <section className="rounded-2xl gradient-hero p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary-foreground">Ready to Expand Your Reach?</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Launch a campaign that goes beyond email and reaches your audience across multiple platforms. More visibility, more engagement, more customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20start%20a%20multi-channel%20campaign." target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="w-full sm:w-auto shadow-glow text-base px-8">
                Start Your Campaign Today <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link to="/contact-us">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto text-base px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>

        {/* SECTION 9: Sticky reminder text */}
        <p className="text-center text-muted-foreground font-medium italic">
          Don't just run a campaign — expand it with Buzz Connect.
        </p>

        {/* FAQs */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl border border-border bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <RelatedArticles
          articles={[
            { title: "Multi-Channel Marketing in Sri Lanka", path: "/multi-channel-marketing-in-sri-lanka" },
            { title: "Multi-Channel vs Facebook Marketing", path: "/multi-channel-vs-facebook-sri-lanka" },
            { title: "Findit.lk + Email Marketing Conversions", path: "/finditlk-email-marketing-conversions-sri-lanka" },
          ]}
        />
      </article>
    </ServicePageLayout>
  );
};

export default MultiChannelCampaignLandingPage;
