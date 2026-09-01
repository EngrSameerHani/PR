"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Stat = {
  title: string;
  label: string;
  value: number;
  suffix: string;
};

const stats: Stat[] = [
  {
    title: "EXPERIENCE",
    label: "Years of Experience",
    value: 23,
    suffix: "+",
  },
  {
    title: "OUR WORK",
    label: "Completed Projects",
    value: 36,
    suffix: "+",
  },
  {
    title: "TEAM",
    label: "Team Members",
    value: 100,
    suffix: "+",
  },
  {
    title: "SATISFACTION",
    label: "Clients Satisfied",
    value: 98,
    suffix: "%",
  },
];

/* =========================================================
   ANIMATED COUNTER
   Starts only when the section becomes visible
========================================================= */

function AnimatedCounter({
  value,
  suffix,
  shouldAnimate,
}: {
  value: number;
  suffix: string;
  shouldAnimate: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const duration = 1800;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [value, shouldAnimate]);

  return (
    <>
      {count}
      <span className="text-[#D9A52B]">{suffix}</span>
    </>
  );
}

/* =========================================================
   STATS SECTION
========================================================= */

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  /* =======================================================
     DETECT WHEN SECTION ENTERS VIEWPORT
  ======================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Stop observing after first appearance
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-10 my-14"
    >
      {/* =====================================================
          FULL-WIDTH CONTENT
      ===================================================== */}

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* =================================================
              LEFT FEATURED IMAGE
          ================================================= */}

          <div className="relative min-h-[550px] overflow-hidden rounded-[32px] lg:min-h-[700px]">

            <Image
              src="/gulber.png"
              alt="Featured project"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

          </div>

          {/* =================================================
              RIGHT STATS
          ================================================= */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className={`flex min-h-[260px] flex-col justify-between rounded-[28px] bg-[#f5f5f5] p-8 transition-all duration-700 md:p-10 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >

                {/* =========================================
                    STAT HEADER
                ========================================= */}

                <div>

                  <p className="text-xs font-medium text-black">
                    {stat.title}
                  </p>

                  <div className="mt-5 h-px bg-black/10" />

                </div>

                {/* =========================================
                    STAT NUMBER
                ========================================= */}

                <div>

                  <div className="text-[64px] font-semibold leading-none tracking-[-0.05em] text-[#222] md:text-[72px]">

                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      shouldAnimate={isVisible}
                    />

                  </div>

                  <p className="mt-2 text-lg text-gray-500">
                    {stat.label}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}