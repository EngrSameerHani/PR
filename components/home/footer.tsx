"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="relative overflow-hidden bg-[#063d26] text-white">

      {/* =====================================================
          TOP DECORATIVE AREA
      ====================================================== */}

      <div className="relative h-[170px] overflow-hidden bg-[#f3faf1] sm:h-[200px] lg:h-[230px]">

        {/* Soft green background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8fcf6] via-[#eef8ed] to-[#dcefdc]" />

        {/* Margalla-style mountain silhouettes */}
        <div className="absolute bottom-0 left-0 w-full">

          <svg
            viewBox="0 0 1600 300"
            preserveAspectRatio="none"
            className="h-[190px] w-full sm:h-[220px] lg:h-[250px]"
          >
            <path
              d="
                M0 220
                L120 160
                L210 185
                L330 105
                L450 175
                L570 90
                L700 165
                L830 110
                L940 175
                L1060 90
                L1170 160
                L1280 75
                L1400 155
                L1510 95
                L1600 145
                L1600 300
                L0 300
                Z
              "
              fill="#cce6cc"
              opacity="0.55"
            />

            <path
              d="
                M0 245
                L140 190
                L260 215
                L390 135
                L520 200
                L650 130
                L790 205
                L920 145
                L1050 205
                L1190 125
                L1320 205
                L1450 145
                L1600 195
                L1600 300
                L0 300
                Z
              "
              fill="#b7dcb9"
              opacity="0.45"
            />
          </svg>

        </div>


        {/* Islamabad landmark-inspired silhouette */}
        <div className="pointer-events-none absolute bottom-0 left-[4%] hidden opacity-[0.12] sm:block">

          <svg
            width="230"
            height="180"
            viewBox="0 0 230 180"
            fill="none"
          >
            <path
              d="M30 160V105L115 35L200 105V160"
              stroke="#075a38"
              strokeWidth="5"
            />

            <path
              d="M60 160V105L115 60L170 105V160"
              stroke="#075a38"
              strokeWidth="4"
            />

            <path
              d="M115 35V8"
              stroke="#075a38"
              strokeWidth="4"
            />

            <path
              d="M95 160V125H135V160"
              stroke="#075a38"
              strokeWidth="4"
            />

          </svg>

        </div>


        {/* Right skyline */}
        <div className="pointer-events-none absolute bottom-0 right-0 hidden opacity-[0.11] sm:block">

          <div className="flex items-end gap-2">

            <div className="h-24 w-8 rounded-t bg-[#075a38]" />
            <div className="h-36 w-10 rounded-t bg-[#075a38]" />
            <div className="h-20 w-7 rounded-t bg-[#075a38]" />
            <div className="h-44 w-11 rounded-t bg-[#075a38]" />
            <div className="h-32 w-9 rounded-t bg-[#075a38]" />
            <div className="h-52 w-12 rounded-t bg-[#075a38]" />
            <div className="h-28 w-8 rounded-t bg-[#075a38]" />
            <div className="h-40 w-10 rounded-t bg-[#075a38]" />

          </div>

        </div>

      </div>


      {/* =====================================================
          TRUST STRIP
      ====================================================== */}

      <div className="relative border-t-[4px] border-[#d8aa37] bg-[#f7fcf5]">

        <div className="mx-auto grid max-w-[1500px] grid-cols-1 divide-y divide-[#d5e8d7] px-5 py-6 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:px-10">

          <TrustItem
            icon="⌂"
            title="Trusted Experts"
            description="Your Property Partner"
          />

          <TrustItem
            icon="↔"
            title="Transparent Process"
            description="Clear & Honest Guidance"
          />

          <TrustItem
            icon="⌖"
            title="Local Expertise"
            description="Rawalpindi & Islamabad"
          />

          <TrustItem
            icon="▣"
            title="Best Opportunities"
            description="Residential & Commercial"
          />

        </div>

      </div>


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative overflow-hidden">

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#0b7547]/20 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#d8aa37]/10 blur-[120px]" />


        {/* Background architectural lines */}
        <div className="pointer-events-none absolute right-0 top-0 opacity-[0.045]">

          <svg
            width="500"
            height="650"
            viewBox="0 0 500 650"
            fill="none"
          >
            <path
              d="M250 0V650M170 80V650M330 120V650M90 190V650M410 200V650"
              stroke="white"
              strokeWidth="2"
            />

            <path
              d="M0 500H500M0 400H500M0 300H500M0 200H500"
              stroke="white"
              strokeWidth="2"
            />

          </svg>

        </div>


        <div className="relative mx-auto max-w-[1500px] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

          <div className="grid gap-14 lg:grid-cols-[1.35fr_0.8fr_1fr_1.1fr] lg:gap-10">


            {/* =================================================
                BRAND
            ================================================== */}

            <div>

              <Link
                href="/"
                className="group inline-flex items-center gap-4"
              >

                {/* Logo */}
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">

                  <svg
                    viewBox="0 0 80 80"
                    className="h-full w-full"
                    fill="none"
                  >
                    <path
                      d="M8 42L40 13L72 42"
                      stroke="#79bd6d"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M18 37V67H62V37"
                      stroke="#79bd6d"
                      strokeWidth="6"
                    />

                    <path
                      d="M31 67V48H49V67"
                      stroke="#d8aa37"
                      strokeWidth="5"
                    />

                    <path
                      d="M4 65C21 72 39 73 76 61"
                      stroke="#d8aa37"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />

                  </svg>

                </div>


                <div>

                  <h2 className="font-serif text-3xl font-semibold leading-none tracking-tight text-white sm:text-4xl">
                    Property
                    <br />
                    <span className="text-[#79bd6d]">
                      Raabta
                    </span>
                  </h2>

                </div>

              </Link>


              {/* Tagline */}
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d8aa37]">
                Real Estate for Rawalpindi & Islamabad
              </p>


              {/* Description */}
              <p className="mt-6 max-w-[410px] text-sm leading-7 text-white/65 sm:text-base">
                Property Raabta is your trusted partner in real estate,
                offering expert guidance, market insights and seamless
                property solutions for buyers, sellers and investors across
                Rawalpindi & Islamabad.
              </p>


              {/* Gold divider */}
              <div className="mt-7 h-[2px] w-16 bg-[#d8aa37]" />


              {/* Social */}
              <div className="mt-7 flex items-center gap-3">

                <SocialIcon
                  label="Facebook"
                  icon="f"
                  href="#"
                />

                <SocialIcon
                  label="X"
                  icon="𝕏"
                  href="#"
                />

                <SocialIcon
                  label="LinkedIn"
                  icon="in"
                  href="#"
                />

                <SocialIcon
                  label="Instagram"
                  icon="◎"
                  href="#"
                />

                <SocialIcon
                  label="YouTube"
                  icon="▶"
                  href="#"
                />

              </div>

            </div>


            {/* =================================================
                QUICK LINKS
            ================================================== */}

            <FooterColumn title="Quick Links">

              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/services" label="Our Services" />
              <FooterLink href="/properties" label="Properties" />
              <FooterLink href="/market-insights" label="Market Insights" />
              <FooterLink href="/contact" label="Contact Us" />

            </FooterColumn>


            {/* =================================================
                SERVICES
            ================================================== */}

            <FooterColumn title="Our Services">

              <FooterLink
                href="/services/buy-property"
                label="Property Buying"
              />

              <FooterLink
                href="/services/sell-property"
                label="Property Selling"
              />

              <FooterLink
                href="/services/rent-property"
                label="Property Renting"
              />

              <FooterLink
                href="/services/investment"
                label="Property Investment"
              />

              <FooterLink
                href="/services/commercial"
                label="Commercial Properties"
              />

              <FooterLink
                href="/services/consultation"
                label="Property Consultation"
              />

            </FooterColumn>


            {/* =================================================
                CONTACT + NEWSLETTER
            ================================================== */}

            <div>

              <FooterHeading>
                Contact Us
              </FooterHeading>


              <div className="mt-7 space-y-5">

                <ContactItem
                  icon="⌖"
                  text="Rawalpindi, Pakistan"
                />

                <ContactItem
                  icon="☎"
                  text="+92 300 1234567"
                  href="tel:+923001234567"
                />

                <ContactItem
                  icon="✉"
                  text="info@propertyraabta.com"
                  href="mailto:info@propertyraabta.com"
                />

              </div>


              {/* Newsletter */}
              <div className="mt-10">

                <FooterHeading>
                  Stay Connected
                </FooterHeading>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Get the latest property listings and market insights.
                </p>


                <form
                  onSubmit={handleSubscribe}
                  className="mt-5 flex overflow-hidden rounded-xl border border-[#6c8c75] bg-white/[0.04]"
                >

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    required
                    className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/40"
                  />

                  <button
                    type="submit"
                    className="shrink-0 bg-[#d8aa37] px-5 py-3 text-sm font-bold text-[#063d26] transition-colors hover:bg-[#e6bc55]"
                  >
                    {subscribed ? "✓" : "Subscribe"}
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="border-t border-white/10 bg-[#04351f]">

        <div className="mx-auto flex max-w-[1500px] flex-col gap-5 px-6 py-6 text-center sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:text-left">

          <p className="text-xs text-white/50 sm:text-sm">
            © {new Date().getFullYear()} Property Raabta. All Rights Reserved.
          </p>


          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white/45 sm:text-xs">

            <span className="flex items-center gap-2">
              <span className="text-[#d8aa37]">⌖</span>
              Rawalpindi
            </span>

            <span className="hidden h-3 w-px bg-white/20 sm:block" />

            <span className="flex items-center gap-2">
              <span className="text-[#d8aa37]">⌖</span>
              Islamabad
            </span>

            <span className="hidden h-3 w-px bg-white/20 sm:block" />

            <span>Residential</span>

            <span className="hidden h-3 w-px bg-white/20 sm:block" />

            <span>Commercial</span>

            <span className="hidden h-3 w-px bg-white/20 sm:block" />

            <span>Investment</span>

          </div>

        </div>

      </div>

    </footer>
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
    <div className="flex items-center gap-4 px-4 py-4 lg:px-7">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e0f2df] text-xl font-bold text-[#075a38]">
        {icon}
      </div>

      <div>

        <p className="text-sm font-bold text-[#0b3e27] sm:text-base">
          {title}
        </p>

        <p className="mt-1 text-xs text-[#66806f] sm:text-sm">
          {description}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>

      <FooterHeading>
        {title}
      </FooterHeading>

      <nav className="mt-6 space-y-4">
        {children}
      </nav>

    </div>
  );
}


/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>

      <h3 className="font-serif text-2xl font-semibold text-white">
        {children}
      </h3>

      <div className="mt-3 h-[2px] w-11 bg-[#d8aa37]" />

    </div>
  );
}


/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 text-sm text-white/65 transition-colors duration-300 hover:text-white sm:text-base"
    >

      <span className="text-[#d8aa37] transition-transform duration-300 group-hover:translate-x-1">
        ›
      </span>

      <span>{label}</span>

    </Link>
  );
}


/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  icon,
  text,
  href,
}: {
  icon: string;
  text: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d8aa37]/15 text-[#d8aa37]">
        {icon}
      </span>

      <span className="text-sm leading-6 text-white/70 transition-colors group-hover:text-white sm:text-base">
        {text}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group flex items-center gap-4"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group flex items-center gap-4">
      {content}
    </div>
  );
}


/* =========================================================
   SOCIAL ICON
========================================================= */

function SocialIcon({
  label,
  icon,
  href,
}: {
  label: string;
  icon: string;
  href: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-sm font-bold text-white/75 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8aa37] hover:bg-[#d8aa37] hover:text-[#063d26]"
    >
      {icon}
    </a>
  );
}