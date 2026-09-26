import { Metadata } from "next";
import { SRKHeader } from "@/components/srk-header";
import { SRKAbout } from "@/components/srk-about";
import { SRKReviews } from "@/components/srk-reviews";
import { SRKFooter } from "@/components/srk-footer";
import { SRKFloatingControls } from "@/components/srk-floating-controls";
import { SRK_BUSINESS } from "@/lib/srk-data";
import { Sparkles, Award, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | SRK Interiors Studio Chintamani",
  description:
    "Learn about Shariq and team SRK Interiors — trusted interior designers in Chintamani, Karnataka offering BWP ply joinery, transparent pricing, and 100% direct studio supervision.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A18] font-sans relative">
      <SRKHeader />

      {/* Page Banner Header */}
      <section className="pt-32 pb-16 bg-[#141311] text-[#FAF8F5] border-b border-[#2A2722]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#8A7A62] text-xs tracking-[0.2em] uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>ABOUT OUR STUDIO</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FAF8F5]">
            Crafting Spaces with Passion &amp; Precision
          </h1>
          <p className="text-[#D8D2C6] text-sm sm:text-base max-w-2xl leading-relaxed font-sans">
            Led by Shariq in Chintamani, SRK Interiors delivers bespoke residential and commercial spaces with zero compromise on quality and materials.
          </p>
        </div>
      </section>

      {/* Main About Component */}
      <SRKAbout />

      {/* Highlights Grid */}
      <section className="py-16 bg-[#FAFAF8] border-t border-[#EAE4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-[#EAE4D8] rounded-xl space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#1C1B18]">5.0 ★ Verified Rating</h3>
              <p className="text-xs text-[#5A5448] leading-relaxed">
                Consistently rated 5 stars by verified homeowners and business clients across Chintamani and Karnataka.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#EAE4D8] rounded-xl space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#1C1B18]">Direct Supervision</h3>
              <p className="text-xs text-[#5A5448] leading-relaxed">
                Shariq personally manages design drawings, material selection, and site execution for every single project.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#EAE4D8] rounded-xl space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#1C1B18]">BWP Waterproof Ply</h3>
              <p className="text-xs text-[#5A5448] leading-relaxed">
                We exclusively use Boiling Waterproof (BWP) plywood for long-lasting kitchens, wardrobes, and cabinetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <SRKReviews />

      <SRKFooter />
      <SRKFloatingControls />
    </main>
  );
}
