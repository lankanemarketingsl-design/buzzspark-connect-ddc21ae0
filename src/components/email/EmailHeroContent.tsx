import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, ArrowRight, Layers, TrendingUp, Eye, RefreshCw } from "lucide-react";

const comparisonRows = [
  { feature: "Email Campaigns", others: true, buzz: true },
  { feature: "Campaign Strategy", others: false, buzz: true },
  { feature: "Multi-Channel Support", others: false, buzz: true },
  { feature: "Findit.lk Advertising", others: false, buzz: true },
  { feature: "Conversion Optimization", others: false, buzz: true },
  { feature: "Retargeting Across Platforms", others: false, buzz: true },
];

const funnelSteps = [
  { icon: "📧", label: "Email Campaign" },
  { icon: "🌐", label: "Findit.lk Ads" },
  { icon: "🎯", label: "Retargeting" },
  { icon: "💰", label: "Conversion" },
];

const multiChannelBenefits = [
  { icon: Layers, text: "Reinforces your message across multiple channels" },
  { icon: TrendingUp, text: "Higher conversion rates than email alone" },
  { icon: Eye, text: "Increased brand recall through repeated exposure" },
  { icon: RefreshCw, text: "Better ROI with integrated campaign tracking" },
];

const EmailHeroContent = () => {
  return (
    <>
      {/* What is Email Marketing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What is Email Marketing in Sri Lanka?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong>Email marketing</strong> is one of the most powerful digital marketing channels available to businesses in Sri Lanka. It allows companies to send targeted promotional messages, newsletters, and offers directly to potential customers' inboxes. With open rates significantly higher than social media reach, <strong>email campaigns in Sri Lanka</strong> remain the preferred channel for businesses seeking measurable results.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Whether you're launching a new product, promoting an event, or nurturing leads, <strong>email advertising in Sri Lanka</strong> delivers consistent engagement at a fraction of the cost of traditional advertising methods.
        </p>
      </motion.div>

      {/* Why Email Alone Is Not Enough */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-destructive/5 border border-destructive/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-7 h-7 text-destructive" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Why Email Marketing Alone Is Not Enough</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Most <strong>bulk email marketing</strong> providers in Sri Lanka simply send emails and hope for the best. But the reality is:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2 text-muted-foreground"><span className="text-destructive font-bold mt-0.5">✗</span> Emails get buried in crowded inboxes</li>
          <li className="flex items-start gap-2 text-muted-foreground"><span className="text-destructive font-bold mt-0.5">✗</span> No follow-up means lost customers</li>
          <li className="flex items-start gap-2 text-muted-foreground"><span className="text-destructive font-bold mt-0.5">✗</span> No tracking means no real ROI measurement</li>
          <li className="flex items-start gap-2 text-muted-foreground"><span className="text-destructive font-bold mt-0.5">✗</span> Single-channel campaigns have lower conversion rates</li>
        </ul>
        <p className="text-foreground font-semibold">
          👉 That's why Buzz Connect combines <strong>email marketing with Findit.lk multi-channel advertising</strong> — a strategy no other provider in Sri Lanka offers.
        </p>
      </motion.div>

      {/* Multi-Channel System */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4 text-center">Our Multi-Channel Email Marketing System</h2>
        <p className="text-muted-foreground text-center mb-8">
          Unlike traditional <strong>email marketing services in Sri Lanka</strong>, we don't just send emails — we build conversion funnels.
        </p>

        {/* Funnel Visual */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 mb-10">
          {funnelSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className="flex flex-col items-center p-4 rounded-xl bg-card shadow-card border border-border min-w-[120px]">
                <span className="text-2xl mb-1">{step.icon}</span>
                <span className="text-xs font-bold text-foreground text-center">{step.label}</span>
              </div>
              {i < funnelSteps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-accent hidden sm:block" />
              )}
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {multiChannelBenefits.map((b) => (
            <div key={b.text} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <b.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{b.text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Exclusive Findit.lk + Email */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-accent/10 border border-accent/30 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">🔥 Exclusive: Email + Findit.lk Advertising</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Only Buzz Connect offers integrated <strong>email campaigns powered by Findit.lk multi-channel advertising</strong>. When you run an email campaign with us, your audience sees your brand not just in their inbox, but also on Sri Lanka's leading business directory — Findit.lk.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Reach the same audience twice for maximum brand recall</li>
          <li className="flex items-center gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Web ads, app ads, and business feed promotion included</li>
          <li className="flex items-center gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Social media sharing on Facebook, Instagram & LinkedIn</li>
          <li className="flex items-center gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> No extra cost — all included in every package</li>
        </ul>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Traditional Email Marketing vs Buzz Connect</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-xl shadow-card border border-border overflow-hidden text-sm">
            <thead>
              <tr className="gradient-hero text-primary-foreground">
                <th className="text-left p-4 font-heading">Feature</th>
                <th className="text-center p-4 font-heading">Others</th>
                <th className="text-center p-4 font-heading">Buzz Connect</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="p-4 text-foreground font-medium">{row.feature}</td>
                  <td className="p-4 text-center">{row.others ? <span className="text-accent">✅</span> : <span className="text-destructive">❌</span>}</td>
                  <td className="p-4 text-center"><span className="text-accent">✅</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Email Campaign Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Email Campaign Strategy for Sri Lankan Businesses</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A successful <strong>email marketing campaign in Sri Lanka</strong> requires more than just a good subject line. At Buzz Connect, we plan every campaign with a clear strategy:
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Audience segmentation based on industry, location, and demographics</li>
          <li className="flex items-center gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Professional email design optimized for mobile and desktop</li>
          <li className="flex items-center gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> A/B testing for subject lines and content</li>
          <li className="flex items-center gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Multi-channel follow-up through Findit.lk advertising</li>
          <li className="flex items-center gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> Detailed analytics and conversion tracking</li>
        </ul>
      </motion.div>
    </>
  );
};

export default EmailHeroContent;
