import { Link } from "react-router-dom";
import { Building2, GraduationCap, Landmark, UtensilsCrossed, Home, Shirt, ArrowRight } from "lucide-react";

const industries = [
  { name: "Hotels & Tourism", tagline: "Fill rooms & boost bookings", icon: Building2, path: "/hotel-marketing-sri-lanka", gradient: "from-blue-500 to-cyan-400", bgGlow: "bg-blue-500/10" },
  { name: "Restaurants & Cafes", tagline: "Get more customers daily", icon: UtensilsCrossed, path: "/restaurant-marketing-sri-lanka", gradient: "from-orange-500 to-amber-400", bgGlow: "bg-orange-500/10" },
  { name: "Real Estate", tagline: "Generate quality leads", icon: Home, path: "/real-estate-marketing-sri-lanka", gradient: "from-emerald-500 to-teal-400", bgGlow: "bg-emerald-500/10" },
  { name: "Fashion & Clothing", tagline: "Increase sales & traffic", icon: Shirt, path: "/fashion-marketing-sri-lanka", gradient: "from-pink-500 to-rose-400", bgGlow: "bg-pink-500/10" },
  { name: "Finance & Banking", tagline: "Reach decision makers", icon: Landmark, path: "/finance-marketing-sri-lanka", gradient: "from-amber-500 to-yellow-400", bgGlow: "bg-amber-500/10" },
  { name: "Education", tagline: "Drive student enrollments", icon: GraduationCap, path: "/education-marketing-sri-lanka", gradient: "from-purple-500 to-violet-400", bgGlow: "bg-purple-500/10" },
];

const IndustriesSection = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase mb-4 animate-fade-in">
            Industry Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Grow Your Business with{" "}
            <span className="bg-gradient-to-r from-accent to-amber-400 bg-clip-text text-transparent">
              Industry-Specific
            </span>{" "}
            Campaigns
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Targeted marketing packages built for your industry. Reach the right customers with proven strategies that deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {industries.map((industry, index) => (
            <Link
              key={industry.name}
              to={industry.path}
              className="group relative flex items-center gap-5 p-5 sm:p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 animate-fade-in"
              style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl ${industry.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <industry.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="relative flex-1 min-w-0">
                <h3 className="font-bold text-foreground text-base sm:text-lg leading-tight mb-1">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-snug">
                  {industry.tagline}
                </p>
              </div>

              {/* Arrow */}
              <div className="relative shrink-0 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                <ArrowRight className="w-4 h-4 text-accent group-hover:text-primary-foreground group-hover:translate-x-0.5 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
