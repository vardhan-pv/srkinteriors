"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

interface SRKBrandLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: "dark" | "light";
  animated?: boolean;
}

export function SRKBrandLogo({
  className = "",
  size = 40,
  showText = true,
  textColor = "light",
}: SRKBrandLogoProps) {
  const logoRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !logoRef.current) return;

    try {
      const lines = logoRef.current.querySelectorAll(".srk-logo-line");
      const fills = logoRef.current.querySelectorAll(".srk-logo-fill");

      if (lines.length > 0) {
        animate(lines, {
          opacity: [0.3, 1],
          duration: 900,
          ease: "inOutSine",
        });
      }

      if (fills.length > 0) {
        animate(fills, {
          opacity: [0, 1],
          duration: 700,
          delay: 200,
          ease: "outQuad",
        });
      }
    } catch {
      // Graceful fallback
    }
  }, []);

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        ref={logoRef}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 128 128"
        role="img"
        aria-label="SRK Interiors"
        className="shrink-0"
      >
        <title>SRK Interiors</title>
        {/* Arch line */}
        <path
          className="srk-logo-line"
          d="M19 91 A51 51 0 1 1 109 91"
          fill="none"
          stroke="#C2A15B"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* S */}
        <path
          className="srk-logo-fill"
          d="M190 72V412L305 411Q310 241 403.5 159.5Q497 78 688 78Q866 78 959.5 148.5Q1053 219 1053 354Q1053 462 996.5 520.0Q940 578 758 633L561 692Q347 757 259.5 854.0Q172 951 172 1120Q172 1310 307.0 1415.0Q442 1520 686 1520Q790 1520 914.0 1497.5Q1038 1475 1178 1432V1114H1065Q1048 1272 959.5 1342.5Q871 1413 690 1413Q532 1413 449.5 1348.5Q367 1284 367 1161Q367 1054 429.0 993.0Q491 932 692 872L877 817Q1080 756 1166.5 661.5Q1253 567 1253 408Q1253 191 1114.0 81.0Q975 -29 700 -29Q577 -29 449.5 -4.0Q322 21 190 72Z"
          transform="translate(24.000 61) scale(0.01514 -0.01514)"
          fill="#C2A15B"
        />
        {/* R */}
        <path
          className="srk-logo-fill"
          d="M981 741Q1051 722 1101.5 676.5Q1152 631 1192 549L1409 106H1591V0H1239L1006 475Q939 613 883.0 653.5Q827 694 729 694H506V106H717V0H113V106H303V1386H113V1493H870Q1088 1493 1206.5 1389.0Q1325 1285 1325 1094Q1325 940 1238.5 851.5Q1152 763 981 741ZM506 801H801Q952 801 1024.0 872.5Q1096 944 1096 1094Q1096 1244 1024.0 1315.0Q952 1386 801 1386H506Z"
          transform="translate(45.237 61) scale(0.01514 -0.01514)"
          fill="#C2A15B"
        />
        {/* K */}
        <path
          className="srk-logo-fill"
          d="M113 0V106H303V1386H113V1493H696V1386H506V821L1149 1386H987V1493H1483V1386H1315L674 823L1391 106H1561V0H1214L506 709V106H696V0Z"
          transform="translate(68.578 61) scale(0.01514 -0.01514)"
          fill="#C2A15B"
        />
        {/* Roofline motif */}
        <path
          className="srk-logo-line"
          d="M11 106L46 76L83 106M20 106L46 84L73 106M73 91L86 80L116 106M25 94V82H32"
          fill="none"
          stroke="#C2A15B"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        {/* Little window grids */}
        <path
          className="srk-logo-fill"
          d="M43 94H47V98H43ZM50 94H54V98H50ZM43 101H47V105H43ZM50 101H54V105H50ZM85 95H89V99H85ZM92 95H96V99H92Z"
          fill="#C2A15B"
        />
        {/* Baseline */}
        <path className="srk-logo-line" d="M15 116H114" stroke="#C2A15B" strokeWidth="2.2" />
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-serif tracking-[0.16em] uppercase text-sm sm:text-base font-semibold leading-tight ${
              textColor === "light" ? "text-neutral-100" : "text-neutral-900"
            }`}
          >
            SRK Interiors
          </span>
          <span
            className={`text-[10px] tracking-[0.22em] uppercase font-sans ${
              textColor === "light" ? "text-[#C2A15B]" : "text-[#9E7B35]"
            }`}
          >
            Chintamani • Studio
          </span>
        </div>
      )}
    </div>
  );
}

export function SRKBrandEmblem({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
  animated?: boolean;
}) {
  return <SRKBrandLogo size={size} className={className} showText={false} />;
}
