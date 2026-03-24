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
import article7 from "@/assets/blog/article-7.jpg";
import article8 from "@/assets/blog/article-8.jpg";
import articleEmailPower from "@/assets/blog/article-email-power.jpg";
import articleSmsEngagement from "@/assets/blog/article-sms-engagement.jpg";
import articleWhatsappFuture from "@/assets/blog/article-whatsapp-future.jpg";
import articleMultichannelReach from "@/assets/blog/article-multichannel-reach.jpg";
import articleSeoMatters from "@/assets/blog/article-seo-matters.jpg";
import articleLeadGen from "@/assets/blog/article-lead-gen.jpg";
import articleSocialMedia from "@/assets/blog/article-social-media.jpg";

const articles = [
  {
    title: "Social Media Marketing in Sri Lanka: Why Your Business Needs It",
    date: "Mar 24, 2025",
    excerpt: "Social media marketing is essential for Sri Lankan businesses. Learn how Facebook, Instagram, and TikTok help you engage customers and build brand awareness.",
    path: "/social-media-marketing-why-your-business-needs-it-sri-lanka",
    image: articleSocialMedia,
  },
  {
    title: "Lead Generation in Sri Lanka: How to Get More Customers for Your Business",
    date: "Mar 24, 2025",
    excerpt: "Learn how lead generation helps Sri Lankan businesses attract and convert more customers using email, SMS, and WhatsApp marketing campaigns.",
    path: "/lead-generation-get-more-customers-sri-lanka",
    image: articleLeadGen,
  },
  {
    title: "What is SEO and Why It Matters for Businesses in Sri Lanka",
    date: "Mar 24, 2025",
    excerpt: "Learn what SEO is and why it's essential for Sri Lankan businesses. Discover how search engine optimization drives organic traffic, leads, and long-term growth.",
    path: "/seo-why-it-matters-sri-lanka",
    image: articleSeoMatters,
  },
  {
    title: "Why Email Marketing is Still the Most Powerful Tool for Businesses in Sri Lanka",
    date: "Mar 24, 2025",
    excerpt: "Email marketing delivers the highest ROI for businesses in Sri Lanka. Learn why email campaigns outperform social media and how to leverage them for consistent growth.",
    path: "/email-marketing-most-powerful-tool-sri-lanka",
    image: articleEmailPower,
  },
  {
    title: "How SMS Marketing is Driving Instant Customer Engagement in Sri Lanka",
    date: "Mar 24, 2025",
    excerpt: "With open rates exceeding 90%, SMS marketing is the fastest way to reach customers in Sri Lanka. Discover how instant text campaigns drive engagement and conversions.",
    path: "/sms-marketing-driving-engagement-sri-lanka",
    image: articleSmsEngagement,
  },
  {
    title: "WhatsApp Marketing in Sri Lanka: The Future of Customer Communication",
    date: "Mar 24, 2025",
    excerpt: "Millions of Sri Lankans use WhatsApp daily. Learn how businesses use WhatsApp marketing for promotions, customer support, and higher conversion rates.",
    path: "/whatsapp-marketing-future-sri-lanka",
    image: articleWhatsappFuture,
  },
  {
    title: "Multi-Channel Marketing in Sri Lanka: The Key to Maximum Reach",
    date: "Mar 24, 2025",
    excerpt: "Combine Email, SMS, WhatsApp and social media for maximum reach. Learn why multi-channel marketing strategies outperform single-channel approaches.",
    path: "/multi-channel-marketing-maximum-reach-sri-lanka",
    image: articleMultichannelReach,
  },
  {
    title: "The Future of Email Marketing in Sri Lanka: Email Campaigns + Findit.lk Ads",
    date: "Mar 21, 2025",
    excerpt: "Discover how Buzz Connect combines precision email campaigns with Findit.lk category-based advertising for maximum marketing impact. A dual-channel strategy for higher conversions in Sri Lanka.",
    path: "/future-of-email-marketing-sri-lanka",
    image: article8,
  },
  {
    title: "The Power of Multi-Channel Marketing in Sri Lanka with Buzz Connect",
    date: "Mar 20, 2025",
    excerpt: "Discover how Buzz Connect's unique multi-channel marketing strategy combining Email, SMS, WhatsApp, and Findit.lk delivers unmatched visibility and faster results for Sri Lankan businesses.",
    path: "/multi-channel-marketing-in-sri-lanka",
    image: article7,
  },
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
      <SEOHead
        title="Digital Marketing Blog Sri Lanka | Free Guides & Tips"
        description="Free digital marketing articles for Sri Lankan businesses. Email marketing tips, SMS campaign strategies, SEO guides & advertising insights by Buzz Connect experts."
        canonical="/resources"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
        ]}
      />
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
