import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, PartyPopper, Mail, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImg from "@/assets/blog/article-event-email-attendance.jpg";
import RelatedArticles from "@/components/RelatedArticles";

const faqs = [
  { q: "Why is email marketing effective for events in Sri Lanka?", a: "Email marketing allows event organizers to send targeted invitations, promote event details, and share reminders—resulting in higher attendance rates." },
  { q: "How can event organizers increase attendance with email?", a: "By combining email campaigns with SMS reminders and Findit.lk event listings, organizers can reach interested audiences across multiple channels." },
  { q: "What types of email campaigns work for events?", a: "Event launches, early bird offers, reminder campaigns, post-event follow-ups, and speaker announcements are the most effective campaign types." },
  { q: "Is email marketing cost-effective for events?", a: "Yes. Email marketing is one of the most affordable ways to promote events, delivering high ROI compared to paid advertising." },
];

const EventEmailAttendance = () => {
  const jsonLd = useMemo(() => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }), []);
  const articleJsonLd = useMemo(() => ({ "@context": "https://schema.org", "@type": "Article", headline: "Event Marketing in Sri Lanka: How Email Campaigns Increase Attendance", author: { "@type": "Organization", name: "Buzz Connect" }, publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" }, datePublished: "2026-03-29", description: "How email marketing increases event attendance for workshops, seminars, and training programs in Sri Lanka." }), []);

  return (
    <ServicePageLayout badge="Article" title="Event Marketing in Sri Lanka: How Email Campaigns Increase Attendance" subtitle="Maximize event registrations and attendance with targeted email campaigns and multi-channel promotion.">
      <SEOHead title="Event Email Marketing Sri Lanka | Increase Attendance" description="How email marketing increases attendance for events, workshops & training programs in Sri Lanka. Targeted campaigns & multi-channel promotion strategies." canonical="/event-email-marketing-attendance-sri-lanka" breadcrumbs={[{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "Event Email Marketing", url: "/event-email-marketing-attendance-sri-lanka" }]} jsonLd={[jsonLd, articleJsonLd]} />
      <article className="max-w-4xl mx-auto space-y-12">
        <div className="rounded-2xl overflow-hidden shadow-card"><img src={articleImg} alt="Event email marketing to increase attendance in Sri Lanka" className="w-full h-auto" /></div>
        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">Events, workshops, and training programs require effective promotion to maximize attendance.</p>
          <p className="text-lg text-muted-foreground leading-relaxed"><Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> helps event organizers reach the right audience and ensure high participation.</p>
        </section>
        <section>
          <div className="flex items-center gap-3 mb-4"><Mail className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Why Email Marketing Works for Events</h2></div>
          <ul className="space-y-2 mb-6">{["Send invitations", "Promote event details", "Share reminders", "Increase attendance"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
          <p className="text-muted-foreground">👉 Our <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing Sri Lanka</Link> services help event organizers drive registrations.</p>
        </section>
        <section className="bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4"><Zap className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Multi-Channel Campaigns</h2></div>
          <p className="text-muted-foreground mb-4">Using multiple channels including <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link> and <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp</Link> ensures better reach and engagement.</p>
          <p className="text-muted-foreground">👉 Explore <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing campaigns</Link>.</p>
        </section>
        <section>
          <div className="flex items-center gap-3 mb-4"><Target className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Reach Interested Audiences</h2></div>
          <p className="text-muted-foreground">Platforms like <strong>Findit.lk</strong> help attract users looking for events and training programs in Sri Lanka. 👉 Explore our <Link to="/event-marketing-sri-lanka" className="text-accent hover:underline font-semibold">event marketing Sri Lanka</Link> packages.</p>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Campaign Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{["Event launches", "Early bird offers", "Reminder campaigns", "Post-event follow-ups"].map(item => (<div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border"><PartyPopper className="w-5 h-5 text-accent shrink-0" /><span className="text-sm font-medium text-foreground">{item}</span></div>))}</div>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Benefits</h2>
          <ul className="space-y-2">{["Higher attendance", "Better engagement", "Increased ROI", "Stronger event brand"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions – Event Email Marketing</h2>
          <div className="space-y-4">{faqs.map(faq => (<div key={faq.q} className="p-5 rounded-xl bg-muted/30 border border-border"><h3 className="font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground">{faq.a}</p></div>))}</div>
        </section>
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-10">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-3">Looking for Event Marketing Services in Sri Lanka?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">Increase attendance with targeted <Link to="/email-marketing" className="text-accent hover:underline font-bold">email marketing</Link>, <Link to="/event-marketing-sri-lanka" className="text-accent hover:underline font-bold">event marketing packages</Link> and <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-bold">multi-channel campaigns</Link>.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/event-marketing-sri-lanka"><Button variant="hero-outline" size="lg" className="text-base">Event Marketing <ArrowRight className="ml-1" /></Button></Link>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20event%20email%20marketing%20campaigns." target="_blank" rel="noopener noreferrer"><Button variant="hero" size="lg" className="text-base">Chat on WhatsApp <ArrowRight className="ml-1" /></Button></a>
          </div>
        </section>
      </article>
      <div className="container mx-auto px-4"><RelatedArticles currentPath="/event-email-marketing-attendance-sri-lanka" /></div>
    </ServicePageLayout>
  );
};

export default EventEmailAttendance;
