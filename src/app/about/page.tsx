import React from "react";
import type { Metadata } from "next";
import { Compass, Lightbulb, Award, Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Ali Logistics",
  description:
    "Learn about Ali Logistics — our timeline, achievements, corporate values, and the words from our Managing Director about specialized bakery transport.",
};

const missionItems = [
  {
    num: "01",
    title: "Lead Specialized Food Logistics",
    text: "To become the state's undisputed premier transport system for bakery, patisserie, and temperature-controlled artisan cargo.",
  },
  {
    num: "02",
    title: "Secure Customer Satisfaction",
    text: "To create and maintain absolute customer satisfaction by achieving zero transit damages and 99.8% on-time arrivals.",
  },
  {
    num: "03",
    title: "Build Trusted Rapport",
    text: "To develop and build long-term rapport with master bakers, wholesale kitchens, and café owners across all route points.",
  },
  {
    num: "04",
    title: "Contribute to Food Communities",
    text: "To support the growth and socio-economic development of regional food networks and local culinary arts.",
  },
];

const achievements = [
  {
    title: "FDA Staging Compliance",
    desc: "Achieved full FDA compliance for specialized food transit, establishing daily sterilization logs and clean room cargo boxes.",
  },
  {
    title: "Air Suspension Rollout",
    desc: "Equipped entire fleet with calibrated low-frequency pneumatic airbags to eliminate transit vibrations on tiered cakes.",
  },
  {
    title: "IoT Dashboard System",
    desc: "Implemented real-time temperature telemetry streaming, letting partners monitor locker chambers from their phones.",
  },
  {
    title: "Commissary Logistics Hub",
    desc: "Opened our centralized staging warehouse in USJ, coordinating large-scale distribution runs for regional wholesale bakeries.",
  },
];

const timelineSteps = [
  { year: "2012", title: "Company Founded", desc: "Startup with 3 refrigerated vans serving local patisseries." },
  { year: "2015", title: "Dual-Chamber System", desc: "Introduced compartmentalised lockers tracking different temperatures." },
  { year: "2016", title: "Calibrated Fleet", desc: "Equipped all vans with pneumatic air suspension units." },
  { year: "2018", title: "FDA Staging Launch", desc: "Certified logistics hubs for direct food handling and packaging." },
  { year: "2020", title: "Staging Hub Relocation", desc: "Relocated to a modern warehouse facility in Subang Jaya." },
  { year: "2022", title: "IoT Dashboard Integration", desc: "Rolled out live-dispatch telemetry screens for clients." },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 font-sans">
      
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04eefb24fc91?q=80&w=1600&auto=format&fit=crop"
            alt="Artisan bakery dispatch"
            className="w-full h-full object-cover opacity-20 transform scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">
            Our Story & Path
          </p>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            All About Ali Logistics
          </h1>
          <p className="text-sm text-slate-250 max-w-xl mx-auto font-light">
            California&apos;s premier specialized bakery & temperature-controlled logistics network.
          </p>
        </div>
      </section>

      {/* 2. Corporate Bio / Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Heading */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-500">
                Corporate Bio
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                A Complete Logistic & Warehousing Service Starts Here
              </h2>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left text-sm text-slate-600 font-light leading-relaxed">
              <p>
                Ali Logistics was founded in 2012 with a single, clear objective: to construct a high-fidelity transportation ecosystem designed specifically to handle delicate food cargo. Standard logistics networks operate on rough sorting frameworks and uncalibrated cargo chambers — environments that compromise fragile bakery textures, flaky laminations, and temperature-sensitive cake structures.
              </p>
              <p>
                Operating from our main logistics staging hubs, we offer temperature-controlled route solutions, anti-vibration wedding cake transport, and third-party warehouse staging (3PL) tailored for artisan commissaries. Our specialized vehicles run optimised pre-dawn routes, coordinating with bakery chefs to secure morning delivery requirements cleanly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Mission Grid */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-left mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-600">
              Our Intent
            </span>
            <h3 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">
              The Mission Statements
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionItems.map((item, idx) => (
              <div key={idx} className="bg-white p-8 border border-slate-100 flex flex-col justify-between text-left h-full rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <span className="font-sans text-4xl font-black text-sky-500/30 leading-none mb-6 block">
                  {item.num}
                </span>
                <div className="space-y-2">
                  <h4 className="font-sans text-lg font-extrabold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Words from the Managing Director */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* MD Photo (Span 5) */}
            <div className="lg:col-span-5 relative w-full aspect-[3/4] max-w-[380px] mx-auto bg-transparent border border-slate-100 p-2 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
                alt="Desmond Sia, Managing Director"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 rounded-xl"
              />
              <div className="absolute bottom-6 -right-6 bg-slate-900 text-white py-4 px-6 border border-slate-800 rounded-xl shadow-lg select-none">
                <p className="text-[10px] font-bold tracking-widest uppercase text-sky-400">
                  Desmond Sia
                </p>
                <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-none mt-1">
                  Founder & MD
                </p>
              </div>
            </div>

            {/* Quote Block (Span 7) */}
            <div className="lg:col-span-7 space-y-8 text-left border-l-2 border-slate-950 pl-8 sm:pl-12 py-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-600">
                Leadership Message
              </h3>
              <blockquote className="font-sans text-xl sm:text-2xl text-slate-800 leading-relaxed italic font-light">
                &ldquo;Specialized logistics is not merely about transportation; it is about respecting the culinary craft. Every lamination, glaze, and proofing stage requires a logistics partner that understands physical food limits. We operate to protect your brand&apos;s standards.&rdquo;
              </blockquote>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                — Desmond Sia, Founder & Managing Director
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Milestones & Stats Banner */}
      <section className="py-16 bg-slate-900 text-white border-t border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center">
            
            <div className="space-y-2">
              <p className="font-sans text-4xl md:text-5xl text-sky-400 font-extrabold">12+ Years</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Since Company Establishment</p>
            </div>

            <div className="space-y-2 border-y md:border-y-0 md:border-x border-slate-800 py-6 md:py-0">
              <p className="font-sans text-4xl md:text-5xl text-sky-400 font-extrabold">868+ Clients</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Trusted Our Route Delivery</p>
            </div>

            <div className="space-y-2">
              <p className="font-sans text-4xl md:text-5xl text-sky-400 font-extrabold">5 Stars</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Client Satisfaction Rating</p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Achievements Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-left mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-600">
              Records
            </span>
            <h3 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Accomplishments
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((ach, idx) => (
              <div key={idx} className="p-8 border border-slate-100 flex flex-col justify-between text-left bg-slate-50 rounded-2xl h-full hover:border-sky-300/80 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <h4 className="font-sans text-lg font-extrabold text-slate-900">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {ach.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gallery Section */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full aspect-[4/3] overflow-hidden border border-slate-100 p-1.5 bg-slate-50 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038024a?q=80&w=600&auto=format&fit=crop"
                alt="Kitchen staging"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 rounded-xl"
              />
            </div>
            <div className="w-full aspect-[4/3] overflow-hidden border border-slate-100 p-1.5 bg-slate-50 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=600&auto=format&fit=crop"
                alt="Pastry locker"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 rounded-xl"
              />
            </div>
            <div className="w-full aspect-[4/3] overflow-hidden border border-slate-100 p-1.5 bg-slate-50 rounded-2xl sm:col-span-2 lg:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop"
                alt="Cold Chain logistics"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Vertical Timeline Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-left font-sans">
          
          <div className="mb-16 space-y-4 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-600">
              Chronology
            </span>
            <h3 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Timeline & Milestones
            </h3>
          </div>

          <div className="relative border-l border-slate-200 ml-4 sm:ml-6 space-y-12">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10">
                {/* Timeline node dot */}
                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-sky-500 border border-white z-10" />
                <div className="space-y-1">
                  <span className="font-sans text-sm font-bold text-sky-600">
                    {step.year}
                  </span>
                  <h4 className="font-sans text-lg font-extrabold text-slate-900">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
