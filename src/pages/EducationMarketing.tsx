import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, GraduationCap, BookOpen, School, Users, TrendingUp,
  ArrowRight, Send, Eye, Award, Clock, Briefcase, Rocket, Crown, RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import IndustryStatsBanner from "@/components/IndustryStatsBanner";
import FinditlkAdvantage from "@/components/FinditlkAdvantage";
import IndustryLogoCarousel from "@/components/IndustryLogoCarousel";

import uniColomboLogo from "@/assets/clients/uni-colombo.png";
import caLogo from "@/assets/clients/ca-sri-lanka.jpg";
import bmsLogo from "@/assets/clients/bms.jpg";
import icbtLogo from "@/assets/clients/icbt.jpg";
import horizonLogo from "@/assets/clients/horizon.png";
import ancLogo from "@/assets/clients/anc.jpg";
import oxfordLogo from "@/assets/clients/oxford.jpg";
import slimLogo from "@/assets/clients/slim.jpg";
import cipmLogo from "@/assets/clients/cipm.jpg";

const educationClients = [
  { name: "University of Colombo", logo: uniColomboLogo },
  { name: "CA Sri Lanka", logo: caLogo },
  { name: "BMS Campus", logo: bmsLogo },
  { name: "ICBT Campus", logo: icbtLogo },
  { name: "Horizon Campus", logo: horizonLogo },
  { name: "ANC Education", logo: ancLogo },
  { name: "Oxford College of Business", logo: oxfordLogo },
  { name: "SLIM", logo: slimLogo },
  { name: "CIPM Sri Lanka", logo: cipmLogo },
];

const services = [
  { icon: Mail, title: "Email Course Promotions", desc: "Promote courses, intakes & programs to 350,000+ targeted student & parent contacts." },
  { icon: Smartphone, title: "SMS Deadline Reminders", desc: "Send enrollment deadline alerts and intake reminders to 600,000+ mobile users." },
  { icon: MessageSquare, title: "WhatsApp Student Engagement", desc: "Enable direct student inquiries, course information sharing, and enrollment support." },
  { icon: Globe, title: "Findit.lk Education Visibility", desc: "Get listed in Education categories on Findit.lk for continuous visibility to students." },
  { icon: Eye, title: "Banner Advertising", desc: "Showcase your courses and programs with visually engaging banner campaigns." },
  { icon: Target, title: "Student Database Targeting", desc: "Reach students, parents & professionals with precision demographic targeting." },
];

const channels = [
  { icon: Mail, channel: "Email", action: "Course promotions & details", color: "bg-blue-500/10 text-blue-600" },
  { icon: Smartphone, channel: "SMS", action: "Deadline reminders & alerts", color: "bg-green-500/10 text-green-600" },
  { icon: MessageSquare, channel: "WhatsApp", action: "Student engagement & inquiries", color: "bg-emerald-500/10 text-emerald-600" },
  { icon: Globe, channel: "Findit.lk", action: "Education category visibility", color: "bg-purple-500/10 text-purple-600" },
];

const benefits = [
  "Massive student reach",
  "Fast inquiry generation",
  "High conversion for intakes",
  "Cost-effective promotions",
  "Build student pipeline",
  "Year-round enrollment support",
];

const useCases = [
  { icon: GraduationCap, label: "Universities & Colleges" },
  { icon: School, label: "International Schools" },
  { icon: BookOpen, label: "Training Institutes" },
  { icon: Briefcase, label: "Professional Courses" },
  { icon: Clock, label: "Online Learning Platforms" },
  { icon: Award, label: "Vocational Training Centers" },
];

const processSteps = [
  { icon: Target, title: "Define Student Profiles", desc: "Identify target students by age, location, and interests" },
  { icon: Mail, title: "Launch Intake Campaigns", desc: "Coordinate email, SMS & WhatsApp for maximum enrollment" },
  { icon: Globe, title: "Activate Findit.lk Listing", desc: "Get visible in Education categories" },
  { icon: Send, title: "Capture Student Inquiries", desc: "Convert interest into enrollment applications" },
  { icon: BarChart3, title: "Optimize Results", desc: "Track and improve campaign performance" },
];

const whyChoose = [
  "Proven education marketing strategies",
  "Access to student & parent databases",
  "Integration with Findit.lk Education category",
  "Fast campaign execution for intake deadlines",
  "Cost-effective student acquisition",
  "Dedicated education campaign team",
];

const faqs = [
  { q: "What is education marketing in Sri Lanka?", a: "Education marketing involves promoting courses, programs, and educational institutions to potential students through targeted digital marketing channels like email, SMS, WhatsApp, and directory listings." },
  { q: "How can Buzz Connect help my institution get more students?", a: "We use a multi-channel approach combining email campaigns, SMS reminders, WhatsApp engagement, and Findit.lk Education category visibility to reach thousands of students and drive enrollment." },
  { q: "Can you target specific student demographics?", a: "Yes, our database allows targeting by age group, location, education level, and interests — ensuring your campaigns reach the most relevant prospective students." },
  { q: "How much does education marketing cost in Sri Lanka?", a: "Buzz Connect offers education marketing packages starting from LKR 6,000. Contact us for a customized quote based on your institution and target audience." },
  { q: "How quickly can I see results?", a: "Most education campaigns start generating inquiries within 24-48 hours of launch, with peak results during intake seasons." },
];

const EducationMarketing = () => {
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
      name: "Education Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Multi-channel education marketing services in Sri Lanka combining email, SMS, WhatsApp, and Findit.lk visibility to drive student enrollment.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Education Marketing"
      title="Education Marketing Sri Lanka – Drive Student Enrollment with Multi-Channel Campaigns"
      subtitle="Reach students, parents, and professionals through targeted email, SMS, WhatsApp campaigns and Findit.lk Education category visibility."
    >
      <SEOHead
        title="Education Marketing Sri Lanka | Student Intake Lead Generation"
        description="No.1 education marketing company in Sri Lanka. Drive student enrollment via email, SMS, WhatsApp & Findit.lk. Reach students & parents. Multi-channel campaigns for intakes."
        canonical="/education-marketing-sri-lanka"
        keywords="education marketing sri lanka, student enrollment campaigns, university marketing colombo, school marketing sri lanka, course promotion sri lanka, student lead generation, education advertising sri lanka, intake marketing"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Education Marketing", url: "/education-marketing-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <IndustryStatsBanner
        icon={GraduationCap}
        gradient="gradient-education"
        tagline="Student Intake Lead Generation Campaigns"
        stats={[
          { value: "500+", label: "Education Institutes" },
          { value: "200K+", label: "Student Contacts" },
          { value: "98%", label: "SMS Open Rate" },
          { value: "48hrs", label: "First Inquiries" },
        ]}
      />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Buzz Connect delivers <strong>high-impact education marketing campaigns in Sri Lanka</strong>, helping universities, schools, and training institutes fill their intakes through targeted multi-channel promotions.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Our student intake lead generation strategy combines <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing</Link>, <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp marketing</Link>, and <strong>Findit.lk Education category visibility</strong> to drive enrollment fast.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Whether you run a university, international school, or professional training center, our campaigns are designed to generate student inquiries and maximize enrollments.
        </p>
      </motion.div>

      <IndustryLogoCarousel
        title="Trusted by Leading Education Institutions"
        subtitle="We're proud to work with some of Sri Lanka's most prestigious universities, campuses & professional bodies."
        clients={educationClients}
      />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Challenges in Education Marketing in Sri Lanka</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Sri Lanka's education sector is highly competitive with hundreds of institutions competing for students during each intake. Rising advertising costs, fragmented student attention, and short enrollment windows make traditional marketing ineffective.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Buzz Connect's multi-channel approach</strong> solves this by reaching students across multiple touchpoints simultaneously — ensuring maximum visibility during critical intake periods.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Solutions</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Education Marketing Solutions in Sri Lanka</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-xl bg-card shadow-card border border-border hover:border-accent/40 transition-all">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4"><s.icon className="w-6 h-6 text-primary" /></div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Campaign Strategy</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Multi-Channel Education Marketing Strategy</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {channels.map((ch, i) => (
            <motion.div key={ch.channel} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card shadow-card border border-border text-center">
              <div className={`w-14 h-14 rounded-full ${ch.color} flex items-center justify-center mx-auto mb-4`}><ch.icon className="w-7 h-7" /></div>
              <h3 className="font-heading font-bold text-foreground mb-1">{ch.channel}</h3>
              <p className="text-sm text-muted-foreground">{ch.action}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <FinditlkAdvantage
        title="Findit.lk Education Category Advantage"
        description="Get your institution promoted in Findit.lk's Education category for continuous visibility to students actively searching for courses and programs in Sri Lanka."
        gradient="gradient-education"
        links={[
          { label: "Education", url: "https://www.findit.lk/promotions/education" },
        ]}
        benefits={["Access to active student seekers", "High visibility in Education category", "Continuous promotion during intakes", "Better conversion than social ads"]}
      />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Benefits of Education Marketing with Buzz Connect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-foreground font-medium">{b}</span></div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Who Needs Education Marketing?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {useCases.map((uc) => (
            <div key={uc.label} className="flex flex-col items-center gap-2 p-5 rounded-xl bg-card shadow-card border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"><uc.icon className="w-6 h-6 text-secondary-foreground" /></div>
              <span className="text-sm font-medium text-foreground">{uc.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">How Our Education Marketing Process Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {processSteps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center p-5 rounded-xl bg-card shadow-card border border-border relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full gradient-accent flex items-center justify-center text-xs font-bold text-primary">{i + 1}</div>
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mt-3 mb-3"><step.icon className="w-6 h-6 text-secondary-foreground" /></div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">Why Choose Buzz Connect for Education Marketing?</h2>
          <ul className="space-y-3">{whyChoose.map((item) => (<li key={item} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-accent shrink-0" /><span className="text-muted-foreground">{item}</span></li>))}</ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">Campaign Examples</h2>
          <ul className="space-y-3">
            {["New intake email blast to 200K+ student contacts", "Enrollment deadline SMS reminders", "WhatsApp-based course inquiry campaigns", "Findit.lk Education category promotions", "Professional certification awareness campaigns"].map((item) => (
              <li key={item} className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-accent shrink-0" /><span className="text-muted-foreground">{item}</span></li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Education Advertising Packages */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing Packages</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Education Marketing Packages with Remarketing</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Students don't enroll instantly — they compare courses before making a decision.</p>
          <p className="text-accent font-semibold mt-3 max-w-2xl mx-auto">1 student = LKR 50,000–500,000+ lifetime value. A few enrollments = full campaign ROI.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Student Leads Starter */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Student Leads Starter</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 14,900</p>
            <p className="text-xs text-muted-foreground mb-4">Best for small institutes / short courses</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />1 Targeted Email Campaign (students / parents)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Featured listing in Findit 'Education'</li>
              <li className="flex items-start gap-2 text-sm"><Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href="https://www.findit.lk/promotions/education" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk <ArrowRight className="w-3 h-3" /></a></li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />7-day visibility boost</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />🔁 Basic Remarketing (repeat exposure)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Course ad creative (intake-focused)</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Generate initial student inquiries"</p>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Education%20Student%20Leads%20Starter%20Package%20(LKR%2014%2C900).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* Enrollment Boost - Most Popular */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border-2 border-accent flex flex-col ring-2 ring-accent/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-xs font-bold">MOST POPULAR</div>
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Crown className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Enrollment Boost</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 39,900</p>
            <p className="text-xs text-muted-foreground mb-4">Increase student enrollments consistently</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />2–3 Targeted Email Campaigns (segmented)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Premium Findit education placement</li>
              <li className="flex items-start gap-2 text-sm"><Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href="https://www.findit.lk/promotions/education" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk <ArrowRight className="w-3 h-3" /></a></li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Campaigns for upcoming intakes</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />🔁 Advanced Remarketing (multi-touch)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Performance report</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Increase student enrollments consistently"</p>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Education%20Enrollment%20Boost%20Package%20(LKR%2039%2C900).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* Full Intake Domination */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Full Intake Domination</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 89,900</p>
            <p className="text-xs text-muted-foreground mb-4">Fill entire course intakes faster</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />4–6 Email Campaigns (full funnel strategy)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Top ranking in Findit category</li>
              <li className="flex items-start gap-2 text-sm"><Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href="https://www.findit.lk/promotions/education" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk <ArrowRight className="w-3 h-3" /></a></li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />🔁 Full Funnel Remarketing</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Custom course landing page</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Priority promotion before intake deadlines</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Fill entire course intakes faster"</p>
            <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Education%20Full%20Intake%20Domination%20Package%20(LKR%2089%2C900).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Frequently Asked Questions – Education Marketing Sri Lanka</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <h3 className="flex items-start gap-2 font-heading font-semibold text-foreground mb-2"><HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />{faq.q}</h3>
              <p className="text-muted-foreground text-sm pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-education text-white relative overflow-hidden">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Start Your Education Marketing Campaign Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">Fill your next intake faster with <strong>multi-channel education marketing in Sri Lanka</strong>. Contact Buzz Connect today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact-us"><button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">Get a Free Quote <ArrowRight className="inline w-4 h-4 ml-1" /></button></Link>
          <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20education%20marketing%20services." target="_blank" rel="noopener noreferrer"><button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">Chat on WhatsApp</button></a>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/education-marketing-sri-lanka" />
    </ServicePageLayout>
  );
};

export default EducationMarketing;
