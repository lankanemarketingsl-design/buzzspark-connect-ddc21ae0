import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, MessageSquare, Smartphone, Globe, Search, PenTool, Monitor, Package, ArrowRight, Target, Share2 } from "lucide-react";

const services = [
  {
    icon: Mail,
    title: "Email Marketing Sri Lanka",
    bullets: [
      "350,000+ active email database",
      "50,000+ VIP audience reach",
      "10,000+ highly targeted custom databases",
      "Bulk email campaigns",
    ],
    description: "Ideal for promotions, education intakes, product launches, and brand awareness campaigns.",
    path: "/email-marketing",
    highlight: true,
  },
  {
    icon: Smartphone,
    title: "SMS Marketing Sri Lanka",
    bullets: [
      "Corporate database – 300,000",
      "Top marketers – 200,000",
      "All Island reach – 600,000",
      "Promotional and transactional SMS",
    ],
    description: "Best option for urgent promotions, alerts, and time-sensitive campaigns.",
    path: "/sms-marketing",
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Marketing Sri Lanka",
    bullets: [
      "Bulk WhatsApp campaigns",
      "Targeted audience segmentation",
      "Rich media campaigns (images, videos, flyers)",
      "High conversion rates",
    ],
    description: "Perfect for personalized communication and lead generation.",
    path: "/whatsapp-marketing",
    highlight: true,
  },
  {
    icon: Package,
    title: "Multi Channel Marketing Campaigns",
    bullets: [
      "Reach 450,000 audience",
      "Reach 550,000 audience",
      "Reach 575,000 audience",
      "Reach 625,000 audience",
    ],
    description: "Ideal for both SMEs and large-scale businesses.",
    path: "/multi-channel-marketing-sri-lanka",
    highlight: true,
  },
  {
    icon: Target,
    title: "Lead Generation Sri Lanka",
    bullets: [
      "Multi-channel lead campaigns",
      "Database targeting & segmentation",
      "Landing page creation",
      "High-quality business leads",
    ],
    description: "Generate high-quality leads and grow your customer base across Sri Lanka.",
    path: "/lead-generation-sri-lanka",
  },
  {
    icon: Share2,
    title: "Social Media Marketing Sri Lanka",
    bullets: [
      "Facebook & Instagram advertising",
      "Content creation & post design",
      "TikTok & LinkedIn campaigns",
      "Campaign management & reporting",
    ],
    description: "Grow your brand with targeted social media campaigns across all major platforms.",
    path: "/social-media-marketing-sri-lanka",
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
    <section className="py-20 sm:py-24 bg-background relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/[0.03] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase mb-4">Our Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            From email campaigns to full-stack web presence — everything you need to grow your business in Sri Lanka
          </p>
        </motion.div>

        {/* Top 4 highlighted cards - larger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {services.filter(s => s.highlight).map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={s.path}
                className="group block p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-500 border border-accent/20 hover:border-accent h-full relative overflow-hidden hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 bg-accent text-primary text-[10px] font-bold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                  Popular
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-3 text-lg">{s.title}</h3>
                  <ul className="space-y-1.5 mb-4">
                    {s.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                        <span className="text-accent mt-1 text-xs">●</span> {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground/70 italic">{s.description}</p>
                  <span className="inline-flex items-center mt-4 text-sm font-bold text-accent group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Remaining services - compact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.filter(s => !s.highlight).map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={s.path}
                className="group block p-5 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-500 border border-border hover:border-accent/30 h-full relative overflow-hidden hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow duration-300">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                    <ul className="space-y-1 mb-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="text-sm text-muted-foreground leading-relaxed">• {b}</li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground/70 italic">{s.description}</p>
                    <span className="inline-flex items-center mt-3 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
