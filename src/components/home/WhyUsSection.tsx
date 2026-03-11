import { motion } from "framer-motion";
import { Award, Globe, Share2, LinkIcon } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Industry Experts Since 2014",
    desc: "Over 20,000 successful E-campaigns with proven, effective results for every customer.",
  },
  {
    icon: Globe,
    title: "Reach More with Findit.lk",
    desc: "Partnered with Sri Lanka's largest online promotions directory for maximum brand exposure.",
  },
  {
    icon: Share2,
    title: "Social Media Sharing",
    desc: "All campaigns are published on Facebook & Instagram — including story updates and post sharing.",
  },
  {
    icon: LinkIcon,
    title: "Landing Pages Linked",
    desc: "Custom landing page URLs added to E-flyers to drive traffic and generate qualified online leads.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="whyus" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Why Buzz Connect?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-xl bg-card shadow-card border border-border hover:border-accent/30 transition-all"
            >
              <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mx-auto mb-5">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
