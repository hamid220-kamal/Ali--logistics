import React from "react";
import type { Metadata } from "next";
import {
  Croissant,
  Cake,
  IceCreamCone,
  Thermometer,
  MapPin,
  Clock,
  ShieldCheck,
  Wifi,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Ali Logistics transport services — from daily bread routes to temperature-controlled pastry delivery and specialty cake transport.",
};

const services = [
  {
    id: "breads",
    icon: Croissant,
    title: "Croissants & Artisan Breads",
    subtitle: "Daily Scheduled Routes",
    description:
      "Our most popular service. We handle the daily rhythm of bakery logistics — picking up fresh-baked breads, croissants, bagels, and morning pastries from your ovens and delivering them to cafés, grocery partners, and direct customers before the morning rush.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    features: [
      {
        icon: Clock,
        label: "Pre-dawn pickups starting at 3 AM",
      },
      {
        icon: MapPin,
        label: "Multi-stop optimized route planning",
      },
      {
        icon: ShieldCheck,
        label: "Ventilated trays prevent condensation",
      },
      {
        icon: Wifi,
        label: "Real-time GPS tracking for every delivery",
      },
    ],
    accent: "bg-gold-light",
    accentDark: "text-gold-dark",
  },
  {
    id: "cakes",
    icon: Cake,
    title: "Large Tiered & Wedding Cakes",
    subtitle: "Special Event Transport",
    description:
      "Our specialty. Transporting multi-tier cakes requires precision engineering — custom suspension systems, anti-vibration platforms, adjustable rack spacing, and climate control. We've delivered thousands of wedding and event cakes without a single topple.",
    image:
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1200&auto=format&fit=crop",
    features: [
      {
        icon: ShieldCheck,
        label: "Custom anti-vibration platforms",
      },
      {
        icon: Thermometer,
        label: "Climate-controlled at 18°C–22°C",
      },
      {
        icon: Clock,
        label: "White-glove setup at venue",
      },
      {
        icon: MapPin,
        label: "Dedicated driver — no multi-stops",
      },
    ],
    accent: "bg-sage-light",
    accentDark: "text-sage-dark",
  },
  {
    id: "pastries",
    icon: IceCreamCone,
    title: "Cooled Pastries & Desserts",
    subtitle: "Temperature Controlled Delivery",
    description:
      "Chocolate ganache, crème brûlée, mousse cakes, and fresh fruit tarts — products that demand unwavering temperature precision. Our IoT-enabled refrigeration units maintain your exact specifications from pickup to delivery, with real-time monitoring you can track from your phone.",
    image:
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1200&auto=format&fit=crop",
    features: [
      {
        icon: Thermometer,
        label: "Precision range: 2°C – 8°C",
      },
      {
        icon: Wifi,
        label: "Live IoT temperature dashboard",
      },
      {
        icon: ShieldCheck,
        label: "Automatic alerts if temp deviates",
      },
      {
        icon: Clock,
        label: "Full chain-of-custody temperature logs",
      },
    ],
    accent: "bg-gold-light",
    accentDark: "text-gold-dark",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-espresso">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2832&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 to-espresso" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cream/80 text-sm font-semibold tracking-wide uppercase mb-6">
            Our Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
            Every Baked Good,
            <br />
            <span className="text-gradient-gold">Handled Perfectly</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto">
            Three specialized transport categories — each with tailored
            vehicles, handling protocols, and monitoring technology.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 md:h-[420px] object-cover"
                    />
                  </div>
                  <div
                    className={`absolute -bottom-4 ${
                      index % 2 === 1 ? "-left-4" : "-right-4"
                    } ${service.accent} rounded-2xl p-4 shadow-lg`}
                  >
                    <service.icon
                      className={`w-8 h-8 ${service.accentDark}`}
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 ${service.accent} ${service.accentDark}`}
                >
                  {service.subtitle}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-espresso mb-4">
                  {service.title}
                </h2>
                <p className="text-espresso-muted leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg ${service.accent} flex items-center justify-center shrink-0`}
                      >
                        <feature.icon
                          className={`w-4 h-4 ${service.accentDark}`}
                        />
                      </div>
                      <span className="text-sm font-medium text-espresso">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Button href="/quote" variant="primary">
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
