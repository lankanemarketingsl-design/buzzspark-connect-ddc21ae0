import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Buzz Connect is the best for fast promotions. We achieved high visibility within a very short time at a low cost. Their service is excellent and truly results-driven.",
    author: "Valued Client",
    role: "Business Owner",
  },
  {
    quote:
      "They are especially effective for short-term marketing campaigns. By using multiple channels including Facebook, Findit.lk banners, SMS marketing, email marketing, and TikTok, they delivered wide reach across different audiences. Within just 3 days, our campaign created strong awareness and delivered outstanding results.",
    author: "Valued Client",
    role: "Marketing Manager",
  },
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
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 3);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const startIdx = current * 3;
  const visibleTestimonials = testimonials.slice(startIdx, startIdx + 3);

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

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-card border border-border rounded-full p-2 shadow-md hover:bg-accent transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            >
              {visibleTestimonials.map((t, i) => (
                <div
                  key={startIdx + i}
                  className="relative bg-card rounded-2xl p-6 shadow-lg border border-border flex flex-col"
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
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={next}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-card border border-border rounded-full p-2 shadow-md hover:bg-accent transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === current ? "w-8 bg-primary" : "w-2.5 bg-border"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
