"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SRK_BUSINESS } from "@/lib/srk-data";
import { ArrowRight, Star, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { SRKConsultationDialog } from "./srk-consultation-dialog";

const TYPING_PHRASES = [
  "for Modern Living",
  "for Luxury Villas",
  "crafted in Chintamani",
  "for Bespoke Spaces",
];

export function SRKHero() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("for Modern Living");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const currentPhrase = TYPING_PHRASES[phraseIdx % TYPING_PHRASES.length];
    const speed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
        if (displayedText.length - 1 === 0) {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % TYPING_PHRASES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIdx, isMounted]);

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#141311] text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Google Rating Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1F1D1A] border border-[#332F2A]"
            >
              <div className="flex items-center text-[#C9A84C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A84C]" />
                ))}
              </div>
              <span className="text-[11px] font-sans font-medium tracking-wider text-[#E8E2D5]">
                {SRK_BUSINESS.rating.toFixed(1)} ★ ({SRK_BUSINESS.reviewCount} Verified Google Reviews)
              </span>
            </motion.div>

            {/* Headline with Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 text-[#8A7A62] text-[11px] sm:text-xs tracking-[0.18em] uppercase font-mono font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Luxury Interior Design Studio • Chintamani</span>
              </div>

              <h1 className="font-serif text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[4.75rem] font-normal tracking-[-0.02em] text-[#FAF8F5] leading-[1.05] min-h-[2.2em] sm:min-h-[2.1em]">
                Elegant Interiors <br />
                <span className="italic font-light text-[#C9A84C] inline-flex items-center gap-1.5">
                  <span>{displayedText}</span>
                  <span className="inline-block w-[3px] h-[0.75em] bg-[#C9A84C] animate-cursor align-baseline" />
                </span>
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[15px] sm:text-base text-[#D8D2C6] font-sans leading-[1.7] max-w-xl"
            >
              Thoughtfully designed spaces that blend beauty, comfort and functionality for a better everyday life. Executed by <strong className="text-white font-medium">Shariq &amp; Team</strong> in Chintamani, Karnataka.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Primary CTA */}
              <button
                onClick={() => setDialogOpen(true)}
                className="group px-7 py-3.5 bg-[#C9A84C] hover:bg-[#B89230] text-[#141311] font-sans text-sm font-semibold tracking-[0.02em] rounded-full flex items-center gap-2.5 transition-colors active:scale-95 shadow-sm cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <a
                href="#gallery"
                className="px-6 py-3.5 border border-[#3A352F] text-[#FAF8F5] hover:border-[#C9A84C] hover:text-[#C9A84C] font-sans text-sm font-semibold tracking-[0.02em] rounded-full transition-colors flex items-center gap-2"
              >
                <span>View Our Projects ↗</span>
              </a>
            </motion.div>

            {/* Studio Pillars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#8A7A62] border-t border-[#26231F] font-sans"
            >
              <span>• Boiling Waterproof (BWP) Ply</span>
              <span>• Direct Studio Supervision</span>
              <span>• Zero Hidden Costs</span>
            </motion.div>
          </div>

          {/* Right Column: Editorial Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div
              className="relative w-full h-[380px] sm:h-[480px] lg:h-[520px] overflow-hidden border border-[#2A2722] shadow-2xl rounded-2xl"
            >
              <Image
                src="/images/hero-living.jpg"
                alt="SRK Interiors Residential Interior Design in Chintamani"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/70 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-[#1A1815]/95 backdrop-blur-md border border-[#332F2A] p-4 rounded-xl shadow-xl flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-[#C9A84C] fill-[#C9A84C]" />
                </div>
                <div>
                  <p className="font-serif text-sm text-[#FAF8F5] font-medium">SRK Interiors Studio</p>
                  <p className="text-[11px] text-[#8A7A62] font-sans">3rd Cross, Chelur Rd, Chintamani</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <SRKConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
}
