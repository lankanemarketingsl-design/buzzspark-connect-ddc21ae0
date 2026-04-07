import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ScrollToTop from "@/components/ScrollToTop";
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
import EmailMarketingPowerfulTool from "./pages/articles/EmailMarketingPowerfulTool.tsx";
import SmsMarketingDrivingEngagement from "./pages/articles/SmsMarketingDrivingEngagement.tsx";
import WhatsAppMarketingFuture from "./pages/articles/WhatsAppMarketingFuture.tsx";
import MultiChannelMarketingMaxReach from "./pages/articles/MultiChannelMarketingMaxReach.tsx";
import SeoWhyItMatters from "./pages/articles/SeoWhyItMatters.tsx";
import LeadGenerationGetMoreCustomers from "./pages/articles/LeadGenerationGetMoreCustomers.tsx";
import SocialMediaMarketingWhyYouNeedIt from "./pages/articles/SocialMediaMarketingWhyYouNeedIt.tsx";
import HotelMarketingIncreaseBookings from "./pages/articles/HotelMarketingIncreaseBookings.tsx";
import EducationMarketingAttractStudents from "./pages/articles/EducationMarketingAttractStudents.tsx";
import FinanceMarketingGenerateLeads from "./pages/articles/FinanceMarketingGenerateLeads.tsx";
import RestaurantMarketingAttractCustomers from "./pages/articles/RestaurantMarketingAttractCustomers.tsx";
import RealEstateMarketingPropertyLeads from "./pages/articles/RealEstateMarketingPropertyLeads.tsx";
import FashionMarketingGrowBrand from "./pages/articles/FashionMarketingGrowBrand.tsx";
import BestAdvertisingCompanySriLanka from "./pages/articles/BestAdvertisingCompanySriLanka.tsx";
import DigitalAdvertisingGuide from "./pages/articles/DigitalAdvertisingGuide.tsx";
import OnlineVsTraditionalAdvertising from "./pages/articles/OnlineVsTraditionalAdvertising.tsx";
import GoogleAdsCostGuide from "./pages/articles/GoogleAdsCostGuide.tsx";
import EmailMarketingGuide from "./pages/articles/EmailMarketingGuide.tsx";
import EmailMarketingPricing from "./pages/articles/EmailMarketingPricing.tsx";
import EmailMarketingIndustries from "./pages/articles/EmailMarketingIndustries.tsx";
import EmailVsSocialMedia from "./pages/articles/EmailVsSocialMedia.tsx";
import MultiChannelVsFacebook from "./pages/articles/MultiChannelVsFacebook.tsx";
import FinditlkEmailConversions from "./pages/articles/FinditlkEmailConversions.tsx";
import EducationEmailEnrollments from "./pages/articles/EducationEmailEnrollments.tsx";
import RealEstateEmailLeads from "./pages/articles/RealEstateEmailLeads.tsx";
import HotelEmailBookings from "./pages/articles/HotelEmailBookings.tsx";
import EcommerceEmailSales from "./pages/articles/EcommerceEmailSales.tsx";
import RecruitmentEmailHiring from "./pages/articles/RecruitmentEmailHiring.tsx";
import HealthcareEmailEngagement from "./pages/articles/HealthcareEmailEngagement.tsx";
import AutomotiveEmailSales from "./pages/articles/AutomotiveEmailSales.tsx";
import EventEmailAttendance from "./pages/articles/EventEmailAttendance.tsx";
import LeadGenAgency from "./pages/articles/LeadGenAgency.tsx";
import MultiChannelCampaignLandingPage from "./pages/articles/MultiChannelCampaignLandingPage.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import WhyChooseUs from "./pages/WhyChooseUs.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import HotelMarketing from "./pages/HotelMarketing.tsx";
import EducationMarketing from "./pages/EducationMarketing.tsx";
import FinanceMarketing from "./pages/FinanceMarketing.tsx";
import RestaurantMarketing from "./pages/RestaurantMarketing.tsx";
import RealEstateMarketing from "./pages/RealEstateMarketing.tsx";
import FashionMarketing from "./pages/FashionMarketing.tsx";
import AdvertisingSriLanka from "./pages/AdvertisingSriLanka.tsx";
import EventMarketing from "./pages/EventMarketing.tsx";
import StaffRecruitment from "./pages/StaffRecruitment.tsx";
import GraphicDesignService from "./pages/GraphicDesignService.tsx";
import Careers from "./pages/Careers.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen overflow-x-hidden bg-background">
          <ScrollToTop />
          <Navbar />
          <main className="overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/email-marketing" element={<EmailMarketing />} />
              <Route path="/sms-marketing" element={<SmsMarketing />} />
              <Route path="/whatsapp-marketing" element={<WhatsAppMarketing />} />
              <Route path="/multi-channel-marketing-sri-lanka" element={<SpecialPackages />} />
              <Route path="/special-advertising-packages" element={<SpecialPackages />} />
              <Route path="/online-advertising-sri-lanka" element={<OnlineAdvertising />} />
              <Route path="/graphic-designing-in-sri-lanka" element={<GraphicDesign />} />
              {/* Graphic Design sub-service pages */}
              <Route path="/e-flyer-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/business-card-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/animated-video-creation-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/logo-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/letterhead-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/hoarding-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/signboard-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/invitation-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/brochure-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/company-profile-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/presentation-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/photo-editing-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/social-media-post-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/menu-card-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/label-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/package-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/seo-sri-lanka" element={<SeoServices />} />
              <Route path="/website-design-sri-lanka" element={<WebsiteDesign />} />
              <Route path="/lead-generation-sri-lanka" element={<LeadGeneration />} />
              <Route path="/social-media-marketing-sri-lanka" element={<SocialMediaMarketing />} />
              <Route path="/web-banner-advertising-sri-lanka" element={<WebBannerAdvertising />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              {/* Industry-specific marketing pages */}
              <Route path="/hotel-marketing-sri-lanka" element={<HotelMarketing />} />
              <Route path="/education-marketing-sri-lanka" element={<EducationMarketing />} />
              <Route path="/finance-marketing-sri-lanka" element={<FinanceMarketing />} />
              <Route path="/restaurant-marketing-sri-lanka" element={<RestaurantMarketing />} />
              <Route path="/real-estate-marketing-sri-lanka" element={<RealEstateMarketing />} />
              <Route path="/fashion-marketing-sri-lanka" element={<FashionMarketing />} />
              <Route path="/advertising-sri-lanka" element={<AdvertisingSriLanka />} />
              <Route path="/event-marketing-sri-lanka" element={<EventMarketing />} />
              <Route path="/staff-recruitment-campaigns-sri-lanka" element={<StaffRecruitment />} />
              <Route path="/careers" element={<Careers />} />
              {/* Resource article pages */}
              <Route path="/why-email-marketing-is-important" element={<WhyEmailMarketingIsImportant />} />
              <Route path="/why-you-need-email-marketing" element={<WhyYouNeedEmailMarketing />} />
              <Route path="/best-seo-services-sri-lanka" element={<BestSeoServicesSriLanka />} />
              <Route path="/sms-marketing-in-sri-lanka" element={<SmsMarketingInSriLanka />} />

              <Route path="/enable-missing-images-to-display" element={<EnableMissingImages />} />
              <Route path="/multi-channel-marketing-in-sri-lanka" element={<MultiChannelMarketingSriLanka />} />
              <Route path="/future-of-email-marketing-sri-lanka" element={<FutureEmailMarketingSriLanka />} />
              <Route path="/email-marketing-most-powerful-tool-sri-lanka" element={<EmailMarketingPowerfulTool />} />
              <Route path="/sms-marketing-driving-engagement-sri-lanka" element={<SmsMarketingDrivingEngagement />} />
              <Route path="/whatsapp-marketing-future-sri-lanka" element={<WhatsAppMarketingFuture />} />
              <Route path="/multi-channel-marketing-maximum-reach-sri-lanka" element={<MultiChannelMarketingMaxReach />} />
              <Route path="/seo-why-it-matters-sri-lanka" element={<SeoWhyItMatters />} />
              <Route path="/lead-generation-get-more-customers-sri-lanka" element={<LeadGenerationGetMoreCustomers />} />
              <Route path="/social-media-marketing-why-your-business-needs-it-sri-lanka" element={<SocialMediaMarketingWhyYouNeedIt />} />
              <Route path="/hotel-marketing-increase-bookings-sri-lanka" element={<HotelMarketingIncreaseBookings />} />
              <Route path="/education-marketing-attract-students-sri-lanka" element={<EducationMarketingAttractStudents />} />
              <Route path="/finance-marketing-generate-leads-sri-lanka" element={<FinanceMarketingGenerateLeads />} />
              <Route path="/restaurant-marketing-attract-customers-sri-lanka" element={<RestaurantMarketingAttractCustomers />} />
              <Route path="/real-estate-marketing-generate-property-leads-sri-lanka" element={<RealEstateMarketingPropertyLeads />} />
              <Route path="/fashion-marketing-grow-brand-sri-lanka" element={<FashionMarketingGrowBrand />} />
              <Route path="/best-advertising-company-sri-lanka" element={<BestAdvertisingCompanySriLanka />} />
              <Route path="/digital-advertising-sri-lanka-complete-guide" element={<DigitalAdvertisingGuide />} />
              <Route path="/online-vs-traditional-advertising-sri-lanka" element={<OnlineVsTraditionalAdvertising />} />
              <Route path="/google-ads-sri-lanka-cost-guide" element={<GoogleAdsCostGuide />} />
              <Route path="/email-marketing-guide-sri-lanka" element={<EmailMarketingGuide />} />
              <Route path="/email-marketing-pricing-sri-lanka" element={<EmailMarketingPricing />} />
              <Route path="/email-marketing-industries-sri-lanka" element={<EmailMarketingIndustries />} />
              <Route path="/email-marketing-vs-social-media-sri-lanka" element={<EmailVsSocialMedia />} />
              <Route path="/multi-channel-vs-facebook-sri-lanka" element={<MultiChannelVsFacebook />} />
              <Route path="/finditlk-email-marketing-conversions-sri-lanka" element={<FinditlkEmailConversions />} />
              <Route path="/education-email-marketing-enrollments-sri-lanka" element={<EducationEmailEnrollments />} />
              <Route path="/real-estate-email-marketing-leads-sri-lanka" element={<RealEstateEmailLeads />} />
              <Route path="/hotel-email-marketing-bookings-sri-lanka" element={<HotelEmailBookings />} />
              <Route path="/ecommerce-email-marketing-sales-sri-lanka" element={<EcommerceEmailSales />} />
              <Route path="/recruitment-email-marketing-hiring-sri-lanka" element={<RecruitmentEmailHiring />} />
              <Route path="/healthcare-email-marketing-engagement-sri-lanka" element={<HealthcareEmailEngagement />} />
              <Route path="/automotive-email-marketing-sales-sri-lanka" element={<AutomotiveEmailSales />} />
              <Route path="/event-email-marketing-attendance-sri-lanka" element={<EventEmailAttendance />} />
              <Route path="/lead-generation-agency-sri-lanka" element={<LeadGenAgency />} />
              <Route path="/multi-channel-email-campaigns-sri-lanka" element={<MultiChannelCampaignLandingPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppCTA />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
