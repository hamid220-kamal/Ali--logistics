import React from "react";
import type { Metadata } from "next";
import {
  Thermometer,
  Wifi,
  MapPin,
  Shield,
  Snowflake,
  Truck,
  Package,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Fleet | Ali Logistics",
  description:
    "Explore the Ali Logistics fleet — refrigerated vans, refrigerated trucks, and general freight vehicles built for dependable Sydney transport.",
};

const vehicles = [
  {
    name: "Refrigerated Van",
    type: "Cold Chain — Small Loads",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop",
    capacity: "Up to 2 pallets / 1,000 kg",
    temp: "0°C – 8°C Adjustable",
    specs: [
      "Single-zone refrigeration unit",
      "Ideal for food, dairy, and pharma runs",
      "Fast loading with sliding rear doors",
      "GPS tracked for live client visibility",
    ],
    badge: "Best for SMEs",
  },
  {
    name: "Refrigerated Truck",
    type: "Cold Chain — Medium to Large",
    image: "https://images.unsplash.com/photo-1601584115197-04eefb24fc91?q=80&w=800&auto=format&fit=crop",
    capacity: "Up to 6 pallets / 3,000 kg",
    temp: "-2°C – 10°C Dual Zone",
    specs: [
      "Dual-zone compressor refrigeration",
      "IoT temperature sensors with live logs",
      "Automated temperature alerts to dispatch",
      "Full compliance records available",
    ],
    badge: "Most Popular",
  },
  {
    name: "General Freight Truck",
    type: "Dry Freight — All Cargo Types",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    capacity: "Up to 12 pallets / 6,000 kg",
    temp: "Ambient / Non-Refrigerated",
    specs: [
      "Heavy-duty pallet and carton freight",
      "Tail-lift for easy loading and unloading",
      "Fully insured for all cargo types",
      "Flexible scheduling for B2B routes",
    ],
    badge: "Largest Capacity",
  },
];

const techFeatures = [
  {
    icon: Thermometer,
    title: "Real-Time Temperature Logs",
    description: "IoT sensors in our refrigerated fleet upload temperature data every 30 seconds to our client dashboard — so you always know your cargo is safe.",
  },
  {
    icon: Wifi,
    title: "Live GPS Tracking",
    description: "Every vehicle in our fleet broadcasts live GPS coordinates throughout each delivery, giving you real-time visibility of your freight.",
  },
  {
    icon: MapPin,
    title: "Smart Route Optimisation",
    description: "Our automated routing system selects the fastest, most efficient path across Sydney — minimising delays and fuel usage on every run.",
  },
  {
    icon: Shield,
    title: "Full Insurance Coverage",
    description: "Every load carried by our fleet is fully insured. In the unlikely event of any issue, your goods are protected from pickup to delivery.",
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
            alt="Ali Logistics fleet"
            className="w-full h-full object-cover opacity-20 transform scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">
            Our Vehicles
          </p>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Our Fleet
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Three vehicle classes purpose-built for Sydney freight — refrigerated vans, refrigerated trucks, and general freight haulers, all fully insured and GPS tracked.
          </p>
        </div>
      </section>

      {/* 2. Vehicle Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-left mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-500">Vehicle Classes</span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Right Vehicle for Every Freight Job
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-light max-w-xl">
              Whether you need cold chain transport for perishables or a general freight truck for bulk pallets — we match the right vehicle to every load.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="group flex flex-col justify-between p-6 bg-slate-50 border border-slate-100 hover:border-sky-300/80 hover:bg-white hover:shadow-md transition-all duration-300 relative rounded-2xl h-full">
                <div>
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

                  <div className="space-y-4 text-left">
                    <span className="text-[9px] font-bold text-sky-600 uppercase tracking-[0.2em] block">{vehicle.type}</span>
                    <h3 className="font-sans text-2xl font-extrabold text-slate-900">{vehicle.name}</h3>

                    <div className="flex gap-4 border-t border-b border-slate-200/60 py-3 text-xs select-none">
                      <div className="flex items-center gap-1.5">
                        <Package className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span className="text-slate-600 font-light">{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5 border-l border-slate-200 pl-4">
                        <Snowflake className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span className="text-slate-600 font-light">{vehicle.temp}</span>
                      </div>
                    </div>

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

      {/* 3. Fleet Technology */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-left mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-500">Fleet Technology</span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tracking & Monitoring
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-light max-w-xl">
              Every vehicle in our fleet is equipped with GPS tracking and IoT monitoring technology — so you always have full visibility of your freight.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {techFeatures.map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <div key={idx} className="p-6 bg-white border border-slate-100 flex flex-col justify-between h-full rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="space-y-4">
                      <div className="w-8 h-8 bg-slate-900 text-sky-300 flex items-center justify-center rounded-md">
                        <FeatIcon className="w-4 h-4" />
                      </div>
                      <h4 className="font-sans text-base font-extrabold text-slate-900">{feat.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">{feat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Dashboard Mockup */}
            <div className="lg:col-span-6 w-full bg-slate-900 text-white border border-slate-800 p-6 sm:p-8 shadow-2xl relative select-none rounded-2xl">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-300 pl-2">
                  Live Fleet Monitor — Sydney
                </span>
              </div>

              <div className="space-y-4 text-left">
                {[
                  { name: "Ref. Van #04 (CBD Run)", status: "En Route", temp: "4.2°C", eta: "8 min", color: "text-emerald-400" },
                  { name: "Ref. Truck #09 (Parramatta)", status: "Loading", temp: "2.8°C", eta: "—", color: "text-amber-400" },
                  { name: "Freight Truck #12 (Blacktown)", status: "Delivered", temp: "Ambient", eta: "Done", color: "text-emerald-400" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white/5 border border-white/5 p-4 text-xs font-mono rounded-lg">
                    <div className="flex items-center gap-3">
                      <Truck className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="text-slate-200 font-light">{item.name}</span>
                    </div>
                    <span className={`font-semibold uppercase tracking-wider ${item.color}`}>{item.status}</span>
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

      {/* 4. Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-8 select-none">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Need a Freight Vehicle Across Sydney?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-light leading-relaxed">
            Tell us what you need to transport and we&apos;ll match you with the right vehicle — refrigerated or general freight — at competitive Sydney rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-900 text-white border border-slate-900 hover:bg-transparent hover:text-slate-900 transition-all duration-500 text-[10px] tracking-widest uppercase font-bold rounded-lg cursor-pointer">
              Get a Quote <ArrowRight className="w-4 h-4 ml-2 text-sky-400" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-slate-900 border border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-500 text-[10px] tracking-widest uppercase font-bold rounded-lg cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
