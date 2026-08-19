"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type NewProject = {
  id: string;
  title: string;
  location: string;
  status: string;
  image: string;
};

const newProjects: NewProject[] = [
  {
    id: "01",
    title: "The Sultan B-17 Islamabad",
    location: "Islamabad",
    status: "UNDER DEVELOPMENT",
    image: "/sultan-b17.jpg",
  },
  {
    id: "02",
    title: "The Sultan Hotels & Resorts – Galiyat",
    location: "Galiyat",
    status: "UNDER DEVELOPMENT",
    image: "/sultan-galiyat.jpg",
  },
  {
    id: "03",
    title: "The Sultan – Bahria Town",
    location: "Islamabad",
    status: "UNDER DEVELOPMENT",
    image: "/sultan-bahria.jpg",
  },
  {
    id: "04",
    title: "The Sultan Restaurant",
    location: "Islamabad",
    status: "UNDER DEVELOPMENT",
    image: "/sultan-restaurant.jpg",
  },
  {
    id: "05",
    title: "The Sultan Town",
    location: "Islamabad",
    status: "UNDER DEVELOPMENT",
    image: "/sultan-town.jpg",
  },
  {
    id: "06",
    title: "Silver City Housing Scheme",
    location: "Rawalpindi",
    status: "UNDER DEVELOPMENT",
    image: "/silver-city.jpg",
  },
];

export default function NewProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-16 md:py-24"
    >
      {/* ==============================
          BACKGROUND DECORATION
      =============================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#d9a52b]/5 blur-[120px]" />

        <div className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-[#31551f]/5 blur-[140px]" />

        <div className="absolute left-1/2 top-0 h-px w-[90%] -translate-x-1/2 bg-black/10" />
      </div>

      {/* ==============================
          CONTENT
      =============================== */}

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-7 lg:px-10">

        {/* ==============================
            SECTION HEADER
        =============================== */}

        <div
          className={`mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end
          transition-all duration-1000 ease-out
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div>
            {/* Small label */}

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a52b]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#b88618]">
                Our Projects
              </span>
            </div>

            {/* Heading */}

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171717] sm:text-5xl md:text-6xl">
              Projects under{" "}
              <span className="text-[#c69220]">
                development.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-black/55 md:text-base">
              Explore our latest developments and upcoming projects
              designed to create exceptional opportunities for living,
              business and investment.
            </p>
          </div>

          {/* Project count */}

          <div className="flex shrink-0 items-center gap-4">
            <div className="text-right">
              <span className="block text-3xl font-semibold text-[#171717]">
                {String(newProjects.length).padStart(2, "0")}
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                Projects
              </span>
            </div>

            <div className="h-12 w-px bg-black/10" />
          </div>
        </div>

        {/* ==============================
            PROJECT GRID
        =============================== */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {newProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative
                h-[390px]
                overflow-hidden
                rounded-[26px]
                bg-[#e8e8e8]
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                transition-all
                duration-700
                ease-[cubic-bezier(.22,1,.36,1)]
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.16)]
                sm:h-[410px]
                lg:h-[420px]
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >

              {/* ==============================
                  PROJECT IMAGE
              =============================== */}

              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={index < 3}
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
                className="
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  ease-[cubic-bezier(.22,1,.36,1)]
                  group-hover:scale-[1.08]
                "
              />

              {/* ==============================
                  IMAGE OVERLAY
              =============================== */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-black/5
                  via-black/5
                  to-black/90
                  transition-all
                  duration-700
                  group-hover:from-black/15
                  group-hover:via-black/20
                  group-hover:to-black/95
                "
              />

              {/* ==============================
                  TOP STATUS BADGE
              =============================== */}

              <div
                className="
                  absolute
                  left-7
                  top-7
                  z-10
                  overflow-hidden
                  rounded-full
                  bg-[#e0a526]
                  px-4
                  py-2
                  shadow-lg
                  transition-all
                  duration-500
                  group-hover:-translate-y-1
                  group-hover:scale-105
                "
              >
                <span className="text-[9px] font-bold tracking-[0.04em] text-[#171717]">
                  {project.status}
                </span>
              </div>

              {/* ==============================
                  PROJECT NUMBER
              =============================== */}

              <div
                className="
                  absolute
                  right-6
                  top-7
                  z-10
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-black/10
                  backdrop-blur-md
                  transition-all
                  duration-500
                  group-hover:border-white/60
                  group-hover:bg-white/15
                "
              >
                <span className="text-[10px] font-medium text-white">
                  {project.id}
                </span>
              </div>

              {/* ==============================
                  BOTTOM CONTENT
              =============================== */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  z-10
                  p-6
                  sm:p-7
                "
              >

                {/* Location */}

                <div
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    transition-transform
                    duration-500
                    group-hover:-translate-y-1
                  "
                >
                  {/* Location icon */}

                  <span className="flex h-5 w-5 items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 text-[#e0a526]"
                    >
                      <path
                        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />

                      <circle
                        cx="12"
                        cy="9"
                        r="2.2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>

                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
                    {project.location}
                  </span>
                </div>

                {/* Divider */}

                <div
                  className="
                    mb-4
                    h-px
                    w-full
                    bg-white/25
                    transition-all
                    duration-700
                    group-hover:bg-[#e0a526]/70
                  "
                />

                {/* Title + Arrow */}

                <div className="flex items-end justify-between gap-4">

                  <h3
                    className="
                      max-w-[85%]
                      text-xl
                      font-semibold
                      leading-tight
                      tracking-[-0.02em]
                      text-white
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      sm:text-2xl
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Arrow */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-black
                      opacity-0
                      translate-y-4
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:rotate-[-8deg]
                      group-hover:opacity-100
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                    >
                      <path
                        d="M5 19L19 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />

                      <path
                        d="M8 5h11v11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                </div>

                {/* Hidden hover line */}

                <div
                  className="
                    mt-4
                    h-[2px]
                    w-0
                    bg-[#e0a526]
                    transition-all
                    duration-700
                    group-hover:w-16
                  "
                />

              </div>

              {/* ==============================
                  HOVER BORDER
              =============================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[26px]
                  border
                  border-transparent
                  transition-all
                  duration-700
                  group-hover:border-[#e0a526]/60
                "
              />

            </div>
          ))}

        </div>

        {/* ==============================
            BOTTOM LINE
        =============================== */}

        <div
          className={`
            mt-10
            flex
            items-center
            gap-4
            transition-all
            duration-1000
            delay-700
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }
          `}
        >
          <div className="h-px flex-1 bg-black/10" />

          <span className="text-[10px] uppercase tracking-[0.25em] text-black/30">
            Property Raabta
          </span>

          <div className="h-px flex-1 bg-black/10" />
        </div>

      </div>
    </section>
  );
}