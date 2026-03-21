import { motion } from "framer-motion";
import { Mail, FolderOpen, RefreshCw, ArrowRight, CheckCircle2, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Mail, label: "Inbox Exposure" },
  { icon: FolderOpen, label: "Category Presence" },
  { icon: RefreshCw, label: "Repeat Visibility" },
];

const reasons = [
  "People trust brands they see often",
  "Your business appears where customers look",
  "Builds strong brand recall fast",
];

const BrandAwarenessWidget = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative rounded-2xl border border-accent/30 bg-gradient-to-br from-card via-card to-accent/5 shadow-xl overflow-hidden max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Top accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-accent via-accent/80 to-accent" />

          <div className="p-6 sm:p-10">
            {/* Header row */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
              <div>
                <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold border border-accent/30 rounded-full px-3 py-1 mb-3">
                  <Sparkles className="w-4 h-4" /> Be Seen Everywhere
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Make Your Brand{" "}
                  <span className="text-accent">Impossible to Ignore</span>
                </h2>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm text-muted-foreground">
                  Email + <span className="font-bold text-accent border border-accent/30 rounded px-1.5 py-0.5">Findit.lk</span> Category Visibility =
                </p>
                <p className="font-bold text-foreground text-lg">Maximum Awareness</p>
              </div>
            </div>

            {/* Content grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Steps flow */}
              <div className="flex items-center justify-center gap-3 sm:gap-5">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-3 sm:gap-5">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground text-center leading-tight">{step.label}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-accent shrink-0 -mt-5" />
                    )}
                  </div>
                ))}
              </div>

              {/* Why it works */}
              <div className="bg-muted/50 rounded-xl p-5 border border-border">
                <h3 className="text-sm font-bold text-accent uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Why It Works
                </h3>
                <ul className="space-y-2.5">
                  {reasons.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
              <p className="text-sm sm:text-base text-muted-foreground">
                More visibility. More recognition. <span className="text-accent font-semibold">More trust.</span>
              </p>
              <div className="flex items-center gap-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="rounded-full px-8"
                  onClick={() => window.open("https://wa.me/94773798798?text=Hi%20Buzz%20Connect!%20I%20want%20to%20boost%20my%20brand%20awareness.", "_blank")}
                >
                  <Rocket className="w-4 h-4" /> Boost My Brand Awareness
                </Button>
                <p className="hidden sm:block text-xs text-muted-foreground italic max-w-[140px]">
                  "Visibility creates trust.<br />Trust brings customers."
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
