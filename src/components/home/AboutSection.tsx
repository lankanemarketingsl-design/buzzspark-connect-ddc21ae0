import { motion } from "framer-motion";
import { Globe, TrendingUp, Users, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="aboutus" className="py-20 sm:py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase mb-4">Unique Advantage</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6 leading-tight">
              Integrated Marketing with Findit.lk
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base sm:text-lg">
              Buzz Connect integrates campaigns with Findit.lk, one of Sri Lanka's leading online promotion platforms, to provide extended reach and visibility.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base sm:text-lg">This ensures:</p>
            <ul className="space-y-4 mb-8">
              {[
                { icon: Globe, text: "Wider audience reach" },
                { icon: TrendingUp, text: "Increased engagement" },
                { icon: Zap, text: "Better campaign performance" },
                { icon: Users, text: "Maximum results at minimum cost" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-4 text-muted-foreground group">
                  <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Results-Driven Approach</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">Our marketing solutions help businesses:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><span className="text-accent">●</span> Reach thousands of customers within minutes</li>
              <li className="flex items-center gap-2"><span className="text-accent">●</span> Generate high-quality leads</li>
              <li className="flex items-center gap-2"><span className="text-accent">●</span> Improve brand awareness</li>
              <li className="flex items-center gap-2"><span className="text-accent">●</span> Increase conversions and ROI</li>
              <li className="flex items-center gap-2"><span className="text-accent">●</span> Build long-term customer relationships</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { num: "10+", label: "Years Experience", gradient: "gradient-hero" },
                { num: "20K+", label: "Successful Campaigns", gradient: "bg-secondary" },
                { num: "1,500+", label: "Satisfied Clients", gradient: "gradient-accent" },
                { num: "350K+", label: "Email Subscribers", gradient: "gradient-hero" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${item.gradient} rounded-2xl p-5 sm:p-7 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="text-2xl sm:text-4xl font-heading font-bold text-primary-foreground">{item.num}</div>
                  <div className="text-sm mt-2 text-primary-foreground/70">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* How it works */}
            <div className="bg-card rounded-2xl p-7 border border-border shadow-card">
              <h3 className="font-heading text-lg font-bold text-foreground mb-5">How It Works</h3>
              <div className="space-y-5">
                {[
                  { step: "1", text: "Select your target audience" },
                  { step: "2", text: "Choose your marketing channel (Email, SMS, or WhatsApp)" },
                  { step: "3", text: "Launch your campaign" },
                  { step: "4", text: "Track performance and results" },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-sm font-bold text-primary">{item.step}</span>
                    </div>
                    <span className="text-muted-foreground font-medium">{item.text}</span>
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
