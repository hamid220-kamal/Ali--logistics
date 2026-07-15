"use client";

import React from "react";
import { Award, Lightbulb, Compass } from "lucide-react";

export default function CommitmentsSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-16">
          
          {/* Quick Note Block */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 sm:p-12 relative rounded-2xl max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:items-center justify-between text-white shadow-xl border border-slate-700/30">
            <div className="space-y-4 max-w-3xl text-left">
              <span className="text-[9px] font-bold tracking-[0.25em] text-sky-400 uppercase">
                Corporate Footprint
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl text-white font-extrabold leading-snug tracking-tight">
                Quick Note on Ali Logistics
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Operating a highly specialized temperature-controlled network designed solely to serve bakers and patisseries. Since our inception, we have scaled optimized routes connecting central commissaries to cafés, catering nodes, and retailers. We guarantee that every shipment maintains physical integrity, humidity balance, and temperature parameters.
              </p>
            </div>
            <div className="shrink-0 pt-4 md:pt-0">
              <div className="inline-flex flex-col items-center justify-center p-6 border border-slate-700 bg-white/5 backdrop-blur-md text-center min-w-[200px] rounded-xl">
                <span className="text-3xl font-sans font-extrabold text-sky-400 leading-none mb-1">
                  12+
                </span>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-none">
                  Years of Route Expertise
                </span>
              </div>
            </div>
          </div>

          {/* Commitments Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-500">
                Our Guarantees
              </p>
              <h3 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Commitments to the Road of Success
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
              
              {/* Card 1 */}
              <div className="p-8 border border-slate-100 flex flex-col justify-between rounded-2xl h-full bg-slate-50 hover:border-sky-300/80 hover:bg-white hover:shadow-md transition-all duration-300 text-left">
                <div className="space-y-6">
                  <div className="w-10 h-10 flex items-center justify-center bg-slate-900 text-sky-300 rounded-lg">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-sans text-xl font-bold text-slate-900">
                      Our Core Values
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      We treat warm bread, bagels, and delicate pastry boxes with extreme care and honesty. We coordinate loading, timing, and transport profiles exactly as agreed with no compromises.
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-sky-500 uppercase tracking-widest font-bold pt-6">
                  Care · Integrity · Reliability
                </span>
              </div>

              {/* Card 2 */}
              <div className="p-8 border border-slate-100 flex flex-col justify-between rounded-2xl h-full bg-slate-50 hover:border-sky-300/80 hover:bg-white hover:shadow-md transition-all duration-300 text-left">
                <div className="space-y-6">
                  <div className="w-10 h-10 flex items-center justify-center bg-slate-900 text-sky-300 rounded-lg">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-sans text-xl font-bold text-slate-900">
                      Vision For Freshness
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      To make shipping invisible. Every café owner should open their morning deliveries to find pastry glazes, flaky laminations, and bread crusts looking exactly as they did in the kitchen.
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-sky-500 uppercase tracking-widest font-bold pt-6">
                  Freshness Preservation
                </span>
              </div>

              {/* Card 3 */}
              <div className="p-8 border border-slate-100 flex flex-col justify-between rounded-2xl h-full bg-slate-50 hover:border-sky-300/80 hover:bg-white hover:shadow-md transition-all duration-300 text-left">
                <div className="space-y-6">
                  <div className="w-10 h-10 flex items-center justify-center bg-slate-900 text-sky-300 rounded-lg">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-sans text-xl font-bold text-slate-900">
                      Specialized Logistics Provider
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      Utilizing IoT-calibrated dual chambers, dampening anti-vibration suspensions, and food-safe sanitised racks to lead the regional bakery transport sector.
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-sky-500 uppercase tracking-widest font-bold pt-6">
                  Advanced Cold Chain
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
