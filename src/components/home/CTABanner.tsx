import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  variant?: "accent" | "navy";
}

const WA_LINK = "https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20marketing%20services.";

const CTABanner = ({
  headline = "Ready to Grow Your Business?",
  subtext = "Get a free consultation and discover how we can help you reach thousands of customers.",
  buttonText = "Chat on WhatsApp",
  variant = "accent",
}: CTABannerProps) => {
  return (
    <section className={`py-10 relative overflow-hidden ${variant === "accent" ? "gradient-accent" : "gradient-hero"}`}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-5"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <h3 className={`font-heading text-xl sm:text-2xl font-bold ${variant === "accent" ? "text-primary" : "text-primary-foreground"}`}>
              {headline}
            </h3>
            <p className={`mt-1.5 max-w-md text-sm ${variant === "accent" ? "text-primary/65" : "text-primary-foreground/65"}`}>
              {subtext}
            </p>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
            <Button
              size="lg"
              className={`text-sm font-semibold px-7 shadow-md hover:shadow-lg transition-all hover:scale-105 ${
                variant === "accent"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "gradient-accent text-primary hover:opacity-90"
              }`}
            >
              <MessageCircle className="mr-2 w-4 h-4" /> {buttonText}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
