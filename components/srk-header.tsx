"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SRKBrandEmblem } from "./srk-brand-logo";
import { SRK_BUSINESS } from "@/lib/srk-data";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SRKConsultationDialog } from "./srk-consultation-dialog";

export function SRKHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#gallery" },
    { label: "Transformations", href: "#transformations" },
    { label: "Testimonials", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Dark Integrated Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3.5 bg-[#141311]/95 backdrop-blur-md border-b border-[#2A2722] shadow-md"
            : "py-5 bg-gradient-to-b from-[#141311]/90 via-[#141311]/40 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Brand Logo */}
          <Link href="#hero" className="flex items-center gap-3 group focus:outline-none">
            <SRKBrandEmblem size={scrolled ? 34 : 38} className="text-[#C9A84C] transition-all duration-300" />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-normal tracking-wide text-[#FAF8F5] group-hover:text-[#C9A84C] transition-colors">
                {SRK_BUSINESS.name}
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#8A7A62] font-sans">
                STUDIO • CHINTAMANI
              </span>
            </div>
          </Link>

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-sans text-sm font-medium tracking-[0.01em] text-[#D8D2C6] hover:text-[#C9A84C] transition-colors relative py-1 focus:outline-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setDialogOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A84C] text-[#141311] font-sans text-sm font-semibold tracking-[0.02em] rounded-full hover:bg-[#B89230] transition-colors shadow-sm active:scale-95 cursor-pointer"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setDialogOpen(true)}
              className="px-3.5 py-1.5 bg-[#C9A84C] text-[#141311] font-sans text-xs font-semibold tracking-[0.02em] rounded-full cursor-pointer"
            >
              Consultation
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-[#FAF8F5] hover:text-[#C9A84C] rounded-full focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#141311]/98 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-6 border-b border-[#2A2722]">
                <SRKBrandEmblem size={38} className="text-[#C9A84C]" />
                <div>
                  <p className="font-serif text-lg text-[#FAF8F5]">{SRK_BUSINESS.name}</p>
                  <p className="text-[11px] text-[#8A7A62]">{SRK_BUSINESS.tagline}</p>
                </div>
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-serif tracking-wide text-[#FAF8F5] hover:text-[#C9A84C] flex items-center justify-between py-2 border-b border-[#2A2722]"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#C9A84C]" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#2A2722]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDialogOpen(true);
                }}
                className="w-full py-3.5 bg-[#C9A84C] text-[#141311] font-medium text-xs tracking-widest uppercase rounded-full flex items-center justify-center gap-2"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${SRK_BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 border border-[#C9A84C]/40 text-[#C9A84C] text-xs tracking-wider uppercase rounded-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SRKConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
