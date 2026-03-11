import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { PenTool, Film, Palette, FileText, Image, Layout, Smartphone, BookOpen } from "lucide-react";

const services = [
  { icon: Image, title: "Artwork / E-flyer Design", desc: "Professional e-flyers for business marketing campaigns", price: "LKR 4,000" },
  { icon: Palette, title: "Logo Design", desc: "Custom minimalist logos that represent your brand identity" },
  { icon: Layout, title: "Business Card Design", desc: "Professional, customized business card layouts" },
  { icon: Film, title: "Animated Video Creation", desc: "Short explainer videos to tell your brand story" },
  { icon: FileText, title: "Letterhead Design", desc: "Single/double-sided professional letterhead designs" },
  { icon: PenTool, title: "Hording & Signboard Design", desc: "Eye-catching outdoor advertising designs" },
  { icon: BookOpen, title: "Brochure & Leaflet Design", desc: "Attractive layouts for personalized brochures" },
  { icon: Smartphone, title: "Social Media Post Design", desc: "Advertising-friendly posts for your business" },
];

const moreServices = [
  "Company Profile Creation", "PowerPoint Presentations", "Photo Editing", "Menu Card Design",
  "Invitation Card Design", "Car/Van Wrap Design", "T-shirt & Merchandise Design", "Banner & Billboard Design",
];

const GraphicDesign = () => {
  return (
    <ServicePageLayout
      badge="Graphic Design"
      title="Professional Graphic Design"
      subtitle="Creative designs from concept to completion — e-flyers, logos, animated videos, social media posts & complete brand identity."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-6 rounded-2xl bg-card shadow-card border border-border hover:border-accent/30 transition-all"
          >
            <div className="w-11 h-11 rounded-lg gradient-accent flex items-center justify-center mb-4">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
            {s.price && (
              <div className="mt-3 inline-block px-3 py-1 rounded-lg bg-accent/10 text-accent font-semibold text-sm">{s.price}</div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl bg-muted/50 border border-border"
      >
        <h2 className="font-heading text-xl font-bold text-foreground mb-4">More Design Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {moreServices.map((s) => (
            <div key={s} className="text-sm text-foreground bg-card p-3 rounded-lg text-center shadow-card">{s}</div>
          ))}
        </div>
      </motion.div>
    </ServicePageLayout>
  );
};

export default GraphicDesign;
