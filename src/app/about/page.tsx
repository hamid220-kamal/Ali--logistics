import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ali Logistics",
  description:
    "Learn about Ali Logistics — Sydney's trusted refrigerated and general freight transport company. Our story, values, leadership, and milestones.",
};

const missionItems = [
  {
    num: "01",
    title: "Reliable Transport for Every Business",
    text: "To be Sydney's most dependable freight partner — delivering on time, every time, for businesses of all sizes across Greater Sydney and surrounding areas.",
  },
  {
    num: "02",
    title: "Cold Chain Excellence",
    text: "To set the standard for refrigerated transport in Sydney — maintaining precise temperature control and compliance across every cold chain delivery we complete.",
  },
  {
    num: "03",
    title: "Build Long-Term Partnerships",
    text: "To develop and maintain strong, trusted relationships with our clients — understanding their business needs and growing alongside them as their freight partner.",
  },
  {
    num: "04",
    title: "Contribute to Sydney Business",
    text: "To support the growth and efficiency of Sydney's business community through dependable logistics infrastructure that helps businesses thrive and expand.",
  },
];

const achievements = [
  {
    title: "Full Insurance Coverage",
    desc: "Every load we carry is fully insured from pickup to delivery, giving our clients complete peace of mind on every freight run.",
  },
  {
    title: "Refrigerated Fleet Launch",
    desc: "Expanded into cold chain transport with a purpose-built refrigerated fleet, serving food, dairy, and pharmaceutical clients across Sydney.",
  },
  {
    title: "GPS Tracking Integration",
    desc: "Implemented real-time GPS tracking across our entire fleet, giving clients live visibility of their freight at all times.",
  },
  {
    title: "Sydney Staging Hub",
    desc: "Opened our central Sydney staging warehouse, enabling cross-docking and 3PL distribution services for growing business clients.",
  },
];

const timelineSteps = [
  { year: "2010", title: "Company Founded", desc: "Started with 2 vans serving local Sydney businesses with general freight runs." },
  { year: "2013", title: "Fleet Expansion", desc: "Grew to 10 vehicles and extended coverage to Greater Sydney and surrounding areas." },
  { year: "2015", title: "Refrigerated Transport Launch", desc: "Added purpose-built refrigerated vehicles, entering the cold chain market." },
  { year: "2017", title: "GPS Tracking Rollout", desc: "Fitted entire fleet with live GPS tracking for client visibility." },
  { year: "2019", title: "Sydney Staging Warehouse", desc: "Opened central depot enabling 3PL warehousing and distribution services." },
  { year: "2023", title: "500+ Clients Milestone", desc: "Proudly surpassed 500 active Sydney business clients across all service lines." },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 font-sans">

      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519003300449-424ad0405076?q=80&w=1600&auto=format&fit=crop"
            alt="Sydney freight transport"
            className="w-full h-full object-cover opacity-20 transform scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">
            Our Story & Values
          </p>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            About Ali Logistics
          </h1>
          <p className="text-sm text-slate-200 max-w-xl mx-auto font-light">
            Moving Goods, Building Relationships — Sydney&apos;s trusted refrigerated and general freight partner.
          </p>
        </div>
      </section>

      {/* 2. Corporate Bio */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-500">
                Who We Are
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Sydney&apos;s Trusted Freight & Transport Partner
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-left text-sm text-slate-600 font-light leading-relaxed">
              <p>
                Ali Logistics was founded with a clear purpose: to provide Sydney businesses with dependable, professional freight transport they could count on every single day. Standard logistics networks don&apos;t always match the specific needs of businesses — unreliable timing, uncalibrated temperature control, and poor communication can cause real problems. We built Ali Logistics to solve that.
              </p>
              <p>
                Operating from our Sydney depot, we offer refrigerated cold chain deliveries, general freight runs, express delivery, and 3PL warehousing. Our fully insured fleet and professional team serve over 500 businesses across Greater Sydney — from food manufacturers and pharmaceutical distributors to retailers and wholesale suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission Grid */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-left mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-600">
              Our Purpose
            </span>
            <h3 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Mission
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

      {/* 4. Leadership Message */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative w-full aspect-[3/4] max-w-[380px] mx-auto bg-transparent border border-slate-100 p-2 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
                alt="Ali Logistics Director"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 rounded-xl"
              />
              <div className="absolute bottom-6 -right-6 bg-slate-900 text-white py-4 px-6 border border-slate-800 rounded-xl shadow-lg select-none">
                <p className="text-[10px] font-bold tracking-widest uppercase text-sky-400">
                  Ali Rahman
                </p>
                <p className="text-[9px] text-slate-400 uppercase tracking-widest leading-none mt-1">
                  Founder & Director
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-left border-l-2 border-slate-950 pl-8 sm:pl-12 py-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-600">
                A Message From Our Director
              </h3>
              <blockquote className="font-sans text-xl sm:text-2xl text-slate-800 leading-relaxed italic font-light">
                &ldquo;Reliable freight is the backbone of every successful business. At Ali Logistics, we don&apos;t just move goods — we build relationships. When our clients trust us with their freight, we treat it as if it were our own. That commitment to reliability is what drives everything we do.&rdquo;
              </blockquote>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                — Ali Rahman, Founder & Director, Ali Logistics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stats Banner */}
      <section className="py-16 bg-slate-900 text-white border-t border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center">
            <div className="space-y-2">
              <p className="font-sans text-4xl md:text-5xl text-sky-400 font-extrabold">10+ Years</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Serving Sydney Businesses</p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-slate-800 py-6 md:py-0">
              <p className="font-sans text-4xl md:text-5xl text-sky-400 font-extrabold">500+ Clients</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Active Sydney Business Partners</p>
            </div>
            <div className="space-y-2">
              <p className="font-sans text-4xl md:text-5xl text-sky-400 font-extrabold">Fully Insured</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Every Load, Every Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Achievements */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-left mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-600">Milestones</span>
            <h3 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">Our Key Achievements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((ach, idx) => (
              <div key={idx} className="p-8 border border-slate-100 flex flex-col justify-between text-left bg-slate-50 rounded-2xl h-full hover:border-sky-300/80 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="space-y-4">
                  <h4 className="font-sans text-lg font-extrabold text-slate-900">{ach.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gallery */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1519003300449-424ad0405076?q=80&w=600&auto=format&fit=crop", alt: "Sydney freight truck" },
              { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop", alt: "Warehouse operations" },
              { src: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600&auto=format&fit=crop", alt: "Distribution centre" },
            ].map((img, i) => (
              <div key={i} className="w-full aspect-[4/3] overflow-hidden border border-slate-100 p-1.5 bg-slate-50 rounded-2xl">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Timeline */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-left font-sans">
          <div className="mb-16 space-y-4 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-600">Our Journey</span>
            <h3 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">Company Timeline</h3>
          </div>
          <div className="relative border-l border-slate-200 ml-4 sm:ml-6 space-y-12">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10">
                <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-sky-500 border border-white z-10" />
                <div className="space-y-1">
                  <span className="font-sans text-sm font-bold text-sky-600">{step.year}</span>
                  <h4 className="font-sans text-lg font-extrabold text-slate-900">{step.title}</h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed max-w-xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
