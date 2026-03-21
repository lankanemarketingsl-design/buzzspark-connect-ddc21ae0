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
import nolimitLogo from "@/assets/logos/nolimit.jpg";
import bhoomiLogo from "@/assets/logos/bhoomi.jpg";
import visioncareLogo from "@/assets/logos/visioncare.jpg";
import lassanaLogo from "@/assets/logos/lassana.png";
import cipmLogo from "@/assets/logos/cipm.jpg";
import cinnamonLogo from "@/assets/logos/cinnamon.jpg";
import slimLogo from "@/assets/logos/slim.jpg";
import ninewellsLogo from "@/assets/logos/ninewells.png";
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
  { name: "Abans", src: abansLogo },
  { name: "Odel", src: odelLogo },
  { name: "Glomark", src: glomarkLogo },
  { name: "Commercial Bank", src: combankLogo },
  { name: "Alliance Finance", src: allianceLogo },
  { name: "Nolimit", src: nolimitLogo },
  { name: "Bhoomi Realty", src: bhoomiLogo },
  { name: "Vision Care", src: visioncareLogo },
  { name: "Lassana.com", src: lassanaLogo },
  { name: "CIPM Sri Lanka", src: cipmLogo },
  { name: "Cinnamon Hotels", src: cinnamonLogo },
  { name: "SLIM", src: slimLogo },
  { name: "Ninewells Hospital", src: ninewellsLogo },
];

const row1 = logos.slice(0, 7);
const row2 = logos.slice(7, 14);
const row3 = logos.slice(14);

const LogoCarousel = () => {
  const doubledRow1 = [...row1, ...row1];
  const doubledRow2 = [...row2, ...row2];
  const doubledRow3 = [...row3, ...row3];

  const renderRow = (items: typeof logos, isReverse: boolean = false) => (
    <div className="relative mb-4 last:mb-0 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className={`flex items-center w-max hover:[animation-play-state:paused] ${isReverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
        {items.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex-shrink-0 mx-3 sm:mx-6 flex items-center justify-center h-16 w-32 sm:h-20 sm:w-40 rounded-lg bg-card p-3 sm:p-4 shadow-sm border border-border"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );

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
      {renderRow(doubledRow1)}
      {renderRow(doubledRow2, true)}
      {renderRow(doubledRow3)}
    </section>
  );
};

export default LogoCarousel;
