import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const smsPackages = [
  {
    name: "Budget",
    reach: "450,000",
    color: "border-border",
    items: ["SMS Campaign for 20,000 contacts", "Email Campaign for 350,000 subscribers", "Findit.lk Feature Ad (50K hits/month)", "Promotion landing page creation", "Findit.lk Pop-up Banner (1 day)", "Facebook Boosting"],
  },
  {
    name: "Silver",
    reach: "550,000",
    color: "border-secondary/50",
    items: ["SMS Campaign for 50,000 contacts", "Email Campaign for 350,000 subscribers", "Findit.lk Feature Ad (50K hits/month)", "Findit.lk Pop-up Banner (1 day)", "Promotion landing page creation", "Facebook Boosting"],
  },
  {
    name: "Gold",
    reach: "950,000",
    color: "border-accent/50",
    items: ["SMS Campaign for 150,000 contacts", "Two Email Campaigns for 350,000", "Findit.lk Feature Ad (50K hits/month)", "Findit.lk Pop-up Banner (2 days)", "Findit.lk Main & Side Banners", "Facebook Boosting"],
  },
  {
    name: "Platinum",
    reach: "1.2M+",
    color: "border-accent",
    items: ["SMS Campaign for 400,000 contacts", "Two Email Campaigns for 350,000", "Findit.lk Feature Ad (50K hits/month)", "Findit.lk Pop-up Banner (4 days)", "Findit.lk Main Banner (1 month)", "Facebook Boosting"],
  },
];

const waPackages = [
  {
    name: "Budget",
    reach: "450,000",
    items: ["WhatsApp Campaign for 30,000 contacts", "Email Campaign for 350,000 corporate", "Findit.lk Feature Ad (50K hits/month)", "Findit.lk Pop-up Banner (1 day)", "Facebook Boosting"],
  },
  {
    name: "Silver",
    reach: "550,000",
    items: ["WhatsApp Campaign for 60,000 contacts", "Email Campaign for 350,000 corporate", "Findit.lk Feature Ad (50K hits/month)", "Findit.lk Main Banner (2 weeks)", "Facebook Boosting"],
  },
  {
    name: "Gold",
    reach: "575,000",
    items: ["WhatsApp Campaign for 110,000 contacts", "Two Email Campaigns for 350,000", "Findit.lk Lifetime Feature Profile", "Findit.lk Main Banner (3 weeks)", "Facebook Boosting"],
  },
  {
    name: "Platinum",
    reach: "625,000",
    items: ["WhatsApp Campaign for 175,000 contacts", "Two Email Campaigns for 350,000", "Findit.lk Lifetime Feature Profile", "Findit.lk Main Banner (1 month)", "Facebook Boosting"],
  },
];

const PackageCard = ({ pkg, index }: { pkg: { name: string; reach: string; color?: string; items: string[] }; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`p-6 rounded-2xl bg-card shadow-card border-2 ${pkg.color || 'border-border'} hover:shadow-card-hover transition-all`}
  >
    <div className="text-sm font-semibold text-accent uppercase tracking-wider">{pkg.name} Package</div>
    <div className="font-heading text-3xl font-bold text-foreground mt-1">Reach {pkg.reach}</div>
    <ul className="mt-5 space-y-2">
      {pkg.items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-foreground">
          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const SpecialPackages = () => {
  return (
    <ServicePageLayout
      badge="Special Packages"
      title="Special Advertising Packages"
      subtitle="Combined SMS/WhatsApp, Email & Web advertising packages designed for maximum reach across Sri Lanka."
    >
      <h2 className="font-heading text-2xl font-bold text-foreground mb-8">SMS Marketing Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {smsPackages.map((pkg, i) => (
          <PackageCard key={pkg.name + 'sms'} pkg={pkg} index={i} />
        ))}
      </div>

      <h2 className="font-heading text-2xl font-bold text-foreground mb-8">WhatsApp Marketing Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {waPackages.map((pkg, i) => (
          <PackageCard key={pkg.name + 'wa'} pkg={pkg} index={i} />
        ))}
      </div>
    </ServicePageLayout>
  );
};

export default SpecialPackages;
