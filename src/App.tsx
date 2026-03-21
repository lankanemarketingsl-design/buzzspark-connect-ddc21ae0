import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import EmailMarketing from "./pages/EmailMarketing.tsx";
import SmsMarketing from "./pages/SmsMarketing.tsx";
import WhatsAppMarketing from "./pages/WhatsAppMarketing.tsx";
import SpecialPackages from "./pages/SpecialPackages.tsx";
import OnlineAdvertising from "./pages/OnlineAdvertising.tsx";
import GraphicDesign from "./pages/GraphicDesign.tsx";
import SeoServices from "./pages/SeoServices.tsx";
import WebsiteDesign from "./pages/WebsiteDesign.tsx";
import LeadGeneration from "./pages/LeadGeneration.tsx";
import SocialMediaMarketing from "./pages/SocialMediaMarketing.tsx";
import WebBannerAdvertising from "./pages/WebBannerAdvertising.tsx";
import Resources from "./pages/Resources.tsx";
import WhyEmailMarketingIsImportant from "./pages/articles/WhyEmailMarketingIsImportant.tsx";
import WhyYouNeedEmailMarketing from "./pages/articles/WhyYouNeedEmailMarketing.tsx";
import BestSeoServicesSriLanka from "./pages/articles/BestSeoServicesSriLanka.tsx";
import SmsMarketingInSriLanka from "./pages/articles/SmsMarketingInSriLanka.tsx";
import EnableMissingImages from "./pages/articles/EnableMissingImages.tsx";
import MultiChannelMarketingSriLanka from "./pages/articles/MultiChannelMarketingSriLanka.tsx";
import FutureEmailMarketingSriLanka from "./pages/articles/FutureEmailMarketingSriLanka.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import WhyChooseUs from "./pages/WhyChooseUs.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
          <Route path="/sms-marketing" element={<SmsMarketing />} />
          <Route path="/whatsapp-marketing" element={<WhatsAppMarketing />} />
          <Route path="/multi-channel-marketing-sri-lanka" element={<SpecialPackages />} />
          <Route path="/special-advertising-packages" element={<SpecialPackages />} />
          <Route path="/online-advertising-sri-lanka" element={<OnlineAdvertising />} />
          <Route path="/graphic-designing-in-sri-lanka" element={<GraphicDesign />} />
          <Route path="/seo-sri-lanka" element={<SeoServices />} />
          <Route path="/website-design-sri-lanka" element={<WebsiteDesign />} />
          <Route path="/lead-generation-sri-lanka" element={<LeadGeneration />} />
          <Route path="/social-media-marketing-sri-lanka" element={<SocialMediaMarketing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          {/* Resource article pages */}
          <Route path="/why-email-marketing-is-important" element={<WhyEmailMarketingIsImportant />} />
          <Route path="/why-you-need-email-marketing" element={<WhyYouNeedEmailMarketing />} />
          <Route path="/best-seo-services-sri-lanka" element={<BestSeoServicesSriLanka />} />
          <Route path="/sms-marketing-in-sri-lanka" element={<SmsMarketingInSriLanka />} />
          <Route path="/classified-advertising-in-sri-lanka" element={<Resources />} />
          <Route path="/enable-missing-images-to-display" element={<EnableMissingImages />} />
          <Route path="/multi-channel-marketing-in-sri-lanka" element={<MultiChannelMarketingSriLanka />} />
          <Route path="/future-of-email-marketing-sri-lanka" element={<FutureEmailMarketingSriLanka />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppCTA />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
