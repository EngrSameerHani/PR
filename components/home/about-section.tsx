"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: "20+", label: "Projects" },
  { value: "10K+", label: "Satisfied Clients" },
  { value: "15+", label: "Years Experience" },
];

export default function AboutSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#D9A52B]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gray-100 blur-3xl" />

      <div className="container relative">

        {/* HEADER */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.65fr_1.8fr]">

          {/* LABEL */}
          <div
            className={`transition-all duration-1000 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-[#D9A52B] px-5 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D9A52B]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                Who We Are
              </span>
            </div>

            <div className="mt-8 hidden border-l border-gray-200 pl-5 lg:block">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Our Territory
              </p>

              <p className="mt-2 text-lg font-medium">
                Rawalpindi
                <br />
                Islamabad
              </p>

              <div className="mt-4 h-px w-12 bg-[#D9A52B]" />
            </div>
          </div>

          {/* MAIN HEADING */}
          <div>
            <h2
              className={`max-w-5xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#202020] transition-all duration-1000 delay-150 sm:text-5xl md:text-6xl lg:text-[72px] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Your trusted partner for
              <span className="relative mx-2 inline-block">
                <span className="relative z-10">
                  better property
                </span>

                <span
                  className={`absolute bottom-1 left-0 h-3 w-full origin-left bg-[#D9A52B]/25 transition-transform duration-1000 delay-700 ${
                    visible ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </span>
              across Pakistan's twin cities.
            </h2>

            {/* DESCRIPTION */}
            <div
              className={`mt-10 grid max-w-5xl grid-cols-1 gap-8 border-t border-gray-200 pt-8 transition-all duration-1000 delay-300 md:grid-cols-2 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
                  Property Raabta
                </p>

                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Property Raabta is a modern real estate platform focused
                  on connecting buyers, sellers and investors with the right
                  property opportunities in Rawalpindi and Islamabad.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
                  Our Approach
                </p>

                <p className="mt-4 text-lg leading-8 text-gray-600">
                  We make property decisions easier through local market
                  knowledge, transparent communication and professional
                  guidance from the first conversation to the final deal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VISION + MISSION */}
        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* VISION */}
          <div
            className={`group relative overflow-hidden rounded-[28px] bg-[#f5f5f3] p-8 transition-all duration-1000 delay-500 md:p-10 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="absolute right-8 top-3 text-7xl font-bold text-black/[0.035]">
              01
            </span>

            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D9A52B] text-xl">
                  ◇
                </div>

                <h3 className="text-2xl font-semibold">
                  Our Vision
                </h3>
              </div>

              <p className="mt-7 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
                To become a trusted real estate partner for Rawalpindi
                and Islamabad by creating a property experience built on
                transparency, trust and long-term relationships.
              </p>

              <div className="mt-8 h-px w-0 bg-[#D9A52B] transition-all duration-700 group-hover:w-24" />
            </div>
          </div>

          {/* MISSION */}
          <div
            className={`group relative overflow-hidden rounded-[28px] bg-[#202020] p-8 text-white transition-all duration-1000 delay-700 md:p-10 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="absolute right-8 top-3 text-7xl font-bold text-white/[0.04]">
              02
            </span>

            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D9A52B] text-xl">
                  ↗
                </div>

                <h3 className="text-2xl font-semibold">
                  Our Mission
                </h3>
              </div>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/60 md:text-lg">
                To make buying, selling and investing in property simpler
                by combining local expertise, honest advice and a
                client-first approach.
              </p>

              <div className="mt-8 h-px w-0 bg-[#D9A52B] transition-all duration-700 group-hover:w-24" />
            </div>
          </div>
        </div>

        {/* STATS */}
        <div
          className={`mt-5 grid grid-cols-1 overflow-hidden rounded-[28px] border border-gray-200 bg-white transition-all duration-1000 delay-1000 sm:grid-cols-3 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group p-8 md:p-10 ${
                index !== stats.length - 1
                  ? "border-b border-gray-200 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-4xl font-bold tracking-tight md:text-5xl">
                    {stat.value}
                  </div>

                  <p className="mt-2 text-sm uppercase tracking-[0.15em] text-gray-400">
                    {stat.label}
                  </p>
                </div>

                <span className="text-xl text-[#D9A52B] transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BRANDING */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm font-semibold tracking-[0.15em] text-gray-400">
            PROPERTY RAABTA
          </p>

          <p className="text-sm text-gray-400">
            Real Estate for Rawalpindi & Islamabad
          </p>
        </div>

      </div>
    </section>
  );
}