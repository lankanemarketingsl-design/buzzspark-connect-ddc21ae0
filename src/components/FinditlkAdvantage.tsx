import { motion } from "framer-motion";
import { CheckCircle, ExternalLink, Globe } from "lucide-react";

interface FinditlkLink {
  label: string;
  url: string;
}

interface FinditlkAdvantageProps {
  title: string;
  description: string;
  links: FinditlkLink[];
  benefits: string[];
  gradient: string;
}

const FinditlkAdvantage = ({ title, description, links, benefits, gradient }: FinditlkAdvantageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className={`${gradient} rounded-2xl p-1 shadow-xl`}>
        <div className="rounded-[calc(1rem-2px)] bg-card/95 backdrop-blur-sm p-8 sm:p-10 relative overflow-hidden">
          {/* Decorative Findit.lk watermark */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-10">
            <Globe className="w-24 h-24 sm:w-32 sm:h-32 text-accent" />
          </div>

          {/* Findit.lk badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`${gradient} px-4 py-2 rounded-full flex items-center gap-2`}>
              <Globe className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-bold tracking-wide">FINDIT.LK</span>
            </div>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Powered Visibility</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3 relative z-10">
            {title}
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl relative z-10">
            {description}
          </p>

          {/* Category links */}
          <div className="flex flex-wrap gap-3 mb-8">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${gradient} text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg`}
              >
                <Globe className="w-4 h-4" />
                {link.label}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FinditlkAdvantage;
