import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface IndustryStatsBannerProps {
  icon: LucideIcon;
  gradient: string;
  stats: Stat[];
  tagline: string;
}

const IndustryStatsBanner = ({ icon: Icon, gradient, stats, tagline }: IndustryStatsBannerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-16 p-8 sm:p-10 rounded-2xl ${gradient} text-white relative overflow-hidden`}
    >
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-[0.07]">
        <Icon className="w-40 h-40 sm:w-56 sm:h-56" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <p className="text-white/60 font-medium text-sm sm:text-base max-w-md">{tagline}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default IndustryStatsBanner;
