import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

const benefits = [
  "High-delivery bulk SMS campaigns",
  "Advanced targeting and segmentation",
  "Multi-channel campaign support",
  "Conversion tracking & analytics",
  "Proven strategies for lead generation",
];

const funnelSteps = [
  "SMS Campaign",
  "Landing Page",
  "Retargeting Ads",
  "Email Follow-Up",
  "Conversion",
];

const SmsHeroContent = () => {
  return (
    <>
      {/* Hero Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <p className="text-xl font-semibold text-foreground mb-4">We go beyond basic bulk SMS.</p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          At <strong>Buzz Connect</strong>, we combine <strong>SMS marketing</strong> with multi-channel campaign strategies to turn messages into real customers. From campaign planning to conversion tracking, we help Sri Lankan businesses get measurable results — not just delivery reports.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
            Start Your SMS Campaign <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>

      {/* What is SMS Marketing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What is SMS Marketing in Sri Lanka?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          SMS marketing is one of the most effective ways to instantly reach your customers. Businesses in Sri Lanka use <strong>bulk SMS campaigns</strong> for:
        </p>
        <ul className="space-y-2 mb-4">
          {["Promotions and offers", "Customer notifications", "Event marketing", "Lead generation"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          With high open rates and immediate delivery, SMS remains one of the strongest marketing channels available in Sri Lanka.
        </p>
      </motion.div>

      {/* Problem Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-destructive/5 border border-destructive/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-7 h-7 text-destructive" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Why Most Bulk SMS Campaigns Fail</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">Many businesses only focus on sending messages. But the reality is:</p>
        <ul className="space-y-2 mb-4">
          {[
            "No targeting = low engagement",
            "No follow-up = lost customers",
            "No tracking = no real ROI",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-foreground font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
        <p className="text-foreground font-semibold">Sending SMS alone is not enough anymore.</p>
      </motion.div>

      {/* Multi-Channel Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">SMS Marketing + Multi-Channel Strategy</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We combine SMS with a complete marketing funnel to maximize conversions:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {funnelSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-sm">{step}</span>
              {i < funnelSteps.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
            </div>
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed text-center">
          This ensures that every interested user is tracked, nurtured, and converted into a paying customer.
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why Choose Our SMS Marketing Services in Sri Lanka</h2>
        <ul className="space-y-3 mb-4">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {b}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed font-medium">
          We don't just send messages — we build campaigns that generate results.
        </p>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Bulk SMS vs Strategic SMS Marketing</h2>
        <div className="overflow-x-auto">
          <table className="w-full rounded-xl overflow-hidden border border-border">
            <thead>
              <tr className="bg-primary/10">
                <th className="text-left p-4 font-heading font-bold text-foreground">Feature</th>
                <th className="text-center p-4 font-heading font-bold text-foreground">Basic Bulk SMS</th>
                <th className="text-center p-4 font-heading font-bold text-accent">Buzz Connect</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["SMS Delivery", true, true],
                ["Campaign Strategy", false, true],
                ["Conversion Tracking", false, true],
                ["Multi-Channel Support", false, true],
                ["ROI Optimization", false, true],
              ].map(([feature, basic, bc]) => (
                <tr key={feature as string} className="border-t border-border">
                  <td className="p-4 text-foreground font-medium">{feature as string}</td>
                  <td className="p-4 text-center">{basic ? "✅" : "❌"}</td>
                  <td className="p-4 text-center">✅</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </>
  );
};

export default SmsHeroContent;
