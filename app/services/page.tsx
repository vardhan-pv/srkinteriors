import { Metadata } from "next";
import { SRKHeader } from "@/components/srk-header";
import { SRKServices } from "@/components/srk-services";
import { SRKFreeEnquiry } from "@/components/srk-free-enquiry";
import { SRKFAQ } from "@/components/srk-faq";
import { SRKFooter } from "@/components/srk-footer";
import { SRKFloatingControls } from "@/components/srk-floating-controls";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Design Services | SRK Interiors Chintamani",
  description:
    "Explore interior services by SRK Interiors: Full Home Interiors, Modular Kitchens, Bedroom Wardrobes, False Ceiling, Commercial & Turnkey Execution in Chintamani, Karnataka.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A18] font-sans relative">
      <SRKHeader />

      {/* Page Banner Header */}
      <section className="pt-32 pb-16 bg-[#141311] text-[#FAF8F5] border-b border-[#2A2722]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#8A7A62] text-xs tracking-[0.2em] uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>OUR CORE SERVICES</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FAF8F5]">
            Comprehensive Interior Solutions
          </h1>
          <p className="text-[#D8D2C6] text-sm sm:text-base max-w-2xl leading-relaxed font-sans">
            From 3D space planning and acrylic modular kitchens to custom wardrobes and full turnkey home execution in Chintamani.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <SRKServices />

      {/* Free Enquiry Form */}
      <SRKFreeEnquiry />

      {/* Frequently Asked Questions */}
      <SRKFAQ />

      <SRKFooter />
      <SRKFloatingControls />
    </main>
  );
}
