import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <section id="contactus" className="py-20 gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Contact Us</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2 mb-5">
              Want to Get More Information?
            </h2>
            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              Need to increase your online revenue? Want maximum brand visibility? Our team takes a data-driven, ROI-focused approach to growing your business.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "info@buzzconnect.lk" },
                { icon: Phone, text: "+94 11 234 5678" },
                { icon: MapPin, text: "Colombo, Sri Lanka" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-primary-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10"
          >
            <h3 className="font-heading text-xl font-semibold mb-6">Request More Information</h3>
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
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                maxLength={20}
              />
              <Input
                placeholder="Company Name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                maxLength={100}
              />
            </div>
            <Textarea
              placeholder="Describe your requirement *"
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
