import { Image, Layout, Film, Palette, FileText, PenTool, Award, CreditCard, BookOpen, Type, Edit, Smartphone, Tag, Box, LucideIcon } from "lucide-react";

export interface ExtraSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: { title: string; bullets: string[] }[];
}

export interface GraphicDesignServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  cardTitle: string;
  cardDesc: string;
  price?: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  benefits: string[];
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
  extraSections?: ExtraSection[];
  locations?: string[];
}

export const graphicDesignServices: GraphicDesignServiceData[] = [
  {
    slug: "e-flyer-design-sri-lanka",
    icon: Image,
    cardTitle: "Artwork/E-flyer designing",
    cardDesc: "We design professional e-flyers for business organizations and individuals. Increase the effectiveness of your marketing campaigns by sending attractive e-flyers.",
    price: "Price - LKR 4000",
    title: "E-Flyer Design Sri Lanka",
    metaTitle: "E-Flyer Design Sri Lanka | Professional Digital Flyer Design",
    metaDescription: "Professional e-flyer and digital artwork design services in Sri Lanka from LKR 4,000. Eye-catching e-flyers for email campaigns, social media & digital marketing.",
    h1: "E-Flyer Design Sri Lanka – Digital Flyer Designs That Drive Results",
    intro: [
      "Looking for professional e-flyer design Sri Lanka services that boost your marketing campaigns?",
      "At Buzz Connect, we create visually stunning e-flyers that capture attention, convey your message clearly, and drive action from your target audience across email, WhatsApp, and social media.",
      "In today's digital-first Sri Lankan market, e-flyers are one of the most cost-effective ways to promote products, events, and services. Our designs combine creativity with marketing strategy to maximize engagement and conversions.",
    ],
    benefits: [
      "Cost-effective marketing material",
      "Easy to distribute via email, WhatsApp & social media",
      "Professional designs that build brand credibility",
      "Quick turnaround – ready within 24-48 hours",
      "Optimized for both digital and print formats",
      "Increases engagement and click-through rates",
    ],
    process: [
      { step: "Discovery & Brief", desc: "Share your requirements, content, and brand guidelines" },
      { step: "Concept Development", desc: "We create initial design concepts for your review" },
      { step: "Design Refinement", desc: "We refine the design based on your feedback" },
      { step: "Final Delivery", desc: "Final files delivered in high-resolution formats" },
    ],
    faqs: [
      { q: "How much does e-flyer design cost in Sri Lanka?", a: "E-flyer design starts from LKR 4,000. Pricing varies based on complexity and number of designs needed." },
      { q: "What formats do you deliver e-flyers in?", a: "We deliver in JPG, PNG, and PDF formats suitable for email, social media, and print." },
      { q: "How long does it take to design an e-flyer?", a: "Standard e-flyer designs are completed within 24-48 hours after receiving your brief." },
      { q: "Can you design e-flyers for email campaigns?", a: "Yes, we design e-flyers optimized for email marketing with proper dimensions and file sizes for maximum deliverability." },
      { q: "Do you offer bulk e-flyer design packages?", a: "Yes, we offer monthly and bulk packages for businesses that need regular promotional e-flyers." },
    ],
    extraSections: [
      {
        title: "Why E-Flyer Design Matters for Marketing in Sri Lanka",
        paragraphs: [
          "E-flyers are one of the most versatile digital marketing tools available to Sri Lankan businesses. They can be distributed instantly via email, WhatsApp, social media, and websites at minimal cost.",
          "A professionally designed e-flyer communicates your brand's quality and professionalism, while a poorly designed one can damage your credibility. Our e-flyer designs ensure your message gets noticed and acted upon.",
        ],
      },
      {
        title: "Our E-Flyer Design Services in Sri Lanka",
        paragraphs: ["We create e-flyers for every marketing need."],
        subsections: [
          { title: "Promotional E-Flyers", bullets: ["Product launches", "Seasonal sales and offers", "Discount and coupon promotions", "New store openings"] },
          { title: "Event E-Flyers", bullets: ["Corporate events and conferences", "Workshops and seminars", "Social gatherings", "Exhibition invitations"] },
          { title: "Business E-Flyers", bullets: ["Service announcements", "Newsletter designs", "Company updates", "Recruitment flyers"] },
        ],
      },
      {
        title: "Why Choose Buzz Connect for E-Flyer Design in Sri Lanka",
        paragraphs: ["We combine design expertise with marketing knowledge to create e-flyers that convert."],
        bullets: [
          "Fast 24-48 hour turnaround",
          "Optimized for email, WhatsApp & social media",
          "Marketing-focused design approach",
          "Affordable starting from LKR 4,000",
          "Bulk and monthly packages available",
        ],
      },
    ],
    locations: ["Colombo", "Negombo", "Kandy", "Galle", "Kurunegala", "Island-wide"],
  },
  {
    slug: "business-card-design-sri-lanka",
    icon: Layout,
    cardTitle: "Business card designing",
    cardDesc: "Get professional business cards designs for your business. We design customized, affordable business card designs.",
    title: "Business Card Design Sri Lanka",
    metaTitle: "Business Card Design Sri Lanka | Professional Card Designs",
    metaDescription: "Professional business card design services in Sri Lanka. Custom, affordable business card designs that make a lasting impression. Single & double-sided options.",
    h1: "Business Card Design Sri Lanka – Professional Cards That Make an Impact",
    intro: [
      "Looking for professional business card design Sri Lanka services that leave a lasting impression?",
      "At Buzz Connect, we create custom business card designs that communicate credibility, quality, and professionalism — making every networking opportunity count.",
      "In Sri Lanka's growing business landscape, a well-designed business card is still one of the most powerful personal branding tools. Our designs combine modern aesthetics with strategic branding to represent your business perfectly.",
    ],
    benefits: [
      "Professional first impression for your business",
      "Custom designs matching your brand identity",
      "Single and double-sided options available",
      "Print-ready files with bleed and crop marks",
      "Multiple design concepts to choose from",
      "Affordable rates for startups and corporates",
    ],
    process: [
      { step: "Discovery & Brief", desc: "Share your business details, logo, and preferences" },
      { step: "Concept Development", desc: "We create multiple design concepts" },
      { step: "Design Refinement", desc: "Select your preferred design and request changes" },
      { step: "Final Delivery", desc: "Print-ready files delivered in all required formats" },
    ],
    faqs: [
      { q: "How much does business card design cost in Sri Lanka?", a: "Business card design pricing depends on complexity and package. Contact us for a custom quote." },
      { q: "Do you provide print-ready files?", a: "Yes, we deliver files with proper bleed, crop marks, and CMYK color profiles for professional printing." },
      { q: "Can you design both sides of the card?", a: "Yes, we offer both single-sided and double-sided business card designs." },
      { q: "What information should I include on my business card?", a: "Typically your name, title, company name, phone, email, website, and social media. We help you decide the best layout." },
      { q: "Do you offer matching stationery design?", a: "Yes, we can design matching letterheads, envelopes, and compliment slips for a complete brand identity package." },
    ],
    extraSections: [
      {
        title: "Why Business Card Design Matters in Sri Lanka",
        paragraphs: [
          "Despite the digital age, business cards remain essential in Sri Lanka's business culture. They are exchanged at meetings, networking events, exhibitions, and client visits — making them a critical touchpoint for your brand.",
          "A professionally designed business card builds trust instantly and ensures your contact information is kept and remembered.",
        ],
      },
      {
        title: "Our Business Card Design Services in Sri Lanka",
        paragraphs: ["We provide complete business card design solutions for every industry."],
        subsections: [
          { title: "Corporate Business Cards", bullets: ["Executive and management cards", "Multi-employee batch designs", "Consistent brand identity", "Premium finishes and materials"] },
          { title: "Creative & Modern Cards", bullets: ["Minimalist designs", "Unique shapes and die-cuts", "Foil stamping and embossing", "Transparent and metal card designs"] },
          { title: "Industry-Specific Cards", bullets: ["Real estate agent cards", "Restaurant and hospitality", "Healthcare professional cards", "Legal and finance"] },
        ],
      },
      {
        title: "Why Choose Buzz Connect for Business Card Design in Sri Lanka",
        paragraphs: ["We don't just design cards — we create networking tools that work."],
        bullets: [
          "Modern, professional design approach",
          "CMYK print-ready with bleed marks",
          "Multiple concept options",
          "Fast turnaround and delivery",
          "Affordable packages for all business sizes",
        ],
      },
    ],
    locations: ["Colombo", "Negombo", "Kandy", "Galle", "Kurunegala", "Island-wide"],
  },
  {
    slug: "animated-video-creation-sri-lanka",
    icon: Film,
    cardTitle: "Short Animated video creation",
    cardDesc: "Want to tell your story of your business or services? We can help you with that with animated explainer videos. We make quality animation videos that best explain your company story. Make your story heard.",
    title: "Animated Video Creation Sri Lanka",
    metaTitle: "Animated Video Creation Sri Lanka | Explainer Videos",
    metaDescription: "Professional animated explainer video creation in Sri Lanka. Short, engaging animation videos to tell your business story and explain products or services effectively.",
    h1: "Animated Video Creation Sri Lanka – Explainer Videos That Convert",
    intro: [
      "Looking for professional animated video creation Sri Lanka services that bring your brand story to life?",
      "At Buzz Connect, we create short, compelling animated explainer videos that simplify complex ideas, engage your audience, and drive conversions.",
      "Video content is the most engaging format online. Our animations combine storytelling, visual design, and marketing strategy to deliver videos that capture attention and communicate your message effectively.",
    ],
    benefits: [
      "Increase audience engagement by up to 80%",
      "Explain complex products/services simply",
      "Shareable across all digital platforms",
      "Boost website conversion rates",
      "Professional voiceover options available",
      "Custom animations matching your brand",
    ],
    process: [
      { step: "Script & Brief", desc: "We develop a compelling script for your video" },
      { step: "Storyboard", desc: "Visual storyboard created for your approval" },
      { step: "Animation", desc: "Full animation production with effects and transitions" },
      { step: "Final Delivery", desc: "Final video with voiceover and background music" },
    ],
    faqs: [
      { q: "How long are animated explainer videos?", a: "Typically 30 seconds to 2 minutes, depending on your message and requirements." },
      { q: "Can you add voiceover to the video?", a: "Yes, we offer professional voiceover services in Sinhala, Tamil, and English." },
      { q: "What format is the video delivered in?", a: "Videos are delivered in MP4 format, optimized for web, social media, and presentations." },
      { q: "How much does animated video creation cost in Sri Lanka?", a: "Pricing depends on video length, complexity, and voiceover requirements. Contact us for a custom quotation." },
      { q: "Can you create videos for social media ads?", a: "Yes, we create short animated videos optimized for Facebook, Instagram, YouTube, and TikTok ads." },
    ],
    extraSections: [
      {
        title: "Why Animated Videos Matter for Your Business in Sri Lanka",
        paragraphs: [
          "Video content generates 1200% more shares than text and image content combined. For Sri Lankan businesses looking to stand out online, animated explainer videos are the most effective way to communicate your value proposition.",
          "Whether you're explaining a product, onboarding customers, or running social media ads, animated videos help you connect with your audience faster and more memorably.",
        ],
      },
      {
        title: "Our Animated Video Services in Sri Lanka",
        paragraphs: ["We create different types of animated videos to meet every marketing need."],
        subsections: [
          { title: "Explainer Videos", bullets: ["Product and service explainers", "How-it-works videos", "Onboarding and tutorial videos", "FAQ and support videos"] },
          { title: "Promotional Videos", bullets: ["Social media ad videos", "Product launch videos", "Event promotion videos", "Brand awareness campaigns"] },
          { title: "Corporate Videos", bullets: ["Company introduction videos", "Training and education videos", "Investor pitch videos", "Internal communication"] },
        ],
      },
      {
        title: "Why Choose Buzz Connect for Animated Videos in Sri Lanka",
        paragraphs: ["We create videos that don't just look good — they deliver results."],
        bullets: [
          "Professional scriptwriting and storyboarding",
          "Voiceover in Sinhala, Tamil, and English",
          "Optimized for social media and web",
          "Fast turnaround and responsive communication",
          "Affordable packages for SMEs and corporates",
        ],
      },
    ],
    locations: ["Colombo", "Negombo", "Kandy", "Galle", "Kurunegala", "Island-wide"],
  },
  {
    slug: "logo-design-sri-lanka",
    icon: Palette,
    cardTitle: "Logo designing",
    cardDesc: "Excellent custom logo designs to represent your business. We create minimalist, eye catching logo designs that get attention for your business",
    title: "Logo Design Sri Lanka",
    metaTitle: "Logo Design Sri Lanka | Custom Logo Design Services",
    metaDescription: "Professional custom logo design services in Sri Lanka. Minimalist, eye-catching logos for startups & businesses. Multiple concepts, unlimited revisions. Get a quote.",
    h1: "Logo Design Sri Lanka – Professional Custom Logo Design That Builds Brands",
    intro: [
      "Looking for professional logo design Sri Lanka services that help your business build instant brand recognition?",
      "At Buzz Connect, we create strategic, memorable logo designs that capture your brand identity and resonate with your target audience across Sri Lanka and beyond.",
      "Your logo is more than a symbol — it's the foundation of your brand. Our designs combine creativity, market research, and brand psychology to create logos that attract customers and build lasting trust.",
    ],
    benefits: [
      "Unique designs that stand out from competitors",
      "Multiple concept options to choose from",
      "Scalable vector files for all uses",
      "Brand color palette and typography guide",
      "Suitable for print, digital, and signage",
      "Fast turnaround with expert designers",
    ],
    process: [
      { step: "Discovery & Brief", desc: "Understanding your brand, audience, and competitors" },
      { step: "Concept Development", desc: "We present multiple unique logo concepts" },
      { step: "Design Refinement", desc: "Iterate on your chosen direction until perfect" },
      { step: "Final Delivery", desc: "Final logo in all formats (AI, PNG, SVG, PDF)" },
    ],
    faqs: [
      { q: "How many logo concepts do you provide?", a: "We typically provide 3-5 unique concepts depending on the package you choose." },
      { q: "Do you provide source files?", a: "Yes, you receive editable AI/EPS files along with PNG, SVG, and PDF versions." },
      { q: "Can you redesign an existing logo?", a: "Yes, we offer logo redesign and modernization services while maintaining brand recognition." },
      { q: "How much does logo design cost in Sri Lanka?", a: "Logo design pricing varies based on complexity and package. Contact us for a custom quotation tailored to your needs." },
      { q: "How long does logo design take?", a: "Typically 3-7 business days depending on complexity and revision rounds." },
    ],
    extraSections: [
      {
        title: "Why Logo Design Matters for Your Business in Sri Lanka",
        paragraphs: [
          "In Sri Lanka's growing business landscape, your logo is often the first impression customers have of your brand. Whether seen on a signboard, website, social media, or product packaging, your logo communicates your brand's professionalism and values instantly.",
          "A professionally designed logo can help you build trust, stand out in competitive markets, and create a consistent brand identity across all platforms.",
        ],
      },
      {
        title: "Our Logo Design Services in Sri Lanka",
        paragraphs: ["We provide complete logo design Sri Lanka solutions for businesses of all sizes."],
        subsections: [
          { title: "Startup & New Business Logos", bullets: ["Brand-new logo creation", "Brand identity development", "Logo + business card combo packages", "Social media profile optimization"] },
          { title: "Corporate Logo Design", bullets: ["Professional corporate identity", "Multi-division brand systems", "Board-level presentation quality", "Stationery suite design"] },
          { title: "Logo Redesign & Modernization", bullets: ["Refreshing outdated logos", "Maintaining brand recognition", "Digital-first optimization", "Responsive logo variations"] },
          { title: "Industry-Specific Logo Design", bullets: ["Restaurant & food brands", "Real estate & property firms", "Education & schools", "Healthcare & wellness"] },
        ],
      },
      {
        title: "Our Logo Design Approach",
        paragraphs: ["Every logo we create goes through a strategic design process to ensure it represents your brand perfectly."],
        bullets: [
          "Market and competitor research",
          "Multiple creative concepts",
          "Color psychology and typography selection",
          "Scalable vector formats for any size",
          "Brand guidelines documentation",
        ],
      },
      {
        title: "Why Choose Buzz Connect for Logo Design in Sri Lanka",
        paragraphs: ["We don't just design logos — we build brand identities."],
        bullets: [
          "10+ years of creative design experience",
          "Deep understanding of the Sri Lankan market",
          "Modern, minimalist, and timeless concepts",
          "Fast communication and turnaround",
          "Affordable packages for startups and SMEs",
        ],
      },
    ],
    locations: ["Colombo", "Negombo", "Kandy", "Galle", "Kurunegala", "Island-wide"],
  },
  {
    slug: "letterhead-design-sri-lanka",
    icon: FileText,
    cardTitle: "Letterhead designing",
    cardDesc: "Professional letterhead designs to represent powerful brand image. Single/Double Sided letterhead designs for an affordable rate.",
    title: "Letterhead Design Sri Lanka",
    metaTitle: "Letterhead Design Sri Lanka | Professional Letterhead Designs",
    metaDescription: "Professional letterhead design services in Sri Lanka. Single & double-sided designs that represent a powerful brand image. Affordable rates. Contact us today.",
    h1: "Letterhead Design Sri Lanka – Professional Letterhead Design Services",
    intro: [
      "A professionally designed letterhead reinforces your brand identity on every piece of correspondence. It communicates professionalism and attention to detail to clients and partners.",
      "Buzz Connect creates custom letterhead designs that align with your brand identity, ensuring consistency across all your business communications.",
    ],
    benefits: [
      "Strengthens brand identity and professionalism",
      "Consistent branding across all communications",
      "Single and double-sided options",
      "Print-ready and digital formats",
      "Matching envelope and compliment slip designs",
      "Affordable rates for all business sizes",
    ],
    process: [
      { step: "Brief", desc: "Share your brand assets and requirements" },
      { step: "Design", desc: "We create letterhead concepts matching your brand" },
      { step: "Review", desc: "Refine the design based on your feedback" },
      { step: "Deliver", desc: "Print-ready and digital files delivered" },
    ],
    faqs: [
      { q: "Do you design matching stationery sets?", a: "Yes, we can design matching letterheads, envelopes, compliment slips, and business cards." },
      { q: "What format are letterhead designs delivered in?", a: "Designs are delivered in AI, PDF, and Word template formats for easy use." },
      { q: "Can I edit the letterhead myself later?", a: "Yes, we provide editable Word templates so you can update content as needed." },
    ],
  },
  {
    slug: "hoarding-design-sri-lanka",
    icon: PenTool,
    cardTitle: "Hording designing",
    cardDesc: "Coordinate with us for professional hording designs. We will provide superior, eye catching hording designs as per information given by the clients.",
    title: "Hoarding Design Sri Lanka",
    metaTitle: "Hoarding Design Sri Lanka | Professional Billboard & Hoarding Design",
    metaDescription: "Professional hoarding and billboard design services in Sri Lanka. Eye-catching outdoor advertising designs that grab attention. Superior quality at competitive rates.",
    h1: "Hoarding Design Sri Lanka – Professional Billboard & Hoarding Design",
    intro: [
      "Hoardings and billboards remain one of the most impactful forms of outdoor advertising in Sri Lanka. A well-designed hoarding can capture thousands of impressions daily and significantly boost brand awareness.",
      "Buzz Connect creates bold, eye-catching hoarding designs that communicate your message effectively to passing audiences and leave a memorable impression.",
    ],
    benefits: [
      "High-impact outdoor advertising designs",
      "Bold visuals that grab attention instantly",
      "Designed for optimal readability at distance",
      "Print-ready files for large format printing",
      "Custom sizes for any hoarding location",
      "Competitive rates for quality designs",
    ],
    process: [
      { step: "Brief", desc: "Share location details, dimensions, and message" },
      { step: "Design", desc: "We create impactful hoarding concepts" },
      { step: "Review", desc: "Refine visuals for maximum impact" },
      { step: "Deliver", desc: "High-resolution print-ready files delivered" },
    ],
    faqs: [
      { q: "What sizes do you design hoardings for?", a: "We design for all standard and custom hoarding sizes, from small roadside signs to large billboards." },
      { q: "Do you handle printing as well?", a: "We focus on design; however, we can recommend trusted printing partners in Sri Lanka." },
      { q: "How do you ensure readability?", a: "We follow outdoor advertising best practices – bold fonts, high contrast, and minimal text for quick comprehension." },
    ],
  },
  {
    slug: "signboard-design-sri-lanka",
    icon: Award,
    cardTitle: "Name boards/ Sign boards designing",
    cardDesc: "Get business sign boards and indoor sign boards. We do best name boards for an affordable price.",
    title: "Signboard Design Sri Lanka",
    metaTitle: "Signboard Design Sri Lanka | Name Board & Sign Board Design",
    metaDescription: "Professional name board and signboard design services in Sri Lanka. Indoor & outdoor sign boards for businesses. Affordable, eye-catching designs. Get a quote today.",
    h1: "Signboard Design Sri Lanka – Name Board & Sign Board Design Services",
    intro: [
      "Your signboard is the first thing customers see when they visit your business. A well-designed signboard attracts foot traffic, builds brand recognition, and creates a professional image.",
      "Buzz Connect designs custom name boards and sign boards that make your business stand out, whether it's a storefront sign, indoor directory, or outdoor banner.",
    ],
    benefits: [
      "Attracts foot traffic to your business",
      "Professional brand representation",
      "Indoor and outdoor design options",
      "LED and backlit sign design available",
      "Custom sizes and materials",
      "Affordable pricing for all businesses",
    ],
    process: [
      { step: "Brief", desc: "Share your business name, logo, and location details" },
      { step: "Design", desc: "We create sign board concepts with mockups" },
      { step: "Review", desc: "Refine the design for your approval" },
      { step: "Deliver", desc: "Production-ready files with specifications" },
    ],
    faqs: [
      { q: "Do you design LED sign boards?", a: "Yes, we design for all types including LED, neon, backlit, and standard signage." },
      { q: "Can you provide installation guidance?", a: "We provide detailed specifications and can recommend installation partners in Sri Lanka." },
      { q: "What information do you need to start?", a: "Your business name, logo, preferred colors, sign dimensions, and mounting location details." },
    ],
  },
  {
    slug: "invitation-design-sri-lanka",
    icon: CreditCard,
    cardTitle: "Invitation designing",
    cardDesc: "Offering customized Invitation card designing services to suit any event or occasion.",
    title: "Invitation Design Sri Lanka",
    metaTitle: "Invitation Design Sri Lanka | Custom Invitation Card Design",
    metaDescription: "Professional invitation card design services in Sri Lanka for weddings, corporate events, birthdays & more. Beautiful, customized invitation designs at affordable rates.",
    h1: "Invitation Design Sri Lanka – Custom Invitation Card Design Services",
    intro: [
      "A beautifully designed invitation sets the tone for any event. Whether it's a wedding, corporate event, birthday celebration, or grand opening, the invitation is the first impression your guests receive.",
      "Buzz Connect creates stunning, customized invitation designs that reflect the theme and elegance of your event, available in both digital and print-ready formats.",
    ],
    benefits: [
      "Custom designs for any occasion",
      "Digital and print-ready formats",
      "Wedding, corporate, and social event designs",
      "Multiple theme and style options",
      "Quick turnaround for urgent events",
      "Affordable rates with premium quality",
    ],
    process: [
      { step: "Brief", desc: "Share event details, theme, and preferences" },
      { step: "Design", desc: "We create beautiful invitation concepts" },
      { step: "Review", desc: "Refine colors, fonts, and layout" },
      { step: "Deliver", desc: "Print-ready and digital versions delivered" },
    ],
    faqs: [
      { q: "Can you design wedding invitations?", a: "Yes, we specialize in elegant wedding invitation designs in various styles and themes." },
      { q: "Do you provide digital invitations?", a: "Yes, we create digital invitations optimized for WhatsApp, email, and social media sharing." },
      { q: "How fast can you deliver?", a: "Standard delivery is 2-3 days. Rush delivery within 24 hours is available for urgent requests." },
    ],
  },
  {
    slug: "brochure-design-sri-lanka",
    icon: BookOpen,
    cardTitle: "Brochure & Leaflet designing",
    cardDesc: "Get attractive broacher design layouts. We have personalized services to help you make your own brochures. Get it design online today.",
    title: "Brochure & Leaflet Design Sri Lanka",
    metaTitle: "Brochure Design Sri Lanka | Professional Leaflet & Brochure Design",
    metaDescription: "Professional brochure and leaflet design services in Sri Lanka. Bi-fold, tri-fold & custom brochure layouts that showcase your business effectively. Get a quote.",
    h1: "Brochure & Leaflet Design Sri Lanka – Professional Brochure Design Services",
    intro: [
      "Brochures and leaflets remain one of the most effective marketing materials for businesses in Sri Lanka. A well-designed brochure can communicate your complete product range, services, and brand story in a tangible, shareable format.",
      "Buzz Connect creates professional brochure and leaflet designs that capture attention, convey information clearly, and drive your audience to take action.",
    ],
    benefits: [
      "Bi-fold, tri-fold, and custom layouts",
      "Professional copywriting support available",
      "High-quality print-ready files",
      "Eye-catching designs that stand out",
      "Suitable for corporate and retail use",
      "Affordable rates with quick delivery",
    ],
    process: [
      { step: "Brief", desc: "Share your content, images, and brand guidelines" },
      { step: "Layout", desc: "We create the brochure layout and design" },
      { step: "Review", desc: "Refine content placement and visuals" },
      { step: "Deliver", desc: "Print-ready PDF and source files delivered" },
    ],
    faqs: [
      { q: "What types of brochures do you design?", a: "We design bi-fold, tri-fold, gate-fold, and custom format brochures and leaflets." },
      { q: "Can you write the content for the brochure?", a: "Yes, we offer professional copywriting services to complement the design." },
      { q: "Do you handle printing?", a: "We deliver print-ready files and can recommend printing partners for competitive rates." },
    ],
  },
  {
    slug: "company-profile-design-sri-lanka",
    icon: Type,
    cardTitle: "Company profiles creation",
    cardDesc: "We will help you to create a professional company profiles to represent the face of your company",
    title: "Company Profile Design Sri Lanka",
    metaTitle: "Company Profile Design Sri Lanka | Professional Corporate Profiles",
    metaDescription: "Professional company profile design services in Sri Lanka. Create a polished corporate profile that represents your business. Up to 16 pages. Digital & print formats.",
    h1: "Company Profile Design Sri Lanka – Professional Corporate Profile Design",
    intro: [
      "A company profile is the face of your organization – it tells your story, showcases your capabilities, and builds trust with potential clients and partners. A professionally designed company profile can be a powerful business development tool.",
      "Buzz Connect creates polished, professionally designed company profiles that effectively communicate your brand value, services, team, and achievements.",
    ],
    benefits: [
      "Professional representation of your company",
      "Custom layouts up to 16+ pages",
      "Digital and print-ready formats",
      "Infographics and data visualization",
      "Content writing support available",
      "Consistent branding throughout",
    ],
    process: [
      { step: "Content", desc: "Gather company information, images, and milestones" },
      { step: "Design", desc: "Create a professional layout and visual structure" },
      { step: "Review", desc: "Iterate on content and design refinements" },
      { step: "Deliver", desc: "Final profile in PDF, PowerPoint, and print formats" },
    ],
    faqs: [
      { q: "How many pages can a company profile have?", a: "We design company profiles from 4 pages to 30+ pages depending on your requirements." },
      { q: "Can you write the company profile content?", a: "Yes, our team can help craft professional content based on your inputs and interviews." },
      { q: "What format is the profile delivered in?", a: "We deliver in PDF, editable PowerPoint, and print-ready formats." },
    ],
  },
  {
    slug: "presentation-design-sri-lanka",
    icon: Edit,
    cardTitle: "Creative power point presentation design",
    cardDesc: "We will create a polished and professional presentation for you",
    title: "Presentation Design Sri Lanka",
    metaTitle: "Presentation Design Sri Lanka | Professional PowerPoint Design",
    metaDescription: "Professional PowerPoint presentation design in Sri Lanka. Polished, creative slides for corporate meetings, pitches & conferences. Engaging visual storytelling.",
    h1: "Presentation Design Sri Lanka – Professional PowerPoint Design Services",
    intro: [
      "A well-designed presentation can make the difference between winning and losing a client pitch, impressing stakeholders, or engaging a conference audience. Generic templates won't cut it.",
      "Buzz Connect creates custom, visually stunning PowerPoint presentations that communicate your ideas clearly and leave a lasting impression on your audience.",
    ],
    benefits: [
      "Custom slide designs – no generic templates",
      "Data visualization and infographics",
      "Consistent brand theming throughout",
      "Animation and transition effects",
      "Editable templates for future use",
      "Corporate, pitch deck, and conference styles",
    ],
    process: [
      { step: "Brief", desc: "Share your content, data, and presentation goals" },
      { step: "Design", desc: "We create custom slides with professional layouts" },
      { step: "Review", desc: "Refine slides, animations, and flow" },
      { step: "Deliver", desc: "Editable PPTX and PDF versions delivered" },
    ],
    faqs: [
      { q: "How many slides can you design?", a: "We design presentations of any length, from 10-slide pitch decks to 50+ slide corporate presentations." },
      { q: "Can you add animations?", a: "Yes, we add professional animations and transitions to enhance your presentation flow." },
      { q: "Do you provide editable files?", a: "Yes, all presentations are delivered as editable PowerPoint (.pptx) files." },
    ],
  },
  {
    slug: "photo-editing-sri-lanka",
    icon: Image,
    cardTitle: "Photo Editing",
    cardDesc: "Professional photo editing services",
    title: "Photo Editing Sri Lanka",
    metaTitle: "Photo Editing Sri Lanka | Professional Image Editing Services",
    metaDescription: "Professional photo editing services in Sri Lanka. Retouching, background removal, color correction, product photography editing & more. Fast delivery, affordable rates.",
    h1: "Photo Editing Sri Lanka – Professional Image Editing Services",
    intro: [
      "High-quality images are essential for marketing, e-commerce, social media, and print materials. Professional photo editing can transform ordinary images into stunning visuals that capture attention and drive engagement.",
      "Buzz Connect offers comprehensive photo editing services including retouching, background removal, color correction, and product image enhancement for businesses in Sri Lanka.",
    ],
    benefits: [
      "Professional retouching and enhancement",
      "Background removal and replacement",
      "Color correction and grading",
      "Product photography editing",
      "Batch editing for large volumes",
      "Fast turnaround times",
    ],
    process: [
      { step: "Upload", desc: "Send us your images and editing requirements" },
      { step: "Edit", desc: "Our team applies professional edits" },
      { step: "Review", desc: "Review edited images and request adjustments" },
      { step: "Deliver", desc: "Final images delivered in your preferred format" },
    ],
    faqs: [
      { q: "What types of photo editing do you offer?", a: "We offer retouching, background removal, color correction, image compositing, and product photo enhancement." },
      { q: "Can you handle bulk photo editing?", a: "Yes, we handle batch editing for e-commerce catalogs and marketing campaigns at competitive rates." },
      { q: "What file formats do you accept?", a: "We work with JPG, PNG, RAW, TIFF, and PSD files." },
    ],
  },
  {
    slug: "social-media-post-design-sri-lanka",
    icon: Smartphone,
    cardTitle: "Social media post designing",
    cardDesc: "We will create advertising friendly beautiful social media post for your business",
    title: "Social Media Post Design Sri Lanka",
    metaTitle: "Social Media Post Design Sri Lanka | Facebook & Instagram Posts",
    metaDescription: "Professional social media post design in Sri Lanka for Facebook, Instagram & LinkedIn. Eye-catching, advertising-friendly designs that boost engagement and reach.",
    h1: "Social Media Post Design Sri Lanka – Professional Social Media Graphics",
    intro: [
      "Social media is where your customers spend their time. Eye-catching, professionally designed social media posts can significantly boost your engagement, reach, and brand awareness across platforms like Facebook, Instagram, and LinkedIn.",
      "Buzz Connect creates scroll-stopping social media designs that align with your brand identity and are optimized for each platform's best practices.",
    ],
    benefits: [
      "Platform-optimized designs (FB, IG, LinkedIn)",
      "Consistent brand identity across all posts",
      "Promotional, educational & engagement content",
      "Story and reel cover designs included",
      "Hashtag and caption suggestions",
      "Monthly content packages available",
    ],
    process: [
      { step: "Plan", desc: "Discuss your content calendar and themes" },
      { step: "Design", desc: "Create posts optimized for each platform" },
      { step: "Review", desc: "Approve designs with any adjustments" },
      { step: "Deliver", desc: "Ready-to-post files in correct dimensions" },
    ],
    faqs: [
      { q: "Which platforms do you design for?", a: "We design for Facebook, Instagram, LinkedIn, Twitter/X, TikTok, and YouTube." },
      { q: "Do you offer monthly design packages?", a: "Yes, we offer monthly social media design packages for consistent content posting." },
      { q: "Can you create video content for social media?", a: "Yes, we create short video posts and animations for social media platforms." },
    ],
  },
  {
    slug: "menu-card-design-sri-lanka",
    icon: Layout,
    cardTitle: "Menu Card Design",
    cardDesc: "We will create Attractive menu card for your business",
    title: "Menu Card Design Sri Lanka",
    metaTitle: "Menu Card Design Sri Lanka | Restaurant & Café Menu Design",
    metaDescription: "Professional menu card design services in Sri Lanka for restaurants, cafés & hotels. Attractive, well-organized menu designs that enhance dining experience. Get a quote.",
    h1: "Menu Card Design Sri Lanka – Professional Restaurant Menu Design",
    intro: [
      "Your menu is more than a list of dishes – it's a marketing tool that influences ordering decisions and reflects your restaurant's brand. A well-designed menu can increase average order value and enhance the dining experience.",
      "Buzz Connect creates attractive, well-organized menu card designs for restaurants, cafés, hotels, and food businesses across Sri Lanka.",
    ],
    benefits: [
      "Attractive layouts that drive higher orders",
      "Multiple format options (single page, bi-fold, tri-fold)",
      "Digital menu and QR code ready",
      "Food photography integration",
      "Print-ready and lamination-ready files",
      "Easy to update with seasonal changes",
    ],
    process: [
      { step: "Brief", desc: "Share your menu items, prices, and brand style" },
      { step: "Design", desc: "We create an attractive menu layout" },
      { step: "Review", desc: "Refine layout, fonts, and imagery" },
      { step: "Deliver", desc: "Print-ready and digital menu files delivered" },
    ],
    faqs: [
      { q: "Can you design digital menus with QR codes?", a: "Yes, we create digital menus that customers can access via QR code on their smartphones." },
      { q: "Do you include food photography?", a: "We can integrate your food photos or source stock imagery to complement the menu design." },
      { q: "Can I easily update the menu later?", a: "Yes, we provide editable templates so you can update prices and items as needed." },
    ],
  },
  {
    slug: "label-design-sri-lanka",
    icon: Tag,
    cardTitle: "Label Designing",
    cardDesc: "Professional product label designs for food, beverages, cosmetics, and retail products. Eye-catching labels that stand out on shelves and attract customers.",
    title: "Label Design Sri Lanka",
    metaTitle: "Label Design Sri Lanka | Product Label & Sticker Design",
    metaDescription: "Professional product label design services in Sri Lanka for food, beverages, cosmetics & retail. Eye-catching label designs that stand out on shelves. Get a quote.",
    h1: "Label Design Sri Lanka – Professional Product Labels That Drive Sales",
    intro: [
      "Looking for professional label design Sri Lanka services that make your products stand out on store shelves?",
      "At Buzz Connect, we design eye-catching, compliant product labels that communicate quality, attract buyers, and boost your brand presence in the Sri Lankan market.",
      "In today's competitive retail landscape, your label is often the deciding factor between a sale and a missed opportunity. Our designs combine visual appeal, regulatory compliance, and brand strategy to help your products win at the shelf.",
    ],
    benefits: [
      "Designs that stand out on retail shelves",
      "Food, beverage & cosmetic label expertise",
      "Regulatory compliance guidance",
      "Multiple shape and size options",
      "Print-ready with die-cut specifications",
      "Barcode and nutrition panel integration",
    ],
    process: [
      { step: "Discovery & Brief", desc: "Share product details, dimensions, and regulations" },
      { step: "Concept Development", desc: "We create label concepts with realistic mockups" },
      { step: "Design Refinement", desc: "Refine design, colors, and compliance details" },
      { step: "Production Delivery", desc: "Print-ready files with die-cut templates" },
    ],
    faqs: [
      { q: "What is label design and why is it important?", a: "Label design is the process of creating product labels that communicate brand identity, ingredients, and regulatory information. A great label attracts customers and builds trust." },
      { q: "Can you design labels that meet food regulations?", a: "Yes, we ensure labels include required nutritional information, ingredient lists, and regulatory markings as per Sri Lankan standards." },
      { q: "How much does label design cost in Sri Lanka?", a: "Costs vary based on complexity, label shape, and industry requirements. Contact us for a custom quotation." },
      { q: "Do you provide mockups?", a: "Yes, we provide realistic product mockups so you can visualize the label on your actual product before printing." },
      { q: "What label shapes can you design?", a: "We design rectangular, circular, oval, die-cut, and custom-shaped labels for any product type." },
    ],
    extraSections: [
      {
        title: "Why Product Label Design Matters in Sri Lanka",
        paragraphs: [
          "In retail environments like supermarkets, pharmacies, and specialty stores, your product label is the first thing customers see. It must communicate quality, build trust, and comply with local regulations — all in a single glance.",
          "Our label design Sri Lanka services are tailored to help local brands compete effectively against both domestic and international products on store shelves.",
        ],
      },
      {
        title: "Our Label Design Services in Sri Lanka",
        paragraphs: ["We provide comprehensive label design Sri Lanka solutions across multiple industries."],
        subsections: [
          { title: "Food & Beverage Label Design", bullets: ["Packaged food labels", "Bottled drinks and water", "Spices and condiments", "Bakery and confectionery"] },
          { title: "Cosmetic & Beauty Label Design", bullets: ["Skincare and haircare products", "Essential oils and serums", "Makeup and beauty products", "Luxury cosmetic branding"] },
          { title: "Pharmaceutical & Healthcare Labels", bullets: ["Medicine and supplement labels", "Ayurvedic product labels", "Health and wellness products", "Regulatory-compliant designs"] },
          { title: "Retail & Industrial Labels", bullets: ["Household cleaning products", "Chemical and industrial labels", "Private label brands", "Promotional stickers and decals"] },
        ],
      },
      {
        title: "Our Label Design Approach",
        paragraphs: ["Whether you're launching a new product or refreshing an existing one, we ensure every label is production-ready and market-competitive."],
        bullets: [
          "Realistic product mockups for visualization",
          "Custom die-cut and shape design",
          "Print-ready artwork with bleed and trim marks",
          "Material and finishing recommendations",
          "Barcode, QR code, and regulatory panel placement",
        ],
      },
      {
        title: "Why Choose Buzz Connect for Label Design in Sri Lanka",
        paragraphs: ["We specialize in labels that sell — not just look good."],
        bullets: [
          "Industry-specific design expertise",
          "Understanding of Sri Lankan retail and regulatory landscape",
          "Creative, modern, and shelf-ready concepts",
          "Fast turnaround with responsive communication",
          "Affordable solutions for startups and established brands",
        ],
      },
    ],
    locations: ["Colombo", "Negombo", "Kandy", "Galle", "Kurunegala", "Island-wide"],
  },
  {
    slug: "package-design-sri-lanka",
    icon: Box,
    cardTitle: "Package Designing",
    cardDesc: "Custom product packaging designs that protect your product and promote your brand. Creative packaging solutions for all industries.",
    title: "Package Design Sri Lanka",
    metaTitle: "Package Design Sri Lanka | Custom Product Packaging Design",
    metaDescription: "Professional product packaging design in Sri Lanka. Creative, custom packaging solutions for food, cosmetics, retail & more. Stand out on shelves. Get a quote today.",
    h1: "Package Design Sri Lanka – Custom Product Packaging That Drives Sales",
    intro: [
      "Looking for professional package design Sri Lanka services that help your product stand out on shelves and online?",
      "At Buzz Connect, we create strategic, high-impact packaging designs that not only look attractive but also influence customer buying decisions.",
      "In today's competitive Sri Lankan market, packaging is more than protection — it is your silent salesperson. Our designs combine branding, structure, and consumer psychology to help your products gain attention and increase sales.",
    ],
    benefits: [
      "Capture attention within seconds",
      "Build brand trust and recognition",
      "Communicate product value clearly",
      "Increase perceived quality",
      "Improve conversion and sales",
      "Eco-friendly packaging design options",
    ],
    process: [
      { step: "Discovery & Brief", desc: "We understand your product, target audience, and brand identity" },
      { step: "Concept Development", desc: "We create multiple design concepts and 3D mockups" },
      { step: "Design Refinement", desc: "We refine based on feedback and technical requirements" },
      { step: "Production Delivery", desc: "We deliver print-ready files with die-lines and specifications" },
    ],
    faqs: [
      { q: "What is package design and why is it important?", a: "Package design is the process of creating the exterior of a product, including structure, graphics, and branding. It plays a key role in attracting customers and increasing sales." },
      { q: "How much does package design cost in Sri Lanka?", a: "Costs vary depending on complexity, size, and requirements. Contact us for a custom quotation." },
      { q: "Do you provide 3D mockups?", a: "Yes, we provide realistic 3D mockups so you can visualize your packaging before production." },
      { q: "Can you design eco-friendly packaging?", a: "Yes, we offer sustainable and eco-friendly packaging design solutions." },
      { q: "Do you create packaging for new brands?", a: "Yes, we help startups and new product launches with complete packaging design solutions." },
    ],
    extraSections: [
      {
        title: "Why Packaging Design Matters in Sri Lanka",
        paragraphs: [
          "In retail environments like supermarkets, pharmacies, and online marketplaces, your packaging plays a critical role in customer decisions.",
          "A professionally designed package can capture attention within seconds, build brand trust and recognition, communicate product value clearly, increase perceived quality, and improve conversion and sales.",
          "Our package design Sri Lanka services are tailored to help local brands compete with both local and international products.",
        ],
      },
      {
        title: "Our Package Design Services in Sri Lanka",
        paragraphs: ["We provide complete package design Sri Lanka solutions for different industries."],
        subsections: [
          { title: "Food Packaging Design Sri Lanka", bullets: ["Snacks and dry foods", "Beverages and bottled products", "Bakery and takeaway packaging", "Frozen and processed food"] },
          { title: "Cosmetic Packaging Design Sri Lanka", bullets: ["Skincare products", "Haircare products", "Makeup and beauty items", "Luxury cosmetic packaging"] },
          { title: "Retail & FMCG Packaging Design", bullets: ["Household products", "Consumer electronics packaging", "Retail box packaging", "Private label brands"] },
          { title: "Label Design Sri Lanka", bullets: ["Bottles", "Jars", "Boxes", "Flexible packaging"] },
        ],
      },
      {
        title: "Our Packaging Design Approach",
        paragraphs: [
          "Even if you are launching a new product, we help you visualize your packaging before production.",
        ],
        bullets: [
          "3D mockups for realistic previews",
          "Custom die-line and structure design",
          "Print-ready artwork",
          "Material and finishing guidance",
        ],
      },
      {
        title: "Why Choose Buzz Connect for Package Design in Sri Lanka",
        paragraphs: ["Unlike basic designers, we focus on packaging that sells."],
        bullets: [
          "Strategy-driven design approach",
          "Understanding of Sri Lankan retail market",
          "Creative and modern concepts",
          "Fast turnaround and communication",
          "Custom solutions for each brand",
        ],
      },
    ],
    locations: ["Colombo", "Negombo", "Kandy", "Galle", "Kurunegala", "Island-wide"],
  },
];
