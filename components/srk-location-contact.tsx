"use client";

import React, { useState } from "react";
import { SRK_BUSINESS, formatWhatsAppUrl } from "@/lib/srk-data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Navigation,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export function SRKLocationContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: "Full Home Interior",
    location: "Chintamani",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");
  const [waLink, setWaLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please provide your name and phone number.");
      return;
    }

    const ref = `SRK-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefId(ref);

    const url = formatWhatsAppUrl({
      name: formData.name,
      phone: formData.phone,
      requirement: formData.requirement,
      location: formData.location,
      message: `${formData.message ? formData.message + " " : ""}[Ref: ${ref}]`,
    });

    setWaLink(url);
    setSubmitted(true);

    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Studio Location & Practical Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C2A15B] font-semibold">
                  Studio & Location
                </span>
                <span className="text-neutral-600">—</span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400">
                  Visit Us
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
                Drop by our studio on Chelur Road.
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We welcome homeowners and commercial clients to discuss floorplans, review wood
                samples, and plan projects in person.
              </p>
            </div>

            {/* Practical Information Cards */}
            <div className="space-y-4">
              <div className="bg-neutral-900/60 border border-neutral-800 p-5 flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#C2A15B] shrink-0 mt-1" />
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#C2A15B]">
                    Studio Address
                  </div>
                  <div className="text-sm font-medium text-white">
                    {SRK_BUSINESS.streetAddress}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {SRK_BUSINESS.city}, {SRK_BUSINESS.state} — {SRK_BUSINESS.pincode}
                  </div>
                </div>
              </div>

              <div className="bg-neutral-900/60 border border-neutral-800 p-5 flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#C2A15B] shrink-0 mt-1" />
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#C2A15B]">
                    Working Hours
                  </div>
                  <div className="text-sm font-medium text-white">{SRK_BUSINESS.openingHours}</div>
                  <div className="text-xs text-neutral-400">Open 7 days a week</div>
                </div>
              </div>

              <div className="bg-neutral-900/60 border border-neutral-800 p-5 flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#C2A15B] shrink-0 mt-1" />
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#C2A15B]">
                    Direct Telephone
                  </div>
                  <a
                    href={`tel:${SRK_BUSINESS.phone}`}
                    className="text-sm font-medium text-white hover:text-[#C2A15B] transition-colors block"
                  >
                    {SRK_BUSINESS.phoneDisplay}
                  </a>
                  <div className="text-xs text-neutral-400">Available during working hours</div>
                </div>
              </div>
            </div>

            {/* Quick Navigation Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={SRK_BUSINESS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#C2A15B] hover:bg-[#b59247] text-neutral-950 font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Driving Directions
              </a>

              <a
                href={SRK_BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs uppercase tracking-wider text-neutral-200 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#C2A15B]" />
                Open Google Maps
              </a>
            </div>
          </div>

          {/* Direct Consultation Panel */}
          <div className="lg:col-span-7">
            <div className="bg-[#0E0E0E] border border-neutral-800 p-8 sm:p-10">
              {!submitted ? (
                <>
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2A15B] font-semibold">
                      Online Enquiry
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white">
                      Request a quote or site visit
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      Fill out the form below. We will immediately format your request and connect
                      you with Shariq on WhatsApp with zero waiting.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                          Your Name <span className="text-[#C2A15B]">*</span>
                        </label>
                        <Input
                          required
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-neutral-900 border-neutral-800 text-white rounded-none h-11 text-sm focus-visible:ring-[#C2A15B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                          Phone / WhatsApp <span className="text-[#C2A15B]">*</span>
                        </label>
                        <Input
                          required
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-neutral-900 border-neutral-800 text-white rounded-none h-11 text-sm focus-visible:ring-[#C2A15B]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                          Scope of Work
                        </label>
                        <select
                          value={formData.requirement}
                          onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                          aria-label="Scope of Work"
                          className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-none h-11 px-3 text-sm focus:outline-none focus:border-[#C2A15B]"
                        >
                          <option value="Full Home Interior">Full Home Interior</option>
                          <option value="Modular Kitchen & Storage">Modular Kitchen & Storage</option>
                          <option value="Living & False Ceiling">Living & False Ceiling</option>
                          <option value="Master Bedroom & Wardrobes">Master Bedroom & Wardrobes</option>
                          <option value="Commercial / Hotel / Office">Commercial / Hotel / Office</option>
                          <option value="Turnkey Renovation">Turnkey Renovation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                          Property Location
                        </label>
                        <Input
                          placeholder="Location / City"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="bg-neutral-900 border-neutral-800 text-white rounded-none h-11 text-sm focus-visible:ring-[#C2A15B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                        Brief Project Description
                      </label>
                      <Textarea
                        rows={3}
                        placeholder="Project details or scope notes..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-neutral-900 border-neutral-800 text-white rounded-none text-sm resize-none focus-visible:ring-[#C2A15B]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#C2A15B] hover:bg-[#b59247] text-neutral-950 font-semibold tracking-wider uppercase text-xs sm:text-sm h-12 rounded-none flex items-center justify-center gap-2 transition-colors mt-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Send to Shariq on WhatsApp
                    </Button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-[#C2A15B]/20 text-[#C2A15B] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#C2A15B]">
                      REF: {refId}
                    </span>
                    <h4 className="font-serif text-2xl text-white">Thank you, {formData.name}</h4>
                    <p className="text-xs text-neutral-400 max-w-md mx-auto">
                      Your enquiry has been prepared. If WhatsApp didn’t launch, use the button
                      below to talk with Shariq.
                    </p>
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold uppercase text-xs tracking-wider transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Open WhatsApp Chat Now
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
