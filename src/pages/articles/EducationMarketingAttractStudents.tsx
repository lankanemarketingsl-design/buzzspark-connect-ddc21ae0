import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const EducationMarketingAttractStudents = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="Education Marketing in Sri Lanka: How to Attract More Students"
      subtitle=""
    >
      <SEOHead
        title="Education Marketing Sri Lanka: How to Attract More Students | Buzz Connect"
        description="Learn how educational institutions in Sri Lanka can attract more students with digital marketing. Email, SMS, WhatsApp and social media strategies for enrollment growth."
        canonical="/education-marketing-attract-students-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Education Marketing Attract Students", url: "/education-marketing-attract-students-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Education Marketing in Sri Lanka: How to Attract More Students",
          datePublished: "2025-03-24",
          author: { "@type": "Organization", name: "Buzz Connect" },
          publisher: { "@type": "Organization", name: "Buzz Connect", logo: { "@type": "ImageObject", url: "https://buzzconnect.lk/og-image.png" } },
        }]}
      />
      <div className="max-w-3xl mx-auto">
        <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Resources
        </Link>

        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <p className="text-muted-foreground leading-relaxed">
              Educational institutions in Sri Lanka must adapt to digital marketing to attract students and increase enrollments. With more students searching online for courses and programs, a strong digital presence is essential.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Effective Education Marketing Strategies</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email campaigns</Link> for course promotions</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS reminders</Link> for deadlines and registrations</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp</Link> for student engagement</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> Social media advertising for awareness</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Why It Works</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Reaches students directly on their devices</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Builds trust and credibility for your institution</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Increases enrollment rates significantly</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Institutions that use targeted marketing strategies can significantly improve student acquisition. Need more leads? Check out our <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">Lead Generation services</Link>.
            </p>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Digital Marketing is the Future of Education Growth</h3>
            <p className="text-primary-foreground/80 mb-4">Attract more students with targeted campaigns by Buzz Connect.</p>
            <Link to="/education-marketing-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View Education Marketing Packages
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/education-marketing-attract-students-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default EducationMarketingAttractStudents;
