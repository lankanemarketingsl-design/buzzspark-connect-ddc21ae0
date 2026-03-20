import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, MessageSquare, Smartphone, Globe, Search, PenTool, Monitor, Package } from "lucide-react";

const services = [
  {
    icon: Mail,
    title: "Email Marketing Sri Lanka",
    bullets: [
      "350,000+ active email database",
      "50,000+ VIP audience reach",
      "10,000+ highly targeted custom databases",
      "Bulk email campaigns",
      "Personalized email marketing",
      "Campaign tracking and analytics",
    ],
    description: "Ideal for promotions, education intakes, product launches, and brand awareness campaigns.",
    path: "/email-marketing",
  },
  {
    icon: Smartphone,
    title: "SMS Marketing Sri Lanka",
    bullets: [
      "Corporate database – 300,000",
      "Top marketers – 200,000",
      "All Island reach – 600,000",
      "HR database – 25,000",
      "VIP database – 25,000",
      "Promotional and transactional SMS",
    ],
    description: "Best option for urgent promotions, alerts, and time-sensitive campaigns.",
    path: "/sms-marketing",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Marketing Sri Lanka",
    bullets: [
      "Bulk WhatsApp campaigns",
      "Targeted audience segmentation",
      "Rich media campaigns (images, videos, flyers)",
      "Direct customer engagement",
      "High conversion rates",
    ],
    description: "Perfect for personalized communication and lead generation.",
    path: "/whatsapp-marketing",
  },
  {
    icon: Package,
    title: "Special Advertising Packages",
    bullets: [
      "Reach 450,000 audience",
      "Reach 550,000 audience",
      "Reach 575,000 audience",
      "Reach 625,000 audience",
    ],
    description: "Ideal for both SMEs and large-scale businesses.",
    path: "/special-advertising-packages",
  },
  {
    icon: Globe,
    title: "Web Advertising & Banner Campaigns",
    bullets: [
      "Banner placements",
      "Discount coupons",
      "Web advertising placements",
    ],
    description: "Promote your brand through banners, discount coupons, and web advertising placements.",
    path: "/online-advertising-sri-lanka",
  },
  {
    icon: PenTool,
    title: "Graphic Designing",
    bullets: [
      "E-flyers & artwork",
      "Social media creatives",
      "Animated videos",
    ],
    description: "Professional design services including e-flyers, social media creatives, and animated videos.",
    path: "/graphic-designing-in-sri-lanka",
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    bullets: [
      "Improve Google rankings",
      "Increase website traffic",
      "Generate more leads",
    ],
    description: "Improve your Google rankings, increase website traffic, and generate more leads.",
    path: "/seo-sri-lanka",
  },
  {
    icon: Monitor,
    title: "Website Designing",
    bullets: [
      "Professional websites",
      "Enhanced online presence",
      "Increased credibility",
    ],
    description: "Build professional websites that enhance your online presence and credibility.",
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
                <h3 className="font-heading font-semibold text-foreground mb-3">{s.title}</h3>
                <ul className="space-y-1 mb-3">
                  {s.bullets.slice(0, 4).map((b) => (
                    <li key={b} className="text-sm text-muted-foreground leading-relaxed">• {b}</li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground/70 italic">{s.description}</p>
                <span className="inline-block mt-4 text-sm font-semibold text-accent">Learn More →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;