import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
import Resources from "./pages/Resources.tsx";

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
          <Route path="/special-advertising-packages" element={<SpecialPackages />} />
          <Route path="/online-advertising-sri-lanka" element={<OnlineAdvertising />} />
          <Route path="/graphic-designing-in-sri-lanka" element={<GraphicDesign />} />
          <Route path="/seo-sri-lanka" element={<SeoServices />} />
          <Route path="/website-design-sri-lanka" element={<WebsiteDesign />} />
          <Route path="/resources" element={<Resources />} />
          {/* Resource article pages */}
          <Route path="/why-email-marketing-is-important" element={<Resources />} />
          <Route path="/why-you-need-email-marketing" element={<Resources />} />
          <Route path="/best-seo-services-sri-lanka" element={<Resources />} />
          <Route path="/classified-advertising-in-sri-lanka" element={<Resources />} />
          <Route path="/sms-marketing-in-sri-lanka" element={<Resources />} />
          <Route path="/enable-missing-images-to-display" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
