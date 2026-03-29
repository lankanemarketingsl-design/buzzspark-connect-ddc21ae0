import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, Target, Mail, Zap, Users, BarChart3, Globe, GraduationCap, Building2, Hotel, ShoppingCart, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImg from "@/assets/blog/article-lead-gen-agency.jpg";
import RelatedArticles from "@/components/RelatedArticles";

const faqs = [
  { q: "What is a lead generation agency?", a: "A lead generation agency helps businesses attract, capture, and convert potential customers using digital marketing strategies like email, SMS, WhatsApp campaigns, and landing pages." },
  { q: "Why do businesses in Sri Lanka need a lead generation agency?", a: "Agencies provide data-driven strategies, multi-channel campaigns, and industry-specific targeting that deliver higher quality leads and better ROI than in-house efforts." },
  { q: "How does multi-channel lead generation work?", a: "Multi-channel lead generation combines email, SMS, WhatsApp, social media, and platforms like Findit.lk to reach audiences across multiple touchpoints, increasing conversion rates." },
  { q: "Which industries benefit most from lead generation?", a: "Education, real estate, hotels, e-commerce, healthcare, automotive, and event organizers all benefit significantly from professional lead generation services." },
];

const LeadGenAgency = () => {
  const jsonLd = useMemo(() => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }), []);
  const articleJsonLd = useMemo(() => ({ "@context": "https://schema.org", "@type": "Article", headline: "Lead Generation Agency in Sri Lanka: How to Choose the Right Partner for Your Business", author: { "@type": "Organization", name: "Buzz Connect" }, publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" }, datePublished: "2026-03-29", description: "How to choose the right lead generation agency in Sri Lanka. Multi-channel strategies, industry targeting & Findit.lk integration for maximum qualified leads." }), []);

  return (
    <ServicePageLayout badge="Article" title="Lead Generation Agency in Sri Lanka: How to Choose the Right Partner for Your Business" subtitle="Get qualified leads that convert into customers with the right lead generation partner.">
      <SEOHead title="Lead Generation Agency Sri Lanka | BuzzConnect" description="How to choose the right lead generation agency in Sri Lanka. Multi-channel strategies combining email, SMS, WhatsApp & Findit.lk for maximum qualified leads." canonical="/lead-generation-agency-sri-lanka" breadcrumbs={[{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "Lead Generation Agency", url: "/lead-generation-agency-sri-lanka" }]} jsonLd={[jsonLd, articleJsonLd]} />

      <article className="max-w-4xl mx-auto space-y-12">
        <div className="rounded-2xl overflow-hidden shadow-card"><img src={articleImg} alt="Lead generation agency in Sri Lanka - choosing the right partner" className="w-full h-auto" /></div>

        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">In today's competitive market, businesses in Sri Lanka need more than just visibility—they need qualified leads that convert into customers. This is where a professional <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead generation agency</Link> becomes essential.</p>
          <p className="text-lg text-muted-foreground leading-relaxed">Whether you are in education, real estate, healthcare, or e-commerce, working with the right agency can significantly improve your marketing results.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What is a Lead Generation Agency?</h2>
          <p className="text-muted-foreground mb-4">A <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead generation agency</Link> helps businesses attract, capture, and convert potential customers using digital marketing strategies such as:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              { label: "Email Marketing", link: "/email-marketing" },
              { label: "SMS and WhatsApp Campaigns", link: "/sms-marketing" },
              { label: "Social Media Advertising", link: "/social-media-marketing-sri-lanka" },
              { label: "Landing Pages and Funnels", link: null },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                {item.link ? <Link to={item.link} className="text-sm font-medium text-foreground hover:text-accent transition-colors">{item.label}</Link> : <span className="text-sm font-medium text-foreground">{item.label}</span>}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">Instead of relying on random inquiries, businesses get targeted, high-quality leads.</p>
          <p className="text-muted-foreground mt-2">👉 Explore professional <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead generation services in Sri Lanka</Link>.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Why Businesses in Sri Lanka Need a Lead Generation Agency</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Target className="w-5 h-5 text-accent" /> 1. Access to Targeted Audiences</h3>
              <p className="text-muted-foreground">Agencies use data-driven strategies to reach the right audience based on interests, location, and behavior.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Zap className="w-5 h-5 text-accent" /> 2. Multi-Channel Campaigns</h3>
              <p className="text-muted-foreground">The best agencies combine multiple platforms such as <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email</Link>, <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link>, and listing platforms to maximize reach.</p>
              <p className="text-muted-foreground mt-2">👉 Learn about <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel campaigns</Link>.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-accent" /> 3. Better Conversion Rates</h3>
              <p className="text-muted-foreground">Instead of generating random traffic, agencies focus on converting leads into paying customers.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Users className="w-5 h-5 text-accent" /> 4. Cost-Effective Marketing</h3>
              <p className="text-muted-foreground">Compared to traditional advertising, <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead generation campaigns</Link> deliver higher ROI.</p>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 rounded-2xl p-8 border border-border">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Key Features of a Good Lead Generation Agency</h2>
          <p className="text-muted-foreground mb-4">When choosing a lead generation agency in Sri Lanka, look for:</p>
          <ul className="space-y-2">{["Proven campaign strategies", "Industry-specific targeting", "Large audience databases", "Multi-channel capabilities", "Performance tracking and reporting"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">How Lead Generation Works</h2>
          <p className="text-muted-foreground mb-4">A typical lead generation process includes:</p>
          <div className="space-y-3 ml-4">
            {["Attracting users through platforms like Findit.lk", "Capturing user information", "Nurturing leads through email marketing", "Converting leads into customers"].map((item, i) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground text-sm font-bold shrink-0">{i + 1}</span>
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-4">👉 Our <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing Sri Lanka</Link> services help nurture and convert leads effectively.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Industries That Benefit Most</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { icon: GraduationCap, label: "Education providers" },
              { icon: Building2, label: "Real estate companies" },
              { icon: Hotel, label: "Hotels and travel" },
              { icon: ShoppingCart, label: "E-commerce brands" },
              { icon: HeartPulse, label: "Healthcare providers" },
              { icon: Users, label: "SMEs & corporates" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 p-3 rounded-lg bg-muted/40 border border-border">
                <Icon className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-4">Each industry requires a tailored approach to generate the best results.</p>
        </section>

        <section className="bg-accent/5 rounded-2xl p-8 border border-accent/20">
          <div className="flex items-center gap-3 mb-4"><Globe className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Why Multi-Channel Lead Generation is More Effective</h2></div>
          <p className="text-muted-foreground mb-4">Relying on a single platform like Facebook is not enough. Multi-channel strategies ensure:</p>
          <ul className="space-y-2 mb-4">{["Wider audience reach", "Higher engagement", "Better conversion rates"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
          <p className="text-muted-foreground">By combining <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email</Link>, <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp</Link>, and platforms like Findit.lk, businesses can achieve better results.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Benefits of Working with a Lead Generation Agency</h2>
          <ul className="space-y-2">{["Consistent flow of leads", "Higher conversion rates", "Reduced marketing costs", "Faster business growth"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">{faqs.map(faq => (<div key={faq.q} className="p-5 rounded-xl bg-muted/30 border border-border"><h3 className="font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground">{faq.a}</p></div>))}</div>
        </section>

        <section className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-10">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-3">Looking for a Lead Generation Agency in Sri Lanka?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">BuzzConnect delivers data-driven <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-bold">lead generation campaigns</Link> that generate qualified leads and real results.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/lead-generation-sri-lanka"><Button variant="hero-outline" size="lg" className="text-base">Lead Generation <ArrowRight className="ml-1" /></Button></Link>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20lead%20generation%20services." target="_blank" rel="noopener noreferrer"><Button variant="hero" size="lg" className="text-base">Chat on WhatsApp <ArrowRight className="ml-1" /></Button></a>
          </div>
        </section>
      </article>
      <div className="container mx-auto px-4"><RelatedArticles currentPath="/lead-generation-agency-sri-lanka" /></div>
    </ServicePageLayout>
  );
};

export default LeadGenAgency;
