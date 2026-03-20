import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import article1 from "@/assets/blog/article-1.jpg";
import article2 from "@/assets/blog/article-2.jpg";
import article3 from "@/assets/blog/article-3.jpg";
import article4 from "@/assets/blog/article-4.jpg";
import article5 from "@/assets/blog/article-5.jpg";
import article6 from "@/assets/blog/article-6.jpg";

const articles = [
  {
    title: "4 Reasons Why Email Marketing Is Important For Your Internet Marketing",
    date: "Aug 04, 2020",
    excerpt: "Don't get us wrong, social media is an extremely important component in any business' marketing strategy. Social Media is a great channel for interacting with your audience and strengthening your personal relationships with them.",
    path: "/why-email-marketing-is-important",
    image: article1,
  },
  {
    title: "Why You Need Email Marketing",
    date: "Aug 05, 2020",
    excerpt: "Email marketing is the highly cost effective digital marketing strategy of sending direct emails to prospects and customers. Email marketing convert prospects into customers, and turn one-time buyers into loyal, raving fans.",
    path: "/why-you-need-email-marketing",
    image: article2,
  },
  {
    title: "SEO Sri Lanka (Search Engine Optimization)",
    date: "Aug 06, 2020",
    excerpt: "SEO stand for Search Engine Optimization, which is the practice of increasing the quantity and quality of traffic to your website through organic search engine results.",
    path: "/best-seo-services-sri-lanka",
    image: article3,
  },
  {
    title: "Classified Advertising in Sri Lanka",
    date: "Aug 06, 2020",
    excerpt: "Classified advertising is a cheap and easy way for small businesses to connect with potential customers. It's a great way to get the word out about your company, especially if you can't budget for other forms of advertising.",
    path: "/classified-advertising-in-sri-lanka",
    image: article4,
  },
  {
    title: "SMS Marketing in Sri Lanka",
    date: "Aug 06, 2020",
    excerpt: "SMS Marketing is sending promotional campaigns for marketing purposes using text messages (SMS). These messages are mostly meant to communicate sensitive offers, updates, and promotions to people.",
    path: "/sms-marketing-in-sri-lanka",
    image: article5,
  },
  {
    title: "Enable Missing Images to Display in Various Email Clients",
    date: "Aug 06, 2020",
    excerpt: "Images in an email sometimes don't display for a variety of reasons. If your contacts are telling you that they're receiving your email but content isn't displaying properly, a good place to start is to have them check the settings in their email client.",
    path: "/enable-missing-images-to-display",
    image: article6,
  },
];

const Resources = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="Resources"
      subtitle="Expert articles on email marketing, SMS campaigns, SEO, and digital advertising strategies for Sri Lankan businesses."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="group block rounded-2xl bg-card shadow-card border border-border hover:border-accent/30 hover:shadow-card-hover transition-all h-full overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  {a.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  buzzconnect.lk - {a.date}
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{a.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent uppercase tracking-wide">
                  Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </ServicePageLayout>
  );
};

export default Resources;
