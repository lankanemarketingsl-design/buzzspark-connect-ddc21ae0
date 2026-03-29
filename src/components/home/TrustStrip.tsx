import { motion } from "framer-motion";
import { Shield, Clock, Users, TrendingUp, CheckCircle } from "lucide-react";

const badges = [
  { icon: Shield, label: "100% Data Safe" },
  { icon: Clock, label: "24hr Campaign Launch" },
  { icon: Users, label: "1,500+ Happy Clients" },
  { icon: TrendingUp, label: "Proven ROI Results" },
  { icon: CheckCircle, label: "10+ Years Trusted" },
];

const TrustStrip = () => {
  return (
    <section className="py-5 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <b.icon className="w-4 h-4 text-accent" />
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap text-primary-foreground/90">{b.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;
