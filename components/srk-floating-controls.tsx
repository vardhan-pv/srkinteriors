"use client";

import { SRK_BUSINESS } from "@/lib/srk-data";
import { Phone } from "lucide-react";

export function SRKFloatingControls() {
  return (
    <div
      className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3.5 pointer-events-auto"
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      {/* 1. Phone / Call Button (Top in Vertical Stack) */}
      <a
        href={`tel:${SRK_BUSINESS.phone}`}
        className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-[#171512] border border-[#C2A15B]/40 text-[#C2A15B] shadow-2xl flex items-center justify-center hover:bg-[#C2A15B] hover:text-stone-950 transition-all hover:scale-105 active:scale-95 group relative focus:outline-none"
        aria-label="Call SRK Interiors Studio"
        title="Call Shariq: +91 70195 49295"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />

        {/* Desktop Hover Tooltip */}
        <span className="hidden md:group-hover:block absolute right-full mr-3 bg-[#171512] text-amber-100 border border-[#C2A15B]/30 px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase whitespace-nowrap shadow-xl">
          Call +91 70195 49295
        </span>
      </a>

      {/* 2. Official WhatsApp Icon Button (Bottom in Vertical Stack) */}
      <a
        href={`https://wa.me/${SRK_BUSINESS.whatsapp}?text=${encodeURIComponent("Hello SRK Interiors, I am interested in interior design services in Chintamani.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:bg-[#20ba59] transition-all hover:scale-105 active:scale-95 group relative focus:outline-none"
        aria-label="Chat with SRK Interiors on WhatsApp"
        title="Chat on WhatsApp"
      >
        {/* Official WhatsApp Logo SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 md:w-7 md:h-7 text-white"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.81 9.81 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.42c-1.44 0-2.86-.38-4.11-1.12l-.3-.18-3.05.8.81-2.97-.2-.31a8.21 8.21 0 0 1-1.26-4.46c0-4.54 3.7-8.24 8.24-8.24zm-3.52 4.09c-.19 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.07 3.29 5.09 4.51.72.3 1.28.48 1.72.61.73.22 1.39.19 1.91.11.58-.09 1.79-.73 2.04-1.44.25-.71.25-1.32.17-1.44-.07-.12-.27-.19-.57-.34-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.77.98-.94 1.18-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.51-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.28.3-.47.1-.19.05-.36-.02-.51-.07-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52-.18-.01-.39-.01-.59-.01z" />
        </svg>

        {/* Desktop Hover Tooltip */}
        <span className="hidden md:group-hover:block absolute right-full mr-3 bg-[#171512] text-emerald-300 border border-[#25D366]/30 px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase whitespace-nowrap shadow-xl">
          WhatsApp Chat
        </span>
      </a>
    </div>
  );
}
