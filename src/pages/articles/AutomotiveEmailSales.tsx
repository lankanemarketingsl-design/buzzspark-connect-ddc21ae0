import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, Car, Mail, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImg from "@/assets/blog/article-automotive-email-sales.webp";
import RelatedArticles from "@/components/RelatedArticles";

const faqs = [
  { q: "Why is email marketing effective for automotive businesses in Sri Lanka?", a: "Email marketing allows automotive businesses to promote vehicle listings, send service reminders, and share special offers directly to interested buyers and vehicle owners." },
  { q: "How can car dealers increase sales with email?", a: "By combining email campaigns with Findit.lk vehicle listings and multi-channel strategies, dealers can reach high-intent buyers actively searching for vehicles." },
  { q: "What types of email campaigns work for automotive?", a: "Vehicle promotions, service reminders, leasing offers, new model announcements, and seasonal deals are the most effective campaign types." },
  { q: "Is email marketing cost-effective for automotive?", a: "Yes. Email marketing delivers higher ROI than traditional automotive advertising, with the ability to target specific buyer segments." },
];

const AutomotiveEmailSales = () => {
  const jsonLd = useMemo(() => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }), []);
  const articleJsonLd = useMemo(() => ({ "@context": "https://schema.org", "@type": "Article", headline: "Automotive Marketing in Sri Lanka: How Email Campaigns Drive Sales & Service Bookings", author: { "@type": "Organization", name: "Buzz Connect" }, publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" }, datePublished: "2026-03-29", description: "How email marketing drives vehicle sales and service bookings for automotive businesses in Sri Lanka." }), []);

  return (
    <ServicePageLayout badge="Article" title="Automotive Marketing in Sri Lanka: How Email Campaigns Drive Sales & Service Bookings" subtitle="Promote vehicles, services, and offers directly to interested customers with targeted email campaigns.">
      <SEOHead title="Automotive Email Marketing Sri Lanka | Drive Sales" description="How email marketing drives vehicle sales and service bookings for automotive businesses in Sri Lanka. Targeted campaigns & multi-channel strategies." canonical="/automotive-email-marketing-sales-sri-lanka" breadcrumbs={[{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "Automotive Email Marketing", url: "/automotive-email-marketing-sales-sri-lanka" }]} jsonLd={[jsonLd, articleJsonLd]} />
      <article className="max-w-4xl mx-auto space-y-12">
        <div className="rounded-2xl overflow-hidden shadow-card"><img src={articleImg} alt="Automotive email marketing to drive sales in Sri Lanka" className="w-full h-auto" loading="lazy" width={800} height={500} /></div>
        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">The automotive industry in Sri Lanka requires targeted marketing to reach buyers and vehicle owners.</p>
          <p className="text-lg text-muted-foreground leading-relaxed"><Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> helps businesses promote vehicles, services, and offers directly to interested customers.</p>
        </section>
        <section>
          <div className="flex items-center gap-3 mb-4"><Mail className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Why Email Marketing Works for Automotive</h2></div>
          <ul className="space-y-2 mb-6">{["Promote vehicle listings", "Share special offers", "Send service reminders", "Build long-term relationships"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
          <p className="text-muted-foreground">👉 Our <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing campaign Sri Lanka</Link> services help automotive businesses increase leads.</p>
        </section>
        <section className="bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4"><Zap className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Multi-Channel Strategy</h2></div>
          <p className="text-muted-foreground mb-4">Combining email with <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link> and listing platforms increases visibility for your vehicles and services.</p>
          <p className="text-muted-foreground">👉 Learn more about <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing campaigns</Link>.</p>
        </section>
        <section>
          <div className="flex items-center gap-3 mb-4"><Target className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">High-Intent Leads</h2></div>
          <p className="text-muted-foreground">Using <strong>Findit.lk</strong> helps reach users actively searching for vehicles and automotive services.</p>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Automotive Email Campaign Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{["Vehicle promotions", "Service reminders", "Leasing offers", "New model announcements"].map(item => (<div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border"><Car className="w-5 h-5 text-accent shrink-0" /><span className="text-sm font-medium text-foreground">{item}</span></div>))}</div>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Benefits of Automotive Email Marketing</h2>
          <ul className="space-y-2">{["Higher lead quality", "Increased conversions", "Better customer retention", "Lower advertising costs"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions – Automotive Email Marketing</h2>
          <div className="space-y-4">{faqs.map(faq => (<div key={faq.q} className="p-5 rounded-xl bg-muted/30 border border-border"><h3 className="font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground">{faq.a}</p></div>))}</div>
        </section>
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-10">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-3">Looking for Automotive Marketing Services in Sri Lanka?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">Drive vehicle sales with targeted <Link to="/email-marketing" className="text-accent hover:underline font-bold">email marketing</Link> and <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-bold">multi-channel campaigns</Link>.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/email-marketing"><Button variant="hero-outline" size="lg" className="text-base">Email Marketing <ArrowRight className="ml-1" /></Button></Link>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20automotive%20email%20marketing%20campaigns." target="_blank" rel="noopener noreferrer"><Button variant="hero" size="lg" className="text-base">Chat on WhatsApp <ArrowRight className="ml-1" /></Button></a>
          </div>
        </section>
      </article>
      <div className="container mx-auto px-4"><RelatedArticles currentPath="/automotive-email-marketing-sales-sri-lanka" /></div>
    </ServicePageLayout>
  );
};

export default AutomotiveEmailSales;
