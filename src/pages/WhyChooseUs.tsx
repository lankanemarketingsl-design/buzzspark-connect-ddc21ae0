import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Globe, Timer, Coins, Target, BarChart3, Handshake, Lightbulb, TrendingUp, Mail, Phone, MessageSquare, Share2, Megaphone, Check, X, GitCompareArrows } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const channels = [
  { name: "Email Marketing", path: "/email-marketing", icon: Mail },
  { name: "SMS Marketing", path: "/sms-marketing", icon: Phone },
  { name: "WhatsApp Marketing", path: "/whatsapp-marketing", icon: MessageSquare },
  { name: "Social Media Marketing", path: "/social-media-marketing-sri-lanka", icon: Share2 },
  { name: "Online Advertising", path: "/online-advertising-sri-lanka", icon: Megaphone },
];

const finditBenefits = [
  "Access to a large active audience",
  "High visibility for promotions",
  "Additional exposure beyond direct marketing",
  "Better engagement and lead generation",
];

const databases = [
  "Corporate and executive audiences",
  "VIP and high-income individuals",
  "Industry-specific professionals",
  "District-wise targeting across Sri Lanka",
];

const results = [
  "High visibility in a short time",
  "Increased customer engagement",
  "More leads and inquiries",
  "Better brand awareness",
  "Higher return on investment",
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const WhyChooseUs = () => {
  return (
    <ServicePageLayout
      badge="Why Choose Us"
      title="Why Choose Buzz Connect for Digital Marketing in Sri Lanka?"
      subtitle="Sri Lanka's most trusted multi-channel marketing company delivering fast, cost-effective, and results-driven campaigns since 2014."
    >
      <SEOHead
        title="Why Choose Buzz Connect | Best Digital Marketing Company in Sri Lanka"
        description="Discover why Buzz Connect is Sri Lanka's leading multi-channel marketing company with email, SMS, WhatsApp & Findit.lk integration."
        canonical="/why-choose-us"
        keywords="why choose Buzz Connect, best digital marketing company Sri Lanka, multi-channel marketing Sri Lanka, email marketing Sri Lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Why Choose Us", url: "/why-choose-us" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Why Choose Buzz Connect",
          description: "Discover why Buzz Connect is Sri Lanka's leading multi-channel marketing company.",
          mainEntity: {
            "@type": "Organization",
            name: "Buzz Connect",
            foundingDate: "2014",
            areaServed: "Sri Lanka",
          },
        }]}
      />

      <div className="space-y-16">
        {/* Intro */}
        <motion.section {...fadeUp} className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            What makes us different is our ability to combine multiple marketing channels into one powerful strategy that delivers maximum reach in a short period of time.
          </p>
        </motion.section>

        {/* Multi-Channel Expertise */}
        <motion.section {...fadeUp} transition={{ delay: 0.1 }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Multi-Channel Marketing Expertise</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Unlike traditional marketing companies, Buzz Connect uses a <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing approach</Link> to ensure your message reaches customers across different platforms:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {channels.map((ch) => (
              <Link
                key={ch.path}
                to={ch.path}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-background border border-border hover:border-accent/40 transition-all text-center"
              >
                <ch.icon className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">{ch.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4">
            This ensures your campaign reaches both targeted audiences and mass markets, increasing effectiveness and conversions.
          </p>
        </motion.section>

        {/* Findit.lk Integration */}
        <motion.section {...fadeUp} transition={{ delay: 0.15 }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <Globe className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Integration with Findit.lk</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We integrate our campaigns with Findit.lk, one of Sri Lanka's leading online promotion platforms. This gives your business:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {finditBenefits.map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border">
                <span className="text-accent font-bold">✔</span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-accent font-semibold mt-4 text-sm">
            👉 This is a unique advantage that most competitors do not offer.
          </p>
        </motion.section>

        {/* Fast Results */}
        <motion.section {...fadeUp} transition={{ delay: 0.2 }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <Timer className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Fast Results & High Reach</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Buzz Connect is designed for speed and impact.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Reach thousands of customers within minutes", "Achieve strong campaign awareness in just a few days", "Ideal for short-term and urgent promotions", "Immediate engagement through direct channels"].map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border">
                <span className="text-accent font-bold">⚡</span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Cost Effective */}
        <motion.section {...fadeUp} transition={{ delay: 0.25 }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <Coins className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Cost-Effective Marketing Solutions</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We provide some of the most affordable digital marketing solutions in Sri Lanka without compromising on quality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Flexible packages for SMEs and corporates", "Low cost per reach", "High return on investment", "No hidden charges"].map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border">
                <span className="text-accent font-bold">✔</span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Targeted Databases */}
        <motion.section {...fadeUp} transition={{ delay: 0.3 }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Highly Targeted Databases</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our campaigns are powered by one of the largest and most segmented databases in Sri Lanka.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {databases.map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border">
                <span className="text-accent font-bold">🎯</span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4">
            This ensures your message reaches the right audience every time. Explore our <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead generation solutions</Link>.
          </p>
        </motion.section>

        {/* Proven Experience */}
        <motion.section {...fadeUp} transition={{ delay: 0.35 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <BarChart3 className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Proven Experience & Results</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "20,000+", label: "Campaigns" },
              { value: "1,500+", label: "Clients" },
              { value: "#1", label: "Database in Sri Lanka" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-card shadow-card border border-border">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4 text-center">We focus on real outcomes — not just impressions.</p>
        </motion.section>

        {/* End-to-End */}
        <motion.section {...fadeUp} transition={{ delay: 0.4 }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <Handshake className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">End-to-End Marketing Solutions</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Buzz Connect provides a complete marketing ecosystem:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["Campaign strategy", "Creative design", "Execution across channels", "Performance tracking"].map((item, i) => (
              <div key={item} className="flex flex-col items-center text-center p-4 rounded-xl bg-background border border-border">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm mb-2">{i + 1}</div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4">This means you get everything you need in one place.</p>
        </motion.section>

        {/* What Makes Us Different */}
        <motion.section {...fadeUp} transition={{ delay: 0.45 }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">What Makes Us Different?</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">Most marketing companies focus on a single channel. Buzz Connect combines:</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
              <span className="text-accent font-bold">👉</span>
              <span className="text-foreground font-medium">Direct marketing — <Link to="/email-marketing" className="text-accent hover:underline">Email</Link>, <Link to="/sms-marketing" className="text-accent hover:underline">SMS</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline">WhatsApp</Link></span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
              <span className="text-accent font-bold">👉</span>
              <span className="text-foreground font-medium">Mass exposure — Findit.lk & <Link to="/online-advertising-sri-lanka" className="text-accent hover:underline">online ads</Link></span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
              <span className="text-accent font-bold">👉</span>
              <span className="text-foreground font-medium">Creative content + strategy — <Link to="/graphic-designing-in-sri-lanka" className="text-accent hover:underline">Graphic design</Link> & campaign planning</span>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4">This creates a powerful marketing engine that delivers faster and better results than traditional methods.</p>
        </motion.section>

        {/* Comparison Table */}
        <motion.section {...fadeUp} transition={{ delay: 0.47 }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <GitCompareArrows className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">How We Compare</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            See how Buzz Connect stacks up against other digital marketing providers in Sri Lanka.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-heading font-semibold text-foreground">Feature</th>
                  <th className="text-center py-3 px-4 font-heading font-semibold text-accent bg-accent/5 rounded-t-lg">Buzz Connect</th>
                  <th className="text-center py-3 px-4 font-heading font-semibold text-muted-foreground">Other Providers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { feature: "Email Marketing", buzz: true, other: true },
                  { feature: "SMS Marketing", buzz: true, other: true },
                  { feature: "WhatsApp Marketing", buzz: true, other: "Limited" },
                  { feature: "Social Media Marketing", buzz: true, other: true },
                  { feature: "Findit.lk Integration", buzz: true, other: false },
                  { feature: "Multi-Channel Campaigns", buzz: true, other: false },
                  { feature: "Category-Based Targeting", buzz: true, other: false },
                  { feature: "Large Segmented Database", buzz: true, other: "Limited" },
                  { feature: "Campaign Launch Within Days", buzz: true, other: false },
                  { feature: "Industry-Specific Audiences", buzz: true, other: false },
                  { feature: "End-to-End Campaign Management", buzz: true, other: "Limited" },
                  { feature: "Affordable SME Packages", buzz: true, other: "Varies" },
                  { feature: "Graphic Design Included", buzz: true, other: "Extra Cost" },
                  { feature: "Performance Tracking", buzz: true, other: "Limited" },
                ].map((row) => (
                  <tr key={row.feature} className="hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4 text-foreground font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-center bg-accent/5">
                      {row.buzz === true ? (
                        <Check className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <span className="text-muted-foreground text-xs">{String(row.buzz)}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.other === true ? (
                        <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                      ) : row.other === false ? (
                        <X className="w-5 h-5 text-destructive/60 mx-auto" />
                      ) : (
                        <span className="text-xs text-muted-foreground">{row.other}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-accent font-semibold mt-6 text-sm text-center">
            ✅ Only Buzz Connect offers Findit.lk integration — an exclusive advantage no other provider can match.
          </p>
        </motion.section>

        {/* Results You Can Expect */}
        <motion.section {...fadeUp} transition={{ delay: 0.5 }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Results You Can Expect</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {results.map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border">
                <span className="text-accent font-bold">📈</span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section {...fadeUp} transition={{ delay: 0.55 }} className="p-8 rounded-2xl gradient-hero text-center">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-3">Choose Buzz Connect for Powerful Marketing</h2>
          <p className="text-primary-foreground/80 mb-6 text-lg">
            Start your campaign today and reach thousands of potential customers across multiple channels in Sri Lanka.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/email-marketing" className="inline-block px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              Start Your Campaign
            </Link>
            <Link to="/multi-channel-marketing-sri-lanka" className="inline-block px-6 py-3 rounded-full bg-card text-foreground font-bold hover:opacity-90 transition-opacity">
              View Packages
            </Link>
          </div>
        </motion.section>
      </div>
    </ServicePageLayout>
  );
};

export default WhyChooseUs;
