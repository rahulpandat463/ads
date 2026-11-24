"use client";

import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent flex-shrink-0">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo in authentic colors with crisp white text for dark background */}
        <div className="flex items-center">
          <a href="#" className="flex items-center transition-opacity hover:opacity-95">
            <Image
              src="/logo-white.png"
              alt="Suvrin Technologies"
              width={220}
              height={97}
              priority
              className="h-9 sm:h-11 md:h-12 w-auto object-contain drop-shadow-sm"
            />
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle (matching reference mobile header) */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/25 bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <div className="flex flex-col justify-center items-center gap-[4.5px]">
              <span className="w-5 h-[2px] bg-white rounded-full block"></span>
              <span className="w-5 h-[2px] bg-white rounded-full block"></span>
              <span className="w-5 h-[2px] bg-white rounded-full block"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
