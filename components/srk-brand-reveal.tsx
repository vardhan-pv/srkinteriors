"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SRKBrandEmblem } from "./srk-brand-logo";
import { WifiOff, RefreshCw } from "lucide-react";

export function SRKBrandReveal() {
  const [showSplash, setShowSplash] = useState(true);
  const [isOffline, setIsOffline] = useState(() => {
    if (typeof window !== "undefined") {
      return !navigator.onLine;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleOnline = () => setIsOffline(false);
      const handleOffline = () => setIsOffline(true);

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      // Dismiss splash after 0.8s for fast human load
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 850);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, []);

  return (
    <>
      {/* Brand Reveal Overlay (0.8s max) */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0c0a] text-amber-50"
          >
            <div className="relative flex flex-col items-center gap-4 text-center px-6">
              <SRKBrandEmblem size={68} animated className="text-amber-400" />
              
              <div className="space-y-1">
                <h1 className="font-serif text-2xl tracking-[0.2em] text-amber-100 uppercase">
                  SRK Interiors
                </h1>
                <p className="text-[11px] font-sans tracking-[0.25em] text-amber-300/70 uppercase">
                  Chintamani, Karnataka
                </p>
              </div>

              {/* Architectural line shimmer */}
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent my-1 animate-pulse" />

              <p className="text-[12px] font-sans text-amber-200/50 tracking-wider">
                Loading your experience...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Connection Interrupted Banner (Non-blocking offline state) */}
      <AnimatePresence>
        {isOffline && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 md:left-auto md:right-6 md:w-96 z-[90] bg-[#1a1714]/95 backdrop-blur-md border border-amber-500/30 text-amber-100 rounded-xl p-4 shadow-2xl flex items-start gap-3"
          >
            <WifiOff className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="flex-1 text-xs space-y-1">
              <p className="font-medium text-amber-200">Connection Interrupted</p>
              <p className="text-amber-300/70">
                Some online map textures or images may load slowly. Cached content remains readable.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/30 text-amber-200 text-[11px] rounded-md transition-colors"
              >
                <RefreshCw className="w-3 h-3" /> Try Again
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
