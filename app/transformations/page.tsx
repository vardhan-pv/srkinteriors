import { Metadata } from "next";
import { SRKHeader } from "@/components/srk-header";
import { SRKBeforeAfter } from "@/components/srk-before-after";
import { SRKFreeEnquiry } from "@/components/srk-free-enquiry";
import { SRKFooter } from "@/components/srk-footer";
import { SRKFloatingControls } from "@/components/srk-floating-controls";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Before & After Transformations | SRK Interiors Chintamani",
  description:
    "Interactively compare real living room and modular kitchen transformations before and after SRK Interiors design execution in Chintamani.",
};

export default function TransformationsPage() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A18] font-sans relative">
      <SRKHeader />

      {/* Page Banner Header */}
      <section className="pt-32 pb-16 bg-[#141311] text-[#FAF8F5] border-b border-[#2A2722]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#8A7A62] text-xs tracking-[0.2em] uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>INTERACTIVE COMPARISON</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FAF8F5]">
            Real Site Transformations
          </h1>
          <p className="text-[#D8D2C6] text-sm sm:text-base max-w-2xl leading-relaxed font-sans">
            Slide through before &amp; after comparison photos of living rooms, kitchens, and complete home turnkeys executed by SRK Interiors.
          </p>
        </div>
      </section>

      {/* Before & After Interactive Slider */}
      <SRKBeforeAfter />

      {/* Enquiry Form */}
      <SRKFreeEnquiry />

      <SRKFooter />
      <SRKFloatingControls />
    </main>
  );
}
