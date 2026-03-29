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
    <section className="py-20 sm:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent/[0.03] rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/[0.03] rounded-full blur-3xl translate-x-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Real feedback from businesses we've helped grow across Sri Lanka.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-10 bg-card border border-border rounded-full p-2.5 shadow-lg hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
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
                  className="relative bg-card rounded-2xl p-7 shadow-card hover:shadow-card-hover border border-border hover:border-accent/20 flex flex-col transition-all duration-300"
                >
                  <Quote className="absolute top-5 left-5 h-8 w-8 text-accent/10" />
                  <div className="flex gap-1 mb-4 justify-center">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed text-center italic mb-5 flex-1">
                    "{t.quote}"
                  </blockquote>
                  <div className="text-center pt-4 border-t border-border">
                    <p className="font-bold text-foreground text-sm">{t.author}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={next}
            className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-10 bg-card border border-border rounded-full p-2.5 shadow-lg hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "w-10 bg-accent" : "w-2.5 bg-border hover:bg-muted-foreground/30"
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
