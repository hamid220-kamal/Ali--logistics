import HeroSection from "@/components/home/HeroSection";
import CommitmentsSection from "@/components/home/CommitmentsSection";
import ServicePreviewCards from "@/components/home/ServicePreviewCards";
import TimelineSection from "@/components/home/TimelineSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactHub from "@/components/home/ContactHub";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CommitmentsSection />
      <ServicePreviewCards />
      <TimelineSection />
      <TestimonialsSection />
      <ContactHub />
    </>
  );
}
