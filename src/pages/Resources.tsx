import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    title: "4 Reasons Why Email Marketing Is Important",
    date: "Aug 04, 2020",
    excerpt: "Social media is important, but email marketing remains the best way to convert prospects into customers and loyal fans.",
    path: "/why-email-marketing-is-important",
  },
  {
    title: "Why You Need Email Marketing",
    date: "Aug 05, 2020",
    excerpt: "Email marketing is the most cost-effective digital strategy for converting prospects into customers and building loyalty.",
    path: "/why-you-need-email-marketing",
  },
  {
    title: "SEO Sri Lanka (Search Engine Optimization)",
    date: "Aug 06, 2020",
    excerpt: "SEO increases the quantity and quality of traffic to your website through organic search engine results.",
    path: "/best-seo-services-sri-lanka",
  },
  {
    title: "Classified Advertising in Sri Lanka",
    date: "Aug 06, 2020",
    excerpt: "A cheap and easy way for small businesses to connect with potential customers through classified platforms.",
    path: "/classified-advertising-in-sri-lanka",
  },
  {
    title: "SMS Marketing in Sri Lanka",
    date: "Aug 06, 2020",
    excerpt: "Sending promotional campaigns via text messages to communicate offers, updates, and promotions effectively.",
    path: "/sms-marketing-in-sri-lanka",
  },
  {
    title: "Enable Missing Images in Email Clients",
    date: "Aug 06, 2020",
    excerpt: "Help your contacts display images properly in Outlook, Yahoo Mail, and other email clients.",
    path: "/enable-missing-images-to-display",
  },
];

const Resources = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="Marketing Resources & Insights"
      subtitle="Expert articles on email marketing, SMS campaigns, SEO, and digital advertising strategies for Sri Lankan businesses."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <motion.div
            key={a.path}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={a.path}
              className="group block p-6 rounded-2xl bg-card shadow-card border border-border hover:border-accent/30 hover:shadow-card-hover transition-all h-full"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar className="w-3.5 h-3.5" />
                {a.date}
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{a.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{a.excerpt}</p>
              <span className="text-sm font-semibold text-accent flex items-center gap-1">
                Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </ServicePageLayout>
  );
};

export default Resources;
