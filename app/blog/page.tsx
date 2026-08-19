"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const blogs = [
  {
    id: "01",
    category: "PROPERTY INVESTMENT",
    date: "19 AUG 2026",
    readTime: "6 MIN READ",
    title:
      "B-17 Islamabad Investment Guide: Is It Still a Smart Choice in 2026?",
    excerpt:
      "Explore B-17's location, development, accessibility, property prices and long-term investment potential.",
    image: "/gulber.png",
  },
  {
    id: "02",
    category: "REAL ESTATE TIPS",
    date: "17 AUG 2026",
    readTime: "5 MIN READ",
    title:
      "7 Things You Must Check Before Buying Property in Islamabad",
    excerpt:
      "From documentation and approvals to location and development status, here's what every buyer should verify.",
    image: "/gulber.png",
  },
  {
    id: "03",
    category: "RENTAL INVESTMENT",
    date: "15 AUG 2026",
    readTime: "7 MIN READ",
    title:
      "House, Apartment or Shop: Which Property Gives Better Rental Income?",
    excerpt:
      "Compare different property types and discover which option can deliver better rental potential.",
    image: "/gulber.png",
  },
  {
    id: "04",
    category: "ISLAMABAD PROPERTY",
    date: "13 AUG 2026",
    readTime: "8 MIN READ",
    title:
      "Bahria Town vs DHA Islamabad: Which Area Is Better for Investment?",
    excerpt:
      "A practical comparison of location, lifestyle, development, rental demand and investment opportunities.",
    image: "/gulber.png",
  },
  {
    id: "05",
    category: "CONSTRUCTION",
    date: "10 AUG 2026",
    readTime: "6 MIN READ",
    title:
      "Construction Cost in Islamabad: What Investors Should Know Before Building",
    excerpt:
      "Understand the major construction expenses and the factors that can affect your overall building budget.",
    image: "/gulber.png",
  },
  {
    id: "06",
    category: "BUYING GUIDE",
    date: "08 AUG 2026",
    readTime: "5 MIN READ",
    title:
      "Plot vs Apartment: Where Should You Invest Your Money?",
    excerpt:
      "A simple breakdown of appreciation, rental income, maintenance and long-term investment value.",
    image: "/gulber.png",
  },
  {
    id: "07",
    category: "OVERSEAS INVESTMENT",
    date: "05 AUG 2026",
    readTime: "7 MIN READ",
    title:
      "Buying Property in Pakistan from Overseas: A Practical Investor Guide",
    excerpt:
      "Important considerations for overseas Pakistanis looking to invest safely in Islamabad and Rawalpindi.",
    image: "/gulber.png",
  },
  {
    id: "08",
    category: "PROPERTY LEGAL GUIDE",
    date: "02 AUG 2026",
    readTime: "6 MIN READ",
    title:
      "CDA Approval, NOC & Property Documents: What Every Buyer Should Verify",
    excerpt:
      "Learn why approvals and documentation matter before committing to a real-estate investment.",
    image: "/gulber.png",
  },
  {
    id: "09",
    category: "MARKET INSIGHTS",
    date: "30 JUL 2026",
    readTime: "8 MIN READ",
    title:
      "Where Is Islamabad's Real Estate Market Heading in 2026?",
    excerpt:
      "Key factors shaping demand, development and investment opportunities across the capital.",
    image: "/gulber.png",
  },
];

export default function PropertyBlogSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
        threshold: 0.08,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f7f8f5] py-24 md:py-32"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#0a6139]/5 blur-[120px]" />

        <div className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-[#d9a52b]/5 blur-[140px]" />

        <div className="absolute right-[8%] top-[15%] h-40 w-40 rounded-full border border-[#0a6139]/5" />

        <div className="absolute left-[5%] bottom-[15%] h-56 w-56 rounded-full border border-[#d9a52b]/5" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className={`mb-12 flex flex-col justify-between gap-8 transition-all duration-1000 md:mb-16 lg:flex-row lg:items-end ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="max-w-4xl">

            {/* Label */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a52b]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#11603b]">
                Property Raabta Insights
              </span>
            </div>

            {/* Heading */}

            <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[#071c12] sm:text-5xl md:text-6xl lg:text-7xl">
              Real Estate
              <br />
              <span className="text-[#17623d]">
                insights that matter.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55 md:text-base">
              Stay informed with property market insights, investment
              guides, construction updates and practical advice from
              Property Raabta.
            </p>
          </div>

          {/* View all */}

          <Link
            href="/blogs"
            className="group flex w-fit items-center gap-4 rounded-full border border-[#0a6038]/15 bg-white px-5 py-3.5 text-sm font-semibold text-[#0a6038] shadow-sm transition-all duration-300 hover:border-[#0a6038] hover:bg-[#0a6038] hover:text-white"
          >
            View All Articles

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* =====================================================
            BLOG GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {blogs.map((blog, index) => {

            /*
             * EVEN ROWS:
             * left -> right
             *
             * ODD ROWS:
             * right -> left
             */

            const row = Math.floor(index / 3);

            const animationClass =
              row % 2 === 0
                ? isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-24 opacity-0"
                : isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-24 opacity-0";

            return (
              <article
                key={blog.id}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-black/[0.07]
                  bg-white
                  shadow-[0_12px_45px_rgba(10,60,35,0.06)]
                  transition-all
                  duration-[1000ms]
                  ease-[cubic-bezier(.22,1,.36,1)]
                  hover:-translate-y-2
                  hover:shadow-[0_25px_60px_rgba(10,60,35,0.13)]
                  ${animationClass}
                `}
                style={{
                  transitionDelay: `${250 + index * 120}ms`,
                }}
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <Link
                  href={`/blogs/${blog.id}`}
                  className="relative block h-[235px] overflow-hidden"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="
                      object-cover
                      transition-transform
                      duration-[1000ms]
                      ease-[cubic-bezier(.22,1,.36,1)]
                      group-hover:scale-[1.08]
                    "
                  />

                  {/* Image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Category */}

                  <div className="absolute left-5 top-5 rounded-full bg-[#d9a52b] px-3.5 py-2 shadow-lg">
                    <span className="text-[9px] font-bold tracking-[0.08em] text-[#101810]">
                      {blog.category}
                    </span>
                  </div>

                  {/* Number */}

                  <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/15 backdrop-blur-md">
                    <span className="text-[10px] font-medium text-white">
                      {blog.id}
                    </span>
                  </div>

                  {/* Image bottom */}

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/75">
                      Property Raabta
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.12em] text-white/60">
                      {blog.readTime}
                    </span>
                  </div>
                </Link>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="p-6 md:p-7">

                  {/* Date */}

                  <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/35">

                    <span>{blog.date}</span>

                    <span className="h-1 w-1 rounded-full bg-[#d9a52b]" />

                    <span>{blog.readTime}</span>

                  </div>

                  {/* Title */}

                  <Link href={`/blogs/${blog.id}`}>
                    <h3
                      className="
                        mt-4
                        text-xl
                        font-semibold
                        leading-[1.25]
                        tracking-[-0.025em]
                        text-[#091b12]
                        transition-colors
                        duration-300
                        group-hover:text-[#11603b]
                        md:text-[21px]
                      "
                    >
                      {blog.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}

                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-black/50">
                    {blog.excerpt}
                  </p>

                  {/* Bottom */}

                  <div className="mt-6 flex items-center justify-between border-t border-black/[0.08] pt-5">

                    <Link
                      href={`/blogs/${blog.id}`}
                      className="group/read flex items-center gap-3 text-xs font-bold uppercase tracking-[0.13em] text-[#11603b]"
                    >
                      Read Article

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#edf5ef] transition-all duration-300 group-hover/read:bg-[#11603b] group-hover/read:text-white">
                        →
                      </span>
                    </Link>

                    {/* Small gold line */}

                    <span className="h-[2px] w-8 bg-[#d9a52b] transition-all duration-500 group-hover:w-14" />

                  </div>
                </div>

              </article>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div
          className={`
            mt-10
            overflow-hidden
            rounded-[26px]
            bg-[#07502d]
            transition-all
            duration-1000
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
          style={{
            transitionDelay: "1500ms",
          }}
        >
          <div className="relative flex flex-col gap-7 px-7 py-8 md:flex-row md:items-center md:justify-between md:px-10 md:py-9">

            {/* Background decoration */}

            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-10">
              <div className="absolute right-[-100px] top-[-150px] h-[350px] w-[350px] rounded-full border-[50px] border-white" />
            </div>

            <div className="relative">

              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-[#d9a52b]">
                Property Raabta
              </p>

              <h3 className="text-xl font-semibold text-white md:text-2xl">
                Want more property insights?
              </h3>

              <p className="mt-2 max-w-xl text-sm text-white/55">
                Explore our latest articles and stay ahead of the
                property market.
              </p>

            </div>

            <Link
              href="/blogs"
              className="
                group
                relative
                flex
                shrink-0
                items-center
                justify-center
                gap-4
                rounded-full
                bg-[#d9a52b]
                px-7
                py-3.5
                text-sm
                font-semibold
                text-[#07502d]
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white
              "
            >
              Explore Blog

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}