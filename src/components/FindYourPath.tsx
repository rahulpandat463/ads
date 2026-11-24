"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Database, Layers, Cloud, Server } from "lucide-react";

export default function FindYourPath() {
  const [selectedSystem, setSelectedSystem] = useState("sage");

  const systems = [
    {
      id: "sage",
      badge: (
        <div className="flex items-center gap-2.5">
          <Image
            src="/running/sage-300.png"
            alt="Sage 300"
            width={95}
            height={28}
            className="h-5 sm:h-6 w-auto object-contain"
          />
          <Image
            src="/running/sage-x3.png"
            alt="Sage X3"
            width={85}
            height={28}
            className="h-5 sm:h-6 w-auto object-contain"
          />
        </div>
      ),
      title: "Sage 300 and Sage X3",
      tagline: "Compliance layer bolted onto your existing Sage install.",
      description:
        "We connect your existing Sage system to the compliance engine and add the extra fields the UAE e-invoice format requires, so your team keeps entering invoices exactly where they do today.",
      points: [
        "No version upgrade or re-implementation required in most cases.",
        "The extra required fields are added through your existing screens and defaults.",
        "Credit notes, self-billing and multi-company all run through the same flow.",
      ],
    },
    {
      id: "dynamics",
      badge: (
        <div className="flex items-center gap-2">
          <Image
            src="/running/d365-fo-sm.png"
            alt="Microsoft Dynamics 365 Finance & Operations"
            width={110}
            height={32}
            className="h-6 sm:h-7 w-auto object-contain"
          />
          <Image
            src="/running/d365-bc.png"
            alt="Microsoft Dynamics 365 Business Central"
            width={110}
            height={32}
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </div>
      ),
      title: "Microsoft Dynamics 365 F&O and Business Central",
      tagline: "Certified extension approach for F&O and Business Central.",
      description:
        "We deploy certified extensions directly into your Dynamics environment, connecting F&O and Business Central to the UAE Peppol compliance gateway with zero business disruption.",
      points: [
        "Seamless extension deployment through standard AppSource lifecycle.",
        "Native support for UAE VAT localization, TRN validation, and invoice schemas.",
        "Automated batch dispatch and real-time status reflection directly in posted invoice journals.",
      ],
    },
    {
      id: "zoho",
      badge: (
        <div className="flex items-center">
          <Image
            src="/running/zoho-books.png"
            alt="Zoho Books"
            width={120}
            height={32}
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </div>
      ),
      title: "Zoho Books",
      tagline: "API integration for fast-moving finance teams.",
      description:
        "Direct cloud API bridge connecting your Zoho Books organization to the UAE compliance engine. Webhooks push outbound invoices instantly and retrieve validated status automatically.",
      points: [
        "Zero-footprint cloud API connector configured in under 2 business days.",
        "Real-time automated generation of PINT-AE compliant e-invoices upon invoice approval.",
        "Bi-directional synchronization for AP vendor bills and purchase credits.",
      ],
    },
    {
      id: "legacy",
      badge: (
        <div className="flex items-center gap-2">
          <Image
            src="/running/erp-generic.png"
            alt="Legacy Or Other ERP"
            width={36}
            height={36}
            className="h-7 w-auto object-contain"
          />
          <span className="text-xs font-semibold text-slate-700">Legacy / Other</span>
        </div>
      ),
      title: "Legacy Or Other ERP",
      tagline: "File or database-level integration where APIs do not exist.",
      description:
        "Flexible file-based (XML/JSON/CSV), database staging, or custom middleware connectors that extract billing data and report to the FTA without modifying legacy core code.",
      points: [
        "Works with any on-premise or cloud ERP regardless of vendor support lifecycle.",
        "Automated file watcher and SFTP / Database staging adapters.",
        "End-to-end audit logging, validation quarantine, and error alerts before submission.",
      ],
    },
  ];

  const currentSystem = systems.find((s) => s.id === selectedSystem) || systems[0];

  return (
    <section className="w-full bg-white text-slate-900 py-8 sm:py-10 lg:py-12 border-t border-slate-100 relative z-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-7">

        {/* Section Header */}
        <div className="text-left space-y-2">
          <p className="text-[12.5px] font-semibold tracking-[1.6px] text-[#2140A6] uppercase">
            FIND YOUR PATH
          </p>
          <h2 className="font-heading font-bold text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.15] tracking-[-0.8px] text-slate-900">
            Which ERP are you{" "}
            <span className="text-[#2140A6]">
              running today?
            </span>
          </h2>
          <p className="font-body text-[15px] text-[#5A6470] max-w-2xl leading-[1.55] pt-1">
            Select your system to see how compliance is delivered on it - no migration, no change to how your team works.
          </p>
        </div>

        {/* 4 ERP Selection Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {systems.map((system) => {
            const isSelected = system.id === selectedSystem;
            return (
              <button
                type="button"
                key={system.id}
                onClick={() => setSelectedSystem(system.id)}
                className={`rounded-2xl p-5 sm:p-6 text-left flex flex-col justify-between transition-all duration-200 cursor-pointer ${isSelected
                  ? "bg-white border-2 border-[#2140A6] shadow-[0_6px_25px_rgba(33,64,166,0.12)] scale-[1.01]"
                  : "bg-white border border-slate-200 hover:border-slate-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md"
                  }`}
              >
                <div>
                  {/* System Badge / Logo */}
                  <div className="h-9 flex items-center mb-4">
                    {system.badge}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-[18.5px] text-slate-900 tracking-tight leading-[1.3] mb-2">
                    {system.title}
                  </h3>

                  {/* Tagline */}
                  <p className="font-body text-[14px] text-[#5A6470] leading-relaxed mb-4">
                    {system.tagline}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#2140A6] group">
                  <span>See your solution</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Solution Details Panel */}
        <div className="rounded-2xl border border-slate-200/90 p-5 sm:p-7 lg:p-8 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* Left: Solution Context & CTA */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              <p className="text-[12.5px] font-semibold tracking-[1.6px] text-[#2140A6] uppercase">
                YOUR SOLUTION
              </p>

              <h3 className="font-heading font-bold text-[26px] sm:text-[30px] text-slate-900 tracking-tight leading-snug">
                {currentSystem.title}
              </h3>

              <p className="font-body text-[15px] text-[#5A6470] leading-[1.6] font-normal">
                {currentSystem.description}
              </p>

              <div className="pt-2">
                <a
                  href="#readiness-form"
                  style={{ backgroundColor: "#2140A6" }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium text-xs sm:text-sm hover:opacity-95 active:scale-[0.99] transition-all shadow-md shadow-[#2140A6]/25 cursor-pointer text-center"
                >
                  Talk to an expert consultant
                </a>
              </div>
            </div>

            {/* Right: Feature Bullet Points Box */}
            <div className="lg:col-span-6 bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-100 text-left">
              <ul className="space-y-4">
                {currentSystem.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#2140A6] flex-shrink-0 mt-1.5 shadow-[0_0_6px_rgba(33,64,166,0.4)]" />
                    <span className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
