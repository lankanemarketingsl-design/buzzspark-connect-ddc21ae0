import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const DigitalMarketingBrandAwareness = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="How Digital Marketing Drives Instant Brand Awareness & More Customer Calls"
      subtitle=""
    >
      <SEOHead
        title="How Digital Marketing Drives Brand Awareness & Customer Calls | Sri Lanka 2026 | Buzz Connect"
        description="Learn how digital marketing drives instant brand awareness, top-of-mind recall, and more customer calls & inquiries for businesses in Sri Lanka."
        canonical="/digital-marketing-brand-awareness-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Digital Marketing Brand Awareness", url: "/digital-marketing-brand-awareness-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How Digital Marketing Drives Instant Brand Awareness & More Customer Calls",
          datePublished: "2026-04-12",
          author: { "@type": "Organization", name: "Buzz Connect" },
          publisher: { "@type": "Organization", name: "Buzz Connect", logo: { "@type": "ImageObject", url: "https://buzzconnect.lk/og-image.png" } },
        }]}
      />
      <div className="max-w-3xl mx-auto">
        <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Resources
        </Link>

        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          {/* Intro */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">📌 Instant Brand Awareness Boost</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When businesses use channels like <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email</Link>, <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link>, and <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp</Link> together, they can achieve immediate visibility among their target audience.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">Instead of waiting months, campaigns can:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Reach thousands of potential customers instantly</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Put your brand in front of the right audience</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Create immediate attention for offers and services</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This is especially powerful for promotions, seasonal campaigns, and urgent announcements.
            </p>
          </div>

          {/* Top-of-Mind Recall */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">🧠 Top-of-Mind Recall (Stay in Customer Memory)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Consistent messaging across multiple channels helps your brand stay in customers' minds. When customers repeatedly see your brand through:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email campaigns</Link></li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS alerts</Link></li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp messages</Link></li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Your business becomes the <span className="font-semibold text-foreground">first choice</span> when they are ready to buy. This is called <span className="font-semibold text-foreground">top-of-mind recall</span> — and it directly impacts sales.
            </p>
          </div>

          {/* More Calls & Inquiries */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">📞 Increase in Customer Calls & Inquiries</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One of the biggest advantages of <Link to="/multi-channel-marketing-in-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing</Link> is the direct response it generates.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">Businesses often see:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">📈</span> More phone calls</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">📩</span> More WhatsApp inquiries</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">🧾</span> More form submissions</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Because customers receive messages instantly, clear call-to-actions drive action, and communication feels personal and direct.
            </p>
          </div>

          {/* Real Impact */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">⚡ Real Impact on Business Growth</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">With the right strategy, businesses can achieve:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Faster customer engagement</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Higher response rates</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Increased lead generation</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Better conversion rates</li>
            </ul>
          </div>

          {/* Multi-Channel Strategy */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">🔗 Powered by Multi-Channel Strategy</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">These results are achieved by combining:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email marketing</Link> → awareness & nurturing</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing</Link> → instant reach</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">•</span> <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp marketing</Link> → direct engagement</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              👉 Learn more about combining channels with our <Link to="/multi-channel-marketing-in-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing services</Link>.
            </p>
          </div>

          {/* Why This Matters */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">🎯 Why This Matters</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">In today's competitive market in Sri Lanka:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">👉</span> Businesses that stay visible win</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">👉</span> Businesses that stay memorable grow faster</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">🏆 Get the Same Results for Your Business</h3>
            <p className="text-primary-foreground/80 mb-2">Boost brand awareness instantly • Stay top-of-mind • Increase calls & inquiries</p>
            <p className="text-primary-foreground/80 mb-4">Generate consistent leads with proven multi-channel strategies.</p>
            <Link to="/contact-us" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              Start Today — Contact Us
            </Link>
          </div>
        </motion.article>
        <RelatedArticles currentPath="/digital-marketing-brand-awareness-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default DigitalMarketingBrandAwareness;
