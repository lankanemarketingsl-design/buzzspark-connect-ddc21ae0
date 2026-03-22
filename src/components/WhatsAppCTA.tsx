import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
  return (
    <a
      href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20marketing%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm">Chat with us</span>
    </a>
  );
};

export default WhatsAppCTA;
