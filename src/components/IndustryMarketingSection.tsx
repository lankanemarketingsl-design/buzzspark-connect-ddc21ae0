import { motion } from "framer-motion";
import { CheckCircle, Rocket, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export interface IndustryItem {
  emoji: string;
  title: string;
  campaigns: string[];
  results: string[];
  link: string | null;
  linkText: string;
}

interface IndustryMarketingSectionProps {
  sectionEmoji: string;
  sectionTitle: string;
  intro: string;
  subtitle: string;
  industries: IndustryItem[];
  whyTitle: string;
  whyPoints: string[];
  whyFooter: string;
  crossLinks: { to: string; label: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaWhatsAppMessage: string;
  ctaButtonText: string;
}

const IndustryMarketingSection = ({
  sectionEmoji,
  sectionTitle,
  intro,
  subtitle,
  industries,
  whyTitle,
  whyPoints,
  whyFooter,
  crossLinks,
  ctaTitle,
  ctaSubtitle,
  ctaWhatsAppMessage,
  ctaButtonText,
}: IndustryMarketingSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 max-w-5xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
          {sectionEmoji} {sectionTitle}
        </h2>
        <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">{intro}</p>
        <p className="text-foreground font-semibold mt-3">{subtitle}</p>
      </div>

      {/* Industry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="p-5 rounded-xl bg-card shadow-card border border-border hover:border-accent/30 transition-colors"
          >
            <h3 className="font-heading text-base font-bold text-foreground mb-3">
              {ind.emoji} {ind.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <p className="text-accent font-semibold text-xs uppercase tracking-wider mb-2">
                  Campaign Ideas
                </p>
                <ul className="space-y-1.5">
                  {ind.campaigns.map((c) => (
                    <li key={c} className="flex items-start gap-1.5 text-sm text-muted-foreground leading-snug">
                      <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-secondary-foreground font-semibold text-xs uppercase tracking-wider mb-2">
                  Expected Results
                </p>
                <ul className="space-y-1.5">
                  {ind.results.map((r) => (
                    <li key={r} className="flex items-start gap-1.5 text-sm text-muted-foreground leading-snug">
                      <Rocket className="w-3.5 h-3.5 text-secondary-foreground flex-shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {ind.link && (
              <Link to={ind.link} className="inline-flex items-center gap-1 text-accent hover:underline text-sm font-semibold mt-3">
                Learn about {ind.linkText} →
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* Why It Works */}
      <div className="mt-10 p-6 rounded-2xl bg-card shadow-card border border-border">
        <h3 className="font-heading text-xl font-bold text-foreground mb-4">{whyTitle}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {whyPoints.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
            </div>
          ))}
        </div>
        <p className="text-foreground font-semibold mt-4 text-sm">{whyFooter}</p>
        {crossLinks.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {crossLinks.map((cl) => (
              <Link key={cl.to} to={cl.to} className="text-accent hover:underline text-sm font-semibold">
                {cl.label} →
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="mt-8 p-6 rounded-2xl gradient-hero text-center">
        <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">{ctaTitle}</h3>
        <p className="text-primary-foreground/80 mb-4">{ctaSubtitle}</p>
        <a
          href={`https://wa.me/94771437707?text=${encodeURIComponent(ctaWhatsAppMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
        >
          <MessageSquare className="w-4 h-4" /> {ctaButtonText}
        </a>
      </div>
    </motion.div>
  );
};

export default IndustryMarketingSection;
