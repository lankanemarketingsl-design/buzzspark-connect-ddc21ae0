import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, Hotel, Mail, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImg from "@/assets/blog/article-hotel-email-bookings.jpg";
import RelatedArticles from "@/components/RelatedArticles";

const faqs = [
  { q: "Why is email marketing effective for hotels in Sri Lanka?", a: "Email marketing allows hotels to reach travelers directly with personalized offers, seasonal deals, and booking reminders—driving direct bookings and reducing dependency on OTAs." },
  { q: "How can hotels increase bookings with email campaigns?", a: "By sending targeted promotions, loyalty rewards, and last-minute deals to segmented audiences, hotels can significantly increase booking rates and guest retention." },
  { q: "What types of email campaigns work for hotels?", a: "Holiday promotions, weekend getaway offers, last-minute deals, loyalty programs, and seasonal packages are the most effective campaign types." },
  { q: "Should hotels combine email with other marketing channels?", a: "Yes. Multi-channel campaigns combining email, SMS, WhatsApp, and Findit.lk deliver maximum reach and higher conversion rates for hospitality businesses." },
];

const HotelEmailBookings = () => {
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
    headline: "Hotel Marketing in Sri Lanka: How Email Campaigns Increase Bookings",
    author: { "@type": "Organization", name: "Buzz Connect" },
    publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
    datePublished: "2026-03-29",
    description: "How email marketing helps hotels in Sri Lanka increase bookings with targeted campaigns, multi-channel strategies, and Findit.lk integration.",
  }), []);

  return (
    <ServicePageLayout
      badge="Article"
      title="Hotel Marketing in Sri Lanka: How Email Campaigns Increase Bookings"
      subtitle="Promote offers, engage travelers, and drive direct bookings with targeted email campaigns."
    >
      <SEOHead
        title="Hotel Email Marketing Sri Lanka | Increase Bookings"
        description="How email marketing increases hotel bookings in Sri Lanka. Targeted campaigns, seasonal promotions, multi-channel strategies & Findit.lk integration for hospitality."
        canonical="/hotel-email-marketing-bookings-sri-lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Hotel Email Marketing", url: "/hotel-email-marketing-bookings-sri-lanka" },
        ]}
        jsonLd={[jsonLd, articleJsonLd]}
      />

      <article className="max-w-4xl mx-auto space-y-12">
        <div className="rounded-2xl overflow-hidden shadow-card">
          <img src={articleImg} alt="Hotel email marketing to increase bookings in Sri Lanka" className="w-full h-auto" />
        </div>

        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The hospitality industry in Sri Lanka is highly competitive, with hotels and travel businesses constantly looking for ways to increase bookings and attract guests.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> is one of the most effective tools to promote offers, engage travelers, and drive direct bookings.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-7 h-7 text-accent" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Why Email Marketing Works for Hotels</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> allows hotels to reach travelers directly with personalized offers.
          </p>
          <p className="text-muted-foreground mb-3">You can:</p>
          <ul className="space-y-2 mb-6">
            {["Promote seasonal deals", "Offer exclusive discounts", "Send booking reminders", "Build customer loyalty"].map(item => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground">
            👉 Our <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing Sri Lanka</Link> services help hotels increase bookings and engagement.
          </p>
        </section>

        <section className="bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-7 h-7 text-accent" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Combine with Multi-Channel Campaigns</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Successful hotel marketing strategies use multiple channels to reach travelers at different stages. Combine <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email</Link> with <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link> and <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp</Link> for maximum impact.
          </p>
          <p className="text-muted-foreground">
            👉 Learn more about <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing campaigns</Link>.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-7 h-7 text-accent" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Target High-Intent Travelers</h2>
          </div>
          <p className="text-muted-foreground">
            Using platforms like <strong>Findit.lk</strong>, hotels can reach users actively searching for travel and accommodation—leading to higher quality bookings.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Campaign Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Holiday promotions", "Weekend getaway offers", "Last-minute deals", "Loyalty programs"].map(item => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <Hotel className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Benefits</h2>
          <ul className="space-y-2">
            {["Increased bookings", "Higher ROI", "Better guest retention", "Reduced dependency on third-party platforms"].map(item => (
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
            Looking for Hotel Marketing Services in Sri Lanka?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Increase bookings with targeted <Link to="/email-marketing" className="text-accent hover:underline font-bold">email marketing</Link> and <Link to="/hotel-marketing-sri-lanka" className="text-accent hover:underline font-bold">hotel marketing</Link> campaigns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/hotel-marketing-sri-lanka">
              <Button variant="hero-outline" size="lg" className="text-base">Hotel Marketing <ArrowRight className="ml-1" /></Button>
            </Link>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20hotel%20email%20marketing%20campaigns." target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base">Chat on WhatsApp <ArrowRight className="ml-1" /></Button>
            </a>
          </div>
        </section>
      </article>
      <div className="container mx-auto px-4">
        <RelatedArticles currentPath="/hotel-email-marketing-bookings-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default HotelEmailBookings;
