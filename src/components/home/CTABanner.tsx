import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  variant?: "accent" | "navy";
}

const CTABanner = ({
  headline = "Ready to Grow Your Business?",
  subtext = "Get a free consultation and discover how we can help you reach thousands of customers.",
  buttonText = "Get Your Free Quote",
  variant = "accent",
}: CTABannerProps) => {
  return (
    <section
      className={`py-14 relative overflow-hidden ${
        variant === "accent" ? "gradient-accent" : "gradient-hero"
      }`}
    >
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-[10%] w-32 h-32 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-4 right-[15%] w-24 h-24 rounded-full bg-primary-foreground blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <Sparkles className={`w-5 h-5 ${variant === "accent" ? "text-primary" : "text-accent"}`} />
              <span className={`text-xs font-bold uppercase tracking-widest ${variant === "accent" ? "text-primary/80" : "text-accent"}`}>
                Limited Time Offer
              </span>
            </div>
            <h3 className={`font-heading text-2xl sm:text-3xl font-bold ${variant === "accent" ? "text-primary" : "text-primary-foreground"}`}>
              {headline}
            </h3>
            <p className={`mt-2 max-w-lg ${variant === "accent" ? "text-primary/70" : "text-primary-foreground/70"}`}>
              {subtext}
            </p>
          </div>
          <Link to="/#contactus" className="flex-shrink-0">
            <Button
              size="lg"
              className={`text-base font-semibold px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
                variant === "accent"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "gradient-accent text-primary hover:opacity-90"
              }`}
            >
              {buttonText} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
