import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Users, Crown, Target, Briefcase, Smartphone, Globe, HelpCircle, Rocket, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import SmsHeroContent from "@/components/sms/SmsHeroContent";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";

const databases = [
  {
    icon: Users,
    title: "Corporate database for executive decisions",
    desc: "This is our general and most popular database, you can target majority of the Colombo based private sector organizations employees through this database. Subscribers: 300,000+ age between 18 and 65.",
    items: ["Executives & Officers", "Small business owners", "Managers", "General Managers", "Association members", "Gender - Male 80% & Female 20%"],
    pricing: "Pricing - 2 LKR for one message",
  },
  {
    icon: Crown,
    title: "VIP Database For Achievers",
    desc: "Our database has more than 50,000+ contacts in Colombo and greater colombo area, Age between 30 and 65 with majority being 80% Male and 20% Female.",
    items: ["Premium business leaders", "Multinational companies Directors", "CEOs", "Celebrities", "Sports personals", "Doctors", "Entrepreneurs", "Private sector high salary earning employees (Over 500,000 per month)", "Head of Government institutes"],
    pricing: "Pricing - 2.50 LKR for one message",
  },
  {
    icon: Target,
    title: "Marketing Database to Promote your business",
    desc: "This database consists of marketing fraternity professionals which attach to marketing related works. Our database has more than 200,000+ contacts in All Island.",
    items: ["Director marketing", "Marketing Managers", "Brand managers", "Advertising Managers", "Sales Managers", "DGM Marketing", "Marketing Executives", "Sales Executives"],
    pricing: "Pricing - 2 LKR for one message",
  },
  {
    icon: Briefcase,
    title: "HR Database to Promote your business",
    desc: "Human resources specialists are responsible for recruiting, screening, interviewing and placing workers. Our database has more than 25,000+ contacts in All Island.",
    items: ["HR Directors", "HR Managers", "Senior HR Managers", "Assistant HR Managers", "HR Executives", "Administrative managers", "Training Managers"],
    pricing: "Pricing - 2 LKR for one message",
  },
];

const districts = [
  { name: "Colombo", count: "500,000" }, { name: "Galle", count: "185,000" }, { name: "Kandy", count: "175,000" },
  { name: "Kurunegala", count: "150,000" }, { name: "Matara", count: "120,000" }, { name: "Gampaha", count: "115,000" },
  { name: "Hambantota", count: "85,000" }, { name: "Kalutara", count: "80,000" }, { name: "Nuwara Eliya", count: "60,000" },
  { name: "Polonnaruwa", count: "52,000" }, { name: "Matale", count: "50,000" }, { name: "Anuradhapura", count: "45,000" },
  { name: "Monaragala", count: "45,000" }, { name: "Ratnapura", count: "42,000" }, { name: "Kegalle", count: "42,000" },
  { name: "Badulla", count: "40,000" }, { name: "Batticaloa", count: "40,000" }, { name: "Mannar", count: "40,000" },
  { name: "Puttalam", count: "40,000" }, { name: "Kilinochchi", count: "35,000" }, { name: "Trincomalee", count: "31,000" },
  { name: "Jaffna", count: "31,000" }, { name: "Mullaitivu", count: "30,000" }, { name: "Vavuniya", count: "28,000" },
  { name: "Ampara", count: "15,000" }, { name: "Wattala", count: "10,000" },
];



const faqs = [
  { q: "What is SMS marketing in Sri Lanka?", a: "SMS marketing is a direct marketing method that allows businesses to send promotional or informational messages to customers via mobile phones. It's one of the most effective channels in Sri Lanka due to high open rates." },
  { q: "How effective is bulk SMS marketing?", a: "SMS has one of the highest open rates (over 95%), making it extremely effective when combined with the right targeting and multi-channel strategy." },
  { q: "What is multi-channel marketing?", a: "Multi-channel marketing uses multiple platforms together — SMS, email, WhatsApp, landing pages, and retargeting ads — to improve engagement and conversion rates." },
  { q: "How much does SMS marketing cost in Sri Lanka?", a: "Costs depend on volume, database selection, and campaign strategy. Pricing starts from LKR 2 per message. Contact us for a customized quote." },
  { q: "How many people can I reach?", a: "You can reach 600,000+ targeted contacts across Sri Lanka using our corporate, VIP, marketing, and district-wise databases." },
  { q: "Which industries benefit most from SMS marketing in Sri Lanka?", a: "SMS marketing in Sri Lanka works across all major industries including hotels, education, real estate, e-commerce, restaurants, healthcare, automotive, finance, fashion, events, recruitment, and travel. Each industry can leverage targeted SMS campaigns for instant leads, bookings, and sales." },
  { q: "How fast are SMS campaigns delivered?", a: "SMS campaigns are delivered instantly to mobile users across Sri Lanka. Messages reach recipients within seconds, making SMS marketing ideal for time-sensitive offers, flash sales, and urgent promotions." },
  { q: "Can I combine SMS marketing with email and WhatsApp campaigns?", a: "Yes! Buzz Connect offers integrated multi-channel campaigns combining SMS marketing with email marketing, WhatsApp marketing, and Findit.lk web advertising for maximum reach and ROI across Sri Lanka." },
];

const SmsMarketing = () => {
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
      name: "SMS Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Best bulk SMS marketing services in Sri Lanka with 600,000+ reach.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="SMS Marketing Sri Lanka"
      title="SMS Marketing That Reaches Instantly — and Converts"
      subtitle="Targeted SMS + Multi-Channel Promotion to maximize visibility and engagement"
    >
      <SEOHead
        title="SMS Marketing Sri Lanka | Bulk SMS Sri Lanka & Bulk SMS Messaging"
        description="SMS marketing Sri Lanka with bulk SMS messaging and bulk SMS Sri Lanka campaigns. Reach customers instantly with fast, targeted SMS marketing."
        canonical="/sms-marketing"
        keywords="sms marketing sri lanka, bulk sms sri lanka, sms advertising colombo, sms campaign sri lanka, targeted sms marketing, bulk sms service sri lanka, multi-channel sms marketing, sms marketing services sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "SMS Marketing", url: "/sms-marketing" },
        ]}
        jsonLd={jsonLd}
      />

      {/* 1. SEO Content — Hook & Desire */}
      <SmsHeroContent />


      {/* 4. Databases — The Product */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Our SMS Marketing Databases in Sri Lanka</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {databases.map((db, i) => (
            <motion.div
              key={db.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-card shadow-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                  <db.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{db.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{db.desc}</p>
              <ul className="space-y-2 mb-4">
                {db.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="inline-block px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold text-sm">
                {db.pricing}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mid-page CTA after databases */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
        <p className="text-foreground font-bold text-lg mb-1">Not sure which database is right for you?</p>
        <p className="text-muted-foreground text-sm mb-5">Our team will recommend the best targeting strategy for your business</p>
        <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20need%20help%20choosing%20the%20right%20SMS%20database." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
          <MessageSquare className="w-4 h-4" /> Get Free Consultation
        </a>
      </motion.div>

      {/* 5. Gender-wise Database */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">SMS Gender-wise Database</h2>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <div className="text-center p-6 rounded-xl bg-secondary/10 border border-secondary/20 min-w-[160px]">
            <div className="text-3xl font-heading font-bold text-secondary">350,000+</div>
            <div className="text-sm text-muted-foreground mt-1">Male Subscribers</div>
            <div className="text-xs text-muted-foreground">Age 18 - 65</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-accent/10 border border-accent/20 min-w-[160px]">
            <div className="text-3xl font-heading font-bold text-accent">250,000+</div>
            <div className="text-sm text-muted-foreground mt-1">Female Subscribers</div>
            <div className="text-xs text-muted-foreground">Age 18 - 65</div>
          </div>
        </div>
      </motion.div>

      {/* 6. District Coverage - Sri Lanka Map Layout */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">SMS District-wise Database</h2>
        <div className="max-w-5xl mx-auto">
          {/* Sri Lanka Map Shape Container */}
          <div className="relative bg-primary/5 border border-primary/20 rounded-3xl p-6 sm:p-10">
            {/* Northern Region */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 text-center">Northern & Eastern</p>
              <div className="flex flex-wrap justify-center gap-2">
                {districts.filter(d => ["Jaffna", "Kilinochchi", "Mullaitivu", "Vavuniya", "Mannar", "Trincomalee", "Batticaloa", "Ampara"].includes(d.name)).map((d) => (
                  <div key={d.name} className="px-3 py-2 rounded-lg bg-card shadow-card border border-border text-center min-w-[100px]">
                    <div className="font-heading font-bold text-accent text-sm">{d.count}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{d.name}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Central Region */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 text-center">North Central & Central</p>
              <div className="flex flex-wrap justify-center gap-2">
                {districts.filter(d => ["Anuradhapura", "Polonnaruwa", "Kurunegala", "Puttalam", "Matale", "Kandy", "Nuwara Eliya", "Badulla", "Monaragala", "Kegalle"].includes(d.name)).map((d) => (
                  <div key={d.name} className="px-3 py-2 rounded-lg bg-card shadow-card border border-border text-center min-w-[100px]">
                    <div className="font-heading font-bold text-accent text-sm">{d.count}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{d.name}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Western & Southern Region */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 text-center">Western & Sabaragamuwa</p>
              <div className="flex flex-wrap justify-center gap-2">
                {districts.filter(d => ["Colombo", "Gampaha", "Kalutara", "Wattala", "Ratnapura"].includes(d.name)).map((d) => (
                  <div key={d.name} className="px-3 py-2 rounded-lg bg-card shadow-card border border-accent/30 text-center min-w-[100px]">
                    <div className="font-heading font-bold text-accent text-base">{d.count}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{d.name}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Southern Region */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 text-center">Southern</p>
              <div className="flex flex-wrap justify-center gap-2">
                {districts.filter(d => ["Galle", "Matara", "Hambantota"].includes(d.name)).map((d) => (
                  <div key={d.name} className="px-3 py-2 rounded-lg bg-card shadow-card border border-border text-center min-w-[100px]">
                    <div className="font-heading font-bold text-accent text-sm">{d.count}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{d.name}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Total */}
            <div className="mt-6 text-center">
              <div className="inline-block px-6 py-3 rounded-full bg-accent/10 border border-accent/30">
                <span className="font-heading font-bold text-accent text-lg">2,000,000+</span>
                <span className="text-muted-foreground text-sm ml-2">Total SMS Reach Across Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 7. Findit.lk Advantage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Extended Reach with SMS Integrated Advertising</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Buzz Connect enhances SMS campaigns with additional exposure through <strong>Findit.lk</strong>, one of Sri Lanka's leading promotion platforms. Combined with other <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">advertising in Sri Lanka</Link> channels, this ensures your campaign reaches both direct mobile users and a wider online audience, increasing visibility and engagement.
        </p>
      </motion.div>

      {/* 8. Multi-Channel Upsell Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Scale Your Marketing</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">📈 Need Larger Reach for SMS Marketing?</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">For businesses looking to go beyond SMS and reach massive audiences — we offer advanced multi-channel marketing campaigns across Sri Lanka.</p>
        </div>

        <Link to="/multi-channel-marketing-sri-lanka" className="block p-8 pt-10 rounded-2xl upsell-highlight mb-8 relative overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform duration-300">
          <div className="absolute top-0 right-0 px-5 py-2 rounded-bl-xl bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider animate-pulse">🔥 Most Popular</div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">🌐 Upgrade SMS Campaigns to Multi-Channel</h3>
          <p className="text-muted-foreground mb-5">Combine your SMS campaigns with:</p>
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

        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">📱 Ideal for Large-Scale Campaigns</h3>
          <p className="text-muted-foreground mb-4">This solution is best suited for:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Large businesses & corporate brands",
              "New product or service launches",
              "Seasonal promotions & flash sales",
              "Brand awareness campaigns",
              "Event marketing & registrations",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-muted-foreground text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">Designed for businesses that need mass visibility + fast impact</p>
        </div>

        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">🎯 What You Can Achieve with Multi-Channel SMS Campaigns</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              "Brand awareness campaigns across Sri Lanka",
              "New business & product launches",
              "Promotional offers and seasonal deals",
              "Driving website traffic and inquiries",
              "Generating leads in a short time",
              "Reaching new target audiences nationwide",
              "Re-engaging existing customers",
              "Building strong top-of-mind brand recall",
              "Expanding your business reach across Sri Lanka",
              "Generating quick market response",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4">💡 Why Businesses Choose Multi-Channel Over SMS Alone</h3>
          <p className="text-muted-foreground mb-4">Instead of relying on a single platform:</p>
          <ul className="space-y-2.5">
            {[
              "Reach customers through multiple touchpoints",
              "Increase brand recall and trust",
              "Drive faster inquiries and conversions",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-foreground font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-accent font-semibold mt-4">👉 The result: higher visibility + better conversion rates</p>
        </div>

        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8 overflow-x-auto">
          <h3 className="font-heading text-lg font-bold text-foreground mb-5">🆚 SMS Only vs Multi-Channel Campaigns</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Feature</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-semibold">SMS Only</th>
                <th className="text-left py-3 px-4 text-accent font-semibold">Multi-Channel Campaign</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Reach", "Limited to SMS contacts", "Nationwide multi-platform reach"],
                ["Platforms", "Single platform", "SMS + Email + WhatsApp + Findit.lk"],
                ["Speed", "Fast delivery", "Fast results across all channels"],
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

        <div className="p-8 rounded-2xl gradient-hero text-center relative overflow-hidden">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary-foreground mb-3">🚀 Scale Your Marketing Beyond SMS</h3>
          <p className="text-primary-foreground/80 mb-2 max-w-xl mx-auto">For businesses looking to go beyond SMS and achieve nationwide visibility, our multi-channel campaigns deliver unmatched reach and impact.</p>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">If you're looking for maximum reach, faster visibility, and large-scale campaigns — explore our full solution.</p>
          <Link to="/multi-channel-marketing-sri-lanka">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-full text-base">
              <Rocket className="w-5 h-5 mr-2" /> View Multi-Channel Campaigns
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* SMS Industry Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">📱 SMS Marketing Services for Every Industry in Sri Lanka</h2>
          <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">Looking for SMS marketing in Sri Lanka that delivers instant results? With open rates as high as 98%, SMS is one of the fastest and most effective ways to reach customers and drive immediate action.</p>
          <p className="text-foreground font-semibold mt-3">Our targeted SMS campaigns help businesses across Sri Lanka generate leads, increase sales, and engage customers in real time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              emoji: "🏨", title: "Hotel SMS Marketing Sri Lanka – Fill Rooms Fast",
              campaigns: ["Last-minute room deals & weekend offers", "Seasonal promotions (Avurudu, holidays)", "Booking confirmations & reminders"],
              results: ["Instant bookings", "Higher occupancy rates", "Reduced unsold inventory"],
              link: "/hotel-marketing-sri-lanka", linkText: "hotel marketing"
            },
            {
              emoji: "🎓", title: "Education SMS Marketing Sri Lanka – Drive Student Inquiries",
              campaigns: ["Course intake alerts", "Deadline reminders for registration", "Open day / seminar invitations"],
              results: ["Immediate student inquiries", "Faster enrollment decisions", "Higher response rates than email"],
              link: "/education-marketing", linkText: "education marketing"
            },
            {
              emoji: "🏠", title: "Real Estate SMS Marketing Sri Lanka – Generate Property Leads",
              campaigns: ["Property launch alerts", "Price drop & limited-unit promotions", "Site visit invitations"],
              results: ["Direct buyer inquiries", "Faster conversions", "High-intent leads"],
              link: "/real-estate-marketing", linkText: "real estate marketing"
            },
            {
              emoji: "🛍️", title: "Retail & E-commerce SMS Marketing – Boost Sales Instantly",
              campaigns: ["Flash sales & limited-time discounts", "Promo codes & exclusive offers", "Abandoned cart reminders"],
              results: ["Immediate purchases", "Higher conversion rates", "Increased repeat customers"],
              link: null, linkText: ""
            },
            {
              emoji: "🍽️", title: "Restaurant SMS Marketing Sri Lanka – Increase Daily Orders",
              campaigns: ["Lunch / dinner deals", "Daily specials & promotions", "Reservation confirmations"],
              results: ["Increased foot traffic", "More repeat customers", "Higher daily revenue"],
              link: null, linkText: ""
            },
            {
              emoji: "💼", title: "Recruitment SMS Marketing Sri Lanka – Hire Faster",
              campaigns: ["Job vacancy alerts", "Interview reminders", "Bulk hiring campaigns"],
              results: ["Faster applicant response", "More qualified candidates", "Reduced hiring time"],
              link: null, linkText: ""
            },
            {
              emoji: "🏥", title: "Healthcare SMS Marketing Sri Lanka – Improve Patient Engagement",
              campaigns: ["Appointment reminders", "Health check promotions", "Follow-up messages"],
              results: ["Reduced no-shows", "Increased bookings", "Better patient retention"],
              link: null, linkText: ""
            },
            {
              emoji: "🚗", title: "Automotive SMS Marketing Sri Lanka – Increase Inquiries",
              campaigns: ["Vehicle offers & promotions", "Service reminders", "New model launches"],
              results: ["More showroom visits", "Increased inquiries", "Better customer retention"],
              link: null, linkText: ""
            },
            {
              emoji: "🏦", title: "Finance & Insurance SMS Marketing – Generate Leads",
              campaigns: ["Loan & leasing offers", "Payment reminders", "Investment promotions"],
              results: ["High-quality leads", "Faster decision-making", "Strong ROI"],
              link: null, linkText: ""
            },
            {
              emoji: "👗", title: "Fashion & Clothing SMS Marketing – Drive Sales",
              campaigns: ["New arrivals & collections", "Seasonal discounts", "Exclusive VIP offers"],
              results: ["Increased store visits", "Higher sales", "Strong brand recall"],
              link: null, linkText: ""
            },
            {
              emoji: "🎉", title: "Event SMS Marketing Sri Lanka – Maximize Attendance",
              campaigns: ["Event announcements", "Ticket promotions", "Reminder alerts"],
              results: ["Higher attendance rates", "Faster ticket sales", "Better engagement"],
              link: null, linkText: ""
            },
            {
              emoji: "🏢", title: "Corporate & B2B SMS Marketing – Reach Decision Makers",
              campaigns: ["Business offers & promotions", "Service announcements", "Partnership campaigns"],
              results: ["Direct reach to professionals", "Higher B2B conversions", "Faster responses"],
              link: null, linkText: ""
            },
            {
              emoji: "🧳", title: "Travel & Tourism SMS Marketing – Promote Packages",
              campaigns: ["Tour deals & holiday packages", "Last-minute travel offers", "Booking confirmations"],
              results: ["Increased bookings", "Faster inquiries", "Higher campaign ROI"],
              link: null, linkText: ""
            },
          ].map((ind) => (
            <div key={ind.title} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">{ind.emoji} {ind.title}</h3>
              <div className="mb-3">
                <p className="text-foreground font-semibold text-sm mb-1.5">Campaign Ideas:</p>
                <ul className="space-y-1">
                  {ind.campaigns.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-3">
                <p className="text-foreground font-semibold text-sm mb-1.5">Results You Can Expect:</p>
                <ul className="space-y-1">
                  {ind.results.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Rocket className="w-3.5 h-3.5 text-secondary-foreground flex-shrink-0" /> {r}
                    </li>
                  ))}
                </ul>
              </div>
              {ind.link && (
                <Link to={ind.link} className="text-accent hover:underline text-sm font-semibold">
                  Learn about {ind.linkText} →
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-card shadow-card border border-border">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">🔥 Why SMS Marketing Works So Well in Sri Lanka</h3>
          <ul className="space-y-2">
            {[
              "Messages are delivered instantly to mobile users",
              "Extremely high open rates (near 98%)",
              "Perfect for urgent promotions & reminders",
              "Cost-effective compared to traditional advertising",
              "Works across all industries",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <p className="text-foreground font-semibold mt-4 text-sm">👉 With high mobile usage in Sri Lanka, SMS marketing is one of the most direct ways to reach customers</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/email-marketing" className="text-accent hover:underline text-sm font-semibold">Email marketing →</Link>
            <Link to="/whatsapp-marketing" className="text-accent hover:underline text-sm font-semibold">WhatsApp marketing →</Link>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-2xl gradient-hero text-center">
          <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">🚀 Start Your SMS Marketing Campaign in Sri Lanka Today</h3>
          <p className="text-primary-foreground/80 mb-4">Ready to reach thousands of customers instantly?</p>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20start%20an%20SMS%20marketing%20campaign%20for%20my%20industry." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
            <MessageSquare className="w-4 h-4" /> Get a Free Consultation & Targeting Plan
          </a>
        </div>
      </motion.div>

      {/* 9. FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions – SMS Marketing Sri Lanka</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-5 rounded-xl bg-card shadow-card border border-border">
              <summary className="font-heading font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </motion.div>

      {/* 10. Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 sm:p-14 rounded-2xl gradient-hero relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.15),transparent_70%)]" />
        <div className="relative z-10">
          <p className="text-accent font-bold text-sm uppercase tracking-wider mb-3">Ready to grow your business?</p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">Launch Your SMS Campaign Today</h2>
          <p className="text-primary-foreground/80 mb-3 max-w-2xl mx-auto text-lg">
            Reach Customers Instantly. Get Real Results.
          </p>
          <p className="text-primary-foreground/60 mb-8 max-w-xl mx-auto text-sm">
            From LKR 30,000 — reach thousands instantly and expand visibility across multiple platforms and expand visibility across multiple platforms
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base shadow-lg">
              Start Your SMS Campaign <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20start%20an%20SMS%20campaign." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors text-base">
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
      <RelatedArticles currentPath="/sms-marketing" />
      <DigitalMarketingCTA variant="alt" />
    </ServicePageLayout>
  );
};

export default SmsMarketing;
