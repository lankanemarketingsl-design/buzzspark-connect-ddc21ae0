import { motion } from "framer-motion";
import { Award, Globe, Share2, LinkIcon } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Experts in the industry",
    desc: "Buzz Connect has been providing E-mail Marketing services since 2014 and has successfully completed over 20,000 E-campaigns & provided effective results to all our customers.",
  },
  {
    icon: Globe,
    title: "Reach Out more with Findit.lk",
    desc: "Findit.lk is one of the largest online promotions directory which operates in Sri Lanka. Buzz connect has joined in hand with findit.lk to provide maximum benefits to the customers with the best experience and knowledge.",
  },
  {
    icon: Share2,
    title: "Social media sharing",
    desc: "All campaigns conducted by Buzz Connect will be published on Facebook & Instagram as stories. The flyers of the customers who use our special packages will be posted on Facebook as a post.",
  },
  {
    icon: LinkIcon,
    title: "Landing pages linked with flyers",
    desc: "Landing page URL can be added to E-flyer in order to generate traffic to website, blog, Facebook page, YouTube video etc. or to get online leads.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="whyus" className="py-20 sm:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase mb-4">Why Choose Us</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2">
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
              className="text-center p-8 rounded-2xl bg-card shadow-card border border-border hover:border-accent/30 hover:shadow-card-hover transition-all duration-500 group hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                <r.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-3 text-lg">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-24 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase mb-4">FAQ</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What is email marketing in Sri Lanka?",
                a: "Email marketing is a strategy used by businesses to send targeted messages directly to customer inboxes.",
              },
              {
                q: "Is SMS marketing effective in Sri Lanka?",
                a: "Yes, SMS marketing has one of the highest open rates and is highly effective for promotions and alerts.",
              },
              {
                q: "How does WhatsApp marketing help businesses?",
                a: "WhatsApp marketing allows real-time communication with customers, improving engagement and conversions.",
              },
              {
                q: "Why choose Buzz Connect?",
                a: "Buzz Connect offers one of the largest marketing databases and cost-effective solutions in Sri Lanka.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-card rounded-xl p-6 border border-border hover:border-accent/20 transition-all duration-300 hover:shadow-card">
                <h4 className="font-heading font-bold text-foreground mb-2">{faq.q}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
