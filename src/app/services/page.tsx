import React from "react";
import type { Metadata } from "next";
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  Thermometer,
  Compass,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Ali Logistics",
  description:
    "Explore our specialized bakery transport classes — daily pre-dawn scheduled route runs, anti-vibration tiered cake delivery, cold chain lockers, and last-mile commissary staging.",
};

const serviceDetails = [
  {
    id: "scheduled",
    badge: "Primary Routes",
    title: "Daily Scheduled Route Logistics",
    desc: "We operate the daily rhythm of bakery logistics — picking up fresh-baked breads, croissants, and morning inventory directly from hot ovens at 3:00 AM and delivering them before cafe doors open.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    capabilities: [
      { icon: Clock, label: "Pre-dawn route coordination starting at 3:00 AM" },
      { icon: Compass, label: "Multi-stop pre-scheduled route optimization" },
      { icon: ShieldCheck, label: "Sanitised, ventilated rack bins to prevent condensation" },
      { icon: CheckCircle2, label: "Live coordinate dispatch notifications for cafe managers" },
    ],
  },
  {
    id: "event",
    badge: "Anti-Vibration & High-Value",
    title: "Specialized Event Transport",
    desc: "Delivering fragile tiered wedding cakes and patisserie masterpieces. We equip our vans with custom-dampening shock systems and level-adjustable cabinets to navigate any terrain safely.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1200&auto=format&fit=crop",
    capabilities: [
      { icon: Award, label: "Calibrated low-frequency pneumatic airbag suspensions" },
      { icon: Thermometer, label: "Stable humidity and climate lock at 18°C–22°C" },
      { icon: Sparkles, label: "Dedicated express driver routes with zero multi-stops" },
      { icon: CheckCircle2, label: "White-glove coordination and setup at venue tables" },
    ],
  },
  {
    id: "cold-chain",
    badge: "IoT Thermostatic Control",
    title: "Cold Chain & Chilled Lockers",
    desc: "Unwavering temperature control for mousse cakes, custard tarts, and laminated raw doughs. Dual chambers stay locked at a constant 4.2°C to prevent premature proofing or glaze melting.",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1200&auto=format&fit=crop",
    capabilities: [
      { icon: Thermometer, label: "Dual-compressor locker chambers keeping strict 2°C–8°C ranges" },
      { icon: Clock, label: "Continuous automated IoT telemetry logs sent to phone dashboards" },
      { icon: ShieldCheck, label: "Automatic backup refrigeration and threshold overrides" },
      { icon: CheckCircle2, label: "Full FDA food-transportation logging sheets for auditors" },
    ],
  },
  {
    id: "last-mile",
    badge: "3PL Warehouse Staging",
    title: "Last-Mile & Commissary Logistics",
    desc: "Bridging central production kitchens and retail outposts. We manage pre-sorting, cross-dock loading, and rapid staging lockers to minimize handling and maximize shelf-life freshness.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    capabilities: [
      { icon: Compass, label: "Central commissary pickup and sorting coordination" },
      { icon: Clock, label: "Time-slotted staging runs matching retail peak schedules" },
      { icon: ShieldCheck, label: "Sanitised cross-dock staging units at our regional hubs" },
      { icon: CheckCircle2, label: "Express parcel lockers for small-batch patisserie dispatch" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF9F5] text-[#1C1716] font-sans">
      
      {/* 1. Hero Banner Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-[#1C1716] pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop"
            alt="Bakery transport fleet"
            className="w-full h-full object-cover opacity-25 transform scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E5D3B3]">
            Operational Classes
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#FAF9F5] tracking-wide">
            Our Logistics Services
          </h1>
          <p className="text-sm text-[#FAF9F5]/70 max-w-2xl mx-auto font-light leading-relaxed">
            Four specialized transport categories — each with customized vehicle layouts, shock-absorbing rack brackets, and dual-zone temperature calibrations.
          </p>
        </div>
      </section>

      {/* 2. Detailed Service Capability Sections (Alternating Layout) */}
      <section className="py-24 bg-[#FAF9F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-32">
          {serviceDetails.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-mt-24"
            >
              
              {/* Image Column: Alternate left/right based on index (Span 5) */}
              <div className={`lg:col-span-5 relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] bg-transparent border border-[#1C1716]/10 p-2 ${
                index % 2 === 1 ? "lg:order-2" : "lg:order-1"
              }`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Capability Detail Column: (Span 7) */}
              <div className={`lg:col-span-7 space-y-8 text-left ${
                index % 2 === 1 ? "lg:order-1" : "lg:order-2"
              }`}>
                
                {/* Badge & Title */}
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                    {service.badge}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1716] leading-tight tracking-wide">
                    {service.title}
                  </h2>
                  <p className="text-sm text-[#1C1716]/75 leading-relaxed font-light font-sans">
                    {service.desc}
                  </p>
                </div>

                {/* Capabilities list with icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#1C1716]/10">
                  {service.capabilities.map((cap, capIdx) => {
                    const CapIcon = cap.icon;
                    return (
                      <div key={capIdx} className="flex items-start gap-3">
                        <div className="w-7 h-7 bg-[#1C1716] text-[#E5D3B3] flex items-center justify-center shrink-0">
                          <CapIcon className="w-4 h-4" />
                        </div>
                        <span className="text-xs text-[#1C1716]/80 leading-relaxed font-light">
                          {cap.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Rates Enquiry Trigger */}
                <div className="pt-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#1C1716] text-[10px] tracking-widest uppercase font-semibold text-[#1C1716] bg-transparent hover:bg-[#1C1716] hover:text-[#FAF9F5] transition-all duration-500 rounded-none cursor-pointer"
                  >
                    Request Route Rates
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. Bottom Call To Action Banner */}
      <section className="py-20 bg-[#1C1716] text-[#FAF9F5] border-t border-[#FAF9F5]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-8 select-none">
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#FAF9F5] leading-snug tracking-wide">
            Need a Specialized Logistics Quote?
          </h3>
          <p className="text-sm text-[#FAF9F5]/70 max-w-xl mx-auto font-light leading-relaxed">
            Discuss morning pickup schedules, anti-vibration systems, or cold-chain locker telemetry with our routes and dispatch controllers.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FAF9F5] text-[#1C1716] border border-[#FAF9F5] hover:bg-transparent hover:text-[#FAF9F5] transition-all duration-500 text-[10px] tracking-widest uppercase font-semibold rounded-none cursor-pointer"
            >
              Get in Touch with Route Planners
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
