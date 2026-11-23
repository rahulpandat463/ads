"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: "Home", href: "#", hasDropdown: false },
    {
      name: "Software",
      href: "#",
      hasDropdown: true,
      items: ["UAE E-Invoicing Suite", "ERP Integrations", "Compliance Engine", "Peppol Access Point"],
    },
    {
      name: "Partners",
      href: "#partners-section",
      hasDropdown: true,
      items: ["Microsoft Dynamics", "Sage Solutions", "Zoho Books", "SAP & Oracle"],
    },
    {
      name: "Industries",
      href: "#",
      hasDropdown: true,
      items: ["Retail & Wholesale", "Construction & Engineering", "Healthcare", "Logistics & Supply Chain"],
    },
    {
      name: "Resources",
      href: "#",
      hasDropdown: true,
      items: ["E-Invoicing Phase 1 & 2 Guide", "UAE FTA Mandate Timeline", "Compliance Whitepaper", "Case Studies"],
    },
    {
      name: "Company",
      href: "#",
      hasDropdown: true,
      items: ["About Suvrin", "Regional Presence", "Leadership Team", "Contact Us"],
    },
  ];

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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1.5 text-sm font-normal text-slate-200 hover:text-white transition-colors"
              >
                <span>{link.name}</span>
                {link.hasDropdown && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180 text-white" : ""
                      }`}
                  />
                )}
              </a>

              {link.hasDropdown && activeDropdown === link.name && (
                <div className="absolute top-full left-0 mt-1.5 w-52 rounded-xl bg-[#0c1638]/95 backdrop-blur-xl border border-white/10 shadow-2xl p-2 py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  {link.items?.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-[#2140A6]/40 rounded-lg transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#070e24]/98 backdrop-blur-2xl px-5 pt-3 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => {
            const isDropdownActive = activeDropdown === link.name;
            return (
              <div key={link.name} className="border-b border-white/[0.06] pb-1.5">
                <div className="flex items-center justify-between py-2">
                  <a
                    href={link.href}
                    onClick={() => {
                      if (!link.hasDropdown) setMobileMenuOpen(false);
                    }}
                    className="text-sm font-medium text-slate-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                  {link.hasDropdown && (
                    <button
                      type="button"
                      onClick={() =>
                        setActiveDropdown(isDropdownActive ? null : link.name)
                      }
                      className="p-1 text-slate-400 hover:text-white focus:outline-none"
                      aria-label={`Toggle ${link.name} submenu`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownActive ? "rotate-180 text-white" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Submenu items on mobile */}
                {link.hasDropdown && isDropdownActive && (
                  <div className="pl-3 pb-2 space-y-1.5 animate-in fade-in duration-150">
                    {link.items?.map((item) => (
                      <a
                        key={item}
                        href="#"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-3">
            <a
              href="#readiness-form"
              onClick={() => setMobileMenuOpen(false)}
              style={{ backgroundColor: "#2140A6" }}
              className="block w-full py-2.5 px-4 rounded-lg text-center text-xs font-semibold text-white shadow-md shadow-[#2140A6]/30 hover:opacity-95 transition-all"
            >
              Get Your Readiness Check
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
