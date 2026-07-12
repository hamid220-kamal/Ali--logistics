"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop",
    title: "PROFESSIONAL BAKERY LOGISTICS SERVICES",
    subtitle: "Oven-fresh bread and morning pastries delivered to local cafes before dawn.",
  },
  {
    url: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1600&auto=format&fit=crop",
    title: "SPECIALIZED WEDDING & CAKE TRANSPORT",
    subtitle: "Custom shock-absorbing racks and climate-controlled transport systems.",
  },
  {
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    title: "PRECISION COLD CHAIN SOLUTIONS",
    subtitle: "Continuous IoT-monitored refrigerated transport locked at 4.2°C.",
  },
];

export default function ThreeDCarousel() {
  const [active, setActive] = useState(0);
  const total = slides.length;

  const next = () => setActive((idx) => (idx + 1) % total);
  const prev = () => setActive((idx) => (idx - 1 + total) % total);

  // Auto-play slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#1C1716]">
      {/* Background Slides (Cross-fade opacity transitions) */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === active ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover transform scale-105"
          />
          {/* Dark Overlay Vignette (Matches screenshot style) */}
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}

      {/* Centered Content Overlay (z-20) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6 animate-fade-in">
          
          {/* Value Subtitle */}
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E5D3B3] select-none">
            Reliable · Temperature-Controlled · On-Time
          </p>

          {/* Centered Bold Title (Matches screenshot) */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] text-[#FAF9F5] tracking-wide max-w-5xl">
            {slides[active].title}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#FAF9F5]/80 max-w-2xl mx-auto font-light leading-relaxed">
            {slides[active].subtitle}
          </p>

          {/* Value Indicators (Inline Premium Dividers) */}
          <div className="border-t border-b border-white/20 py-4 flex justify-around max-w-2xl mx-auto gap-4 text-[#FAF9F5]/90 select-none">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-bold">4.2°C Avg</span>
              <span className="text-[9px] text-[#E5D3B3] uppercase tracking-widest font-semibold">Cold Chain</span>
            </div>
            <div className="w-px h-4 bg-white/25" />
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-bold">FDA Valid</span>
              <span className="text-[9px] text-[#E5D3B3] uppercase tracking-widest font-semibold">Insulated</span>
            </div>
            <div className="w-px h-4 bg-white/25" />
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-bold">99.8% ETA</span>
              <span className="text-[9px] text-[#E5D3B3] uppercase tracking-widest font-semibold">On-Time</span>
            </div>
          </div>

          {/* Action CTAs (Outlined premium buttons) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-[#1C1716] bg-[#FAF9F5] border border-[#FAF9F5] hover:bg-transparent hover:text-[#FAF9F5] transition-all duration-500 rounded-none shadow-md cursor-pointer"
            >
              Request a Custom Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-[#FAF9F5] bg-transparent border border-[#FAF9F5] hover:bg-[#FAF9F5] hover:text-[#1C1716] transition-all duration-500 rounded-none cursor-pointer"
            >
              Explore Our Methods
            </Link>
          </div>

        </div>
      </div>

      {/* HTML Circular Arrow Navigation Triggers (Left & Right Edges - Matches screenshot) */}
      <div className="absolute inset-y-0 left-4 sm:left-6 z-30 flex items-center">
        <button
          onClick={prev}
          className="w-14 h-14 rounded-full border border-white/20 hover:border-white hover:bg-white/10 flex items-center justify-center transition-all duration-300 text-white cursor-pointer active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 sm:right-6 z-30 flex items-center">
        <button
          onClick={next}
          className="w-14 h-14 rounded-full border border-white/20 hover:border-white hover:bg-white/10 flex items-center justify-center transition-all duration-300 text-white cursor-pointer active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Circular Pagination Dots (Bottom Center - Matches screenshot) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 cursor-pointer ${
              idx === active
                ? "bg-white border-white scale-110"
                : "bg-transparent border-white/40 hover:border-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
