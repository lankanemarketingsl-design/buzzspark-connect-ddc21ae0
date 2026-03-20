import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <AboutSection />
      <WhyUsSection />
      <ContactSection />
    </div>
  );
};

export default Index;