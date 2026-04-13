import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, HeartPulse, Mail, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImg from "@/assets/blog/article-healthcare-email-engagement.webp";
import RelatedArticles from "@/components/RelatedArticles";

const faqs = [
  { q: "Why is email marketing effective for healthcare in Sri Lanka?", a: "Email marketing enables clinics and hospitals to send appointment reminders, promote health packages, and share medical updates—building trust and improving patient engagement." },
  { q: "How can healthcare providers improve patient communication?", a: "By combining email marketing with SMS and WhatsApp, healthcare providers can ensure patients receive important information through their preferred channel." },
  { q: "What types of email campaigns work for healthcare?", a: "Health checkup promotions, clinic announcements, wellness programs, appointment reminders, and seasonal health tips are the most effective campaign types." },
  { q: "Is email marketing GDPR-compliant for healthcare?", a: "Yes, when done correctly. Email marketing platforms allow consent-based communication, ensuring compliance with privacy regulations." },
];

const HealthcareEmailEngagement = () => {
  const jsonLd = useMemo(() => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }), []);
  const articleJsonLd = useMemo(() => ({ "@context": "https://schema.org", "@type": "Article", headline: "Healthcare Marketing in Sri Lanka: How Email Campaigns Improve Patient Engagement", author: { "@type": "Organization", name: "Buzz Connect" }, publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" }, datePublished: "2026-03-29", description: "How email marketing improves patient engagement for healthcare providers in Sri Lanka." }), []);

  return (
    <ServicePageLayout badge="Article" title="Healthcare Marketing in Sri Lanka: How Email Campaigns Improve Patient Engagement" subtitle="Connect directly with patients through targeted email campaigns for clinics, hospitals, and wellness centers.">
      <SEOHead title="Healthcare Email Marketing Sri Lanka | Patient Engagement" description="How email marketing improves patient engagement for healthcare providers in Sri Lanka. Appointment reminders, health promotions & multi-channel strategies." canonical="/healthcare-email-marketing-engagement-sri-lanka" breadcrumbs={[{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "Healthcare Email Marketing", url: "/healthcare-email-marketing-engagement-sri-lanka" }]} jsonLd={[jsonLd, articleJsonLd]} />
      <article className="max-w-4xl mx-auto space-y-12">
        <div className="rounded-2xl overflow-hidden shadow-card"><img src={articleImg} alt="Healthcare email marketing to improve patient engagement in Sri Lanka" className="w-full h-auto" loading="lazy" width={800} height={500} /></div>
        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">Healthcare providers in Sri Lanka need effective ways to communicate with patients and promote services.</p>
          <p className="text-lg text-muted-foreground leading-relaxed"><Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> enables clinics, hospitals, and wellness centers to connect directly with their audience.</p>
        </section>
        <section>
          <div className="flex items-center gap-3 mb-4"><Mail className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Why Email Marketing Works for Healthcare</h2></div>
          <ul className="space-y-2 mb-6">{["Send appointment reminders", "Promote health packages", "Share medical updates", "Build patient trust"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
          <p className="text-muted-foreground">👉 Our <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing packages in Sri Lanka</Link> help healthcare providers improve engagement.</p>
        </section>
        <section className="bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4"><Zap className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Healthcare Multi-Channel Marketing Advantage</h2></div>
          <p className="text-muted-foreground mb-4">Using multiple channels ensures patients receive important information through <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp</Link>, and email.</p>
          <p className="text-muted-foreground">👉 Learn more about <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing campaigns</Link>.</p>
        </section>
        <section>
          <div className="flex items-center gap-3 mb-4"><Target className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Target the Right Audience</h2></div>
          <p className="text-muted-foreground">Platforms like <strong>Findit.lk</strong> help reach people actively searching for healthcare services in Sri Lanka.</p>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Healthcare Email Campaign Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{["Health checkup promotions", "Clinic announcements", "Wellness programs", "Seasonal health tips"].map(item => (<div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border"><HeartPulse className="w-5 h-5 text-accent shrink-0" /><span className="text-sm font-medium text-foreground">{item}</span></div>))}</div>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Benefits of Healthcare Email Marketing</h2>
          <ul className="space-y-2">{["Better patient communication", "Increased appointments", "Stronger trust", "Lower marketing costs"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions – Healthcare Email Marketing</h2>
          <div className="space-y-4">{faqs.map(faq => (<div key={faq.q} className="p-5 rounded-xl bg-muted/30 border border-border"><h3 className="font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground">{faq.a}</p></div>))}</div>
        </section>
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-10">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-3">Looking for Healthcare Marketing Services in Sri Lanka?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">Improve patient engagement with targeted <Link to="/email-marketing" className="text-accent hover:underline font-bold">email marketing</Link> and <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-bold">multi-channel campaigns</Link>.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/email-marketing"><Button variant="hero-outline" size="lg" className="text-base">Email Marketing <ArrowRight className="ml-1" /></Button></Link>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20healthcare%20email%20marketing%20campaigns." target="_blank" rel="noopener noreferrer"><Button variant="hero" size="lg" className="text-base">Chat on WhatsApp <ArrowRight className="ml-1" /></Button></a>
          </div>
        </section>
      </article>
      <div className="container mx-auto px-4"><RelatedArticles currentPath="/healthcare-email-marketing-engagement-sri-lanka" /></div>
    </ServicePageLayout>
  );
};

export default HealthcareEmailEngagement;
