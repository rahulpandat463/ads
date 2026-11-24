"use client";

import React, { useState, useEffect } from "react";

export default function PartnerTimeline() {
  // Live countdown to UAE E-Invoicing Phase 1 Go-Live: 1 Jan 2027
  const [countdown, setCountdown] = useState({
    days: 38,
    hours: 13,
    minutes: 29,
    seconds: 45,
  });

  useEffect(() => {
    const targetDate = new Date("2027-01-01T00:00:00+04:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // All Partner Logos from public/partner
  const partnerLogos = [
    { name: "Deloitte", file: "DeloitteNewLogo.png" },
    { name: "EY", file: "EY logo.png" },
    { name: "KPMG", file: "kpmg logo.jpg" },
    { name: "Hitachi", file: "hitachi.png" },
    { name: "Honda", file: "honda.png" },
    { name: "Suzuki", file: "Suzuki_logo.png" },
    { name: "DLF", file: "DLF_logo.png" },
    { name: "Apollo Dialysis", file: "Apollo Dialysis.png" },
    { name: "Douglas Elliman", file: "Douglas Eliman.png" },
    { name: "FICCI", file: "Ficci Logo.png" },
    { name: "UDrive", file: "UDrive.png" },
    { name: "UFAST", file: "UFAST Logo.png" },
    { name: "Conic Automotive", file: "Conic Automotive.webp" },
    { name: "Compass", file: "compass logo.png" },
    { name: "Hazet", file: "Hazet logo.png" },
    { name: "Velocity", file: "velocity.jpg" },
    { name: "EZMA", file: "EZMA_logo.jpeg" },
    { name: "Charu Parashar", file: "Charu Parashar Logo.png" },
  ];

  const row1Logos = partnerLogos.slice(0, 9);
  const row2Logos = partnerLogos.slice(9);

  return (
    <section id="partners-section" className="w-full bg-white text-slate-900 py-6 sm:py-8 border-t border-slate-200/80 relative z-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5">

        {/* Header matching exact reference */}
        <div className="text-center">
          <h3 className="text-xs sm:text-[12px] font-bold tracking-[0.22em] text-[#2140A6] uppercase">
            TRUSTED BY THOUSANDS OF BUSINESSES SINCE 2003
          </h3>
        </div>

        {/* INFINITE SMOOTH LOGO MARQUEE */}
        <div className="space-y-4 sm:space-y-5 overflow-hidden py-1">
          {/* ROW 1: Smooth Left Flow */}
          <div className="relative w-full overflow-hidden mask-marquee">
            <div className="flex animate-marquee gap-6 sm:gap-10 lg:gap-14 items-center py-1">
              {[...row1Logos, ...row1Logos, ...row1Logos].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-2 sm:px-4"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/partner/${encodeURIComponent(partner.file)}`}
                    alt={partner.name}
                    className="h-10 sm:h-12 md:h-14 w-auto max-w-[140px] sm:max-w-[200px] object-contain transition-transform duration-200 hover:scale-105 opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: Smooth Right Flow */}
          <div className="relative w-full overflow-hidden mask-marquee">
            <div className="flex animate-marquee-reverse gap-6 sm:gap-10 lg:gap-14 items-center py-1">
              {[...row2Logos, ...row2Logos, ...row2Logos].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-2 sm:px-4"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/partner/${encodeURIComponent(partner.file)}`}
                    alt={partner.name}
                    className="h-10 sm:h-12 md:h-14 w-auto max-w-[140px] sm:max-w-[200px] object-contain transition-transform duration-200 hover:scale-105 opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TIMELINE & GO-LIVE CARDS */}
        <div className="pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">

            {/* Card 1: Phase 1 */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-slate-200 border-t-4 border-t-[#2140A6] shadow-[0_4px_20px_rgba(33,64,166,0.06)] text-left flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-baseline gap-2 mb-1">
                <h4 className="text-[19px] font-heading font-bold text-[#2140A6] tracking-tight">Phase 1</h4>
                <span className="text-[12.5px] font-normal text-[#5A6470]">Turnover AED 50M+</span>
              </div>

              <div className="my-4 sm:my-5 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#2140A6] mb-0.5 truncate">
                    APPOINT AN ASP BY
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-[20px] xs:text-[22px] sm:text-[24px] lg:text-[26px] font-heading font-bold text-[#0a1844] leading-tight whitespace-nowrap">
                      30 Oct 2026
                    </p>
                    <span className="text-lg font-bold text-[#2140A6] leading-none sm:hidden">→</span>
                  </div>
                </div>

                <div className="hidden sm:block text-[#2140A6] px-1 sm:px-2 flex-shrink-0 pt-3">
                  <span className="text-lg sm:text-2xl font-bold leading-none">→</span>
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#2140A6] mb-0.5 truncate">
                    GO-LIVE
                  </p>
                  <p className="text-[20px] xs:text-[22px] sm:text-[24px] lg:text-[26px] font-heading font-bold text-[#0a1844] leading-tight whitespace-nowrap">
                    1 Jan 2027
                  </p>
                </div>
              </div>

              <p className="text-[13.5px] font-body text-[#5A6470] leading-relaxed mt-1">
                First-wave businesses. Integration and testing sit between these two dates.
              </p>
            </div>

            {/* Card 2: Phase 2 */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-slate-200 border-t-4 border-t-[#2563EB] shadow-[0_4px_20px_rgba(33,64,166,0.06)] text-left flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-baseline gap-2 mb-1">
                <h4 className="text-[19px] font-heading font-bold text-[#2140A6] tracking-tight">Phase 2</h4>
                <span className="text-[12.5px] font-normal text-[#5A6470]">Turnover under AED 50M</span>
              </div>

              <div className="my-4 sm:my-5 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#2140A6] mb-0.5 truncate">
                    APPOINT AN ASP BY
                  </p>
                  <p className="text-[20px] xs:text-[22px] sm:text-[24px] lg:text-[26px] font-heading font-bold text-[#0a1844] leading-tight whitespace-nowrap">
                    31 Mar 2027
                  </p>
                </div>

                <div className="hidden sm:block text-[#2563EB] px-1 sm:px-2 flex-shrink-0 pt-3">
                  <span className="text-lg sm:text-2xl font-bold leading-none">→</span>
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#2140A6] mb-0.5 truncate">
                    GO-LIVE
                  </p>
                  <p className="text-[20px] xs:text-[22px] sm:text-[24px] lg:text-[26px] font-heading font-bold text-[#0a1844] leading-tight whitespace-nowrap">
                    1 Jul 2027
                  </p>
                </div>
              </div>

              <p className="text-[13.5px] font-body text-[#5A6470] leading-relaxed mt-1">
                All remaining VAT-registered businesses.
              </p>
            </div>

            {/* Card 3: Phase 1 Go-Live Countdown Card (Corporate Brand Blue #2140A6) */}
            <div
              style={{ backgroundColor: "#2140A6" }}
              className="rounded-2xl p-5 sm:p-6 lg:p-7 text-white shadow-xl shadow-[#2140A6]/20 text-left flex flex-col justify-between"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-white/90 mb-3">
                  PHASE 1 GO-LIVE - 1 JAN 2027
                </p>

                <div className="my-4 flex items-center justify-between sm:justify-start gap-2 sm:gap-5 text-left">
                  <div>
                    <p className="text-[26px] sm:text-[28px] font-heading font-bold text-white leading-none">
                      {countdown.days}
                    </p>
                    <p className="text-[10px] sm:text-[11px] font-body font-normal uppercase tracking-[0.6px] text-white/80 mt-1.5">
                      DAYS
                    </p>
                  </div>
                  <div>
                    <p className="text-[26px] sm:text-[28px] font-heading font-bold text-white leading-none">
                      {String(countdown.hours).padStart(2, "0")}
                    </p>
                    <p className="text-[10px] sm:text-[11px] font-body font-normal uppercase tracking-[0.6px] text-white/80 mt-1.5">
                      HRS
                    </p>
                  </div>
                  <div>
                    <p className="text-[26px] sm:text-[28px] font-heading font-bold text-white leading-none">
                      {String(countdown.minutes).padStart(2, "0")}
                    </p>
                    <p className="text-[10px] sm:text-[11px] font-body font-normal uppercase tracking-[0.6px] text-white/80 mt-1.5">
                      MIN
                    </p>
                  </div>
                  <div>
                    <p className="text-[26px] sm:text-[28px] font-heading font-bold text-white leading-none">
                      {String(countdown.seconds).padStart(2, "0")}
                    </p>
                    <p className="text-[10px] sm:text-[11px] font-body font-normal uppercase tracking-[0.6px] text-white/80 mt-1.5">
                      SEC
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[12.5px] sm:text-[13px] font-body text-white/90 leading-relaxed mt-2">
                Mandatory go-live for AED 50M+ businesses. Not sure which wave you&apos;re in? We&apos;ll confirm it in your readiness check.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
