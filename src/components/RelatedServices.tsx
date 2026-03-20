import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Smartphone, MessageSquare, Package, Globe, PenTool, Search, Monitor, Target, Share2 } from "lucide-react";

const allServices = [
  { title: "Email Marketing", path: "/email-marketing", icon: Mail, keyword: "Email Marketing Sri Lanka" },
  { title: "SMS Marketing", path: "/sms-marketing", icon: Smartphone, keyword: "SMS Marketing Sri Lanka" },
  { title: "WhatsApp Marketing", path: "/whatsapp-marketing", icon: MessageSquare, keyword: "WhatsApp Marketing Sri Lanka" },
  { title: "Lead Generation", path: "/lead-generation-sri-lanka", icon: Target, keyword: "Lead Generation Sri Lanka" },
  { title: "Social Media Marketing", path: "/social-media-marketing-sri-lanka", icon: Share2, keyword: "Social Media Marketing Sri Lanka" },
  { title: "Multi-Channel Marketing", path: "/multi-channel-marketing-sri-lanka", icon: Package, keyword: "Multi-Channel Campaigns" },
  { title: "Online Advertising", path: "/online-advertising-sri-lanka", icon: Globe, keyword: "Web Advertising Sri Lanka" },
  { title: "Graphic Design", path: "/graphic-designing-in-sri-lanka", icon: PenTool, keyword: "Graphic Design Sri Lanka" },
  { title: "SEO Services", path: "/seo-sri-lanka", icon: Search, keyword: "SEO Sri Lanka" },
  { title: "Website Design", path: "/website-design-sri-lanka", icon: Monitor, keyword: "Website Design Sri Lanka" },
];

interface RelatedServicesProps {
  currentPath: string;
}

const RelatedServices = ({ currentPath }: RelatedServicesProps) => {
  const related = allServices.filter((s) => s.path !== currentPath);

  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
            Explore Our Other Services
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm sm:text-base">
            Combine multiple channels for maximum impact — our integrated marketing solutions work better together.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {related.map((service, i) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={service.path}
                className="group flex flex-col items-center gap-2 p-4 sm:p-5 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-card-hover transition-all duration-300 h-full text-center"
              >
                <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center group-hover:shadow-glow transition-shadow">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-heading font-semibold text-sm text-foreground">{service.title}</span>
                <span className="text-xs text-muted-foreground hidden sm:block">{service.keyword}</span>
                <span className="inline-flex items-center text-xs font-semibold text-accent mt-auto">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
