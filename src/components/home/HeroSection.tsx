import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Thermometer, MapPin, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-[#FAF7F0] overflow-hidden py-12 md:py-20 lg:py-28">
      {/* Background blur styling */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-sage/15 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Value Props & CTAs */}
          <div className="space-y-8 text-left">
            
            {/* Value Accent Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-white rounded-full border border-gold/30 shadow-sm animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-dark opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-dark"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-espresso-muted">
                Premium Bakery Transportation
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-espresso leading-[1.15]">
                Fresh from the Oven.
                <br />
                <span className="relative inline-block mt-1">
                  <span className="relative z-10 text-gradient-gold">Perfect in Transit.</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-gold/20 -z-10 rounded-full" />
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-espresso-muted max-w-xl leading-relaxed font-light">
                Ali Logistics bridges the gap between master bakers and their retail partners. 
                We deliver delicate croissants, wedding cakes, and chilled pastries with pristine 
                temperature control and absolute punctuality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button href="/quote" variant="secondary" size="lg" className="shadow-lg hover:shadow-xl">
                Request a Custom Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Our Methods
              </Button>
            </div>

            {/* Value Indicators (IoT diagnostics, FDA) */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg border-t border-gold/25">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-espresso font-semibold">
                  <Thermometer className="w-4 h-4 text-sage-dark" />
                  <span className="text-sm">4.2°C Avg</span>
                </div>
                <p className="text-xs text-espresso-muted font-medium">IoT Cold Chain</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-espresso font-semibold">
                  <ShieldCheck className="w-4 h-4 text-gold-dark" />
                  <span className="text-sm">FDA Compliant</span>
                </div>
                <p className="text-xs text-espresso-muted font-medium">Sanitized Cabinets</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-espresso font-semibold">
                  <MapPin className="w-4 h-4 text-sage-dark" />
                  <span className="text-sm">99.8%</span>
                </div>
                <p className="text-xs text-espresso-muted font-medium">On-Time Accuracy</p>
              </div>
            </div>

          </div>

          {/* Right Column: Neatly contained image block within its grid cell */}
          <div className="w-full flex justify-center items-center">
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-warm-white">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop"
                alt="Fresh bread assets loading into Ali Logistics transport"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent pointer-events-none" />
              
              {/* Nested Label card (naturally contained inside the image block boundary) */}
              <div className="absolute bottom-4 left-4 right-4 bg-warm-white/95 backdrop-blur-md rounded-2xl p-4 border border-gold/30 flex items-center gap-3 shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-sage-light flex items-center justify-center text-sage-dark shrink-0">
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-espresso-muted font-bold tracking-wider uppercase">Live Dispatch Telemetry</p>
                  <p className="text-sm font-bold text-espresso">Van #08 · Active 3.8°C</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
