import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Users, Crown, Target, Briefcase } from "lucide-react";

const databases = [
  {
    icon: Users,
    title: "Corporate Database",
    contacts: "300,000+",
    age: "18–65",
    pricing: "Text: LKR 1/msg • Video: LKR 2/msg",
    items: ["Executives & Officers", "Small Business Owners", "Managers & General Managers", "Association Members", "Gender: Male 80% & Female 20%"],
  },
  {
    icon: Crown,
    title: "VIP Database",
    contacts: "50,000+",
    age: "30–65",
    pricing: "Text: LKR 2/msg • Video: LKR 3/msg",
    items: ["Premium Business Leaders", "CEOs & Directors", "Celebrities & Doctors", "Entrepreneurs", "High-salary Employees (500K+/mo)"],
  },
  {
    icon: Target,
    title: "Marketing Database",
    contacts: "200,000+",
    age: "All Island",
    pricing: "Text: LKR 2/msg • Video: LKR 3/msg",
    items: ["Director Marketing", "Brand Managers", "Marketing & Sales Managers", "DGM Marketing", "Marketing & Sales Executives"],
  },
  {
    icon: Briefcase,
    title: "HR Database",
    contacts: "25,000+",
    age: "All Island",
    pricing: "Text: LKR 2/msg • Video: LKR 3/msg",
    items: ["HR Directors & Managers", "Senior HR Managers", "HR Executives", "Administrative Managers", "Training Managers"],
  },
];

const districts = [
  { name: "Colombo", count: "500,000" }, { name: "Galle", count: "185,000" }, { name: "Kandy", count: "175,000" },
  { name: "Kurunegala", count: "150,000" }, { name: "Matara", count: "120,000" }, { name: "Gampaha", count: "115,000" },
  { name: "Hambantota", count: "85,000" }, { name: "Kalutara", count: "80,000" }, { name: "Nuwara Eliya", count: "60,000" },
];

const WhatsAppMarketing = () => {
  return (
    <ServicePageLayout
      badge="WhatsApp Marketing"
      title="WhatsApp Marketing Solutions"
      subtitle="Text & video campaigns to 600,000+ contacts with corporate, VIP, marketing & HR databases across Sri Lanka."
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

      <p className="text-sm text-muted-foreground text-center mb-8">
        * Minimum send count: 30,000 numbers. Payment must be settled before campaign.
      </p>

      {/* District Coverage */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">District-wise Coverage</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {districts.map((d) => (
            <div key={d.name} className="p-4 rounded-xl bg-card shadow-card border border-border text-center">
              <div className="font-heading font-bold text-accent text-lg">{d.count}</div>
              <div className="text-xs text-muted-foreground mt-1">{d.name}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </ServicePageLayout>
  );
};

export default WhatsAppMarketing;
