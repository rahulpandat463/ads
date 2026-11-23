"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default like screenshot

  const faqs = [
    {
      question: "Do I need to buy new software or replace my ERP?",
      answer:
        "No. In almost all cases your existing Sage, Dynamics 365 F&O, Business Central or Zoho system stays in place. We add a compliance layer that converts, signs and transmits documents; users keep working in the screens they know.",
    },
    {
      question: "Will this work with my Sage, Dynamics 365 F&O, Business Central or Zoho setup?",
      answer:
        "Yes. We have pre-built, tested connectors for Sage 300, Sage X3, Dynamics 365 F&O, Business Central, and Zoho Books, supporting standard screens, custom fields, and local workflows without code rewrites.",
    },
    {
      question: "When exactly do I have to be ready?",
      answer:
        "Phase 1 businesses (turnover over AED 50M) must appoint an ASP by 30 October 2026 and go live on 1 January 2027. Phase 2 businesses must appoint by 31 March 2027 and go live on 1 July 2027.",
    },
    {
      question: "How long does it take to go live?",
      answer:
        "Typical deployment takes 4 to 8 weeks depending on your ERP customization, invoice volume, and testing cycles. Because our engine is already certified and live in production, you bypass months of custom software development.",
    },
    {
      question: "How much of our team's time does it take?",
      answer:
        "Minimal. Your finance and IT teams participate during the initial 2-hour discovery workshop and the final UAT sign-off. We handle the technical mapping, conversion rules, testing, and deployment.",
    },
    {
      question: "What happens if the e-invoicing rules change after we go live?",
      answer:
        "Any future regulatory updates, new data dictionary fields, or FTA rule amendments are updated centrally in the compliance layer with zero change required to your ERP screens.",
    },
    {
      question: "Does this handle the invoices we receive, not just the ones we send?",
      answer:
        "Yes. The solution supports full bi-directional AR (Accounts Receivable) and AP (Accounts Payable) automation, receiving incoming vendor Peppol invoices and routing them directly into your purchase ledger.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-slate-900 py-8 sm:py-10 lg:py-12 border-t border-slate-100 relative z-20">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
        
        {/* Section Header */}
        <div className="text-left space-y-2">
          <p className="text-[12.5px] font-semibold tracking-[1.6px] text-[#2140A6] uppercase">
            QUESTIONS FROM FINANCE TEAMS
          </p>
          <h2 className="font-heading font-bold text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.15] tracking-[-0.8px] text-slate-900">
            Frequently <span className="text-[#2140A6]">asked.</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200 hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-heading font-bold text-[17.5px] text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? "bg-blue-50 text-[#2140A6]"
                        : "bg-slate-50 text-slate-400"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-left animate-in fade-in duration-200">
                    <p className="font-body text-[15px] text-[#5A6470] leading-[1.55] font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
