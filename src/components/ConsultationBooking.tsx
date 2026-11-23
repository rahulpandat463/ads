"use client";

import React, { useState } from "react";
import { Check, ChevronDown, CheckCircle2 } from "lucide-react";

export default function ConsultationBooking() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    workEmail: "",
    phoneNumber: "",
    erpSystem: "",
    helpMessage: "",
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

  const guarantees = [
    "Response within one business day",
    "Readiness view and indicative timeline at no cost",
    "No obligation, no software change required to start",
    "Dubai and Sharjah teams, on the ground",
  ];

  return (
    <section id="consultation-section" className="w-full bg-[#f8fafc] text-slate-900 py-8 sm:py-10 lg:py-12 border-t border-slate-200/80 relative z-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: CONTEXT, GUARANTEES & DEADLINE */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <p className="text-[12.5px] font-semibold tracking-[1.6px] text-[#2140A6] uppercase">
              BOOK A CONSULTATION
            </p>

            <h2 className="font-heading font-bold text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.15] tracking-[-0.8px] text-slate-900">
              Two minutes, we&apos;ll get the{" "}
              <span className="text-[#2140A6]">right consultant on it.</span>
            </h2>

            <p className="font-body text-[15px] text-[#5A6470] leading-[1.55] font-normal max-w-lg">
              Tell us what you run and what you need. A UAE consultant reviews your case and comes back with a readiness view and an indicative timeline.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 pt-2">
              {guarantees.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-xs sm:text-[13.5px] text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 stroke-[2.5]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Wave 1 ASP Deadline Box */}
            <div className="rounded-2xl p-4 sm:p-5 bg-white border border-slate-200/90 shadow-sm text-left space-y-1">
              <p className="text-xs sm:text-[13px] font-bold text-slate-900">
                Wave 1 ASP deadline: 30 Oct 2026.
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500">
                Integration slots are booked in order of enquiry.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: BOOKING FORM CARD */}
          <div className="lg:col-span-6 w-full font-body">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-9 border border-slate-200/90 shadow-[0_4px_30px_rgba(0,0,0,0.04)] text-left">
              {submitted ? (
                <div className="py-8 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#2140A6]/10 text-[#2140A6] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">Consultation Booked</h3>
                  <p className="font-body text-xs text-slate-600 max-w-xs mx-auto">
                    Thank you, <strong className="text-slate-800">{formData.fullName || "Partner"}</strong>. Our UAE team will review your inquiry for {formData.company || "your team"} and respond within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-5 py-2 text-xs font-semibold text-white bg-[#2140A6] hover:bg-[#183286] rounded-lg transition-colors cursor-pointer font-body"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 font-body">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-semibold text-slate-700 font-body">
                        Full name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2140A6] focus:border-[#2140A6] transition-all font-body"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-semibold text-slate-700 font-body">
                        Company
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company name"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2140A6] focus:border-[#2140A6] transition-all font-body"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-semibold text-slate-700 font-body">
                        Work email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="name@company.ae"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2140A6] focus:border-[#2140A6] transition-all font-body"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[11px] font-semibold text-slate-700 font-body">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2140A6] focus:border-[#2140A6] transition-all font-body"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-semibold text-slate-700 font-body">
                      Which ERP do you use?
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.erpSystem}
                        onChange={(e) => setFormData({ ...formData, erpSystem: e.target.value })}
                        className="w-full px-3 py-2 pr-9 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2140A6] focus:border-[#2140A6] transition-all appearance-none cursor-pointer font-body"
                      >
                        <option value="" disabled>Select your system</option>
                        <option value="Sage 300 / X3">Sage 300 / X3</option>
                        <option value="Microsoft Dynamics 365">Microsoft Dynamics 365</option>
                        <option value="Zoho Books">Zoho Books</option>
                        <option value="SAP (S/4 HANA / Business One)">SAP (S/4 HANA / Business One)</option>
                        <option value="Oracle NetSuite">Oracle NetSuite</option>
                        <option value="Other ERP System">Other ERP System</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-semibold text-slate-700 font-body">
                      What do you need help with?
                    </label>
                    <textarea
                      rows={2}
                      value={formData.helpMessage}
                      onChange={(e) => setFormData({ ...formData, helpMessage: e.target.value })}
                      placeholder="Readiness check, ASP appointment, integration timeline..."
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2140A6] focus:border-[#2140A6] transition-all resize-none font-body"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-5 rounded-lg text-white font-heading font-bold text-sm bg-[#2140A6] hover:bg-[#183488] active:scale-[0.99] transition-all shadow-md shadow-[#2140A6]/25 flex items-center justify-center cursor-pointer disabled:opacity-75 tracking-normal"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <span>Get My Readiness Check</span>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[10px] sm:text-[11px] text-slate-500 pt-0.5 font-body">
                    A UAE consultant responds within one business day. No obligation.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
