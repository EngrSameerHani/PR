"use client";

import { FormEvent, useState } from "react";

export default function EnquirySection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f3faf1] py-16 sm:py-20 lg:py-28">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 -top-40 h-[500px] w-[700px] rounded-br-[50%] bg-[#075a38]" />

        <div className="absolute -left-32 -top-32 h-[470px] w-[650px] rounded-br-[50%] border-b-[4px] border-[#d9a52b]" />

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8f1d4]/60 blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#bfe6c5]/40 blur-[100px]" />

        <div className="absolute bottom-0 right-0 hidden h-[430px] w-[380px] opacity-[0.06] lg:block">
          <div className="absolute bottom-0 right-0 h-72 w-14 rounded-t bg-[#075a38]" />
          <div className="absolute bottom-0 right-20 h-96 w-16 rounded-t bg-[#075a38]" />
          <div className="absolute bottom-0 right-44 h-64 w-12 rounded-t bg-[#075a38]" />
          <div className="absolute bottom-0 right-64 h-80 w-10 rounded-t bg-[#075a38]" />
        </div>

      </div>

      {/* ================= MAIN ================= */}

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">

        <div className="relative overflow-hidden rounded-[35px] border border-[#d4e7d7] bg-white/90 shadow-[0_30px_100px_rgba(7,90,56,0.14)] backdrop-blur-sm">

          {/* ================= HEADER ================= */}

          <div className="border-b border-[#e2eee4] px-6 py-7 text-center sm:px-10 lg:px-16">

            <div className="flex items-center justify-center gap-4">

              <span className="h-px w-10 bg-[#d9a52b] sm:w-16" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#075a38] sm:text-xs">
                Property Raabta
              </span>

              <span className="h-px w-10 bg-[#d9a52b] sm:w-16" />

            </div>

            <p className="mt-3 text-xs font-medium tracking-[0.22em] text-[#6b7f73]">
              REAL ESTATE FOR RAWALPINDI & ISLAMABAD
            </p>

          </div>

          {/* ================= CONTENT ================= */}

          <div className="grid lg:grid-cols-[1fr_1.05fr]">

            {/* ================= LEFT ================= */}

            <div className="relative flex min-h-[570px] flex-col justify-center overflow-hidden px-7 py-14 sm:px-12 lg:px-16 xl:px-20">

              <div className="pointer-events-none absolute -left-32 bottom-[-150px] h-[400px] w-[400px] rounded-full bg-[#e2f4e2]" />

              {/* Badge */}

              <div className="relative mb-6 flex w-fit items-center gap-3 rounded-full border border-[#c9e5ce] bg-[#edf8ed] px-5 py-2.5">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#075a38] text-sm text-white">
                  ✓
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#075a38]">
                  Expert Property Guidance
                </span>

              </div>

              {/* Heading */}

              <h2 className="relative max-w-[650px] font-serif text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#0b3927] sm:text-5xl lg:text-6xl xl:text-7xl">

                Let&apos;s Find Your

                <br />

                <span className="relative inline-block italic text-[#08703f]">

                  Perfect Property

                  <span className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-[#d9a52b]" />

                </span>

              </h2>

              {/* Description */}

              <p className="relative mt-7 max-w-[600px] text-base leading-7 text-[#52695c] sm:text-lg">

                Connect with our property specialists for personalized advice,
                market insights, and the right real-estate opportunities across{" "}

                <strong className="font-semibold text-[#075a38]">
                  Rawalpindi & Islamabad.
                </strong>

              </p>

              {/* Trust Points */}

              <div className="relative mt-10 grid max-w-[650px] grid-cols-1 gap-5 sm:grid-cols-3">

                <TrustPoint
                  icon="⌂"
                  title="Local Experts"
                  description="Market knowledge"
                />

                <TrustPoint
                  icon="⌕"
                  title="Best Options"
                  description="Curated properties"
                />

                <TrustPoint
                  icon="✓"
                  title="Transparent"
                  description="Clear guidance"
                />

              </div>

              {/* Architecture */}

              <div className="pointer-events-none absolute bottom-0 left-0 flex items-end gap-1 opacity-[0.07]">

                <div className="h-28 w-8 bg-[#075a38]" />
                <div className="h-40 w-10 bg-[#075a38]" />
                <div className="h-24 w-8 bg-[#075a38]" />
                <div className="h-52 w-12 bg-[#075a38]" />
                <div className="h-32 w-9 bg-[#075a38]" />
                <div className="h-44 w-10 bg-[#075a38]" />

              </div>

            </div>

            {/* ================= RIGHT FORM ================= */}

            <div className="relative flex items-center bg-[#075a38] p-5 sm:p-8 lg:p-12">

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d9a52b]/20 blur-[80px]" />

              <div className="relative w-full overflow-hidden rounded-[30px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.18)]">

                {/* Form Header */}

                <div className="relative overflow-hidden bg-[#075a38] px-7 py-8 sm:px-10">

                  <div className="absolute left-0 top-0 h-full w-1.5 bg-[#d9a52b]" />

                  <div className="flex items-start justify-between gap-5">

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9ed7af]">
                        Quick Enquiry
                      </p>

                      <h3 className="mt-2 font-serif text-3xl font-semibold text-white sm:text-4xl">
                        Let&apos;s Talk Property
                      </h3>

                      <p className="mt-2 text-sm text-white/70">
                        We&apos;ll connect you with the right property expert.
                      </p>

                    </div>

                    <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#d9a52b]/40 bg-white/10 text-2xl text-[#d9a52b] sm:flex">
                      ⌂
                    </div>

                  </div>

                </div>

                {/* FORM */}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 px-7 py-8 sm:px-10 sm:py-10"
                >

                  <div className="grid gap-4 sm:grid-cols-2">

                    <InputField
                      label="Your Name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />

                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />

                  </div>

                  <InputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+92 3XX XXXXXXX"
                    required
                  />

                  {/* Inquiry */}

                  <div>

                    <label className="mb-2 block text-xs font-semibold text-[#345347]">
                      What are you looking for?
                    </label>

                    <select
                      name="inquiry"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-2xl border border-[#dce9de] bg-[#f8fbf8] px-5 py-4 text-sm text-[#345347] outline-none transition-all duration-300 focus:border-[#075a38] focus:bg-white focus:ring-4 focus:ring-[#075a38]/10"
                    >

                      <option value="" disabled>
                        Select an option
                      </option>

                      <option value="buy">
                        Buy a Property
                      </option>

                      <option value="sell">
                        Sell a Property
                      </option>

                      <option value="rent">
                        Rent a Property
                      </option>

                      <option value="investment">
                        Property Investment
                      </option>

                      <option value="commercial">
                        Commercial Property
                      </option>

                    </select>

                  </div>

                  {/* Message */}

                  <div>

                    <label className="mb-2 block text-xs font-semibold text-[#345347]">
                      Your Message
                    </label>

                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us what property you are looking for..."
                      className="w-full resize-none rounded-2xl border border-[#dce9de] bg-[#f8fbf8] px-5 py-4 text-sm text-[#345347] outline-none transition-all duration-300 placeholder:text-[#98a89e] focus:border-[#075a38] focus:bg-white focus:ring-4 focus:ring-[#075a38]/10"
                    />

                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-4 rounded-2xl bg-[#075a38] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0a7045] hover:shadow-[0_15px_35px_rgba(7,90,56,0.25)]"
                  >

                    {submitted
                      ? "Enquiry Sent ✓"
                      : "Submit Enquiry"}

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9a52b] text-[#075a38] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </button>

                  {/* Security */}

                  <div className="flex items-center justify-center gap-2 pt-2 text-xs text-[#718278]">

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e9f6e9] text-[#075a38]">
                      ✓
                    </span>

                    <span>
                      Your information is safe and confidential
                    </span>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM TRUST STRIP ================= */}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.18em] text-[#557063]">

          <span>Rawalpindi</span>

          <span className="h-1 w-1 rounded-full bg-[#d9a52b]" />

          <span>Islamabad</span>

          <span className="h-1 w-1 rounded-full bg-[#d9a52b]" />

          <span>Residential</span>

          <span className="h-1 w-1 rounded-full bg-[#d9a52b]" />

          <span>Commercial</span>

          <span className="h-1 w-1 rounded-full bg-[#d9a52b]" />

          <span>Investment</span>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   INPUT FIELD
========================================================= */

function InputField({
  label,
  name,
  type,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>

      <label className="mb-2 block text-xs font-semibold text-[#345347]">
        {label}

        {required && (
          <span className="ml-1 text-[#075a38]">
            *
          </span>
        )}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-[#dce9de] bg-[#f8fbf8] px-5 py-4 text-sm text-[#345347] outline-none transition-all duration-300 placeholder:text-[#98a89e] focus:border-[#075a38] focus:bg-white focus:ring-4 focus:ring-[#075a38]/10"
      />

    </div>
  );
}

/* =========================================================
   TRUST POINT
========================================================= */

function TrustPoint({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex items-center gap-3">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e2f4e2] text-lg text-[#075a38] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#075a38] group-hover:text-white">
        {icon}
      </div>

      <div>

        <p className="text-sm font-bold text-[#123b27]">
          {title}
        </p>

        <p className="mt-0.5 text-xs text-[#708278]">
          {description}
        </p>

      </div>

    </div>
  );
}