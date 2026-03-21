import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Rocket, Globe, Zap, BarChart3, Lightbulb, Heart, Eye, Mail, MessageSquare, Phone, Megaphone, Users, Palette, Search, MonitorSmartphone } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "20,000+", label: "Successful Campaigns" },
  { value: "1,500+", label: "Satisfied Clients" },
  { value: "#1", label: "Marketing Database in Sri Lanka" },
];

const services = [
  { name: "Email Marketing", path: "/email-marketing", icon: Mail },
  { name: "SMS Marketing", path: "/sms-marketing", icon: Phone },
  { name: "WhatsApp Marketing", path: "/whatsapp-marketing", icon: MessageSquare },
  { name: "Multi-Channel Campaigns", path: "/multi-channel-marketing-sri-lanka", icon: Megaphone },
  { name: "Online Advertising", path: "/online-advertising-sri-lanka", icon: Globe },
  { name: "Lead Generation", path: "/lead-generation-sri-lanka", icon: Users },
  { name: "Social Media Marketing", path: "/social-media-marketing-sri-lanka", icon: Heart },
  { name: "Graphic Designing", path: "/graphic-designing-in-sri-lanka", icon: Palette },
  { name: "SEO Services", path: "/seo-sri-lanka", icon: Search },
  { name: "Website Designing", path: "/website-design-sri-lanka", icon: MonitorSmartphone },
];

const approach = [
  "Understanding your business goals",
  "Identifying target audiences",
  "Selecting the best marketing channels",
  "Launching optimized campaigns",
  "Tracking and improving performance",
];

const whyChoose = [
  "Proven multi-channel marketing strategies",
  "Cost-effective solutions for SMEs and corporates",
  "Large and targeted databases",
  "Fast campaign execution",
  "Strong focus on results and ROI",
  "Trusted by businesses across Sri Lanka",
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const AboutUs = () => {
  return (
    <ServicePageLayout
      badge="About Us"
      title="About Buzz Connect"
      subtitle="Sri Lanka's No.1 Email Marketing, WhatsApp Marketing & SMS Marketing company providing cost-effective digital marketing solutions since 2014."
    >
      <SEOHead
        title="About Buzz Connect | No.1 Digital Marketing Company Sri Lanka"
        description="About Buzz Connect — Sri Lanka's leading email, SMS & WhatsApp marketing company since 2014. 20,000+ campaigns, 1,500+ clients, largest marketing database in Sri Lanka."
        canonical="/about-us"
        keywords="about Buzz Connect, email marketing Sri Lanka, SMS marketing Sri Lanka, WhatsApp marketing Sri Lanka, digital marketing company Sri Lanka, best marketing company colombo"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about-us" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Buzz Connect",
          description: "Sri Lanka's No.1 email, SMS & WhatsApp marketing company delivering cost-effective digital marketing solutions since 2014.",
          mainEntity: {
            "@type": "Organization",
            name: "Buzz Connect",
            foundingDate: "2014",
            areaServed: "Sri Lanka",
          },
        }]}
      />

      <div className="space-y-16">
        {/* About Introduction */}
        <motion.section {...fadeUp} className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            We specialize in delivering powerful, results-driven campaigns that help businesses connect with their target audience, increase brand visibility, and generate high-quality <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">leads</Link>.
          </p>
        </motion.section>

        {/* Stats */}
        <motion.section {...fadeUp} transition={{ delay: 0.1 }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-card shadow-card border border-border">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Mission */}
        <motion.section {...fadeUp} transition={{ delay: 0.15 }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <Rocket className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Our mission is to help businesses in Sri Lanka grow through innovative and affordable digital marketing solutions. We aim to deliver maximum reach, engagement, and return on investment through smart and targeted campaigns.
          </p>
        </motion.section>

        {/* What We Do */}
        <motion.section {...fadeUp} transition={{ delay: 0.2 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/10">
              <Globe className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">What We Do</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Buzz Connect offers a complete range of digital marketing services designed to reach customers across multiple platforms:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-card shadow-card border border-border hover:border-accent/40 transition-all text-center"
              >
                <service.icon className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">{service.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mt-6">
            We combine these services into a powerful <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing strategy</Link> to ensure your business reaches customers effectively.
          </p>
        </motion.section>

        {/* Unique Advantage */}
        <motion.section {...fadeUp} transition={{ delay: 0.25 }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Our Unique Advantage</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            What makes Buzz Connect different is our ability to combine direct marketing tools with mass audience platforms. We integrate campaigns with Findit.lk, one of Sri Lanka's leading online promotion platforms, allowing businesses to reach a wider audience and gain maximum exposure.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {["Faster campaign results", "Higher engagement rates", "Wider audience reach", "Cost-effective marketing solutions"].map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border">
                <span className="text-accent font-bold">✔</span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience & Achievements */}
        <motion.section {...fadeUp} transition={{ delay: 0.3 }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <BarChart3 className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Our Experience & Achievements</h2>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2"><span className="text-accent">•</span> 10+ years of industry experience</li>
            <li className="flex items-center gap-2"><span className="text-accent">•</span> 20,000+ successful marketing campaigns</li>
            <li className="flex items-center gap-2"><span className="text-accent">•</span> 1,500+ satisfied clients</li>
            <li className="flex items-center gap-2"><span className="text-accent">•</span> One of the largest marketing databases in Sri Lanka</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Our experience allows us to deliver campaigns that are both strategic and results-focused.
          </p>
        </motion.section>

        {/* Our Approach */}
        <motion.section {...fadeUp} transition={{ delay: 0.35 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Our Approach</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We believe in delivering the right message to the right audience at the right time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {approach.map((step, i) => (
              <div key={step} className="flex flex-col items-center text-center p-4 rounded-xl bg-card shadow-card border border-border">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm mb-2">{i + 1}</div>
                <span className="text-sm text-foreground">{step}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose */}
        <motion.section {...fadeUp} transition={{ delay: 0.4 }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Why Choose Buzz Connect</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {whyChoose.map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border">
                <span className="text-accent font-bold">✔</span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Vision */}
        <motion.section {...fadeUp} transition={{ delay: 0.45 }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <Eye className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Our Vision</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            To become the leading digital marketing and lead generation company in Sri Lanka, helping businesses grow through innovative and impactful marketing solutions.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.section {...fadeUp} transition={{ delay: 0.5 }} className="p-8 rounded-2xl gradient-hero text-center">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-3">Partner with Buzz Connect</h2>
          <p className="text-primary-foreground/80 mb-6 text-lg">
            Take your marketing to the next level. Reach thousands of customers across Sri Lanka with powerful, multi-channel campaigns.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/email-marketing" className="inline-block px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              Get Started Today
            </Link>
            <Link to="/multi-channel-marketing-sri-lanka" className="inline-block px-6 py-3 rounded-full bg-card text-foreground font-bold hover:opacity-90 transition-opacity">
              View Packages
            </Link>
          </div>
        </motion.section>
      </div>
    </ServicePageLayout>
  );
};

export default AboutUs;
