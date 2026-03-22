import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin, Rocket } from "lucide-react";
import { toast } from "sonner";

const INDUSTRY_ROUTES = [
  "/hotel-marketing-sri-lanka",
  "/education-marketing-sri-lanka",
  "/restaurant-marketing-sri-lanka",
  "/fashion-marketing-sri-lanka",
];

const ContactSection = () => {
  const { pathname } = useLocation();
  const waNumber = INDUSTRY_ROUTES.includes(pathname) ? "94771976351" : "94771437707";
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

  return (
    <section id="contactus" className="py-12 sm:py-20 gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Final CTA */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Rocket className="w-6 h-6 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Get Started</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4">
            Start Your Email, SMS &amp; WhatsApp Marketing Campaign Today
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Reach thousands of customers across Sri Lanka with one powerful platform. Contact Buzz Connect today and launch your campaign instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl font-bold mb-5">
              Want to get more information?
            </h3>
            <p className="text-primary-foreground/70 mb-4 leading-relaxed">
              Great, we've got you covered! Need to increase your online revenue? That's our bread and butter! Or maybe you simply want to ensure your brand is getting the most visibility as possible online. You guessed it… we can help out there too!
            </p>
            <p className="text-primary-foreground/70 mb-4 leading-relaxed">
              No matter the campaign, our team takes a data-driven and ROI-focused approach to helping you grow your business.
            </p>
            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              Complete this short form to request your complimentary analysis, and our consultants will reach out to you shortly.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "infobuzzconnect@gmail.com", href: "mailto:infobuzzconnect@gmail.com" },
                { icon: Phone, text: "+94 77 143 7707", href: "tel:+94771437707" },
                { icon: Phone, text: "+94 77 197 6351", href: "tel:+94771976351" },
                { icon: Phone, text: "+94 11 287 7662 (Land)", href: "tel:+94112877662" },
                { icon: MapPin, text: "Colombo, Sri Lanka", href: undefined },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-primary-foreground/80 hover:text-accent transition-colors">{item.text}</a>
                  ) : (
                    <span className="text-primary-foreground/80">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/10 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-primary-foreground/10"
          >
            <h3 className="font-heading text-xl font-semibold mb-6">Request more information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <Input
                placeholder="Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                maxLength={100}
              />
              <Input
                placeholder="Email *"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                maxLength={255}
              />
              <Input
                placeholder="Phone *"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                maxLength={20}
              />
              <Input
                placeholder="Company Name *"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                maxLength={100}
              />
            </div>
            <Textarea
              placeholder="Describe your requirement here *"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 mb-4 min-h-[100px]"
              maxLength={1000}
            />
            <Button variant="hero" size="lg" type="submit" className="w-full">
              Send Message <Send className="ml-2 w-4 h-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;