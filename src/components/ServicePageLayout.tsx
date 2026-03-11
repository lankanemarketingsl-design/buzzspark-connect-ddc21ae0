import { motion } from "framer-motion";
import { ReactNode } from "react";
import ContactSection from "@/components/home/ContactSection";

interface ServicePageLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

const ServicePageLayout = ({ badge, title, subtitle, children }: ServicePageLayoutProps) => {
  return (
    <div className="pt-16">
      {/* Page Hero */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/15 text-accent border border-accent/30 mb-4">
              {badge}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default ServicePageLayout;
