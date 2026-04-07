import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const allArticles = [
  { title: "Complete Guide to Email Marketing Sri Lanka", path: "/email-marketing-guide-sri-lanka" },
  { title: "Email Marketing Pricing & ROI Sri Lanka", path: "/email-marketing-pricing-sri-lanka" },
  { title: "Email Marketing for Industries in Sri Lanka", path: "/email-marketing-industries-sri-lanka" },
  { title: "Email vs Social Media Marketing Sri Lanka", path: "/email-marketing-vs-social-media-sri-lanka" },
  { title: "Hotel Marketing: Increase Bookings", path: "/hotel-marketing-increase-bookings-sri-lanka" },
  { title: "Education Marketing: Attract Students", path: "/education-marketing-attract-students-sri-lanka" },
  { title: "Finance Marketing: Generate Leads", path: "/finance-marketing-generate-leads-sri-lanka" },
  { title: "Restaurant Marketing: Attract Customers", path: "/restaurant-marketing-attract-customers-sri-lanka" },
  { title: "Real Estate Marketing: Property Leads", path: "/real-estate-marketing-generate-property-leads-sri-lanka" },
  { title: "Fashion Marketing: Grow Your Brand", path: "/fashion-marketing-grow-brand-sri-lanka" },
  { title: "Social Media Marketing: Why You Need It", path: "/social-media-marketing-why-your-business-needs-it-sri-lanka" },
  { title: "Lead Generation: Get More Customers", path: "/lead-generation-get-more-customers-sri-lanka" },
  { title: "What is SEO and Why It Matters", path: "/seo-why-it-matters-sri-lanka" },
  { title: "SMS Marketing Driving Instant Engagement", path: "/sms-marketing-driving-engagement-sri-lanka" },
  { title: "WhatsApp Marketing: Future of Communication", path: "/whatsapp-marketing-future-sri-lanka" },
  { title: "Multi-Channel Marketing: Key to Maximum Reach", path: "/multi-channel-marketing-maximum-reach-sri-lanka" },
  { title: "Future of Email Marketing in Sri Lanka", path: "/future-of-email-marketing-sri-lanka" },
  { title: "Why Email Marketing Is Important", path: "/why-email-marketing-is-important" },
  { title: "Why You Need Email Marketing", path: "/why-you-need-email-marketing" },
  { title: "Best SEO Services in Sri Lanka", path: "/best-seo-services-sri-lanka" },
  { title: "SMS Marketing in Sri Lanka", path: "/sms-marketing-in-sri-lanka" },
  { title: "Multi-Channel Marketing in Sri Lanka", path: "/multi-channel-marketing-in-sri-lanka" },
  { title: "Enable Missing Images to Display", path: "/enable-missing-images-to-display" },
  { title: "Best Advertising Company in Sri Lanka", path: "/best-advertising-company-sri-lanka" },
  { title: "Digital Advertising Sri Lanka: Complete Guide", path: "/digital-advertising-sri-lanka-complete-guide" },
  { title: "Online vs Traditional Advertising Sri Lanka", path: "/online-vs-traditional-advertising-sri-lanka" },
  { title: "Google Ads Sri Lanka Cost Guide", path: "/google-ads-sri-lanka-cost-guide" },
  { title: "Multi-Channel vs Facebook Campaigns Sri Lanka", path: "/multi-channel-vs-facebook-sri-lanka" },
  { title: "Findit.lk + Email Marketing Conversions", path: "/finditlk-email-marketing-conversions-sri-lanka" },
  { title: "Education Email Marketing: Enrollments", path: "/education-email-marketing-enrollments-sri-lanka" },
  { title: "Real Estate Email Marketing: Property Leads", path: "/real-estate-email-marketing-leads-sri-lanka" },
  { title: "Hotel Email Marketing: Increase Bookings", path: "/hotel-email-marketing-bookings-sri-lanka" },
  { title: "E-commerce Email Marketing: Increase Sales", path: "/ecommerce-email-marketing-sales-sri-lanka" },
  { title: "Recruitment Email Marketing: Speed Up Hiring", path: "/recruitment-email-marketing-hiring-sri-lanka" },
  { title: "Healthcare Email Marketing: Patient Engagement", path: "/healthcare-email-marketing-engagement-sri-lanka" },
  { title: "Automotive Email Marketing: Drive Sales", path: "/automotive-email-marketing-sales-sri-lanka" },
  { title: "Event Email Marketing: Increase Attendance", path: "/event-email-marketing-attendance-sri-lanka" },
  { title: "Lead Generation Agency Sri Lanka", path: "/lead-generation-agency-sri-lanka" },
  { title: "Multi-Channel Email Campaigns", path: "/multi-channel-email-campaigns-sri-lanka" },
];

interface RelatedArticlesProps {
  currentPath?: string;
  max?: number;
}

const RelatedArticles = ({ currentPath, max = 3 }: RelatedArticlesProps) => {
  const articles = allArticles
    .filter((a) => a.path !== currentPath)
    .slice(0, max);

  return (
    <div className="mt-10 pt-8 border-t border-border">
      <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-accent" /> Related Resources
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {articles.map((article) => (
          <Link
            key={article.path}
            to={article.path}
            className="group flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-accent/40 transition-all"
          >
            <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors flex-1">
              {article.title}
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
          </Link>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link to="/resources" className="inline-flex items-center text-sm font-semibold text-accent hover:underline">
          View All Resources <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default RelatedArticles;
