import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Zap, Eye, RefreshCw, TrendingUp } from "lucide-react";

const SmsHeroContent = () => {
  return (
    <>
      {/* Price Anchor + Hook */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="inline-block px-5 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-bold text-sm mb-6">
          SMS Campaigns starting from LKR 25,000
        </div>
        <p className="text-xl font-semibold text-foreground mb-4">
          Reach customers instantly on mobile + expand visibility across platforms.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          At <strong>Buzz Connect</strong>, we don't just send bulk SMS — we combine <strong>targeted SMS campaigns</strong> with multi-channel promotion to maximize visibility and engagement for businesses across <Link to="/" className="text-muted-foreground">SMS marketing Sri Lanka</Link>.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
            Start Your SMS Campaign <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>

      {/* Expand the Power of SMS Marketing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-primary/5 border border-primary/20"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Expand the Power of SMS Marketing</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          SMS marketing is one of the fastest ways to reach your audience — with instant delivery and high visibility.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          At Buzz Connect, we enhance its impact by combining SMS with a multi-channel strategy. This helps your business:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Reach the right audience with targeted messaging",
            "Reinforce your message across multiple platforms",
            "Stay visible beyond a single message",
            "Create more opportunities for engagement",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
        <p className="text-foreground font-semibold">
          👉 Because real results come from visibility + repetition, not just delivery.
        </p>
      </motion.div>

      {/* Mini Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Standard SMS vs Buzz Connect</h2>
        <div className="overflow-x-auto">
          <table className="w-full rounded-xl overflow-hidden border border-border">
            <thead>
              <tr className="bg-primary/10">
                <th className="text-left p-4 font-heading font-bold text-foreground">Feature</th>
                <th className="text-center p-4 font-heading font-bold text-foreground">Standard SMS</th>
                <th className="text-center p-4 font-heading font-bold text-accent">Buzz Connect</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["SMS Delivery", "✅", "✅"],
                ["Targeting", "⚠️ Basic", "✅ Advanced"],
                ["Multi-Channel Support", "❌", "✅ Included"],
                ["Visibility Duration", "One-time", "Extended"],
                ["Engagement Opportunity", "Limited", "High"],
              ].map(([feature, standard, bc]) => (
                <tr key={feature} className="border-t border-border">
                  <td className="p-4 text-foreground font-medium">{feature}</td>
                  <td className="p-4 text-center text-muted-foreground">{standard}</td>
                  <td className="p-4 text-center text-accent font-semibold">{bc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* How It Works - Simple */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">How Our SMS Campaign Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Target Your Audience", desc: "We send SMS to the right users based on demographics and location" },
            { icon: Eye, title: "Expand Your Reach", desc: "Campaign is supported with multi-channel exposure across platforms" },
            { icon: TrendingUp, title: "Drive Responses", desc: "Customers take action through simple, clear CTAs" },
          ].map((step, i) => (
            <div key={step.title} className="p-6 rounded-2xl bg-card shadow-card border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-accent mb-1 block">Step {i + 1}</span>
              <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-foreground font-semibold mt-6">
          👉 More reach → More engagement → Better results
        </p>
      </motion.div>

      {/* Perfect For (Use Cases) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Perfect For</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "Promotions & offers",
            "Event announcements",
            "Product launches",
            "Customer reminders",
            "Retail & service businesses",
            "Corporate communications",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 p-4 rounded-xl bg-muted/40 border border-border">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why This Approach Works (Psychology) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-accent/5 border border-accent/20"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Why This Approach Works</h2>
        <div className="space-y-4">
          {[
            { icon: Zap, text: "SMS delivers instant attention — your message is seen within minutes" },
            { icon: Eye, text: "Multi-channel creates repeated exposure across platforms" },
            { icon: RefreshCw, text: "Repetition builds trust and drives action over time" },
          ].map((item) => (
            <div key={item.text} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <item.icon className="w-4 h-4 text-accent" />
              </div>
              <p className="text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-foreground font-semibold mt-6">
          👉 SMS is the trigger. Buzz Connect multiplies the impact.
        </p>
      </motion.div>
    </>
  );
};

export default SmsHeroContent;
