"use client";

import React from "react";
import { SRK_BUSINESS, formatWhatsAppUrl } from "@/lib/srk-data";
import { Phone, MessageSquare, MapPin } from "lucide-react";

export function SRKMobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* 1. Direct Call */}
        <a
          href={`tel:${SRK_BUSINESS.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-neutral-900 border border-neutral-800 active:bg-neutral-800 text-neutral-200 transition-colors"
          aria-label="Call SRK Interiors"
        >
          <Phone className="w-4 h-4 text-[#C2A15B] mb-1" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Call Studio</span>
        </a>

        {/* 2. Direct WhatsApp */}
        <a
          href={formatWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#25D366]/15 border border-[#25D366]/40 active:bg-[#25D366]/25 text-white transition-colors"
          aria-label="Chat with Shariq on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366] mb-1" />
          <span className="text-[10px] font-medium uppercase tracking-wider text-[#25D366]">
            WhatsApp
          </span>
        </a>

        {/* 3. Directions */}
        <a
          href={SRK_BUSINESS.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-neutral-900 border border-neutral-800 active:bg-neutral-800 text-neutral-200 transition-colors"
          aria-label="Get Directions to Chelur Road Studio"
        >
          <MapPin className="w-4 h-4 text-[#C2A15B] mb-1" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Directions</span>
        </a>
      </div>
    </div>
  );
}
