import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, Zap, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, Hotel, Plane, MapPin, Calendar, Star, Users, TrendingUp,
  ArrowRight, Send, Settings, Eye, Award, Compass
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import IndustryStatsBanner from "@/components/IndustryStatsBanner";
import FinditlkAdvantage from "@/components/FinditlkAdvantage";
import IndustryLogoCarousel from "@/components/IndustryLogoCarousel";

import radissonLogo from "@/assets/clients/radisson.jpg";
import colomboCourtLogo from "@/assets/clients/colombo-court.jpg";
import araliyaLogo from "@/assets/clients/araliya.png";
import brownsLogo from "@/assets/clients/browns.jpg";
import kingsburyLogo from "@/assets/clients/kingsbury.png";
import tangerineLogo from "@/assets/clients/tangerine.jpg";
import jetwingLogo from "@/assets/clients/jetwing.png";
import cinnamonLogo from "@/assets/clients/cinnamon.jpg";
import bestWesternLogo from "@/assets/clients/best-western.jpg";

const hotelClients = [
  { name: "Radisson", logo: radissonLogo },
  { name: "Colombo Court Hotel & Spa", logo: colomboCourtLogo },
  { name: "Araliya Hotels & Resorts", logo: araliyaLogo },
  { name: "Browns Hotels & Resorts", logo: brownsLogo },
  { name: "The Kingsbury", logo: kingsburyLogo },
  { name: "Tangerine Beach Hotel", logo: tangerineLogo },
  { name: "Jetwing Hotels", logo: jetwingLogo },
  { name: "Cinnamon Hotels & Resorts", logo: cinnamonLogo },
  { name: "Best Western", logo: bestWesternLogo },
];

const services = [
  { icon: Mail, title: "Email Marketing for Hotels", desc: "Promote hotel deals, seasonal packages & travel offers to 350,000+ targeted contacts." },
  { icon: Smartphone, title: "SMS Booking Alerts", desc: "Send last-minute booking alerts and exclusive deals to 600,000+ mobile users." },
  { icon: MessageSquare, title: "WhatsApp Direct Bookings", desc: "Enable instant booking inquiries and guest communication via WhatsApp." },
  { icon: Globe, title: "Findit.lk Travel Visibility", desc: "Get listed in Hotels & Travel categories on Findit.lk for continuous visibility." },
  { icon: Eye, title: "Banner Advertising", desc: "Showcase your property with visually stunning banner campaigns across top platforms." },
  { icon: Target, title: "Tourist & Local Targeting", desc: "Reach both international tourists and local travelers with precision database targeting." },
];

const channels = [
  { icon: Mail, channel: "Email", action: "Promote hotel deals & packages", color: "bg-blue-500/10 text-blue-600" },
  { icon: Smartphone, channel: "SMS", action: "Last-minute booking alerts", color: "bg-green-500/10 text-green-600" },
  { icon: MessageSquare, channel: "WhatsApp", action: "Direct booking inquiries", color: "bg-emerald-500/10 text-emerald-600" },
  { icon: Globe, channel: "Findit.lk", action: "Hotels & Travel category visibility", color: "bg-purple-500/10 text-purple-600" },
];

const benefits = [
  "Increase direct bookings",
  "Reach tourists & local travelers",
  "Reduce OTA dependency",
  "Promote seasonal packages fast",
  "Build guest loyalty",
  "Maximize occupancy rates",
];

const useCases = [
  { icon: Hotel, label: "Hotels & Resorts" },
  { icon: Plane, label: "Travel Agencies" },
  { icon: MapPin, label: "Tour Operators" },
  { icon: Compass, label: "Eco & Adventure Tourism" },
  { icon: Calendar, label: "Event Venues" },
  { icon: Star, label: "Boutique Hotels & Villas" },
];

const processSteps = [
  { icon: Target, title: "Identify Target Guests", desc: "Define your ideal guest profile — tourists, corporates, or local travelers" },
  { icon: Mail, title: "Launch Multi-Channel Campaign", desc: "Coordinate email, SMS & WhatsApp promotions for maximum reach" },
  { icon: Globe, title: "Activate Findit.lk Listing", desc: "Get high visibility in Hotels & Travel categories" },
  { icon: Send, title: "Drive Booking Inquiries", desc: "Convert interested travelers into confirmed bookings" },
  { icon: BarChart3, title: "Optimize & Scale", desc: "Track results and optimize campaigns for better ROI" },
];

const whyChoose = [
  "Proven hotel marketing strategies",
  "Access to tourist & traveler databases",
  "Integration with Findit.lk Travel categories",
  "Fast campaign execution within days",
  "Cost-effective compared to OTA commissions",
  "Dedicated campaign management team",
];

const faqs = [
  { q: "What is hotel marketing in Sri Lanka?", a: "Hotel marketing involves promoting your accommodation, packages, and services to potential guests through targeted digital marketing channels like email, SMS, WhatsApp, and directory listings." },
  { q: "How can Buzz Connect help my hotel get more bookings?", a: "We use a multi-channel approach combining email campaigns, SMS alerts, WhatsApp messaging, and Findit.lk category visibility to reach thousands of potential guests and drive direct bookings." },
  { q: "What makes Buzz Connect different from other hotel marketing agencies?", a: "Our unique combination of direct marketing (email, SMS, WhatsApp) with Findit.lk category-based promotions provides both instant reach and continuous visibility — something traditional agencies cannot offer." },
  { q: "How much does hotel marketing cost in Sri Lanka?", a: "Buzz Connect offers cost-effective hotel marketing packages starting from LKR 8,000. Contact us for a customized quote based on your property and target audience." },
  { q: "Can you target international tourists?", a: "Yes, our database includes both local travelers and international tourist segments, allowing you to reach the right audience for your property." },
];

const HotelMarketing = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Hotel Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Multi-channel hotel marketing services in Sri Lanka combining email, SMS, WhatsApp, and Findit.lk visibility to drive direct bookings.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Hotel & Travel Marketing"
      title="Hotel Marketing Sri Lanka – Drive Direct Bookings with Multi-Channel Campaigns"
      subtitle="Reach tourists and local travelers through targeted email, SMS, WhatsApp campaigns and Findit.lk category visibility to maximize your hotel's occupancy."
    >
      <SEOHead
        title="Hotel Marketing Sri Lanka | Multi-Channel Travel Campaigns"
        description="No.1 hotel marketing company in Sri Lanka. Drive direct bookings via email, SMS, WhatsApp & Findit.lk. Reach tourists & travelers. Multi-channel campaigns that deliver results."
        canonical="/hotel-marketing-sri-lanka"
        keywords="hotel marketing sri lanka, travel marketing sri lanka, hotel promotion sri lanka, hotel digital marketing colombo, tourism marketing sri lanka, hotel booking campaigns, resort marketing sri lanka, hospitality marketing"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Hotel Marketing", url: "/hotel-marketing-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Industry Stats Banner */}
      <IndustryStatsBanner
        icon={Hotel}
        gradient="gradient-hotel"
        tagline="High-Impact Travel Promotion Campaigns"
        stats={[
          { value: "3,000+", label: "Hotels in Sri Lanka" },
          { value: "2.5M+", label: "Tourist Arrivals/Year" },
          { value: "350K+", label: "Email Database" },
          { value: "24hrs", label: "Campaign Launch" },
        ]}
      />

      {/* Power Intro */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Buzz Connect delivers <strong>high-impact hotel marketing campaigns in Sri Lanka</strong>, helping hotels, resorts, and travel companies reach tourists and local travelers through targeted multi-channel promotions.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Our proven strategy combines <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing</Link>, <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp marketing</Link>, and <strong>Findit.lk Hotels & Travel category visibility</strong> to drive direct bookings and reduce OTA dependency.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Whether you run a boutique hotel, luxury resort, or travel agency, our campaigns are designed to fill rooms and generate inquiries faster than traditional advertising.
        </p>
      </motion.div>

      <IndustryLogoCarousel
        title="Trusted by Leading Hotels & Resorts"
        subtitle="We're proud to work with some of Sri Lanka's most prestigious hospitality brands."
        clients={hotelClients}
      />

      {/* Industry Challenges */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Challenges in Hotel Marketing in Sri Lanka</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Sri Lankan hospitality industry faces intense competition with over 3,000 registered accommodations competing for travelers' attention. High OTA commissions (15-25%), seasonal demand fluctuations, and the challenge of reaching international tourists make effective marketing essential.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Most hotels rely solely on social media or expensive OTA listings, missing the opportunity to build direct relationships with guests. <strong>Buzz Connect's multi-channel approach</strong> solves this by providing both instant reach and continuous visibility.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Solutions</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Hotel Marketing Solutions in Sri Lanka</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Complete multi-channel marketing solutions designed specifically for the hospitality industry.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-xl bg-card shadow-card border border-border hover:border-accent/40 transition-all">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Multi-Channel Strategy */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Campaign Strategy</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Multi-Channel Hotel Marketing Strategy</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {channels.map((ch, i) => (
            <motion.div key={ch.channel} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card shadow-card border border-border text-center">
              <div className={`w-14 h-14 rounded-full ${ch.color} flex items-center justify-center mx-auto mb-4`}>
                <ch.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{ch.channel}</h3>
              <p className="text-sm text-muted-foreground">{ch.action}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Findit.lk Advantage */}
      <FinditlkAdvantage
        title="Findit.lk Hotels & Travel Advantage"
        description="Get your hotel listed and promoted in Findit.lk's top travel categories for continuous visibility to high-intent travelers searching for accommodation and travel deals in Sri Lanka."
        gradient="gradient-hotel"
        links={[
          { label: "Hotels & Accommodation", url: "https://www.findit.lk/promotions/hotels-and-accommodation" },
          { label: "Travel & Tourism", url: "https://www.findit.lk/promotions/travel-and-tourism" },
        ]}
        benefits={["Access to active travel seekers", "High visibility in Hotels category", "Continuous promotion for weeks", "Better conversion than social ads"]}
      />

      {/* Benefits */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Benefits of Hotel Marketing with Buzz Connect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-foreground font-medium">{b}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Use Cases */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Who Needs Hotel Marketing?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {useCases.map((uc) => (
            <div key={uc.label} className="flex flex-col items-center gap-2 p-5 rounded-xl bg-card shadow-card border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <uc.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">{uc.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Process */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">How Our Hotel Marketing Process Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {processSteps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center p-5 rounded-xl bg-card shadow-card border border-border relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full gradient-accent flex items-center justify-center text-xs font-bold text-primary">{i + 1}</div>
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mt-3 mb-3">
                <step.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose + Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">Why Choose Buzz Connect for Hotel Marketing?</h2>
          <ul className="space-y-3">
            {whyChoose.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">Campaign Examples</h2>
          <ul className="space-y-3">
            {["Seasonal package email blasts to 100K+ contacts", "Last-minute deal SMS to Colombo travelers", "WhatsApp-based villa booking inquiries", "Findit.lk Hotels category feature promotion", "Corporate retreat package campaigns"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* FAQ */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Frequently Asked Questions – Hotel Marketing Sri Lanka</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <h3 className="flex items-start gap-2 font-heading font-semibold text-foreground mb-2">
                <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                {faq.q}
              </h3>
              <p className="text-muted-foreground text-sm pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-hotel text-white relative overflow-hidden">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Start Your Hotel Marketing Campaign Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
          Fill your rooms faster with <strong>multi-channel hotel marketing in Sri Lanka</strong>. Contact Buzz Connect today and start driving direct bookings.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact-us">
            <button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">
              Get a Free Quote <ArrowRight className="inline w-4 h-4 ml-1" />
            </button>
          </Link>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20hotel%20marketing%20services." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">
              Chat on WhatsApp
            </button>
          </a>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/hotel-marketing-sri-lanka" />
    </ServicePageLayout>
  );
};

export default HotelMarketing;
