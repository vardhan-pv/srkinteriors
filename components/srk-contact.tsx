"use client";

import { useState } from "react";
import { SRK_BUSINESS } from "@/lib/srk-data";
import { Phone, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { SRKConsultationDialog } from "./srk-consultation-dialog";

export function SRKContact() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id="contact" className="bg-[#141311] text-[#FAF8F5] py-12 lg:py-16 border-t border-[#2A2722]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Alora Interiors Style Dark Contact Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Title */}
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#9C8C74] uppercase font-medium">
              GET IN TOUCH
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FAF8F5] font-normal">
              Let&apos;s Create Your Dream Space
            </h2>
          </div>

          {/* Center Contact Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-sans">
            
            {/* Phone */}
            <a
              href={`tel:${SRK_BUSINESS.phone}`}
              className="flex items-center gap-3 text-[#D8D2C6] hover:text-[#C9A84C] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#24211D] border border-[#3A352F] flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-[#141311] transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="font-medium text-[#FAF8F5]">Call Us</p>
                <p className="text-xs text-[#9C8C74] font-sans tabular-nums">{SRK_BUSINESS.phoneDisplay}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${SRK_BUSINESS.whatsapp}?text=${encodeURIComponent("Hello SRK Interiors, I am interested in interior design services in Chintamani.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#D8D2C6] hover:text-[#25D366] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#24211D] border border-[#3A352F] flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="font-medium text-[#FAF8F5]">WhatsApp</p>
                <p className="text-xs text-[#9C8C74] font-sans">Chat with us instantly</p>
              </div>
            </a>

            {/* Visit Studio */}
            <a
              href={SRK_BUSINESS.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#D8D2C6] hover:text-[#C9A84C] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#24211D] border border-[#3A352F] flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-[#141311] transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="font-medium text-[#FAF8F5]">Visit Our Studio</p>
                <p className="text-xs text-[#9C8C74] font-sans">Chelur Rd, Chintamani</p>
              </div>
            </a>

          </div>

          {/* Right CTA Button */}
          <button
            onClick={() => setDialogOpen(true)}
            className="px-6 py-3 bg-[#C9A84C] hover:bg-[#B89230] text-[#141311] font-sans text-sm font-semibold tracking-[0.02em] rounded-full flex items-center gap-2 transition-colors shadow-sm shrink-0 cursor-pointer"
          >
            <span>Book Free Consultation →</span>
          </button>

        </div>

      </div>

      <SRKConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
}
