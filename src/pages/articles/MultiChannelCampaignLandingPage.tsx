import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, Mail, Globe, Smartphone, Target, BarChart3, Shield, Zap, TrendingUp, Users, Brain, Eye, Repeat, Search, Building2, GraduationCap, Home, UtensilsCrossed, CalendarDays, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import articleImg from "@/assets/blog/article-multichannel-campaigns.jpg";
import RelatedArticles from "@/components/RelatedArticles";

const WHATSAPP_LAUNCH = "https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20launch%20a%20multi-channel%20campaign.";
const CORE_MESSAGE = "Others send emails. Buzz Connect multiplies visibility.";

const faqs = [
  { q: "What makes Buzz Connect different from traditional email marketing?", a: "Buzz Connect goes beyond email by combining Email, Findit.lk marketplace exposure, and Facebook Story amplification into one integrated campaign — giving your business multiple touchpoints instead of just one." },
  { q: "How many people can Buzz Connect reach?", a: "Buzz Connect campaigns reach over 200,000+ monthly audience through Findit.lk alone, plus 350,000+ email subscribers and targeted social media placements." },
  { q: "Is multi-channel marketing more effective than single-channel?", a: "Yes. Multi-channel campaigns deliver stronger engagement because they reach your audience across multiple platforms, increasing brand recall and conversion potential significantly." },
  { q: "What industries benefit from Buzz Connect campaigns?", a: "All industries benefit — including hotels, education, real estate, restaurants, fashion, finance, e-commerce, healthcare, and events across Sri Lanka." },
  { q: "How do I start a campaign with Buzz Connect?", a: "Simply click 'Launch Your Multi-Channel Campaign' or contact us via WhatsApp for a free consultation. We'll design a multi-channel strategy tailored to your business goals." },
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

const whoIsThisFor = [
  { icon: GraduationCap, label: "Education Institutes" },
  { icon: Briefcase, label: "Job Advertisers" },
  { icon: Home, label: "Real Estate" },
  { icon: Building2, label: "SMEs & Local Businesses" },
  { icon: CalendarDays, label: "Event Promotions" },
  { icon: UtensilsCrossed, label: "Restaurants & Hotels" },
];

const packages = [
  { name: "Starter Campaign", price: "LKR 6,000", desc: "Email + Findit.lk listing", highlight: false },
  { name: "Growth Campaign", price: "LKR 15,000", desc: "Email + Findit.lk + Facebook Story", highlight: true },
  { name: "Advanced Campaign", price: "Custom", desc: "Full multi-channel + premium placement", highlight: false },
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
    headline: "Turn One Campaign Into Multi-Platform Visibility",
    author: { "@type": "Organization", name: "Buzz Connect" },
    publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
    datePublished: "2026-04-07",
    description: "Discover how Buzz Connect's multi-channel campaigns go beyond email to deliver real visibility across Email, Findit.lk, and Facebook — generating more leads for Sri Lankan businesses.",
  }), []);

  return (
    <ServicePageLayout
      badge="Multi-Channel Campaigns"
      title="Turn One Campaign Into Multi-Platform Visibility"
      subtitle="Email + Findit.lk + Social Media — all in one powerful campaign. Reach your audience across platforms, not just inboxes."
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
        {/* HERO IMAGE */}
        <div className="rounded-2xl overflow-hidden shadow-card">
          <img src={articleImg} alt="Multi-channel email campaigns that deliver real visibility - Buzz Connect Sri Lanka" className="w-full h-auto" width={1200} height={675} />
        </div>

        {/* 1. HERO HOOK */}
        <section className="space-y-6">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="flex items-center gap-2 text-sm text-muted-foreground"><Mail className="w-4 h-4 text-accent" /> Email</span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground"><Globe className="w-4 h-4 text-accent" /> Marketplace</span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground"><Smartphone className="w-4 h-4 text-accent" /> Social Media</span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground"><Target className="w-4 h-4 text-accent" /> 200,000+ monthly reach</span>
          </div>
          <p className="text-xl sm:text-2xl font-heading font-bold text-foreground">
            {CORE_MESSAGE}
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Most businesses run <Link to="/" className="text-muted-foreground underline-offset-2 hover:underline">email marketing Sri Lanka</Link> campaigns and hope for the best. But a single-channel approach limits your visibility. Buzz Connect changes the game — your campaign runs across email inboxes, Findit.lk marketplace, and Facebook Stories simultaneously.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP_LAUNCH} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="w-full sm:w-auto shadow-glow">
                Launch Your Multi-Channel Campaign <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link to="/contact-us">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </section>

        {/* 2. COMPARISON CHART (MOVED UP — EARLY CLARITY) */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Buzz Connect vs Traditional Email Marketing</h2>
          <p className="text-muted-foreground">See the difference instantly — {CORE_MESSAGE.toLowerCase()}</p>
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
                        <span className="text-muted-foreground">⚠️ {row.traditional}</span>
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
        </section>

        {/* 3. WHY THIS WORKS — PSYCHOLOGY */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Why Multi-Channel Campaigns Work</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: "First Impressions Aren't Enough", desc: "People rarely act the first time they see your business. Multiple platforms mean multiple chances." },
              { icon: Repeat, title: "Repeated Exposure Builds Trust", desc: "When your audience sees you across email, search, and social — your brand becomes familiar and trusted." },
              { icon: Brain, title: "Multi-Platform = Higher Recall", desc: "Being present on multiple channels increases brand recall by up to 3x compared to single-channel campaigns." },
            ].map((item) => (
              <Card key={item.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 4. HOW IT WORKS — SIMPLIFIED 3 STEPS */}
        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: Mail, title: "We Send Your Campaign", desc: "Targeted email to 350,000+ subscribers across Sri Lanka." },
              { step: "02", icon: Search, title: "We Place Your Brand", desc: "Your business appears on Findit.lk — visible to 200,000+ active searchers." },
              { step: "03", icon: Smartphone, title: "We Boost Visibility", desc: "High-impact Facebook Story placements amplify your reach." },
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
            Send → Place → Boost → <span className="text-accent font-semibold">Results</span>
          </p>
        </section>

        {/* 5. FINDIT.LK POWER SECTION — UNFAIR ADVANTAGE */}
        <section className="space-y-6">
          <div className="rounded-2xl gradient-hero p-8 sm:p-12 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary-foreground">🚀 Powered by Findit.lk — Your Unfair Advantage</h2>
            <p className="text-primary-foreground/80 text-lg">
              Unlike traditional email companies, every Buzz Connect campaign includes exposure on Findit.lk — Sri Lanka's leading promotions marketplace.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "200,000+ monthly active users",
                "High-intent audience searching for services",
                "Category-based exposure for targeted reach",
                "Continuous visibility beyond email campaigns",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>
            <p className="text-primary-foreground/70 text-sm italic">
              This is what sets Buzz Connect apart — a visibility system, not just an email blast.
            </p>
          </div>
        </section>

        {/* 6. WHO IS THIS FOR */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Perfect For</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {whoIsThisFor.map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            Whether you're running <Link to="/social-media-marketing-sri-lanka" className="text-muted-foreground underline-offset-2 hover:underline">social media marketing Sri Lanka</Link> or <Link to="/whatsapp-marketing" className="text-muted-foreground underline-offset-2 hover:underline">WhatsApp marketing Sri Lanka</Link> campaigns, Buzz Connect adds the multi-channel edge that drives real results.
          </p>
        </section>

        {/* 7. BENEFITS */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">What You Get with Buzz Connect</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Increased brand visibility across multiple platforms",
              "Multiple audience touchpoints per campaign",
              "Access to high-intent users on Findit.lk",
              "Extended campaign lifespan beyond a single send",
              "Stronger engagement and conversion potential",
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/10">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 8. TRUST PROOF — REAL NUMBERS */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Trusted by Businesses Across Sri Lanka</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Users, stat: "350,000+", text: "Audience database reach" },
              { icon: Building2, stat: "2,000+", text: "Companies served" },
              { icon: Shield, stat: "Multi-Industry", text: "Proven campaign approach" },
            ].map((item) => (
              <div key={item.text} className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card border border-border/50 text-center">
                <item.icon className="w-6 h-6 text-accent" />
                <span className="text-2xl font-bold text-foreground">{item.stat}</span>
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 9. PRICING ANCHOR */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Campaign Packages</h2>
          <p className="text-muted-foreground">Simple pricing. Maximum visibility.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={`border-border/50 relative ${pkg.highlight ? "ring-2 ring-accent shadow-lg" : "bg-card/50"}`}>
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    🔥 Most Popular
                  </span>
                )}
                <CardContent className="p-6 space-y-4 text-center">
                  <h3 className="font-semibold text-foreground text-lg">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-foreground">{pkg.price}</p>
                  <p className="text-sm text-muted-foreground">{pkg.desc}</p>
                  <a href={WHATSAPP_LAUNCH} target="_blank" rel="noopener noreferrer">
                    <Button variant={pkg.highlight ? "hero" : "hero-outline"} size="lg" className="w-full">
                      Get Started <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 10. FINAL CTA — STRONG */}
        <section className="rounded-2xl gradient-hero p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary-foreground">Ready to Multiply Your Visibility?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            {CORE_MESSAGE} Launch a campaign that reaches your audience across email, marketplace, and social media — all at once.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WHATSAPP_LAUNCH} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="w-full sm:w-auto shadow-glow text-base px-8">
                Launch Your Multi-Channel Campaign <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link to="/contact-us">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto text-base px-8">
                Get More Visibility Today
              </Button>
            </Link>
          </div>
        </section>

        {/* STICKY REMINDER */}
        <p className="text-center text-muted-foreground font-medium italic">
          {CORE_MESSAGE}
        </p>

        {/* FAQs */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">Frequently Asked Questions – Multi-Channel Campaigns</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl border border-border bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <RelatedArticles currentPath="/multi-channel-email-campaigns-sri-lanka" />
      </article>
    </ServicePageLayout>
  );
};

export default MultiChannelCampaignLandingPage;
