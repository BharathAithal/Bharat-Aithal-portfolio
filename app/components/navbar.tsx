"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { href: "/research-area", label: "Research Area" },
  { href: "/projects", label: "Projects" },
  { href: "/research-group", label: "Research Group" },
  { href: "/publications", label: "Publications" },
  { href: "/professional-activities", label: "Professional Activities" },
  { href: "/talks-and-training-program", label: "Talk & Training Program" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-2 md:px-6 lg:px-8">

          {/* IIT Kharagpur logo — extreme left */}
          <Link href="/" className="shrink-0" aria-label="Home">
            <div className="relative h-9 w-9">
              <Image
                src="https://ik.imagekit.io/krishdheniya/images/alumni/iitkgp-logo.jpg"
                alt="IIT Kharagpur"
                fill
                sizes="36px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Site wordmark */}
          <Link
            href="/"
            className="shrink-0 text-lg font-black tracking-tight text-slate-900 hover:text-sky-600"
            style={{ minHeight: "44px", display: "flex", alignItems: "center" }}
          >
            bharath.
          </Link>

          {/* Desktop nav — visible at 1024px+ */}
          <nav className="hidden flex-1 flex-wrap items-center justify-center gap-1 lg:flex lg:gap-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm font-medium lg:px-3 ${
                    isActive
                      ? "bg-sky-50 text-sky-600"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Hamburger — visible below 1024px */}
          <button
            onClick={() => setIsOpen(true)}
            className="hamburger-btn ml-auto flex items-center justify-center rounded-lg hover:bg-slate-100 lg:hidden"
            style={{
              width: "44px",
              height: "44px",
              visibility: isOpen ? "hidden" : "visible",
              pointerEvents: isOpen ? "none" : "auto",
            }}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-sidebar"
            tabIndex={isOpen ? -1 : 0}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-slate-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          </button>

          {/* EURG logo — extreme right (desktop only) */}
          <div className="relative hidden h-8 w-20 shrink-0 lg:block">
            <Image
              src="https://ik.imagekit.io/krishdheniya/images/alumni/eurg-logo.png"
              alt="Energy and Urban Research Group"
              fill
              sizes="80px"
              className="object-contain object-right"
            />
          </div>
        </div>
      </header>

      {/* ── BACKDROP OVERLAY ── */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ── SLIDE-IN DRAWER ── */}
      <div
        id="mobile-sidebar"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed left-0 top-0 z-50 h-full w-72 max-w-[85vw] bg-white shadow-2xl lg:hidden"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* Drawer header — logos + close button */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 shrink-0">
              <Image
                src="https://ik.imagekit.io/krishdheniya/images/alumni/iitkgp-logo.jpg"
                alt="IIT Kharagpur"
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-xl font-black tracking-tight text-slate-900 hover:text-sky-600"
            >
              bharath.
            </Link>
          </div>

          {/* THE ONLY CLOSE BUTTON */}
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center rounded-lg hover:bg-slate-100"
            style={{ width: "44px", height: "44px" }}
            aria-label="Close navigation menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-slate-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center rounded-xl px-4 text-base font-medium ${
                  isActive
                    ? "bg-sky-50 text-sky-600"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
                style={{ minHeight: "48px" }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* EURG logo at bottom of mobile drawer */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center px-6">
          <div className="relative h-10 w-32">
            <Image
              src="https://ik.imagekit.io/krishdheniya/images/alumni/eurg-logo.png"
              alt="Energy and Urban Research Group"
              fill
              sizes="128px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
