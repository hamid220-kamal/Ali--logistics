"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Maria Santos",
    business: "Maria's Artisan Bakery",
    quote:
      "Ali Logistics has completely transformed our morning café deliveries. Croissants arrive flaky and warm to all 12 of our retail accounts across the bay. Their drivers are on time, every single morning.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "David Park",
    business: "Sunrise Cake Studio",
    quote:
      "Delivering a five-tier wedding cake used to cause us immense stress. With Ali Logistics' custom dampening racks and constant temperature lock, we know every detailed frosting layer remains pristine.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Sophie Laurent",
    business: "Pâtisserie Belle",
    quote:
      "We check our live temperature dashboard during transit. Not having to worry about melted chocolates or failing creams makes a huge difference in the morning. Truly a professional team.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((a) => (a === 0 ? total - 1 : a - 1));
  const next = () => setActive((a) => (a === total - 1 ? 0 : a + 1));

  return (
    <section className="py-20 md:py-28 bg-[#2C2523] relative overflow-hidden">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          label="Testimonials"
          title="Endorsed by Master Bakers"
          subtitle="Discover how local bakeries and pastry chefs rely on Ali Logistics to secure their delivery standards."
          light
        />

        {/* Testimonial card */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative bg-white/5 backdrop-blur-md rounded-[32px] border border-white/10 p-8 sm:p-12 md:p-16">
            
            <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-gold/5 absolute right-8 bottom-8 pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
              
              {/* Image */}
              <div className="shrink-0 relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl relative z-10">
                  <img
                    src={testimonials[active].image}
                    alt={testimonials[active].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-3 -left-3 w-full h-full bg-gold/15 rounded-3xl pointer-events-none z-0" />
              </div>

              {/* Author & Quote text */}
              <div className="flex-1 space-y-6 text-center md:text-left">
                {/* Rating */}
                <div className="flex justify-center md:justify-start gap-1">
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-lg sm:text-xl md:text-2xl text-cream/90 font-light leading-relaxed">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>

                {/* Credentials */}
                <div className="space-y-1">
                  <p className="text-base font-bold text-cream">
                    {testimonials[active].name}
                  </p>
                  <p className="text-sm text-gold">
                    {testimonials[active].business}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Slider Controllers */}
          <div className="flex items-center justify-between mt-8 px-4">
            
            {/* Dots navigation */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 bg-gold"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows navigation */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-cream/80 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-cream/80 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
