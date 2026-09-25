"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function SRKGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const projects = [
    {
      src: "/images1/IMG_6233.JPG.jpeg",
      title: "False Ceiling & LED Design",
      category: "FALSE CEILING",
      location: "CHINTAMANI",
    },
    {
      src: "/images1/IMG_5953.JPG.jpeg",
      title: "Marble Bedroom Suite",
      category: "BEDROOM",
      location: "CHINTAMANI",
    },
    {
      src: "/images1/IMG_5974.JPG.jpeg",
      title: "Granite & Teak TV Unit",
      category: "LIVING ROOM",
      location: "KARNATAKA",
    },
    {
      src: "/images1/IMG_5965.JPG.jpeg",
      title: "Full Wardrobe & Storage",
      category: "WARDROBE",
      location: "CHINTAMANI",
    },
    {
      src: "/images1/IMG_5961.JPG.jpeg",
      title: "Teak Wood Staircase Panel",
      category: "WOOD WORK",
      location: "KARNATAKA",
    },
    {
      src: "/images1/IMG_5978.JPG.jpeg",
      title: "Dark Granite Platform Bed",
      category: "BEDROOM",
      location: "CHINTAMANI",
    },
    {
      src: "/images1/IMG_5982.JPG.jpeg",
      title: "Premium Marble Flooring",
      category: "FLOORING",
      location: "KARNATAKA",
    },
    {
      src: "/images1/IMG_5987.JPG.jpeg",
      title: "Built-In Platform Bed",
      category: "BEDROOM",
      location: "CHINTAMANI",
    },
    {
      src: "/images1/google-work-2.jpg",
      title: "Vertical Living Room Wall Unit",
      category: "LIVING ROOM",
      location: "CHINTAMANI SITE",
    },
    {
      src: "/images1/google-work-4.jpg",
      title: "Teak & Marble Wall Cladding",
      category: "WALL PANELS",
      location: "CHINTAMANI SITE",
    },
    {
      src: "/images1/google-work-5.jpg",
      title: "Master Suite & Wardrobe Partition",
      category: "BEDROOM",
      location: "CHINTAMANI SITE",
    },
    {
      src: "/images1/google-work-6.jpg",
      title: "Architectural Wood Joinery",
      category: "WOOD WORK",
      location: "KARNATAKA SITE",
    },
    {
      src: "/images1/google-work-7.jpg",
      title: "Open Dining & Hall Partition",
      category: "LIVING ROOM",
      location: "CHINTAMANI SITE",
    },
    {
      src: "/images1/google-work-8.jpg",
      title: "BWP Modular Storage Cabinetry",
      category: "STORAGE",
      location: "CHINTAMANI SITE",
    },
    {
      src: "/images1/google-work-9.jpg",
      title: "Geometric Cove False Ceiling",
      category: "FALSE CEILING",
      location: "CHINTAMANI SITE",
    },
    {
      src: "/images1/google-work-10.jpg",
      title: "Full Turnkey Living Interior",
      category: "FULL TURNKEY",
      location: "KARNATAKA SITE",
    },
    {
      src: "/images1/google-work-11.jpg",
      title: "Acrylic Finish Modular Kitchen",
      category: "KITCHEN",
      location: "CHINTAMANI SITE",
    },
    {
      src: "/images1/google-work-13.jpg",
      title: "Modern Apartment Interior",
      category: "RESIDENTIAL",
      location: "CHINTAMANI SITE",
    },
    {
      src: "/images1/1.jpg",
      title: "Chintamani Site On-Location Work",
      category: "TURNKEY",
      location: "CHINTAMANI SITE",
    },
    {
      src: "/images1/WhatsApp Image 2026-09-25 at 10.28.46 AM.jpeg",
      title: "Wallpaper & Ceiling Ambience",
      category: "FALSE CEILING",
      location: "CHINTAMANI",
    },
  ];


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev !== null ? (prev + 1) % projects.length : null));
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev !== null ? (prev - 1 + projects.length) % projects.length : null));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, projects.length]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAFAF8] text-[#1C1B18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[#8A7A62] text-[11px] sm:text-xs tracking-[0.18em] uppercase font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>FEATURED PROJECTS</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-[-0.015em] text-[#1C1B18]">
              Our Latest Projects
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-medium tracking-wide text-[#9A7A3A] hover:text-[#1C1B18] transition-colors"
          >
            <span>View All Projects ↗</span>
          </a>
        </div>

        {/* Alora-style Project Cards Grid (4 & 2 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((item, idx) => (
            <div
              key={item.title}
              onClick={() => setSelectedIndex(idx)}
              className="bg-white border border-[#EAE4D8] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative w-full h-[220px] overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>

              {/* Card Footer */}
              <div className="p-5 flex items-center justify-between border-t border-[#F2EDE4]">
                <div>
                  <h3 className="font-serif text-lg text-[#1C1B18] font-medium line-clamp-1">{item.title}</h3>
                  <p className="text-[10px] font-mono tracking-widest text-[#8A7A62] uppercase mt-0.5">
                    {item.category} &bull; {item.location}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#EDE7D8] text-[#1C1B18] flex items-center justify-center group-hover:bg-[#C9A84C] transition-colors shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#141311]/96 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 text-[#FAF8F5]"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <div className="text-xs font-mono tracking-widest text-[#C9A84C] uppercase">
                {selectedIndex + 1} / {projects.length} — SRK Portfolio
              </div>
              <button
                onClick={() => setSelectedIndex(null)}
                className="p-3 text-[#FAF8F5] hover:text-[#C9A84C] rounded-full focus:outline-none"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Central Image */}
            <div className="relative flex-1 max-w-6xl mx-auto w-full my-4 flex items-center justify-center">
              <div className="relative w-full h-full max-h-[75vh]">
                <Image
                  src={projects[selectedIndex].src}
                  alt={projects[selectedIndex].title}
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>

              <button
                onClick={() => setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length)}
                className="absolute left-2 sm:left-4 p-3 rounded-full bg-[#1F1D1A] border border-[#332F2A] text-[#FAF8F5] hover:bg-[#C9A84C] hover:text-[#141311] transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => setSelectedIndex((selectedIndex + 1) % projects.length)}
                className="absolute right-2 sm:right-4 p-3 rounded-full bg-[#1F1D1A] border border-[#332F2A] text-[#FAF8F5] hover:bg-[#C9A84C] hover:text-[#141311] transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="max-w-2xl mx-auto text-center space-y-1">
              <p className="font-serif text-xl text-[#FAF8F5]">{projects[selectedIndex].title}</p>
              <p className="text-xs font-mono tracking-widest text-[#C9A84C] uppercase">
                {projects[selectedIndex].category} &bull; {projects[selectedIndex].location}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
