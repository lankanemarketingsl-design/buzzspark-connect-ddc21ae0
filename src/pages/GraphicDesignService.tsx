import { Navigate, useLocation } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import { CheckCircle, HelpCircle, MapPin } from "lucide-react";
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
          <p className="text-muted-foreground leading-relaxed mb-4">
            As part of our comprehensive <Link to="/graphic-designing-in-sri-lanka" className="text-muted-foreground underline-offset-2 hover:underline">graphic design Sri Lanka</Link> services, we deliver professional {service.title.toLowerCase()} solutions tailored to your brand identity.
          </p>
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

        {/* Extra Sections */}
        {service.extraSections?.map((section, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{section.title}</h2>
            {section.paragraphs?.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
            ))}
            {section.bullets && (
              <ul className="space-y-2 mb-4">
                {section.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            )}
            {section.subsections?.map((sub) => (
              <div key={sub.title} className="mb-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{sub.title}</h3>
                <ul className="space-y-2 ml-2">
                  {sub.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        ))}

        {/* Locations */}
        {service.locations && service.locations.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {service.title} Services Across Sri Lanka
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.locations.map((loc) => (
                <span key={loc} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm">
                  <MapPin className="w-4 h-4" /> {loc}
                </span>
              ))}
            </div>
          </motion.div>
        )}

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
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Ready to Get Started with {service.title}?</h2>
          <p className="text-primary-foreground/80 mb-6">
            Elevate your brand with professional {service.title.toLowerCase()} services. Work with a creative team that understands branding, design, and your business goals.
          </p>
          <a
            href={`https://wa.me/94771976351?text=${encodeURIComponent(`Hi Buzz Connect, I'm interested in ${service.title} services.`)}`}
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
