import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Users, Crown, CheckCircle } from "lucide-react";

const packages = [
  { name: "One Email Campaign + Findit.lk Web Ad", corp: "LKR 6,000", full: "LKR 8,000" },
  { name: "Two Email Campaigns + Findit.lk Web Ads", corp: "LKR 10,800", full: "LKR 15,000" },
  { name: "Five Email Campaigns (One month)", corp: "LKR 28,000", full: "LKR 38,000" },
  { name: "Ten Email Campaigns (Two months)", corp: "LKR 54,000", full: "LKR 72,000" },
  { name: "Twenty Email Campaigns", corp: "LKR 108,000", full: "LKR 140,000" },
  { name: "VIP Email Campaign (50K VIP)", corp: "LKR 7,500", full: "—" },
];

const EmailMarketing = () => {
  return (
    <ServicePageLayout
      badge="Email Marketing"
      title="Email Marketing Solutions"
      subtitle="Reach over 350,000+ active subscribers with targeted email campaigns across Sri Lanka's corporate sector."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-card shadow-card border border-border"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Users className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">Corporate Reach</h3>
          </div>
          <p className="text-muted-foreground mb-4">350,000+ active contacts, age 18–55, mostly Western Province.</p>
          <ul className="space-y-2">
            {["Managers & General Managers", "Executives & Officers", "Small Business Owners", "Undergraduate Students", "Association Members", "Gender: Male 60% & Female 40%"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-2xl bg-card shadow-card border border-border"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">VIP Reach</h3>
          </div>
          <p className="text-muted-foreground mb-4">50,000+ premium contacts in Colombo, age 35–60, 80% male.</p>
          <ul className="space-y-2">
            {["Premium Business Leaders", "CEOs & Directors", "Celebrities & Sports Personalities", "Doctors & Entrepreneurs", "High-salary Employees (350K+/mo)", "Government Institute Heads"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Pricing Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">Special Advertising Packages</h2>
        <p className="text-muted-foreground text-center mb-8">No hidden charges — choose your plan</p>

        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-xl shadow-card border border-border overflow-hidden">
            <thead>
              <tr className="gradient-hero text-primary-foreground">
                <th className="text-left p-4 font-heading">Package</th>
                <th className="text-center p-4 font-heading">350K Corporate</th>
                <th className="text-center p-4 font-heading">500K Corporate</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, i) => (
                <tr key={pkg.name} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="p-4 text-sm text-foreground font-medium">{pkg.name}</td>
                  <td className="p-4 text-center text-sm font-semibold text-accent">{pkg.corp}</td>
                  <td className="p-4 text-center text-sm font-semibold text-secondary">{pkg.full}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-3 text-center">
          All packages include Facebook, Instagram & LinkedIn sharing + Findit.lk web & app ads
        </p>
      </motion.div>
    </ServicePageLayout>
  );
};

export default EmailMarketing;
