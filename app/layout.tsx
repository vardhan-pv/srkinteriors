import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SRK Interiors | Luxury Interior Design Studio, Chintamani",
  description:
    "Led by Shariq, SRK Interiors delivers bespoke residential interiors, custom modular kitchens, and boutique commercial spaces in Chintamani, Kolar, and Bengaluru region. 5.0 ★ Google Rating.",
  keywords: [
    "SRK Interiors",
    "Interior Designers Chintamani",
    "Modular Kitchens Chintamani",
    "Luxury Interiors Karnataka",
    "Chelur Road Chintamani Interiors",
    "Turnkey Home Renovation",
  ],
  authors: [{ name: "SRK Interiors — Shariq" }],
  icons: {
    icon: "/brand/srk-favicon.svg",
    shortcut: "/brand/srk-favicon.svg",
    apple: "/brand/srk-compact.svg",
  },
  openGraph: {
    title: "SRK Interiors | Luxury Interior Design Studio, Chintamani",
    description:
      "Bespoke interiors designed around your life & space. Residential homes, modular kitchens, and commercial environments.",
    url: "https://srkinteriors.in",
    siteName: "SRK Interiors",
    images: [
      {
        url: "/images/hero-living.jpg",
        width: 1200,
        height: 800,
        alt: "SRK Interiors Luxury Living Room",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className="bg-[#0A0A0A] text-neutral-100 antialiased selection:bg-[#C2A15B]/30 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
