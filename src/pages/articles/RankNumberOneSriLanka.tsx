import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Search, FileText, Link2, MapPin, BarChart3, Zap, Shield, AlertTriangle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const howToSteps = [
  "Target industry-specific keywords",
  "Optimize your website for your industry",
  "Create high-quality content",
  "Build industry-relevant backlinks",
  "Dominate local SEO",
  "Track real business results",
  "Combine SEO with fast lead generation",
  "Work with the right SEO expert",
];

const RankNumberOneSriLanka = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "How to Rank #1 in Google Sri Lanka: A Complete Industry-Focused Guide",
      datePublished: "2026-04-13",
      author: { "@type": "Organization", name: "Buzz Connect" },
      publisher: { "@type": "Organization", name: "Buzz Connect", logo: { "@type": "ImageObject", url: "https://buzzconnect.lk/og-image.png" } },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Rank #1 in Google Sri Lanka",
      step: howToSteps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: `Step ${i + 1}: ${s}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How long does it take to rank #1 on Google in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Typically 3–6 months depending on keyword competition and industry. Consistent SEO efforts deliver sustainable rankings over time." } },
        { "@type": "Question", name: "Which industries benefit most from SEO in Sri Lanka?", acceptedAnswer: { "@type": "Answer", text: "Hotels, education, healthcare, real estate, e-commerce, restaurants, legal services, and automotive businesses all benefit significantly from targeted SEO strategies." } },
        { "@type": "Question", name: "Can I combine SEO with paid ads?", acceptedAnswer: { "@type": "Answer", text: "Yes — smart businesses use SEO for long-term growth and paid ads for immediate visibility. Combining both maximizes results." } },
      ],
    },
  ];

  return (
    <ServicePageLayout
      badge="Resources"
      title="How to Rank #1 in Google Sri Lanka: A Complete Industry-Focused Guide"
      subtitle=""
    >
      <SEOHead
        title="How to Rank #1 in Google Sri Lanka: Industry-Focused SEO Guide | Buzz Connect"
        description="Learn how to rank #1 on Google in Sri Lanka with industry-focused SEO strategies for hotels, education, healthcare, real estate, and more."
        canonical="/rank-number-one-google-sri-lanka"
        ogType="article"
        keywords="rank number 1 google sri lanka, seo sri lanka, best seo company sri lanka, seo expert sri lanka, seo specialist sri lanka, google ranking sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Rank #1 in Google Sri Lanka", url: "/rank-number-one-google-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />
      <div className="max-w-3xl mx-auto">
        <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Resources
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Intro */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <p className="text-muted-foreground leading-relaxed mb-3">
              Ranking #1 on Google in Sri Lanka is one of the most powerful ways to grow your business. When your website appears at the top of search results, you gain more visibility, more targeted traffic, and more customer inquiries.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">But here's the reality:</p>
            <p className="text-foreground font-semibold leading-relaxed">
              Ranking #1 is not about generic SEO — it's about industry-focused strategy. The businesses that win are the ones that tailor their approach to their specific market.
            </p>
          </div>

          {/* Step 1: Industry Keywords */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold mr-2">1</span>
              Target Industry-Specific Keywords
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To rank #1, you must target keywords your customers actually search. Here's what different industries should focus on:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  emoji: "🏨",
                  title: "Hotels & Hospitality",
                  keywords: ['"best hotels in Colombo"', '"hotel deals Sri Lanka"'],
                  intent: "High booking intent",
                  link: { text: "hotel digital marketing in Sri Lanka", href: "/hotel-marketing-sri-lanka" },
                },
                {
                  emoji: "🎓",
                  title: "Education & Courses",
                  keywords: ['"IT courses Sri Lanka"', '"English classes Colombo"'],
                  intent: "High lead generation potential",
                  link: { text: "student lead generation strategies", href: "/education-marketing-sri-lanka" },
                },
                {
                  emoji: "🏠",
                  title: "Real Estate",
                  keywords: ['"land for sale Sri Lanka"', '"apartments in Colombo"'],
                  intent: "High-value transactions",
                  link: { text: "real estate marketing in Sri Lanka", href: "/real-estate-marketing-sri-lanka" },
                },
                {
                  emoji: "💰",
                  title: "Finance & Banking",
                  keywords: ['"loans Sri Lanka"', '"insurance Colombo"'],
                  intent: "Trust-driven conversions",
                  link: { text: "finance marketing in Sri Lanka", href: "/finance-marketing-sri-lanka" },
                },
                {
                  emoji: "🍽️",
                  title: "Restaurants & Cafes",
                  keywords: ['"restaurants in Colombo"', '"cafes near me"'],
                  intent: "Reviews + Maps ranking",
                  link: { text: "restaurant marketing in Sri Lanka", href: "/restaurant-marketing-sri-lanka" },
                },
                {
                  emoji: "👗",
                  title: "Fashion & Retail",
                  keywords: ['"buy online Sri Lanka"', '"fashion brands Colombo"'],
                  intent: "High competition",
                  link: { text: "fashion marketing in Sri Lanka", href: "/fashion-marketing-sri-lanka" },
                },
                {
                  emoji: "🏥",
                  title: "Healthcare",
                  keywords: ['"best dentist in Colombo"', '"skin clinic Sri Lanka"'],
                  intent: "High trust + urgency",
                  link: null,
                },
                {
                  emoji: "⚖️",
                  title: "Legal Services",
                  keywords: ['"lawyers in Colombo"', '"legal services Sri Lanka"'],
                  intent: "Authority-driven SEO",
                  link: null,
                },
                {
                  emoji: "🧳",
                  title: "Travel & Tourism",
                  keywords: ['"Sri Lanka tour packages"', '"things to do in Sri Lanka"'],
                  intent: "Content-driven SEO",
                  link: null,
                },
                {
                  emoji: "🚗",
                  title: "Automotive",
                  keywords: ['"car for sale Sri Lanka"', '"car service Colombo"'],
                  intent: "Listing + service SEO",
                  link: null,
                },
              ].map((industry) => (
                <div key={industry.title} className="p-4 rounded-xl bg-background border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-2">{industry.emoji} {industry.title}</h3>
                  <ul className="space-y-1 mb-2">
                    {industry.keywords.map((kw) => (
                      <li key={kw} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Search className="w-3 h-3 text-accent flex-shrink-0" /> {kw}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-foreground font-medium mb-1">→ {industry.intent}</p>
                  {industry.link && (
                    <Link to={industry.link.href} className="text-xs text-accent hover:underline font-semibold">
                      {industry.link.text} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Optimize Website */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold mr-2">2</span>
              Optimize Your Website for Your Industry
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Each industry needs a different approach. Google ranks pages that match user intent:</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "Hotels → booking-focused pages with pricing and availability",
                "Education → course landing pages with clear enrollment CTAs",
                "Healthcare → trust signals, credentials, and service-specific pages",
                "E-commerce → product optimization with reviews and categories",
                "Real Estate → listing pages with location-based keywords",
                "Restaurants → menu pages, reviews, and Google Maps optimization",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/50 border border-border">
                  <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span className="text-xs text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Content */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold mr-2">3</span>
              Create High-Quality Content
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Content is the biggest ranking driver. Examples of content that ranks:</p>
            <ul className="space-y-2">
              {[
                'Hotels → "Top Hotels in Negombo"',
                'Education → "Best IT Courses in Sri Lanka"',
                'Healthcare → "How to Choose a Dentist in Colombo"',
                'Business → "Best SEO Company in Sri Lanka"',
                'Real Estate → "Property Investment Guide Sri Lanka"',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <FileText className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Learn more about <Link to="/how-seo-works-sri-lanka" className="text-accent hover:underline font-semibold">how SEO content works in Sri Lanka</Link>.
            </p>
          </div>

          {/* Step 4: Backlinks */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold mr-2">4</span>
              Build Industry-Relevant Backlinks
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Backlinks increase authority. Relevance matters more than quantity:</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { industry: "Hotels", source: "Travel blogs & tourism directories" },
                { industry: "Education", source: "Education portals & directories" },
                { industry: "Healthcare", source: "Medical associations & health sites" },
                { industry: "Business", source: "Industry blogs & business directories" },
              ].map((item) => (
                <div key={item.industry} className="p-3 rounded-xl bg-muted/50 border border-border">
                  <span className="font-semibold text-foreground text-sm">{item.industry}</span>
                  <p className="text-xs text-muted-foreground mt-1">→ {item.source}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 5: Local SEO */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold mr-2">5</span>
              Dominate Local SEO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Local searches drive real customers. To dominate local SEO, optimize:</p>
            <ul className="space-y-2">
              {[
                "Google Business Profile — complete and up-to-date listing",
                "Customer reviews — encourage happy customers to leave reviews",
                "Location keywords — target city and area-specific terms",
                "NAP consistency — same name, address, phone across all listings",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Step 6: Track Results */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold mr-2">6</span>
              Track Real Business Results
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">SEO success is not just rankings. Focus on industry-specific KPIs:</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { industry: "Hotels", kpi: "Direct bookings" },
                { industry: "Education", kpi: "Student leads & enrollments" },
                { industry: "Healthcare", kpi: "Appointment bookings" },
                { industry: "Business", kpi: "Customer inquiries & conversions" },
              ].map((item) => (
                <div key={item.industry} className="flex items-center gap-2 p-3 rounded-xl bg-muted/50 border border-border">
                  <BarChart3 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground"><strong>{item.industry}</strong> → {item.kpi}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 7: Combine with Lead Gen */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold mr-2">7</span>
              Combine SEO with Fast Lead Generation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SEO takes time — but smart businesses don't wait. You can combine SEO with direct marketing for immediate results:
            </p>
            <ul className="space-y-2">
              {[
                { text: "Online advertising campaigns for immediate inquiries", link: "/advertising-sri-lanka" },
                { text: "Staff recruitment campaigns for faster hiring", link: "/staff-recruitment-sri-lanka" },
                { text: "Email marketing to reach 350,000+ professionals", link: "/email-marketing" },
                { text: "Multi-channel marketing for maximum reach", link: "/multi-channel-marketing-in-sri-lanka" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2 text-sm text-foreground">
                  <Zap className="w-4 h-4 text-accent flex-shrink-0" />
                  <Link to={item.link} className="text-accent hover:underline font-semibold">{item.text}</Link>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Learn about <Link to="/seo-vs-paid-ads-sri-lanka" className="text-accent hover:underline font-semibold">SEO vs paid ads</Link> to understand the right mix for your business.
            </p>
          </div>

          {/* Step 8: Work with Expert */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold mr-2">8</span>
              Work with the Right SEO Expert
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              To rank #1, you need expertise. A professional team will build strategy, optimize your website, and generate long-term results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Work with a trusted <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO company in Sri Lanka</Link> to accelerate your growth. An experienced <Link to="/seo-consultant-sri-lanka" className="text-accent hover:underline font-semibold">SEO consultant in Sri Lanka</Link> or <Link to="/seo-specialist-sri-lanka" className="text-accent hover:underline font-semibold">SEO specialist in Sri Lanka</Link> can make the difference between page 5 and page 1.
            </p>
          </div>

          {/* Common Mistakes */}
          <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Common SEO Mistakes to Avoid</h2>
            <ul className="space-y-2">
              {[
                "Targeting wrong or overly broad keywords",
                "Ignoring local SEO and Google Business Profile",
                "Publishing thin, low-quality content",
                "Building low-quality or irrelevant backlinks",
                "Not tracking results or measuring ROI",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Final Thoughts */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Final Thoughts</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Ranking #1 on Google in Sri Lanka is not about doing everything — it's about doing the right strategy for your industry. Businesses that understand their audience, create valuable content, and build authority consistently are the ones that win.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Explore our complete <Link to="/seo-services-sri-lanka" className="text-accent hover:underline font-semibold">SEO services in Sri Lanka</Link> and learn <Link to="/seo-investment-long-term-strategy-sri-lanka" className="text-accent hover:underline font-semibold">why SEO is the best long-term investment</Link>.
            </p>
          </div>

          {/* CTA */}
          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Ready to Rank #1 in Your Industry?</h3>
            <p className="text-primary-foreground/80 mb-4">Partner with a trusted SEO specialist in Sri Lanka and build a strategy that delivers real results.</p>
            <Link to="/seo-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              Get Started Today
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/rank-number-one-google-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default RankNumberOneSriLanka;
