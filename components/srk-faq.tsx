"use client";

import React from "react";
import { SRK_FAQS, SRK_BUSINESS } from "@/lib/srk-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, Phone } from "lucide-react";

export function SRKFAQ() {
  return (
    <section id="faq" className="py-24 bg-[#0E0E0E] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C2A15B] font-semibold">
              Clear Answers
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400">
              No Ambiguity
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto leading-relaxed">
            Everything you need to know about working with SRK Interiors, from site measurements and
            material choices to timelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="bg-neutral-900/40 border border-neutral-800 p-6 sm:p-8">
          <Accordion type="single" collapsible defaultValue="faq-1" className="space-y-4">
            {SRK_FAQS.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-neutral-800/80 last:border-b-0 pb-4"
              >
                <AccordionTrigger className="text-left font-serif text-lg sm:text-xl text-neutral-100 hover:text-[#C2A15B] py-3 tracking-wide">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-300 text-xs sm:text-sm leading-relaxed pt-1 pb-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Have more questions banner */}
        <div className="mt-12 text-center p-6 bg-neutral-900/80 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="font-medium text-white text-sm">Have a specific question?</div>
            <div className="text-xs text-neutral-400">
              Speak directly with Shariq for site-specific advice.
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SRK_BUSINESS.phone}`}
              className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-xs uppercase tracking-wider text-neutral-200 hover:text-white flex items-center gap-2 border border-neutral-700"
            >
              <Phone className="w-3.5 h-3.5 text-[#C2A15B]" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${SRK_BUSINESS.whatsapp}?text=${encodeURIComponent(
                "Hello Shariq, I have a question regarding an interior project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-xs uppercase tracking-wider text-white flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
