import { Metadata } from "next";
import { SRKHeader } from "@/components/srk-header";
import { SRKLocationContact } from "@/components/srk-location-contact";
import { SRKMap } from "@/components/srk-map";
import { SRKFooter } from "@/components/srk-footer";
import { SRKFloatingControls } from "@/components/srk-floating-controls";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Studio Location | SRK Interiors Chintamani",
  description:
    "Visit our studio at 3rd Cross, Chelur Rd, Chintamani, Karnataka or call +91 70195 49295 to book a personal consultation with Shariq.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A18] font-sans relative">
      <SRKHeader />

      {/* Page Banner Header */}
      <section className="pt-32 pb-16 bg-[#141311] text-[#FAF8F5] border-b border-[#2A2722]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#8A7A62] text-xs tracking-[0.2em] uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>STUDIO LOCATION &amp; CONTACT</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FAF8F5]">
            Get In Touch With Shariq
          </h1>
          <p className="text-[#D8D2C6] text-sm sm:text-base max-w-2xl leading-relaxed font-sans">
            Have a floorplan or site requirement? Visit our Chelur Road studio or connect with us directly via phone or WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact Form & Studio Details */}
      <SRKLocationContact />

      {/* Interactive Google Maps */}
      <SRKMap />

      <SRKFooter />
      <SRKFloatingControls />
    </main>
  );
}
