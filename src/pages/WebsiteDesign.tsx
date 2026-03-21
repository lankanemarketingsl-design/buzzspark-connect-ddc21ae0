import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import { CheckCircle, Globe, Smartphone, Code, Search, Zap, HelpCircle } from "lucide-react";

const benefits = [
  "Establish online presence and credibility",
  "Reach potential customers 24/7",
  "Showcase your products and services",
  "Build brand recognition and trust",
  "Generate leads and increase sales",
  "Stay competitive in the digital marketplace",
];

const features = [
  { icon: Smartphone, title: "Responsive Design", desc: "Websites that look perfect on all devices – mobile, tablet, and desktop." },
  { icon: Code, title: "Custom Development", desc: "Tailor-made website solutions built for your specific business needs." },
  { icon: Search, title: "SEO-Optimized", desc: "Websites built with SEO best practices to help you rank higher on Google." },
  { icon: Zap, title: "Fast Loading", desc: "Optimized website performance for faster load times and better user experience." },
];

const faqs = [
  { q: "How much does website design cost in Sri Lanka?", a: "Website design costs vary depending on complexity and features. Contact Buzz Connect for a custom quote tailored to your business needs." },
  { q: "How long does it take to build a website?", a: "A standard business website typically takes 2–4 weeks. More complex websites with custom features may take longer." },
  { q: "Do you provide website hosting?", a: "Yes, we can help with website hosting and domain registration as part of our web design services." },
  { q: "Will my website be mobile-friendly?", a: "Yes, all websites we design are fully responsive and optimized for mobile devices, tablets, and desktops." },
];

const WebsiteDesign = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Website Design Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Professional website design and development services in Sri Lanka for businesses of all sizes.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Website Design Sri Lanka"
      title="Website Designing in Sri Lanka – Professional Web Design Services"
      subtitle="Get a professional, responsive, and SEO-optimized website designed for your business in Sri Lanka."
    >
      <SEOHead
        title="Website Design Sri Lanka | Responsive & SEO-Friendly Sites"
        description="Professional website design in Sri Lanka. Mobile-responsive, SEO-optimized & fast-loading business websites. Custom development with free consultation. Get a quote today."
        canonical="/website-design-sri-lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Website Design", url: "/website-design-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <div className="max-w-4xl space-y-8">
        {/* Why You Need a Website */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why Your Business Needs a Website in Sri Lanka</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In today's digital world, nearly everyone is connected in some way to the World Wide Web in order to satisfy their entertainment, education, research and consumer needs. The popularity of the Internet has prompted businesses of all sizes to have an online presence in the form of a Website.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If your business does not have a Website as of yet, your business probably isn't performing to its fullest of capabilities. Having a Website can provide a number of benefits to your business that you may not have been aware of before.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Your website is important since it is most likely how people will find your business – along with your offerings and prices! These days, most people go online to research products and places before they make a purchase. If you don't have a website, or even if you have a bad website design, you are missing out on potential business.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Benefits of Professional Website Design</h2>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {b}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-card shadow-card border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground">{f.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-7 h-7 text-primary" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions – Website Design Sri Lanka</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-5 rounded-xl bg-card shadow-card border border-border">
                <summary className="font-heading font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-10 rounded-2xl gradient-hero"
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Get Your Website Designed Today</h2>
          <p className="text-primary-foreground/80 mb-6">
            Get a professional, responsive website for your business in Sri Lanka. Contact Buzz Connect to get started.
          </p>
          <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
            Contact Buzz Connect
          </a>
        </motion.div>
      </div>
    </ServicePageLayout>
  );
};

export default WebsiteDesign;
