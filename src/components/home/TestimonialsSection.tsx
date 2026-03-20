import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I just experienced possibly the very best customer service of all time. A few weeks ago, I contacted Ms. Mashi for an inquiry to do a SMS & e-mail campaign regards to one of our major company, but today we have ended up with doing two campaigns. Without any doubt I would say, Mashi's approach and assistance made our job easy. As I know more than half of consumers spend more money with brands they're loyal to, so keeping them happy, keeps them coming back. We are so impressed with the results, what a remarkable person & company!",
    author: "Valued Client",
    role: "Corporate Marketing Manager",
  },
  {
    quote:
      "The BUZZ team is very customer friendly and efficient and provide us with a lot of useful and effective email campaigns which are very useful.",
    author: "Valued Client",
    role: "Business Executive",
  },
  {
    quote:
      "The team is very friendly and helpful. They provide a seamless and effective email marketing service which I recommend without any hesitation. Keep up the great work!",
    author: "Valued Client",
    role: "Marketing Professional",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real feedback from businesses we've helped grow across Sri Lanka.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="relative bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Quote className="absolute top-6 left-6 h-10 w-10 text-primary/15" />
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="text-muted-foreground leading-relaxed text-center italic mb-6">
                "{t.quote}"
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-foreground">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
