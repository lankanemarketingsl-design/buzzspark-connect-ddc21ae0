import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

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
  {
    quote:
      "Buzz Connect completely changed the way we approach marketing. Their multi-channel strategy using email, SMS, WhatsApp, and Findit.lk delivered results far beyond what we experienced with other agencies. Within a short period, we saw a massive increase in inquiries and customer engagement. What makes Buzz Connect different is their ability to combine multiple platforms into one powerful campaign. It created a real impact on our business and helped us reach the right audience faster than ever before.",
    author: "Valued Client",
    role: "Business Owner",
  },
  {
    quote:
      "We have worked with several marketing companies before, but Buzz Connect stands out as the most effective. Their multi-channel marketing campaigns gave us unmatched reach across Sri Lanka. The combination of direct marketing tools and Findit.lk promotions created strong visibility and consistent leads. We noticed a significant boost in our brand awareness and sales within weeks. Buzz Connect truly delivers results and is far ahead of other marketing providers.",
    author: "Valued Client",
    role: "Senior Marketing Executive",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

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

        <div className="relative max-w-3xl mx-auto">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-14 z-10 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-14 z-10 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Testimonial card */}
          <div className="overflow-hidden min-h-[280px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="relative w-full bg-card rounded-2xl p-5 sm:p-8 md:p-10 shadow-lg border border-border"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <Quote className="absolute top-6 left-6 h-10 w-10 text-primary/15" />
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center italic mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold text-foreground">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
