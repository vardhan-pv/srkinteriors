import Link from "next/link";
import { SRKBrandLogo } from "@/components/srk-brand-logo";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6 text-center space-y-6">
      <SRKBrandLogo size={48} showText={true} textColor="light" />

      <div className="space-y-2 max-w-md">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C2A15B] font-semibold">
          Error 404 • Page Not Found
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          Let&apos;s get you back home.
        </h1>
        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
          The page you are looking for does not exist or has been relocated. You can explore our
          residential and commercial interior services on the homepage.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#C2A15B] hover:bg-[#b59247] text-neutral-950 font-semibold uppercase text-xs tracking-wider transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Homepage</span>
      </Link>
    </main>
  );
}
