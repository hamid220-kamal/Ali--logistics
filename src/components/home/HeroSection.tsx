"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically load the Full-Bleed Slideshow client-side to prevent Next.js SSR build errors
const ThreeDCarousel = dynamic(() => import("./ThreeDCarousel"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#1C1716]">
      <div className="w-8 h-8 rounded-full border-2 border-[#1C1716]/10 border-t-[#D4AF37] animate-spin" />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1C1716]">
      {/* Background Slideshow & Centered Typography overlays */}
      <ThreeDCarousel />
    </section>
  );
}
