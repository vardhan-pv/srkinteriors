import { Metadata } from "next";
import { SRKHeader } from "@/components/srk-header";
import { SRKGallery } from "@/components/srk-gallery";
import { SRKBeforeAfter } from "@/components/srk-before-after";
import { SRKFooter } from "@/components/srk-footer";
import { SRKFloatingControls } from "@/components/srk-floating-controls";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Portfolio Gallery | SRK Interiors Chintamani",
  description:
    "View the complete showcase of 23+ interior projects by SRK Interiors in Chintamani & Karnataka: Living room wall units, modular kitchens, marble bedrooms, and false ceiling designs.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A18] font-sans relative">
      <SRKHeader />

      {/* Page Banner Header */}
      <section className="pt-32 pb-16 bg-[#141311] text-[#FAF8F5] border-b border-[#2A2722]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#8A7A62] text-xs tracking-[0.2em] uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FAF8F5]">
            Featured Interior Projects
          </h1>
          <p className="text-[#D8D2C6] text-sm sm:text-base max-w-2xl leading-relaxed font-sans">
            Real photos from our site executions in Chintamani, Kolar, and surrounding Karnataka regions.
          </p>
        </div>
      </section>

      {/* Main Gallery Component with all 23 images */}
      <SRKGallery />

      {/* Real Transformations Section */}
      <SRKBeforeAfter />

      <SRKFooter />
      <SRKFloatingControls />
    </main>
  );
}
