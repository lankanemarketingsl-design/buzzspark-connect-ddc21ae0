import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import ContactSection from "@/components/home/ContactSection";
import LogoCarousel from "@/components/home/LogoCarousel";

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
      <section className="gradient-hero text-primary-foreground py-12 sm:py-20">
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
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/#contactus">
                <Button variant="hero" size="lg" className="text-base">
                  Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20marketing%20services." target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="lg" className="text-base">
                  <PhoneCall className="mr-1 w-4 h-4" /> Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>

      <LogoCarousel />
      <ContactSection />
    </div>
  );
};

export default ServicePageLayout;
