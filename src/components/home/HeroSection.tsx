import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquare, Smartphone, PhoneCall } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[75vh] flex items-center overflow-hidden pb-10 sm:pb-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-85" />

      {/* Floating icons */}
      <motion.div
        className="absolute top-32 right-[15%] text-accent/30"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Mail size={48} />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-[10%] text-teal/30"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <MessageSquare size={40} />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-[8%] text-accent/20"
        animate={{ y: [-8, 12, -8] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <Smartphone size={36} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 pt-10 sm:pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/15 text-accent border border-accent/30 mb-6">
              No.1 Email, WhatsApp &amp; SMS Marketing in Sri Lanka
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Email Marketing Sri Lanka |{" "}
            <span className="text-gradient-hero">SMS &amp; WhatsApp</span>{" "}
            Marketing Company
          </motion.h1>

          <motion.p
            className="text-sm sm:text-lg text-primary-foreground/70 mb-6 sm:mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Buzz Connect is the No.1 email marketing, SMS marketing, and WhatsApp marketing company in Sri Lanka, delivering cost-effective digital and direct marketing solutions for businesses of all sizes.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20marketing%20services." target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base">
                Start Your Campaign Today <ArrowRight className="ml-1" />
              </Button>
            </a>
            <Link to="/#contactus">
              <Button variant="hero-outline" size="lg" className="text-base">
                <PhoneCall className="mr-1 w-4 h-4" /> Get Free Consultation
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-4 sm:gap-8 mt-6 sm:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            {[
              { num: "350K+", label: "Email Database" },
              { num: "20K+", label: "Campaigns Completed" },
              { num: "1,500+", label: "Happy Clients" },
              { num: "10+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-heading font-bold text-accent">{stat.num}</div>
                <div className="text-xs text-primary-foreground/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;