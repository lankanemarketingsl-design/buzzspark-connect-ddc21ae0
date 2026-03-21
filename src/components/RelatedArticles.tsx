import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const allArticles = [
  { title: "Future of Email Marketing in Sri Lanka", path: "/future-of-email-marketing-sri-lanka" },
  { title: "Why Email Marketing Is Important", path: "/why-email-marketing-is-important" },
  { title: "Why You Need Email Marketing", path: "/why-you-need-email-marketing" },
  { title: "Best SEO Services in Sri Lanka", path: "/best-seo-services-sri-lanka" },
  { title: "SMS Marketing in Sri Lanka", path: "/sms-marketing-in-sri-lanka" },
  { title: "Multi-Channel Marketing in Sri Lanka", path: "/multi-channel-marketing-in-sri-lanka" },
  { title: "Enable Missing Images to Display", path: "/enable-missing-images-to-display" },
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
