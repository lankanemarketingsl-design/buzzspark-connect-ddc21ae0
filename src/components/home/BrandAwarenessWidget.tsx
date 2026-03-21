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
    <section className="py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative rounded-xl border border-accent/30 bg-gradient-to-br from-card via-card to-accent/5 shadow-lg overflow-hidden w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="h-1 w-full bg-gradient-to-r from-accent via-accent/80 to-accent" />

          <div className="px-5 py-4 sm:px-8 sm:py-5">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold border border-accent/30 rounded-full px-2.5 py-0.5">
                  <Sparkles className="w-3.5 h-3.5" /> Be Seen Everywhere
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-foreground">
                  Make Your Brand <span className="text-accent">Impossible to Ignore</span>
                </h2>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-muted-foreground">
                  Email + <span className="font-bold text-accent border border-accent/30 rounded px-1 py-0.5 text-xs">Findit.lk</span> Category Visibility = <span className="font-bold text-foreground">Maximum Awareness</span>
                </p>
              </div>
            </div>

            {/* Content row - all inline */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              {/* Steps flow */}
              <div className="flex items-center gap-3 sm:gap-4">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-medium text-muted-foreground text-center leading-tight">{step.label}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0 -mt-4" />
                    )}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-16 bg-border" />

              {/* Why it works */}
              <div className="flex-1">
                <h3 className="text-xs font-bold text-accent uppercase tracking-wide mb-1.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Why It Works
                </h3>
                <ul className="space-y-1">
                  {reasons.map((r) => (
                    <li key={r} className="flex items-center gap-1.5 text-xs text-foreground">
                      <CheckCircle2 className="w-3 h-3 text-accent shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-border">
              <p className="text-xs sm:text-sm text-muted-foreground">
                More visibility. More recognition. <span className="text-accent font-semibold">More trust.</span>
              </p>
              <div className="flex items-center gap-3">
                <Button
                  variant="hero"
                  className="rounded-full px-6 h-9 text-sm"
                  onClick={() => window.open("https://wa.me/94773798798?text=Hi%20Buzz%20Connect!%20I%20want%20to%20boost%20my%20brand%20awareness.", "_blank")}
                >
                  <Rocket className="w-3.5 h-3.5" /> Boost My Brand Awareness
                </Button>
                <p className="hidden sm:block text-[10px] text-muted-foreground italic max-w-[120px] leading-tight">
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
