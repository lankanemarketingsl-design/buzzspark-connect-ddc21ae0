import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, MessageSquare, Smartphone, Globe, Search, PenTool, Monitor, Package } from "lucide-react";

const services = [
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Over 350,000+ corporate database with VIP reach of 50,000+ contacts",
    path: "/email-marketing",
  },
  {
    icon: Package,
    title: "Special Packages",
    desc: "Combined SMS, Email & Web advertising packages from 450K to 1.2M+ reach",
    path: "/special-advertising-packages",
  },
  {
    icon: Smartphone,
    title: "SMS Marketing",
    desc: "Corporate, VIP & marketing databases covering 600,000+ contacts island-wide",
    path: "/sms-marketing",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Marketing",
    desc: "Text & video campaigns to 600,000+ contacts with district-wise targeting",
    path: "/whatsapp-marketing",
  },
  {
    icon: Globe,
    title: "Online Advertising",
    desc: "Web ads, banners & discount coupons via Findit.lk, Buyit.lk & PlaceBook.lk",
    path: "/online-advertising-sri-lanka",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    desc: "E-flyers, logos, animated videos, social media posts & complete branding",
    path: "/graphic-designing-in-sri-lanka",
  },
  {
    icon: Search,
    title: "SEO Services",
    desc: "Increase online visibility and drive organic traffic with expert optimization",
    path: "/seo-sri-lanka",
  },
  {
    icon: Monitor,
    title: "Website Design",
    desc: "Professional website design to increase visibility, revenue & brand reputation",
    path: "/website-design-sri-lanka",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            From email campaigns to full-stack web presence — everything you need to grow your business in Sri Lanka
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={s.path}
                className="group block p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30 h-full"
              >
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
