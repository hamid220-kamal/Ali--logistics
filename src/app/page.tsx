import HeroSection from "@/components/home/HeroSection";
import ServicePreviewCards from "@/components/home/ServicePreviewCards";
import TimelineSection from "@/components/home/TimelineSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicePreviewCards />
      <TimelineSection />
      <TestimonialsSection />
    </>
  );
}
