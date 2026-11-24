"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function KsaSuccessSlider() {
  const ksaClients = [
    { name: "CIT", image: "/companies/cit.png", width: 110, height: 40 },
    { name: "Islam Commercial Enterprises", image: "/companies/islam-commercial.png", width: 125, height: 45 },
    { name: "Filmmaster", image: "/companies/filmmaster.png", width: 130, height: 40 },
    { name: "Trouvay & Cauvin", image: "/companies/trouvay-cauvin.png", width: 140, height: 45 },
    { name: "The Aimes", image: "/companies/the-aimes-2.png", width: 125, height: 40 },
    { name: "Sunace", image: "/companies/sunace.png", width: 110, height: 40 },
    { name: "GMS", image: "/companies/GMS.png", width: 110, height: 40 },
    { name: "EllisDon", image: "/companies/ellisdon.png", width: 125, height: 40 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? ksaClients.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ksaClients.length);
  };

  // Always show 5 continuous cards with circular wrap
  const visibleClients = Array.from({ length: 5 }, (_, i) => {
    return ksaClients[(currentIndex + i) % ksaClients.length];
  });

  return (
    <section className="w-full bg-[#f8fafc] text-slate-900 py-7 sm:py-8 lg:py-9 border-t border-slate-200/80 relative z-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5">

        {/* Section Header */}
        <div className="text-left space-y-1.5">
          <p className="text-[12.5px] font-semibold tracking-[1.6px] text-[#2140A6] uppercase">
            COMPANIES USING OUR INTEGRATED SOLUTION
          </p>
          <h2 className="font-heading font-bold text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.15] tracking-[-0.8px] text-slate-900">
            Our Deployed E-Invoicing Solution for{" "}
            <span className="text-[#2140A6]">KSA companies</span>
          </h2>
        </div>

        {/* Carousel / Logo Cards */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5 items-stretch">
            {visibleClients.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className={`bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#2140A6]/40 transition-all items-center justify-center min-h-[105px] sm:min-h-[115px] ${
                  i >= 2 ? (i === 4 ? "hidden lg:flex" : "hidden sm:flex") : "flex"
                }`}
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="max-h-9 sm:max-h-11 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center justify-center gap-3 pt-5 sm:pt-6">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous client slide"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[#2140A6] hover:border-[#2140A6] flex items-center justify-center transition-all shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next client slide"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-[#2140A6] hover:border-[#2140A6] flex items-center justify-center transition-all shadow-xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
