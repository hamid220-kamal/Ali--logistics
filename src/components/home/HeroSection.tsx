import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Thermometer, MapPin, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-[#FAF7F0] overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32">
      {/* Background blur styling */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-sage/15 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Value Props & CTAs (Span 7) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Value Accent Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-white rounded-full border border-gold/30 shadow-xs animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-dark opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-dark"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-espresso-muted">
                Specialized Bakery Logistics
              </span>
            </div>

            {/* Headline & Description */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-espresso leading-[1.15]">
                Fresh from the Oven.
                <br />
                <span className="relative inline-block mt-1">
                  <span className="relative z-10 text-gradient-gold">Perfect in Transit.</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-gold/20 -z-10 rounded-full" />
                </span>
              </h1>
              <p className="text-base sm:text-lg text-espresso-muted max-w-xl leading-relaxed font-light">
                Reliable, refrigerated logistics for local artisan bakeries. Daily scheduled routes, guaranteed cold chains, and punctual morning deliveries.
              </p>
            </div>

            {/* Value Indicators (Aligned directly below description) */}
            <div className="bg-white/50 backdrop-blur-sm border border-espresso/5 rounded-xl p-4 flex gap-6 justify-around max-w-xl shadow-xs">
              <div className="flex items-center gap-2.5">
                <Thermometer className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-espresso">4.2°C Avg</p>
                  <p className="text-[10px] text-espresso-muted font-medium">IoT Cold Chain</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-espresso">FDA Compliant</p>
                  <p className="text-[10px] text-espresso-muted font-medium">Insulated Cabinets</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-espresso">99.8%</p>
                  <p className="text-[10px] text-espresso-muted font-medium">On-Time Accuracy</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons & Micro-Text */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/quote" variant="secondary" size="lg" className="shadow-md hover:shadow-lg transition-all">
                  Request a Custom Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button href="/services" variant="outline" size="lg" className="hover:bg-espresso hover:text-cream transition-all">
                  Explore Our Methods
                </Button>
              </div>
              <p className="text-xs text-espresso/70 pl-1 flex items-center gap-1.5 font-semibold">
                <span>⚡</span> Average response time: Under 15 minutes.
              </p>
            </div>

          </div>

          {/* Right Column: Layered, overlapping images and cards (Span 5) */}
          <div className="lg:col-span-5 w-full flex justify-center items-center relative mt-8 lg:mt-0">
            
            {/* Visual background blob */}
            <div className="absolute -inset-4 bg-gold/10 rounded-[40px] transform rotate-3 scale-95 pointer-events-none" />

            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl border-4 border-warm-white group">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop"
                alt="Fresh bread assets loading into Ali Logistics transport"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Telemetry Overlay: Deliberate layout positioned cleanly at the bottom edge */}
              <div className="absolute bottom-0 inset-x-0 bg-[#2C2523]/80 backdrop-blur-md p-4 text-white flex justify-between items-center border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-white/95">
                    Live Dispatch Telemetry
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#F4E0B9]">
                  Active Van #08 · 3.8°C Locked
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
