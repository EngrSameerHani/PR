"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Property Buying",
    description:
      "Find and acquire the right property with trusted guidance and local market expertise.",
    icon: "⌂",
  },
  {
    number: "02",
    title: "Property Selling",
    description:
      "Get the best value for your property with strategic marketing and professional support.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Property Renting",
    description:
      "Discover quality rental properties in prime locations across Rawalpindi and Islamabad.",
    icon: "⌂",
  },
  {
    number: "04",
    title: "Real Estate Marketing",
    description:
      "Boost your property's visibility with modern digital marketing strategies.",
    icon: "▥",
  },
  {
    number: "05",
    title: "Construction Management",
    description:
      "End-to-end project management focused on quality and timely delivery.",
    icon: "⌂",
  },
  {
    number: "06",
    title: "Architecture & Design",
    description:
      "Innovative and practical designs that transform your property vision into reality.",
    icon: "◇",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f3faef] py-24 md:py-32"
    >
      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute left-0 top-0 h-32 w-72 rounded-br-[90px] bg-[#084b2c]" />

      <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[400px] w-[400px] rounded-full border border-[#4b9b67]/10" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[450px] w-[450px] rounded-full border border-[#4b9b67]/10" />

      {/* =========================================================
          FULL-WIDTH CONTENT
      ========================================================= */}

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="text-center">

          {/* Small heading */}
          <div
            className={`flex items-center justify-center gap-4 transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <span className="h-px w-12 bg-[#167044]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#145c38]">
              What We Offer
            </span>

            <span className="h-px w-12 bg-[#167044]" />
          </div>

          {/* Main heading */}
          <h2
            className={`mx-auto mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-[#081c12] transition-all duration-700 delay-100 sm:text-6xl lg:text-7xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Our Signature{" "}
            <span className="text-[#14613b]">Services</span>
          </h2>

          {/* Description */}
          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 transition-all duration-700 delay-200 md:text-lg ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Comprehensive real estate solutions for a smarter,
            simpler and better property journey.
          </p>

          {/* Green underline */}
          <div
            className={`mx-auto mt-6 h-1 rounded-full bg-[#197542] transition-all duration-700 delay-300 ${
              isVisible ? "w-14" : "w-0"
            }`}
          />
        </div>

        {/* =======================================================
            SERVICES AREA
        ======================================================= */}

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1.28fr]">

          {/* =====================================================
              LARGE PROPERTY IMAGE
          ===================================================== */}

          <div
            className={`relative hidden min-h-[720px] overflow-hidden rounded-[30px] transition-all duration-1000 lg:block ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <Image
              src="/gulber.png"
              alt="Property Raabta real estate"
              fill
              priority
              sizes="(max-width: 1024px) 0vw, 40vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />

            {/* Dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#062c1b] via-transparent to-transparent" />

            {/* Floating location */}
            <div className="absolute right-5 top-5 rounded-full border border-white/30 bg-black/20 px-5 py-3 text-xs font-medium text-white backdrop-blur-md">
              Rawalpindi • Islamabad
            </div>

            {/* Image text */}
            <div className="absolute bottom-8 left-8 right-8 text-white">

              <div className="mb-4 h-px w-12 bg-[#d9a52b]" />

              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Property Raabta
              </p>

              <h3 className="mt-3 text-3xl font-semibold leading-tight">
                Your Property.
                <br />
                Our Expertise.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
                Helping you make confident property decisions
                across Pakistan's twin cities.
              </p>

            </div>
          </div>

          {/* =====================================================
              SERVICE CARDS
          ===================================================== */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {services.map((service, index) => {
              const row = Math.floor(index / 2);
              const comesFromLeft = row % 2 === 0;

              return (
                <div
                  key={service.number}
                  className={`group flex min-h-[235px] overflow-hidden rounded-[24px] bg-white shadow-[0_12px_40px_rgba(15,70,35,0.08)] transition-all duration-1000 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : comesFromLeft
                        ? "-translate-x-24 opacity-0"
                        : "translate-x-24 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${400 + index * 150}ms`,
                  }}
                >

                  {/* Card content */}
                  <div className="flex w-[58%] flex-col justify-between p-6 md:p-7">

                    <div>

                      {/* Icon + Title */}
                      <div className="flex items-start gap-3">

                        {/* Icon */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f5e2] text-lg text-[#12613a] transition-all duration-500 group-hover:bg-[#12613a] group-hover:text-white">
                          {service.icon}
                        </div>

                        {/* Number + Title */}
                        <div>
                          <p className="text-[10px] font-semibold tracking-[0.15em] text-[#32805a]">
                            {service.number}
                          </p>

                          <h3 className="mt-1 text-lg font-semibold leading-tight text-[#111b16] md:text-xl">
                            {service.title}
                          </h3>
                        </div>

                      </div>

                      {/* Description */}
                      <p className="mt-5 text-sm leading-6 text-gray-500">
                        {service.description}
                      </p>

                    </div>

                    {/* Arrow */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07502d] text-lg text-white transition-all duration-500 group-hover:translate-x-2 group-hover:bg-[#d9a52b]">
                      →
                    </div>

                  </div>

                  {/* Card image */}
                  <div className="relative w-[42%] overflow-hidden">

                    <Image
                      src="/gulber.png"
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 1024px) 21vw, 13vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* =======================================================
            CTA
        ======================================================= */}

        <div
          className={`mt-10 overflow-hidden rounded-[28px] bg-[#07502d] transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          style={{
            transitionDelay: "1400ms",
          }}
        >

          <div className="flex flex-col gap-7 px-8 py-8 md:flex-row md:items-center md:justify-between md:px-12 md:py-9">

            {/* CTA content */}
            <div className="flex items-center gap-5">

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d9a52b]/50 text-2xl text-[#d9a52b]">
                ◇
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold text-white md:text-2xl">
                  Your Trusted Partner in Real Estate
                </h3>

                <p className="mt-2 text-sm text-white/60">
                  Quality
                  <span className="mx-2 text-[#d9a52b]">|</span>
                  Transparency
                  <span className="mx-2 text-[#d9a52b]">|</span>
                  Long-Term Value
                </p>
              </div>

            </div>

            {/* CTA button */}
            <button
              type="button"
              className="group flex items-center justify-center gap-4 rounded-full bg-[#d9f5c8] px-7 py-4 font-semibold text-[#07502d] transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              Get in Touch

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}