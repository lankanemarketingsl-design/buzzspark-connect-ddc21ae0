import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyUsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
