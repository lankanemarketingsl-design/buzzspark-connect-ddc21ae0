import { Link } from "react-router-dom";
import { Building2, GraduationCap, Landmark, UtensilsCrossed, Home, Shirt, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { name: "Hotels & Tourism", tagline: "Fill rooms & boost bookings", icon: Building2, path: "/hotel-marketing-sri-lanka", color: "from-blue-500 to-cyan-400" },
  { name: "Restaurants & Cafes", tagline: "Get more customers daily", icon: UtensilsCrossed, path: "/restaurant-marketing-sri-lanka", color: "from-orange-500 to-amber-400" },
  { name: "Real Estate", tagline: "Generate quality leads", icon: Home, path: "/real-estate-marketing-sri-lanka", color: "from-emerald-500 to-teal-400" },
  { name: "Fashion & Clothing", tagline: "Increase sales & traffic", icon: Shirt, path: "/fashion-marketing-sri-lanka", color: "from-pink-500 to-rose-400" },
  { name: "Finance & Banking", tagline: "Reach decision makers", icon: Landmark, path: "/finance-marketing-sri-lanka", color: "from-amber-500 to-yellow-400" },
  { name: "Education", tagline: "Drive student enrollments", icon: GraduationCap, path: "/education-marketing-sri-lanka", color: "from-purple-500 to-violet-400" },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase mb-5">
            Industry Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Grow Your Business with{" "}
            <span className="bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">
              Industry-Specific
            </span>{" "}
            Campaigns
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
            Targeted marketing packages built for your industry. Reach the right customers with proven strategies that deliver results.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <Link
                to={industry.path}
                className="group relative flex items-center gap-5 p-5 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.12] hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10"
              >
                {/* Icon */}
                <div className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <industry.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary-foreground text-base sm:text-lg leading-tight mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-primary-foreground/50 text-sm leading-snug">
                    {industry.tagline}
                  </p>
                </div>

                {/* Arrow */}
                <div className="shrink-0 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 text-primary-foreground/60 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
