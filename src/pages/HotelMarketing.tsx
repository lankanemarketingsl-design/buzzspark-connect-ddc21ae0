import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, Hotel, Plane, MapPin, Calendar, Star, Users, TrendingUp,
  ArrowRight, Send, Eye, Compass, RefreshCw, Crown, Rocket,
  Zap, Clock, Gift, DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
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

const achievements = [
  { icon: Hotel, text: "Increase direct bookings" },
  { icon: Calendar, text: "Fill low occupancy periods faster" },
  { icon: Star, text: "Promote special offers & last-minute deals" },
  { icon: Plane, text: "Reach local and international travelers instantly" },
  { icon: MessageSquare, text: "Get direct calls and WhatsApp inquiries" },
];

const whoIsFor = [
  { icon: Hotel, text: "Hotels & Resorts" },
  { icon: Star, text: "Boutique Villas" },
  { icon: MapPin, text: "Guest Houses" },
  { icon: Compass, text: "Apartment Rentals / Airbnb Hosts" },
  { icon: Plane, text: "Travel & Tour Operators" },
];

const whyChooseUs = [
  { icon: Users, text: "Access to travel-ready Sri Lankan audience" },
  { icon: Mail, text: "Multi-channel campaigns (Email + SMS + WhatsApp)" },
  { icon: Zap, text: "Faster response compared to traditional ads" },
  { icon: DollarSign, text: "Cost-effective alternative to OTA commissions" },
  { icon: Send, text: "Immediate reach and quick results" },
];

const howItWorks = [
  { step: 1, icon: Target, title: "Target the Right Travelers", desc: "We identify users interested in travel, holidays, and hotel stays" },
  { step: 2, icon: Mail, title: "Create High-Converting Offers", desc: "We craft compelling promotions (discounts, packages, deals)" },
  { step: 3, icon: Send, title: "Multi-Channel Promotion", desc: "Your hotel is promoted via Email, SMS & WhatsApp" },
  { step: 4, icon: BarChart3, title: "Get Booking Inquiries", desc: "Receive direct calls, messages, and booking requests" },
];

const useCases = [
  { icon: Hotel, title: "Weekend Getaway Promotions", audience: "Increase occupancy during weekends with targeted offers", result: "Fill rooms on slow days" },
  { icon: Calendar, title: "Seasonal Campaigns", audience: "Promote Avurudu, December holidays, and long weekends", result: "Maximize seasonal bookings" },
  { icon: Star, title: "Couple & Honeymoon Packages", audience: "Attract high-value bookings from couples", result: "Premium room bookings" },
  { icon: Plane, title: "Tourist Campaigns", audience: "Reach travelers planning to visit Sri Lanka", result: "International guest inquiries" },
];

const whyBuzzConnect = [
  "Direct access to hotel-seeking audience",
  "Industry-focused campaign strategies",
  "Fast campaign launch and execution",
  "Designed for Sri Lankan hospitality market",
];

const freeBonusItems = [
  "Best audience for your hotel",
  "Recommended campaign strategy",
  "Expected booking results",
];

const faqs = [
  { q: "What is hotel marketing in Sri Lanka?", a: "Hotel marketing involves promoting your accommodation, packages, and services to potential guests through targeted digital marketing channels like email, SMS, WhatsApp, and directory listings." },
  { q: "How can Buzz Connect help my hotel get more bookings?", a: "We use a multi-channel approach combining email campaigns, SMS alerts, WhatsApp messaging, and Findit.lk category visibility to reach thousands of potential guests and drive direct bookings." },
  { q: "What makes Buzz Connect different from other hotel marketing agencies?", a: "Our unique combination of direct marketing (email, SMS, WhatsApp) with Findit.lk category-based promotions provides both instant reach and continuous visibility — something traditional agencies cannot offer." },
  { q: "How much does hotel marketing cost in Sri Lanka?", a: "Buzz Connect offers cost-effective hotel marketing packages starting from LKR 14,900. Contact us for a customized quote based on your property and target audience." },
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
      title="Get More Direct Hotel Bookings in Sri Lanka"
      subtitle="Promote your hotel offers, fill rooms faster, and reach high-intent travelers using targeted Email, SMS & WhatsApp campaigns."
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

      {/* Hero CTA Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mb-12 -mt-4">
        <a href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20get%20more%20hotel%20bookings.%20Please%20share%20details." target="_blank" rel="noopener noreferrer">
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-base font-bold rounded-full"><Hotel className="w-5 h-5 mr-2" />Get More Bookings</Button>
        </a>
        <Link to="/contact-us">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-base font-bold rounded-full"><Rocket className="w-5 h-5 mr-2" />Start Campaign</Button>
        </Link>
      </motion.div>

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

      {/* 💰 What You Can Achieve */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">What You Can Achieve</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Stop Depending Only on OTAs and Slow Advertising Channels.</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">With BuzzConnect, you can reach travel-ready customers and drive real bookings.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div key={item.text} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-card hover:border-accent/40 transition-all">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground font-medium text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🎯 Who This Is For */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Who This Is For</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">This Service Is Designed For</h2>
          <p className="text-muted-foreground mt-2">Used by hotels, villas, and travel businesses across Sri Lanka</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {whoIsFor.map((item, i) => (
            <motion.div key={item.text} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 p-5 rounded-xl bg-card border border-border shadow-card text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-foreground font-medium text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <IndustryLogoCarousel
        title="Trusted by Leading Hotels & Resorts"
        subtitle="We're proud to work with some of Sri Lanka's most prestigious hospitality brands."
        clients={hotelClients}
      />

      {/* Advertising Packages - PRESERVED EXACTLY */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing Packages</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Hotel Advertising Packages with Remarketing</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Every package includes remarketing — so your hotel keeps appearing to interested travelers until they book.</p>
          <p className="text-accent font-semibold mt-3 max-w-2xl mx-auto">Hotels typically recover their investment with just 2–3 bookings.</p>
          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-accent font-bold text-sm">🎉 6-Month Subscription = 10% Discount on All Packages</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Starter Boost */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Starter Boost</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 14,900</p>
            <p className="text-xs text-muted-foreground mb-4">Entry-level but still powerful</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground mb-6 flex-1">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 1 Targeted Email Campaign</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Featured listing in Findit "Hotels & Accommodation"</li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="https://www.findit.lk/promotions/hotels-and-accommodation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk <ArrowRight className="w-3 h-3" /></a>
              </li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 7-day visibility boost</li>
              <li className="flex items-start gap-2"><RefreshCw className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Basic Remarketing Exposure</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Basic creative (image + copy)</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Be seen more than once — turn interest into inquiries"</p>
            <a href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Hotel%20Starter%20Boost%20Package%20(LKR%2014%2C900).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="hero-outline" className="w-full"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* Growth Bookings */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border-2 border-accent flex flex-col ring-2 ring-accent/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full gradient-accent text-primary text-xs font-bold">⭐ MOST POPULAR</div>
            <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Growth Bookings</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 39,900</p>
            <p className="text-xs text-muted-foreground mb-4">Maximum value for growing hotels</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground mb-6 flex-1">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 2–3 Targeted Email Campaigns (segmented)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Premium placement in Findit hotel category</li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="https://www.findit.lk/promotions/hotels-and-accommodation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk <ArrowRight className="w-3 h-3" /></a>
              </li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Seasonal promotion push (weekend / holiday)</li>
              <li className="flex items-start gap-2"><RefreshCw className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" /> Advanced Remarketing (multi-touch exposure)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Performance report (opens, clicks, trends)</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Stay in front of travelers until they book"</p>
            <a href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Hotel%20Growth%20Bookings%20Package%20(LKR%2039%2C900).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="hero" className="w-full"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* Dominate Package */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <Crown className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Dominate Package</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 89,900</p>
            <p className="text-xs text-muted-foreground mb-4">Full-funnel dominance for top hotels</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground mb-6 flex-1">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 4–6 Email Campaigns (full funnel strategy)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Top ranking in Findit category</li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="https://www.findit.lk/promotions/hotels-and-accommodation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk <ArrowRight className="w-3 h-3" /></a>
              </li>
              <li className="flex items-start gap-2"><RefreshCw className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Full Funnel Remarketing (all touchpoints)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 🎬 TikTok Video Ad (hotel promo video)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Custom offer / landing page</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Priority placement during peak travel</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Own attention, dominate decisions, maximize bookings"</p>
            <a href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Hotel%20Dominate%20Package%20(LKR%2089%2C900).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="hero-outline" className="w-full"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>
        </div>
      </motion.div>

      {/* 🚀 Multi-Channel Upsell Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Scale Your Marketing</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">📈 Need Larger Reach & Brand Awareness?</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">For hotels, resorts, and large hospitality groups looking to scale beyond standard campaigns — we offer advanced multi-channel marketing campaigns across Sri Lanka.</p>
        </div>

        {/* What's Included */}
        <Link to="/multi-channel-marketing-sri-lanka" className="block p-8 pt-10 rounded-2xl upsell-highlight mb-8 relative overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform duration-300">
          <div className="absolute top-0 right-0 px-5 py-2 rounded-bl-xl bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider animate-pulse">🔥 Most Popular</div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">🌐 Upgrade to Multi-Channel Campaigns</h3>
          <p className="text-muted-foreground mb-5">Combine your hotel promotions with:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { icon: Mail, label: "Email Marketing" },
              { icon: Smartphone, label: "SMS Campaigns" },
              { icon: MessageSquare, label: "WhatsApp Marketing" },
              { icon: Globe, label: "Exposure on Findit.lk" },
            ].map((ch, i) => (
              <motion.div key={ch.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-accent/5 border border-accent/20 text-center">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <ch.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground font-medium text-sm">{ch.label}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-accent font-semibold text-center text-lg">👉 Reach hundreds of thousands to 1M+ audiences within days</p>
        </Link>

        {/* Ideal For */}
        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">🏨 Ideal for Large-Scale Campaigns</h3>
          <p className="text-muted-foreground mb-4">This solution is best suited for:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Hotel chains & luxury resorts",
              "New hotel or branch openings",
              "Seasonal promotions (New Year, December holidays)",
              "Brand awareness campaigns",
              "Event & wedding venue promotions",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-muted-foreground text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">Designed for businesses that need mass visibility + fast impact</p>
        </div>

        {/* What You Can Achieve */}
        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">🎯 What You Can Achieve with Multi-Channel Campaigns</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              "Brand awareness campaigns across Sri Lanka",
              "New hotel or outlet openings",
              "Promotional offers and seasonal packages",
              "Event and wedding promotions",
              "Driving website traffic and direct bookings",
              "Increasing occupancy in a short time",
              "Reaching new local and tourist audiences",
              "Re-engaging past guests",
              "Building strong top-of-mind brand recall",
              "Expanding your hotel's reach nationwide",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Large Hotels Choose Multi-Channel */}
        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4">💡 Why Large Hotels Choose Multi-Channel Campaigns</h3>
          <p className="text-muted-foreground mb-4">Instead of relying on a single platform:</p>
          <ul className="space-y-2.5">
            {[
              "Reach customers through multiple touchpoints",
              "Increase brand recall and trust",
              "Drive faster inquiries and bookings",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-foreground font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-accent font-semibold mt-4">👉 The result: higher visibility + better conversion rates</p>
        </div>

        {/* Comparison Table */}
        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8 overflow-x-auto">
          <h3 className="font-heading text-lg font-bold text-foreground mb-5">🆚 Standard vs Multi-Channel Campaigns</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Feature</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Standard Hotel Marketing</th>
                <th className="text-left py-3 px-4 text-accent font-semibold">Multi-Channel Campaign</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Reach", "Limited reach", "Nationwide reach"],
                ["Platforms", "Single platform", "Multiple platforms"],
                ["Speed", "Slower impact", "Fast results (days)"],
                ["Awareness", "Basic awareness", "High visibility + recall"],
              ].map(([feature, standard, multi]) => (
                <tr key={feature} className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground font-medium">{feature}</td>
                  <td className="py-3 px-4 text-muted-foreground">{standard}</td>
                  <td className="py-3 px-4 text-accent font-semibold">{multi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bridge CTA */}
        <div className="p-8 rounded-2xl gradient-hotel text-center relative overflow-hidden">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary-foreground mb-3">🚀 Scale Your Hotel Marketing Across Sri Lanka</h3>
          <p className="text-primary-foreground/80 mb-2 max-w-xl mx-auto">For hotels looking to go beyond standard promotions and achieve nationwide visibility, our multi-channel campaigns deliver unmatched reach and impact.</p>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">If you're looking for maximum reach, faster visibility, and large-scale campaigns — explore our full solution.</p>
          <Link to="/multi-channel-marketing-sri-lanka">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-full text-base">
              <Rocket className="w-5 h-5 mr-2" /> View Multi-Channel Campaigns
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* 📊 Why Hotels Choose Us */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Why Hotels Choose BuzzConnect</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {whyChooseUs.map((item, i) => (
            <motion.div key={item.text} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-card">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-secondary-foreground" />
              </div>
              <span className="text-foreground font-medium text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🚀 How It Works */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Process</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {howItWorks.map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-card shadow-card border border-border">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-accent flex items-center justify-center text-sm font-bold text-primary">{step.step}</div>
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mt-3 mb-4">
                <step.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🏝 Use Cases */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Use Cases</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Hotel Marketing Use Cases</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {useCases.map((uc, i) => (
            <motion.div key={uc.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card shadow-card border border-border hover:border-accent/40 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                  <uc.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg">{uc.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{uc.audience}</p>
              <p className="text-sm text-accent font-semibold flex items-center gap-1"><ArrowRight className="w-4 h-4" />{uc.result}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

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

      {/* 🧠 Why BuzzConnect */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">Why BuzzConnect for Hotel Marketing?</h2>
        <ul className="space-y-3">
          {whyBuzzConnect.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-muted-foreground font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* 🎁 Free Bonus */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl border-2 border-accent/30 bg-accent/5 relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-10">
            <Gift className="w-24 h-24 text-accent" />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Gift className="w-6 h-6 text-accent" />
            </div>
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Free Bonus</span>
              <h2 className="font-heading text-xl font-bold text-foreground">Get a FREE Hotel Marketing Plan</h2>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">Tailored to your property. We will show you:</p>
          <ul className="space-y-2 mb-6">
            {freeBonusItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%27d%20like%20a%20FREE%20Hotel%20Marketing%20Plan%20for%20my%20property." target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold"><Gift className="w-4 h-4 mr-2" />Get Your Free Plan</Button>
          </a>
        </div>
      </motion.div>

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

      {/* 🔥 Urgency Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20 text-center">
          <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-7 h-7 text-destructive" />
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">Limited Campaign Slots Available</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-2">Limited campaign slots available for hotels each month.</p>
          <p className="text-foreground font-semibold">Book your campaign now and secure your next wave of guests.</p>
        </div>
      </motion.div>

      {/* ⚡ Final CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-hotel text-white relative overflow-hidden">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Start Getting More Bookings This Month</h2>
        <p className="text-primary-foreground/80 mb-4 max-w-xl mx-auto">Reach thousands of travel-ready customers in Sri Lanka instantly.</p>
        <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">Fill your rooms faster with <strong>multi-channel hotel marketing in Sri Lanka</strong>. Contact Buzz Connect today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20talk%20to%20an%20expert%20about%20hotel%20marketing." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">Talk to an Expert <ArrowRight className="inline w-4 h-4 ml-1" /></button>
          </a>
          <Link to="/contact-us">
            <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">Get Proposal</button>
          </Link>
          <a href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20launch%20a%20hotel%20marketing%20campaign." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full bg-accent/20 text-accent font-bold hover:bg-accent/30 transition-colors text-base">Launch Campaign</button>
          </a>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/hotel-marketing-sri-lanka" />
    </ServicePageLayout>
  );
};

export default HotelMarketing;
