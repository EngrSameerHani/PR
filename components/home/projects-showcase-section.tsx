"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: "01",
    title: "Al Ghurair Giga",
    location: "Islamabad",
    category: "Real Estate",
    description:
      "A landmark real estate development offering modern residential, commercial and lifestyle opportunities.",
    image: "/gulber.png",
  },
  {
    id: "02",
    title: "Imarat",
    location: "Islamabad",
    category: "Real Estate",
    description:
      "A leading real estate group delivering innovative developments and premium investment opportunities.",
    image: "/gulber.png",
  },
  {
    id: "03",
    title: "Mumtaz City",
    location: "Islamabad",
    category: "Residential",
    description:
      "A thoughtfully planned community offering modern living and strong investment potential.",
    image: "/gulber.png",
  },
  {
    id: "04",
    title: "Premier Choice International",
    location: "Islamabad",
    category: "Real Estate",
    description:
      "A trusted real estate company providing quality property opportunities and investment solutions.",
    image: "/gulber.png",
  },
  {
    id: "05",
    title: "Silver City",
    location: "Rawalpindi",
    category: "Housing",
    description:
      "A modern community offering a balanced combination of lifestyle, accessibility and investment.",
    image: "/gulber.png",
  },
  {
    id: "06",
    title: "Faisal Jewels",
    location: "Islamabad",
    category: "Commercial",
    description:
      "A premium commercial destination offering an attractive opportunity for businesses and investors.",
    image: "/gulber.png",
  },
  
];

export default function ProjectShowcaseSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#11160d] py-24 text-white md:py-32">
      {/* ==============================
          BACKGROUND EFFECTS
      =============================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#31551f]/20 blur-[150px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#d9a52b]/10 blur-[160px]" />

        <div className="absolute right-[8%] top-[15%] h-40 w-40 rounded-full border border-white/[0.04]" />

        <div className="absolute right-[10%] top-[17%] h-28 w-28 rounded-full border border-[#d9a52b]/10" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ==============================
          FULL WIDTH CONTENT
      =============================== */}

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
        {/* ==============================
            HEADER
        =============================== */}

        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-4xl">
            {/* Label */}

            <div
              className={`mb-7 flex items-center gap-3 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="flex h-8 items-center rounded-full border border-[#d9a52b]/60 px-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d9a52b]">
                Featured Projects
              </span>

              <span className="h-px w-12 bg-[#d9a52b]/40" />

              <span className="text-xs text-white/30">01 — 07</span>
            </div>

            {/* Heading */}

            <h2
              className={`max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] transition-all duration-1000 delay-150 sm:text-6xl md:text-7xl lg:text-[82px] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              Discover spaces
              <br />

              <span className="text-[#d9a52b]">
                made for tomorrow.
              </span>
            </h2>

            {/* Description */}

            <p
              className={`mt-7 max-w-xl text-sm leading-7 text-white/45 transition-all duration-1000 delay-300 md:text-base ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Explore Property Raabta&apos;s collection of residential,
              commercial and luxury property opportunities across Rawalpindi,
              Islamabad and surrounding areas.
            </p>
          </div>

          {/* View All */}

          <button
            className={`group flex w-fit items-center gap-4 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-[#11160d] transition-all duration-1000 delay-300 hover:scale-105 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            View All Projects

            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d9a52b] text-lg transition-transform duration-500 group-hover:rotate-45">
              ↗
            </span>
          </button>
        </div>

        {/* ==============================
            PROJECT SHOWCASE
        =============================== */}

        <div
          className={`mt-16 transition-all duration-1000 delay-500 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          {/* ==============================
              DESKTOP PROJECTS
          =============================== */}

          <div className="hidden h-[560px] w-full gap-3 lg:flex">
            {projects.map((project, index) => {
              const active = index === activeProject;

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setActiveProject(index)}
                  className={`group relative cursor-pointer overflow-hidden rounded-[28px] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
                    active ? "flex-[4.5]" : "flex-[1]"
                  }`}
                >
                  {/* Image */}

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className={`object-cover transition-transform duration-[1200ms] ${
                      active ? "scale-105" : "scale-100"
                    }`}
                  />

                  {/* Overlay */}

                  <div
                    className={`absolute inset-0 transition-all duration-700 ${
                      active
                        ? "bg-gradient-to-t from-black via-black/20 to-black/5"
                        : "bg-black/50"
                    }`}
                  />

                  {/* Border */}

                  <div
                    className={`absolute inset-0 rounded-[28px] border transition-all duration-700 ${
                      active
                        ? "border-[#d9a52b]/60"
                        : "border-white/10"
                    }`}
                  />

                  {/* ==========================
                      INACTIVE CARD
                  =========================== */}

                  {!active && (
                    <div className="absolute inset-0 flex flex-col items-center justify-between py-7">
                      <span className="text-xs font-medium text-white/40">
                        {project.id}
                      </span>

                      <div className="flex items-center gap-3">
                        <span className="h-8 w-px bg-[#d9a52b]" />

                        <h3
                          className="max-w-[170px] text-lg font-semibold text-white"
                          style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                          }}
                        >
                          {project.title}
                        </h3>
                      </div>

                      <span
                        className="text-[9px] uppercase tracking-[0.25em] text-white/35"
                        style={{
                          writingMode: "vertical-rl",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                  )}

                  {/* ==========================
                      ACTIVE CARD
                  =========================== */}

                  {active && (
                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                      {/* Location */}

                      <div className="mb-4 flex items-center gap-2">
                        <span className="text-[#d9a52b]">●</span>

                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                          {project.location}
                        </span>
                      </div>

                      {/* Divider */}

                      <div className="mb-5 h-px w-full bg-white/20" />

                      <div className="flex items-end justify-between gap-6">
                        <div>
                          <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#d9a52b]">
                            {project.category}
                          </p>

                          <h3 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                            {project.title}
                          </h3>

                          <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">
                            {project.description}
                          </p>
                        </div>

                        {/* Explore */}

                        <button className="group hidden shrink-0 items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-xs font-semibold text-black md:flex">
                          Explore

                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9a52b] text-base transition-transform duration-500 group-hover:rotate-45">
                            ↗
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ==============================
              MOBILE
          =============================== */}

          <div className="flex gap-4 overflow-x-auto pb-5 lg:hidden">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative h-[480px] min-w-[300px] overflow-hidden rounded-[28px]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="300px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-[#d9a52b]">●</span>

                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                      {project.location}
                    </span>
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d9a52b]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <button className="mt-5 flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black">
                    Explore Project

                    <span className="text-[#d9a52b]">↗</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==============================
            BOTTOM BRAND BAR
        =============================== */}

        <div
          className={`mt-8 flex flex-col gap-6 border-t border-white/10 pt-7 transition-all duration-1000 delay-700 md:flex-row md:items-center md:justify-between ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9a52b]/40 text-xl text-[#d9a52b]">
              ◇
            </div>

            <div>
              <p className="text-sm font-medium">Property Raabta</p>

              <p className="mt-1 text-xs text-white/35">
                Real Estate for Rawalpindi & Islamabad
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] text-white/30">
            <span>Residential</span>
            <span>Commercial</span>
            <span>Luxury</span>
            <span>Investment</span>
          </div>
        </div>
      </div>
    </section>
  );
}