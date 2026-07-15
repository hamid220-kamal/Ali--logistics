import React from "react";
import { Clock, Truck, ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const flowSteps = [
  {
    time: "03:00 AM",
    title: "Pre-Cooling & Diagnostic Checks",
    description: "Refrigerated vehicle locker compartments are pre-cooled to their required temperatures (down to 2°C) and diagnostic IoT sensors are calibrated.",
    icon: Clock,
  },
  {
    time: "04:00 AM",
    title: "Oven-Fresh Loading",
    description: "Breads, croissants, and fragile event cakes are carefully loaded directly from hot bakery ovens into custom shock-absorbing cabinets.",
    icon: ShieldCheck,
  },
  {
    time: "05:30 AM",
    title: "Monitored Safe Transit",
    description: "Drivers follow AI-optimized routes while live temperature readings and suspension telemetry are continuously streamed to our dispatch center.",
    icon: Truck,
  },
  {
    time: "07:00 AM",
    title: "Café & Shelf Stocking Completed",
    description: "Baked goods are hand-delivered and placed on café shelves, pristine and fresh, before the first morning customer arrives.",
    icon: CheckCircle2,
  },
];

export default function TimelineSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionHeading
          label="Operational Excellence"
          title="The Early Morning Flow"
          subtitle="Every delivery follows a precise sequence to protect texture, structure, and freshness."
        />

        {/* Desktop Horizontal / Mobile Vertical Timeline */}
        <div className="relative mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10">
            {flowSteps.map((step, idx) => (
              <Card key={idx} hover padding="lg" className="flex flex-col justify-between h-auto bg-slate-50 border border-slate-100 shadow-sm relative group rounded-2xl">
                <div className="space-y-4 text-left">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
                      {step.time}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                      <step.icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Body */}
                  <div className="space-y-2">
                    <h4 className="font-sans text-lg font-extrabold text-slate-900 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
