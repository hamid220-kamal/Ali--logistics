"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1601584115197-04eefb24fc91?q=80&w=1600&auto=format&fit=crop",
    title: "RELIABLE REFRIGERATED & GENERAL FREIGHT TRANSPORT",
    subtitle: "Ali Logistics provides dependable transport solutions for businesses across Sydney. Your goods arrive safely, on time, every time.",
  },
  {
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    title: "MOVING GOODS, BUILDING RELATIONSHIPS",
    subtitle: "From temperature-controlled deliveries to general freight — we are Sydney's trusted transport specialists serving businesses of all sizes.",
  },
  {
    url: "https://images.unsplash.com/photo-1519003300449-424ad0405076?q=80&w=1600&auto=format&fit=crop",
    title: "FULLY INSURED. PROFESSIONALLY STAFFED.",
    subtitle: "Every load is fully insured and handled by our professional team. Your freight is in safe hands across Greater Sydney and surrounding areas.",
  },
];

export default function ThreeDCarousel() {
  const [active, setActive] = useState(0);
  const total = slides.length;

  const next = () => setActive((idx) => (idx + 1) % total);
  const prev = () => setActive((idx) => (idx - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-slate-900">
      {/* Background Slides (Cross-fade opacity transitions) */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === active ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover transform scale-105 transition-transform duration-7000 ease-out"
          />
          <div className="absolute inset-0 bg-slate-950/55 backdrop-brightness-75" />
        </div>
      ))}

      {/* Centered Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6 animate-fade-in">
          
          {/* Value Subtitle */}
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-400 select-none">
            Sydney Based · Fully Insured · On-Time Guaranteed
          </p>

          {/* Centered Bold Title */}
          <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] text-white tracking-tight max-w-5xl">
            {slides[active].title}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            {slides[active].subtitle}
          </p>

          {/* Value Indicators */}
          <div className="border-t border-b border-white/10 py-4 flex justify-around max-w-2xl mx-auto gap-4 text-white select-none">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-bold">Refrigerated</span>
              <span className="text-[9px] text-sky-300 uppercase tracking-widest font-semibold">Cold Chain</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-bold">Fully Insured</span>
              <span className="text-[9px] text-sky-300 uppercase tracking-widest font-semibold">All Loads</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-bold">99.8% ETA</span>
              <span className="text-[9px] text-sky-300 uppercase tracking-widest font-semibold">On-Time</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-[10px] font-bold uppercase tracking-widest text-slate-900 bg-white hover:bg-sky-50 transition-all duration-300 rounded-lg shadow-md cursor-pointer"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 ml-2 text-sky-600" />
            </Link>
            <Link
              href="tel:+61200000000"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-[10px] font-bold uppercase tracking-widest text-white bg-transparent border border-white/20 hover:border-white hover:bg-white/5 transition-all duration-300 rounded-lg cursor-pointer"
            >
              Call Now
            </Link>
          </div>

        </div>
      </div>

      {/* Arrow Navigation */}
      <div className="absolute inset-y-0 left-4 sm:left-6 z-30 flex items-center">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-white/10 hover:border-white hover:bg-white/5 flex items-center justify-center transition-all duration-300 text-white cursor-pointer active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 sm:right-6 z-30 flex items-center">
        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-white/10 hover:border-white hover:bg-white/5 flex items-center justify-center transition-all duration-300 text-white cursor-pointer active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === active ? "bg-sky-400 w-6" : "w-2.5 bg-white/35 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
