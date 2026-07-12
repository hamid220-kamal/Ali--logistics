import React from "react";
import { CalendarClock, Cake, Thermometer, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicePreviewCards() {
  return (
    <section className="py-20 md:py-28 bg-[#F2EDE3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <SectionHeading
          label="Our Transportation Classes"
          title="Designed for Delicate Breads, Pastries & Cakes"
          subtitle="Different baked goods have different physical needs. We've customized our vehicle layout, suspension, and thermostatic controls to match."
        />

        {/* Symmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-12">
          
          {/* Card 1: Scheduled Routes */}
          <div className="flex flex-col h-full">
            <Card hover padding="lg" className="flex-1 flex flex-col justify-between overflow-hidden relative group bg-warm-white border border-gold/15 h-full">
              {/* Background Accent Decorative Image Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555507036-ab1f4038024a?q=80&w=800')" }}
              />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold-light text-espresso font-semibold text-xs rounded-full uppercase tracking-wider">
                  <CalendarClock className="w-3.5 h-3.5 text-gold-dark" />
                  Primary Route
                </div>
                
                <h3 className="font-display text-2xl font-bold text-espresso">
                  Morning Scheduled Routes
                </h3>
                
                <p className="text-espresso-muted text-sm leading-relaxed">
                  We run optimized multi-stop distribution paths starting at 3:00 AM. 
                  Artisan bakeries rely on us to deliver warm croissants, fresh sourdough, and prepared 
                  bagels before doors open.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-3 text-sm text-espresso font-medium">
                    <div className="w-6 h-6 rounded-md bg-sage-light flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-sage-dark" />
                    </div>
                    Clean, sanitised rack bins
                  </div>
                  <div className="flex items-center gap-3 text-sm text-espresso font-medium">
                    <div className="w-6 h-6 rounded-md bg-sage-light flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-sage-dark" />
                    </div>
                    Pre-dawn coordination
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 flex items-center justify-between border-t border-gold/20 mt-8">
                <Link
                  href="/services#breads"
                  className="inline-flex items-center gap-2 text-sm font-bold text-espresso hover:text-gold-dark group/link"
                >
                  Explore Routes
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <span className="text-xs text-espresso-muted font-bold tracking-widest uppercase">3 AM – 6 PM</span>
              </div>
            </Card>
          </div>

          {/* Card 2: Event Cakes */}
          <div className="flex flex-col h-full">
            <Card hover padding="lg" className="flex-1 flex flex-col justify-between bg-warm-white border border-gold/15 h-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center text-sage-dark">
                    <Cake className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-sage-dark bg-sage-light/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Anti-Vibration
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-espresso">
                    Tiered & Wedding Cakes
                  </h3>
                  <p className="text-espresso-muted text-sm leading-relaxed">
                    Custom modular rack structures and low-impact pneumatic suspension 
                    keep delicate structures level and safe over any terrain, assuring wedding-day perfection.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-gold/20 mt-8">
                <Link
                  href="/services#cakes"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-espresso hover:text-gold-dark group/link"
                >
                  Suspension Tech Specs
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          </div>

          {/* Card 3: Cold Pastries */}
          <div className="flex flex-col h-full">
            <Card hover padding="lg" className="flex-1 flex flex-col justify-between bg-warm-white border border-gold/15 h-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gold-light flex items-center justify-center text-gold-dark">
                    <Thermometer className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-gold-dark bg-gold-light/45 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Cold Chain
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-espresso">
                    Chilled Pastries & Dessert
                  </h3>
                  <p className="text-espresso-muted text-sm leading-relaxed">
                    Continuous IoT monitoring maintains temperatures between 2°C and 8°C. 
                    Automatic mobile warning locks prevent melted ganache or soft fillings.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-gold/20 mt-8">
                <Link
                  href="/services#pastries"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-espresso hover:text-gold-dark group/link"
                >
                  Telemetry Specs
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
}
