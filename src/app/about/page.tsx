import React from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Sparkles,
  Clock4,
  HeartHandshake,
  Leaf,
  Award,
} from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ali Logistics — our mission, values, and commitment to specialized bakery transport with food safety, hygiene, and punctual morning deliveries.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Food Safety First",
    description:
      "Every vehicle meets FDA food transport regulations. Our cargo areas are lined with food-grade materials and sanitized between every run.",
    color: "bg-sage-light",
    iconColor: "text-sage-dark",
  },
  {
    icon: Sparkles,
    title: "Pristine Hygiene",
    description:
      "Our drivers follow strict hygiene protocols with daily temperature logs, sanitation checklists, and clean uniforms — because bakery products deserve the best.",
    color: "bg-gold-light",
    iconColor: "text-gold-dark",
  },
  {
    icon: Clock4,
    title: "Punctual, Always",
    description:
      "With GPS-optimized routes and a 99% on-time delivery rate, your morning pastries arrive before the first customer walks through your door.",
    color: "bg-sage-light",
    iconColor: "text-sage-dark",
  },
  {
    icon: HeartHandshake,
    title: "Personal Partnership",
    description:
      "We're not just a delivery service — we become an extension of your bakery. Dedicated account managers understand your unique scheduling needs.",
    color: "bg-gold-light",
    iconColor: "text-gold-dark",
  },
  {
    icon: Leaf,
    title: "Sustainable Operations",
    description:
      "Our fleet includes fuel-efficient vehicles and optimized multi-stop routes to minimize carbon footprint without compromising delivery quality.",
    color: "bg-sage-light",
    iconColor: "text-sage-dark",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "With over a decade specializing exclusively in bakery logistics, we've developed proprietary handling techniques for every type of baked good.",
    color: "bg-gold-light",
    iconColor: "text-gold-dark",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-espresso">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2832&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 to-espresso" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cream/80 text-sm font-semibold tracking-wide uppercase mb-6">
            Our Story
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
            Built by Bakers,
            <br />
            <span className="text-gradient-gold">For Bakers</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto leading-relaxed">
            Ali Logistics was founded with a simple belief: baked goods
            deserve transportation as meticulous as the craft that created them.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038024a?q=80&w=1200&auto=format&fit=crop"
                  alt="Fresh bread being loaded into delivery van"
                  className="w-full h-80 md:h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-warm-white rounded-2xl shadow-xl p-5 border border-gold/15">
                <p className="text-3xl font-bold text-espresso">12+</p>
                <p className="text-sm text-espresso-muted">Years of Service</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <SectionHeading
                label="Our Mission"
                title="Every Delivery Is a Promise"
                align="left"
              />
              <div className="space-y-5 text-espresso-muted leading-relaxed">
                <p>
                  When our founder, a former artisan baker, watched yet another
                  batch of perfectly crafted sourdough arrive crushed in a
                  standard delivery truck, she knew there had to be a better
                  way.
                </p>
                <p>
                  Ali Logistics was born from that frustration — a
                  logistics company that thinks like a baker. We understand that
                  a croissant&apos;s lamination can be ruined by vibration, that a
                  wedding cake needs millimeter-level stability, and that a
                  chocolate ganache filling requires precise temperature all
                  the way to the customer&apos;s table.
                </p>
                <p>
                  Today, we serve over 200 bakeries across California, from
                  neighborhood patisseries to wholesale production facilities.
                  Every route, every vehicle, and every protocol is designed
                  with one goal: deliver perfection.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/services" variant="primary">
                  See Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Core Values"
            title="What Drives Us Every Morning"
            subtitle="These principles guide every pickup, every mile, and every delivery we make."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} padding="lg" className="group">
                <div
                  className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-espresso mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-espresso-muted leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
