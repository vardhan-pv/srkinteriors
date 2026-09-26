"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface GalleryProject {
  src: string;
  title: string;
  category: string;
  filterGroup: "LIVING ROOM" | "BEDROOM" | "KITCHEN & STORAGE" | "FALSE CEILING" | "WOODWORK & DETAILS";
  location: string;
}

const GALLERY_PROJECTS: GalleryProject[] = [
  {
    src: "/images1/IMG_6233.JPG.jpeg",
    title: "Geometric False Ceiling & COB Lighting",
    category: "FALSE CEILING",
    filterGroup: "FALSE CEILING",
    location: "CHINTAMANI",
  },
  {
    src: "/images1/IMG_5953.JPG.jpeg",
    title: "Marble Accent Bedroom Suite",
    category: "BEDROOM",
    filterGroup: "BEDROOM",
    location: "CHINTAMANI",
  },
  {
    src: "/images1/IMG_5974.JPG.jpeg",
    title: "Granite & Teak TV Unit",
    category: "LIVING ROOM",
    filterGroup: "LIVING ROOM",
    location: "KARNATAKA",
  },
  {
    src: "/images1/IMG_5965.JPG.jpeg",
    title: "Full Wardrobe & Floor-to-Ceiling Storage",
    category: "WARDROBE",
    filterGroup: "KITCHEN & STORAGE",
    location: "CHINTAMANI",
  },
  {
    src: "/images1/IMG_5961.JPG.jpeg",
    title: "Teak Wood Staircase Panelling",
    category: "WOOD WORK",
    filterGroup: "WOODWORK & DETAILS",
    location: "KARNATAKA",
  },
  {
    src: "/images1/IMG_5978.JPG.jpeg",
    title: "Dark Granite Platform Bed Design",
    category: "BEDROOM",
    filterGroup: "BEDROOM",
    location: "CHINTAMANI",
  },
  {
    src: "/images1/IMG_5982.JPG.jpeg",
    title: "Premium Marble Floor & Border Joinery",
    category: "FLOORING",
    filterGroup: "WOODWORK & DETAILS",
    location: "KARNATAKA",
  },
  {
    src: "/images1/IMG_5987.JPG.jpeg",
    title: "Custom Built-In Platform Bed & Headboard",
    category: "BEDROOM",
    filterGroup: "BEDROOM",
    location: "CHINTAMANI",
  },
  {
    src: "/images1/google-work-1.jpg",
    title: "Vertical Living Room Wall Storage Unit",
    category: "LIVING ROOM",
    filterGroup: "LIVING ROOM",
    location: "CHINTAMANI SITE",
  },
  {
    src: "/images1/google-work-3.jpg",
    title: "Executive Desk & Custom Wall Storage",
    category: "COMMERCIAL",
    filterGroup: "WOODWORK & DETAILS",
    location: "CHINTAMANI SITE",
  },
  {
    src: "/images1/google-work-6.jpg",
    title: "Architectural Hardwood Framing & Joinery",
    category: "WOOD WORK",
    filterGroup: "WOODWORK & DETAILS",
    location: "KARNATAKA SITE",
  },
  {
    src: "/images1/google-work-7.jpg",
    title: "Open Dining & Hall Divider Partition",
    category: "LIVING ROOM",
    filterGroup: "LIVING ROOM",
    location: "CHINTAMANI SITE",
  },
  {
    src: "/images1/google-work-8.jpg",
    title: "BWP Modular Storage Cabinetry",
    category: "STORAGE",
    filterGroup: "KITCHEN & STORAGE",
    location: "CHINTAMANI SITE",
  },
  {
    src: "/images1/google-work-9.jpg",
    title: "Geometric Perimeter Cove False Ceiling",
    category: "FALSE CEILING",
    filterGroup: "FALSE CEILING",
    location: "CHINTAMANI SITE",
  },
  {
    src: "/images1/google-work-10.jpg",
    title: "Full Turnkey Living Room Interior",
    category: "FULL TURNKEY",
    filterGroup: "LIVING ROOM",
    location: "KARNATAKA SITE",
  },
  {
    src: "/images1/google-work-11.jpg",
    title: "Acrylic Finish Modular Kitchen Layout",
    category: "KITCHEN",
    filterGroup: "KITCHEN & STORAGE",
    location: "CHINTAMANI SITE",
  },
  {
    src: "/images1/google-work-12.jpg",
    title: "Illuminated Display Cabinet & Panelling",
    category: "WOOD WORK",
    filterGroup: "WOODWORK & DETAILS",
    location: "KARNATAKA SITE",
  },
  {
    src: "/images1/google-work-13.jpg",
    title: "Modern Apartment Interior Architecture",
    category: "RESIDENTIAL",
    filterGroup: "LIVING ROOM",
    location: "CHINTAMANI SITE",
  },
  {
    src: "/images1/WhatsApp Image 2026-09-25 at 10.28.46 AM.jpeg",
    title: "Ambient Wallpaper & Lighting Ambience",
    category: "FALSE CEILING",
    filterGroup: "FALSE CEILING",
    location: "CHINTAMANI",
  },
  {
    src: "/images1/WhatsApp Image 2026-09-25 at 10.28.46 AM (1).jpeg",
    title: "Bespoke Master Suite Wardrobe & Vanity",
    category: "WARDROBE",
    filterGroup: "KITCHEN & STORAGE",
    location: "CHINTAMANI",
  },
];

const FILTER_TAB_OPTIONS = [
  "ALL",
  "LIVING ROOM",
  "BEDROOM",
  "KITCHEN & STORAGE",
  "FALSE CEILING",
  "WOODWORK & DETAILS",
] as const;

export function SRKGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") return GALLERY_PROJECTS;
    return GALLERY_PROJECTS.filter((p) => p.filterGroup === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filteredProjects.length : null));
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + filteredProjects.length) % filteredProjects.length : null));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredProjects.length]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAFAF8] text-[#1C1B18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[#8A7A62] text-[11px] sm:text-xs tracking-[0.18em] uppercase font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>ON-SITE PORTFOLIO ({GALLERY_PROJECTS.length} EXCLUSIVE IMAGES)</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-[-0.015em] text-[#1C1B18]">
              Our Complete Gallery
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-medium tracking-wide text-[#9A7A3A] hover:text-[#1C1B18] transition-colors"
          >
            <span>Book Custom Consultation ↗</span>
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {FILTER_TAB_OPTIONS.map((tab) => {
            const count =
              tab === "ALL"
                ? GALLERY_PROJECTS.length
                : GALLERY_PROJECTS.filter((p) => p.filterGroup === tab).length;
            const isActive = activeFilter === tab;

            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveFilter(tab);
                  setSelectedIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-sans font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 border cursor-pointer ${isActive
                    ? "bg-[#1C1B18] text-[#FAF8F5] border-[#1C1B18] shadow-sm"
                    : "bg-white text-[#5A5448] border-[#EAE4D8] hover:border-[#C9A84C] hover:text-[#1C1B18]"
                  }`}
              >
                {tab} ({count})
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              key={item.src}
              onClick={() => setSelectedIndex(idx)}
              className="bg-white border border-[#EAE4D8] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative w-full h-[240px] overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Card Footer */}
              <div className="p-5 flex items-center justify-between border-t border-[#F2EDE4] gap-3">
                <div className="min-w-0">
                  <h3 className="font-serif text-base text-[#1C1B18] font-medium truncate">{item.title}</h3>
                  <p className="text-[10px] font-mono tracking-widest text-[#8A7A62] uppercase mt-0.5 truncate">
                    {item.category} &bull; {item.location}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#EDE7D8] text-[#1C1B18] flex items-center justify-center group-hover:bg-[#C9A84C] group-hover:text-[#141311] transition-colors shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && filteredProjects[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#141311]/96 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 text-[#FAF8F5]"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10 max-w-7xl mx-auto w-full">
              <div className="text-xs font-mono tracking-widest text-[#C9A84C] uppercase">
                {selectedIndex + 1} / {filteredProjects.length} — SRK Interiors Gallery
              </div>
              <button
                onClick={() => setSelectedIndex(null)}
                className="p-3 text-[#FAF8F5] hover:text-[#C9A84C] rounded-full focus:outline-none cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Central Image */}
            <div className="relative flex-1 max-w-6xl mx-auto w-full my-4 flex items-center justify-center">
              <div className="relative w-full h-full max-h-[75vh]">
                <Image
                  src={filteredProjects[selectedIndex].src}
                  alt={filteredProjects[selectedIndex].title}
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>

              <button
                onClick={() => setSelectedIndex((selectedIndex - 1 + filteredProjects.length) % filteredProjects.length)}
                className="absolute left-2 sm:left-4 p-3 rounded-full bg-[#1F1D1A] border border-[#332F2A] text-[#FAF8F5] hover:bg-[#C9A84C] hover:text-[#141311] transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => setSelectedIndex((selectedIndex + 1) % filteredProjects.length)}
                className="absolute right-2 sm:right-4 p-3 rounded-full bg-[#1F1D1A] border border-[#332F2A] text-[#FAF8F5] hover:bg-[#C9A84C] hover:text-[#141311] transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="max-w-2xl mx-auto text-center space-y-1">
              <p className="font-serif text-xl sm:text-2xl text-[#FAF8F5]">{filteredProjects[selectedIndex].title}</p>
              <p className="text-xs font-mono tracking-widest text-[#C9A84C] uppercase">
                {filteredProjects[selectedIndex].category} &bull; {filteredProjects[selectedIndex].location}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
