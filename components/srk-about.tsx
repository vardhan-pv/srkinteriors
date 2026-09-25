"use client";

import Image from "next/image";
import { Award, Sparkles, ArrowRight } from "lucide-react";

export function SRKAbout() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-[#1C1B18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Arched Upper Edge */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative w-full h-[400px] sm:h-[500px] lg:h-[560px] overflow-hidden border border-[#E8E2D6] shadow-lg rounded-2xl"
              style={{
                borderRadius: "160px 160px 20px 20px", // Signature Arched Upper Edge
              }}
            >
              <Image
                src="/images/about-armchair.jpg"
                alt="SRK Interiors Bespoke Craftsmanship and Materials in Chintamani"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Verified Rating Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md border border-[#E8E2D6] px-5 py-3 rounded-xl shadow-md flex items-center gap-3">
                <Award className="w-5 h-5 text-[#9A7A3A]" />
                <div>
                  <p className="font-serif text-sm text-[#1C1B18] font-medium">5.0 ★ Google Verified</p>
                  <p className="text-[11px] text-[#5A5448] font-sans">30+ Local Client Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Alora-style Stat Counters */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-[#8A7A62] text-[11px] sm:text-xs tracking-[0.18em] uppercase font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>ABOUT US</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-[-0.015em] text-[#1C1B18]">
              Spaces Designed <br />
              <span className="italic font-light text-[#9A7A3A]">Around Real Life</span>
            </h2>

            <div className="space-y-4 text-[#4A4540] font-sans text-[15px] sm:text-base leading-[1.7]">
              <p>
                At <strong className="text-[#1C1B18] font-medium">SRK Interiors</strong>, led by Shariq, we believe great design has the power to transform everyday living. With a passion for aesthetics and a commitment to excellence, we create luxurious, functional spaces that feel like home.
              </p>
              <p>
                We strictly use Boiling Waterproof (BWP) plywood, anti-rust soft-close hardware, and high-density acrylic and laminate finishes—ensuring your interiors look gorgeous and perform reliably for decades.
              </p>
            </div>

            {/* Key Stat Counters Grid (Alora Interiors Style) */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E8E2D6]">
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-[#1C1B18]">5.0 ★</p>
                <p className="text-xs text-[#5A5448] font-sans mt-1">Google Rating</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-[#1C1B18]">30+</p>
                <p className="text-xs text-[#5A5448] font-sans mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-[#1C1B18]">100%</p>
                <p className="text-xs text-[#5A5448] font-sans mt-1">BWP Plywood</p>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#C9A84C] text-[#141311] font-sans text-sm font-semibold tracking-[0.02em] rounded-full hover:bg-[#B89230] transition-colors cursor-pointer"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
