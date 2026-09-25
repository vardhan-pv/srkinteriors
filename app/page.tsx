import { SRKBrandReveal } from "@/components/srk-brand-reveal";
import { SRKWelcomePopup } from "@/components/srk-welcome-popup";
import { SRKHeader } from "@/components/srk-header";
import { SRKHero } from "@/components/srk-hero";
import { SRKBeforeAfter } from "@/components/srk-before-after";
import { SRKFreeEnquiry } from "@/components/srk-free-enquiry";
import { SRKAbout } from "@/components/srk-about";
import { SRKGallery } from "@/components/srk-gallery";
import { SRKServices } from "@/components/srk-services";
import { SRKReviews } from "@/components/srk-reviews";
import { SRKContact } from "@/components/srk-contact";
import { SRKMap } from "@/components/srk-map";
import { SRKFooter } from "@/components/srk-footer";
import { SRKFloatingControls } from "@/components/srk-floating-controls";
import { SRK_BUSINESS } from "@/lib/srk-data";

export default function HomePage() {
  // Schema.org Local Business Structured Data for Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SRK_BUSINESS.name,
    image: `${SRK_BUSINESS.siteUrl}/images/hero-living.jpg`,
    "@id": SRK_BUSINESS.siteUrl,
    url: SRK_BUSINESS.siteUrl,
    telephone: SRK_BUSINESS.phoneDisplay,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: SRK_BUSINESS.streetAddress,
      addressLocality: SRK_BUSINESS.city,
      addressRegion: SRK_BUSINESS.state,
      postalCode: SRK_BUSINESS.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SRK_BUSINESS.coordinates.lat,
      longitude: SRK_BUSINESS.coordinates.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SRK_BUSINESS.rating.toString(),
      reviewCount: SRK_BUSINESS.reviewCount.toString(),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-[#1A1A18] font-sans selection:bg-[#C9A84C] selection:text-white relative">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Welcome Popup — consultation card on first visit */}
      <SRKWelcomePopup />

      {/* Brand Reveal & Network State */}
      <SRKBrandReveal />

      {/* Section 1: Header & Hero */}
      <SRKHeader />
      <SRKHero />

      {/* Section 2: Reviews (6 floating cards, real Google reviews, no avatars) */}
      <SRKReviews />

      {/* Section 3: About Us */}
      <SRKAbout />

      {/* Section 4: Gallery */}
      <SRKGallery />

      {/* Section 5: Real Transformations (Before & After using /images1 assets) */}
      <SRKBeforeAfter />

      {/* Section 6: Free Consultation Enquiry Form */}
      <SRKFreeEnquiry />

      {/* Section 7: Services */}
      <SRKServices />

      {/* Section 8: Contact */}
      <SRKContact />

      {/* Section 9: Real Google Map + 360° View */}
      <SRKMap />

      {/* Section 10: Footer */}
      <SRKFooter />

      {/* Permanent Floating Call & WhatsApp Buttons */}
      <SRKFloatingControls />
    </main>
  );
}
