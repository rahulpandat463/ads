"use client";

import React from "react";
import Image from "next/image";

export default function HowItsDelivered() {
  return (
    <section className="w-full bg-white text-slate-900 py-8 sm:py-10 lg:py-12 border-t border-slate-100 relative z-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* LEFT COLUMN: HEADLINE, DESCRIPTION & CERTIFICATIONS */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag */}
            <p className="text-[12.5px] font-semibold tracking-[1.6px] text-[#2140A6] uppercase">
              HOW IT&apos;S DELIVERED
            </p>

            {/* Headline */}
            <h2 className="font-heading font-bold text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.15] tracking-[-0.8px] text-slate-900">
              Compliance delivered on{" "}
              <span className="text-[#2140A6] font-bold">Taxilla</span>, by the team that runs your ERP.
            </h2>

            {/* Paragraph */}
            <p className="font-body text-[15px] text-[#5A6470] leading-[1.55] font-normal max-w-xl">
              One partner, one contract, one accountable team. We deliver compliance on the ERP you already run. Built on Taxilla&apos;s Peppol-certified engine, so there&apos;s no vendor to chase but us.
            </p>

            {/* Certification Badges Strip with authentic delivered images */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Badge 1: ISO 27001 */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white border border-[#E7EAF2] rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 shadow-xs flex-shrink-0">
                <Image
                  src="/delivered/badge-iso27001.png"
                  alt="ISO 27001 certified"
                  width={60}
                  height={44}
                  className="h-7 sm:h-9 md:h-10 w-auto object-contain"
                />
                <span className="text-[11px] sm:text-[12.5px] font-semibold text-[#0B3B2E]">
                  ISO 27001 certified
                </span>
              </div>

              {/* Badge 2: SOC 2 */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white border border-[#E7EAF2] rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 shadow-xs flex-shrink-0">
                <Image
                  src="/delivered/badge-soc2.png"
                  alt="AICPA SOC 2 Type 2"
                  width={60}
                  height={44}
                  className="h-7 sm:h-9 md:h-10 w-auto object-contain"
                />
                <span className="text-[11px] sm:text-[12.5px] font-semibold text-[#0B3B2E]">
                  SOC 2 compliant
                </span>
              </div>

              {/* Badge 3: VAPT Shield */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white border border-[#E7EAF2] rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 shadow-xs flex-shrink-0">
                <Image
                  src="/delivered/badge-vapt-shield.png"
                  alt="VAPT tested"
                  width={45}
                  height={34}
                  className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                />
                <span className="text-[11px] sm:text-[12.5px] font-semibold text-[#0B3B2E]">
                  VAPT tested
                </span>
              </div>

              {/* Badge 4: Peppol Access Point */}
              <div className="inline-flex items-center flex-shrink-0">
                <Image
                  src="/delivered/badge-peppol.png"
                  alt="Peppol Access Point certified provider"
                  width={150}
                  height={56}
                  className="h-10 sm:h-12 md:h-13 w-auto object-contain rounded-xl border border-[#E7EAF2] shadow-xs"
                />
              </div>

              {/* Badge 5: FTA Compliant */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white border border-[#E7EAF2] rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 shadow-xs flex-shrink-0">
                <Image
                  src="/delivered/badge-fta.png"
                  alt="FTA compliant"
                  width={60}
                  height={44}
                  className="h-7 sm:h-9 md:h-10 w-auto object-contain"
                />
                <span className="text-[11px] sm:text-[12.5px] font-semibold text-[#0B3B2E]">
                  FTA compliant
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TWO STACKED DELIVERY PARTNER CARDS */}
          <div className="lg:col-span-5 space-y-5">

            {/* Top Card: Suvrin Delivery Partner (White Card) */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.04)] text-left space-y-3 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Suvrin"
                  width={160}
                  height={42}
                  className="h-7 sm:h-8 w-auto object-contain mb-1"
                />
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                <strong className="font-semibold text-slate-900">Suvrin your Integration and delivery partner:</strong> ERP mapping, testing, change management, and ongoing support in the UAE.
              </p>
            </div>

            {/* Bottom Card: Taxilla Engine (Blue Theme Card #2140A6) */}
            <div
              style={{ backgroundColor: "#2140A6" }}
              className="rounded-2xl p-6 sm:p-7 text-white shadow-xl shadow-[#2140A6]/20 text-left space-y-3 hover:opacity-98 transition-all"
            >
              <div className="flex items-center">
                <div className="bg-white px-3.5 py-1.5 rounded-lg shadow-sm">
                  <Image
                    src="/delivered/taxilla.png"
                    alt="Taxilla"
                    width={110}
                    height={26}
                    className="h-5 sm:h-5.5 w-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-xs sm:text-[13.5px] text-blue-100 leading-relaxed">
                <strong className="font-semibold text-white">Taxilla a Peppol-certified ASP engine:</strong> PINT-AE conversion, validation, digital signing, exchange, and FTA reporting.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
