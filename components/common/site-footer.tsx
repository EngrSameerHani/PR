import Link from "next/link";
import * as React from "react";

import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/projects" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "Buy Property", href: "/services" },
  { name: "Sell Property", href: "/services" },
  { name: "Property Investment", href: "/services" },
  { name: "Real Estate Consultancy", href: "/services" },
  { name: "Property Management", href: "/services" },
];

export function SiteFooter({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn(
        "border-t border-[#d8aa37]/20 bg-[#032d1d] text-white",
        className
      )}
    >
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:pr-8">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#d8aa37]/60 text-2xl text-[#d8aa37]">
                ⌂
              </div>

              <div>
                <div className="font-serif text-xl font-bold leading-none text-white">
                  PROPERTY
                </div>
                <div className="mt-1 font-serif text-xl font-bold leading-none text-[#d8aa37]">
                  RAABTA
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              Your trusted real estate partner for buying, selling, and
              investing in properties across Rawalpindi and Islamabad.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              {SocialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.username}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8aa37] hover:bg-[#d8aa37] hover:text-[#032d1d]"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-[#d8aa37]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors duration-200 hover:text-[#d8aa37]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-[#d8aa37]">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/65 transition-colors duration-200 hover:text-[#d8aa37]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-[#d8aa37]">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm text-white/65">

              {/* Address */}
              <div className="flex gap-3">
                <span className="mt-0.5 text-lg text-[#d8aa37]">⌖</span>

                <p className="leading-6">
                  Office # 01, First Floor,
                  <br />
                  Main Double Road,
                  <br />
                  Rawalpindi, Pakistan
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <span className="text-[#d8aa37]">☎</span>

                <a
                  href="tel:+923001234567"
                  className="transition-colors hover:text-[#d8aa37]"
                >
                  +92 300 1234567
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <span className="text-[#d8aa37]">✉</span>

                <a
                  href="mailto:info@propertyraabta.com"
                  className="transition-colors hover:text-[#d8aa37]"
                >
                  info@propertyraabta.com
                </a>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <span className="text-[#d8aa37]">◷</span>

                <p>
                  Mon - Sat
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col gap-4 px-6 py-6 text-xs text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">

          <p>
            © {new Date().getFullYear()} Property Raabta. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#d8aa37]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#d8aa37]"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/sitemap"
              className="transition-colors hover:text-[#d8aa37]"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}