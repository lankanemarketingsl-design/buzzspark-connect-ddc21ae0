import { motion } from "framer-motion";
import { Globe, TrendingUp, Users, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="aboutus" className="py-16 sm:py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/[0.03] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">Unique Advantage</span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
              Integrated Marketing with Findit.lk
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3 text-sm sm:text-base">
              Buzz Connect integrates campaigns with Findit.lk, one of Sri Lanka's leading online promotion platforms, to provide extended reach and visibility.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5 text-sm sm:text-base">This ensures:</p>
            <ul className="space-y-3 mb-6">
              {[
                { icon: Globe, text: "Wider audience reach" },
                { icon: TrendingUp, text: "Increased engagement" },
                { icon: Zap, text: "Better campaign performance" },
                { icon: Users, text: "Maximum results at minimum cost" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-muted-foreground group">
                  <div className="w-9 h-9 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow duration-300">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-lg font-bold text-foreground mb-2">Results-Driven Approach</h3>
            <ul className="space-y-1.5 text-muted-foreground text-sm">
              {[
                "Reach thousands of customers within minutes",
                "Generate high-quality leads",
                "Improve brand awareness",
                "Increase conversions and ROI",
                "Build long-term customer relationships",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2">
                  <span className="text-accent text-xs">●</span> {text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { num: "10+", label: "Years Experience", gradient: "gradient-hero" },
                { num: "20K+", label: "Successful Campaigns", gradient: "bg-secondary" },
                { num: "1,500+", label: "Satisfied Clients", gradient: "gradient-accent" },
                { num: "350K+", label: "Email Subscribers", gradient: "gradient-hero" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`${item.gradient} rounded-xl p-4 sm:p-5 text-center shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300`}
                >
                  <div className="text-xl sm:text-3xl font-heading font-bold text-primary-foreground">{item.num}</div>
                  <div className="text-xs mt-1 text-primary-foreground/65">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="bg-card rounded-xl p-5 border border-border shadow-card">
              <h3 className="font-heading text-base font-bold text-foreground mb-4">How It Works</h3>
              <div className="space-y-3.5">
                {[
                  { step: "1", text: "Select your target audience" },
                  { step: "2", text: "Choose your channel (Email, SMS, or WhatsApp)" },
                  { step: "3", text: "Launch your campaign" },
                  { step: "4", text: "Track performance and results" },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">{item.step}</span>
                    </div>
                    <span className="text-muted-foreground font-medium text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
