import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I just experienced possibly the very best customer service of all time. Mashi's approach and assistance made our job easy. We are so impressed with the results, what a remarkable person & company!",
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
  {
    quote:
      "Buzz Connect completely changed the way we approach marketing. Their multi-channel strategy delivered results far beyond what we experienced with other agencies.",
    author: "Valued Client",
    role: "Business Owner",
  },
  {
    quote:
      "Buzz Connect stands out as the most effective. Their multi-channel marketing campaigns gave us unmatched reach across Sri Lanka with consistent leads.",
    author: "Valued Client",
    role: "Senior Marketing Executive",
  },
  {
    quote:
      "We noticed a significant boost in our brand awareness and sales within weeks. Buzz Connect truly delivers results and is far ahead of other marketing providers.",
    author: "Valued Client",
    role: "Digital Marketing Lead",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.slice(0, 6).map((t, i) => (
            <motion.div
              key={i}
              className="relative bg-card rounded-2xl p-6 shadow-lg border border-border flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/10" />
              <div className="flex gap-1 mb-3 justify-center">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed text-center italic mb-4 flex-1">
                "{t.quote}"
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
