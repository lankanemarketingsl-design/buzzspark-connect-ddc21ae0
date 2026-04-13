import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, Briefcase, Mail, Zap, Target, Star, TrendingUp, Users, Rocket, Phone, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import articleImg from "@/assets/blog/article-recruitment-email-hiring.jpg";
import RelatedArticles from "@/components/RelatedArticles";

const faqs = [
  { q: "Why is email marketing effective for recruitment in Sri Lanka?", a: "Email marketing allows employers to reach targeted candidates directly with job vacancies, application reminders, and employer branding content." },
  { q: "How can companies speed up hiring with email?", a: "By combining email campaigns with SMS alerts and Findit.lk job listings, companies can reach active job seekers faster and improve candidate quality." },
  { q: "What types of email campaigns work for recruitment?", a: "Job alerts, hiring campaigns, walk-in interview promotions, and employer branding newsletters are the most effective campaign types." },
  { q: "Is email marketing cost-effective for hiring?", a: "Yes. Email marketing significantly reduces cost per hire compared to traditional recruitment methods and paid job portals." },
];

const packages = [
  { name: "Starter Hiring Campaign", price: "LKR 12,000", best: "Best for quick hiring needs", features: ["Findit.lk job listing", "Facebook campaign (basic targeting)", "WhatsApp / simple apply method"] },
  { name: "Growth Hiring Campaign", price: "LKR 25,000", best: "Ideal for consistent hiring", highlight: true, features: ["Featured placement on Findit.lk", "Facebook + Story promotions", "Lead form integration", "Increased campaign reach"] },
  { name: "Pro Hiring Campaign", price: "LKR 45,000", best: "For high-demand roles", features: ["Premium category visibility on Findit.lk", "Advanced Facebook targeting", "Multi-placement promotion strategy", "Optimized application flow"] },
  { name: "Mass Hiring Campaign", price: "Custom", best: "For bulk recruitment & scaling", features: ["Multi-platform promotion", "High-reach campaign setup", "Multiple ad creatives", "Dedicated campaign management"] },
];

const addOns = ["Priority campaign boosting", "Creative design for job ads", "Featured placement upgrades", "Application handling support"];

const RecruitmentEmailHiring = () => {
  const jsonLd = useMemo(() => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }), []);
  const articleJsonLd = useMemo(() => ({ "@context": "https://schema.org", "@type": "Article", headline: "Recruitment Marketing in Sri Lanka: How Email Campaigns Speed Up Hiring", author: { "@type": "Organization", name: "Buzz Connect" }, publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" }, datePublished: "2026-03-29", description: "How email marketing helps companies in Sri Lanka speed up hiring with targeted recruitment campaigns." }), []);

  return (
    <ServicePageLayout badge="Article" title="Recruitment Marketing in Sri Lanka: How Email Campaigns Speed Up Hiring" subtitle="Reach the right candidates faster with targeted email campaigns and multi-channel recruitment strategies.">
      <SEOHead title="Recruitment Email Marketing Sri Lanka | Speed Up Hiring" description="How email marketing speeds up hiring for companies in Sri Lanka. Targeted job campaigns, candidate sourcing & multi-channel recruitment strategies." canonical="/recruitment-email-marketing-hiring-sri-lanka" breadcrumbs={[{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "Recruitment Email Marketing", url: "/recruitment-email-marketing-hiring-sri-lanka" }]} jsonLd={[jsonLd, articleJsonLd]} />
      <article className="max-w-4xl mx-auto space-y-12">
        <div className="rounded-2xl overflow-hidden shadow-card"><img src={articleImg} alt="Recruitment email marketing to speed up hiring in Sri Lanka" className="w-full h-auto" /></div>
        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed"><Link to="/staff-recruitment-campaigns-sri-lanka" className="text-muted-foreground">Recruitment Sri Lanka</Link> requires reaching the right candidates quickly. Traditional job postings alone are not enough.</p>
          <p className="text-lg text-muted-foreground leading-relaxed"><Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> helps employers connect directly with job seekers and improve hiring efficiency.</p>
        </section>
        <section>
          <div className="flex items-center gap-3 mb-4"><Mail className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Why Email Marketing Works for Recruitment</h2></div>
          <ul className="space-y-2 mb-6">{["Reach targeted candidates", "Promote job vacancies", "Send application reminders", "Build employer branding"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
          <p className="text-muted-foreground">👉 Our <Link to="/email-marketing" className="text-accent hover:underline font-semibold">best email marketing companies in Sri Lanka</Link> help companies attract quality candidates.</p>
        </section>
        <section className="bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4"><Zap className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Multi-Channel Approach</h2></div>
          <p className="text-muted-foreground mb-4">Combining email with <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link> and job platforms improves results significantly.</p>
          <p className="text-muted-foreground">👉 Explore <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing campaigns</Link>.</p>
        </section>
        <section>
          <div className="flex items-center gap-3 mb-4"><Target className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">High-Intent Candidate Reach</h2></div>
          <p className="text-muted-foreground">Using <strong>Findit.lk</strong>, companies can reach active job seekers who are already looking for opportunities.</p>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Recruitment Email Campaign Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{["Job alerts", "Hiring campaigns", "Walk-in interview promotions", "Employer branding newsletters"].map(item => (<div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border"><Briefcase className="w-5 h-5 text-accent shrink-0" /><span className="text-sm font-medium text-foreground">{item}</span></div>))}</div>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Benefits of Recruitment Email Marketing</h2>
          <ul className="space-y-2">{["Faster hiring", "Better candidate quality", "Reduced hiring costs", "Stronger employer brand"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
        </section>

        {/* RECRUITMENT CAMPAIGN PACKAGES */}
        <section className="space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3"><Rocket className="w-8 h-8 text-accent" /><h2 className="font-heading text-3xl font-bold text-foreground">Email-Based Recruitment Campaign Packages</h2></div>
            <p className="text-accent font-semibold text-lg">🎯 Designed for Visibility, Reach & Faster Hiring</p>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Buzz Connect recruitment campaigns are built to give your job vacancies maximum exposure across multiple platforms, helping you attract more candidates and fill roles efficiently.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={`relative overflow-hidden transition-all hover:shadow-lg ${pkg.highlight ? "border-accent border-2 shadow-md" : ""}`}>
                {pkg.highlight && (
                  <div className="absolute top-0 right-0 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-bl-lg">Most Popular</div>
                )}
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-foreground">{pkg.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{pkg.best}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t border-border">
                    <span className="text-2xl font-bold text-accent">{pkg.price}</span>
                  </div>
                  <a href={`https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20recruitment%20package.`} target="_blank" rel="noopener noreferrer">
                    <Button variant="hero" size="lg" className="w-full text-sm mt-2">Get Started <ArrowRight className="ml-1" /></Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4"><TrendingUp className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">What You Get</h2></div>
          <p className="text-muted-foreground mb-4">Each campaign is designed to deliver:</p>
          <ul className="space-y-2">{["Strong visibility across platforms", "Reach to active job seekers", "Consistent promotion throughout the campaign", "Increased chances of receiving applications"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
        </section>

        {/* WHY THIS WORKS */}
        <section>
          <div className="flex items-center gap-3 mb-4"><Users className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Why This Works</h2></div>
          <p className="text-muted-foreground">By combining <strong>Findit.lk</strong> exposure with targeted <Link to="/social-media-marketing-sri-lanka" className="text-muted-foreground underline-offset-2 hover:underline">social media marketing Sri Lanka</Link> campaigns, your job vacancies are seen more often — helping you attract candidates faster and more effectively.</p>
        </section>

        {/* ADD-ONS */}
        <section>
          <div className="flex items-center gap-3 mb-4"><Plus className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Optional Recruitment Add-Ons</h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {addOns.map(item => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <Star className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions – Recruitment Email Marketing</h2>
          <div className="space-y-4">{faqs.map(faq => (<div key={faq.q} className="p-5 rounded-xl bg-muted/30 border border-border"><h3 className="font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground">{faq.a}</p></div>))}</div>
        </section>

        {/* FINAL CTA */}
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-10">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-3">Use Email to Promote Job Vacancies Where Candidates Are Active</h2>
          <p className="text-primary-foreground/80 mb-2 max-w-lg mx-auto">Start your recruitment campaign today — reach more candidates and fill your vacancies faster.</p>
          <p className="text-primary-foreground/60 text-sm mb-6">Powered by <Link to="/email-marketing" className="text-accent hover:underline font-bold">email marketing</Link>, <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-bold">multi-channel campaigns</Link> & Findit.lk</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+94771437707"><Button variant="hero-outline" size="lg" className="text-base"><Phone className="mr-1" /> Call Now</Button></a>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20recruitment%20campaign%20packages." target="_blank" rel="noopener noreferrer"><Button variant="hero" size="lg" className="text-base">Start Your Campaign <ArrowRight className="ml-1" /></Button></a>
          </div>
        </section>
      </article>
      <div className="container mx-auto px-4"><RelatedArticles currentPath="/recruitment-email-marketing-hiring-sri-lanka" /></div>
    </ServicePageLayout>
  );
};

export default RecruitmentEmailHiring;
