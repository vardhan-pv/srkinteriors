"use client";

import { useState } from "react";
import { SRK_BUSINESS, formatWhatsAppUrl } from "@/lib/srk-data";
import { ArrowRight, MessageCircle, PhoneCall, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function SRKFreeEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: "Full Home Interior",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.phone.trim() || formData.phone.trim().length < 9) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    const refId = `SRK-CH-${Math.floor(1000 + Math.random() * 9000)}`;

    const whatsappUrl = formatWhatsAppUrl({
      name: formData.name,
      phone: formData.phone,
      requirement: `${formData.requirement} (Ref: ${refId})`,
      message: formData.message,
    });

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  return (
    <section id="enquiry" className="py-20 lg:py-28 bg-[#FBF8F2] text-[#1C1B18] relative overflow-hidden border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#8A7A62] text-xs tracking-[0.2em] uppercase font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>DIRECT STUDIO ENQUIRY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1B18] leading-tight">
              Like What <br />
              <span className="italic font-light text-[#9A7A3A]">You See?</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5A554C] font-sans leading-relaxed">
              Tell us what you&apos;re planning and get in touch with SRK Interiors directly. Shariq and our Chintamani team will review your layout and guide you on designs, materials, and estimated budgets.
            </p>

            <div className="pt-4 space-y-3.5 border-t border-[#E0D8C8]">
              <div className="flex items-center gap-3 text-xs text-[#4A453C]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero obligation &amp; transparent material estimates</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#4A453C]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Immediate response via official WhatsApp or call</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#4A453C]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Chelur Road studio consultation available daily</span>
              </div>
            </div>

            {/* Quick Call */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={`tel:${SRK_BUSINESS.phone}`}
                className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-medium text-[#1C1B18] hover:text-[#C9A84C] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#9A7A3A]" />
                <span>Call Shariq Directly: {SRK_BUSINESS.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean White Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#EAE4D8] p-8 sm:p-10 rounded-2xl shadow-sm relative">
              
              <h3 className="font-serif text-2xl text-[#1C1B18] mb-1">Request Free Consultation</h3>
              <p className="text-xs text-[#5A5448] mb-8 font-sans">
                Fill out your details below to start a direct consultation on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-name" className="block text-xs font-mono tracking-widest text-[#5A5448] uppercase">
                    Your Name *
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya Rao"
                    className={`w-full bg-[#FAF8F5] border-b-2 ${
                      errors.name ? "border-rose-500" : "border-[#E0D8C8] focus:border-[#C9A84C]"
                    } px-4 py-3 text-sm text-[#1C1B18] placeholder-[#9E978C] outline-none transition-colors rounded-t-lg`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-600">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-phone" className="block text-xs font-mono tracking-widest text-[#5A5448] uppercase">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full bg-[#FAF8F5] border-b-2 ${
                      errors.phone ? "border-rose-500" : "border-[#E0D8C8] focus:border-[#C9A84C]"
                    } px-4 py-3 text-sm text-[#1C1B18] placeholder-[#9E978C] outline-none transition-colors rounded-t-lg`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-600">{errors.phone}</p>}
                </div>

                {/* Requirement */}
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-requirement" className="block text-xs font-mono tracking-widest text-[#5A5448] uppercase">
                    Primary Requirement
                  </label>
                  <select
                    id="enquiry-requirement"
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full bg-[#FAF8F5] border-b-2 border-[#E0D8C8] focus:border-[#C9A84C] px-4 py-3 text-sm text-[#1C1B18] outline-none transition-colors rounded-t-lg"
                  >
                    <option value="Full Home Interior">Full Home Interior (2BHK / 3BHK / Villa)</option>
                    <option value="Modular Kitchen">Modular Kitchen</option>
                    <option value="Living Room & TV Unit">Living Room &amp; TV Unit</option>
                    <option value="Bedroom & Wardrobes">Bedroom &amp; Modular Wardrobes</option>
                    <option value="Commercial & Office">Commercial Space / Hotel / Office</option>
                    <option value="Turnkey Renovation">Turnkey Renovation</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-message" className="block text-xs font-mono tracking-widest text-[#5A5448] uppercase">
                    Message / Space Details (Optional)
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. 1200 sqft 3BHK flat in Chintamani, planning site execution next month..."
                    className="w-full bg-[#FAF8F5] border-b-2 border-[#E0D8C8] focus:border-[#C9A84C] px-4 py-3 text-sm text-[#1C1B18] placeholder-[#9E978C] outline-none transition-colors rounded-t-lg resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C9A84C] hover:bg-[#B89230] text-[#141311] font-medium text-xs tracking-wider uppercase rounded-full flex items-center justify-center gap-2 transition-colors active:scale-[0.99]"
                >
                  <span>Get Free Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Opening WhatsApp chat with Shariq...</span>
                  </motion.div>
                )}

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
