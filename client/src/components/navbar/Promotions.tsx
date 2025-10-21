"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

// --- Types
export type PromotionTone = "brand" | "sale" | "info" | "warning" | "success";

export interface PromotionBarProps {
  /** Main text content */
  message: string;
  /** Optional call-to-action URL */
  href?: string;
  /** CTA label shown when href is provided */
  ctaLabel?: string;
  /** Visual style */
  tone?: PromotionTone;
  /** If provided, shows a live countdown until this ISO date/time */
  endsAt?: string; // e.g., "2025-12-31T23:59:59Z"
  /** Whether the bar should be fixed to the top */
  sticky?: boolean;
  /** Storage key for dismiss persistence (set falsy to disable persistence) */
  storageKey?: string;
  /** Optional className to override spacing/layout */
  className?: string;
}

// --- Helpers - Updated to match dark theme with white text
const toneStyles: Record<PromotionTone, string> = {
  brand: "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 text-white border-b border-white/10",
  sale: "bg-gradient-to-r from-red-900 via-red-800 to-red-700 text-white border-b border-white/10",
  info: "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white border-b border-white/10",
  warning: "bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600 text-white border-b border-white/10",
  success: "bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 text-white border-b border-white/10",
};

function useCountdown(targetIso?: string) {
  const target = useMemo(() => (targetIso ? new Date(targetIso).getTime() : 0), [
    targetIso,
  ]);
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    if (!target) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!target) return null;
  const diff = Math.max(0, target - now);
  const s = Math.floor(diff / 1000) % 60;
  const m = Math.floor(diff / (1000 * 60)) % 60;
  const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const done = diff === 0;
  return { d, h, m, s, done };
}

// --- Component
export default function PromotionBar({
  message,
  href,
  ctaLabel = "Shop now",
  tone = "brand",
  endsAt,
  sticky = true,
  storageKey = "promo-bar-dismissed",
  className = "",
}: PromotionBarProps) {
  const [dismissed, setDismissed] = useState(false);
  const countdown = useCountdown(endsAt);

  // Persist dismissal across visits
  useEffect(() => {
    if (!storageKey) return;
    const saved = typeof window !== "undefined" && localStorage.getItem(storageKey);
    if (saved === "1") setDismissed(true);
  }, [storageKey]);

  useEffect(() => {
    if (!storageKey) return;
    if (dismissed) localStorage.setItem(storageKey, "1");
  }, [dismissed, storageKey]);

  if (dismissed) return null;

  const isOver = countdown?.done;
  const base = toneStyles[tone] ?? toneStyles.brand;

  return (
    <div
      role="region"
      aria-label="Promotion"
      className={`w-full ${sticky ? "sticky top-0 z-50" : ""} shadow-lg backdrop-blur-sm`}
    >
      <div
        className={`relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-3 sm:px-4 md:px-6 py-3 sm:py-2 text-xs sm:text-sm ${base} ${className}`}
      >
        {/* Left: Countdown (optional) - Stack on mobile */}
        {endsAt && !isOver && countdown && (
          <div
            className="order-1 sm:order-none shrink-0 rounded-full px-2 sm:px-3 py-1 text-[10px] sm:text-[11px] md:text-xs font-semibold bg-white/20 border border-white/20 backdrop-blur-sm"
            aria-live="polite"
          >
            <span className="hidden sm:inline">Ends in </span>
            <span className="sm:hidden">⏰ </span>
            {countdown.d > 0 && <span>{countdown.d}d </span>}
            {countdown.h}h {countdown.m}m {countdown.s}s
          </div>
        )}

        {/* Message - Center on mobile, flexible on desktop */}
        <p className="flex-1 order-2 px-2 font-medium leading-tight text-center sm:order-none sm:text-left text-white/95 max-w-none sm:max-w-2xl md:max-w-4xl sm:px-0">
          {message}
        </p>

        {/* CTA (optional) - Stack on mobile */}
        {href && (
          <Link
            href={href}
            className="order-3 sm:mr-4 sm:order-none inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full shrink-0 border border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50 shadow-sm"
          >
            {ctaLabel}
            <span aria-hidden="true" className="text-[10px] sm:text-xs">→</span>
          </Link>
        )}

        {/* Dismiss - Always visible, positioned absolutely on larger screens */}
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="inline-flex items-center justify-center order-4 w-6 h-6 transition-all duration-200 rounded-full sm:order-none sm:absolute sm:w-7 sm:h-7 md:w-8 md:h-8 sm:right-2 md:right-3 sm:top-1/2 sm:-translate-y-1/2 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50 text-white/80 hover:text-white"
          aria-label="Dismiss promotion"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-3 h-3 sm:w-4 sm:h-4"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// --- Usage Example (remove if not needed)
// Place <PromotionBar /> near the top of your root layout or page.
//
// <PromotionBar
//   message="🎉 Up to 40% off for New Year — free shipping over $50!"
//   href="/sale"
//   ctaLabel="Grab the deal"
//   tone="sale"
//   endsAt="2025-12-31T23:59:59Z"
//   sticky
// />