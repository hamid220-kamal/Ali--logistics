"use client";

import React from "react";
import {
  Truck,
  Snowflake,
  Package,
  ShieldCheck,
  Star,
  MapPin,
} from "lucide-react";

const whyChooseItems = [
  {
    icon: Truck,
    title: "Reliable & On-Time Deliveries",
    desc: "We run tight, optimised routes across Greater Sydney with a 99.8% on-time record. Your business depends on punctual freight — we deliver, every time.",
    tag: "Punctual · Dependable",
  },
  {
    icon: Snowflake,
    title: "Refrigerated Transport Specialists",
    desc: "Purpose-built cold chain vehicles with dual-zone temperature control ensure perishables, food products, and temperature-sensitive goods arrive in perfect condition.",
    tag: "Cold Chain · Temperature Controlled",
  },
  {
    icon: Package,
    title: "General Freight Solutions",
    desc: "From pallets and cartons to bulky goods — our general freight fleet handles loads of all sizes across Sydney and surrounding areas with care and efficiency.",
    tag: "All Cargo Types · B2B Ready",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    desc: "Every load we carry is fully insured, giving you complete peace of mind. Our insurance coverage protects your goods from pickup through to final delivery.",
    tag: "Insured · Risk-Free",
  },
  {
    icon: Star,
    title: "Professional Customer Service",
    desc: "Our dedicated team is available to help with bookings, tracking, and any transport queries. We build lasting partnerships through honest, responsive communication.",
    tag: "Responsive · Relationship-Driven",
  },
  {
    icon: MapPin,
    title: "Sydney Based",
    desc: "Proudly local. Our depot and team are based in Sydney, giving us unrivalled knowledge of local routes, traffic patterns, and business delivery requirements.",
    tag: "Local Expertise · Greater Sydney",
  },
];

export default function CommitmentsSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-16">

          {/* Company Quick Note Banner */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 sm:p-12 relative rounded-2xl max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:items-center justify-between text-white shadow-xl border border-slate-700/30">
            <div className="space-y-4 max-w-3xl text-left">
              <span className="text-[9px] font-bold tracking-[0.25em] text-sky-400 uppercase">
                About Ali Logistics
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl text-white font-extrabold leading-snug tracking-tight">
                Sydney&apos;s Trusted Freight Partner
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Ali Logistics provides dependable transport solutions for businesses across Sydney. Whether you need temperature-controlled refrigerated deliveries or reliable general freight runs, we ensure your goods arrive safely, on time, every time. We are fully insured, professionally staffed, and proud to be Sydney based.
              </p>
            </div>
            <div className="shrink-0 pt-4 md:pt-0">
              <div className="inline-flex flex-col items-center justify-center p-6 border border-slate-700 bg-white/5 backdrop-blur-md text-center min-w-[200px] rounded-xl">
                <span className="text-3xl font-sans font-extrabold text-sky-400 leading-none mb-1">
                  500+
                </span>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-none">
                  Sydney Businesses Served
                </span>
              </div>
            </div>
          </div>

          {/* Why Choose Ali Logistics Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-500">
                Why Choose Us
              </p>
              <h3 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Choose Ali Logistics?
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Six reasons why businesses across Greater Sydney trust us with their freight — day after day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
              {whyChooseItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 border border-slate-100 flex flex-col justify-between rounded-2xl h-full bg-slate-50 hover:border-sky-300/80 hover:bg-white hover:shadow-md transition-all duration-300 text-left"
                  >
                    <div className="space-y-5">
                      <div className="w-11 h-11 flex items-center justify-center bg-slate-900 text-sky-300 rounded-xl">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-sans text-lg font-extrabold text-slate-900">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-sky-500 uppercase tracking-widest font-bold pt-6 block">
                      {item.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
