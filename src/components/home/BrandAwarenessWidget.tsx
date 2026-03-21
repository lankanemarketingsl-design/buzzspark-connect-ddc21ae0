import { motion } from "framer-motion";
import { Mail, FolderOpen, RefreshCw, ArrowRight, CheckCircle2, Rocket, Sparkles, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Mail, label: "Email Exposure", delay: 0.1 },
  { icon: FolderOpen, label: "Findit.lk Category Presence", delay: 0.25 },
  { icon: RefreshCw, label: "Repeat Visibility", delay: 0.4 },
];

const reasons = [
  "People trust brands they see often",
  "Your business appears where customers look",
  "Builds strong brand recall fast",
];

const BrandAwarenessWidget = () => {
  return (
    <section className="py-8 sm:py-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative rounded-2xl overflow-hidden w-full bg-gradient-to-br from-primary via-primary to-primary/90 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent/5 rounded-full blur-xl" />
          </div>

          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-accent via-yellow-400 to-accent" />

          <div className="relative z-10 px-6 py-5 sm:px-10 sm:py-7">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <motion.span
                  className="inline-flex items-center gap-1.5 text-primary text-xs font-bold bg-accent rounded-full px-3 py-1 w-fit shadow-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Sparkles className="w-3.5 h-3.5" /> Be Seen Everywhere
                </motion.span>
                <h2 className="text-xl sm:text-2xl font-bold text-primary-foreground">
                  Make Your Brand <span className="text-accent">Impossible to Ignore</span>
                </h2>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <p className="text-xs text-primary-foreground/70">
                  Email + <span className="font-bold text-accent bg-accent/15 border border-accent/40 rounded px-1.5 py-0.5">Findit.lk</span> Category Visibility =
                </p>
                <p className="font-bold text-primary-foreground text-sm mt-0.5">Maximum Awareness</p>
              </div>
            </div>

            {/* Content row */}
            <div className="flex flex-col md:flex-row items-center gap-5 mb-5">
              {/* Steps flow */}
              <div className="flex items-center gap-3 sm:gap-5">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-2 sm:gap-4">
                    <motion.div
                      className="flex flex-col items-center gap-1.5"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: step.delay }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-accent/10 hover:scale-110 hover:bg-accent/25 transition-all duration-300">
                        <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-medium text-primary-foreground/80 text-center leading-tight max-w-[80px]">{step.label}</span>
                    </motion.div>
                    {i < steps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: step.delay + 0.1 }}
                      >
                        <ArrowRight className="w-4 h-4 text-accent shrink-0 -mt-5" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-20 bg-primary-foreground/15" />

              {/* Why it works */}
              <motion.div
                className="flex-1 bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" /> Why It Works
                </h3>
                <ul className="space-y-1.5">
                  {reasons.map((r, i) => (
                    <li key={r} className="flex items-center gap-2 text-xs text-primary-foreground/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-primary-foreground/10">
              <p className="text-xs sm:text-sm text-primary-foreground/70">
                More visibility. More recognition. <span className="text-accent font-bold">More trust.</span>
              </p>
              <div className="flex items-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    variant="hero"
                    className="rounded-full px-7 h-10 text-sm font-bold shadow-lg shadow-accent/30"
                    onClick={() => window.open("https://wa.me/94771437707?text=Hi%20Buzz%20Connect!%20I%20want%20to%20boost%20my%20brand%20awareness.", "_blank")}
                  >
                    <Rocket className="w-4 h-4" /> Boost My Brand Awareness
                  </Button>
                </motion.div>
                <p className="hidden sm:block text-[10px] text-primary-foreground/50 italic max-w-[120px] leading-tight">
                  "Visibility creates trust. Trust brings customers."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandAwarenessWidget;
