import { lazy, Suspense } from "react";
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

// Lazy-loaded pages
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const EmailMarketing = lazy(() => import("./pages/EmailMarketing.tsx"));
const SmsMarketing = lazy(() => import("./pages/SmsMarketing.tsx"));
const WhatsAppMarketing = lazy(() => import("./pages/WhatsAppMarketing.tsx"));
const SpecialPackages = lazy(() => import("./pages/SpecialPackages.tsx"));
const OnlineAdvertising = lazy(() => import("./pages/OnlineAdvertising.tsx"));
const GraphicDesign = lazy(() => import("./pages/GraphicDesign.tsx"));
const SeoServices = lazy(() => import("./pages/SeoServices.tsx"));
const WebsiteDesign = lazy(() => import("./pages/WebsiteDesign.tsx"));
const LeadGeneration = lazy(() => import("./pages/LeadGeneration.tsx"));
const SocialMediaMarketing = lazy(() => import("./pages/SocialMediaMarketing.tsx"));
const WebBannerAdvertising = lazy(() => import("./pages/WebBannerAdvertising.tsx"));
const Resources = lazy(() => import("./pages/Resources.tsx"));
const GoogleAdsSriLanka = lazy(() => import("./pages/GoogleAdsSriLanka.tsx"));
const AboutUs = lazy(() => import("./pages/AboutUs.tsx"));
const WhyChooseUs = lazy(() => import("./pages/WhyChooseUs.tsx"));
const ContactUs = lazy(() => import("./pages/ContactUs.tsx"));
const HotelMarketing = lazy(() => import("./pages/HotelMarketing.tsx"));
const EducationMarketing = lazy(() => import("./pages/EducationMarketing.tsx"));
const FinanceMarketing = lazy(() => import("./pages/FinanceMarketing.tsx"));
const RestaurantMarketing = lazy(() => import("./pages/RestaurantMarketing.tsx"));
const RealEstateMarketing = lazy(() => import("./pages/RealEstateMarketing.tsx"));
const FashionMarketing = lazy(() => import("./pages/FashionMarketing.tsx"));
const AdvertisingSriLanka = lazy(() => import("./pages/AdvertisingSriLanka.tsx"));
const EventMarketing = lazy(() => import("./pages/EventMarketing.tsx"));
const StaffRecruitment = lazy(() => import("./pages/StaffRecruitment.tsx"));
const GraphicDesignService = lazy(() => import("./pages/GraphicDesignService.tsx"));
const Careers = lazy(() => import("./pages/Careers.tsx"));

// Lazy-loaded articles
const WhyEmailMarketingIsImportant = lazy(() => import("./pages/articles/WhyEmailMarketingIsImportant.tsx"));
const WhyYouNeedEmailMarketing = lazy(() => import("./pages/articles/WhyYouNeedEmailMarketing.tsx"));
const BestSeoServicesSriLanka = lazy(() => import("./pages/articles/BestSeoServicesSriLanka.tsx"));
const SmsMarketingInSriLanka = lazy(() => import("./pages/articles/SmsMarketingInSriLanka.tsx"));
const EnableMissingImages = lazy(() => import("./pages/articles/EnableMissingImages.tsx"));
const MultiChannelMarketingSriLanka = lazy(() => import("./pages/articles/MultiChannelMarketingSriLanka.tsx"));
const FutureEmailMarketingSriLanka = lazy(() => import("./pages/articles/FutureEmailMarketingSriLanka.tsx"));
const EmailMarketingPowerfulTool = lazy(() => import("./pages/articles/EmailMarketingPowerfulTool.tsx"));
const SmsMarketingDrivingEngagement = lazy(() => import("./pages/articles/SmsMarketingDrivingEngagement.tsx"));
const WhatsAppMarketingFuture = lazy(() => import("./pages/articles/WhatsAppMarketingFuture.tsx"));
const MultiChannelMarketingMaxReach = lazy(() => import("./pages/articles/MultiChannelMarketingMaxReach.tsx"));
const SeoWhyItMatters = lazy(() => import("./pages/articles/SeoWhyItMatters.tsx"));
const LeadGenerationGetMoreCustomers = lazy(() => import("./pages/articles/LeadGenerationGetMoreCustomers.tsx"));
const SocialMediaMarketingWhyYouNeedIt = lazy(() => import("./pages/articles/SocialMediaMarketingWhyYouNeedIt.tsx"));
const HotelMarketingIncreaseBookings = lazy(() => import("./pages/articles/HotelMarketingIncreaseBookings.tsx"));
const EducationMarketingAttractStudents = lazy(() => import("./pages/articles/EducationMarketingAttractStudents.tsx"));
const FinanceMarketingGenerateLeads = lazy(() => import("./pages/articles/FinanceMarketingGenerateLeads.tsx"));
const RestaurantMarketingAttractCustomers = lazy(() => import("./pages/articles/RestaurantMarketingAttractCustomers.tsx"));
const RealEstateMarketingPropertyLeads = lazy(() => import("./pages/articles/RealEstateMarketingPropertyLeads.tsx"));
const FashionMarketingGrowBrand = lazy(() => import("./pages/articles/FashionMarketingGrowBrand.tsx"));
const BestAdvertisingCompanySriLanka = lazy(() => import("./pages/articles/BestAdvertisingCompanySriLanka.tsx"));
const DigitalAdvertisingGuide = lazy(() => import("./pages/articles/DigitalAdvertisingGuide.tsx"));
const OnlineVsTraditionalAdvertising = lazy(() => import("./pages/articles/OnlineVsTraditionalAdvertising.tsx"));
const GoogleAdsCostGuide = lazy(() => import("./pages/articles/GoogleAdsCostGuide.tsx"));
const EmailMarketingGuide = lazy(() => import("./pages/articles/EmailMarketingGuide.tsx"));
const EmailMarketingPricing = lazy(() => import("./pages/articles/EmailMarketingPricing.tsx"));
const EmailMarketingIndustries = lazy(() => import("./pages/articles/EmailMarketingIndustries.tsx"));
const EmailVsSocialMedia = lazy(() => import("./pages/articles/EmailVsSocialMedia.tsx"));
const MultiChannelVsFacebook = lazy(() => import("./pages/articles/MultiChannelVsFacebook.tsx"));
const FinditlkEmailConversions = lazy(() => import("./pages/articles/FinditlkEmailConversions.tsx"));
const EducationEmailEnrollments = lazy(() => import("./pages/articles/EducationEmailEnrollments.tsx"));
const RealEstateEmailLeads = lazy(() => import("./pages/articles/RealEstateEmailLeads.tsx"));
const HotelEmailBookings = lazy(() => import("./pages/articles/HotelEmailBookings.tsx"));
const EcommerceEmailSales = lazy(() => import("./pages/articles/EcommerceEmailSales.tsx"));
const RecruitmentEmailHiring = lazy(() => import("./pages/articles/RecruitmentEmailHiring.tsx"));
const HealthcareEmailEngagement = lazy(() => import("./pages/articles/HealthcareEmailEngagement.tsx"));
const AutomotiveEmailSales = lazy(() => import("./pages/articles/AutomotiveEmailSales.tsx"));
const EventEmailAttendance = lazy(() => import("./pages/articles/EventEmailAttendance.tsx"));
const LeadGenAgency = lazy(() => import("./pages/articles/LeadGenAgency.tsx"));
const MultiChannelCampaignLandingPage = lazy(() => import("./pages/articles/MultiChannelCampaignLandingPage.tsx"));
const BestSmsMarketingCompanySriLanka = lazy(() => import("./pages/articles/BestSmsMarketingCompanySriLanka.tsx"));
const BestSeoCompanySriLanka = lazy(() => import("./pages/articles/BestSeoCompanySriLanka.tsx"));
const SeoCostSriLanka = lazy(() => import("./pages/articles/SeoCostSriLanka.tsx"));
const HowSeoWorksSriLanka = lazy(() => import("./pages/articles/HowSeoWorksSriLanka.tsx"));
const BestSocialMediaMarketingCompanySriLanka = lazy(() => import("./pages/articles/BestSocialMediaMarketingCompanySriLanka.tsx"));
const SocialMediaMarketingCostSriLanka = lazy(() => import("./pages/articles/SocialMediaMarketingCostSriLanka.tsx"));
const HowSocialMediaMarketingWorksSriLanka = lazy(() => import("./pages/articles/HowSocialMediaMarketingWorksSriLanka.tsx"));
const HowGraphicDesignHelpsBusinessSriLanka = lazy(() => import("./pages/articles/HowGraphicDesignHelpsBusinessSriLanka.tsx"));
const HowLeadGenerationWorksSriLanka = lazy(() => import("./pages/articles/HowLeadGenerationWorksSriLanka.tsx"));
const EmailSubjectLinesGuide = lazy(() => import("./pages/articles/EmailSubjectLinesGuide.tsx"));
const HowEmailMarketingWorks = lazy(() => import("./pages/articles/HowEmailMarketingWorks.tsx"));
const HowHotelMarketingWorks = lazy(() => import("./pages/articles/HowHotelMarketingWorks.tsx"));
const HotelMarketingCost = lazy(() => import("./pages/articles/HotelMarketingCost.tsx"));
const BestHotelMarketingAgency = lazy(() => import("./pages/articles/BestHotelMarketingAgency.tsx"));
const DigitalMarketingBrandAwareness = lazy(() => import("./pages/articles/DigitalMarketingBrandAwareness.tsx"));
const DirectMarketingStrategy = lazy(() => import("./pages/articles/DirectMarketingStrategy.tsx"));
const FastDirectMarketing = lazy(() => import("./pages/articles/FastDirectMarketing.tsx"));
const HotelDigitalMarketingCaseStudies = lazy(() => import("./pages/articles/HotelDigitalMarketingCaseStudies.tsx"));
const RealEstateMarketingCaseStudies = lazy(() => import("./pages/articles/RealEstateMarketingCaseStudies.tsx"));
const FinanceMarketingCaseStudies = lazy(() => import("./pages/articles/FinanceMarketingCaseStudies.tsx"));
const FashionMarketingCaseStudies = lazy(() => import("./pages/articles/FashionMarketingCaseStudies.tsx"));
const EventMarketingCaseStudies = lazy(() => import("./pages/articles/EventMarketingCaseStudies.tsx"));
const StaffRecruitmentCaseStudies = lazy(() => import("./pages/articles/StaffRecruitmentCaseStudies.tsx"));
const RestaurantMarketingCaseStudies = lazy(() => import("./pages/articles/RestaurantMarketingCaseStudies.tsx"));
const EducationMarketingCaseStudies = lazy(() => import("./pages/articles/EducationMarketingCaseStudies.tsx"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-3 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

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
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/email-marketing" element={<EmailMarketing />} />
                <Route path="/sms-marketing" element={<SmsMarketing />} />
                <Route path="/whatsapp-marketing" element={<WhatsAppMarketing />} />
                <Route path="/multi-channel-marketing-sri-lanka" element={<SpecialPackages />} />
                <Route path="/special-advertising-packages" element={<SpecialPackages />} />
                <Route path="/online-advertising-sri-lanka" element={<OnlineAdvertising />} />
                <Route path="/graphic-designing-in-sri-lanka" element={<GraphicDesign />} />
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
                <Route path="/video-editing-sri-lanka" element={<GraphicDesignService />} />
                <Route path="/seo-sri-lanka" element={<SeoServices />} />
                <Route path="/website-design-sri-lanka" element={<WebsiteDesign />} />
                <Route path="/lead-generation-sri-lanka" element={<LeadGeneration />} />
                <Route path="/social-media-marketing-sri-lanka" element={<SocialMediaMarketing />} />
                <Route path="/web-banner-advertising-sri-lanka" element={<WebBannerAdvertising />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/why-choose-us" element={<WhyChooseUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
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
                <Route path="/google-ads-sri-lanka" element={<GoogleAdsSriLanka />} />
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
                <Route path="/best-sms-marketing-company-sri-lanka" element={<BestSmsMarketingCompanySriLanka />} />
                <Route path="/best-seo-company-sri-lanka" element={<BestSeoCompanySriLanka />} />
                <Route path="/seo-cost-sri-lanka" element={<SeoCostSriLanka />} />
                <Route path="/how-seo-works-sri-lanka" element={<HowSeoWorksSriLanka />} />
                <Route path="/best-social-media-marketing-company-sri-lanka" element={<BestSocialMediaMarketingCompanySriLanka />} />
                <Route path="/social-media-marketing-cost-sri-lanka" element={<SocialMediaMarketingCostSriLanka />} />
                <Route path="/how-social-media-marketing-works-sri-lanka" element={<HowSocialMediaMarketingWorksSriLanka />} />
                <Route path="/how-graphic-design-helps-business-sri-lanka" element={<HowGraphicDesignHelpsBusinessSriLanka />} />
                <Route path="/how-lead-generation-works-sri-lanka" element={<HowLeadGenerationWorksSriLanka />} />
                <Route path="/email-subject-lines-guide-sri-lanka" element={<EmailSubjectLinesGuide />} />
                <Route path="/how-email-marketing-works-sri-lanka" element={<HowEmailMarketingWorks />} />
                <Route path="/how-hotel-marketing-works-sri-lanka" element={<HowHotelMarketingWorks />} />
                <Route path="/hotel-marketing-cost-sri-lanka" element={<HotelMarketingCost />} />
                <Route path="/best-hotel-marketing-agency-sri-lanka" element={<BestHotelMarketingAgency />} />
                <Route path="/digital-marketing-brand-awareness-sri-lanka" element={<DigitalMarketingBrandAwareness />} />
                <Route path="/direct-marketing-strategy-sri-lanka" element={<DirectMarketingStrategy />} />
                <Route path="/fast-direct-marketing-sri-lanka" element={<FastDirectMarketing />} />
                <Route path="/hotel-digital-marketing-case-studies-sri-lanka" element={<HotelDigitalMarketingCaseStudies />} />
                <Route path="/real-estate-marketing-case-studies-sri-lanka" element={<RealEstateMarketingCaseStudies />} />
                <Route path="/finance-marketing-case-studies-sri-lanka" element={<FinanceMarketingCaseStudies />} />
                <Route path="/fashion-marketing-case-studies-sri-lanka" element={<FashionMarketingCaseStudies />} />
                <Route path="/event-marketing-case-studies-sri-lanka" element={<EventMarketingCaseStudies />} />
                <Route path="/staff-recruitment-case-studies-sri-lanka" element={<StaffRecruitmentCaseStudies />} />
                <Route path="/restaurant-marketing-case-studies-sri-lanka" element={<RestaurantMarketingCaseStudies />} />
                <Route path="/education-marketing-case-studies-sri-lanka" element={<EducationMarketingCaseStudies />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppCTA />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
