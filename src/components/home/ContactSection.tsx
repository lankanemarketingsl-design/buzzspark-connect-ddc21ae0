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
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <section id="contactus" className="py-14 sm:py-20 gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/25 mb-4">
            <Rocket className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-bold text-accent uppercase tracking-wider">Get Started</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
            Start Your Marketing Campaign Today
          </h2>
          <p className="text-primary-foreground/55 max-w-xl mx-auto text-sm">
            Reach thousands of customers across Sri Lanka. Contact us today and launch your campaign instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl font-bold mb-4">Want to get more information?</h3>
            <p className="text-primary-foreground/55 mb-3 leading-relaxed text-sm">
              Need to increase your online revenue? That's our bread and butter! Or maybe you want to ensure your brand is getting maximum visibility online — we can help there too!
            </p>
            <p className="text-primary-foreground/55 mb-6 leading-relaxed text-sm">
              Complete this short form and our consultants will reach out shortly.
            </p>

            <div className="space-y-3">
              {[
                { icon: Mail, text: "infobuzzconnect@gmail.com", href: "mailto:infobuzzconnect@gmail.com" },
                { icon: Phone, text: "+94 77 143 7707", href: "tel:+94771437707" },
                { icon: Phone, text: "+94 77 197 6351", href: "tel:+94771976351" },
                { icon: Phone, text: "+94 11 287 7662 (Land)", href: "tel:+94112877662" },
                { icon: MapPin, text: "Colombo, Sri Lanka", href: undefined },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/15 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-primary-foreground/75 hover:text-accent transition-colors font-medium text-sm">{item.text}</a>
                  ) : (
                    <span className="text-primary-foreground/75 font-medium text-sm">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/8 backdrop-blur-md rounded-xl p-5 sm:p-7 border border-primary-foreground/8 shadow-xl"
          >
            <h3 className="font-heading text-lg font-bold mb-5">Request more information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <Input placeholder="Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-primary-foreground/8 border-primary-foreground/12 text-primary-foreground placeholder:text-primary-foreground/35 rounded-lg h-11 text-sm focus:border-accent/40" maxLength={100} />
              <Input placeholder="Email *" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-primary-foreground/8 border-primary-foreground/12 text-primary-foreground placeholder:text-primary-foreground/35 rounded-lg h-11 text-sm focus:border-accent/40" maxLength={255} />
              <Input placeholder="Phone *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-primary-foreground/8 border-primary-foreground/12 text-primary-foreground placeholder:text-primary-foreground/35 rounded-lg h-11 text-sm focus:border-accent/40" maxLength={20} />
              <Input placeholder="Company Name *" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="bg-primary-foreground/8 border-primary-foreground/12 text-primary-foreground placeholder:text-primary-foreground/35 rounded-lg h-11 text-sm focus:border-accent/40" maxLength={100} />
            </div>
            <Textarea placeholder="Describe your requirement here *" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="bg-primary-foreground/8 border-primary-foreground/12 text-primary-foreground placeholder:text-primary-foreground/35 mb-4 min-h-[100px] rounded-lg text-sm focus:border-accent/40" maxLength={1000} />
            <Button variant="hero" size="lg" type="submit" className="w-full h-11 text-sm shadow-md shadow-accent/20">
              Send Message <Send className="ml-2 w-4 h-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
