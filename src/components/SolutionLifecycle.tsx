"use client";

import React from "react";
import { Monitor, ArrowUpDown, LineChart, ShieldCheck, Star } from "lucide-react";

export default function SolutionLifecycle() {
  const solutions = [
    {
      icon: <Monitor className="w-5 h-5 text-[#2140A6] stroke-[1.8]" />,
      title: "Compliance inside your ERP - No new software.",
      description:
        "Your team keeps invoicing in the same Sage, Dynamics, Zoho or other ERP screens. The compliance layer validates, converts and reports in the background and flags any error on the spot.",
    },
    {
      icon: <ArrowUpDown className="w-5 h-5 text-[#2140A6] stroke-[1.8]" />,
      title: "Sends & receives complete AR + AP",
      description:
        "Not just outbound sales invoices. We automate the inbound side too: supplier invoices matched to your PO and dispatch, then posted straight into your ERP, fully automated, semi-automated or manual.",
    },
    {
      icon: <LineChart className="w-5 h-5 text-[#2140A6] stroke-[1.8]" />,
      title: "Real-time status and dashboards.",
      description:
        "Track every document sent, validated, reported, accepted from inside your ERP and a dedicated portal. Message-level status flows back automatically.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#2140A6] stroke-[1.8]" />,
      title: "Automated validation and error handling.",
      description:
        "Standardised validation, FTA lookup-table handling and reconciliations, with clear error messages before anything is submitted.",
    },
    {
      icon: <Star className="w-5 h-5 text-[#2140A6] stroke-[1.8]" />,
      title: "Faster, lower-risk go-live.",
      description:
        "A proven, reusable deployment model - not a custom build every time. Less effort, less risk, and live sooner.",
    },
  ];

  return (
    <section className="w-full bg-white text-slate-900 py-8 sm:py-10 lg:py-12 border-t border-slate-100 relative z-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-7">

        {/* Section Header */}
        <div className="text-left space-y-2">
          <p className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#2140A6] uppercase">
            OUR SOLUTION
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.2]">
            One solution for{" "}
            <span className="text-[#2140A6] font-bold block sm:inline">
              the whole invoice lifecycle.
            </span>
          </h2>
        </div>

        {/* 12-Column Responsive Grid matching exact reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          {/* Card 1: Top Left (cols 1-4) */}
          <div className="md:col-span-4 bg-white rounded-2xl p-7 lg:p-8 border border-blue-200/70 hover:border-[#2140A6] shadow-[0_2px_16px_rgba(33,64,166,0.04)] hover:shadow-[0_8px_30px_rgba(33,64,166,0.08)] transition-all duration-300 text-left flex flex-col justify-start group">
            <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#2140A6]/10 transition-transform">
              {solutions[0].icon}
            </div>
            <h3 className="text-[18.5px] font-bold text-slate-900 tracking-tight leading-[1.3] mb-2.5">
              {solutions[0].title}
            </h3>
            <p className="text-[15px] text-[#5A6470] leading-[1.55] font-normal">
              {solutions[0].description}
            </p>
          </div>

          {/* Card 2: Top Center (cols 5-8) */}
          <div className="md:col-span-4 bg-white rounded-2xl p-7 lg:p-8 border border-blue-200/70 hover:border-[#2140A6] shadow-[0_2px_16px_rgba(33,64,166,0.04)] hover:shadow-[0_8px_30px_rgba(33,64,166,0.08)] transition-all duration-300 text-left flex flex-col justify-start group">
            <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#2140A6]/10 transition-transform">
              {solutions[1].icon}
            </div>
            <h3 className="text-[18.5px] font-bold text-slate-900 tracking-tight leading-[1.3] mb-2.5">
              {solutions[1].title}
            </h3>
            <p className="text-[15px] text-[#5A6470] leading-[1.55] font-normal">
              {solutions[1].description}
            </p>
          </div>

          {/* Card 3: Top Right (cols 9-12) */}
          <div className="md:col-span-4 bg-white rounded-2xl p-7 lg:p-8 border border-blue-200/70 hover:border-[#2140A6] shadow-[0_2px_16px_rgba(33,64,166,0.04)] hover:shadow-[0_8px_30px_rgba(33,64,166,0.08)] transition-all duration-300 text-left flex flex-col justify-start group">
            <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#2140A6]/10 transition-transform">
              {solutions[2].icon}
            </div>
            <h3 className="text-[18.5px] font-bold text-slate-900 tracking-tight leading-[1.3] mb-2.5">
              {solutions[2].title}
            </h3>
            <p className="text-[15px] text-[#5A6470] leading-[1.55] font-normal">
              {solutions[2].description}
            </p>
          </div>

          {/* Card 4: Bottom Left (Centered under gap 1-2: cols 3-6) */}
          <div className="md:col-start-3 md:col-span-4 bg-white rounded-2xl p-7 lg:p-8 border border-blue-200/70 hover:border-[#2140A6] shadow-[0_2px_16px_rgba(33,64,166,0.04)] hover:shadow-[0_8px_30px_rgba(33,64,166,0.08)] transition-all duration-300 text-left flex flex-col justify-start group">
            <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#2140A6]/10 transition-transform">
              {solutions[3].icon}
            </div>
            <h3 className="text-[18.5px] font-bold text-slate-900 tracking-tight leading-[1.3] mb-2.5">
              {solutions[3].title}
            </h3>
            <p className="text-[15px] text-[#5A6470] leading-[1.55] font-normal">
              {solutions[3].description}
            </p>
          </div>

          {/* Card 5: Bottom Right (Centered under gap 2-3: cols 7-10) */}
          <div className="md:col-span-4 bg-white rounded-2xl p-7 lg:p-8 border border-blue-200/70 hover:border-[#2140A6] shadow-[0_2px_16px_rgba(33,64,166,0.04)] hover:shadow-[0_8px_30px_rgba(33,64,166,0.08)] transition-all duration-300 text-left flex flex-col justify-start group">
            <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#2140A6]/10 transition-transform">
              {solutions[4].icon}
            </div>
            <h3 className="text-[18.5px] font-bold text-slate-900 tracking-tight leading-[1.3] mb-2.5">
              {solutions[4].title}
            </h3>
            <p className="text-[15px] text-[#5A6470] leading-[1.55] font-normal">
              {solutions[4].description}
            </p>
          </div>

        </div>

        {/* Enterprise Security Disclaimer Line - Perfect Single Line Matching Reference */}
        <div className="pt-3 sm:pt-4 flex items-center justify-center w-full">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-xs sm:text-[13px] text-slate-500 max-w-full">
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#2140A6]" strokeWidth={2} />
              <strong className="font-semibold text-slate-800">
                Enterprise-grade security, built in.
              </strong>
            </div>
            <p className="whitespace-normal leading-relaxed text-slate-500">
              Every invoice flows through a Peppol-certified Access Point, ISO 27001, SOC 2 and VAPT-audited for validated, secure exchange with the FTA.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
