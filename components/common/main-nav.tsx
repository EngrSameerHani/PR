"use client";

import { Norican } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export function MainNav({ items, children }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  const navItems = [
  { title: "HOME", href: "/" },
  { title: "ABOUT US", href: "/who-we-are" },
  { title: "PROPERTIES", href: "/projectsc" },
  { title: "OUR SERVICES", href: "/Serv" },
  { title: "BLOG", href: "/blog" },
  { title: "CONTACT", href: "/contact/complaint-to-ceo" },
  { title: "BANK ACCOUNTS", href: "/bank-accounts" },
];
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-[1450px] overflow-hidden rounded-[18px] border border-white/10 bg-[#075333]/95 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">

        {/* ================= DESKTOP ================= */}

        <div className="hidden h-[78px] items-center lg:flex">

          {/* BRAND */}

          <Link
            href="/"
            className="flex h-full w-[275px] shrink-0 items-center gap-3 px-6"
          >
            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center">
              <svg
                viewBox="0 0 70 70"
                className="h-full w-full"
                fill="none"
              >
                <path
                  d="M7 35L35 9L63 35"
                  stroke="#D8AA37"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M15 32V59H55V32"
                  stroke="white"
                  strokeWidth="4"
                />

                <path
                  d="M29 59V43H41V59"
                  stroke="#D8AA37"
                  strokeWidth="4"
                />

                <path
                  d="M5 57C20 64 39 65 65 53"
                  stroke="#79BD6D"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="leading-none">
              <div className="font-serif text-[21px] font-bold tracking-tight text-white">
                PROPERTY
              </div>

              <div className="font-serif text-[21px] font-bold tracking-tight text-[#79BD6D]">
                RAABTA
              </div>

              <div className="mt-1 text-[7px] font-semibold uppercase tracking-[0.15em] text-[#D8AA37]">
                Rawalpindi & Islamabad
              </div>
            </div>
          </Link>

          {/* DIVIDER */}

          <div className="h-[45px] w-px bg-white/30" />

          {/* NAVIGATION */}

          <nav className="flex flex-1 items-center justify-center gap-6 px-5 xl:gap-8">
            {navItems.map((item, index) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "group relative whitespace-nowrap text-[12px] font-bold tracking-wide transition-colors duration-300",
                    active
                      ? "text-[#D8AA37]"
                      : "text-white/90 hover:text-[#D8AA37]"
                  )}
                >
                  {item.title}

                  <span
                    className={cn(
                      "absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 bg-[#D8AA37] transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CALL BUTTON */}

          <div className="pr-3">
            <a
              href="tel:+923331119930"
              className="flex h-[46px] min-w-[185px] items-center justify-center gap-2 rounded-xl bg-[#D8AA37] px-5 text-[12px] font-bold text-[#063D26] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8BD50] hover:shadow-[0_8px_25px_rgba(216,170,55,0.3)]"
            >
              <span className="text-base">☎</span>
              <span>Call Us: +92 333 1119930</span>
            </a>
          </div>
        </div>

        {/* ================= MOBILE ================= */}

        <div className="flex h-[70px] items-center justify-between px-4 lg:hidden">

          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <div className="h-10 w-10">
              <svg
                viewBox="0 0 70 70"
                className="h-full w-full"
                fill="none"
              >
                <path
                  d="M7 35L35 9L63 35"
                  stroke="#D8AA37"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M15 32V59H55V32"
                  stroke="white"
                  strokeWidth="4"
                />

                <path
                  d="M29 59V43H41V59"
                  stroke="#D8AA37"
                  strokeWidth="4"
                />

                <path
                  d="M5 57C20 64 39 65 65 53"
                  stroke="#79BD6D"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="leading-none">
              <div className="font-serif text-[16px] font-bold text-white">
                PROPERTY
              </div>

              <div className="font-serif text-[16px] font-bold text-[#79BD6D]">
                RAABTA
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2">

            <a
              href="tel:+923331119930"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8AA37] text-[#063D26]"
              aria-label="Call Property Raabta"
            >
              ☎
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/5"
            >
              <span
                className={cn(
                  "h-[2px] w-5 bg-white transition-all",
                  showMobileMenu && "translate-y-[4px] rotate-45"
                )}
              />

              <span
                className={cn(
                  "h-[2px] w-5 bg-white transition-all",
                  showMobileMenu && "opacity-0"
                )}
              />

              <span
                className={cn(
                  "h-[2px] w-5 bg-white transition-all",
                  showMobileMenu && "-translate-y-[4px] -rotate-45"
                )}
              />
            </button>

          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}

        {showMobileMenu && (
          <div className="border-t border-white/10 bg-[#063D26] lg:hidden">

            <nav className="space-y-1 px-4 py-4">

              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setShowMobileMenu(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition-colors",
                      active
                        ? "bg-[#D8AA37] text-[#063D26]"
                        : "text-white/85 hover:bg-white/10 hover:text-[#D8AA37]"
                    )}
                  >
                    <span>{item.title}</span>
                    <span>→</span>
                  </Link>
                );
              })}

              <a
                href="tel:+923331119930"
                className="mt-3 flex items-center justify-center rounded-xl bg-[#D8AA37] px-4 py-3.5 text-sm font-bold text-[#063D26]"
              >
                ☎ &nbsp; Call Us: +92 333 1119930
              </a>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}