"use client";

import { useEffect, useState } from "react";

type Review = {
  name: string;
  role: string;
  location: string;
  review: string;
};

const reviews: Review[] = [
  {
    name: "Ahmed Khan",
    role: "Property Investor",
    location: "Islamabad",
    review:
      "Property Raabta made the entire buying process smooth and hassle-free. Their guidance and market knowledge helped me make the right investment decision.",
  },
  {
    name: "Usman Ali",
    role: "Home Buyer",
    location: "Rawalpindi",
    review:
      "Professional, transparent and trustworthy. The Property Raabta team understood our requirements perfectly and guided us at every step. Highly recommended!",
  },
  {
    name: "Hassan Raza",
    role: "Property Investor",
    location: "Islamabad",
    review:
      "From property selection to documentation, Property Raabta handled everything professionally. Their team was responsive, honest and always available.",
  },
  {
    name: "Bilal Ahmed",
    role: "Home Buyer",
    location: "Bahria Town",
    review:
      "I was looking for a reliable property consultant and Property Raabta exceeded my expectations. The whole experience was simple and transparent.",
  },
  {
    name: "Hamza Malik",
    role: "Property Investor",
    location: "Gulberg Islamabad",
    review:
      "Their knowledge of Islamabad's property market is impressive. They helped me compare different opportunities before making my final investment.",
  },
  {
    name: "Saad Iqbal",
    role: "Commercial Investor",
    location: "Rawalpindi",
    review:
      "Excellent service from start to finish. Property Raabta helped me find a commercial opportunity that matched my budget and investment goals.",
  },
  {
    name: "Fahad Shah",
    role: "Home Buyer",
    location: "Faisal Town",
    review:
      "The team was extremely helpful and patient. They explained every detail clearly and made buying property much easier for us.",
  },
  {
    name: "Adeel Tariq",
    role: "Property Investor",
    location: "DHA Islamabad",
    review:
      "Great local expertise and excellent communication. I always felt that my requirements were being taken seriously.",
  },
  {
    name: "Zain Hassan",
    role: "Home Buyer",
    location: "Faisal Hills",
    review:
      "Property Raabta helped us find exactly what we were looking for. Their team was professional, friendly and available whenever we needed them.",
  },
  {
    name: "Muneeb Ahmed",
    role: "Property Investor",
    location: "Islamabad",
    review:
      "A trustworthy team with a strong understanding of the local market. I would definitely recommend Property Raabta to other investors.",
  },
];

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [paused, setPaused] = useState(false);

  /*
   * Automatic slider
   */
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [paused]);

  const nextReview = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  const previousReview = () => {
    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  /*
   * Calculate card position
   */
  const getPosition = (index: number) => {
    let position = index - activeIndex;

    if (position > reviews.length / 2) {
      position -= reviews.length;
    }

    if (position < -reviews.length / 2) {
      position += reviews.length;
    }

    return position;
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#f3faf1] py-20 md:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Green corner */}

        <div className="absolute -left-24 -top-32 h-72 w-[520px] rounded-br-[260px] bg-[#075a38]" />

        {/* Gold curved line */}

        <div className="absolute -left-12 -top-24 h-64 w-[500px] rounded-br-[260px] border-b-[5px] border-[#d9a52b]" />

        {/* Soft center glow */}

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#cceecb]/50 blur-[140px]" />

        {/* Right decorative buildings */}

        <div className="absolute right-0 top-0 hidden h-[390px] w-[350px] opacity-[0.055] md:block">
          <div className="absolute bottom-0 right-5 h-[280px] w-14 rounded-t bg-[#075a38]" />
          <div className="absolute bottom-0 right-24 h-[350px] w-16 rounded-t bg-[#075a38]" />
          <div className="absolute bottom-0 right-48 h-[230px] w-14 rounded-t bg-[#075a38]" />
          <div className="absolute bottom-0 right-72 h-[300px] w-11 rounded-t bg-[#075a38]" />
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mx-auto max-w-5xl text-center">

          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-px w-16 bg-[#075a38]/50" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#075a38]">
              Property Raabta
            </span>

            <span className="h-px w-16 bg-[#075a38]/50" />
          </div>

          <div className="mb-3 text-4xl text-[#075a38]">
            ⌂
          </div>

          <h2 className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#0b3927] sm:text-6xl md:text-7xl">
            What Our Clients
            <br />

            <span className="italic text-[#08703f]">
              Say
            </span>
          </h2>

          <div className="mx-auto mt-7 h-1.5 w-20 rounded-full bg-[#278c45]" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#435d50] md:text-lg">
            Real experiences from people who trusted Property Raabta
            for their real estate journey across Rawalpindi and Islamabad.
          </p>
        </div>

        {/* ===================================================
            SLIDER
        ==================================================== */}

        <div className="relative mx-auto mt-16 max-w-[1450px]">

          {/* Previous */}

          <button
            type="button"
            onClick={previousReview}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 z-40 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#075a38] text-3xl text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#0b7046] lg:flex"
          >
            ‹
          </button>

          {/* Next */}

          <button
            type="button"
            onClick={nextReview}
            aria-label="Next review"
            className="absolute right-0 top-1/2 z-40 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#075a38] text-3xl text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#0b7046] lg:flex"
          >
            ›
          </button>

          {/* Cards */}

          <div className="relative mx-auto h-[470px] w-full overflow-hidden">

            {reviews.map((review, index) => {
              const position = getPosition(index);
              const isActive = position === 0;

              if (Math.abs(position) > 2) {
                return null;
              }

              return (
                <div
                  key={review.name}
                  className="absolute left-1/2 top-1/2 w-[88%] max-w-[430px] transition-all duration-700 ease-out sm:w-[70%] md:w-[480px]"
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      translateX(${position * 430}px)
                      scale(${isActive ? 1 : 0.86})
                    `,
                    opacity:
                      Math.abs(position) === 2
                        ? 0.2
                        : isActive
                        ? 1
                        : 0.65,
                    zIndex: isActive
                      ? 30
                      : 20 - Math.abs(position),
                  }}
                >
                  <ReviewCard
                    review={review}
                    featured={isActive}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            MOBILE BUTTONS
        ==================================================== */}

        <div className="mt-2 flex justify-center gap-4 lg:hidden">
          <button
            type="button"
            onClick={previousReview}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#075a38] text-2xl text-white shadow-lg"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextReview}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#075a38] text-2xl text-white shadow-lg"
          >
            ›
          </button>
        </div>

        {/* ===================================================
            SLIDER DOTS
        ==================================================== */}

        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Review ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "w-8 bg-[#075a38]"
                  : "w-2 bg-[#9bc6a5]"
              }`}
            />
          ))}
        </div>

        {/* ===================================================
            TRUST FEATURES
        ==================================================== */}

        <div className="mx-auto mt-14 grid max-w-[1450px] grid-cols-1 overflow-hidden rounded-[28px] bg-[#e7f5e3] md:grid-cols-2 lg:grid-cols-4">

          <TrustItem
            icon="✓"
            title="Trusted & Reliable"
            description="Your trust drives us"
          />

          <TrustItem
            icon="◇"
            title="Transparent Process"
            description="No hidden information"
          />

          <TrustItem
            icon="⌖"
            title="Local Expertise"
            description="Rawalpindi & Islamabad"
          />

          <TrustItem
            icon="⌂"
            title="Client Focused"
            description="Your goals, our priority"
          />
        </div>

        {/* ===================================================
            CTA
        ==================================================== */}

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="group flex items-center gap-5 rounded-full bg-[#075a38] px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b7046] hover:shadow-2xl"
          >
            Read More Reviews

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d9a52b] text-lg text-[#075a38] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   REVIEW CARD
========================================================= */

function ReviewCard({
  review,
  featured,
}: {
  review: Review;
  featured: boolean;
}) {
  return (
    <div
      className={`relative h-[430px] overflow-hidden rounded-[32px] border p-7 transition-all duration-500 md:p-8 ${
        featured
          ? "border-[#d9a52b] bg-[#075a38] text-white shadow-[0_25px_80px_rgba(0,80,45,0.30)]"
          : "border-[#c9e5ce] bg-white text-[#183a2a] shadow-[0_15px_50px_rgba(20,70,40,0.10)]"
      }`}
    >

      {/* Featured */}

      {featured && (
        <div className="absolute right-0 top-0 rounded-bl-[22px] bg-[#d9a52b] px-5 py-3 text-sm font-bold text-[#123b27]">
          ★ Featured
        </div>
      )}

      {/* Quote */}

      <div
        className={`font-serif text-7xl leading-none ${
          featured
            ? "text-[#79cc8d]"
            : "text-[#9dcea8]"
        }`}
      >
        “
      </div>

      {/* Stars */}

      <div className="mt-1 flex gap-1 text-xl text-[#d9a52b]">
        ★ ★ ★ ★ ★
      </div>

      {/* Review text */}

      <p
        className={`mt-5 text-[15px] leading-7 md:text-base ${
          featured
            ? "text-white/90"
            : "text-[#304a3c]"
        }`}
      >
        {review.review}
      </p>

      {/* Divider */}

      <div
        className={`my-6 h-px ${
          featured
            ? "bg-white/20"
            : "bg-[#d9e8dc]"
        }`}
      />

      {/* User */}

      <div className="flex items-center gap-4">

        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xl font-bold ${
            featured
              ? "bg-[#1d8150] text-[#b8efaa]"
              : "bg-[#e5f3e4] text-[#075a38]"
          }`}
        >
          {review.name.charAt(0)}
        </div>

        <div>
          <h3
            className={`font-semibold ${
              featured
                ? "text-white"
                : "text-[#123b27]"
            }`}
          >
            {review.name}
          </h3>

          <p
            className={`text-sm ${
              featured
                ? "text-white/70"
                : "text-[#527063]"
            }`}
          >
            {review.role}
          </p>

          <p
            className={`mt-1 text-xs ${
              featured
                ? "text-[#a9d8b3]"
                : "text-[#668276]"
            }`}
          >
            📍 {review.location}
          </p>
        </div>
      </div>

      {/* Bottom accent */}

      <div
        className={`absolute bottom-0 left-1/2 h-1 -translate-x-1/2 rounded-full transition-all duration-500 ${
          featured
            ? "w-20 bg-[#9de17f]"
            : "w-12 bg-[#278c45]"
        }`}
      />
    </div>
  );
}

/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex items-center gap-4 border-b border-[#c9e5ce] px-7 py-6 transition-colors duration-300 hover:bg-white/50 md:border-r lg:border-b-0">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl text-[#075a38] shadow-sm transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-[#123b27]">
          {title}
        </h3>

        <p className="mt-1 text-sm text-[#607568]">
          {description}
        </p>
      </div>

    </div>
  );
}