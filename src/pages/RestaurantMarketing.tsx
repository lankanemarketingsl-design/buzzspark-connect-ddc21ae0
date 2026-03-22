import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, UtensilsCrossed, Coffee, Users, TrendingUp,
  ArrowRight, Send, Store, Rocket, Crown, RefreshCw,
  Zap, Clock, Gift, DollarSign, ShoppingCart, Tag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import IndustryStatsBanner from "@/components/IndustryStatsBanner";
import FinditlkAdvantage from "@/components/FinditlkAdvantage";
import IndustryLogoCarousel from "@/components/IndustryLogoCarousel";

import flagWhistleLogo from "@/assets/clients/flag-whistle.jpg";
import cloudCafeLogo from "@/assets/clients/cloud-cafe.jpg";
import tropicalFreshLogo from "@/assets/clients/tropical-fresh.jpg";
import saltSugarLogo from "@/assets/clients/salt-sugar.jpg";
import dominosLogo from "@/assets/clients/dominos.jpg";
import maqaraLogo from "@/assets/clients/maqara.jpg";
import popeyesLogo from "@/assets/clients/popeyes.jpg";
import greatWallLogo from "@/assets/clients/great-wall.jpg";
import burgerKingLogo from "@/assets/clients/burger-king.jpg";
import chineseDragonLogo from "@/assets/clients/chinese-dragon.jpg";

const restaurantClients = [
  { name: "Burger King", logo: burgerKingLogo },
  { name: "Domino's", logo: dominosLogo },
  { name: "Popeyes", logo: popeyesLogo },
  { name: "Chinese Dragon Cafe", logo: chineseDragonLogo },
  { name: "Great Wall Restaurant", logo: greatWallLogo },
  { name: "Maqara", logo: maqaraLogo },
  { name: "Flag & Whistle", logo: flagWhistleLogo },
  { name: "Cloud Cafe", logo: cloudCafeLogo },
  { name: "Salt & Sugar", logo: saltSugarLogo },
  { name: "Tropical Fresh", logo: tropicalFreshLogo },
];

const achievements = [
  { icon: Users, text: "Increase daily restaurant traffic" },
  { icon: ShoppingCart, text: "Boost online orders & delivery sales" },
  { icon: Tag, text: "Promote offers, discounts & events instantly" },
  { icon: UtensilsCrossed, text: "Fill empty tables during slow hours" },
  { icon: MessageSquare, text: "Get direct calls and WhatsApp orders" },
];

const whoIsFor = [
  { icon: UtensilsCrossed, text: "Restaurants & Cafes" },
  { icon: Rocket, text: "Fast Food Outlets" },
  { icon: Store, text: "Cloud Kitchens" },
  { icon: Crown, text: "Fine Dining Restaurants" },
  { icon: ShoppingCart, text: "Food Delivery Brands" },
];

const whyChooseUs = [
  { icon: Users, text: "Access to active food and dining audience" },
  { icon: Mail, text: "Multi-channel campaigns (Email + SMS + WhatsApp)" },
  { icon: Zap, text: "Instant promotion for offers & deals" },
  { icon: DollarSign, text: "Cost-effective compared to food apps & ads" },
  { icon: BarChart3, text: "Fast results — same-day customer response" },
];

const howItWorks = [
  { step: 1, icon: Target, title: "Target Food Lovers", desc: "We reach people actively interested in dining, food, and offers" },
  { step: 2, icon: Mail, title: "Create High-Converting Offers", desc: "We design promotions like discounts, combos, and deals" },
  { step: 3, icon: Send, title: "Multi-Channel Promotion", desc: "Campaigns run via Email, SMS & WhatsApp" },
  { step: 4, icon: BarChart3, title: "Drive Customers Instantly", desc: "Customers visit your restaurant or place orders immediately" },
];

const useCases = [
  { icon: UtensilsCrossed, title: "Lunch & Dinner Offers", audience: "Promote daily deals", result: "Increase walk-ins" },
  { icon: Tag, title: "Weekend Promotions", audience: "Drive traffic during peak days", result: "Maximize revenue" },
  { icon: Coffee, title: "Event & Special Nights", audience: "Live music, themed nights, events", result: "Increase bookings" },
  { icon: ShoppingCart, title: "Delivery Campaigns", audience: "Promote Uber Eats / PickMe / direct orders", result: "Boost online sales" },
];

const whyBuzzConnect = [
  "Direct access to food lovers & deal seekers",
  "Designed for fast-response promotions",
  "Proven system for daily customer generation",
  "Quick campaign setup and launch",
];

const freeBonusItems = [
  "Best audience for your restaurant",
  "Campaign strategy",
  "Expected customer results",
];

const faqs = [
  { q: "What is restaurant marketing in Sri Lanka?", a: "Restaurant marketing involves promoting your food business, daily deals, and menu items to local customers through digital channels like SMS, WhatsApp, email, and directory listings." },
  { q: "How can SMS marketing help my restaurant?", a: "SMS has a 98% open rate and delivers instantly — perfect for daily deals, lunch specials, and time-sensitive promotions that drive immediate foot traffic." },
  { q: "Can you target customers near my restaurant?", a: "Yes, our database allows targeting by location, dining preferences, and behavior — ensuring your campaigns reach the most relevant food-loving audience nearby." },
  { q: "How much does restaurant marketing cost?", a: "Buzz Connect offers restaurant marketing packages starting from LKR 14,900. Contact us for a customized quote based on your restaurant's needs." },
  { q: "How quickly can campaigns go live?", a: "We can launch your campaign within hours of confirmation, making it perfect for same-day promotions and flash deals." },
];

const RestaurantMarketing = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Restaurant Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Multi-channel restaurant marketing services in Sri Lanka combining SMS, WhatsApp, email, and Findit.lk visibility to drive foot traffic and daily orders.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Restaurant Marketing"
      title="Get More Customers to Your Restaurant Every Day"
      subtitle="Fill your tables, boost orders, and promote your offers instantly with targeted Email, SMS & WhatsApp campaigns."
    >
      <SEOHead
        title="Restaurant Marketing Sri Lanka | Drive Daily Customers & Orders"
        description="No.1 restaurant marketing company in Sri Lanka. Drive foot traffic via SMS, WhatsApp & Findit.lk daily promotions. Get more customers, orders & bookings instantly."
        canonical="/restaurant-marketing-sri-lanka"
        keywords="restaurant marketing sri lanka, food promotion colombo, restaurant advertising sri lanka, cafe marketing, daily deals campaigns, food delivery marketing, restaurant sms marketing"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Restaurant Marketing", url: "/restaurant-marketing-sri-lanka" }]}
        jsonLd={jsonLd}
      />

      {/* Hero CTA Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mb-12 -mt-4">
        <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20get%20more%20customers%20for%20my%20restaurant.%20Please%20share%20details." target="_blank" rel="noopener noreferrer">
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-base font-bold rounded-full"><UtensilsCrossed className="w-5 h-5 mr-2" />Get More Customers</Button>
        </a>
        <Link to="/contact-us">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-base font-bold rounded-full"><Rocket className="w-5 h-5 mr-2" />Start Campaign</Button>
        </Link>
      </motion.div>

      <IndustryStatsBanner
        icon={UtensilsCrossed}
        gradient="gradient-restaurant"
        tagline="Daily Promotion & Foot Traffic Campaigns"
        stats={[
          { value: "600K+", label: "Mobile Reach" },
          { value: "98%", label: "SMS Open Rate" },
          { value: "Same Day", label: "Campaign Launch" },
          { value: "5,000+", label: "Monthly Campaigns" },
        ]}
      />

      {/* 💰 What You Can Achieve */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">What You Can Achieve</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Stop Waiting for Customers to Find You.</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">With BuzzConnect, you can reach thousands of hungry customers instantly.</p>
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
          <p className="text-muted-foreground mt-2">Used by restaurants, cafes, and food brands across Sri Lanka</p>
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
        title="Trusted by Leading Restaurants & Food Brands"
        subtitle="We help Sri Lanka's top food brands drive more customers through their doors"
        clients={restaurantClients}
      />

      {/* Restaurant Advertising Packages - PRESERVED EXACTLY */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing Packages</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Restaurant Marketing Packages with Remarketing</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We don't just promote your restaurant — we bring you more customers every day.</p>
          <p className="text-accent font-semibold mt-3 max-w-2xl mx-auto">Just 5–10 extra orders per day = full package ROI. Everything after that = pure profit.</p>
          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-accent font-bold text-sm">🎉 6-Month Subscription = 10% Discount on All Packages</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Starter Traffic */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Starter Traffic</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 14,900</p>
            <p className="text-xs text-muted-foreground mb-4">Best for small restaurants & cafes</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />1 Targeted Email Campaign</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Featured listing in Findit 'Restaurants'</li>
              <li className="flex items-start gap-2 text-sm"><Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href="https://www.findit.lk/promotions/food-and-drink" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk <ArrowRight className="w-3 h-3" /></a></li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />7-day visibility boost</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />🔁 Basic Remarketing (repeat exposure)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Ad creative (offer-based)</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Bring customers during slow days"</p>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Restaurant%20Starter%20Traffic%20Package%20(LKR%2014%2C900).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* Customer Flow - Most Popular */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border-2 border-accent flex flex-col ring-2 ring-accent/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-xs font-bold">MOST POPULAR</div>
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Crown className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Customer Flow</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 39,900</p>
            <p className="text-xs text-muted-foreground mb-4">Consistent daily customer flow</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />2–3 Targeted Email Campaigns</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Premium Findit restaurant placement</li>
              <li className="flex items-start gap-2 text-sm"><Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href="https://www.findit.lk/promotions/food-and-drink" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk <ArrowRight className="w-3 h-3" /></a></li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Weekend / promo campaign push</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />🔁 Advanced Remarketing (multi-touch)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Performance report</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Consistent daily customer flow"</p>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Restaurant%20Customer%20Flow%20Package%20(LKR%2039%2C900).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* Full House */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Full House</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 89,900</p>
            <p className="text-xs text-muted-foreground mb-4">Maximize orders & dominate your area</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />4–6 Email Campaigns (full funnel)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Top ranking in Findit category</li>
              <li className="flex items-start gap-2 text-sm"><Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href="https://www.findit.lk/promotions/food-and-drink" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk <ArrowRight className="w-3 h-3" /></a></li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />🔁 Full Funnel Remarketing</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Custom offer / promo landing page</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Priority promotion during peak times</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Maximize orders & dominate your area"</p>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Restaurant%20Full%20House%20Package%20(LKR%2089%2C900).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>
        </div>
      </motion.div>

      {/* 📊 Why Restaurants Choose Us */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Why Restaurants Choose BuzzConnect</h2>
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

      {/* 🍔 Use Cases */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Use Cases</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Restaurant Marketing Use Cases</h2>
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
        title="Findit.lk Food & Restaurant Advantage"
        description="Get your restaurant promoted in Findit.lk's Food & Drink category for continuous visibility to hungry customers looking for their next meal."
        gradient="gradient-restaurant"
        links={[
          { label: "Food & Drink", url: "https://www.findit.lk/promotions/food-and-drink" },
        ]}
        benefits={["Access to food lovers & deal seekers", "High visibility in Food category", "Promote daily deals & offers", "Better reach than food delivery apps"]}
      />

      {/* 🧠 Why BuzzConnect */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">Why BuzzConnect for Restaurant Marketing?</h2>
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
              <h2 className="font-heading text-xl font-bold text-foreground">Get a FREE Restaurant Marketing Plan</h2>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">Tailored to your restaurant. We will show you:</p>
          <ul className="space-y-2 mb-6">
            {freeBonusItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27d%20like%20a%20FREE%20Restaurant%20Marketing%20Plan%20for%20my%20business." target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold"><Gift className="w-4 h-4 mr-2" />Get Your Free Plan</Button>
          </a>
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Frequently Asked Questions – Restaurant Marketing Sri Lanka</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <h3 className="flex items-start gap-2 font-heading font-semibold text-foreground mb-2"><HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />{faq.q}</h3>
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
          <p className="text-muted-foreground max-w-xl mx-auto mb-2">Limited campaign slots available for restaurants each month.</p>
          <p className="text-foreground font-semibold">Promote your next offer before competitors attract your customers.</p>
        </div>
      </motion.div>

      {/* ⚡ Final CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-restaurant text-white relative overflow-hidden">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Start Getting More Customers Today</h2>
        <p className="text-white/80 mb-4 max-w-xl mx-auto">Reach thousands of hungry customers instantly.</p>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">Fill your tables and boost orders with <strong>multi-channel restaurant marketing in Sri Lanka</strong>. Contact Buzz Connect today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20talk%20to%20an%20expert%20about%20restaurant%20marketing." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">Talk to an Expert <ArrowRight className="inline w-4 h-4 ml-1" /></button>
          </a>
          <Link to="/contact-us">
            <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">Get Proposal</button>
          </Link>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20launch%20a%20restaurant%20marketing%20campaign." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full bg-accent/20 text-accent font-bold hover:bg-accent/30 transition-colors text-base">Launch Campaign</button>
          </a>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/restaurant-marketing-sri-lanka" />
    </ServicePageLayout>
  );
};

export default RestaurantMarketing;
