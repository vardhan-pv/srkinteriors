"use client";

import Link from "next/link";
import { SRKBrandEmblem } from "./srk-brand-logo";
import { SRK_BUSINESS } from "@/lib/srk-data";
import { MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react";

export function SRKFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E0D0B] text-[#FAF8F5] border-t border-[#26231F] pt-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <SRKBrandEmblem size={38} className="text-[#C9A84C]" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-normal tracking-wide text-[#FAF8F5] group-hover:text-[#C9A84C] transition-colors">
                  {SRK_BUSINESS.name}
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#8A7A62] font-sans">
                  Interior Designers in Chintamani
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#A8A296] font-sans leading-relaxed max-w-sm">
              Custom home interiors, modular kitchens, and complete interior solutions designed around your space, lifestyle, and requirements in Chintamani and Karnataka.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-[#8A7A62] pt-1">
              <span>5.0 ★ Google Rating</span>
              <span className="w-1 h-1 rounded-full bg-[#8A7A62]" />
              <span>30 Verified Client Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-medium tracking-widest text-[#C9A84C] uppercase">Quick Links</h4>
            <ul className="space-y-2 text-xs font-sans text-[#A8A296]">
              <li><Link href="/" className="hover:text-[#FAF8F5] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#FAF8F5] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#FAF8F5] transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-[#FAF8F5] transition-colors">Projects</Link></li>
              <li><Link href="/transformations" className="hover:text-[#FAF8F5] transition-colors">Transformations</Link></li>
              <li><Link href="/contact" className="hover:text-[#FAF8F5] transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-[#FAF8F5] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-medium tracking-widest text-[#C9A84C] uppercase">Chintamani Studio</h4>
            <div className="space-y-2.5 text-xs font-sans text-[#A8A296]">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                <span>{SRK_BUSINESS.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A84C] shrink-0" />
                <span>{SRK_BUSINESS.phoneDisplay}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${SRK_BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 underline">
                  WhatsApp: +91 70195 49295
                </a>
              </p>
              <p className="pt-1">
                <a
                  href={SRK_BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#C9A84C] hover:text-[#FAF8F5] uppercase font-mono text-[11px]"
                >
                  <span>Google Maps Listing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#26231F] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8C867B] font-sans gap-4">
          <p>© {currentYear} {SRK_BUSINESS.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#FAF8F5] transition-colors">Privacy Policy</Link>
            <a href={SRK_BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#FAF8F5] transition-colors">Google Maps</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
