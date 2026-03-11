import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Eye, TrendingUp, Award, Globe } from "lucide-react";

const benefits = [
  { icon: Globe, title: "Online Presence", desc: "In today's digital world, nearly everyone is connected to the web. Your business needs a professional website to perform at full capacity." },
  { icon: Eye, title: "Increase Visibility", desc: "Most people research products and businesses online before purchasing. A good website ensures potential customers can find and learn about you." },
  { icon: TrendingUp, title: "Increase Revenue", desc: "A professional website drives traffic, builds credibility, and converts visitors into customers — increasing your business revenue." },
  { icon: Award, title: "Company Reputation", desc: "A well-designed website builds trust, enhances your brand image, and establishes your company as a professional industry player." },
];

const WebsiteDesign = () => {
  return (
    <ServicePageLayout
      badge="Website Design"
      title="Professional Website Design"
      subtitle="Custom website design solutions to increase your online visibility, business revenue, and company reputation in Sri Lanka."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-card shadow-card border border-border"
          >
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-3">{b.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </ServicePageLayout>
  );
};

export default WebsiteDesign;
