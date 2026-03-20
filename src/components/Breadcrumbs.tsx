import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const pathLabels: Record<string, string> = {
  "/email-marketing": "Email Marketing",
  "/sms-marketing": "SMS Marketing",
  "/whatsapp-marketing": "WhatsApp Marketing",
  "/lead-generation-sri-lanka": "Lead Generation",
  "/multi-channel-marketing-sri-lanka": "Multi-Channel Marketing",
  "/online-advertising-sri-lanka": "Online Advertising",
  "/graphic-designing-in-sri-lanka": "Graphic Design",
  "/seo-sri-lanka": "SEO Services",
  "/website-design-sri-lanka": "Website Design",
  "/resources": "Resources",
  "/why-email-marketing-is-important": "Why Email Marketing Is Important",
  "/why-you-need-email-marketing": "Why You Need Email Marketing",
  "/best-seo-services-sri-lanka": "Best SEO Services Sri Lanka",
  "/sms-marketing-in-sri-lanka": "SMS Marketing in Sri Lanka",
  "/enable-missing-images-to-display": "Enable Missing Images",
  "/multi-channel-marketing-in-sri-lanka": "Multi-Channel Marketing in Sri Lanka",
  "/special-advertising-packages": "Special Packages",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const currentLabel = pathLabels[location.pathname];

  if (!currentLabel || location.pathname === "/") return null;

  // Check if it's an article page (nested under resources)
  const isArticle = [
    "/why-email-marketing-is-important",
    "/why-you-need-email-marketing",
    "/best-seo-services-sri-lanka",
    "/sms-marketing-in-sri-lanka",
    "/enable-missing-images-to-display",
    "/multi-channel-marketing-in-sri-lanka",
  ].includes(location.pathname);

  return (
    <nav className="container mx-auto px-4 py-3" aria-label="Breadcrumb">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="text-primary-foreground/60 hover:text-accent text-xs sm:text-sm">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-primary-foreground/40" />
          {isArticle && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/resources" className="text-primary-foreground/60 hover:text-accent text-xs sm:text-sm">Resources</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-foreground/40" />
            </>
          )}
          <BreadcrumbItem>
            <BreadcrumbPage className="text-accent text-xs sm:text-sm font-medium">{currentLabel}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
};

export default Breadcrumbs;
