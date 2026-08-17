"use client";

import { useEffect, useRef, useState } from "react";

type TeamMember = {
  role: string;
  description: string;
};

const teamMembers: TeamMember[] = [
  {
    role: "Founder & Chairman",
    description:
      "Driving Raabta Property with a clear vision for trusted and transparent real estate.",
  },
  {
    role: "Chief Executive Officer",
    description:
      "Leading strategy, innovation and growth across Rawalpindi and Islamabad.",
  },
  {
    role: "Managing Director",
    description:
      "Building strong client relationships and delivering exceptional property solutions.",
  },
];

export default function TeamSection() {
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
      className="relative w-full overflow-hidden bg-[#f2f9f2] py-20 md:py-28"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-28 h-72 w-[520px] rounded-br-[260px] bg-[#073b27]" />

        <div className="absolute -left-10 -top-16 h-56 w-[480px] rounded-br-[240px] border-b-[5px] border-[#d9a52b] opacity-80" />

        <div className="absolute right-0 top-0 hidden h-[430px] w-[320px] opacity-[0.07] md:block">
          <div className="absolute bottom-0 right-10 h-[280px] w-12 rounded-t bg-[#075a38]" />
          <div className="absolute bottom-0 right-24 h-[360px] w-16 rounded-t bg-[#075a38]" />
          <div className="absolute bottom-0 right-44 h-[220px] w-14 rounded-t bg-[#075a38]" />
          <div className="absolute bottom-0 right-60 h-[310px] w-10 rounded-t bg-[#075a38]" />
        </div>

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6edc5]/40 blur-[130px]" />

        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#0a633d]/10" />

        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-[#0a633d]/10" />
      </div>

      {/* Main Content */}

      <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Header */}

        <div
          className={`mx-auto max-w-5xl text-center transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-px w-16 bg-[#075a38]/50" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#075a38]">
              Our Visionary Leaders
            </span>

            <span className="h-px w-16 bg-[#075a38]/50" />
          </div>

          <div className="mb-4 text-3xl text-[#075a38]">
            ♜
          </div>

          <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#0b3927] sm:text-6xl md:text-7xl">
            The People Behind
            <br />

            <span className="italic text-[#08703f]">
              Raabta Property
            </span>
          </h2>

          <div className="mx-auto mt-7 h-1.5 w-20 rounded-full bg-[#278c45]" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#435d50] md:text-lg">
            Raabta Property is driven by a dedicated leadership team
            committed to creating trusted property experiences and
            shaping better opportunities across Rawalpindi and Islamabad.
          </p>
        </div>

        {/* Leadership Area */}

        <div
          className={`relative mx-auto mt-16 max-w-[1400px] rounded-[38px] border border-[#0a663d] bg-white/30 px-5 py-12 backdrop-blur-sm transition-all delay-200 duration-1000 sm:px-8 md:px-12 md:py-14 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          {/* Label */}

          <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            <div className="rounded-full bg-[#075a38] px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-white shadow-lg">
              Executive Leadership
            </div>
          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={member.role}
                member={member}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Bottom Quote */}

        <div
          className={`mx-auto mt-10 max-w-3xl text-center transition-all delay-700 duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="font-serif text-xl italic text-[#075a38] md:text-2xl">
            Building trust. Connecting people. Creating better
            property opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TEAM CARD
========================================================= */

function TeamCard({
  member,
  index,
  isVisible,
}: {
  member: TeamMember;
  index: number;
  isVisible: boolean;
}) {
  const isCenter = index === 1;

  return (
    <div
      className={`group relative transition-all duration-1000 ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : index === 0
          ? "-translate-x-24 opacity-0"
          : index === 1
          ? "translate-y-20 opacity-0"
          : "translate-x-24 opacity-0"
      }`}
      style={{
        transitionDelay: `${350 + index * 180}ms`,
      }}
    >
      <div
        className={`relative overflow-hidden rounded-[30px] bg-white transition-all duration-500 ${
          isCenter
            ? "scale-[1.02] border-[3px] border-[#126b3e] shadow-[0_25px_70px_rgba(10,90,50,0.22)]"
            : "border border-white shadow-[0_18px_50px_rgba(20,70,40,0.10)]"
        } group-hover:-translate-y-2 group-hover:shadow-[0_30px_70px_rgba(10,80,45,0.20)]`}
      >
        {/* IMAGE PLACEHOLDER */}

        <div
          className={`relative flex items-center justify-center overflow-hidden ${
            isCenter
              ? "h-[330px] md:h-[360px]"
              : "h-[300px] md:h-[330px]"
          }`}
        >
          {/* Placeholder Background */}

          <div className="absolute inset-0 bg-gradient-to-br from-[#eaf7e8] via-[#d6efd5] to-[#b9dfbb]" />

          {/* Decorative circles */}

          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/30" />

          <div className="absolute -bottom-20 -left-14 h-56 w-56 rounded-full bg-[#8ac58f]/20" />

          <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#075a38]/10" />

          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#075a38]/10" />

          {/* Empty Image Space */}

          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#075a38]/15 bg-white/30 text-4xl font-light text-[#075a38]/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-110">
              +
            </div>
          </div>

          {/* Image Label */}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/60 bg-white/50 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#075a38]/60 backdrop-blur-md">
            Team Image
          </div>

          {/* Featured Badge */}

          {isCenter && (
            <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-bl-2xl rounded-tr-2xl bg-[#075a38] text-xl text-white shadow-lg">
              ★
            </div>
          )}
        </div>

        {/* Card Content */}

        <div
          className={`relative px-6 py-7 text-center ${
            isCenter
              ? "bg-[#075a38] text-white"
              : "bg-white text-[#0b3927]"
          }`}
        >
          <h3
            className={`font-serif text-2xl font-semibold ${
              isCenter
                ? "text-white"
                : "text-[#075a38]"
            }`}
          >
            {member.role}
          </h3>

          <p
            className={`mx-auto mt-2 max-w-sm text-sm leading-6 ${
              isCenter
                ? "text-white/75"
                : "text-[#607267]"
            }`}
          >
            {member.description}
          </p>

          <div
            className={`mx-auto mt-5 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-20 ${
              isCenter
                ? "bg-[#9de17f]"
                : "bg-[#278c45]"
            }`}
          />
        </div>
      </div>
    </div>
  );
}