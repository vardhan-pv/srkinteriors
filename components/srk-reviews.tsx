"use client";

import { SRK_REVIEWS, SRK_BUSINESS } from "@/lib/srk-data";
import { Star, Quote, ArrowRight, Sparkles } from "lucide-react";

export function SRKReviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAFAF8] text-[#1C1B18] relative overflow-hidden border-t border-[#E8E2D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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

          <a
            href={SRK_BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#8A795E] hover:text-[#1C1B18] transition-colors"
          >
            <span>View All Testimonials on Google Maps</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3-Column White Card Testimonial Grid (Floating Cards, No Avatars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SRK_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-[#EAE4D8] p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#C9A84C]/60 transition-all duration-300 space-y-6 flex flex-col justify-between"
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

      </div>
    </section>
  );
}
