"use client";

import { Home, CookingPot, Compass, Key, Sparkles, Building2, LampCeiling, PaintRoller } from "lucide-react";
import { formatWhatsAppUrl } from "@/lib/srk-data";

export interface ServiceListItem {
  id: string;
  number: string;
  title: string;
  scope: string;
  description: string;
  icon: React.ElementType;
}

const SERVICES_GRID: ServiceListItem[] = [
  {
    id: "residential",
    number: "01",
    title: "Residential Interiors",
    scope: "Full Home & Apartments",
    description: "Beautiful homes tailored to your lifestyle, cooking habits, and family comfort.",
    icon: Home,
  },
  {
    id: "kitchen",
    number: "02",
    title: "Modular Kitchens",
    scope: "Boiling Waterproof (BWP) Ply",
    description: "Functional L-shaped, U-shaped & acrylic storage layouts built for daily Indian cooking.",
    icon: CookingPot,
  },
  {
    id: "commercial",
    number: "03",
    title: "Commercial Interiors",
    scope: "Offices, Hotels & Retail",
    description: "Functional and inspiring commercial workspaces delivered on schedule and budget.",
    icon: Building2,
  },
  {
    id: "space-planning",
    number: "04",
    title: "Space Planning",
    scope: "Smart Layouts & 3D Design",
    description: "Smart layouts for better living with detailed 2D floorplans and photorealistic 3D views.",
    icon: Compass,
  },
  {
    id: "ceiling",
    number: "05",
    title: "False Ceiling & Lighting",
    scope: "Gypsum & Cove Lights",
    description: "Drop ceiling geometries with anti-glare recessed COB lights and warm cove ambience.",
    icon: LampCeiling,
  },
  {
    id: "renovation",
    number: "06",
    title: "Turnkey Renovation",
    scope: "End-to-End Execution",
    description: "End-to-end execution with zero hassle from civil alterations to final painting.",
    icon: Key,
  },
  {
    id: "bedroom",
    number: "07",
    title: "Bedroom & Wardrobes",
    scope: "Master & Kids Suites",
    description: "Custom floor-to-ceiling modular wardrobes, loft storage, and plush headboards.",
    icon: PaintRoller,
  },
  {
    id: "custom-furniture",
    number: "08",
    title: "Custom Furniture",
    scope: "Bespoke Joinery",
    description: "Handcrafted TV units, shoe racks, study desks, and dining suites tailored to your room.",
    icon: Key,
  },
];

export function SRKServices() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white text-[#181713] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-16">
          <div className="inline-flex items-center gap-2 text-[#8A7A62] text-xs tracking-[0.2em] uppercase font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>WHAT WE DO</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181713]">
            Our Interior Design Services
          </h2>
          <p className="text-sm sm:text-base text-[#4A4540] font-sans leading-relaxed">
            From concept to completion, we create timeless interiors that reflect your style and elevate the way you live.
          </p>
        </div>

        {/* Alora Interiors 4-Column Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_GRID.map((service) => {
            const Icon = service.icon;
            const whatsappLink = formatWhatsAppUrl({
              requirement: service.title,
              message: `Hi SRK Interiors, I am interested in ${service.title}.`,
            });

            return (
              <a
                key={service.id}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#E8E2D6] p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col items-center text-center space-y-4"
              >
                {/* Circular Beige Icon Background */}
                <div className="w-14 h-14 rounded-full bg-[#F5EDD5] text-[#9A7A3A] flex items-center justify-center group-hover:bg-[#C9A84C] group-hover:text-[#141311] transition-colors">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg sm:text-xl text-[#181713] font-medium group-hover:text-[#9A7A3A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#5A5448] font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
