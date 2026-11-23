"use client";

import React from "react";
import { ShieldCheck, Monitor, Radio, Flag } from "lucide-react";

export default function WhySuvrin() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#2140A6] stroke-[1.8]" />,
      title: "One accountable partner",
      description:
        "You contract with Suvrin. No finger-pointing between a software vendor and a separate integrator.",
    },
    {
      icon: <Monitor className="w-5 h-5 text-[#2140A6] stroke-[1.8]" />,
      title: "We already run your ERP",
      description:
        "Certified Sage, Microsoft and Zoho implementers, not a plug-in vendor learning your system on your deadline.",
    },
    {
      icon: <Radio className="w-5 h-5 text-[#2140A6] stroke-[1.8]" />,
      title: "Live in production",
      description:
        "A working e-invoicing solution running today, not a pilot or a promise.",
    },
    {
      icon: <Flag className="w-5 h-5 text-[#2140A6] stroke-[1.8]" />,
      title: "Readiness to go-live",
      description:
        "We take you from readiness assessment through deployment, UAT and go-live, then support it.",
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] text-slate-900 py-8 sm:py-10 lg:py-12 border-t border-slate-200/80 relative z-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
        
        {/* Section Header */}
        <div className="text-left">
          <p className="text-[12.5px] font-semibold tracking-[1.6px] text-[#2140A6] uppercase">
            WHY SUVRIN
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#2140A6]/40 transition-all duration-300 text-left flex flex-col justify-start group"
            >
              {/* Rounded Icon Badge */}
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#2140A6]/10 transition-transform">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-[18.5px] text-slate-900 tracking-tight leading-[1.3] mb-2.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-body text-[15px] text-[#5A6470] leading-[1.55] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
