"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SRK_BUSINESS, formatWhatsAppUrl } from "@/lib/srk-data";
import { MessageSquare, Phone, CheckCircle2 } from "lucide-react";

interface ConsultationDialogProps {
  children?: React.ReactNode;
  defaultRequirement?: string;
  triggerButton?: boolean;
  buttonLabel?: string;
  buttonVariant?: "default" | "outline" | "gold";
  buttonClassName?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function SRKConsultationDialog({
  children,
  defaultRequirement = "Full Home Interior",
  triggerButton = false,
  buttonLabel = "Book Free Consultation",
  buttonVariant = "gold",
  buttonClassName = "",
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
}: ConsultationDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled ? (controlledOnOpenChange || (() => {})) : setInternalOpen;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: defaultRequirement,
    location: "Chintamani",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please provide your name and phone number so Shariq can reach you.");
      return;
    }

    const generatedRef = `SRK-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefId(generatedRef);

    const generatedUrl = formatWhatsAppUrl({
      name: formData.name,
      phone: formData.phone,
      requirement: formData.requirement,
      location: formData.location,
      message: `${formData.message ? formData.message + " " : ""}[Ref: ${generatedRef}]`,
    });

    setWhatsAppUrl(generatedUrl);
    setSubmitted(true);

    // Open WhatsApp in new tab
    if (typeof window !== "undefined") {
      window.open(generatedUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      requirement: defaultRequirement,
      location: "Chintamani",
      message: "",
    });
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(val) => {
        setOpen(val);
        if (!val) {
          setTimeout(handleReset, 300);
        }
      }}
    >
      {triggerButton && !children && (
        <DialogTrigger asChild>
          <Button
            className={`font-sans tracking-wide text-xs sm:text-sm font-medium uppercase px-5 py-3 rounded-none transition-all duration-300 ${
              buttonVariant === "gold"
                ? "bg-[#C2A15B] text-neutral-950 hover:bg-[#b59247] shadow-sm active:scale-[0.99]"
                : buttonVariant === "outline"
                ? "border border-neutral-700 text-neutral-200 hover:border-[#C2A15B] hover:text-[#C2A15B] bg-transparent"
                : "bg-neutral-900 text-white hover:bg-neutral-800"
            } ${buttonClassName}`}
          >
            {buttonLabel}
          </Button>
        </DialogTrigger>
      )}

      {children && <DialogTrigger asChild>{children}</DialogTrigger>}

      <DialogContent className="sm:max-w-[520px] bg-[#0E0E0E] border-neutral-800 text-neutral-100 p-6 sm:p-8 rounded-none shadow-2xl">
        {!submitted ? (
          <>
            <DialogHeader className="space-y-2 text-left">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2A15B] font-semibold">
                  Personal Consultation
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400">
                  Direct with Shariq
                </span>
              </div>
              <DialogTitle className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Let&apos;s plan your space.
              </DialogTitle>
              <DialogDescription className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Share your floor details or room requirements. We will connect directly on WhatsApp
                with material recommendations and honest estimates.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                  Your Full Name <span className="text-[#C2A15B]">*</span>
                </label>
                <Input
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-neutral-900/90 border-neutral-800 text-white rounded-none focus-visible:ring-[#C2A15B] h-11 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                  Phone / WhatsApp Number <span className="text-[#C2A15B]">*</span>
                </label>
                <Input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-neutral-900/90 border-neutral-800 text-white rounded-none focus-visible:ring-[#C2A15B] h-11 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                    Interior Scope
                  </label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    aria-label="Interior Scope"
                    className="w-full bg-neutral-900/90 border border-neutral-800 text-neutral-200 rounded-none h-11 px-3 text-sm focus:outline-none focus:border-[#C2A15B]"
                  >
                    <option value="Full Home Interior">Full Home Interior</option>
                    <option value="Modular Kitchen & Storage">Modular Kitchen & Storage</option>
                    <option value="Living & False Ceiling">Living & False Ceiling</option>
                    <option value="Master Bedroom & Wardrobes">Master Bedroom & Wardrobes</option>
                    <option value="Commercial / Office / Hotel">Commercial / Office / Hotel</option>
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
                    className="bg-neutral-900/90 border-neutral-800 text-white rounded-none focus-visible:ring-[#C2A15B] h-11 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                  Additional Notes (Optional)
                </label>
                <Textarea
                  rows={2}
                  placeholder="Project details or scope notes..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-neutral-900/90 border-neutral-800 text-white rounded-none focus-visible:ring-[#C2A15B] text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-[#C2A15B] hover:bg-[#b59247] text-neutral-950 font-semibold tracking-wider uppercase text-xs sm:text-sm h-12 rounded-none flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  Connect via WhatsApp with Shariq
                </Button>
                <p className="text-[11px] text-neutral-400 text-center mt-2.5 flex items-center justify-center gap-1.5">
                  <Phone className="w-3 h-3 text-[#C2A15B]" />
                  Or call directly:{" "}
                  <a
                    href={`tel:${SRK_BUSINESS.phone}`}
                    className="text-neutral-200 hover:text-[#C2A15B] underline underline-offset-2"
                  >
                    {SRK_BUSINESS.phoneDisplay}
                  </a>
                </p>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#C2A15B]/15 text-[#C2A15B] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C2A15B] font-semibold">
                Enquiry Ready • Ref: {refId}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                Thank you, {formData.name}
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                Your consultation request has been prepared for Shariq. If WhatsApp did not open
                automatically, click the button below.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-4 text-left space-y-2 text-xs text-neutral-300">
              <div className="flex justify-between">
                <span className="text-neutral-400">Requirement:</span>
                <span className="font-medium text-white">{formData.requirement}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Location:</span>
                <span className="font-medium text-white">{formData.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Studio Contact:</span>
                <span className="font-medium text-[#C2A15B]">{SRK_BUSINESS.phoneDisplay}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold tracking-wider uppercase text-xs h-12 flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Open WhatsApp Chat Now
              </a>
              <Button
                variant="ghost"
                onClick={() => setOpen(false)}
                className="text-neutral-400 hover:text-white text-xs uppercase tracking-wider"
              >
                Close Window
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
