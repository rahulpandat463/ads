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
              alt="Suvrin Logo"
              width={160}
              height={45}
              priority
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
