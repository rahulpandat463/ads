import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerTimeline from "@/components/PartnerTimeline";
import SolutionLifecycle from "@/components/SolutionLifecycle";
import HowItsDelivered from "@/components/HowItsDelivered";
import WhySuvrin from "@/components/WhySuvrin";
import FindYourPath from "@/components/FindYourPath";
import KsaSuccessSlider from "@/components/KsaSuccessSlider";
import SuvrinProcess from "@/components/SuvrinProcess";
import ConsultationBooking from "@/components/ConsultationBooking";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070e24] text-white flex flex-col selection:bg-[#2140A6] selection:text-white font-sans">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Banner with Boardroom Background & Readiness Check */}
      <Hero />

      {/* 3. Partner Logo Sliders & Phase Go-Live Timeline */}
      <PartnerTimeline />

      {/* 4. Solution for Invoice Lifecycle (5 Feature Cards) */}
      <SolutionLifecycle />

      {/* 5. How It's Delivered (Taxilla Partnership & Certifications) */}
      <HowItsDelivered />

      {/* 6. Why Suvrin (4 Pillars) */}
      <WhySuvrin />

      {/* 7. Find Your Path (Interactive ERP Selection & Solution Details) */}
      <FindYourPath />

      {/* 8. KSA Deployed E-Invoicing Solution (Client Carousel) */}
      <KsaSuccessSlider />

      {/* 9. The Suvrin Process (Roadmap Comparison: 6 Phases vs 5 Steps) */}
      <SuvrinProcess />

      {/* 10. Book a Consultation (Second Action Form with Guarantees) */}
      <ConsultationBooking />

      {/* 11. Frequently Asked Questions (Interactive Accordion) */}
      <FaqSection />

      {/* 12. Corporate Footer with Contact Details & Official Partner Badges */}
      <Footer />
    </div>
  );
}
