import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Globe, ShoppingBag, Building } from "lucide-react";

const finditPackages = [
  { item: "Image of Promotion Ad", impressions: "25,000+", price: "LKR 1,000", duration: "4 Weeks" },
  { item: "Popup Banner", impressions: "35,000+", price: "LKR 2,500", duration: "1 Week" },
  { item: "Featured Promotion", impressions: "200,000+", price: "LKR 5,000", duration: "4 Weeks" },
  { item: "Email Campaign", impressions: "250,000+", price: "LKR 4,000", duration: "4 Weeks" },
  { item: "Push Notification", impressions: "250,000+", price: "—", duration: "4 Weeks" },
];

const buyitPackages = [
  { item: "Popup Banner", price: "LKR 25,000", duration: "1 Week" },
  { item: "Top Banner", price: "LKR 15,000", duration: "2 Weeks" },
  { item: "Side Banner (Listing Page)", price: "LKR 15,000", duration: "2 Weeks" },
  { item: "Side Banner (App View)", price: "LKR 5,000", duration: "1 Week" },
];

const comboPackages = [
  {
    name: "Package 1",
    impressions: "500,000",
    period: "2 Days",
    features: ["Findit Popup & Featured", "Buyit Popup, Side & Top Banner", "Email Campaign", "Facebook & Instagram Story"],
  },
  {
    name: "Package 2",
    impressions: "750,000",
    period: "4 Days",
    features: ["All Package 1 features", "Social Media Promotions Sharing", "Extended duration across platforms"],
  },
  {
    name: "Package 3",
    impressions: "1,000,000",
    period: "5 Days",
    features: ["All Package 2 features", "2 Email Campaigns + Push Notification", "SMS Campaign (25,000 contacts)"],
  },
  {
    name: "Package 4",
    impressions: "1,200,000",
    period: "7 Days",
    features: ["All Package 3 features", "3 Email Campaigns", "SMS Campaign (75,000 contacts)"],
  },
];

const OnlineAdvertising = () => {
  return (
    <ServicePageLayout
      badge="Online Advertising"
      title="Online Advertising Sri Lanka"
      subtitle="Build your brand online with web ads, discount coupons, and banner packages across Sri Lanka's top web platforms."
    >
      {/* Findit.lk */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-8 h-8 text-accent" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Findit.lk Advertising</h2>
        </div>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Sri Lanka's No.1 promotions directory with 200,000+ monthly hits. Ranked #1 on Google for "promotions in Sri Lanka" and "discounts in Sri Lanka."
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-xl shadow-card border border-border overflow-hidden">
            <thead>
              <tr className="gradient-hero text-primary-foreground">
                <th className="text-left p-4 font-heading">Ad Type</th>
                <th className="text-center p-4 font-heading">Impressions</th>
                <th className="text-center p-4 font-heading">Price</th>
                <th className="text-center p-4 font-heading">Duration</th>
              </tr>
            </thead>
            <tbody>
              {finditPackages.map((p, i) => (
                <tr key={p.item} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="p-4 text-sm text-foreground font-medium">{p.item}</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">{p.impressions}</td>
                  <td className="p-4 text-center text-sm font-semibold text-accent">{p.price}</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">{p.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Buyit.lk */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <ShoppingBag className="w-8 h-8 text-secondary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Buyit.lk Advertising</h2>
        </div>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Sri Lanka's online marketplace for vehicles, electronics, properties & more. Effective island-wide audience reach.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-xl shadow-card border border-border overflow-hidden">
            <thead>
              <tr className="gradient-hero text-primary-foreground">
                <th className="text-left p-4 font-heading">Ad Type</th>
                <th className="text-center p-4 font-heading">Price</th>
                <th className="text-center p-4 font-heading">Duration</th>
              </tr>
            </thead>
            <tbody>
              {buyitPackages.map((p, i) => (
                <tr key={p.item} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="p-4 text-sm text-foreground font-medium">{p.item}</td>
                  <td className="p-4 text-center text-sm font-semibold text-accent">{p.price}</td>
                  <td className="p-4 text-center text-sm text-muted-foreground">{p.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Combo Packages */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Building className="w-8 h-8 text-accent" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Combined Web Ad Packages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comboPackages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card shadow-card border border-border"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold text-accent uppercase">{pkg.name}</div>
                <div className="text-xs text-muted-foreground">{pkg.period}</div>
              </div>
              <div className="font-heading text-2xl font-bold text-foreground mb-4">{pkg.impressions} Impressions</div>
              <ul className="space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default OnlineAdvertising;
