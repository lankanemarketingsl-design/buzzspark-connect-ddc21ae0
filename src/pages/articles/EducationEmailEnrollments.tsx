import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, GraduationCap, Mail, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImg from "@/assets/blog/article-education-email-enrollments.jpg";
import RelatedArticles from "@/components/RelatedArticles";

const faqs = [
  { q: "Why is email marketing effective for education in Sri Lanka?", a: "Email marketing allows institutes to communicate directly with interested students, sending course details, intake reminders, and scholarship info—resulting in higher enrollment rates." },
  { q: "How can education institutes generate more student leads?", a: "By combining email marketing with multi-channel strategies including SMS, WhatsApp, and high-intent platforms like Findit.lk, institutes can reach students actively searching for courses." },
  { q: "What types of email campaigns work for education?", a: "Course promotions, intake announcements, scholarship campaigns, open day invitations, and deadline reminders are the most effective campaign types." },
  { q: "Is email marketing cost-effective for education providers?", a: "Yes. Email marketing delivers the highest ROI of any digital channel, making it ideal for education providers with limited marketing budgets." },
];

const EducationEmailEnrollments = () => {
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
    headline: "Education Marketing in Sri Lanka: How Email Campaigns Increase Student Enrollments",
    author: { "@type": "Organization", name: "Buzz Connect" },
    publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
    datePublished: "2026-03-29",
    description: "How email marketing helps education institutes in Sri Lanka increase student enrollments with targeted campaigns, multi-channel strategies, and Findit.lk integration.",
  }), []);

  return (
    <ServicePageLayout
      badge="Article"
      title="Education Marketing in Sri Lanka: How Email Campaigns Increase Student Enrollments"
      subtitle="Targeted email strategies to attract more students and boost enrollment rates for education institutes."
    >
      <SEOHead
        title="Education Email Marketing Sri Lanka | Increase Student Enrollments"
        description="How email marketing increases student enrollments for education institutes in Sri Lanka. Targeted campaigns, multi-channel strategies & Findit.lk integration."
        canonical="/education-email-marketing-enrollments-sri-lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Education Email Marketing", url: "/education-email-marketing-enrollments-sri-lanka" },
        ]}
        jsonLd={[jsonLd, articleJsonLd]}
      />

      <article className="max-w-4xl mx-auto space-y-12">
        <div className="rounded-2xl overflow-hidden shadow-card">
          <img src={articleImg} alt="Education marketing email campaigns to increase student enrollments in Sri Lanka" className="w-full h-auto" />
        </div>

        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The education sector in Sri Lanka is becoming increasingly competitive, with institutes, universities, and training centers all competing for student attention. To stand out, education providers need a strategy that delivers both reach and conversions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> has proven to be one of the most effective tools to generate student inquiries and increase enrollments.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-7 h-7 text-accent" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Why Email Marketing Works for Education</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> allows institutes to communicate directly with students who are already interested in courses.
          </p>
          <p className="text-muted-foreground mb-3">With targeted campaigns, you can:</p>
          <ul className="space-y-2 mb-6">
            {["Promote upcoming intakes", "Send course details instantly", "Remind students about deadlines", "Increase application rates"].map(item => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground">
            👉 Our <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing campaign Sri Lanka</Link> services help education providers reach the right students effectively.
          </p>
        </section>

        <section className="bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-7 h-7 text-accent" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Combine with Multi-Channel Marketing for Better Results</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Relying only on one platform is not enough. Successful education campaigns combine email with other channels like <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link> and <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp</Link>.
          </p>
          <p className="text-muted-foreground">
            👉 Learn how <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing campaigns</Link> work for education providers.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-7 h-7 text-accent" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Industry-Specific Targeting</h2>
          </div>
          <p className="text-muted-foreground mb-4">Education marketing requires targeting:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            {["School leavers", "Working professionals", "Degree seekers"].map(item => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-muted/40 border border-border">
                <Users className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            Using platforms like <strong>Findit.lk</strong>, institutes can reach students actively searching for courses.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Campaign Ideas for Education</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Course promotions", "Intake announcements", "Scholarship campaigns", "Open day invitations"].map(item => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <GraduationCap className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Benefits of Email Marketing for Education</h2>
          <ul className="space-y-2">
            {["Higher student engagement", "Better conversion rates", "Cost-effective lead generation", "Strong brand visibility"].map(item => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions – Education Email Enrollments</h2>
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
            Looking for Education Marketing Services in Sri Lanka?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Increase student enrollments with targeted <Link to="/email-marketing" className="text-accent hover:underline font-bold">email marketing</Link> and <Link to="/education-marketing-sri-lanka" className="text-accent hover:underline font-bold">education marketing</Link> campaigns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/education-marketing-sri-lanka">
              <Button variant="hero-outline" size="lg" className="text-base">Education Marketing <ArrowRight className="ml-1" /></Button>
            </Link>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20education%20email%20marketing%20campaigns." target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base">Chat on WhatsApp <ArrowRight className="ml-1" /></Button>
            </a>
          </div>
        </section>
      </article>
      <div className="container mx-auto px-4">
        <RelatedArticles currentPath="/education-email-marketing-enrollments-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default EducationEmailEnrollments;
