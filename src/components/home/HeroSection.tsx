import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquare, Smartphone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/15 text-accent border border-accent/30 mb-6">
              No.1 Digital Marketing in Sri Lanka
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            We Can Turn Your{" "}
            <span className="text-gradient-hero">Imagination</span>{" "}
            Into Reality
          </motion.h1>

          <motion.p
            className="text-lg text-primary-foreground/70 mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            The most cost-effective online advertising network in Sri Lanka. Reach over 350,000+ targeted contacts through Email, WhatsApp & SMS campaigns.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Link to="/#contactus">
              <Button variant="hero" size="lg" className="text-base">
                Get Started <ArrowRight className="ml-1" />
              </Button>
            </Link>
            <Link to="/email-marketing">
              <Button variant="hero-outline" size="lg" className="text-base">
                View Services
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-8 mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {[
              { num: "350K+", label: "Email Database" },
              { num: "20K+", label: "Campaigns Completed" },
              { num: "1,500+", label: "Happy Clients" },
              { num: "8+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl font-heading font-bold text-accent">{stat.num}</div>
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
