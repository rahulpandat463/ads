"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    workEmail: "",
    phoneNumber: "",
    erpSystem: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="top"
      className="relative w-full text-white overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-14 lg:pb-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#070E24",
        backgroundImage: `url('/hero-boardroom.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "68% center",
      }}
    >
      {/* Rich Corporate Blue Dual Layer Gradients matching reference depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(96deg, rgba(6,14,38,0.92) 0%, rgba(8,20,54,0.84) 40%, rgba(10,25,68,0.65) 72%, rgba(10,25,68,0.42) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,14,38,0.55) 0%, rgba(6,14,38,0) 34%, rgba(6,14,38,0.65) 100%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start z-10">
        
        {/* LEFT COLUMN: HERO INFORMATION */}
        <div className="lg:col-span-7 text-left space-y-3 sm:space-y-4">
          <div className="inline-flex items-center text-[11px] sm:text-[12.5px] tracking-[1.6px] uppercase font-semibold text-[#689aff] border border-[#4a7cfb]/40 bg-[#2140A6]/20 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-2 sm:mb-4 max-w-full leading-tight font-body">
            E-invoicing compliance UAE · Sage · Microsoft · Zoho
          </div>

          <h1 className="font-heading font-light text-[24px] sm:text-3xl md:text-4xl lg:text-[46px] leading-[1.18] tracking-[-0.8px] text-white">
            Become UAE E-Invoicing compliant in 2026{" "}
            <span className="text-[#4a7cfb] font-medium">
              without changing your ERP.
            </span>
          </h1>

          <p className="font-body text-xs sm:text-sm md:text-[15.5px] text-white/80 max-w-[54ch] leading-relaxed">
            Suvrin adds a compliance layer that plugs straight into the ERP you already run - so nothing changes for your team, and you go live fast, without the cost of a new system.
          </p>

          <div className="flex flex-col gap-2.5 sm:gap-3 pt-1">
            <div className="flex gap-2.5 sm:gap-3 items-center">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#4a7cfb] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-white/90">Implementing ERP in the UAE since 2003</span>
            </div>
            <div className="flex gap-2.5 sm:gap-3 items-center">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#4a7cfb] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-white/90">800+ regional customers</span>
            </div>
            <div className="flex gap-2.5 sm:gap-3 items-center">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#4a7cfb] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-white/90">Live e-invoicing in production in KSA</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: READINESS CHECK FORM CARD */}
        <div id="readiness-form" className="lg:col-span-5 w-full mt-4 lg:mt-0">
          <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 shadow-[0_24px_54px_rgba(0,0,0,0.28)] text-slate-900 border border-slate-100">
            {submitted ? (
              <div className="py-8 text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#2140A6]/10 text-[#2140A6] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1844]">Readiness Check Requested</h3>
                <p className="text-sm text-[#5A6470] max-w-xs mx-auto">
                  Thank you. We have received your details for <strong className="text-slate-800">{formData.company || "your organization"}</strong>. A UAE ERP consultant will reach out within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-6 py-2.5 text-xs font-semibold text-white bg-[#2140A6] hover:bg-[#183488] rounded-lg transition-colors cursor-pointer"
                >
                  Submit Another Check
                </button>
              </div>
            ) : (
              <>
                <div className="mb-4 text-left">
                  <h2 className="font-heading font-bold text-xl sm:text-[22px] text-[#0a1844] tracking-tight leading-snug mb-1">
                    Get your readiness check
                  </h2>
                  <p className="font-body text-[14px] text-[#5A6470] leading-normal">
                    Two minutes. We confirm your wave, your gaps and a realistic timeline.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1 text-left">
                      <label className="block text-xs font-semibold text-[#1A1A1A]">
                        Full name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8DEEA] bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2140A6] focus:border-[#2140A6] transition-all"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="block text-xs font-semibold text-[#1A1A1A]">
                        Company
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8DEEA] bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2140A6] focus:border-[#2140A6] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1 text-left">
                      <label className="block text-xs font-semibold text-[#1A1A1A]">
                        Work email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="name@company.ae"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8DEEA] bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2140A6] focus:border-[#2140A6] transition-all"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="block text-xs font-semibold text-[#1A1A1A]">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8DEEA] bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2140A6] focus:border-[#2140A6] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-semibold text-[#1A1A1A]">
                      Which ERP do you use?
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.erpSystem}
                        onChange={(e) => setFormData({ ...formData, erpSystem: e.target.value })}
                        className="w-full px-3.5 py-2.5 pr-9 rounded-lg border border-[#D8DEEA] bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2140A6] focus:border-[#2140A6] transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select your system</option>
                        <option value="sage">Sage 300 / Sage X3</option>
                        <option value="dynamics">Microsoft Dynamics 365 F&amp;O / Business Central</option>
                        <option value="zoho">Zoho Books</option>
                        <option value="legacy">Legacy or Other ERP</option>
                        <option value="other">No ERP</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-5 rounded-lg text-white font-semibold text-base bg-[#2140A6] hover:bg-[#183488] active:scale-[0.99] transition-all shadow-md shadow-[#2140A6]/25 flex items-center justify-center cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Processing...</span>
                        </div>
                      ) : (
                        <span>Get My Readiness Check</span>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[12.5px] text-[#8A93A3] pt-1">
                    A UAE consultant responds within one business day. No obligation.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
