import { Link } from "react-router-dom";
import { Building2, GraduationCap, Landmark, UtensilsCrossed, Home, Shirt, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { name: "Hotels & Tourism", tagline: "Fill rooms & boost bookings", icon: Building2, path: "/hotel-marketing-sri-lanka", color: "from-blue-500 to-cyan-400" },
  { name: "Restaurants & Cafes", tagline: "Get more customers daily", icon: UtensilsCrossed, path: "/restaurant-marketing-sri-lanka", color: "from-orange-500 to-amber-400" },
  { name: "Real Estate", tagline: "Generate quality leads", icon: Home, path: "/real-estate-marketing-sri-lanka", color: "from-emerald-500 to-teal-400" },
  { name: "Fashion & Clothing", tagline: "Increase sales & traffic", icon: Shirt, path: "/fashion-marketing-sri-lanka", color: "from-pink-500 to-rose-400" },
  { name: "Finance & Banking", tagline: "Reach decision makers", icon: Landmark, path: "/finance-marketing-sri-lanka", color: "from-amber-500 to-yellow-400" },
  { name: "Education", tagline: "Drive student enrollments", icon: GraduationCap, path: "/education-marketing-sri-lanka", color: "from-purple-500 to-violet-400" },
  { name: "Events & Conferences", tagline: "Maximize event attendance", icon: Calendar, path: "/event-marketing-sri-lanka", color: "from-violet-500 to-purple-400" },
];

const IndustriesSection = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">
            Industry Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">Industry-Specific</span>{" "}
            Marketing Campaigns
          </h2>
          <p className="text-primary-foreground/55 max-w-xl mx-auto">
            Targeted packages built for your industry with proven strategies that deliver results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <Link
                to={industry.path}
                className="group flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] hover:border-accent/25 transition-all duration-400 hover:-translate-y-0.5"
              >
                <div className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary-foreground text-sm sm:text-base leading-tight mb-0.5">{industry.name}</h3>
                  <p className="text-primary-foreground/45 text-xs">{industry.tagline}</p>
                </div>
                <div className="shrink-0 w-8 h-8 rounded-full bg-white/8 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-primary-foreground/50 group-hover:text-primary transition-colors" />
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
