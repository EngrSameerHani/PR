"use client";

import Link from "next/link";

export function PropertyRaabtaHero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#063d26]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/property-raabta-hero.png')"
        }}
      />

      {/* Dark overlay for readable content */}
      <div className="absolute inset-0 bg-[#032d1d]/35" />

      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#032d1d]/55 via-transparent to-[#032d1d]/25" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">

          {/* Small label */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d8aa37]/60 bg-[#063d26]/70 px-5 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#d8aa37]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Property Raabta
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Find the Right
            <span className="block text-[#d8aa37]">
              Property. Build Your Future.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            Your trusted real estate partner for buying, selling, and
            investing in properties across Rawalpindi and Islamabad.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#d8aa37] px-7 py-4 text-sm font-bold text-[#063d26] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#e7bb4d] hover:shadow-xl"
            >
              Explore Properties

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/50 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#063d26]"
            >
              Talk to an Expert
            </Link>

          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/20 pt-7">

            <div>
              <p className="text-2xl font-bold text-[#d8aa37]">100+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/70">
                Properties
              </p>
            </div>

            <div className="h-10 w-px bg-white/20" />

            <div>
              <p className="text-2xl font-bold text-[#d8aa37]">2</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/70">
                Prime Cities
              </p>
            </div>

            <div className="h-10 w-px bg-white/20" />

            <div>
              <p className="text-2xl font-bold text-[#d8aa37]">100%</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/70">
                Trusted Guidance
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}