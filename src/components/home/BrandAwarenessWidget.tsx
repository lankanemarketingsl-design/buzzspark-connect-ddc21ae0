import { motion } from "framer-motion";
import { Mail, FolderOpen, RefreshCw, ArrowRight, CheckCircle2, Rocket, Sparkles, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Mail, label: "Email Exposure", delay: 0.1 },
  { icon: FolderOpen, label: "Findit.lk Presence", delay: 0.25 },
  { icon: RefreshCw, label: "Repeat Visibility", delay: 0.4 },
];

const reasons = [
  "People trust brands they see often",
  "Your business appears where customers look",
  "Builds strong brand recall fast",
];

const BrandAwarenessWidget = () => {
  return (
    <section className="py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative rounded-xl overflow-hidden w-full bg-gradient-to-br from-primary via-primary to-primary/90 shadow-xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-accent/5 rounded-full blur-2xl" />
          </div>

          <div className="h-0.5 w-full bg-gradient-to-r from-accent via-yellow-400 to-accent" />

          <div className="relative z-10 px-5 py-4 sm:px-8 sm:py-5">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <motion.span
                  className="inline-flex items-center gap-1.5 text-primary text-[10px] font-bold bg-accent rounded-full px-2.5 py-0.5 w-fit"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <Sparkles className="w-3 h-3" /> Be Seen Everywhere
                </motion.span>
                <h2 className="text-lg sm:text-xl font-bold text-primary-foreground">
                  Make Your Brand <span className="text-accent">Impossible to Ignore</span>
                </h2>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <p className="text-[10px] text-primary-foreground/60">
                  Email + <span className="font-bold text-accent bg-accent/15 border border-accent/30 rounded px-1 py-0.5 text-[9px]">Findit.lk</span> =
                </p>
                <p className="font-bold text-primary-foreground text-xs">Maximum Awareness</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full md:w-auto">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-2 sm:gap-3">
                    <motion.div
                      className="flex flex-col items-center gap-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: step.delay }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center hover:scale-105 transition-transform">
                        <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-medium text-primary-foreground/70 text-center leading-tight max-w-[70px]">{step.label}</span>
                    </motion.div>
                    {i < steps.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0 sm:-mt-4" />}
                  </div>
                ))}
              </div>

              <div className="hidden md:block w-px h-16 bg-primary-foreground/10" />

              <motion.div
                className="flex-1 bg-primary-foreground/5 rounded-lg p-3 border border-primary-foreground/8"
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Eye className="w-3 h-3" /> Why It Works
                </h3>
                <ul className="space-y-1">
                  {reasons.map((r) => (
                    <li key={r} className="flex items-center gap-1.5 text-[11px] text-primary-foreground/80">
                      <CheckCircle2 className="w-3 h-3 text-accent shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-3 border-t border-primary-foreground/8">
              <p className="text-xs text-primary-foreground/60">
                More visibility. More recognition. <span className="text-accent font-bold">More trust.</span>
              </p>
              <Button
                variant="hero"
                className="rounded-full px-6 h-9 text-xs font-bold shadow-md shadow-accent/20"
                onClick={() => window.open("https://wa.me/94771437707?text=Hi%20Buzz%20Connect!%20I%20want%20to%20boost%20my%20brand%20awareness.", "_blank")}
              >
                <Rocket className="w-3.5 h-3.5" /> Boost My Brand
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandAwarenessWidget;
