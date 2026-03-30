import { motion } from "framer-motion";
import { Award, Globe, Share2, LinkIcon } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Experts in the industry",
    desc: "Over 20,000 campaigns completed since 2014 with proven results for all our customers.",
  },
  {
    icon: Globe,
    title: "Reach Out more with Findit.lk",
    desc: "Integrated with Findit.lk to provide maximum visibility and benefits to customers.",
  },
  {
    icon: Share2,
    title: "Social media sharing",
    desc: "All campaigns published on Facebook & Instagram. Special packages include dedicated posts.",
  },
  {
    icon: LinkIcon,
    title: "Landing pages linked with flyers",
    desc: "Add landing page URLs to e-flyers to drive traffic and generate online leads.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="whyus" className="py-16 sm:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">Why Choose Us</span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Why Buzz Connect?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-6 rounded-xl bg-card shadow-card border border-border hover:border-accent/25 hover:shadow-card-hover transition-all duration-400 group hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow group-hover:scale-105 transition-all duration-300">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2 text-base">{r.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">FAQ</span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="space-y-3">
            {[
              { q: "What is email marketing in Sri Lanka?", a: "Email marketing is a strategy used by businesses to send targeted messages directly to customer inboxes." },
              { q: "Is SMS marketing effective in Sri Lanka?", a: "Yes, SMS marketing has one of the highest open rates and is highly effective for promotions and alerts." },
              { q: "How does WhatsApp marketing help businesses?", a: "WhatsApp marketing allows real-time communication with customers, improving engagement and conversions." },
              { q: "Why choose Buzz Connect?", a: "Buzz Connect offers one of the largest marketing databases and cost-effective solutions in Sri Lanka." },
            ].map((faq) => (
              <div key={faq.q} className="bg-card rounded-lg p-4 border border-border hover:border-accent/15 transition-all duration-300">
                <h4 className="font-heading font-bold text-foreground mb-1 text-sm">{faq.q}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
