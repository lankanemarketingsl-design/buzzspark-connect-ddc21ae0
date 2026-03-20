import { motion } from "framer-motion";

const IntroductionSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Who We Are</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
            Sri Lanka's Leading Digital Marketing Partner
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Buzz Connect is a leading provider of email marketing in Sri Lanka, helping businesses connect with their audience through highly targeted and personalized campaigns. Since 2014, we have supported over 1,500+ businesses with powerful SMS marketing and WhatsApp marketing solutions in Sri Lanka, delivering measurable results and strong return on investment.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We combine advanced targeting, large-scale databases, and cost-effective strategies to help businesses reach the right audience at the right time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroductionSection;
