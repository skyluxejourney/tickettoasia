"use client";

import { useState, useEffect } from "react";
import SearchEngine from "./SearchEngine";
import Image from "next/image";
import { Phone, Headphones } from "lucide-react";
import { CONTACT } from "../app/constants";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="
        relative
        h-[75vh]
        lg:h-[75vh]
        flex items-center
        overflow-visible
        pt-20 sm:pt-24
        pb-0

        /* Mobile */
        max-lg:h-[560px]

        /* Tablet */
        sm:max-lg:h-[600px]
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobackimage.jpg"
          alt="Ticket to Ocean - Travel Experiences"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Dark overlays - Only for mobile screens */}
        <div className="absolute inset-0 max-lg:bg-black/10" />
        <div className="absolute inset-0 max-lg:bg-gradient-to-t max-lg:from-black/10 max-lg:via-black/40 max-lg:to-black/50" />
        <div className="absolute inset-0 max-lg:bg-black/30" />
      </div>

      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMzYgMzRjMCAxLjEuOSAyMiAyIDJzMi0uOSAyLTItLjktMi0yLTIgLTIgLjkgMiAyei0xMiA0YzAgMS4xLjkgMiAyIDJzMi0uOSAyLTItLjktMi0yLTIgLTIgLjkgMiAyeiIvPjwvZz48L3N2Zz4=')]" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          container
          mx-auto
          px-4
          sm:px-6
          lg:px-8

          /* Mobile + Tablet positioning */
          max-lg:self-start
          max-lg:pt-16

          /* Tablet slightly lower */
          sm:max-lg:pt-20
        "
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">

            {/* Main Heading */}
            <h1
              className={`mb-3 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.1] tracking-tight">
                Find Your{" "}
                <span
                  className="font-bold text-transparent bg-clip-text italic"
                  style={{
                    background:
                      "linear-gradient(to right, #b8956e, #eae0d5, #b8956e)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Perfect Journey
                </span>
              </span>

              <span
                className="block w-24 h-0.5 rounded-full blur-sm mx-auto mt-2"
                style={{
                  background:
                    "linear-gradient(to right, #b8956e80, #eae0d51A)",
                }}
              />
            </h1>

            {/* Subtitle */}
            <p
              className={`text-white/80 text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-0 font-light tracking-wide leading-relaxed transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              Search great deals on flights and more with one easy search.
              <br className="hidden sm:block" />
              Let us craft your perfect escape.
            </p>
          </div>
        </div>
      </div>

      {/* Search Engine Component */}
      <div
        className={`
          absolute
          left-1/2
          -translate-x-1/2
          z-30
          w-full
          max-w-6xl
          px-4 sm:px-6 lg:px-8

          /* Desktop - unchanged */
          lg:bottom-0
          lg:translate-y-1/2

          /* Mobile + Tablet */
          max-lg:bottom-0
          max-lg:translate-y-[45%]

          transition-all
          duration-1000
          ease-out
          delay-300

          ${
            isVisible
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        <div className="shadow-2xl shadow-black/30">
          <SearchEngine />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="
          absolute
          bottom-2
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-1.5
          transition-colors
          cursor-pointer
          z-10
        "
        style={{ color: "#b8956e80" }}
      >
        <div className="w-4 h-6 border border-white/15 rounded-full flex justify-center p-1">
          <div
            className="w-0.5 h-1.5 rounded-full animate-bounce"
            style={{ backgroundColor: "#b8956e" }}
          />
        </div>
      </div>

      {/* Professional Floating Call Widget */}
      <div
        className="
          fixed
          bottom-5
          right-4
          sm:bottom-6
          sm:right-6
          z-50
          flex
          items-center
          gap-3
        "
        style={{ pointerEvents: "none" }}
      >
        {/* Chat Card */}
        <div
          className={`
            hidden sm:block
            w-[260px]
            border border-gray-200/80
            bg-white/95
            backdrop-blur-xl
            p-4
            shadow-[0_20px_60px_rgba(94,80,63,0.18)]
            transition-all duration-400
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            will-change-transform

            ${
              isHovered
                ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                : "opacity-0 translate-x-4 scale-95 pointer-events-none"
            }
          `}
        >
          <div className="flex items-start gap-3">

            {/* Headphone Icon */}
            <div
              className="
                relative
                mt-0.5
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#f5ede4]
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              <span className="absolute inset-0 rounded-full bg-[#b8956e]/20 animate-ping"></span>

              <Headphones
                className="
                  relative
                  z-10
                  h-5
                  w-5
                  text-[#5e503f]
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                "
              />
            </div>

            {/* Support Information */}
            <div className="min-w-0 flex-1">

              <div className="mb-1 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>

                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                  24/7 Call Assistance
                </p>
              </div>

              <p className="text-base font-bold text-gray-900 group-hover:text-[#5e503f] transition-colors duration-300">
                {CONTACT.phone}
              </p>

              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Flight booking, changes and cancellations.
              </p>
            </div>
          </div>
        </div>

        {/* Circle Call Button */}
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          aria-label="Call support"
          className="
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            text-white
            shadow-[0_12px_32px_rgba(94,80,63,0.38)]
            transition-all
            duration-400
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-110
            hover:shadow-[0_20px_45px_rgba(94,80,63,0.48)]
            focus:outline-none
            focus:ring-4
            focus:ring-[#b8956e]/30
            active:scale-95
            will-change-transform
          "
          style={{
            background: "linear-gradient(to right, #5e503f, #b8956e)",
            pointerEvents: "auto",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Wave Rings */}
          <span
            className="
              absolute
              inset-0
              rounded-full
              border-2
              border-[#b8956e]/60
              animate-[ping_2s_ease-in-out_infinite]
            "
          />

          <span
            className="
              absolute
              inset-[-4px]
              rounded-full
              border-2
              border-[#b8956e]/40
              animate-[pulse_2.5s_ease-in-out_infinite_0.5s]
            "
          />

          <span
            className="
              absolute
              inset-[-8px]
              rounded-full
              border-2
              border-[#b8956e]/25
              animate-[pulse_3s_ease-in-out_infinite_1s]
            "
          />

          {/* Inner Glass Circle */}
          <span
            className="
              relative
              z-10
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white/12
              backdrop-blur-md
              border
              border-white/20
              group-hover:bg-white/20
              transition-all
              duration-300
            "
          >
            <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </span>

          {/* Hover Glow */}
          <span
            className="
              absolute
              inset-0
              rounded-full
              bg-gradient-to-br
              from-[#b8956e]/0
              to-[#5e503f]/0
              group-hover:from-[#b8956e]/30
              group-hover:to-[#5e503f]/30
              transition-all
              duration-500
              blur-xl
            "
          />
        </a>
      </div>
    </section>
  );
}