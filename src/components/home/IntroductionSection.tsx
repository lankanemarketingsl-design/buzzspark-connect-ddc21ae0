import { motion } from "framer-motion";

const IntroductionSection = () => {
  return (
    <section className="py-14 sm:py-16 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-0.5 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">Who We Are</span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5 leading-tight">
            Sri Lanka's Leading Digital Marketing Partner
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
            Buzz Connect is a leading provider of email marketing in Sri Lanka, helping businesses connect with their audience through highly targeted and personalized campaigns. Since 2014, we have supported over 1,500+ businesses with powerful SMS marketing and WhatsApp marketing solutions, delivering measurable results and strong ROI.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            We combine advanced targeting, large-scale databases, and cost-effective strategies to help businesses reach the right audience at the right time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroductionSection;
