import { motion } from "framer-motion";

const IntroductionSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase mb-4">Who We Are</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-8 leading-tight">
            Sri Lanka's Leading Digital Marketing Partner
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5 text-base sm:text-lg">
            Buzz Connect is a leading provider of email marketing in Sri Lanka, helping businesses connect with their audience through highly targeted and personalized campaigns. Since 2014, we have supported over 1,500+ businesses with powerful SMS marketing and WhatsApp marketing solutions in Sri Lanka, delivering measurable results and strong return on investment.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            We combine advanced targeting, large-scale databases, and cost-effective strategies to help businesses reach the right audience at the right time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroductionSection;
