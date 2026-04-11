import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, ShoppingCart, Mail, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImg from "@/assets/blog/article-ecommerce-email-sales.jpg";
import RelatedArticles from "@/components/RelatedArticles";

const faqs = [
  { q: "Why is email marketing effective for e-commerce in Sri Lanka?", a: "Email marketing allows e-commerce businesses to send personalized product recommendations, recover abandoned carts, and drive repeat purchases with targeted campaigns." },
  { q: "How can online stores increase sales with email?", a: "By combining email marketing with SMS, WhatsApp, and Findit.lk listings, online stores can reach more customers and improve conversion rates significantly." },
  { q: "What types of email campaigns work for retail?", a: "Flash sales, discount campaigns, new product launches, cart recovery emails, and loyalty rewards are the most effective campaign types." },
  { q: "Is email marketing cost-effective for e-commerce?", a: "Yes. Email marketing delivers the highest ROI of any digital channel, making it ideal for e-commerce businesses looking to maximize revenue." },
];

const EcommerceEmailSales = () => {
  const jsonLd = useMemo(() => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }), []);
  const articleJsonLd = useMemo(() => ({ "@context": "https://schema.org", "@type": "Article", headline: "E-commerce Email Marketing in Sri Lanka: Increase Sales & Customer Retention", author: { "@type": "Organization", name: "Buzz Connect" }, publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" }, datePublished: "2026-03-29", description: "How email marketing increases sales and customer retention for e-commerce businesses in Sri Lanka." }), []);

  return (
    <ServicePageLayout badge="Article" title="E-commerce Email Marketing in Sri Lanka: Increase Sales & Customer Retention" subtitle="Boost revenue and build customer loyalty with targeted email campaigns for your online store.">
      <SEOHead title="E-commerce Email Marketing Sri Lanka | Increase Sales" description="How email marketing increases sales and customer retention for e-commerce businesses in Sri Lanka. Cart recovery, flash sales & multi-channel strategies." canonical="/ecommerce-email-marketing-sales-sri-lanka" breadcrumbs={[{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }, { name: "E-commerce Email Marketing", url: "/ecommerce-email-marketing-sales-sri-lanka" }]} jsonLd={[jsonLd, articleJsonLd]} />
      <article className="max-w-4xl mx-auto space-y-12">
        <div className="rounded-2xl overflow-hidden shadow-card"><img src={articleImg} alt="E-commerce email marketing to increase sales in Sri Lanka" className="w-full h-auto" /></div>
        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">The e-commerce and retail industry in Sri Lanka is growing rapidly, but competition is also increasing. Businesses need effective ways to attract customers and drive repeat purchases.</p>
          <p className="text-lg text-muted-foreground leading-relaxed"><Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> is one of the most powerful tools to boost sales and build customer loyalty.</p>
        </section>
        <section>
          <div className="flex items-center gap-3 mb-4"><Mail className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Why Email Marketing Works for E-commerce</h2></div>
          <p className="text-muted-foreground mb-4"><Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> allows online stores to communicate directly with customers who have shown interest in their products.</p>
          <ul className="space-y-2 mb-6">{["Promote products directly", "Send personalized offers", "Recover abandoned carts", "Encourage repeat purchases"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
          <p className="text-muted-foreground">👉 Our <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing Sri Lanka</Link> services help e-commerce brands increase revenue.</p>
        </section>
        <section className="bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4"><Zap className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Combine with Multi-Channel Marketing</h2></div>
          <p className="text-muted-foreground mb-4">Using email along with <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp</Link>, and listing platforms increases visibility.</p>
          <p className="text-muted-foreground">👉 Learn more about <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing campaigns</Link>.</p>
        </section>
        <section>
          <div className="flex items-center gap-3 mb-4"><Target className="w-7 h-7 text-accent" /><h2 className="font-heading text-2xl font-bold text-foreground">Capture High-Intent Buyers</h2></div>
          <p className="text-muted-foreground">Platforms like <strong>Findit.lk</strong> help attract users actively searching for products, delivering higher quality leads than social media alone.</p>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Campaign Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{["Flash sales", "Discount campaigns", "New product launches", "Cart recovery emails"].map(item => (<div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border"><ShoppingCart className="w-5 h-5 text-accent shrink-0" /><span className="text-sm font-medium text-foreground">{item}</span></div>))}</div>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Benefits</h2>
          <ul className="space-y-2">{["Higher conversion rates", "Increased repeat sales", "Better customer engagement", "Lower cost per acquisition"].map(item => (<li key={item} className="flex items-start gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />{item}</li>))}</ul>
        </section>
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions – E-Commerce Email Marketing</h2>
          <div className="space-y-4">{faqs.map(faq => (<div key={faq.q} className="p-5 rounded-xl bg-muted/30 border border-border"><h3 className="font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground">{faq.a}</p></div>))}</div>
        </section>
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-10">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-3">Looking for E-commerce Marketing Services in Sri Lanka?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">Increase online sales with targeted <Link to="/email-marketing" className="text-accent hover:underline font-bold">email marketing</Link> and <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-bold">multi-channel campaigns</Link>.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/email-marketing"><Button variant="hero-outline" size="lg" className="text-base">Email Marketing <ArrowRight className="ml-1" /></Button></Link>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20e-commerce%20email%20marketing%20campaigns." target="_blank" rel="noopener noreferrer"><Button variant="hero" size="lg" className="text-base">Chat on WhatsApp <ArrowRight className="ml-1" /></Button></a>
          </div>
        </section>
      </article>
      <div className="container mx-auto px-4"><RelatedArticles currentPath="/ecommerce-email-marketing-sales-sri-lanka" /></div>
    </ServicePageLayout>
  );
};

export default EcommerceEmailSales;
