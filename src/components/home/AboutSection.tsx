import { motion } from "framer-motion";
import { Globe, TrendingUp, Users, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="aboutus" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Unique Advantage</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-5">
              Integrated Marketing with Findit.lk
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Buzz Connect integrates campaigns with Findit.lk, one of Sri Lanka's leading online promotion platforms, to provide extended reach and visibility.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">This ensures:</p>
            <ul className="space-y-3 mb-8">
              {[
                { icon: Globe, text: "Wider audience reach" },
                { icon: TrendingUp, text: "Increased engagement" },
                { icon: Zap, text: "Better campaign performance" },
                { icon: Users, text: "Maximum results at minimum cost" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Results-Driven Approach</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">Our marketing solutions help businesses:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Reach thousands of customers within minutes</li>
              <li>• Generate high-quality leads</li>
              <li>• Improve brand awareness</li>
              <li>• Increase conversions and ROI</li>
              <li>• Build long-term customer relationships</li>
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
                { num: "10+", label: "Years Experience", color: "bg-primary text-primary-foreground" },
                { num: "20K+", label: "Successful Campaigns", color: "bg-secondary text-secondary-foreground" },
                { num: "1,500+", label: "Satisfied Clients", color: "gradient-accent text-primary" },
                { num: "350K+", label: "Email Subscribers", color: "bg-primary text-primary-foreground" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow duration-300`}
                >
                  <div className="text-3xl font-heading font-bold">{item.num}</div>
                  <div className="text-sm mt-1 opacity-80">{item.label}</div>
                </div>
              ))}
            </div>

            {/* How it works */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-card">
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">How It Works</h3>
              <div className="space-y-4">
                {[
                  { step: "1", text: "Select your target audience" },
                  { step: "2", text: "Choose your marketing channel (Email, SMS, or WhatsApp)" },
                  { step: "3", text: "Launch your campaign" },
                  { step: "4", text: "Track performance and results" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{item.step}</span>
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
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
