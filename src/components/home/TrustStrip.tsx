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
    <section className="py-8 bg-muted/60 border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-muted-foreground">
              <b.icon className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium whitespace-nowrap">{b.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;
