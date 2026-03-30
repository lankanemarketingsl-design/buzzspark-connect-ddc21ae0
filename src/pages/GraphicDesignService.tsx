import { Navigate, useLocation } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import { CheckCircle, HelpCircle } from "lucide-react";
import { graphicDesignServices } from "@/data/graphicDesignServices";
import { Link } from "react-router-dom";

const GraphicDesignService = () => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "");
  const service = graphicDesignServices.find((s) => s.slug === slug);

  const jsonLd = useMemo(() => {
    if (!service) return [];
    return [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        provider: { "@type": "Organization", name: "Buzz Connect" },
        areaServed: { "@type": "Country", name: "Sri Lanka" },
        description: service.metaDescription,
      },
    ];
  }, [service]);

  if (!service) return <Navigate to="/graphic-designing-in-sri-lanka" replace />;

  return (
    <ServicePageLayout
      badge={service.title}
      title={service.h1}
      subtitle={service.metaDescription}
    >
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`/${service.slug}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Graphic Designing", url: "/graphic-designing-in-sri-lanka" },
          { name: service.title, url: `/${service.slug}` },
        ]}
        jsonLd={jsonLd}
      />

      <div className="max-w-4xl space-y-10">
        {/* Intro */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {service.intro.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Key Benefits</h2>
          <ul className="space-y-3">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {b}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Process */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Our Process</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {service.process.map((p, i) => (
              <div key={p.step} className="p-4 rounded-xl bg-card shadow-card border border-border text-center">
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center mx-auto mb-3">
                  {i + 1}
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">{p.step}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-7 h-7 text-primary" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq) => (
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

        {/* Back Link */}
        <div className="text-center">
          <Link to="/graphic-designing-in-sri-lanka" className="text-accent font-semibold hover:underline">
            ← View All Graphic Design Services
          </Link>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-10 rounded-2xl gradient-hero"
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Get a Quote for {service.title}</h2>
          <p className="text-primary-foreground/80 mb-6">
            Contact Buzz Connect for professional {service.title.toLowerCase()} services at competitive rates.
          </p>
          <a
            href={`https://wa.me/94771437707?text=${encodeURIComponent(`Hi Buzz Connect, I'm interested in ${service.title} services.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </ServicePageLayout>
  );
};

export default GraphicDesignService;
