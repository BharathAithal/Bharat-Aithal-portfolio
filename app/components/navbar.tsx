"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-6 px-4 py-4 md:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-black tracking-tight text-slate-900 transition hover:text-sky-600"
        >
          bharath.
        </Link>

        <nav className="hidden flex-1 flex-wrap items-center justify-end gap-2 md:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${isActive
                    ? "bg-sky-50 text-sky-600"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
