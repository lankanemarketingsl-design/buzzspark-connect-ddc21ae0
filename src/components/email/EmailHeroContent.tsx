import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Zap, Eye, RefreshCw, TrendingUp, Layers, Mail, Users, Shield, Globe, MessageSquare, Target, DollarSign } from "lucide-react";

const EmailHeroContent = () => {
  return (
    <>
      {/* Trust Strip + Price Anchor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 max-w-4xl mx-auto"
      >
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-accent font-bold text-sm">Campaigns from LKR 6,000</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/60 border border-border">
            <Users className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-muted-foreground text-xs font-medium">350,000+ Email Subscribers</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/60 border border-border">
            <Globe className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-muted-foreground text-xs font-medium">200,000+ Monthly on Findit.lk</span>
          </div>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
          Multi-Channel Email Campaigns That <span className="text-accent">Drive Real Results</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Reach your audience, increase visibility, and generate real business opportunities with Buzz Connect. We go beyond basic <strong>bulk email marketing in Sri Lanka</strong> — combining <strong>email campaigns</strong> with Findit.lk advertising to turn messages into customers across <Link to="/" className="text-muted-foreground">email marketing Sri Lanka</Link>.
        </p>
        <p className="text-foreground font-medium mb-6">
          👉 From LKR 6,000 — reach 350,000+ subscribers + 200,000+ monthly users via Findit.lk
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base shadow-lg">
            Launch Your Campaign <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20email%20marketing." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-accent/30 text-foreground font-semibold hover:bg-accent/5 transition-colors text-base">
            <MessageSquare className="w-4 h-4 text-accent" /> Chat on WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Social Proof Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-5 px-6 rounded-2xl bg-muted/30 border border-border">
          {[
            { value: "350K+", label: "Email Subscribers" },
            { value: "200K+", label: "Findit.lk Monthly Users" },
            { value: "LKR 6,000", label: "Starting Price" },
            { value: "Multi-Channel", label: "Email + Ads + Social" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-accent text-xl sm:text-2xl">{stat.value}</div>
              <div className="text-[11px] text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Buzz Connect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-primary/5 border border-primary/20"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">⚡ Why Choose Buzz Connect?</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Email marketing is powerful — but <strong>visibility is what drives results</strong>. Buzz Connect enhances your campaign by combining:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Targeted email delivery to 350,000+ professionals",
            "High-traffic exposure via Findit.lk (200K+ monthly users)",
            "Social media amplification on Facebook, Instagram & LinkedIn",
            "Web & app ad placement — all included in every package",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
        <p className="text-foreground font-semibold">
          👉 Giving your business more reach, more visibility, and more engagement.
        </p>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">Buzz Connect vs Traditional Email Marketing</h2>
        <p className="text-muted-foreground text-center mb-6 text-sm">See why businesses choose our integrated approach</p>
        <div className="overflow-x-auto">
          <table className="w-full rounded-xl overflow-hidden border border-border">
            <thead>
              <tr className="bg-primary/10">
                <th className="text-left p-4 font-heading font-bold text-foreground">Feature</th>
                <th className="text-center p-4 font-heading font-bold text-foreground">Traditional Companies</th>
                <th className="text-center p-4 font-heading font-bold text-accent">Buzz Connect ⭐</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Email Campaign", "✅ Yes", "✅ Yes"],
                ["Multi-Channel Exposure", "Not Included", "✅ Included"],
                ["Marketplace Visibility", "Not Available", "✅ Findit.lk Integration"],
                ["Audience Reach", "Limited", "350,000+ Database"],
                ["Campaign Impact", "Short-Term", "Extended Visibility"],
                ["Engagement Opportunities", "Limited", "High"],
                ["Social Media Sharing", "Not Included", "✅ FB, IG, LinkedIn"],
              ].map(([feature, traditional, bc]) => (
                <tr key={feature} className="border-t border-border hover:bg-muted/30 transition-colors">
                  <td className="p-4 text-foreground font-medium">{feature}</td>
                  <td className="p-4 text-center text-muted-foreground text-sm">{traditional}</td>
                  <td className="p-4 text-center text-accent font-semibold text-sm">{bc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-foreground font-semibold mt-4 text-sm">
          👉 Buzz Connect doesn't just send emails — it expands your reach.
        </p>
      </motion.div>

      {/* Mid-page CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto text-center py-8 px-6 rounded-2xl bg-accent/5 border border-accent/20"
      >
        <p className="text-foreground font-bold text-lg mb-2">Ready to reach 350,000+ professionals?</p>
        <p className="text-muted-foreground text-sm mb-5">Email campaigns starting from just LKR 6,000 — with Findit.lk ads included</p>
        <Link to="/contact-us" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity shadow-lg">
          Get a Free Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">🔄 How It Works</h2>
        <p className="text-foreground font-medium text-center mb-2">From Message to Conversion — A Complete Multi-Channel Funnel</p>
        <p className="text-muted-foreground text-center mb-8 text-sm">Email Campaign → Findit.lk Exposure → Retargeting → Conversion</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Mail, title: "Email Campaign", desc: "Reach a targeted audience of 350,000+ professionals with your message", num: "01", emoji: "📧" },
            { icon: Globe, title: "Findit.lk Exposure", desc: "Your business is featured on Findit.lk — reaching 200,000+ monthly active users", num: "02", emoji: "🌐", link: "https://findit.lk" },
            { icon: Target, title: "Retargeting", desc: "Reconnect with interested users across Facebook, Instagram & LinkedIn to maximize visibility", num: "03", emoji: "🎯" },
            { icon: DollarSign, title: "Conversion", desc: "Turn repeated exposure into real inquiries, leads, and paying customers", num: "04", emoji: "💰" },
          ].map((step, index) => (
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

        {/* Why This Works - Conversion Booster */}
        <div className="mt-8 p-6 rounded-2xl bg-accent/5 border border-accent/20">
          <h3 className="font-heading font-bold text-foreground text-center mb-4">🔥 Why This Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Multiple touchpoints increase customer trust",
              "Repeated visibility improves brand recall",
              "Multi-channel exposure drives higher engagement",
              "Designed to convert attention into action",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-foreground font-semibold mt-6">
          👉 This is how Buzz Connect turns campaigns into real business results.
        </p>
      </motion.div>

      {/* Perfect For */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">🎯 Perfect For</h2>
        <p className="text-muted-foreground text-sm mb-6">Businesses across every industry use our email campaigns</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "Education institutes",
            "Job & recruitment campaigns",
            "Real estate & property",
            "SMEs & local businesses",
            "Promotions & offers",
            "Events & launches",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 p-4 rounded-xl bg-muted/40 border border-border hover:border-accent/30 transition-colors">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why This Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-accent/5 border border-accent/20"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">🧠 Why This Works</h2>
        <p className="text-muted-foreground text-sm mb-6">The marketing psychology behind our strategy</p>
        <div className="space-y-4">
          {[
            { icon: Layers, bold: "Multiple platforms increase trust", text: "When customers see your brand in email, on Findit.lk, and on social media — credibility grows" },
            { icon: Eye, bold: "People respond to repeated exposure", text: "The more often they see your message, the more likely they are to take action" },
            { icon: RefreshCw, bold: "Visibility drives action", text: "Consistent presence converts passive viewers into active leads" },
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
            💡 Buzz Connect ensures your campaign is seen — not just sent.
          </p>
        </div>
      </motion.div>

      {/* Findit.lk Power Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-accent/10 border border-accent/30 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">🏆 Powered by Findit.lk</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Every email campaign includes <strong>Findit.lk advertising</strong> — giving your business exposure to a high-intent audience actively searching for services and offers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="text-center p-4 rounded-xl bg-card border border-border">
            <div className="font-heading font-bold text-accent text-2xl">200,000+</div>
            <div className="text-xs text-muted-foreground">Monthly Visitors</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-card border border-border">
            <div className="font-heading font-bold text-accent text-2xl">High-Intent</div>
            <div className="text-xs text-muted-foreground">Audience Searching Offers</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-card border border-border">
            <div className="font-heading font-bold text-accent text-2xl">Continuous</div>
            <div className="text-xs text-muted-foreground">Visibility Beyond Email</div>
          </div>
        </div>
        <p className="text-foreground font-semibold text-center">
          👉 This is your competitive advantage.
        </p>
      </motion.div>
    </>
  );
};

export default EmailHeroContent;
