"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-slate-600 py-8 sm:py-12 border-t border-slate-200 relative z-20 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-8 sm:mb-10 text-left items-start">
          
          {/* Left Column: Brand Logo & Bio */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="https://suvrin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="logo-link inline-block transition-opacity hover:opacity-90"
            >
              <Image
                src="/logo.png"
                alt="Suvrin Technologies"
                width={200}
                height={60}
                className="h-11 sm:h-14 md:h-16 w-auto object-contain block bg-transparent"
              />
            </a>
            <p className="font-body text-slate-500 leading-relaxed max-w-md text-sm font-normal">
              Authoritative enterprise digital transformation and Odoo ERP implementation partner for industrial businesses across Dubai, Abu Dhabi, and the GCC.
            </p>
          </div>

          {/* Right Column: Contact Details */}
          <div className="md:col-span-6 space-y-1.5 text-slate-500 font-body">
            <p className="text-slate-900 font-heading font-bold text-base mb-2">
              <a
                href="https://suvrin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-[#2140A6] transition-colors"
              >
                Suvrin Technologies
              </a>{" "}
              / Maxcode Solutions LLC
            </p>
            <p className="text-sm text-slate-600">
              Living Marina Gate, D94 M Floor, Jumeirah, Dubai Marina, UAE
            </p>
            <p className="text-[#2140A6] font-bold text-sm">
              Direct GCC Desk:{" "}
              <a href="tel:+971501359238" className="hover:underline">
                +971 501 359 238
              </a>
            </p>
            <p className="text-xs text-slate-400 pt-0.5">
              Email:{" "}
              <a href="mailto:sudeep@suvrin.com" className="hover:underline text-slate-500">
                sudeep@suvrin.com
              </a>{" "}
              • Global: India (Delhi NCR) • USA (Delaware)
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © 2026{" "}
            <a
              href="https://suvrin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-slate-500 font-medium"
            >
              Suvrin Technologies
            </a>
            . In collaboration with Maxcode Solutions LLC, Dubai.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://suvrin.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-slate-600 transition-colors"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="https://suvrin.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-slate-600 transition-colors"
            >
              Terms
            </a>
            <span>•</span>
            <span className="text-slate-500 font-medium">ISO 9001 / GCC Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
