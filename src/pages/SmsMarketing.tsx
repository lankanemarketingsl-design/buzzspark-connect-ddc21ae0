import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Users, Crown, Target, Briefcase } from "lucide-react";

const databases = [
  {
    icon: Users,
    title: "Corporate Database",
    contacts: "300,000+",
    age: "18–65",
    pricing: "LKR 2/message",
    items: ["Executives & Officers", "Small Business Owners", "Managers & General Managers", "Association Members", "Gender: Male 80% & Female 20%"],
  },
  {
    icon: Crown,
    title: "VIP Database",
    contacts: "50,000+",
    age: "30–65",
    pricing: "LKR 2.50/message",
    items: ["Premium Business Leaders", "CEOs & Directors", "Celebrities & Doctors", "Entrepreneurs", "High-salary Employees (500K+/mo)"],
  },
  {
    icon: Target,
    title: "Marketing Database",
    contacts: "200,000+",
    age: "All Island",
    pricing: "LKR 2/message",
    items: ["Director Marketing", "Brand Managers", "Marketing & Sales Managers", "DGM Marketing", "Marketing & Sales Executives"],
  },
  {
    icon: Briefcase,
    title: "HR Database",
    contacts: "25,000+",
    age: "All Island",
    pricing: "LKR 2/message",
    items: ["HR Directors & Managers", "Senior HR Managers", "HR Executives", "Administrative Managers", "Training Managers"],
  },
];

const districts = [
  { name: "Colombo", count: "500,000" }, { name: "Galle", count: "185,000" }, { name: "Kandy", count: "175,000" },
  { name: "Kurunegala", count: "150,000" }, { name: "Matara", count: "120,000" }, { name: "Gampaha", count: "115,000" },
  { name: "Hambantota", count: "85,000" }, { name: "Kalutara", count: "80,000" }, { name: "Nuwara Eliya", count: "60,000" },
  { name: "Polonnaruwa", count: "52,000" }, { name: "Matale", count: "50,000" }, { name: "Anuradhapura", count: "45,000" },
];

const SmsMarketing = () => {
  return (
    <ServicePageLayout
      badge="SMS Marketing"
      title="SMS Marketing Solutions"
      subtitle="Reach 600,000+ contacts island-wide with targeted SMS campaigns across corporate, VIP, marketing & HR databases."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {databases.map((db, i) => (
          <motion.div
            key={db.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-card shadow-card border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                <db.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">{db.title}</h3>
                <p className="text-sm text-muted-foreground">{db.contacts} contacts • Age: {db.age}</p>
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {db.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <div className="inline-block px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold text-sm">
              {db.pricing}
            </div>
          </motion.div>
        ))}
      </div>

      {/* District Coverage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">District-wise Coverage</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {districts.map((d) => (
            <div key={d.name} className="p-4 rounded-xl bg-card shadow-card border border-border text-center">
              <div className="font-heading font-bold text-accent text-lg">{d.count}</div>
              <div className="text-xs text-muted-foreground mt-1">{d.name}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-8 mt-8">
          <div className="text-center p-6 rounded-xl bg-secondary/10 border border-secondary/20">
            <div className="text-2xl font-heading font-bold text-secondary">350,000+</div>
            <div className="text-sm text-muted-foreground">Male Subscribers (18-65)</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-accent/10 border border-accent/20">
            <div className="text-2xl font-heading font-bold text-accent">250,000+</div>
            <div className="text-sm text-muted-foreground">Female Subscribers (18-65)</div>
          </div>
        </div>
      </motion.div>
    </ServicePageLayout>
  );
};

export default SmsMarketing;
