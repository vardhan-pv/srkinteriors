"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { SRK_BUSINESS } from "@/lib/srk-data";
import { MapPin, Navigation, Compass, PhoneCall, Sparkles } from "lucide-react";
import { useInView } from "motion/react";

export function SRKMap() {
  const [activeTab, setActiveTab] = useState<"map" | "panorama">("map");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "200px" });

  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.652758137356!2d78.05567007577317!3d13.401538487864817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8354c46f6f251%3A0xb4ec0ddb1bdf6675!2sSRK%20INTERIORS!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin`;

  return (
    <section ref={sectionRef} id="location" className="py-20 lg:py-28 bg-white text-[#1C1B18] relative overflow-hidden border-t border-[#E8E2D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[#8A7A62] text-xs tracking-[0.2em] uppercase font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>GOOGLE BUSINESS LOCATION</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1B18]">
              Visit SRK Interiors
            </h2>
          </div>

          {/* Switcher */}
          <div className="flex items-center gap-2 bg-[#EAE5DA] border border-[#E0D8C8] p-1 rounded-full shrink-0">
            <button
              onClick={() => setActiveTab("map")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                activeTab === "map"
                  ? "bg-[#C9A84C] text-[#141311] font-semibold shadow-sm"
                  : "text-[#4A4540] hover:text-[#1C1B18]"
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Google Map</span>
            </button>
            <button
              onClick={() => setActiveTab("panorama")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                activeTab === "panorama"
                  ? "bg-[#C9A84C] text-[#141311] font-semibold shadow-sm"
                  : "text-[#4A4540] hover:text-[#1C1B18]"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Studio View</span>
            </button>
          </div>
        </div>

        {/* Studio Meta Card + Map Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Studio Meta Card */}
          <div className="lg:col-span-4 bg-white border border-[#EAE4D8] p-8 rounded-xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#9A7A3A] text-xs font-mono tracking-wider uppercase">
                <MapPin className="w-4 h-4" />
                <span>Chintamani Studio</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1C1B18]">SRK Interiors</h3>
              <p className="text-xs text-[#4A4540] font-sans leading-relaxed">
                {SRK_BUSINESS.fullAddress}
              </p>

              <div className="pt-4 border-t border-[#F2EDE4] space-y-2 text-xs text-[#5A5448]">
                <p><strong className="text-[#1C1B18]">Hours:</strong> {SRK_BUSINESS.openingHours}</p>
                <p><strong className="text-[#1C1B18]">Phone:</strong> {SRK_BUSINESS.phoneDisplay}</p>
                <p><strong className="text-[#1C1B18]">Rating:</strong> 5.0 ★ (30 Google Reviews)</p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#F2EDE4]">
              <a
                href={SRK_BUSINESS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#C9A84C] text-[#141311] font-medium text-xs tracking-wider uppercase rounded-full flex items-center justify-center gap-2 hover:bg-[#B89230] transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                Get Driving Directions
              </a>

              <a
                href={`tel:${SRK_BUSINESS.phone}`}
                className="w-full py-3 border border-[#E0D8C8] text-[#1C1B18] hover:border-[#C9A84C] text-xs tracking-wider uppercase rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#9A7A3A]" />
                Call Studio Desk
              </a>
            </div>
          </div>

          {/* Map / Studio Frame */}
          <div className="lg:col-span-8 relative h-[420px] lg:h-[500px] overflow-hidden border border-[#EAE4D8] rounded-xl shadow-sm bg-white">
            {activeTab === "map" ? (
              isInView ? (
                <iframe
                  title="SRK Interiors Real Google Maps Location in Chintamani"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-white flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <MapPin className="w-8 h-8 text-[#C9A84C] animate-pulse" />
                  <p className="text-sm font-serif text-[#1C1B18]">Loading SRK Interiors Location Map...</p>
                </div>
              )
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src="/images/hero-living.jpg"
                  alt="SRK Interiors Studio Workmanship Preview"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/80 via-[#141311]/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3 text-white">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-[#141311] flex items-center justify-center shadow-lg">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#FAF8F5]">Studio &amp; Material Showcase</h4>
                  <p className="text-xs text-[#D8D2C6] font-sans max-w-md">
                    Inspect physical material boards, fluted wood samples, and hardware drawers at our Chelur Road studio in Chintamani.
                  </p>
                  <a
                    href={SRK_BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-[#C9A84C] text-[#141311] font-semibold text-xs tracking-wider uppercase rounded-full shadow-md"
                  >
                    Open Google Maps Street View
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
