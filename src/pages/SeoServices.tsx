import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Eye, TrendingUp, DollarSign } from "lucide-react";

const packages = [
  {
    name: "Package 1",
    price: "LKR 30,000",
    period: "one-time",
    features: ["Keyword Research", "Website Audit"],
  },
  {
    name: "Package 2",
    price: "LKR 60,000",
    period: "monthly",
    features: ["Keyword Research", "Website Audit", "3 Keywords", "1 URL Optimization", "Title & Meta Optimization", "CTA-based Development", "Monthly Monitoring", "Reputed Backlinks", "Recommendations"],
  },
  {
    name: "Package 3",
    price: "LKR 100,000",
    period: "monthly",
    features: ["Keyword Research", "Website Audit", "5 Keywords", "3 URL Optimizations", "Title & Meta Optimization", "CTA-based Development", "Monthly Monitoring", "Reputed Backlinks", "Recommendations"],
  },
];

const benefits = [
  { icon: Eye, title: "Increase Online Visibility", desc: "Drive potential customers by dominating search engines over competitors." },
  { icon: TrendingUp, title: "Drive More Customers", desc: "Our unique SEO strategy increases exposure and organic website visitors." },
  { icon: DollarSign, title: "Increase Business Revenue", desc: "More visibility and visitors means more revenue and business growth." },
];

const SeoServices = () => {
  return (
    <ServicePageLayout
      badge="SEO Services"
      title="Search Engine Optimization (SEO)"
      subtitle="Professional SEO services to fix bad rankings, increase organic traffic, and dominate local search results in Sri Lanka."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-8 rounded-2xl bg-card shadow-card border border-border"
          >
            <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
              <b.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">SEO Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-8 rounded-2xl bg-card shadow-card border-2 ${i === 2 ? 'border-accent' : 'border-border'} relative`}
          >
            {i === 2 && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-accent text-xs font-bold text-primary">
                POPULAR
              </div>
            )}
            <div className="text-sm font-semibold text-accent uppercase">{pkg.name}</div>
            <div className="font-heading text-3xl font-bold text-foreground mt-2">{pkg.price}</div>
            <div className="text-sm text-muted-foreground mb-6">/{pkg.period}</div>
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
    </ServicePageLayout>
  );
};

export default SeoServices;
