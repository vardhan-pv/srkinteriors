"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, Phone, CheckCircle2 } from "lucide-react";
import { SRK_BUSINESS, formatWhatsAppUrl } from "@/lib/srk-data";

export function SRKWelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: "Full Home Interior",
    location: "Chintamani",
  });

  // Show popup after 2 seconds, only once per session
  useEffect(() => {
    const seen = sessionStorage.getItem("srk-popup-seen");
    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("srk-popup-seen", "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }
    const generatedRef = `SRK-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefId(generatedRef);
    const url = formatWhatsAppUrl({
      name: formData.name,
      phone: formData.phone,
      requirement: formData.requirement,
      location: formData.location,
      message: `[Ref: ${generatedRef}]`,
    });
    setWhatsAppUrl(url);
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    sessionStorage.setItem("srk-popup-seen", "1");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/55 backdrop-blur-[2px] z-[998]"
            onClick={handleClose}
          />
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 flex items-center justify-center z-[999] px-4"
          >
            <div className="relative w-full max-w-[440px] rounded-2xl overflow-hidden shadow-2xl bg-white">
              <button
                onClick={handleClose}
                aria-label="Close popup"
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative h-36 w-full overflow-hidden">
                <Image
                  src="/images1/IMG_6233.JPG.jpeg"
                  alt="SRK Interiors luxury ceiling work"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/55" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-lg leading-tight drop-shadow-md">
                    Transform Your Home
                  </p>
                  <p className="text-[#C9A84C] font-bold text-lg leading-tight drop-shadow-md">with SRK Interiors</p>
                  <p className="text-white/80 text-xs mt-0.5 drop-shadow">
                    Chintamani&apos;s trusted interior design studio
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white">
                {!submitted ? (
                  <>
                    <h2 className="font-serif text-xl text-[#1A1A18] mb-1">
                      Get a Free Consultation
                    </h2>
                    <p className="text-xs text-[#6B6560] mb-4">
                      Share your details — Shariq will call you back directly.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#5A5448] mb-1 font-semibold">
                          Your Name <span className="text-[#C9A84C]">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Ramesh Reddy"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border border-[#E0D8C8] rounded-lg px-3 h-10 text-sm text-[#1A1A18] placeholder:text-[#A89F90] focus:outline-none focus:border-[#C9A84C] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#5A5448] mb-1 font-semibold">
                          Phone / WhatsApp <span className="text-[#C9A84C]">*</span>
                        </label>
                        <div className="flex items-center border border-[#E0D8C8] rounded-lg overflow-hidden focus-within:border-[#C9A84C] transition">
                          <span className="flex items-center gap-1 px-3 text-sm text-[#1A1A18] border-r border-[#E0D8C8] bg-[#FAFAF8] h-10 shrink-0">
                            +91
                          </span>
                          <input
                            required
                            type="tel"
                            placeholder="98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="flex-1 px-3 h-10 text-sm text-[#1A1A18] placeholder:text-[#A89F90] focus:outline-none bg-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#5A5448] mb-1 font-semibold">
                          What do you need?
                        </label>
                        <select
                          value={formData.requirement}
                          onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                          aria-label="Interior requirement"
                          className="w-full border border-[#E0D8C8] rounded-lg px-3 h-10 text-sm text-[#1A1A18] bg-white focus:outline-none focus:border-[#C9A84C] transition"
                        >
                          <option value="Full Home Interior">Full Home Interior</option>
                          <option value="Modular Kitchen & Storage">Modular Kitchen &amp; Storage</option>
                          <option value="Living & False Ceiling">Living &amp; False Ceiling</option>
                          <option value="Master Bedroom & Wardrobes">Bedroom &amp; Wardrobes</option>
                          <option value="Commercial / Office / Hotel">Commercial / Office</option>
                          <option value="Turnkey Renovation">Turnkey Renovation</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="text-xs text-[#5A5448]">Send updates on WhatsApp</span>
                        <div className="w-10 h-5 bg-[#25D366] rounded-full flex items-center px-0.5">
                          <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm" />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#C9A84C] hover:bg-[#B89230] text-white font-bold text-sm h-11 rounded-lg flex items-center justify-center gap-2 transition-colors tracking-wide"
                      >
                        Book Free Consultation
                      </button>
                      <p className="text-[10px] text-[#9A9080] text-center leading-relaxed">
                        By submitting, you agree to be contacted by SRK Interiors via WhatsApp or phone.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-4 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-[#C9A84C] font-semibold">Ref: {refId}</p>
                      <h3 className="font-serif text-xl text-[#1A1A18] mt-1">Thank you, {formData.name}!</h3>
                      <p className="text-xs text-[#6B6560] mt-2 leading-relaxed">
                        Your enquiry is ready for Shariq. If WhatsApp did not open automatically, tap below.
                      </p>
                    </div>
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm h-11 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                      Open WhatsApp Chat
                    </a>
                    <div className="flex items-center gap-1.5 justify-center text-xs text-[#5A5448]">
                      <Phone className="w-3.5 h-3.5 text-[#C9A84C]" />
                      Or call: <a href={`tel:${SRK_BUSINESS.phone}`} className="text-[#C9A84C] font-semibold">{SRK_BUSINESS.phoneDisplay}</a>
                    </div>
                    <button onClick={handleClose} className="text-xs text-[#9A9080] underline underline-offset-2 hover:text-[#1A1A18] transition">
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
