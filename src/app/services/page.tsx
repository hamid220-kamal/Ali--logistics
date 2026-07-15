import React from "react";
import type { Metadata } from "next";
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  Thermometer,
  Compass,
  ArrowRight,
  Snowflake,
  Package,
  Zap,
  Warehouse,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Ali Logistics",
  description:
    "Explore Ali Logistics' full range of freight services — refrigerated cold chain transport, general freight, express delivery, and warehousing across Sydney and surrounding areas.",
};

const serviceDetails = [
  {
    id: "refrigerated",
    badge: "Cold Chain",
    icon: Snowflake,
    title: "Refrigerated Transport",
    desc: "Ali Logistics operates a purpose-built refrigerated fleet for businesses that demand precise temperature control throughout transit. From food and dairy to pharmaceuticals and cosmetics, our dual-zone cold chain vehicles protect your goods from pickup to delivery.",
    image: "https://images.unsplash.com/photo-1601584115197-04eefb24fc91?q=80&w=1200&auto=format&fit=crop",
    capabilities: [
      { icon: Thermometer, label: "Dual-zone temperature control (2°C – 8°C adjustable)" },
      { icon: Clock, label: "IoT temperature monitoring with live client dashboard access" },
      { icon: ShieldCheck, label: "Food-grade insulated containers and cargo hygiene standards" },
      { icon: CheckCircle2, label: "Full temperature logs provided for compliance and audit" },
    ],
  },
  {
    id: "general",
    badge: "General Freight",
    icon: Package,
    title: "General Freight Solutions",
    desc: "Our general freight service covers the full spectrum of B2B transport requirements across Greater Sydney. Whether you're moving pallets, cartons, or oversized equipment, our fleet has the capacity and the experience to handle it efficiently.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    capabilities: [
      { icon: Package, label: "Pallets, cartons, and bulky goods transport" },
      { icon: Compass, label: "Multi-stop route optimization across Greater Sydney" },
      { icon: ShieldCheck, label: "Fully insured loads with proof of delivery" },
      { icon: CheckCircle2, label: "Flexible scheduling — daily, weekly, or ad-hoc" },
    ],
  },
  {
    id: "express",
    badge: "Express",
    icon: Zap,
    title: "Express Delivery",
    desc: "When every hour matters, our express service delivers. We offer same-day and next-day freight runs across Sydney with priority handling, real-time GPS tracking, and a commitment to on-time delivery — every time.",
    image: "https://images.unsplash.com/photo-1519003300449-424ad0405076?q=80&w=1200&auto=format&fit=crop",
    capabilities: [
      { icon: Zap, label: "Same-day and next-day delivery across Sydney" },
      { icon: Clock, label: "Priority pickup and handling for urgent freight" },
      { icon: Compass, label: "Live GPS tracking accessible by the client" },
      { icon: CheckCircle2, label: "Delivery confirmation with timestamp and signature" },
    ],
  },
  {
    id: "warehousing",
    badge: "3PL Warehousing",
    icon: Warehouse,
    title: "Warehousing & Distribution",
    desc: "Our Sydney staging facility offers third-party logistics (3PL) services — cross-docking, inventory management, and coordinated last-mile distribution. Perfect for growing businesses that need a reliable logistics backbone without the overhead of their own warehouse.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop",
    capabilities: [
      { icon: Warehouse, label: "Secure Sydney staging and cross-dock facility" },
      { icon: Clock, label: "Time-slotted inbound and outbound scheduling" },
      { icon: ShieldCheck, label: "Inventory management and stock reporting" },
      { icon: CheckCircle2, label: "Last-mile dispatch to retail, hospitality, and B2B clients" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-slate-900 font-sans">

      {/* 1. Hero Banner Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04eefb24fc91?q=80&w=1600&auto=format&fit=crop"
            alt="Sydney freight transport"
            className="w-full h-full object-cover opacity-20 transform scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">
            Our Services
          </p>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Complete Freight Solutions
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Refrigerated transport, general freight, express delivery, and warehousing — everything your Sydney business needs, under one roof.
          </p>
        </div>
      </section>

      {/* 2. Service Detail Sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-32">
          {serviceDetails.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-mt-24"
              >
                {/* Image Column */}
                <div className={`lg:col-span-5 relative w-full aspect-[4/3] bg-transparent border border-slate-100 p-2 rounded-2xl ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 rounded-xl"
                  />
                </div>

                {/* Detail Column */}
                <div className={`lg:col-span-7 space-y-8 text-left ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}>
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-sky-50 text-sky-700 font-bold text-[10px] rounded-full uppercase tracking-wider">
                      <ServiceIcon className="w-3.5 h-3.5 text-sky-600" />
                      {service.badge}
                    </div>
                    <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                      {service.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                    {service.capabilities.map((cap, capIdx) => {
                      const CapIcon = cap.icon;
                      return (
                        <div key={capIdx} className="flex items-start gap-3">
                          <div className="w-7 h-7 bg-slate-900 text-sky-300 flex items-center justify-center shrink-0 rounded-md">
                            <CapIcon className="w-4 h-4" />
                          </div>
                          <span className="text-xs text-slate-700 leading-relaxed font-light">
                            {cap.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/quote"
                      className="inline-flex items-center justify-center px-6 py-3 border border-slate-900 text-[10px] tracking-widest uppercase font-bold text-slate-900 bg-transparent hover:bg-slate-900 hover:text-white transition-all duration-500 rounded-lg cursor-pointer"
                    >
                      Request a Quote
                      <ArrowRight className="w-3.5 h-3.5 ml-2 text-sky-600" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-8 select-none">
          <h3 className="font-sans text-3xl sm:text-4xl font-extrabold text-white leading-snug tracking-tight">
            Ready to Move Freight Across Sydney?
          </h3>
          <p className="text-sm text-slate-350 max-w-xl mx-auto font-light leading-relaxed">
            Speak with our team about refrigerated runs, general freight routes, or express delivery requirements across Greater Sydney.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 border border-white hover:bg-transparent hover:text-white transition-all duration-500 text-[10px] tracking-widest uppercase font-bold rounded-lg cursor-pointer"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 text-sky-600" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
