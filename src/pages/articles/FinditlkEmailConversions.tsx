import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, Globe, Mail, GraduationCap, Building2, Hotel, ShoppingCart, Car, Briefcase, HeartPulse, HardHat, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImg from "@/assets/blog/article-finditlk-email-conversions.webp";
import RelatedArticles from "@/components/RelatedArticles";

const faqs = [
  { q: "What is Findit.lk?", a: "Findit.lk is one of Sri Lanka's leading local platforms where users actively search for services, courses, jobs, and business opportunities—attracting high-intent audiences." },
  { q: "How does combining Findit.lk with email marketing increase conversions?", a: "Findit.lk captures high-intent users actively searching for services. Email marketing then nurtures these leads with follow-ups, promotions, and personalized content—resulting in higher conversions." },
  { q: "Which industries benefit most from this strategy?", a: "Education, real estate, hotels, e-commerce, automotive, healthcare, construction, recruitment, and event organizers all see significant improvements." },
  { q: "Is this strategy cost-effective for SMEs?", a: "Yes. Both Findit.lk listings and email marketing are highly cost-effective compared to paid social media ads, delivering lower cost per lead and higher ROI." },
];

const industries = [
  { icon: GraduationCap, title: "Education Industry", items: ["Course promotions", "Student lead generation", "Intake reminders"], note: "High conversion due to urgency + intent" },
  { icon: Building2, title: "Real Estate Industry", items: ["Property listings", "Investment opportunities", "Buyer follow-ups"], note: "Email nurtures long decision cycles" },
  { icon: Hotel, title: "Hotels & Travel", items: ["Seasonal promotions", "Tour packages", "Last-minute deals"], note: "Email boosts repeat bookings" },
  { icon: ShoppingCart, title: "E-commerce & Retail", items: ["Product promotions", "Discount campaigns", "Cart recovery emails"], note: "Strong for repeat purchases" },
  { icon: Car, title: "Automotive Industry", items: ["Vehicle sales", "Leasing offers", "Service reminders"], note: "High-value leads from Findit.lk" },
  { icon: Briefcase, title: "Job & Recruitment", items: ["Job postings", "Candidate sourcing", "Employer branding"], note: "Findit.lk intent + email follow-ups = faster hiring" },
  { icon: HeartPulse, title: "Healthcare & Wellness", items: ["Clinic promotions", "Appointment reminders", "Health packages"], note: "Trust + direct communication improves conversions" },
  { icon: HardHat, title: "Construction & Property Services", items: ["Contractors", "Interior design services", "Property development"], note: "Local targeting increases qualified leads" },
  { icon: PartyPopper, title: "Events & Training Programs", items: ["Workshops", "Seminars", "Corporate training"], note: "Email ensures attendance + reminders" },
];

const FinditlkEmailConversions = () => {
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
    headline: "How Findit.lk + Email Marketing Increases Conversions in Sri Lanka",
    author: { "@type": "Organization", name: "Buzz Connect" },
    publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
    datePublished: "2026-03-29",
    description: "Discover how combining Findit.lk's high-intent audience with email marketing delivers higher conversions and better ROI for Sri Lankan businesses across 10+ industries.",
  }), []);

  return (
    <ServicePageLayout
      badge="Article"
      title="How Findit.lk + Email Marketing Increases Conversions in Sri Lanka"
      subtitle="Combine high-intent search traffic with direct email campaigns for maximum lead generation and ROI."
    >
      <SEOHead
        title="Findit.lk + Email Marketing Conversions Sri Lanka | BuzzConnect"
        description="How combining Findit.lk's high-intent audience with email marketing increases conversions for Sri Lankan businesses. 10+ industry use cases with proven results."
        canonical="/finditlk-email-marketing-conversions-sri-lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Findit.lk + Email Marketing", url: "/finditlk-email-marketing-conversions-sri-lanka" },
        ]}
        jsonLd={[jsonLd, articleJsonLd]}
      />

      <article className="max-w-4xl mx-auto space-y-12">
        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-card">
          <img src={articleImg} alt="Findit.lk combined with email marketing for higher conversions in Sri Lanka" className="w-full h-auto" loading="lazy" width={800} height={500} />
        </div>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            In Sri Lanka's competitive digital landscape, businesses are constantly looking for ways to generate more leads and improve conversions. While many rely on social media, the most effective strategy today is combining high-intent platforms like <strong>Findit.lk</strong> with direct communication channels In Sri Lanka's competitive digital landscape, businesses are constantly looking for ways to generate more leads and improve conversions. While many rely on social media, the most effective strategy today is combining high-intent platforms like <strong>Findit.lk</strong> with direct communication channels such as <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing Sri Lanka</Link>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This powerful combination helps businesses reach the right audience at the right time—resulting in higher engagement and better ROI.
          </p>
        </section>

        {/* What is Findit.lk */}
        <section className="bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-7 h-7 text-accent" />
            <h2 className="font-heading text-2xl font-bold text-foreground">What is Findit.lk and Why It Matters?</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Findit.lk is one of Sri Lanka's leading local platforms where users actively search for services, courses, jobs, and business opportunities.
          </p>
          <p className="text-muted-foreground">
            Unlike social media platforms, where users scroll passively, <strong>Findit.lk attracts users with clear intent</strong>—they are already looking for something specific.
          </p>
        </section>

        {/* What is Email Marketing */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-7 h-7 text-accent" />
            <h2 className="font-heading text-2xl font-bold text-foreground">What is Email Marketing for Findit.lk Conversions?</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> is a direct communication channel that allows businesses to send targeted messages to a selected audience.
          </p>
          <p className="text-muted-foreground mb-3">It is widely used for:</p>
          <ul className="space-y-2 mb-4">
            {["Promotions and offers", "Course awareness campaigns", "Product launches", "Customer retention"].map(item => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground">
            👉 Explore professional <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing campaigns in Sri Lanka</Link>.
          </p>
        </section>

        {/* Why Combining Works */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Why Combining Findit.lk + Email Marketing Works</h2>
          <div className="space-y-6">
            <div className="p-5 rounded-xl bg-accent/5 border border-accent/20">
              <h3 className="font-semibold text-foreground mb-2">1. Capture High-Intent Leads from Findit.lk</h3>
              <p className="text-sm text-muted-foreground">Users on Findit.lk are actively searching, which means they are more likely to convert. Businesses gain access to qualified prospects instead of cold audiences.</p>
            </div>
            <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">2. Nurture Leads Through Email Campaigns</h3>
              <p className="text-sm text-muted-foreground mb-3">Once leads are captured, <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing</Link> helps you:</p>
              <ul className="space-y-1">
                {["Follow up instantly", "Share detailed information", "Promote offers and updates"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-2">This builds trust and moves users toward conversion.</p>
            </div>
            <div className="p-5 rounded-xl bg-muted/50 border border-border">
              <h3 className="font-semibold text-foreground mb-2">3. Multi-Touchpoint Engagement</h3>
              <p className="text-sm text-muted-foreground mb-2">A user may:</p>
              <ul className="space-y-1 mb-2">
                {["Discover your business on Findit.lk", "Receive an email campaign", "Get reminders via SMS or WhatsApp"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                👉 Learn more: <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing campaigns in Sri Lanka</Link>
              </p>
            </div>
            <div className="p-5 rounded-xl bg-muted/50 border border-border">
              <h3 className="font-semibold text-foreground mb-2">4. Higher Conversion Rates Than Social Media</h3>
              <p className="text-sm text-muted-foreground">Unlike passive scrolling on social platforms, this strategy targets active search users (Findit.lk) + direct communication users (Email) = higher conversions.</p>
            </div>
            <div className="p-5 rounded-xl bg-muted/50 border border-border">
              <h3 className="font-semibold text-foreground mb-2">5. Better Audience Targeting</h3>
              <p className="text-sm text-muted-foreground">You can target users by category, segment email audiences, and personalize campaigns for maximum impact.</p>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Industries That Benefit Most from Findit.lk + Email Marketing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map(({ icon: Icon, title, items, note }) => (
              <div key={title} className="p-5 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground text-sm">{title}</h3>
                </div>
                <ul className="space-y-1 mb-3">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-accent shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-accent font-medium">👉 {note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Benefits */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Key Benefits of This Strategy</h2>
          <ul className="space-y-2">
            {["Higher quality leads", "Increased engagement", "Better conversion rates", "Lower cost per lead", "Stronger brand trust"].map(item => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions – Findit.lk Email Conversions</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
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
            Ready to Increase Conversions with Findit.lk + Email Marketing?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            BuzzConnect combines <Link to="/email-marketing" className="text-accent hover:underline font-bold">email marketing companies in Sri Lanka</Link> with Findit.lk exposure and <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-bold">multi-channel campaigns</Link> for maximum results. exposure and <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-bold">multi-channel campaigns</Link> for maximum results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/email-marketing">
              <Button variant="hero-outline" size="lg" className="text-base">
                Email Marketing <ArrowRight className="ml-1" />
              </Button>
            </Link>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20Findit.lk%20%2B%20email%20marketing%20campaigns." target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base">
                Chat on WhatsApp <ArrowRight className="ml-1" />
              </Button>
            </a>
          </div>
        </section>
      </article>
      <div className="container mx-auto px-4">
        <RelatedArticles currentPath="/finditlk-email-marketing-conversions-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default FinditlkEmailConversions;
