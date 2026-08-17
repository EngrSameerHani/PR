"use client";

import { useEffect, useState } from "react";
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

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1800;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <>
      {count}
      <span className="text-[#D9A52B]">{suffix}</span>
    </>
  );
}

export default function StatsSection() {
  return (
    <section className="container py-10 my-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="relative min-h-[550px] lg:min-h-[700px] overflow-hidden rounded-[32px]">
  <Image
    src="/gulber.png"
    alt="Featured project"
    fill
    className="object-cover"
    priority
  />
</div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-[#f5f5f5] rounded-[28px] p-8 md:p-10 flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <p className="text-xs font-medium text-black">
                  {stat.title}
                </p>

                <div className="mt-5 h-px bg-black/10" />
              </div>

              <div>
                <div className="text-[64px] md:text-[72px] font-semibold tracking-[-0.05em] leading-none text-[#222]">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
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
    </section>
  );
}