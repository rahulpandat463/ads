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
        <div className="space-y-3 sm:space-y-4 overflow-hidden">
          {/* ROW 1: Smooth Left Flow */}
          <div className="relative w-full overflow-hidden mask-marquee">
            <div className="flex animate-marquee gap-8 sm:gap-11 lg:gap-14 items-center py-1">
              {[...row1Logos, ...row1Logos, ...row1Logos].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-1"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/partner/${encodeURIComponent(partner.file)}`}
                    alt={partner.name}
                    className="h-7 sm:h-8 md:h-9 w-auto max-w-[110px] sm:max-w-[135px] object-contain transition-transform duration-200 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: Smooth Right Flow */}
          <div className="relative w-full overflow-hidden mask-marquee">
            <div className="flex animate-marquee-reverse gap-8 sm:gap-11 lg:gap-14 items-center py-1">
              {[...row2Logos, ...row2Logos, ...row2Logos].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-1"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/partner/${encodeURIComponent(partner.file)}`}
                    alt={partner.name}
                    className="h-7 sm:h-8 md:h-9 w-auto max-w-[110px] sm:max-w-[135px] object-contain transition-transform duration-200 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TIMELINE & GO-LIVE CARDS */}
        <div className="pt-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">

            {/* Card 1: Phase 1 */}
            <div className="bg-white rounded-2xl p-6 lg:p-7 border border-slate-200 shadow-[0_2px_15px_rgba(0,0,0,0.04)] text-left flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-baseline gap-2">
                  <h4 className="text-[19px] font-heading font-bold text-slate-900 tracking-tight">Phase 1</h4>
                  <span className="text-[12.5px] font-normal text-slate-500">Turnover AED 50M+</span>
                </div>

                <div className="my-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      APPOINT AN ASP BY
                    </p>
                    <p className="text-[26px] font-heading font-bold text-slate-900 mt-0.5 leading-[1.1]">
                      30 Oct 2026
                    </p>
                  </div>

                  <div className="px-2 text-slate-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      GO-LIVE
                    </p>
                    <p className="text-[26px] font-heading font-bold text-slate-900 mt-0.5 leading-[1.1]">
                      1 Jan 2027
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed pt-2">
                First-wave businesses. Integration and testing sit between these two dates.
              </p>
            </div>

            {/* Card 2: Phase 2 */}
            <div className="bg-white rounded-2xl p-6 lg:p-7 border border-slate-200 shadow-[0_2px_15px_rgba(0,0,0,0.04)] text-left flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-baseline gap-2">
                  <h4 className="text-[19px] font-heading font-bold text-slate-900 tracking-tight">Phase 2</h4>
                  <span className="text-[12.5px] font-normal text-slate-500">Turnover under AED 50M</span>
                </div>

                <div className="my-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      APPOINT AN ASP BY
                    </p>
                    <p className="text-[26px] font-heading font-bold text-slate-900 mt-0.5 leading-[1.1]">
                      31 Mar 2027
                    </p>
                  </div>

                  <div className="px-2 text-slate-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      GO-LIVE
                    </p>
                    <p className="text-[26px] font-heading font-bold text-slate-900 mt-0.5 leading-[1.1]">
                      1 Jul 2027
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed pt-2">
                All remaining VAT-registered businesses.
              </p>
            </div>

            {/* Card 3: Phase 1 Go-Live Countdown Card (Corporate Brand Blue #2140A6) */}
            <div
              style={{ backgroundColor: "#2140A6" }}
              className="rounded-2xl p-6 lg:p-7 text-white shadow-xl shadow-[#2140A6]/20 text-left flex flex-col justify-between"
            >
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-blue-100">
                  PHASE 1 GO-LIVE - 1 JAN 2027
                </p>

                <div className="my-4 grid grid-cols-4 gap-2 text-left">
                  <div>
                    <p className="text-3xl font-extrabold tracking-tight text-white leading-none">
                      {countdown.days}
                    </p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-blue-200 mt-1.5">
                      DAYS
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold tracking-tight text-white leading-none">
                      {String(countdown.hours).padStart(2, "0")}
                    </p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-blue-200 mt-1.5">
                      HRS
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold tracking-tight text-white leading-none">
                      {String(countdown.minutes).padStart(2, "0")}
                    </p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-blue-200 mt-1.5">
                      MIN
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold tracking-tight text-white leading-none">
                      {String(countdown.seconds).padStart(2, "0")}
                    </p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-blue-200 mt-1.5">
                      SEC
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-blue-100 leading-relaxed pt-2">
                Mandatory go-live for AED 50M+ businesses. Not sure which wave you&apos;re in? We&apos;ll confirm it in your readiness check.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
