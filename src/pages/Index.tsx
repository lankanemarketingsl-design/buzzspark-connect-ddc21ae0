import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import ContactSection from "@/components/home/ContactSection";
import CTABanner from "@/components/home/CTABanner";
import TrustStrip from "@/components/home/TrustStrip";
import LogoCarousel from "@/components/home/LogoCarousel";
import SEOHead from "@/components/SEOHead";
import { useMemo } from "react";

const homeFaqs = [
  { q: "What services does Buzz Connect offer?", a: "Buzz Connect offers email marketing, SMS marketing, WhatsApp marketing, online advertising, SEO, graphic design, and website design services in Sri Lanka." },
  { q: "How many people can Buzz Connect reach?", a: "Buzz Connect can reach over 350,000+ email subscribers, 600,000+ SMS contacts, and hundreds of thousands of WhatsApp users across Sri Lanka." },
  { q: "Is Buzz Connect the best email marketing company in Sri Lanka?", a: "Yes, Buzz Connect is one of Sri Lanka's leading email marketing companies with over a decade of experience and one of the largest corporate email databases in the country." },
  { q: "How much does email marketing cost in Sri Lanka?", a: "Buzz Connect offers email marketing packages starting from LKR 6,000 for a single campaign reaching 350,000+ corporate subscribers." },
  { q: "Does Buzz Connect offer SEO services?", a: "Yes, Buzz Connect provides professional SEO services in Sri Lanka including keyword research, on-page optimization, technical SEO, content creation, and link building." },
  { q: "What is multi-channel marketing?", a: "Multi-channel marketing is a strategy that combines email, SMS, WhatsApp, and web advertising to reach customers across multiple platforms simultaneously for maximum engagement." },
];

const Index = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Buzz Connect",
      url: "https://buzzconnect.lk",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://buzzconnect.lk/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: homeFaqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ], []);

  return (
    <div className="pt-16">
      <SEOHead
        title="Email Marketing Sri Lanka | SMS & WhatsApp Marketing | Buzz Connect"
        description="Buzz Connect is the No.1 email marketing, SMS marketing, and WhatsApp marketing company in Sri Lanka. Reach 350,000+ subscribers with cost-effective digital marketing solutions. SEO, graphic design & website design services."
        canonical="/"
        breadcrumbs={[{ name: "Home", url: "/" }]}
        jsonLd={jsonLd}
      />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <IntroductionSection />
      <AboutSection />
      <CTABanner
        headline="Ready to Grow Your Business?"
        subtext="Chat with us on WhatsApp and get a free consultation for your next marketing campaign."
        buttonText="Chat on WhatsApp"
        variant="navy"
      />
      <WhyUsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
