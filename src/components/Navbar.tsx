import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-dark.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Email Marketing", path: "/email-marketing" },
  { label: "SMS Marketing", path: "/sms-marketing" },
  { label: "WhatsApp Marketing", path: "/whatsapp-marketing" },
  { label: "Online Advertising", path: "/online-advertising-sri-lanka" },
  { label: "SEO", path: "/seo-sri-lanka" },
  { label: "Web Design", path: "/website-design-sri-lanka" },
  { label: "Graphic Design", path: "/graphic-designing-in-sri-lanka" },
  { label: "Resources", path: "/resources" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 gradient-hero border-b border-navy-light/30 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Buzz Connect" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant="nav"
                size="sm"
                className={location.pathname === item.path ? "text-accent" : ""}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        <div className="hidden xl:block">
          <Link to="/#contactus">
            <Button variant="hero" size="sm">Get a Quote</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden gradient-hero border-t border-navy-light/30 pb-4">
          <div className="container mx-auto px-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent bg-navy-light/50"
                    : "text-primary-foreground/80 hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/#contactus" onClick={() => setMobileOpen(false)}>
              <Button variant="hero" size="sm" className="mt-2 w-full">Get a Quote</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
