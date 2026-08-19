import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Are | Property Raabta",

  description:
    "Discover Property Raabta, a trusted real estate and construction company providing property buying, selling, renting, investment, marketing and development solutions in Pakistan.",

  keywords: [
    "Property Raabta",
    "Property Raabta Islamabad",
    "Property Raabta Pakistan",
    "real estate Pakistan",
    "real estate Islamabad",
    "real estate Rawalpindi",
    "property consultants Islamabad",
    "property consultants Rawalpindi",
    "property investment Pakistan",
    "real estate investment Islamabad",
    "property buying Pakistan",
    "property selling Pakistan",
    "property renting Islamabad",
    "construction company Islamabad",
    "real estate marketing Pakistan",
  ],

  alternates: {
    canonical: "/who-we-are",
  },

  openGraph: {
    title: "Who We Are | Property Raabta",
    description:
      "Learn about Property Raabta and our approach to real estate, property investment, construction and professional property services.",
    type: "website",
    siteName: "Property Raabta",
    url: "/who-we-are",
  },

  twitter: {
    card: "summary_large_image",
    title: "Who We Are | Property Raabta",
    description:
      "Discover Property Raabta's approach to real estate, investment and construction.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",

  name: "Property Raabta",

  description:
    "Property Raabta provides professional real estate and property services including buying, selling, renting, investment guidance, real estate marketing, construction management and architecture and design.",

  url: "https://propertyraabta.com",

  areaServed: [
    {
      "@type": "City",
      name: "Islamabad",
    },
    {
      "@type": "City",
      name: "Rawalpindi",
    },
    {
      "@type": "Country",
      name: "Pakistan",
    },
  ],

  serviceType: [
    "Property Buying",
    "Property Selling",
    "Property Renting",
    "Real Estate Marketing",
    "Property Investment",
    "Construction Management",
    "Architecture and Design",
  ],
};

const services = [
  {
    number: "01",
    title: "Property Buying",
    description:
      "Find residential, commercial and investment properties that match your requirements, budget and long-term goals.",
    icon: "⌂",
  },
  {
    number: "02",
    title: "Property Selling",
    description:
      "Professional property marketing and strategic guidance designed to help owners present and sell their properties effectively.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Property Renting",
    description:
      "Explore suitable rental opportunities while receiving practical guidance throughout the property search.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Real Estate Marketing",
    description:
      "Modern property marketing strategies combining digital visibility, presentation and targeted promotion.",
    icon: "▥",
  },
  {
    number: "05",
    title: "Construction Management",
    description:
      "Professional project coordination focused on planning, quality, execution and efficient construction management.",
    icon: "⌂",
  },
  {
    number: "06",
    title: "Architecture & Design",
    description:
      "Thoughtful architectural and design solutions created around functionality, aesthetics and modern property needs.",
    icon: "◇",
  },
];

const values = [
  {
    number: "01",
    title: "Trust",
    description:
      "We believe strong property relationships are built through honesty, reliability and accountability.",
  },
  {
    number: "02",
    title: "Transparency",
    description:
      "We aim to keep property decisions clear by communicating openly and helping clients understand their options.",
  },
  {
    number: "03",
    title: "Expertise",
    description:
      "Our approach combines market understanding, property knowledge and practical experience.",
  },
  {
    number: "04",
    title: "Long-Term Value",
    description:
      "We focus on creating meaningful relationships and property solutions that provide value beyond a single transaction.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your requirements, objectives, budget and property goals.",
  },
  {
    number: "02",
    title: "Explore",
    description:
      "We help identify relevant properties, opportunities and solutions based on your needs.",
  },
  {
    number: "03",
    title: "Evaluate",
    description:
      "We focus on the important factors that can help you make a more informed property decision.",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "With greater clarity and professional guidance, you can take the next step with confidence.",
  },
];

export default function WhoWeArePage() {
  return (
    <main className="overflow-hidden bg-[#f8f9f6] text-[#071a11]">

      {/* =========================================================
          STRUCTURED DATA
      ========================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-white">

        {/* Decorative background */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -left-40 top-32 h-[500px] w-[500px] rounded-full bg-[#bd8c22]/5 blur-[120px]" />

          <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-[#07502d]/5 blur-[120px]" />

          <div className="absolute bottom-0 left-0 h-[250px] w-[500px] opacity-[0.04]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(#07502d 1px, transparent 1px), linear-gradient(90deg, #07502d 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

        </div>

        <div className="relative mx-auto grid min-h-[720px] max-w-[1400px] items-center gap-12 px-5 pb-24 pt-28 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:pt-32">

          {/* LEFT CONTENT */}

          <div className="animate-[fadeUp_0.8s_ease-out]">

            <div className="mb-7 flex items-center gap-3">

              <span className="h-px w-10 bg-[#bd8c22]" />

              <span className="rounded-full border border-[#bd8c22]/50 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#a8750c]">
                Who We Are
              </span>

            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">

              Building Trust.

              <br />

              Creating{" "}

              <span className="text-[#bd8c22]">
                Value.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-black/55 md:text-lg">
              Property Raabta is a real estate and construction company
              helping individuals, investors and businesses navigate
              property opportunities with greater confidence.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-black/45">
              From buying and selling to renting, investment,
              construction and property marketing, we aim to make
              every step of your property journey simpler and clearer.
            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                href="/contact"
                className="group flex items-center gap-4 rounded-full bg-[#07502d] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0a6840] hover:shadow-xl"
              >
                Talk to Our Team

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d9a52b] text-[#07502d] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-[#07502d]/20 bg-white px-7 py-4 text-sm font-semibold text-[#07502d] transition-all duration-300 hover:-translate-y-1 hover:border-[#07502d] hover:bg-[#07502d] hover:text-white"
              >
                Explore Projects
              </Link>

            </div>

          </div>

          {/* IMAGE */}

          <div className="relative h-[460px] overflow-hidden rounded-[34px] shadow-2xl sm:h-[540px] lg:h-[610px]">

            <Image
              src="/gulber.png"
              alt="Property Raabta real estate property development"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition-transform duration-[1500ms] hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061d12]/85 via-[#061d12]/10 to-transparent" />

            <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/20 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              Real Estate • Construction
            </div>

            <div className="absolute bottom-8 left-8 right-8 text-white">

              <div className="mb-4 h-px w-12 bg-[#d9a52b]" />

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                Property Raabta
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Connecting People
                <br />
                to Property.
              </h2>

            </div>

          </div>

        </div>

        {/* STATS */}

        <div className="relative mx-auto -mb-14 w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">

          <div className="grid overflow-hidden rounded-[26px] bg-white shadow-[0_20px_70px_rgba(0,40,20,0.12)] sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["23+", "Years of Experience"],
              ["36+", "Projects Delivered"],
              ["100+", "Clients & Partners"],
              ["02", "Major Cities Served"],
            ].map(([number, label], index) => (

              <div
                key={label}
                className={`group p-7 transition-all duration-300 hover:bg-[#07502d] ${
                  index !== 0
                    ? "border-t border-black/[0.07] sm:border-l sm:border-t-0"
                    : ""
                }`}
              >

                <div className="text-4xl font-semibold tracking-[-0.05em] text-[#07502d] transition-colors duration-300 group-hover:text-[#d9a52b] md:text-5xl">
                  {number}
                </div>

                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40 transition-colors duration-300 group-hover:text-white/50">
                  {label}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}

      <section className="relative bg-[#07502d] py-32 text-white">

        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">

          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

        </div>

        <div className="relative mx-auto grid max-w-[1250px] gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">

          <div>

            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-10 bg-[#d9a52b]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9a52b]">
                Our Story
              </span>

            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">

              More than
              <br />
              property.
              <br />

              <span className="text-[#d9a52b]">
                A relationship.
              </span>

            </h2>

          </div>

          <div>

            <p className="text-xl leading-9 text-white/80">
              Property decisions are more than transactions.
              They can influence your finances, lifestyle and
              future.
            </p>

            <p className="mt-7 text-sm leading-8 text-white/50">
              At Property Raabta, we believe people deserve a
              professional property experience built around trust,
              transparency and practical guidance.
            </p>

            <p className="mt-5 text-sm leading-8 text-white/50">
              Our goal is to connect people with the right property
              opportunities while providing services that support
              them throughout their journey.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">

                <span className="text-3xl text-[#d9a52b]">
                  01
                </span>

                <h3 className="mt-4 text-lg font-semibold">
                  Client First
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Understanding your requirements comes before
                  recommending a solution.
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">

                <span className="text-3xl text-[#d9a52b]">
                  02
                </span>

                <h3 className="mt-4 text-lg font-semibold">
                  Clear Guidance
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  We focus on making property decisions easier to
                  understand.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          VISION / MISSION
      ========================================================= */}

      <section className="bg-white py-28">

        <div className="mx-auto grid max-w-[1250px] gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">

          {/* Vision */}

          <article className="group relative overflow-hidden rounded-[30px] bg-[#f2f6f1] p-8 md:p-12">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-[#07502d]/5 transition-transform duration-700 group-hover:scale-110" />

            <div className="relative">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#07502d] text-2xl text-[#d9a52b]">
                ◎
              </div>

              <div className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#07502d]/60">
                Our Vision
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                A trusted name in real estate.
              </h2>

              <p className="mt-5 text-sm leading-8 text-black/50">
                To become a trusted real estate partner by delivering
                transparent, professional and value-driven property
                solutions while building lasting relationships with
                clients and communities.
              </p>

            </div>

          </article>

          {/* Mission */}

          <article className="group relative overflow-hidden rounded-[30px] bg-[#07502d] p-8 text-white md:p-12">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-[#d9a52b]/10 transition-transform duration-700 group-hover:scale-110" />

            <div className="relative">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d9a52b] text-2xl text-[#07502d]">
                ◇
              </div>

              <div className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9a52b]">
                Our Mission
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Making property decisions easier.
              </h2>

              <p className="mt-5 text-sm leading-8 text-white/50">
                To provide reliable property services through
                integrity, market knowledge, modern marketing and
                professional execution — helping clients make
                confident decisions at every stage.
              </p>

            </div>

          </article>

        </div>

      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}

      <section className="bg-[#f5f7f3] py-28">

        <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">

          <div className="mb-14 max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#d9a52b]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#07502d]">
                Our Values
              </span>

            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-6xl">

              Principles behind

              <span className="text-[#07502d]">
                {" "}every decision.
              </span>

            </h2>

          </div>

          <div className="grid overflow-hidden rounded-[28px] bg-black/10 md:grid-cols-2">

            {values.map((value) => (

              <article
                key={value.number}
                className="group bg-white p-8 transition-all duration-500 hover:bg-[#07502d] md:p-10"
              >

                <div className="flex items-start justify-between">

                  <span className="text-4xl font-light text-[#d9a52b]">
                    {value.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#07502d] transition-all duration-300 group-hover:border-[#d9a52b] group-hover:bg-[#d9a52b]">
                    →
                  </span>

                </div>

                <h3 className="mt-12 text-2xl font-semibold text-[#071a11] transition-colors duration-500 group-hover:text-white">
                  {value.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-black/50 transition-colors duration-500 group-hover:text-white/50">
                  {value.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="bg-white py-28">

        <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-[#d9a52b]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#07502d]">
                  What We Do
                </span>

              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-6xl">

                Complete property
                <br />

                <span className="text-[#07502d]">
                  solutions.
                </span>

              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-black/45">
              From property transactions to construction and
              marketing, our services are designed to support
              different stages of your property journey.
            </p>

          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <article
                key={service.number}
                className="group relative overflow-hidden rounded-[24px] border border-black/[0.07] bg-[#f7f9f6] p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-[#07502d] hover:shadow-[0_25px_60px_rgba(0,60,35,0.15)]"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#07502d] text-lg text-[#d9a52b] transition-all duration-500 group-hover:bg-[#d9a52b] group-hover:text-[#07502d]">
                    {service.icon}
                  </div>

                  <span className="text-3xl font-light text-black/10 transition-colors duration-500 group-hover:text-white/20">
                    {service.number}
                  </span>

                </div>

                <h3 className="mt-12 text-xl font-semibold text-[#071a11] transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/45 transition-colors duration-500 group-hover:text-white/50">
                  {service.description}
                </p>

                <div className="mt-7 h-px w-8 bg-[#d9a52b] transition-all duration-500 group-hover:w-16" />

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          OUR APPROACH
      ========================================================= */}

      <section className="bg-[#071a11] py-28 text-white">

        <div className="mx-auto grid max-w-[1250px] gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#d9a52b]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9a52b]">
                Our Approach
              </span>

            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">

              A simpler way

              <br />

              to navigate

              <br />

              <span className="text-[#d9a52b]">
                property.
              </span>

            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-white/45">
              Property decisions can be complex. Our process is
              designed to make every step easier to understand.
            </p>

          </div>

          <div>

            {process.map((step) => (

              <div
                key={step.number}
                className="group flex gap-6 border-b border-white/10 py-8"
              >

                <span className="text-sm font-semibold text-[#d9a52b]">
                  {step.number}
                </span>

                <div>

                  <h3 className="text-xl font-semibold transition-colors group-hover:text-[#d9a52b]">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-lg text-sm leading-7 text-white/40">
                    {step.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-white py-24 md:py-32">

        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">

          <div className="relative overflow-hidden rounded-[34px] bg-[#07502d] px-7 py-14 text-center text-white md:px-16 md:py-20">

            <div className="pointer-events-none absolute -right-20 -top-40 h-[450px] w-[450px] rounded-full border-[50px] border-white/[0.035]" />

            <div className="pointer-events-none absolute -bottom-48 -left-24 h-[400px] w-[400px] rounded-full border-[40px] border-[#d9a52b]/10" />

            <div className="relative">

              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d9a52b]">
                Let's Connect
              </div>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">

                Ready to make your

                <span className="text-[#d9a52b]">
                  {" "}next property move?
                </span>

              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
                Whether you're buying, selling, renting, investing
                or planning a development, Property Raabta is ready
                to help you take the next step.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">

                <Link
                  href="/contact"
                  className="group flex items-center gap-4 rounded-full bg-[#d9a52b] px-7 py-4 text-sm font-semibold text-[#07502d] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  Get in Touch

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/projects"
                  className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#07502d]"
                >
                  View Projects
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}