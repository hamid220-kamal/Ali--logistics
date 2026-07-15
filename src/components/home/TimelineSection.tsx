import React from "react";
import { PhoneCall, CalendarCheck, Truck, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const flowSteps = [
  {
    step: "Step 1",
    title: "Book Your Pickup",
    description: "Contact us online, by phone, or via our quote form. Tell us what you need transported, where from, and when — and we'll confirm your booking fast.",
    icon: PhoneCall,
  },
  {
    step: "Step 2",
    title: "We Collect From You",
    description: "Our driver arrives at your premises at the agreed time. We handle the loading carefully and securely, with the right vehicle matched to your freight type.",
    icon: CalendarCheck,
  },
  {
    step: "Step 3",
    title: "Safe Transit & Tracking",
    description: "Your goods are transported in the appropriate vehicle — refrigerated or general freight — with real-time GPS tracking available throughout the journey.",
    icon: Truck,
  },
  {
    step: "Step 4",
    title: "On-Time Delivery Confirmed",
    description: "We deliver to your specified location safely and on time. You receive delivery confirmation, and our team follows up to ensure your satisfaction.",
    icon: CheckCircle2,
  },
];

export default function TimelineSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="How It Works"
          title="Our Simple Delivery Process"
          subtitle="From your first call to the final delivery confirmation — four straightforward steps to get your freight moving across Sydney."
        />

        <div className="relative mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10">
            {flowSteps.map((step, idx) => (
              <Card key={idx} hover padding="lg" className="flex flex-col justify-between h-auto bg-slate-50 border border-slate-100 shadow-sm relative group rounded-2xl">
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
                      {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-sky-300 group-hover:scale-110 transition-transform">
                      <step.icon className="w-4 h-4" />
                    </div>
                  </div>

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
