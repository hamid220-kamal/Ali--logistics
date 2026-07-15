import React from "react";
import { CalendarClock, Cake, Thermometer, ArrowRight, ShieldCheck, Snowflake } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicePreviewCards() {
  return (
    <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Heading */}
        <SectionHeading
          label="Our Transportation Classes"
          title="Designed for Delicate Breads, Pastries & Cakes"
          subtitle="Different baked goods have different physical needs. We've customized our vehicle layout, suspension, and thermostatic controls to match."
        />

        {/* Symmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mt-12">

          {/* Card 1: Scheduled Routes */}
          <div className="flex flex-col h-full">
            <Card hover padding="lg" className="flex-1 flex flex-col justify-between overflow-hidden relative group bg-white border border-slate-100 h-full rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative z-10 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-sky-50 text-sky-700 font-bold text-[10px] rounded-full uppercase tracking-wider">
                  <CalendarClock className="w-3.5 h-3.5 text-sky-600" />
                  Primary Route
                </div>

                <h3 className="font-sans text-xl font-extrabold text-slate-900">
                  Morning Scheduled Routes
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed font-light">
                  We run optimized multi-stop distribution paths starting at 3:00 AM.
                  Artisan bakeries rely on us to deliver warm croissants, fresh sourdough, and prepared
                  bagels before doors open.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-3 text-xs text-slate-800">
                    <div className="w-5 h-5 rounded-md bg-sky-50 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                    </div>
                    Clean, sanitised rack bins
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-800">
                    <div className="w-5 h-5 rounded-md bg-sky-50 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                    </div>
                    Pre-dawn coordination
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 flex items-center justify-between border-t border-slate-100 mt-8">
                <Link
                  href="/services#scheduled"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-sky-600 group/link"
                >
                  Explore Routes
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">3 AM – 6 PM</span>
              </div>
            </Card>
          </div>

          {/* Card 2: Event Cakes */}
          <div className="flex flex-col h-full">
            <Card hover padding="lg" className="flex-1 flex flex-col justify-between bg-white border border-slate-100 h-full rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="space-y-6 text-left">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600">
                    <Cake className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Anti-Vibration
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-xl font-extrabold text-slate-900">
                    Tiered & Wedding Cakes
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-light">
                    Custom modular rack structures and low-impact pneumatic suspension
                    keep delicate structures level and safe over any terrain, assuring wedding-day perfection.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-8 flex items-center justify-between">
                <Link
                  href="/services#event"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-sky-600 group/link"
                >
                  Special Event Shipping
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          </div>

          {/* Card 3: Cold Chain Pastry Lockers */}
          <div className="flex flex-col h-full">
            <Card hover padding="lg" className="flex-1 flex flex-col justify-between bg-white border border-slate-100 h-full rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="space-y-6 text-left">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600">
                    <Thermometer className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Cold Chain
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-xl font-extrabold text-slate-900">
                    Chilled Pastry Lockers
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-light">
                    Continuous IoT monitoring locks internal lockers at a constant 4.2°C.
                    Ideal for delicate mousse products, chocolate glazes, and proofed raw doughs.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-8 flex items-center justify-between">
                <Link
                  href="/services#cold-chain"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-sky-600 group/link"
                >
                  Temperature Log Specs
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          </div>

          {/* Card 4: Commissary Logistics */}
          <div className="flex flex-col h-full">
            <Card hover padding="lg" className="flex-1 flex flex-col justify-between bg-white border border-slate-100 h-full rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="space-y-6 text-left">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600">
                    <Snowflake className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Commissary Staging
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-xl font-extrabold text-slate-900">
                    Last-Mile Warehousing
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-light">
                    Cross-dock staging facilities engineered to pre-sort and store raw ingredients or finished baked products with zero temperature dropouts.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-8 flex items-center justify-between">
                <Link
                  href="/services#last-mile"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-sky-600 group/link"
                >
                  Staging Capabilities
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
