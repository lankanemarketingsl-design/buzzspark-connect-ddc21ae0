import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  "Leading online advertising provider since 2014",
  "Over 1,500+ satisfied customers across Sri Lanka",
  "20,000+ successful marketing campaigns delivered",
  "Complete solutions: Email, WhatsApp, SMS & Web Ads",
  "Partnered with Findit.lk, Buyit.lk & PlaceBook.lk",
  "Affordable packages from SMEs to large enterprises",
];

const AboutSection = () => {
  return (
    <section id="aboutus" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-5">
              Your Digital Morale in Business
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Buzz Connect is the No.1 lead generation company in Sri Lanka. We help marketers connect with their audience through highly personalized Email, WhatsApp, and SMS campaigns — all while staying within budget. Our integrated platform combines direct marketing with powerful web advertising through our partner network.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {points.map((p) => (
                <div key={p} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "350K+", label: "Email Subscribers", color: "bg-primary text-primary-foreground" },
                { num: "600K+", label: "SMS Reach", color: "bg-secondary text-secondary-foreground" },
                { num: "50K+", label: "VIP Contacts", color: "gradient-accent text-primary" },
                { num: "200K+", label: "Monthly Web Hits", color: "bg-primary text-primary-foreground" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} rounded-xl p-6 text-center shadow-card`}
                >
                  <div className="text-3xl font-heading font-bold">{item.num}</div>
                  <div className="text-sm mt-1 opacity-80">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
