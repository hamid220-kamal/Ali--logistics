import React from "react";
import { Snowflake, Package, Zap, Warehouse, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Snowflake,
    badge: "Cold Chain",
    title: "Refrigerated Transport",
    desc: "Temperature-controlled deliveries for food, dairy, pharmaceuticals, and any perishable goods. Our refrigerated fleet maintains precise temperature zones from pickup to drop-off.",
    features: ["Dual-zone temperature control", "IoT temperature monitoring", "Food-grade insulated containers"],
    href: "/services#refrigerated",
  },
  {
    icon: Package,
    badge: "General Freight",
    title: "General Freight Solutions",
    desc: "Reliable transport for pallets, cartons, and bulky goods across Greater Sydney. No load too small, no route too complex — we handle B2B freight of all sizes.",
    features: ["Pallets & carton freight", "Bulky goods transport", "Multi-stop route runs"],
    href: "/services#general",
  },
  {
    icon: Zap,
    badge: "Express",
    title: "Express Delivery",
    desc: "When timing is critical, our express service ensures same-day or next-day delivery across Sydney. Fast, tracked, and fully insured for urgent freight needs.",
    features: ["Same-day & next-day options", "Real-time GPS tracking", "Priority handling"],
    href: "/services#express",
  },
  {
    icon: Warehouse,
    badge: "Warehousing",
    title: "Warehousing & Distribution",
    desc: "Our Sydney staging facility offers cross-docking, inventory management, and last-mile distribution — the complete 3PL solution for growing Sydney businesses.",
    features: ["Cross-dock staging", "Inventory management", "Last-mile dispatch"],
    href: "/services#warehousing",
  },
];

export default function ServicePreviewCards() {
  return (
    <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          label="Our Services"
          title="Complete Freight Solutions for Sydney Businesses"
          subtitle="From cold chain refrigerated runs to general freight distribution — we have the right vehicle, the right team, and the right routes for your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mt-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="flex flex-col h-full">
                <Card hover padding="lg" className="flex-1 flex flex-col justify-between overflow-hidden relative group bg-white border border-slate-100 h-full rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative z-10 space-y-5 text-left">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-sky-50 text-sky-700 font-bold text-[10px] rounded-full uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5 text-sky-600" />
                      {service.badge}
                    </div>

                    <h3 className="font-sans text-xl font-extrabold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed font-light">
                      {service.desc}
                    </p>

                    <div className="space-y-2 pt-1">
                      {service.features.map((feat, fi) => (
                        <div key={fi} className="flex items-center gap-2.5 text-xs text-slate-800">
                          <div className="w-5 h-5 rounded-md bg-sky-50 flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                          </div>
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-6 flex items-center justify-between border-t border-slate-100 mt-8">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-sky-600 group/link"
                    >
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/quote" className="text-[10px] font-bold uppercase tracking-wider text-sky-600 hover:text-sky-800 transition-colors">
                      Get Quote
                    </Link>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
