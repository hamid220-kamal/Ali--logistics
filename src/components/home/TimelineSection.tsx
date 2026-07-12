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
    <section className="py-20 md:py-28 bg-[#FAF7F0] relative overflow-hidden">
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
              <Card key={idx} hover padding="lg" className="flex flex-col justify-between h-auto bg-warm-white border border-gold/15 shadow-sm relative group">
                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gold-dark bg-gold-light/45 px-3 py-1 rounded-full">
                      {step.time}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-sage-light flex items-center justify-center text-sage-dark group-hover:scale-110 transition-transform">
                      <step.icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Body */}
                  <div className="space-y-2">
                    <h4 className="font-display text-lg font-bold text-espresso leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-espresso-muted text-xs leading-relaxed">
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
