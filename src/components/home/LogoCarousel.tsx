import dfccLogo from "@/assets/logos/dfcc.jpg";
import radissonLogo from "@/assets/logos/radisson.jpg";
import huntersLogo from "@/assets/logos/hunters.jpg";
import salaLogo from "@/assets/logos/sala.jpg";
import bestwesternLogo from "@/assets/logos/bestwestern.jpg";
import chinesedragonLogo from "@/assets/logos/chinesedragon.jpg";
import swarnamahalLogo from "@/assets/logos/swarnamahal.jpg";
import burgerkingLogo from "@/assets/logos/burgerking.jpg";
import mimosaLogo from "@/assets/logos/mimosa.png";
import abansLogo from "@/assets/logos/abans.jpg";
import odelLogo from "@/assets/logos/odel.jpg";
import glomarkLogo from "@/assets/logos/glomark.jpg";
import combankLogo from "@/assets/logos/combank.png";
import allianceLogo from "@/assets/logos/alliance.png";
import { motion } from "framer-motion";

const logos = [
  { name: "DFCC Bank", src: dfccLogo },
  { name: "Radisson", src: radissonLogo },
  { name: "Hunters", src: huntersLogo },
  { name: "Sala Enterprises", src: salaLogo },
  { name: "Best Western", src: bestwesternLogo },
  { name: "Chinese Dragon Cafe", src: chinesedragonLogo },
  { name: "Swarnamahal", src: swarnamahalLogo },
  { name: "Burger King", src: burgerkingLogo },
  { name: "Mimosa", src: mimosaLogo },
];

const LogoCarousel = () => {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.h2
          className="text-center text-lg font-semibold text-muted-foreground uppercase tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by Leading Brands in Sri Lanka
        </motion.h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-scroll w-max hover:[animation-play-state:paused]">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 mx-6 flex items-center justify-center h-20 w-40 rounded-lg bg-white p-3"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
