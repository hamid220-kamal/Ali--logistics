import React from "react";
import type { Metadata } from "next";
import {
  Thermometer,
  Wifi,
  MapPin,
  Shield,
  Gauge,
  Snowflake,
  Truck,
  Box,
  ArrowRight,
} from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Explore the Ali Logistics fleet — insulated cargo vans, refrigerated trucks, and event haulers equipped with IoT temperature monitoring and GPS dispatch.",
};

const vehicles = [
  {
    name: "Compact Bakery Van",
    type: "Daily Routes",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop",
    capacity: "Up to 150 trays",
    temp: "Ambient / Ventilated",
    specs: [
      "Food-grade insulated cargo bay",
      "Ventilated rack system",
      "GPS tracking & route optimization",
      "Rear & side loading doors",
    ],
    badge: "Most Popular",
    badgeColor: "bg-gold text-espresso",
  },
  {
    name: "Medium Refrigerated",
    type: "Temperature Controlled",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    capacity: "Up to 300 trays",
    temp: "2°C – 25°C Adjustable",
    specs: [
      "Dual-zone refrigeration unit",
      "IoT temperature sensors (4 zones)",
      "Automatic temperature logging",
      "Humidity control system",
    ],
    badge: "Best for Pastries",
    badgeColor: "bg-sage text-espresso",
  },
  {
    name: "Large Event Hauler",
    type: "Special Events",
    image:
      "https://images.unsplash.com/photo-1601584115197-04eefb24fc91?q=80&w=800&auto=format&fit=crop",
    capacity: "Up to 500 trays / 20 tiered cakes",
    temp: "Climate Controlled",
    specs: [
      "Anti-vibration suspension system",
      "Custom adjustable cake racks",
      "Hydraulic lift gate for loading",
      "White-glove delivery protocol",
    ],
    badge: "Premium",
    badgeColor: "bg-espresso text-cream",
  },
];

const techFeatures = [
  {
    icon: Thermometer,
    title: "Real-Time Temperature",
    description:
      "4-zone IoT sensors report temperature every 30 seconds. Access live readings from your dashboard or mobile app.",
  },
  {
    icon: Wifi,
    title: "Connected Fleet",
    description:
      "Every vehicle streams GPS location, door status, temperature, and estimated arrival time to our dispatch center.",
  },
  {
    icon: MapPin,
    title: "Smart Route Optimization",
    description:
      "AI-powered route planning minimizes transit time and ensures the freshest delivery windows for each bakery.",
  },
  {
    icon: Shield,
    title: "Safety Monitoring",
    description:
      "Automatic alerts for temperature deviations, harsh braking, or door-open events. Full incident reporting and chain-of-custody logs.",
  },
];

export default function FleetPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-espresso">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2832&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 to-espresso" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cream/80 text-sm font-semibold tracking-wide uppercase mb-6">
            Our Fleet
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
            Purpose-Built for
            <br />
            <span className="text-gradient-gold">Bakery Perfection</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto">
            Three vehicle classes, each engineered with specialized features for
            different bakery transport needs.
          </p>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Vehicle Classes"
            title="The Right Vehicle for Every Run"
            subtitle="From a quick croissant run to a cross-city wedding cake delivery — we match the perfect vehicle to your cargo."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {vehicles.map((vehicle, index) => (
              <Card key={index} padding="sm" className="group overflow-hidden">
                {/* Image */}
                <div className="relative h-52 md:h-56 rounded-xl overflow-hidden mb-5">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge */}
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${vehicle.badgeColor}`}
                  >
                    {vehicle.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="px-2 pb-2">
                  <span className="text-xs font-semibold text-espresso-muted uppercase tracking-wider">
                    {vehicle.type}
                  </span>
                  <h3 className="text-xl font-bold text-espresso mt-1 mb-3">
                    {vehicle.name}
                  </h3>

                  {/* Quick Stats */}
                  <div className="flex gap-4 mb-5">
                    <div className="flex items-center gap-2">
                      <Box className="w-4 h-4 text-gold-dark" />
                      <span className="text-xs text-espresso-muted">
                        {vehicle.capacity}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-sage-dark" />
                      <span className="text-xs text-espresso-muted">
                        {vehicle.temp}
                      </span>
                    </div>
                  </div>

                  {/* Specs */}
                  <ul className="space-y-2.5 mb-6">
                    {vehicle.specs.map((spec, si) => (
                      <li
                        key={si}
                        className="flex items-start gap-2 text-sm text-espresso-muted"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <Button href="/quote" variant="outline" size="sm" className="w-full">
                    Request This Vehicle
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Technology */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Fleet Technology"
            title="IoT-Powered Monitoring"
            subtitle="Every vehicle in our fleet is equipped with cutting-edge monitoring technology for complete visibility and control."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Tech Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {techFeatures.map((feature, index) => (
                <Card key={index} padding="md" className="group">
                  <div className="w-10 h-10 rounded-xl bg-gold-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-gold-dark" />
                  </div>
                  <h3 className="text-sm font-bold text-espresso mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-espresso-muted leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>

            {/* Dashboard Mockup */}
            <div className="bg-espresso rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-cream/40">
                  Fleet Monitor — Live Dashboard
                </span>
              </div>

              {/* Mock Dashboard */}
              <div className="space-y-4">
                {[
                  { name: "Van #12", status: "En Route", temp: "4.2°C", eta: "12 min", color: "bg-sage" },
                  { name: "Van #07", status: "Loading", temp: "21°C", eta: "—", color: "bg-gold" },
                  { name: "Truck #03", status: "Delivered", temp: "6.1°C", eta: "Done", color: "bg-sage" },
                ].map((v, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <Truck className="w-4 h-4 text-cream/40" />
                      <span className="text-sm font-medium text-cream">
                        {v.name}
                      </span>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-semibold ${v.color} text-espresso`}
                    >
                      {v.status}
                    </span>
                    <div className="flex items-center gap-1">
                      <Snowflake className="w-3 h-3 text-sage" />
                      <span className="text-xs text-cream/60">{v.temp}</span>
                    </div>
                    <span className="text-xs text-cream/40">ETA: {v.eta}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-espresso mb-4">
            Ready to See Our Fleet in Action?
          </h2>
          <p className="text-espresso-muted text-lg mb-8 max-w-2xl mx-auto">
            Schedule a fleet visit or request a demo of our IoT monitoring
            dashboard. We&apos;d love to show you around.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="primary" size="lg">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
