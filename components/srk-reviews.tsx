"use client";

import { useState, useRef, useEffect } from "react";
import { SRK_REVIEWS, SRK_BUSINESS } from "@/lib/srk-data";
import { Star, Quote, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export function SRKReviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToIdx = (idx: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 380;
    const gap = 24; // gap-6 = 24px
    const targetScroll = idx * (cardWidth + gap);
    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
    setActiveIdx(idx);
  };

  const handleNext = () => {
    const nextIdx = (activeIdx + 1) % SRK_REVIEWS.length;
    scrollToIdx(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIdx - 1 + SRK_REVIEWS.length) % SRK_REVIEWS.length;
    scrollToIdx(prevIdx);
  };

  // Auto horizontal scrolling one by one every 3.5 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [activeIdx, isHovered]);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAFAF8] text-[#1C1B18] relative overflow-hidden border-t border-[#E8E2D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[#8A7A62] text-xs tracking-[0.2em] uppercase font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1B18]">
              What Our Clients Say
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SRK_BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#8A795E] hover:text-[#1C1B18] transition-colors mr-2 hidden sm:inline-flex"
            >
              <span>View All Testimonials on Google Maps</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Review"
                className="w-10 h-10 rounded-full border border-[#EAE4D8] bg-white flex items-center justify-center text-[#1C1B18] hover:bg-[#C9A84C] hover:border-[#C9A84C] hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Review"
                className="w-10 h-10 rounded-full border border-[#EAE4D8] bg-white flex items-center justify-center text-[#1C1B18] hover:bg-[#C9A84C] hover:border-[#C9A84C] hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Container */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-1 no-scrollbar select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SRK_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="min-w-[280px] sm:min-w-[360px] lg:min-w-[400px] max-w-[420px] shrink-0 snap-start bg-white border border-[#EAE4D8] p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#C9A84C]/60 transition-all duration-300 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Quote Graphic */}
                <Quote className="w-8 h-8 text-[#E6DEC8] rotate-180" />

                {/* Review Quote Text */}
                <p className="text-xs sm:text-sm text-[#3D3830] font-sans leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Customer Info & Stars (No Profile Photo) */}
              <div className="pt-4 border-t border-[#F2EDE4] flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-sm sm:text-base text-[#1C1B18] font-semibold">{review.name}</h4>
                  <p className="text-[11px] text-[#7A6E5D] font-sans line-clamp-1">{review.role}</p>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center text-[#C9A84C] shrink-0 gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A84C] text-[#C9A84C]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Pagination Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {SRK_REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIdx(idx)}
              aria-label={`Go to review ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIdx === idx ? "w-8 bg-[#C9A84C]" : "w-2 bg-[#E2DACB] hover:bg-[#C9A84C]/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
