"use client";

// components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const services = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Copywriting", href: "/services/copywriting" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header
      // CHANGED: Fixed bg-white, added permanent shadow and border, removed scroll logic
      className="fixed top-0 z-50 w-full border-b border-[#1677B3]/10 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/OE-08.png"
            alt="Orca Edge"
            width={75}
            height={75}
            className="max-h-18 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center: Nav links (Desktop) */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          {/* CHANGED: Removed conditional text color. Always text-slate-800 for visibility on white. */}
          <ul className="flex items-center gap-8 text-[15px] font-bold font-nunito text-slate-800">
            <li>
              <Link href="/" className="transition-colors hover:text-[#1677B3]">
                Home
              </Link>
            </li>

            {/* Services with hover dropdown */}
            <li className="relative group h-20 flex items-center">
              <button
                className="flex items-center gap-1 cursor-pointer transition-colors hover:text-[#1677B3] focus:outline-none"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
                {/* Chevron Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 pt-0.5 transition-transform group-hover:rotate-180"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Invisible bridge for hover stability */}
              <div className="absolute top-[calc(100%-10px)] left-1/2 h-4 w-full -translate-x-1/2"></div>

              {/* Dropdown Panel */}
              <div className="pointer-events-none absolute left-1/2 top-[calc(100%-5px)] w-64 -translate-x-1/2 rounded-xl border border-[#1677B3]/20 bg-white py-2 shadow-xl opacity-0 transition-all duration-200 ease-in-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 translate-y-2">
                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-[#1677B3]/10 hover:text-[#1677B3]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link
                href="/aboutUs"
                className="transition-colors hover:text-[#1677B3]"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-[#1677B3]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right: CTA (Desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="rounded-lg bg-[#1677B3] px-6 py-2.5 font-nunito text-sm font-bold tracking-wider text-white shadow-md shadow-blue-500/20 transition-all hover:bg-[#126294] hover:shadow-lg active:scale-95"
          >
            Book a Free Consultations
          </Link>
        </div>

        {/* Mobile: Hamburger - Always dark color now */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 md:hidden focus:outline-none text-slate-800"
          aria-label="Toggle navigation"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <div className="relative h-5 w-6 overflow-hidden">
            <span
              className={`absolute left-0 block h-[2px] w-full transform bg-current transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "top-1/2 -translate-y-1/2 rotate-45"
                  : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[2px] w-full -translate-y-1/2 transform bg-current transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-full transform bg-current transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "top-1/2 -translate-y-1/2 -rotate-45"
                  : "bottom-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[#1677B3]/20 bg-white px-4 pb-8 pt-4 shadow-inner">
          <nav className="grid gap-y-1 font-nunito text-base font-medium text-slate-700">
            <Link
              href="/"
              className="flex items-center rounded-lg p-3 hover:bg-[#1677B3]/5 hover:text-[#1677B3]"
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                className={`flex w-full items-center justify-between rounded-lg p-3 hover:bg-[#1677B3]/5 hover:text-[#1677B3] ${
                  isMobileServicesOpen ? "text-[#1677B3] bg-[#1677B3]/5" : ""
                }`}
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              >
                <span>Services</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen ? "max-h-96 mt-1" : "max-h-0"
                }`}
              >
                <ul className="space-y-1 rounded-lg bg-slate-50 p-2 border border-[#1677B3]/10">
                  {services.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-md py-2.5 px-4 text-sm text-slate-600 hover:bg-[#1677B3]/10 hover:text-[#1677B3]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/aboutUs"
              className="flex items-center rounded-lg p-3 hover:bg-[#1677B3]/5 hover:text-[#1677B3]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="flex items-center rounded-lg p-3 hover:bg-[#1677B3]/5 hover:text-[#1677B3]"
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="mt-6 pt-4 border-t border-[#1677B3]/20">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-lg bg-[#1677B3] px-4 py-3 font-bold tracking-wider text-white transition-colors hover:bg-[#126294]"
              >
                Book a Free Consultation
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
