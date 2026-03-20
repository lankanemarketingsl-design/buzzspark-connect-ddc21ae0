import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const EnableMissingImages = () => {

  return (
    <ServicePageLayout
      badge="Resources"
      title="Enable Missing Images to Display in Various Email Clients in Sri Lanka"
      subtitle=""
    >
      <SEOHead
        title="Enable Missing Images to Display in Email Clients | Buzz Connect"
        description="Learn how to enable missing images in Outlook, Yahoo Mail, and other email clients. Fix image display issues in email marketing campaigns."
        canonical="/enable-missing-images-to-display"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Enable Missing Images", url: "/enable-missing-images-to-display" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Enable Missing Images to Display in Various Email Clients",
          datePublished: "2020-08-06",
          author: { "@type": "Organization", name: "Buzz Connect" },
          publisher: { "@type": "Organization", name: "Buzz Connect", logo: { "@type": "ImageObject", url: "https://buzzconnect.lk/og-image.png" } },
        }]}
      />
      <div className="max-w-3xl mx-auto">
        <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Resources
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <p className="text-muted-foreground leading-relaxed">
              Images in an email sometimes don't display for a variety of reasons. If your contacts are telling you that they're receiving your email but content isn't displaying properly, a good place to start is to have them check the settings in their email client to make sure that their images are enabled to display.
            </p>
          </div>

          {/* Outlook */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Outlook (Outlook for Microsoft 365, Outlook 2007 and up)</h2>

            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Unblock image downloads for a single message:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
              <li>Click the InfoBar at the top of the message.</li>
              <li>Click <strong className="text-foreground">Download Pictures</strong>.</li>
            </ol>

            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Unblock image downloads for all messages:</h3>

            <div className="mb-4">
              <h4 className="font-semibold text-foreground mb-2">Outlook 2007</h4>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>On the "Tools" menu, click <strong className="text-foreground">Trust Center &gt; Automatic Download</strong>.</li>
                <li>Uncheck the "Don't download pictures automatically in HTML e-mail messages or RSS items" check box.</li>
              </ol>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-2">Outlook 2010 and Up</h4>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>On the "File" tab, click <strong className="text-foreground">Options &gt; Trust Center</strong>.</li>
                <li>Under Microsoft Outlook Trust Center, click <strong className="text-foreground">Trust Center Settings</strong>.</li>
                <li>Uncheck the "Don't download pictures automatically in HTML e-mail messages or RSS items" check box.</li>
              </ol>
            </div>

            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Unblock picture downloads for all messages from a particular email address or domain:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-3">
              <li>In an open message that was sent from a particular email address or domain, right-click on a blocked item.</li>
              <li>Do one of the following:
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>Click <strong className="text-foreground">Add Sender to Safe Senders List</strong>.</li>
                  <li>Click <strong className="text-foreground">Add the Domain [@domain] to Safe Senders List</strong>.</li>
                </ul>
              </li>
            </ol>
            <p className="text-sm text-muted-foreground">
              For additional assistance with Outlook, please see{" "}
              <a href="https://support.office.com/en-us/article/block-or-unblock-automatic-picture-downloads-in-email-messages-15e08854-6808-49b1-9a0a-50b81f2d617a" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Microsoft Office support
              </a>.
            </p>
          </div>

          {/* Yahoo Mail */}
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Yahoo Mail</h2>

            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Display images for individual emails:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
              <li>Open an email.</li>
              <li>In the "This message contains blocked images" message, click <strong className="text-foreground">Show images</strong>.</li>
            </ol>

            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Disable image blocking for all messages:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Click Settings gear icon and then click <strong className="text-foreground">More Settings</strong>.</li>
              <li>Click "Viewing email."</li>
              <li>Under the Show images in messages section, select "Always, except in spam folder."</li>
            </ol>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Need Help With Your Email Campaigns?</h3>
            <p className="text-primary-foreground/80 mb-4">Buzz Connect ensures your emails are optimized for maximum deliverability and display.</p>
            <Link to="/email-marketing" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View Email Marketing Packages
            </Link>
          </div>
        </motion.article>
      </div>
    </ServicePageLayout>
  );
};

export default EnableMissingImages;
