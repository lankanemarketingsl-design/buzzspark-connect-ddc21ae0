import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { quote: "Buzz Connect is the best for fast promotions. We achieved high visibility within a very short time at a low cost. Their service is excellent and truly results-driven.", author: "Valued Client", role: "Business Owner" },
  { quote: "They are especially effective for short-term marketing campaigns. By using multiple channels including Facebook, Findit.lk banners, SMS marketing, email marketing, and TikTok, they delivered wide reach across different audiences.", author: "Valued Client", role: "Marketing Manager" },
  { quote: "I just experienced possibly the very best customer service of all time. Mashi's approach and assistance made our job easy. We are so impressed with the results!", author: "Valued Client", role: "Corporate Marketing Manager" },
  { quote: "The BUZZ team is very customer friendly and efficient and provide us with a lot of useful and effective email campaigns which are very useful.", author: "Valued Client", role: "Business Executive" },
  { quote: "The team is very friendly and helpful. They provide a seamless and effective email marketing service which I recommend without any hesitation.", author: "Valued Client", role: "Marketing Professional" },
  { quote: "Buzz Connect completely changed the way we approach marketing. Their multi-channel strategy delivered results far beyond what we experienced with other agencies.", author: "Valued Client", role: "Business Owner" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 3);

  const next = useCallback(() => setCurrent((p) => (p + 1) % totalSlides), [totalSlides]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + totalSlides) % totalSlides), [totalSlides]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const startIdx = current * 3;
  const visible = testimonials.slice(startIdx, startIdx + 3);

  return (
    <section className="py-14 sm:py-18 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">Real feedback from businesses we've helped grow.</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <button
            onClick={prev}
            className="absolute left-1 sm:-left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-card border border-border rounded-full p-2 shadow-md hover:bg-accent hover:border-accent hover:text-primary transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              {visible.map((t, i) => (
                <div
                  key={startIdx + i}
                  className="bg-card rounded-xl p-5 shadow-card border border-border hover:border-accent/15 flex flex-col transition-all duration-300"
                >
                  <Quote className="h-6 w-6 text-accent/10 mb-2" />
                  <div className="flex gap-0.5 mb-3 justify-center">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-xs text-muted-foreground leading-relaxed text-center italic mb-4 flex-1">
                    "{t.quote}"
                  </blockquote>
                  <div className="text-center pt-3 border-t border-border">
                    <p className="font-bold text-foreground text-xs">{t.author}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{t.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={next}
            className="absolute right-1 sm:-right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-card border border-border rounded-full p-2 shadow-md hover:bg-accent hover:border-accent hover:text-primary transition-all"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-accent" : "w-2 bg-border hover:bg-muted-foreground/30"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
