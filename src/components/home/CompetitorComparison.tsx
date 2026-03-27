import { motion } from "framer-motion";
import { Check, X, AlertTriangle, ArrowRight } from "lucide-react";

const features = [
  { feature: "Email Marketing", buzz: "Advanced targeting", other: "Basic", otherStatus: "partial" },
  { feature: "SMS Marketing", buzz: "Data-driven campaigns", other: "Limited", otherStatus: "partial" },
  { feature: "WhatsApp Marketing", buzz: "Bulk + targeted", other: "Rare", otherStatus: "no" },
  { feature: "Social Media Marketing", buzz: "Included", other: "Extra cost", otherStatus: "partial" },
  { feature: "Findit.lk Integration", buzz: "Exclusive", other: "Not available", otherStatus: "no" },
  { feature: "Multi-Channel Campaigns", buzz: "All-in-one", other: "Single channel", otherStatus: "no" },
  { feature: "Category-Based Targeting", buzz: "Yes", other: "No", otherStatus: "no" },
  { feature: "Large Segmented Database", buzz: "350,000+", other: "Limited", otherStatus: "partial" },
  { feature: "Campaign Launch Speed", buzz: "Within days", other: "Slow", otherStatus: "partial" },
  { feature: "Industry-Specific Audiences", buzz: "Yes", other: "No", otherStatus: "no" },
  { feature: "End-to-End Management", buzz: "Full service", other: "Partial", otherStatus: "partial" },
  { feature: "SME Pricing", buzz: "Affordable", other: "Expensive", otherStatus: "partial" },
  { feature: "Graphic Design", buzz: "Included", other: "Extra", otherStatus: "no" },
  { feature: "Performance Tracking", buzz: "Detailed reports", other: "Limited", otherStatus: "partial" },
];

const OtherIcon = ({ status }: { status: string }) => {
  if (status === "no") return <X className="w-4 h-4 text-red-500" />;
  return <AlertTriangle className="w-4 h-4 text-amber-500" />;
};

const CompetitorComparison = () => {
  return (
    <section className="py-20 bg-[hsl(var(--navy))] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-accent/5 translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            The Buzz Connect Difference
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-2">
            Why Businesses Choose Buzz Connect Over Others
          </h2>
          <p className="text-white/60 mt-3 max-w-xl mx-auto">
            Compare features that actually generate leads &amp; ROI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Table */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[2fr_1.5fr_1.5fr]">
              <div className="p-4 bg-white/5 text-white/50 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Feature
              </div>
              <div className="p-4 bg-accent text-primary text-center text-xs sm:text-sm font-bold uppercase tracking-wider">
                Buzz Connect
              </div>
              <div className="p-4 bg-white/5 text-white/50 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Other Providers
              </div>
            </div>

            {/* Rows */}
            {features.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[2fr_1.5fr_1.5fr] border-t border-white/5 ${
                  i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                } hover:bg-white/[0.05] transition-colors`}
              >
                <div className="p-3 sm:p-4 text-white/90 text-xs sm:text-sm font-medium">
                  {row.feature}
                </div>
                <div className="p-3 sm:p-4 bg-accent/[0.06] flex items-center justify-center gap-1.5 border-x border-accent/10">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium">{row.buzz}</span>
                </div>
                <div className="p-3 sm:p-4 flex items-center justify-center gap-1.5">
                  <OtherIcon status={row.otherStatus} />
                  <span className="text-white/40 text-xs sm:text-sm">{row.other}</span>
                </div>
              </div>
            ))}
          </div>

          {/* USP Punchline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-white/50 text-sm sm:text-base mt-8 max-w-2xl mx-auto italic"
          >
            "Unlike typical agencies, Buzz Connect combines Email, SMS, WhatsApp &amp; Findit.lk into one powerful campaign system."
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <a
              href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20a%20free%20proposal%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-primary font-bold text-sm sm:text-base hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/25 hover:scale-105"
            >
              Get Free Proposal
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-white/30 text-xs mt-3">Start your campaign in 48 hours</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitorComparison;
