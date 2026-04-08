import { Link } from "react-router-dom";

interface DigitalMarketingCTAProps {
  variant?: "default" | "alt";
}

const DigitalMarketingCTA = ({ variant = "default" }: DigitalMarketingCTAProps) => {
  return (
    <section className="mt-12 p-8 rounded-2xl bg-muted/50 border border-border">
      <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">
        Digital Marketing Services in Sri Lanka
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-3">
        Buzz Connect is a leading provider of{" "}
        <Link to="/" className="text-muted-foreground underline hover:text-foreground transition-colors">
          email marketing Sri Lanka
        </Link>
        ,{" "}
        <Link to="/" className="text-muted-foreground underline hover:text-foreground transition-colors">
          SMS marketing Sri Lanka
        </Link>
        , and{" "}
        <Link to="/" className="text-muted-foreground underline hover:text-foreground transition-colors">
          WhatsApp marketing Sri Lanka
        </Link>{" "}
        solutions for businesses looking to grow fast.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Our integrated approach combines{" "}
        {variant === "alt" ? (
          <>
            <Link to="/" className="text-muted-foreground underline hover:text-foreground transition-colors">
              email marketing services Sri Lanka
            </Link>
            ,{" "}
            <Link to="/" className="text-muted-foreground underline hover:text-foreground transition-colors">
              bulk SMS marketing Sri Lanka
            </Link>
            , and{" "}
            <Link to="/" className="text-muted-foreground underline hover:text-foreground transition-colors">
              WhatsApp campaign marketing Sri Lanka
            </Link>
          </>
        ) : (
          <>email campaigns, bulk SMS advertising, and WhatsApp engagement strategies</>
        )}{" "}
        to maximize reach and conversions.
      </p>
    </section>
  );
};

export default DigitalMarketingCTA;
