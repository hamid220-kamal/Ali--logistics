import React from "react";
import type { Metadata } from "next";
import {
  Thermometer,
  Wifi,
  MapPin,
  Shield,
  Snowflake,
  Truck,
  Box,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Fleet | Ali Logistics",
  description:
    "Explore the Ali Logistics fleet — insulated compact vans, dual-chamber refrigerated trucks, and anti-vibration event haulers engineered for bakery transport.",
};

const vehicles = [
  {
    name: "Compact Bakery Van",
    type: "Daily Routes & Staging",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop",
    capacity: "Up to 150 trays",
    temp: "Ventilated / Ambient",
    specs: [
      "Food-grade sanitized cargo paneling",
      "Optimized multi-stop routing grids",
      "Rear & side sliding dispatch doors",
      "Clean, dry rack compartment slots",
    ],
    badge: "Most Popular",
  },
  {
    name: "Medium Refrigerated Truck",
    type: "Temperature Controlled Lockers",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    capacity: "Up to 300 trays",
    temp: "2°C – 8°C Adjustable",
    specs: [
      "Dual-compressor refrigeration units",
      "IoT 4-zone temperature sensors",
      "Automatic data log dashboard",
      "Active cabin humidity dampers",
    ],
    badge: "Best for Pastries",
  },
  {
    name: "Large Event Hauler",
    type: "Fragile Event Cargo",
    image: "https://images.unsplash.com/photo-1601584115197-04eefb24fc91?q=80&w=800&auto=format&fit=crop",
    capacity: "Up to 500 trays / 20 tiered cakes",
    temp: "18°C – 22°C Climate Control",
    specs: [
      "Low-frequency pneumatic air suspension",
      "Adjustable modular cake locking racks",
      "Hydraulic tail gate stabilizer lift",
      "White-glove coordination guidelines",
    ],
    badge: "Premium Events",
  },
];

const techFeatures = [
  {
    icon: Thermometer,
    title: "Real-Time Temperature Logs",
    description: "Multi-zone IoT sensors upload temperature data every 30 seconds to the client dashboard.",
  },
  {
    icon: Wifi,
    title: "Connected Dispatch Sync",
    description: "Every vehicle continuously broadcasts live GPS coordinates and cargo door indicators to dispatch.",
  },
  {
    icon: MapPin,
    title: "AI Route Optimization",
    description: "Automated route planning systems minimize time in transit to protect delicate crust freshness.",
  },
  {
    icon: Shield,
    title: "Instant Warning System",
    description: "Automatic overrides alert controllers if there are temperature shifts, harsh braking, or long stops.",
  },
];

export default function FleetPage() {
  return (
    <div className="bg-[#FAF9F5] text-[#1C1716] font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-[#1C1716] pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop"
            alt="Logistics vans line"
            className="w-full h-full object-cover opacity-25 transform scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E5D3B3]">
            Bakery Transport
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#FAF9F5] tracking-wide">
            Our Purpose-Built Fleet
          </h1>
          <p className="text-sm text-[#FAF9F5]/70 max-w-2xl mx-auto font-light leading-relaxed">
            Three vehicle classes custom-engineered with food-safe sanitised bays, dual temperature zones, and anti-vibration airbag suspensions.
          </p>
        </div>
      </section>

      {/* 2. Vehicle Grid Section */}
      <section className="py-24 bg-[#FAF9F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          <div className="text-left mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Vehicle Classes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1716] tracking-wide">
              The Right Vehicle for Every Run
            </h2>
            <p className="text-sm text-[#1C1716]/70 leading-relaxed font-light max-w-xl">
              From a quick morning patisserie dispatch to a wholesale commissary route or cross-city wedding cake setup — we coordinate the perfect match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {vehicles.map((vehicle, index) => (
              <div 
                key={index} 
                className="group flex flex-col justify-between p-6 bg-transparent border border-[#1C1716]/10 hover:border-[#D4AF37]/50 hover:shadow-xs transition-all duration-300 relative rounded-none h-full"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#1C1716]/10 p-1.5 bg-transparent mb-6">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-[#1C1716] text-[#E5D3B3] border border-[#FAF9F5]/10 text-[9px] uppercase tracking-widest font-bold px-3 py-1">
                      {vehicle.badge}
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-4 text-left">
                    <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] block">
                      {vehicle.type}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#1C1716]">
                      {vehicle.name}
                    </h3>
                    
                    {/* Stats Rows */}
                    <div className="flex gap-4 border-t border-b border-[#1C1716]/10 py-3 text-xs select-none">
                      <div className="flex items-center gap-1.5">
                        <Box className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="text-[#1C1716]/70 font-light">{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5 border-l border-[#1C1716]/10 pl-4">
                        <Snowflake className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="text-[#1C1716]/70 font-light">{vehicle.temp}</span>
                      </div>
                    </div>

                    {/* Bullet Specs */}
                    <ul className="space-y-2 pt-2 text-xs font-light text-left text-[#1C1716]/75">
                      {vehicle.specs.map((spec, si) => (
                        <li key={si} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#D4AF37] mt-1.5 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Request Button */}
                <div className="pt-6 border-t border-[#1C1716]/10 mt-8">
                  <Link
                    href="/quote"
                    className="w-full inline-flex items-center justify-center px-4 py-3 border border-[#1C1716] text-[10px] tracking-widest uppercase font-semibold text-[#1C1716] bg-transparent hover:bg-[#1C1716] hover:text-[#FAF9F5] transition-all duration-500 rounded-none cursor-pointer"
                  >
                    Request This Vehicle
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Fleet Technology Section */}
      <section className="py-24 bg-[#1C1716]/5 border-t border-b border-[#1C1716]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          <div className="text-left mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Fleet Technology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1716] tracking-wide">
              IoT-Powered Monitoring
            </h2>
            <p className="text-sm text-[#1C1716]/70 leading-relaxed font-light max-w-xl">
              Every transport vehicle is equipped with automated telemetry hardware to give bakers total visibility over transit states.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Tech Feature Cards (Span 6) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {techFeatures.map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <div key={idx} className="p-6 bg-[#FAF9F5] border border-[#1C1716]/10 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      <div className="w-8 h-8 bg-[#1C1716] text-[#E5D3B3] flex items-center justify-center">
                        <FeatIcon className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif text-base font-normal text-[#1C1716]">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-[#1C1716]/70 leading-relaxed font-light font-sans">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Dashboard Mockup (Span 6) */}
            <div className="lg:col-span-6 w-full bg-[#1C1716] text-[#FAF9F5] border border-[#FAF9F5]/10 p-6 sm:p-8 shadow-2xl relative select-none">
              
              <div className="flex items-center gap-2 mb-6 border-b border-[#FAF9F5]/10 pb-4">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#FAF9F5]/80 pl-2">
                  Live Dispatch Fleet Monitor
                </span>
              </div>

              <div className="space-y-4 text-left">
                {[
                  { name: "Van #12 (Scheduled Run)", status: "En Route", temp: "4.2°C", eta: "12 min", color: "text-emerald-400" },
                  { name: "Van #07 (Pastry Locker)", status: "Loading", temp: "2.1°C", eta: "—", color: "text-amber-400" },
                  { name: "Truck #03 (Event Staging)", status: "Delivered", temp: "19.5°C", eta: "Done", color: "text-emerald-400" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white/5 border border-white/5 p-4 text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <Truck className="w-4 h-4 text-[#E5D3B3] shrink-0" />
                      <span className="text-[#FAF9F5] font-light">{item.name}</span>
                    </div>
                    <span className={`font-semibold uppercase tracking-wider ${item.color}`}>
                      {item.status}
                    </span>
                    <div className="flex items-center gap-1.5 border-l border-white/10 pl-4">
                      <Snowflake className="w-3.5 h-3.5 text-emerald-400 shrink-0 animate-pulse" />
                      <span className="text-[#FAF9F5]/70">{item.temp}</span>
                    </div>
                    <span className="text-[#FAF9F5]/50 text-[10px]">ETA: {item.eta}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-20 bg-[#FAF9F5] border-t border-[#1C1716]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-8 select-none">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1716] leading-snug tracking-wide">
            Ready to See Our Fleet in Action?
          </h2>
          <p className="text-sm text-[#1C1716]/75 max-w-xl mx-auto font-light leading-relaxed">
            Schedule a commissary warehouse visit or request a live demo dashboard coordinates login for your kitchen dispatch managers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1C1716] text-[#FAF9F5] border border-[#1C1716] hover:bg-transparent hover:text-[#1C1716] transition-all duration-500 text-[10px] tracking-widest uppercase font-semibold rounded-none cursor-pointer"
            >
              Request Route Rates
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#1C1716] border border-[#1C1716] hover:bg-[#1C1716] hover:text-[#FAF9F5] transition-all duration-500 text-[10px] tracking-widest uppercase font-semibold rounded-none cursor-pointer"
            >
              Schedule Hub Visit
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
