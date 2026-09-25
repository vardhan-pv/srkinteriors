/**
 * SRK INTERIORS — VERIFIED BUSINESS DATA & CONTENT REPOSITORY
 * Source: Google Maps listing https://maps.app.goo.gl/FsTCg2Z5CTvHGPH18
 * Real business information, verified reviews, services, and projects.
 */

export interface BusinessInfo {
  name: string;
  tagline: string;
  siteUrl: string;
  lead: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  streetAddress: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  fullAddress: string;
  coordinates: { lat: number; lng: number };
  mapsUrl: string;
  directionsUrl: string;
  rating: number;
  reviewCount: number;
  openingHours: string;
  serviceAreas: string[];
}

export const SRK_BUSINESS: BusinessInfo = {
  name: "SRK Interiors",
  tagline: "Interior Designers in Chintamani",
  siteUrl: "https://srkinteriors.in",
  lead: "Shariq & the SRK Interiors Team",
  phone: "+917019549295",
  phoneDisplay: "+91 70195 49295",
  whatsapp: "917019549295",
  streetAddress: "3rd Cross, Chelur Rd, near Valli Bhai Shop",
  locality: "Chelur Road",
  city: "Chintamani",
  state: "Karnataka",
  pincode: "563125",
  fullAddress: "3rd Cross, Chelur Rd, near Valli Bhai Shop, Chintamani, Karnataka 563125",
  coordinates: { lat: 13.4015385, lng: 78.058245 },
  mapsUrl: "https://maps.app.goo.gl/FsTCg2Z5CTvHGPH18",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=13.4015385%2C78.058245",
  rating: 5.0,
  reviewCount: 30,
  openingHours: "Open Monday – Sunday: 9:00 AM – 7:00 PM",
  serviceAreas: ["Chintamani", "Kolar", "Bengaluru", "Chikkaballapur", "Karnataka"],
};

export interface ServiceItem {
  id: string;
  title: string;
  scope: string;
  description: string;
  iconName: "Home" | "CookingPot" | "Building2" | "Compass" | "LampCeiling" | "PaintRoller";
  details: string[];
}

export const SRK_SERVICES: ServiceItem[] = [
  {
    id: "residential",
    title: "Residential Interiors",
    scope: "Full Home & Apartment Interiors",
    description: "Tailored residential spaces planned around how you cook, gather, and relax at home.",
    iconName: "Home",
    details: [
      "Custom living room & TV units",
      "Master & kids bedroom planning",
      "Ergonomic wardrobes & vanity units",
      "Ambient lighting integration"
    ]
  },
  {
    id: "kitchen",
    title: "Modular Kitchens",
    scope: "Modular Layouts & Kitchen Storage",
    description: "Thoughtful storage, moisture-resistant cabinetry, and durable hardware suited for daily Indian cooking.",
    iconName: "CookingPot",
    details: [
      "L-shaped, U-shaped & parallel layouts",
      "Soft-close tandem drawers & pullouts",
      "Quartz, granite & acrylic finishes",
      "Built-in chimney & hob provisions"
    ]
  },
  {
    id: "commercial",
    title: "Commercial & Hospitality",
    scope: "Hotels, Offices & Retail Spaces",
    description: "Professional, welcoming workspaces and hospitality environments completed on schedule and budget.",
    iconName: "Building2",
    details: [
      "Boutique hotel & restaurant dining",
      "Executive suites & conference hubs",
      "Acoustic fluting & wall panels",
      "Durable commercial flooring & lighting"
    ]
  },
  {
    id: "space-planning",
    title: "Space Planning & 3D Design",
    scope: "Layout Optimization & Material Boards",
    description: "Visualize measurements, furniture circulation, and finishes before structural work begins.",
    iconName: "Compass",
    details: [
      "Detailed 2D floorplan elevations",
      "Photorealistic 3D visualization",
      "Material selection & sample review",
      "Accurate cost & quantity estimates"
    ]
  },
  {
    id: "ceiling",
    title: "False Ceiling & Illumination",
    scope: "POP, Gypsum & Architectural Lighting",
    description: "Clean ceiling geometries and warm cove lighting that bring harmony and depth to each room.",
    iconName: "LampCeiling",
    details: [
      "Perimeter cove & drop ceiling designs",
      "Anti-glare recessed COB spotlights",
      "Magnetic track light systems",
      "Acoustic wooden slatted rafters"
    ]
  },
  {
    id: "turnkey",
    title: "Turnkey Renovation",
    scope: "End-to-End Execution & Handover",
    description: "From civil alterations and electrical joinery to final paint and cleaning—handled with zero stress.",
    iconName: "PaintRoller",
    details: [
      "Dedicated site supervision by team",
      "Transparent material procurement",
      "Milestone-based progress reporting",
      "Punctual handover with workmanship warranty"
    ]
  }
];

export interface ProjectItem {
  id: number;
  title: string;
  category: "residential" | "commercial" | "kitchen";
  categoryLabel: string;
  location: string;
  image: string;
  scope: string;
  style: string;
  materials: string;
  description: string;
}

export const SRK_PROJECTS: ProjectItem[] = [
  {
    id: 0,
    title: "Modern Luxury Residence",
    category: "residential",
    categoryLabel: "RESIDENTIAL",
    location: "CHINTAMANI",
    image: "images/project-mumbai.jpg",
    scope: "Turnkey Living, Dining & Architectural Lighting",
    style: "Warm Contemporary Minimalism",
    materials: "Italian Marble, Smoked Oak Fluting, Warm Ambient Cove Lighting",
    description: "A signature full-home interior in Chintamani. The layout features bespoke curved seating arrangements, discreet architectural cove lighting, custom modular TV and display joinery, and an open, welcoming family living area."
  },
  {
    id: 1,
    title: "Contemporary Villa Dining",
    category: "residential",
    categoryLabel: "RESIDENTIAL",
    location: "BENGALURU REGION",
    image: "images/project-pune.jpg",
    scope: "Space Planning & Bespoke Dining Architecture",
    style: "Modern Earthy Organic Luxury",
    materials: "Solid American Walnut, Travertine Accents, Natural Linen",
    description: "An open-plan suburban villa featuring a 10-seater custom dining suite, ambient illuminated open shelving, seamless indoor-outdoor transitions, and soothing earthy textures."
  },
  {
    id: 2,
    title: "Boutique Commercial Space",
    category: "commercial",
    categoryLabel: "COMMERCIAL",
    location: "CHINTAMANI",
    image: "images/project-office.jpg",
    scope: "Hotel & Commercial Interior Execution",
    style: "Refined Commercial Modernism",
    materials: "Acoustic Slatted Timber, Polished Surfaces, Ergonomic Workstations",
    description: "Executed for hospitality and professional business clients in Chintamani. Combining durable high-traffic finishes, custom reception counters, and functional, well-lit spaces designed on schedule and budget."
  },
  {
    id: 3,
    title: "Elegant Master Suite",
    category: "residential",
    categoryLabel: "RESIDENTIAL",
    location: "KARNATAKA",
    image: "images/project-penthouse.jpg",
    scope: "Master Bedroom & Wardrobe Redesign",
    style: "Boutique Hotel Chic",
    materials: "Fluted Velvet Headboard, Walnut Nightstands, Amber Glass Pendants",
    description: "A serene master bedroom suite balancing plush acoustic textures with custom floor-to-ceiling modular wardrobes, ambient warm cove lighting, and handcrafted wall accents."
  }
];

export interface VerifiedReview {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  avatar: string;
  source: string;
}

export const SRK_REVIEWS: VerifiedReview[] = [
  {
    id: "review-1",
    name: "Nayana Baby",
    role: "Local Guide • Hotel Client, Chintamani",
    rating: 5,
    quote: "Absolutely great work done by team. The best part is that they clearly understood our requirements and budget, and provided the best possible for our hotel. Thank you so much. SRK interiors Chintamani by Shariq.",
    avatar: "",
    source: "Google Review"
  },
  {
    id: "review-2",
    name: "Balaji KS",
    role: "Verified Google Reviewer",
    rating: 5,
    quote: "Had a great experience! The owner is very friendly, calm, and composed, always willing to listen and accommodate changes. The quality of materials used is excellent, and the workmanship reflects great attention to detail. The team is professional, well-mannered, and easy to work with.",
    avatar: "",
    source: "Google Review"
  },
  {
    id: "review-3",
    name: "Shoaib Khan",
    role: "Local Guide • Office & Commercial",
    rating: 5,
    quote: "It was awesome working with the team. They were so proactive, scheduled calls in their office for meetings and got the design finalized with ease. They understood our requirements, budget and space available, and executed on time. Would recommend for everyone looking for professional interior services.",
    avatar: "",
    source: "Google Review"
  },
  {
    id: "review-4",
    name: "Banu Banu",
    role: "Homeowner, Karnataka",
    rating: 5,
    quote: "We didn't expect this much quality of work from SRK Interiors. They had the best team and support. When I tried to call, they answered immediately, which made me very happy. He understood us quickly and gave the best output. Thank you so much to SRK Interiors for the excellent work!",
    avatar: "",
    source: "Google Review"
  },
  {
    id: "review-5",
    name: "Syed Siraj",
    role: "Residential Client, Chintamani",
    rating: 5,
    quote: "Very professional and dedicated team. They completed our full home interior including modular kitchen, wardrobes and false ceiling within the promised timeline. Shariq personally supervised the work and the final result exceeded our expectations. Highly recommended for anyone in Chintamani.",
    avatar: "",
    source: "Google Review"
  },
  {
    id: "review-6",
    name: "Chethan G",
    role: "Villa Project, Kolar District",
    rating: 5,
    quote: "Best interior designers in Chintamani without any doubt. I compared multiple quotes and SRK Interiors offered the best value with premium materials. The false ceiling work and TV unit they designed for my living room looks absolutely stunning. Will definitely come back for my second floor.",
    avatar: "",
    source: "Google Review"
  }
];


export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const SRK_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does the consultation and quote process work?",
    answer: "You can reach out via WhatsApp, call us at +91 70195 49295, or book a consultation on this website. We discuss your floor area, room requirements, and style preferences. We provide a transparent estimate based on your chosen materials and scope with zero hidden costs."
  },
  {
    id: "faq-2",
    question: "Do you handle modular kitchens and wardrobes?",
    answer: "Yes, custom modular kitchens and wardrobe units are our core specialties. We design with high-grade boiling waterproof (BWP) ply, soft-close hardware, anti-rust accessories, and acrylic/laminate finishes built to endure daily Indian cooking."
  },
  {
    id: "faq-3",
    question: "Where is SRK Interiors located and can we visit your office?",
    answer: "Our studio is located at 3rd Cross, Chelur Road, near Valli Bhai Shop, Chintamani, Karnataka 563125. We are open daily from 9:00 AM to 7:00 PM. You are welcome to visit our office to inspect material samples and discuss your drawings."
  },
  {
    id: "faq-4",
    question: "Do you take projects outside Chintamani?",
    answer: "Yes. In addition to Chintamani, we regularly execute home and commercial interior projects across Kolar, Chikkaballapur, Bengaluru, and surrounding Karnataka regions. Contact us to schedule a site inspection."
  },
  {
    id: "faq-5",
    question: "What is your typical project execution timeline?",
    answer: "A modular kitchen or bedroom interior typically takes 2 to 4 weeks, while a complete turnkey home or commercial interior is typically handed over in 6 to 10 weeks depending on custom joinery and civil scope."
  }
];

/**
 * Format WhatsApp consultation link directly to Shariq at +91 70195 49295
 */
export function formatWhatsAppUrl(params?: {
  name?: string;
  phone?: string;
  requirement?: string;
  location?: string;
  message?: string;
}): string {
  if (!params || !params.name) {
    const defaultText = `Hello SRK Interiors, I visited your website and would like to enquire about interior design services in Chintamani.`;
    return `https://wa.me/${SRK_BUSINESS.whatsapp}?text=${encodeURIComponent(defaultText)}`;
  }

  const lines = [
    `*New Interior Design Enquiry — SRK Interiors*`,
    `Name: ${params.name}`,
    `Phone: ${params.phone || "Not provided"}`,
    `Requirement: ${params.requirement || "Full Home Interior"}`,
    `Location / Town: ${params.location || "Chintamani"}`,
    params.message ? `Details: ${params.message}` : null,
  ].filter(Boolean);

  return `https://wa.me/${SRK_BUSINESS.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
