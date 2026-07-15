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
    <div className="bg-white text-slate-900 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04eefb24fc91?q=80&w=1600&auto=format&fit=crop"
            alt="Logistics vans line"
            className="w-full h-full object-cover opacity-20 transform scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">
            Bakery Transport
          </p>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Our Purpose-Built Fleet
          </h1>
          <p className="text-sm text-slate-350 max-w-2xl mx-auto font-light leading-relaxed">
            Three vehicle classes custom-engineered with food-safe sanitised bays, dual temperature zones, and anti-vibration airbag suspensions.
          </p>
        </div>
      </section>

      {/* 2. Vehicle Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          <div className="text-left mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-500">
              Vehicle Classes
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Right Vehicle for Every Run
            </h2>
            <p className="text-sm text-slate-655 leading-relaxed font-light max-w-xl">
              From a quick morning patisserie dispatch to a wholesale commissary route or cross-city wedding cake setup — we coordinate the perfect match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {vehicles.map((vehicle, index) => (
              <div 
                key={index} 
                className="group flex flex-col justify-between p-6 bg-slate-50 border border-slate-100 hover:border-sky-300/80 hover:bg-white hover:shadow-md transition-all duration-300 relative rounded-2xl h-full"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-slate-200/50 p-1.5 bg-white mb-6 rounded-xl">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 rounded-lg"
                    />
                    <span className="absolute top-4 left-4 bg-slate-900 text-sky-300 border border-slate-800 text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-md">
                      {vehicle.badge}
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-4 text-left">
                    <span className="text-[9px] font-bold text-sky-600 uppercase tracking-[0.2em] block">
                      {vehicle.type}
                    </span>
                    <h3 className="font-sans text-2xl font-extrabold text-slate-900">
                      {vehicle.name}
                    </h3>
                    
                    {/* Stats Rows */}
                    <div className="flex gap-4 border-t border-b border-slate-200/60 py-3 text-xs select-none">
                      <div className="flex items-center gap-1.5">
                        <Box className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span className="text-slate-600 font-light">{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5 border-l border-slate-200 pl-4">
                        <Snowflake className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span className="text-slate-600 font-light">{vehicle.temp}</span>
                      </div>
                    </div>

                    {/* Bullet Specs */}
                    <ul className="space-y-2 pt-2 text-xs font-light text-left text-slate-600">
                      {vehicle.specs.map((spec, si) => (
                        <li key={si} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-sky-500 mt-1.5 shrink-0 rounded-full" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Request Button */}
                <div className="pt-6 border-t border-slate-200/60 mt-8">
                  <Link
                    href="/quote"
                    className="w-full inline-flex items-center justify-center px-4 py-3 border border-slate-900 text-[10px] tracking-widest uppercase font-bold text-slate-900 bg-transparent hover:bg-slate-900 hover:text-white transition-all duration-500 rounded-lg cursor-pointer"
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
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          <div className="text-left mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-500">
              Fleet Technology
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              IoT-Powered Monitoring
            </h2>
            <p className="text-sm text-slate-655 leading-relaxed font-light max-w-xl">
              Every transport vehicle is equipped with automated telemetry hardware to give bakers total visibility over transit states.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Tech Feature Cards (Span 6) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {techFeatures.map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <div key={idx} className="p-6 bg-white border border-slate-100 flex flex-col justify-between h-full rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="space-y-4">
                      <div className="w-8 h-8 bg-slate-900 text-sky-300 flex items-center justify-center rounded-md">
                        <FeatIcon className="w-4 h-4" />
                      </div>
                      <h4 className="font-sans text-base font-extrabold text-slate-900">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Dashboard Mockup (Span 6) */}
            <div className="lg:col-span-6 w-full bg-slate-900 text-white border border-slate-800 p-6 sm:p-8 shadow-2xl relative select-none rounded-2xl">
              
              <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-300 pl-2">
                  Live Dispatch Fleet Monitor
                </span>
              </div>

              <div className="space-y-4 text-left">
                {[
                  { name: "Van #12 (Scheduled Run)", status: "En Route", temp: "4.2°C", eta: "12 min", color: "text-emerald-400" },
                  { name: "Van #07 (Pastry Locker)", status: "Loading", temp: "2.1°C", eta: "—", color: "text-amber-400" },
                  { name: "Truck #03 (Event Staging)", status: "Delivered", temp: "19.5°C", eta: "Done", color: "text-emerald-400" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white/5 border border-white/5 p-4 text-xs font-mono rounded-lg">
                    <div className="flex items-center gap-3">
                      <Truck className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="text-slate-200 font-light">{item.name}</span>
                    </div>
                    <span className={`font-semibold uppercase tracking-wider ${item.color}`}>
                      {item.status}
                    </span>
                    <div className="flex items-center gap-1.5 border-l border-white/10 pl-4">
                      <Snowflake className="w-3.5 h-3.5 text-emerald-400 shrink-0 animate-pulse" />
                      <span className="text-slate-300">{item.temp}</span>
                    </div>
                    <span className="text-slate-500 text-[10px]">ETA: {item.eta}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-8 select-none">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ready to See Our Fleet in Action?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-light leading-relaxed">
            Schedule a commissary warehouse visit or request a live demo dashboard coordinates login for your kitchen dispatch managers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-900 text-white border border-slate-900 hover:bg-transparent hover:text-slate-900 transition-all duration-500 text-[10px] tracking-widest uppercase font-bold rounded-lg cursor-pointer"
            >
              Request Route Rates
              <ArrowRight className="w-4 h-4 ml-2 text-sky-400" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-slate-900 border border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-500 text-[10px] tracking-widest uppercase font-bold rounded-lg cursor-pointer"
            >
              Schedule Hub Visit
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
