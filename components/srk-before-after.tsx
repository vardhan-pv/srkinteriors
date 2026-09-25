"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useInView } from "motion/react";
import { MoveHorizontal, Sparkles } from "lucide-react";

interface TransformationPair {
  id: string;
  title: string;
  category: string;
  location: string;
  beforeImg: string;
  afterImg: string;
  description: string;
}

const TRANSFORMATIONS: TransformationPair[] = [
  {
    id: "proj-1",
    title: "Project 01 — Modern Living Room Transformation",
    category: "Full Living Room Turnkey",
    location: "Chintamani Site",
    beforeImg: "/images/before-living.jpg",
    afterImg: "/images/after-living.jpg",
    description: "Complete living room makeover featuring custom wood panelling, architectural false ceiling lighting, marble flooring, and luxury seating.",
  },
  {
    id: "proj-2",
    title: "Project 02 — Modular Kitchen Transformation",
    category: "Kitchen & Cabinetry",
    location: "Karnataka Site",
    beforeImg: "/images/before-kitchen.jpg",
    afterImg: "/images/after-kitchen.jpg",
    description: "Transformation of raw kitchen space into a high-gloss modular kitchen with seamless acrylic cabinets, stone countertop, and soft-close hardware.",
  },
];


export function SRKBeforeAfter() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const hasDemonstrated = useRef(false);

  useEffect(() => {
    if (isInView && !hasDemonstrated.current) {
      hasDemonstrated.current = true;
      const start = 50;
      const target = 62;
      let frame = 0;
      const totalFrames = 30;

      const animateOnce = () => {
        frame++;
        const progress = frame / totalFrames;
        const current = start + (target - start) * Math.sin((progress * Math.PI) / 2);
        setSliderPos(current);

        if (frame < totalFrames) {
          requestAnimationFrame(animateOnce);
        } else {
          setTimeout(() => {
            setSliderPos(50);
          }, 400);
        }
      };

      setTimeout(() => {
        requestAnimationFrame(animateOnce);
      }, 300);
    }
  }, [isInView]);

  const activePair = TRANSFORMATIONS[activeIdx];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 3) percentage = 3;
    if (percentage > 97) percentage = 97;
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleGlobalMouseMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [isDragging]);

  return (
    <section
      id="transformations"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white text-[#181713] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-12">
          <div className="inline-flex items-center gap-2 text-[#8A7A62] text-xs tracking-[0.2em] uppercase font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>REAL TRANSFORMATIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181713]">
            See the Transformation
          </h2>
          <p className="text-sm sm:text-base text-[#4A4540] font-sans leading-relaxed">
            Explore how spaces change from unfinished or existing interiors into completed SRK Interiors projects.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Main Slider Container */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[360px] sm:h-[480px] lg:h-[540px] overflow-hidden select-none cursor-ew-resize border border-[#E8E2D6] rounded-2xl shadow-md bg-white"
          >
            {/* BEFORE Image (Underneath) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={activePair.beforeImg}
                alt={`${activePair.title} Before Transformation`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
              <div className="absolute top-4 left-4 bg-[#141311]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-[11px] font-mono tracking-widest text-[#FAF8F5] uppercase shadow-sm">
                BEFORE
              </div>
            </div>

            {/* AFTER Image (Overlaid with Clip Path) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
              }}
            >
              <Image
                src={activePair.afterImg}
                alt={`${activePair.title} After SRK Interiors`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
              <div className="absolute top-4 right-4 bg-[#C9A84C] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/40 text-[11px] font-mono font-medium tracking-widest text-[#141311] uppercase shadow-sm">
                AFTER SRK
              </div>
            </div>

            {/* Vertical Divider Handle Line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#C9A84C] z-10 shadow-lg"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#C9A84C] text-[#141311] border-2 border-white flex items-center justify-center shadow-md">
                <MoveHorizontal className="w-4 h-4" />
              </div>
            </div>

            {/* Instruction Pill */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#141311]/80 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[11px] font-sans text-[#FAF8F5] pointer-events-none flex items-center gap-2">
              <MoveHorizontal className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Drag or tap to compare transformation</span>
            </div>
          </div>

          {/* Project Details & Selection Thumbnails */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-serif text-xl text-[#181713]">{activePair.title}</h3>
              <p className="text-xs text-[#4A4540] font-sans max-w-lg">{activePair.description}</p>
            </div>

            {/* Selector Tabs */}
            <div className="flex items-center gap-3">
              {TRANSFORMATIONS.map((pair, idx) => (
                <button
                  key={pair.id}
                  onClick={() => {
                    setActiveIdx(idx);
                    setSliderPos(50);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all border ${
                    activeIdx === idx
                      ? "bg-[#C9A84C] text-[#141311] border-[#C9A84C] shadow-sm"
                      : "bg-[#EDE7D8] text-[#4A4540] border-[#E0D9CB] hover:text-[#181713]"
                  }`}
                >
                  Project 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
