"use client";

import React from "react";

export default function SuvrinProcess() {
  const usualPhases = [
    { num: 1, title: "Readiness assessment", skipped: false },
    { num: 2, title: "Solution design", skipped: true },
    { num: 3, title: "Solution development", skipped: true },
    { num: 4, title: "Testing", skipped: false },
    { num: 5, title: "Business sign-off", skipped: false },
    { num: 6, title: "Go-live", skipped: false },
  ];

  return (
    <section id="process" className="w-full bg-white text-[#1A1A1A] py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-100 relative z-20">
      <div className="max-w-[1200px] mx-auto space-y-6">

        {/* Top Header & Connection Architecture Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-6">

          {/* Left Text */}
          <div className="max-w-[58ch] text-left">
            <div className="text-[12.5px] tracking-[1.6px] uppercase font-semibold text-[#2140A6] mb-3.5">
              The Suvrin process
            </div>
            <h2 className="font-heading font-bold text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.15] tracking-[-0.8px] text-slate-900 mb-4">
              Everyone else builds a solution. <span className="text-[#2140A6]">We connect one</span>.
            </h2>
            <p className="font-body text-[16px] sm:text-[17px] text-[#5A6470] leading-relaxed">
              Most providers build a solution from scratch, design, develop, test. We connect one that already exists and is certified. The work is integration, not invention.
            </p>
          </div>

          {/* Right Architecture Flow Diagram */}
          <div className="relative bg-[radial-gradient(120%_120%_at_20%_0%,#F4F5FB_0%,#EBF2FC_55%,#DDE9F9_100%)] border border-[#E7EAF2] rounded-[20px] p-4 sm:p-5 overflow-hidden flex items-center justify-center">
            {/* Background Decorative Rings */}
            <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-[#2140A6]/20 -top-[70px] -right-[90px] pointer-events-none" />
            <div className="absolute w-[200px] h-[200px] rounded-full border border-[#2140A6]/15 -bottom-[60px] -left-[50px] pointer-events-none" />

            {/* Connecting Flow */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5 w-full">
              {/* Box 1: Your ERP */}
              <div className="bg-white border border-[#DCE6E1] rounded-xl px-3 py-2.5 shadow-[0_8px_20px_rgba(33,64,166,0.06)] flex-1 w-full sm:w-auto text-center min-w-0">
                <div className="font-heading font-bold text-[14.5px] text-[#0a1844] leading-tight">Your ERP</div>
                <div className="font-body text-[11px] leading-[1.35] text-[#8A93A3] mt-0.5">Sage · Dynamics · Zoho</div>
              </div>

              {/* Dotted Connector 1 with Pulse Dot */}
              <div className="relative h-5 w-0.5 sm:h-[2px] sm:w-auto sm:flex-1 sm:min-w-[18px] bg-[repeating-linear-gradient(90deg,#2140A6_0_5px,transparent_5px_10px)] max-sm:bg-[repeating-linear-gradient(180deg,#2140A6_0_5px,transparent_5px_10px)]">
                <span className="hidden sm:block absolute -top-[3px] w-2 h-2 rounded-full bg-[#2140A6] animate-flow-pulse" />
              </div>

              {/* Box 2: Certified Engine (Solid Corporate Blue #2140A6) */}
              <div className="bg-[#2140A6] border border-[#2140A6] rounded-xl px-3 py-2.5 shadow-[0_8px_20px_rgba(33,64,166,0.18)] flex-1 w-full sm:w-auto text-center min-w-0">
                <div className="font-heading font-bold text-[14.5px] text-white leading-tight">Certified engine</div>
                <div className="font-body text-[11px] leading-[1.35] text-white/80 mt-0.5">Validate · convert · report</div>
              </div>

              {/* Dotted Connector 2 with Pulse Dot */}
              <div className="relative h-5 w-0.5 sm:h-[2px] sm:w-auto sm:flex-1 sm:min-w-[18px] bg-[repeating-linear-gradient(90deg,#2140A6_0_5px,transparent_5px_10px)] max-sm:bg-[repeating-linear-gradient(180deg,#2140A6_0_5px,transparent_5px_10px)]">
                <span className="hidden sm:block absolute -top-[3px] w-2 h-2 rounded-full bg-[#2140A6] animate-flow-pulse-delayed" />
              </div>

              {/* Box 3: FTA */}
              <div className="bg-white border border-[#DCE6E1] rounded-xl px-3 py-2.5 shadow-[0_8px_20px_rgba(33,64,166,0.06)] flex-1 w-full sm:w-auto text-center min-w-0">
                <div className="font-heading font-bold text-[14.5px] text-[#0a1844] leading-tight">FTA</div>
                <div className="font-body text-[11px] leading-[1.35] text-[#8A93A3] mt-0.5">Reported · accepted</div>
              </div>
            </div>
          </div>

        </div>

        {/* Big Roadmap Comparison Container */}
        <div className="bg-[#F4F5FB] border border-[#E7EAF2] rounded-[20px] p-5 sm:p-7 lg:p-8 text-left">

          {/* TRACK 1: The Usual Route (6 Phases) */}
          <div className="flex flex-wrap items-baseline gap-2 sm:gap-3.5 mb-4">
            <div className="font-heading font-bold text-[17px] text-[#8A93A3]">
              The usual route has six phases
            </div>
            <div className="font-body text-[14px] text-[#8A93A3]">
              A design-and-build project with two phases you don&apos;t need.
            </div>
          </div>

          {/* 6-Column Phase Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 items-stretch">
            {usualPhases.map((phase, idx) => (
              <div
                key={phase.num}
                className="flex flex-col items-stretch justify-start gap-2 h-full"
              >
                <div className="flex items-center gap-1.5 w-full">
                  <div
                    className={`flex-1 min-w-0 rounded-[10px] px-3 h-[50px] flex items-center gap-2 ${phase.skipped
                      ? "bg-[#EEF0F6] border border-dashed border-[#C2C9D8] opacity-75"
                      : "bg-white border border-[#E1E5EF] shadow-2xs"
                      }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full font-heading font-bold text-[11.5px] flex items-center justify-center flex-shrink-0 ${phase.skipped
                        ? "bg-[#DDE2EC] text-[#5A6470]"
                        : "bg-[#D8DEEA] text-[#5A6470]"
                        }`}
                    >
                      {phase.num}
                    </span>
                    <span
                      className={`font-heading font-semibold text-[12.5px] leading-[1.2] min-w-0 break-words ${phase.skipped
                        ? "text-[#8A93A3] line-through"
                        : "text-[#5A6470]"
                        }`}
                    >
                      {phase.title}
                    </span>
                  </div>

                  {/* Right Arrow connecting phases in the row */}
                  {idx < 5 && (
                    <span className="hidden lg:inline text-[#C9D0DE] text-[13px] font-bold flex-shrink-0">
                      →
                    </span>
                  )}
                </div>

                {/* Red Skipped Badge */}
                {phase.skipped && (
                  <span className="text-[11px] font-bold tracking-[0.3px] text-[#B4453C] bg-[#FBEDEC] rounded-md px-2 py-1 self-start">
                    You don&apos;t need this.
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* The Shortcut Connection Line (Desktop) */}
          <div className="hidden lg:block relative h-[34px] my-0">
            <div
              style={{
                position: "absolute",
                left: "8.33%",
                right: "66.67%",
                top: "2px",
                bottom: "12px",
                borderLeft: "2px dashed #2140A6",
                borderBottom: "2px dashed #2140A6",
                borderBottomLeftRadius: "12px",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "33.33%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: "8px solid #2140A6",
                top: "20px",
              }}
            />
          </div>

          {/* TRACK 2: The Suvrin Route (5 Steps) */}
          <div className="flex flex-wrap items-baseline gap-2 sm:gap-3.5 mb-2.5 mt-5 lg:mt-0">
            <div className="font-heading font-bold text-[17px] text-[#0a1844]">
              The Suvrin route has five steps
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <span className="font-body text-[14px] font-semibold text-[#2140A6]">
                No solution design. No development. Just connection.
              </span>
              <span className="text-[11.5px] font-bold tracking-[0.3px] text-[#2140A6] bg-blue-50 border border-blue-200 rounded-full px-3 py-1 whitespace-nowrap">
                2 phases skipped
              </span>
            </div>
          </div>

          {/* Progress Gradient Line */}
          <div className="h-[3px] rounded-full bg-gradient-to-r from-[#0a1844] via-[#2140A6] to-[#60a5fa] mb-3" />

          {/* 6-Column Grid for the 5 Suvrin Steps (Step 2 spans 2 columns!) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-stretch">

            {/* Step 1: Readiness Assessment (col 1 / span 1) */}
            <div className="lg:col-span-1 bg-white border border-[#DCE6E1] rounded-xl p-3.5 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-start">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-[26px] h-[26px] rounded-full bg-[#2140A6] text-white font-heading font-bold text-[13px] flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <span className="font-heading font-bold text-[16px] leading-[1.25] text-[#0a1844]">
                  Readiness assessment
                </span>
              </div>
              <p className="font-body text-[14px] leading-[1.5] text-[#5A6470]">
                Review your process, scenarios and data.
              </p>
            </div>

            {/* Step 2: Integration (col 2 / span 2 - Double Wide Hero Step in Brand Blue #2140A6!) */}
            <div className="sm:col-span-2 lg:col-span-2 bg-[#2140A6] border border-[#2140A6] rounded-xl p-3.5 text-white shadow-xl shadow-[#2140A6]/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 flex flex-col justify-start">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-[26px] h-[26px] rounded-full bg-[#60A5FA] text-white font-heading font-bold text-[13px] flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <span className="font-heading font-bold text-[16px] leading-[1.25] text-white">
                  Integration - connect the certified engine
                </span>
              </div>
              <p className="font-body text-[14px] leading-[1.5] text-white/80">
                Connect your existing ERP to the certified engine.
              </p>
            </div>

            {/* Step 3: Deployment (col 4 / span 1) */}
            <div className="lg:col-span-1 bg-white border border-[#DCE6E1] rounded-xl p-3.5 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-start">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-[26px] h-[26px] rounded-full bg-[#2563EB] text-white font-heading font-bold text-[13px] flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <span className="font-heading font-bold text-[16px] leading-[1.25] text-[#0a1844]">
                  Deployment
                </span>
              </div>
              <p className="font-body text-[14px] leading-[1.5] text-[#5A6470]">
                Connector deployed on your live environment.
              </p>
            </div>

            {/* Step 4: Testing (col 5 / span 1) */}
            <div className="lg:col-span-1 bg-white border border-[#DCE6E1] rounded-xl p-3.5 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-start">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-[26px] h-[26px] rounded-full bg-[#3b82f6] text-white font-heading font-bold text-[13px] flex items-center justify-center flex-shrink-0">
                  4
                </span>
                <span className="font-heading font-bold text-[16px] leading-[1.25] text-[#0a1844]">
                  Testing
                </span>
              </div>
              <p className="font-body text-[14px] leading-[1.5] text-[#5A6470]">
                UAT on your real invoice patterns, then sign-off.
              </p>
            </div>

            {/* Step 5: Go-live (col 6 / span 1) */}
            <div className="lg:col-span-1 bg-white border border-[#DCE6E1] rounded-xl p-3.5 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-start">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-[26px] h-[26px] rounded-full bg-[#60a5fa] text-white font-heading font-bold text-[13px] flex items-center justify-center flex-shrink-0">
                  5
                </span>
                <span className="font-heading font-bold text-[16px] leading-[1.25] text-[#0a1844]">
                  Go-live
                </span>
              </div>
              <p className="font-body text-[14px] leading-[1.5] text-[#5A6470]">
                Users briefed, controls set, monitored cutover.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
