import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Zap, Eye, RefreshCw, TrendingUp, MessageSquare, Users, Globe } from "lucide-react";

const SmsHeroContent = () => {
  return (
    <>
      {/* Trust Strip + Price Anchor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 max-w-4xl mx-auto"
      >
        {/* Trust indicators */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-accent font-bold text-sm">Campaigns from LKR 25,000</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/60 border border-border">
            <Users className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-muted-foreground text-xs font-medium">600,000+ Targeted Contacts</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/60 border border-border">
            <Shield className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-muted-foreground text-xs font-medium">95%+ Open Rate</span>
          </div>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
          Don't Just Send SMS — <span className="text-accent">Turn Every Message Into a Campaign</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Most businesses send bulk SMS and hope for results. At <strong>Buzz Connect</strong>, we combine <strong>targeted SMS campaigns</strong> with multi-channel promotion to maximize visibility and engagement for businesses across <Link to="/" className="text-muted-foreground">SMS marketing Sri Lanka</Link>.
        </p>
        <p className="text-foreground font-medium mb-6">
          👉 From LKR 25,000 — reach thousands instantly and expand visibility across multiple platforms.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base shadow-lg">
            Start Your SMS Campaign <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20SMS%20marketing." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-accent/30 text-foreground font-semibold hover:bg-accent/5 transition-colors text-base">
            <MessageSquare className="w-4 h-4 text-accent" /> Chat on WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Social Proof Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-5 px-6 rounded-2xl bg-muted/30 border border-border">
          {[
            { value: "600K+", label: "Targeted Contacts" },
            { value: "26", label: "Districts Covered" },
            { value: "95%+", label: "SMS Open Rate" },
            { value: "2 LKR", label: "Per Message From" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-accent text-xl sm:text-2xl">{stat.value}</div>
              <div className="text-[11px] text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
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

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">Standard SMS Campaigns vs Buzz Connect</h2>
        <p className="text-muted-foreground text-center mb-6 text-sm">See why businesses choose our integrated approach</p>
        <div className="overflow-x-auto">
          <table className="w-full rounded-xl overflow-hidden border border-border">
            <thead>
              <tr className="bg-primary/10">
                <th className="text-left p-4 font-heading font-bold text-foreground">Feature</th>
                <th className="text-center p-4 font-heading font-bold text-foreground">Standard SMS Campaigns</th>
                <th className="text-center p-4 font-heading font-bold text-accent">Buzz Connect ⭐</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["SMS Delivery", "✅ Included", "✅ Included"],
                ["Audience Targeting", "⚠️ Basic Segmentation", "✅ Advanced Targeting"],
                ["Multi-Channel Support", "Not Included", "✅ Integrated Multi-Channel Approach"],
                ["Campaign Visibility", "One-Time Reach", "Extended Visibility Across Platforms"],
                ["Engagement Potential", "Limited", "High Engagement Opportunities"],
                ["Customer Touchpoints", "Single Channel", "Multiple Touchpoints"],
                ["Campaign Impact", "Short-Term", "Sustained & Reinforced"],
              ].map(([feature, standard, bc]) => (
                <tr key={feature} className="border-t border-border hover:bg-muted/30 transition-colors">
                  <td className="p-4 text-foreground font-medium">{feature}</td>
                  <td className="p-4 text-center text-muted-foreground text-sm">{standard}</td>
                  <td className="p-4 text-center text-accent font-semibold text-sm">{bc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Mid-page CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto text-center py-8 px-6 rounded-2xl bg-accent/5 border border-accent/20"
      >
        <p className="text-foreground font-bold text-lg mb-2">Ready to reach thousands of customers instantly?</p>
        <p className="text-muted-foreground text-sm mb-5">SMS campaigns starting from just LKR 25,000</p>
        <Link to="/contact-us" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity shadow-lg">
          Get a Free Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* How It Works - Simple 3-Step */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">How Our SMS Campaign Works</h2>
        <p className="text-muted-foreground text-center mb-8 text-sm">Simple. Effective. Results-driven.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
          {[
            { icon: Zap, title: "Target Your Audience", desc: "We send SMS to the right users based on demographics, location, and industry", num: "01" },
            { icon: Eye, title: "Expand Your Reach", desc: "Campaign is supported with multi-channel exposure across platforms for extended visibility", num: "02" },
            { icon: TrendingUp, title: "Drive Responses", desc: "Customers take action through simple, clear CTAs — generating real inquiries", num: "03" },
          ].map((step) => (
            <div key={step.title} className="p-6 rounded-2xl bg-card shadow-card border border-border text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">{step.num}</div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
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
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Perfect For</h2>
        <p className="text-muted-foreground text-sm mb-6">Businesses across every industry use our SMS campaigns</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "Promotions & offers",
            "Event announcements",
            "Product launches",
            "Customer reminders",
            "Retail & service businesses",
            "Corporate communications",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 p-4 rounded-xl bg-muted/40 border border-border hover:border-accent/30 transition-colors">
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
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Why This Approach Works</h2>
        <p className="text-muted-foreground text-sm mb-6">The marketing psychology behind our strategy</p>
        <div className="space-y-4">
          {[
            { icon: Zap, text: "SMS delivers instant attention — your message is seen within minutes", bold: "Instant attention" },
            { icon: Eye, text: "Multi-channel creates repeated exposure across platforms", bold: "Repeated exposure" },
            { icon: RefreshCw, text: "Repetition builds trust and drives action over time", bold: "Trust through repetition" },
          ].map((item) => (
            <div key={item.bold} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">{item.bold}</p>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
          <p className="text-foreground font-bold text-center">
            💡 SMS is the trigger. Buzz Connect multiplies the impact.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default SmsHeroContent;
