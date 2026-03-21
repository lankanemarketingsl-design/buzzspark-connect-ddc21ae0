import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Send, Mail, Phone, MapPin, Clock, MessageSquare,
  Facebook, Instagram, Linkedin, ArrowRight
} from "lucide-react";
import { toast } from "sonner";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import LogoCarousel from "@/components/home/LogoCarousel";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.company.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }
    const text = `Hi Buzz Connect, I'd like more information.%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0APhone: ${encodeURIComponent(form.phone)}%0ACompany: ${encodeURIComponent(form.company)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/94771437707?text=${text}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const contactDetails = [
    { icon: Mail, label: "Email Us", text: "infobuzzconnect@gmail.com", href: "mailto:infobuzzconnect@gmail.com" },
    { icon: Phone, label: "Call Us", text: "+94 77 143 7707", href: "tel:+94771437707" },
    { icon: Phone, label: "Alternative", text: "+94 77 197 6351", href: "tel:+94771976351" },
    { icon: MapPin, label: "Location", text: "Colombo, Sri Lanka", href: undefined },
    { icon: Clock, label: "Business Hours", text: "Mon – Fri: 9:00 AM – 6:00 PM", href: undefined },
  ];

  return (
    <div className="pt-14 sm:pt-16">
      <SEOHead
        title="Contact Us | Buzz Connect Sri Lanka – Get in Touch"
        description="Contact Buzz Connect for email marketing, SMS marketing, WhatsApp marketing & digital advertising in Sri Lanka. Call +94 77 143 7707 or message us on WhatsApp."
        canonical="/contact-us"
        keywords="contact buzz connect, digital marketing sri lanka contact, email marketing company sri lanka, buzz connect phone number, buzz connect colombo"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "/contact-us" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Buzz Connect",
          description: "Get in touch with Buzz Connect for digital marketing services in Sri Lanka.",
          url: "https://buzzconnect.lk/contact-us",
        }]}
      />

      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/15 text-accent border border-accent/30 mb-4">
              Contact Us
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Get in Touch with Buzz Connect
            </h1>
            <p className="text-primary-foreground/70 text-sm sm:text-lg leading-relaxed">
              Have a question or ready to start your next marketing campaign? We'd love to hear from you. Reach out via phone, email, or WhatsApp — our team responds fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards + Form */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need email marketing, SMS campaigns, WhatsApp marketing, or web banner advertising — we're here to help you grow.
              </p>

              <div className="space-y-4">
                {contactDetails.map((item) => (
                  <div key={item.text} className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-card border border-border">
                    <div className="w-11 h-11 rounded-xl gradient-accent flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="block text-foreground font-medium hover:text-accent transition-colors">{item.text}</a>
                      ) : (
                        <p className="text-foreground font-medium">{item.text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-colors"
              >
                <MessageSquare className="w-6 h-6 text-green-600" />
                <div>
                  <span className="text-foreground font-semibold block">Chat on WhatsApp</span>
                  <span className="text-sm text-muted-foreground">Get an instant response</span>
                </div>
                <ArrowRight className="w-4 h-4 text-green-600 ml-auto" />
              </a>

              {/* Social */}
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Follow Us</h3>
                <div className="flex items-center gap-3">
                  <a href="https://www.facebook.com/buzzconnect/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/buzzconnect/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/buzz-connect-93330ba1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 p-6 sm:p-10 rounded-2xl bg-card shadow-card border border-border"
            >
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">Fill in the form below and we'll get back to you via WhatsApp.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                  <Input
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                  <Input
                    placeholder="you@example.com"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
                  <Input
                    placeholder="+94 7X XXX XXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    maxLength={20}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Company *</label>
                  <Input
                    placeholder="Your company name"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    maxLength={100}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="min-h-[120px]"
                  maxLength={1000}
                />
              </div>
              <Button variant="default" size="lg" type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                Send via WhatsApp <Send className="ml-2 w-4 h-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Your message will be sent directly to our WhatsApp for a quick response.
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Map / CTA Strip */}
      <section className="py-12 sm:py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Ready to Grow Your Business?</h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-6">
              Join 500+ businesses across Sri Lanka who trust Buzz Connect for their digital marketing success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+94771437707">
                <Button variant="hero" size="lg" className="text-base">
                  <Phone className="mr-2 w-4 h-4" /> Call Now
                </Button>
              </a>
              <a href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20marketing%20services." target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="lg" className="text-base">
                  <MessageSquare className="mr-2 w-4 h-4" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <LogoCarousel />
    </div>
  );
};

export default ContactUs;
