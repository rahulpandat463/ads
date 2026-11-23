"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-slate-300 py-12 sm:py-16 border-t border-white/[0.08] relative z-20 font-sans">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 text-left items-start">

          {/* COLUMN 1: BRAND LOGO, BIO & SOCIALS (cols 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo in authentic colors with crisp white text for dark background */}
            <div className="flex items-center">
              <Image
                src="/logo-white.png"
                alt="Suvrin Logo"
                width={160}
                height={45}
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>

            {/* Bio description */}
            <p className="font-body text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              Suvrin is a leading vendor of business management solutions since 2003. Over the last decade, we have humbly built the reputation of delivering value to more than 700 customers across industries.
            </p>

            {/* Social Icons (LinkedIn & Facebook) */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#0a66c2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#1877f2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
            </div>

            {/* Case Studies Link matching exact reference style */}
            <div className="pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-white/20 pb-1 hover:border-[#2E9E7B] transition-colors"
              >
                <svg className="w-4 h-4 text-[#2E9E7B] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 19h4V9H4v10zm6 0h4V5h-4v14zm6 0h4v-7h-4v7z" />
                </svg>
                <span>Case Studies</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2: CONTACT DETAILS (cols 5-9) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-heading font-bold text-[13px] tracking-[0.2em] text-white uppercase mb-4">
              CONTACT DETAILS
            </h4>

            <ul className="space-y-3.5 font-body text-xs sm:text-[13px] text-slate-400 leading-relaxed">
              {/* Dubai Office */}
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#2E9E7B] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  <strong className="text-slate-300">Dubai:</strong> Level 2, The Offices 1 One Central District Dubai World Trade Centre, PO Box 114142, Dubai UAE
                </span>
              </li>

              {/* Sharjah Office */}
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#2E9E7B] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  <strong className="text-slate-300">Sharjah:</strong> PO Box: 8934, Q3-188, SAIF ZONE Sharjah – UAE
                </span>
              </li>

              {/* Mobile Phone */}
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#2E9E7B] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
                <a href="tel:+971556323112" className="hover:text-white transition-colors">
                  +971 55 6323 112
                </a>
              </li>

              {/* Landline */}
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#2E9E7B] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+97165570124" className="hover:text-white transition-colors">
                  +971 6 557 0124
                </a>
              </li>

              {/* Fax */}
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#2E9E7B] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
                  <rect x="6" y="14" width="12" height="8" rx="1" />
                </svg>
                <span>+971 6 565 2366</span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#2E9E7B] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:info@suvrin.com" className="hover:text-white transition-colors">
                  info@suvrin.com
                </a>
              </li>

              {/* Privacy Policy */}
              <li className="flex items-center gap-3 pt-1">
                <svg className="w-4 h-4 text-[#2E9E7B] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
                <a href="#" className="hover:text-white transition-colors font-medium text-slate-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: OFFICIAL PARTNER BADGES (cols 10-12) */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end gap-3.5 pt-2 lg:pt-0">
            {/* 1. Sage Business Partner Badge */}
            <div className="hover:opacity-95 transition-opacity">
              <Image
                src="/partner-badges/sage-badge.png"
                alt="Sage Business Partner"
                width={240}
                height={68}
                className="w-auto h-12 sm:h-13 object-contain rounded-xl"
              />
            </div>

            {/* 2. Zoho Partner Badge */}
            <div className="hover:opacity-95 transition-opacity">
              <Image
                src="/partner-badges/zoho-badge.png"
                alt="Zoho Partner"
                width={240}
                height={68}
                className="w-auto h-12 sm:h-13 object-contain rounded-xl"
              />
            </div>

            {/* 3. Microsoft Partner Badge */}
            <div className="hover:opacity-95 transition-opacity">
              <Image
                src="/partner-badges/microsoft-badge.png"
                alt="Microsoft Partner"
                width={240}
                height={68}
                className="w-auto h-12 sm:h-13 object-contain rounded-xl"
              />
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-white/[0.08] text-center text-xs text-slate-500">
          <p>© 2026 Suvrin Technologies. All rights reserved. E-Invoicing compliance layer for UAE &amp; KSA.</p>
        </div>
      </div>
    </footer>
  );
}
