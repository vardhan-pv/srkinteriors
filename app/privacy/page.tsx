import type { Metadata } from "next";
import Link from "next/link";
import { SRKBrandLogo } from "@/components/srk-brand-logo";
import { SRK_BUSINESS } from "@/lib/srk-data";
import { ArrowLeft, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | SRK Interiors, Chintamani",
  description: "Privacy policy and client data handling practices for SRK Interiors.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 flex flex-col justify-between selection:bg-[#C2A15B]/30">
      <header className="border-b border-neutral-800 bg-[#0A0A0A]/90 backdrop-blur-md sticky top-0 z-20 py-4 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/">
            <SRKBrandLogo size={36} showText={true} textColor="light" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-[#C2A15B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Studio Home</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 flex-1 w-full space-y-10">
        <div className="space-y-3 border-b border-neutral-800 pb-6">
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C2A15B]">
            Client Trust & Transparency
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-neutral-400">
            Last Updated: September 2026 • SRK Interiors, Chintamani
          </p>
        </div>

        <section className="space-y-4 text-sm text-neutral-300 leading-relaxed font-light">
          <p>
            At SRK Interiors, we value the trust of our clients. This document explains how we
            handle any information you provide when browsing our website or initiating a design
            enquiry.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-white pt-4 font-normal">
            1. Information Handled
          </h2>
          <p>
            When you request a design consultation through our website or direct WhatsApp links, we
            collect only basic details required to plan your interior:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-400 text-xs sm:text-sm">
            <li>Your name and contact phone / WhatsApp number</li>
            <li>Your property location or town (e.g. Chintamani, Kolar, Bengaluru)</li>
            <li>Your scope of interest (e.g. Full Home, Modular Kitchen, Commercial)</li>
            <li>Any optional notes or room measurements you choose to share</li>
          </ul>

          <h2 className="font-serif text-xl sm:text-2xl text-white pt-4 font-normal">
            2. Direct WhatsApp Communication (No Hidden Databases)
          </h2>
          <p>
            Our website does not store, sell, or monetize user data in private databases.
            Consultation requests are converted directly into client-side WhatsApp chats to connect
            you immediately with Shariq and our senior design team.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-white pt-4 font-normal">
            3. Zero Marketing Spam
          </h2>
          <p>
            We do not subscribe clients to automated promotional email blasts, SMS robocalls, or
            third-party marketing networks. All communication is one-on-one regarding your specific
            architectural interior scope.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-white pt-4 font-normal">
            4. External Services
          </h2>
          <p>
            When you click to call or open Google Maps directions, you interact directly with your
            device&apos;s phone dialer or Google Maps application under their respective privacy
            policies.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl text-white pt-4 font-normal">
            5. Studio Contact Information
          </h2>
          <div className="bg-neutral-900 border border-neutral-800 p-5 space-y-3 text-xs text-neutral-300">
            <div className="font-medium text-white text-sm">{SRK_BUSINESS.name}</div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#C2A15B] shrink-0 mt-0.5" />
              <span>{SRK_BUSINESS.fullAddress}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C2A15B] shrink-0" />
              <a
                href={`tel:${SRK_BUSINESS.phone}`}
                className="text-white hover:text-[#C2A15B] transition-colors"
              >
                {SRK_BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <div className="pt-6 border-t border-neutral-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C2A15B] hover:bg-[#b59247] text-neutral-950 font-semibold uppercase text-xs tracking-wider transition-colors"
          >
            <span>Return to SRK Interiors</span>
          </Link>
        </div>
      </main>

      <footer className="border-t border-neutral-900 py-6 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} SRK Interiors, Chintamani. All rights reserved.
      </footer>
    </div>
  );
}
