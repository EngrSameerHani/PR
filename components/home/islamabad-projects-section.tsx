"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProjectCategory =
  | "All Projects"
  | "Residential"
  | "Commercial"
  | "Gated Community"
  | "Mixed Use";

type Project = {
  id: number;
  title: string;
  location: string;
  category: ProjectCategory;
  image: string;
};

/* =========================================================
   PROJECT DATA
========================================================= */

const projects: Project[] = [
  /* =======================================================
     FIRST 8 PROJECTS
     These are displayed initially
  ======================================================= */

  {
    id: 1,
    title: "Bahria Town",
    location: "Rawalpindi / Islamabad",
    category: "Gated Community",
    image: "/bt.jpg",
  },

  {
    id: 2,
    title: "DHA Margalla",
    location: "Islamabad, Pakistan",
    category: "Residential",
    image: "/Dhamargalla.jpg",
  },

  {
    id: 3,
    title: "Faisal Hills",
    location: "Taxila / Islamabad",
    category: "Residential",
    image: "/FH.jpg",
  },

  {
    id: 4,
    title: "Faisal Town",
    location: "Islamabad, Pakistan",
    category: "Residential",
    image: "/ft.jpg",
  },

  {
    id: 5,
    title: "Faisal Town Phase 2",
    location: "Islamabad, Pakistan",
    category: "Residential",
    image: "/ft2.jpg",
  },

  {
    id: 6,
    title: "Gulberg",
    location: "Islamabad, Pakistan",
    category: "Mixed Use",
    image: "/gulberg.jpg",
  },

  {
    id: 7,
    title: "Multi Gardens",
    location: "Islamabad, Pakistan",
    category: "Gated Community",
    image: "/mpchs.jpg",
  },

  {
    id: 8,
    title: "Park View City",
    location: "Islamabad, Pakistan",
    category: "Mixed Use",
    image: "/parkviewcity.jpg",
  },

  /* =======================================================
     ADDITIONAL PROJECTS
     These appear after clicking "Explore All Projects"
  ======================================================= */

  {
    id: 9,
    title: "Capital Smart City",
    location: "Islamabad, Pakistan",
    category: "Gated Community",
    image: "/Capital Smart City.jpg",
  },

  {
    id: 10,
    title: "CDA Zone",
    location: "Islamabad, Pakistan",
    category: "Residential",
    image: "/CDA Zone.jpg",
  },

  {
    id: 11,
    title: "DHA",
    location: "Islamabad, Pakistan",
    category: "Residential",
    image: "/DHA.jpg",
  },

  {
    id: 12,
    title: "Gulberg Residencia",
    location: "Islamabad, Pakistan",
    category: "Residential",
    image: "/Gulberg Resedencia.jpg",
  },

  {
    id: 13,
    title: "New Metro City Gujar Khan",
    location: "Gujar Khan, Pakistan",
    category: "Gated Community",
    image: "/New Metro City Gujar Khan.jpg",
  },

  {
    id: 14,
    title: "PWD",
    location: "Islamabad, Pakistan",
    category: "Residential",
    image: "/PWD.jpg",
  },

  {
    id: 15,
    title: "Saffron City",
    location: "Islamabad, Pakistan",
    category: "Gated Community",
    image: "/Saffron City.jpg",
  },

  {
    id: 16,
    title: "Soan Garden",
    location: "Islamabad, Pakistan",
    category: "Residential",
    image: "/Soan Garden.jpg",
  },
];

/* =========================================================
   FILTERS
========================================================= */

const filters: ProjectCategory[] = [
  "All Projects",
  "Residential",
  "Commercial",
  "Gated Community",
  "Mixed Use",
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function IslamabadProjectsSection() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectCategory>("All Projects");

  const [isVisible, setIsVisible] = useState(false);

  // Controls whether projects 09-16 are displayed
  const [showAllProjects, setShowAllProjects] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  /* =======================================================
     SCROLL ANIMATION
  ======================================================= */

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

  /* =======================================================
     FILTER PROJECTS
  ======================================================= */

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  /* =======================================================
     DISPLAY PROJECTS

     showAllProjects = false
       => first 8 projects

     showAllProjects = true
       => all matching projects
  ======================================================= */

  const visibleProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 8);

  /* =======================================================
     FILTER HANDLER

     When user changes category, go back to first 8.
  ======================================================= */

  const handleFilterChange = (filter: ProjectCategory) => {
    setActiveFilter(filter);
    setShowAllProjects(false);
  };

  /* =======================================================
     TOGGLE ALL PROJECTS
  ======================================================= */

  const handleToggleProjects = () => {
    setShowAllProjects((currentValue) => !currentValue);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f2f8f2] py-20 md:py-28"
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top left green shape */}
        <div className="absolute left-0 top-0 h-[150px] w-[360px] rounded-br-[180px] bg-[#073b27]" />

        {/* Top right green shape */}
        <div className="absolute right-0 top-0 h-[110px] w-[260px] rounded-bl-[150px] bg-[#073b27]" />

        {/* Main glow */}
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b9e6bf]/30 blur-[140px]" />

        {/* Decorative bottom circles */}
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full border border-[#0c633d]/10" />

        <div className="absolute -bottom-16 -left-8 h-60 w-60 rounded-full border border-[#0c633d]/10" />

        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-[#0c633d]/10" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#075a38 1px, transparent 1px), linear-gradient(90deg, #075a38 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className={`mx-auto max-w-5xl text-center transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          {/* Label */}

          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#0b5b38]/40" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#0b5b38]">
              Our Prestigious Portfolio
            </span>

            <span className="h-px w-12 bg-[#0b5b38]/40" />
          </div>

          {/* Icon */}

          <div className="mb-4 text-2xl text-[#0b5b38]">
            ♜
          </div>

          {/* Heading */}

          <h2 className="text-5xl font-semibold tracking-[-0.045em] text-[#10241b] sm:text-6xl md:text-7xl">
            Top Projects in{" "}
            <span className="font-serif italic text-[#075a38]">
              Islamabad
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#56665d] md:text-base">
            Discover exceptional residential communities,
            commercial destinations and investment opportunities
            across Islamabad and Rawalpindi.
          </p>
        </div>

        {/* ===================================================
            FILTER BUTTONS
        ==================================================== */}

        <div
          className={`mt-10 flex justify-center transition-all delay-200 duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex max-w-full gap-2 overflow-x-auto rounded-full border border-[#d4e3d7] bg-white/80 p-1.5 shadow-[0_10px_40px_rgba(20,70,40,0.07)] backdrop-blur-md">
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => handleFilterChange(filter)}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold transition-all duration-300 md:px-6 ${
                    active
                      ? "bg-[#075a38] text-white shadow-lg shadow-[#075a38]/20"
                      : "text-[#52645a] hover:bg-[#edf5ee] hover:text-[#075a38]"
                  }`}
                >
                  <span className="text-sm">
                    {filter === "Residential"
                      ? "⌂"
                      : filter === "Commercial"
                      ? "▥"
                      : filter === "Gated Community"
                      ? "◆"
                      : filter === "Mixed Use"
                      ? "▱"
                      : "▦"}
                  </span>

                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            PROJECT GRID
        ==================================================== */}

        <div
          className={`mt-10 grid grid-cols-1 gap-5 transition-all duration-500 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${activeFilter}`}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* ===================================================
            EXPLORE ALL PROJECTS BUTTON
        ==================================================== */}

        {filteredProjects.length > 8 && (
          <div
            className={`mt-10 flex justify-center transition-all delay-500 duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={handleToggleProjects}
              aria-expanded={showAllProjects}
              className="group flex items-center gap-4 rounded-full border border-[#cbdacf] bg-white px-6 py-3 text-sm font-semibold text-[#174d36] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#075a38] hover:shadow-xl"
            >
              {/* Icon */}

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f4e9] text-[#075a38] transition-all duration-300 group-hover:bg-[#075a38] group-hover:text-white">
                ▦
              </span>

              {/* Button Text */}

              <span>
                {showAllProjects
                  ? "Show Less"
                  : "Explore All Projects"}
              </span>

              {/* Arrow */}

              <span
                className={`text-lg transition-transform duration-300 ${
                  showAllProjects
                    ? "rotate-[-90deg]"
                    : "group-hover:translate-x-1"
                }`}
              >
                →
              </span>
            </button>
          </div>
        )}

        {/* ===================================================
            PROJECT COUNT
        ==================================================== */}

        <div className="mt-5 text-center text-xs text-[#6a786f]">
          Showing{" "}
          <span className="font-semibold text-[#075a38]">
            {visibleProjects.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-[#075a38]">
            {filteredProjects.length}
          </span>{" "}
          projects
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: Project;
  index: number;
  isVisible: boolean;
}) {
  return (
    <article
      className={`group relative h-[330px] overflow-hidden rounded-[24px] bg-[#dbe8dd] shadow-[0_12px_40px_rgba(25,70,40,0.10)] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(20,70,40,0.18)] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0"
      }`}
      style={{
        transitionDelay: `${250 + Math.min(index, 7) * 100}ms`,
      }}
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110"
      />

      {/* =====================================================
          DARK GRADIENT
      ====================================================== */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/85 transition-all duration-500 group-hover:from-black/10 group-hover:via-black/20 group-hover:to-black/90" />

      {/* =====================================================
          CATEGORY
      ====================================================== */}

      <div className="absolute left-4 top-4">
        <span className="flex items-center gap-2 rounded-full border border-white/20 bg-[#08482f]/85 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#b8e5a9]" />

          {project.category}
        </span>
      </div>

      {/* =====================================================
          NUMBER
      ====================================================== */}

      <div className="absolute right-4 top-4">
        <span className="text-[11px] font-medium text-white/70">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      {/* =====================================================
          CARD CONTENT
      ====================================================== */}

      <div className="absolute inset-x-0 bottom-0 p-5">
        {/* LOCATION */}

        <div className="mb-2 flex items-center gap-1.5 text-[10px] text-white/75">
          <span className="text-[#d9a52b]">
            ●
          </span>

          {project.location}
        </div>

        {/* TITLE */}

        <h3 className="pr-10 text-xl font-semibold leading-tight tracking-tight text-white md:text-[21px]">
          {project.title}
        </h3>

        {/* BOTTOM */}

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/45">
            Property Raabta
          </span>

          <button
            type="button"
            aria-label={`Explore ${project.title}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-lg text-[#075a38] transition-all duration-500 group-hover:rotate-[-10deg] group-hover:bg-[#d9a52b] group-hover:text-[#11160d]"
          >
            ↗
          </button>
        </div>
      </div>

      {/* =====================================================
          HOVER BORDER
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-white/0 transition-all duration-500 group-hover:border-[#d9a52b]/60" />
    </article>
  );
}