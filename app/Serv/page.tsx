"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Property Buying",
    description:
      "Find and acquire the right property with trusted guidance and local market expertise.",
    image: "/gulber.png",
  },
  {
    number: "02",
    title: "Property Selling",
    description:
      "Get the best value for your property with strategic marketing and professional support.",
    image: "/gulber.png",
  },
  {
    number: "03",
    title: "Property Renting",
    description:
      "Discover quality rental properties in prime locations across Rawalpindi and Islamabad.",
    image: "/gulber.png",
  },
  {
    number: "04",
    title: "Real Estate Marketing",
    description:
      "Boost your property's visibility with modern digital marketing strategies.",
    image: "/gulber.png",
  },
  {
    number: "05",
    title: "Construction Management",
    description:
      "End-to-end project management focused on quality, efficiency and timely delivery.",
    image: "/gulber.png",
  },
  {
    number: "06",
    title: "Architecture & Design",
    description:
      "Innovative and practical designs that transform your property vision into reality.",
    image: "/gulber.png",
  },
];

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    // House
    <svg
      key="house"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M3 10.5 12 3l9 7.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 9.5V21h13V9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 21v-6h5v6"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>,

    // Arrow
    <svg
      key="arrow"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M5 19 19 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 5h11v11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,

    // Building
    <svg
      key="building"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M4 21V6l8-3 8 3v15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8 9h1M15 9h1M8 13h1M15 13h1M8 17h1M15 17h1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>,

    // Marketing
    <svg
      key="marketing"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M4 19V5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M4 16h4l3-5 3 2 6-8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,

    // Construction
    <svg
      key="construction"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="m14 6 4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="m5 19 8.5-8.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="m16 4 4 4-2 2-4-4 2-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m4 20 2.5-.7L5 17l-1 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>,

    // Design
    <svg
      key="design"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M4 19.5 16.5 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="m14.5 5 2-2 4.5 4.5-2 2L14.5 5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m4 19.5 4-.8-3.2-3.2-.8 4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>,
  ];

  return icons[index];
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#071a11] py-24 text-white md:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Green glow */}
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#0b6b3d]/20 blur-[150px]" />

        {/* Gold glow */}
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#d9a52b]/10 blur-[150px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Decorative circles */}
        <div className="absolute right-[8%] top-[12%] h-40 w-40 rounded-full border border-white/[0.05]" />

        <div className="absolute right-[10%] top-[15%] h-28 w-28 rounded-full border border-[#d9a52b]/10" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className={`flex flex-col justify-between gap-10 lg:flex-row lg:items-end transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="max-w-4xl">

            {/* Label */}

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a52b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d9a52b]">
                What We Offer
              </span>

              <span className="text-[10px] text-white/25">
                06 SERVICES
              </span>
            </div>

            {/* Heading */}

            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[82px]">
              Everything you need
              <br />
              <span className="text-[#d9a52b]">
                to move forward.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 md:text-base">
              From finding the right property to selling, renting,
              designing and managing it — we provide complete real
              estate solutions under one roof.
            </p>
          </div>

          {/* Small right element */}

          <div className="flex shrink-0 items-center gap-4 lg:pb-2">
            <div className="text-right">
              <span className="block text-4xl font-semibold tracking-tight">
                06
              </span>

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                Core Services
              </span>
            </div>

            <div className="h-12 w-px bg-white/10" />
          </div>
        </div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="mt-16 grid gap-4 lg:mt-20 lg:grid-cols-2">

          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <div
                key={service.number}
                onMouseEnter={() => setActiveService(index)}
                className={`
                  group
                  relative
                  min-h-[270px]
                  overflow-hidden
                  rounded-[26px]
                  border
                  transition-all
                  duration-700
                  ease-[cubic-bezier(.22,1,.36,1)]
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-16 opacity-0"
                  }
                  ${
                    isActive
                      ? "border-[#d9a52b]/30 bg-[#0c2b1c]"
                      : "border-white/[0.07] bg-white/[0.035]"
                  }
                `}
                style={{
                  transitionDelay: `${300 + index * 100}ms`,
                }}
              >

                {/* Background image */}

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`
                    object-cover
                    transition-all
                    duration-[1200ms]
                    ease-[cubic-bezier(.22,1,.36,1)]
                    ${
                      isActive
                        ? "scale-105 opacity-25"
                        : "scale-100 opacity-10"
                    }
                  `}
                />

                {/* Gradient */}

                <div
                  className={`
                    absolute
                    inset-0
                    transition-all
                    duration-700
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#082519] via-[#082519]/95 to-[#082519]/50"
                        : "bg-gradient-to-r from-[#071a11] via-[#071a11]/95 to-[#071a11]/80"
                    }
                  `}
                />

                {/* Gold line */}

                <div
                  className={`
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[3px]
                    bg-[#d9a52b]
                    transition-transform
                    duration-700
                    origin-top
                    ${
                      isActive
                        ? "scale-y-100"
                        : "scale-y-0"
                    }
                  `}
                />

                {/* Content */}

                <div className="relative z-10 flex min-h-[270px] flex-col justify-between p-7 md:p-9">

                  {/* Top */}

                  <div className="flex items-start justify-between">

                    {/* Icon */}

                    <div
                      className={`
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "border-[#d9a52b] bg-[#d9a52b] text-[#071a11]"
                            : "border-white/10 bg-white/[0.04] text-[#d9a52b]"
                        }
                      `}
                    >
                      <ServiceIcon index={index} />
                    </div>

                    {/* Number */}

                    <span
                      className={`
                        text-4xl
                        font-light
                        tracking-[-0.05em]
                        transition-colors
                        duration-500
                        ${
                          isActive
                            ? "text-[#d9a52b]/60"
                            : "text-white/[0.12]"
                        }
                      `}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Bottom */}

                  <div className="flex items-end justify-between gap-8">

                    <div className="max-w-xl">

                      <h3
                        className={`
                          text-2xl
                          font-semibold
                          tracking-tight
                          transition-transform
                          duration-500
                          md:text-3xl
                          ${
                            isActive
                              ? "-translate-y-1"
                              : "translate-y-0"
                          }
                        `}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`
                          mt-3
                          max-w-lg
                          text-sm
                          leading-6
                          transition-all
                          duration-500
                          ${
                            isActive
                              ? "text-white/65"
                              : "text-white/35"
                          }
                        `}
                      >
                        {service.description}
                      </p>

                      {/* Bottom gold line */}

                      <div
                        className={`
                          mt-5
                          h-px
                          bg-[#d9a52b]
                          transition-all
                          duration-700
                          ${
                            isActive
                              ? "w-20"
                              : "w-8"
                          }
                        `}
                      />
                    </div>

                    {/* Arrow */}

                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "rotate-0 bg-[#d9a52b] text-[#071a11]"
                            : "rotate-[-45deg] bg-white/[0.06] text-white/40"
                        }
                      `}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                      >
                        <path
                          d="M5 19 19 5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />

                        <path
                          d="M8 5h11v11"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div
          className={`
            mt-6
            flex
            flex-col
            gap-7
            rounded-[26px]
            border
            border-[#d9a52b]/20
            bg-[#0b281a]
            p-7
            transition-all
            duration-1000
            md:flex-row
            md:items-center
            md:justify-between
            md:px-10
            md:py-8
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
          style={{
            transitionDelay: "1000ms",
          }}
        >
          <div className="flex items-center gap-5">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d9a52b]/40 text-[#d9a52b]">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="M4 12h16M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </div>

            <div>
              <h3 className="text-lg font-semibold md:text-xl">
                Looking for the right property?
              </h3>

              <p className="mt-1 text-sm text-white/40">
                Let our property experts help you make the right move.
              </p>
            </div>

          </div>

          <button
            className="
              group
              flex
              items-center
              justify-center
              gap-4
              rounded-full
              bg-[#d9a52b]
              px-7
              py-3.5
              text-sm
              font-semibold
              text-[#071a11]
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:bg-white
            "
          >
            Get in Touch

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}