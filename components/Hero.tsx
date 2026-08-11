"use client";

import SearchEngine from "./SearchEngine";
import Image from "next/image";
import { Phone, Headphones } from "lucide-react";
import { CONTACT } from "@/app/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image with Clean Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aeroherobackground.jpg"
          alt="Ticket to Ocean - Travel Experiences"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Clean Dark Overlay - No Bluish Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMzYgMzRjMCAxLjEgLjkgMiAyIDJzMi0uOSAyLTItLjktMi0yLTIgLTIgLjktMiAyei0xMiA0YzAgMS4xLjkgMiAyIDJzMi0uOSAyLTItLjktMi0yLTIgLTIgLjktMiAyeiIvPjwvZz48L3N2Zz4=')]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading - Two Lines Only */}
          <h1 className="max-w-4xl mx-auto mb-3 sm:mb-5">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Discover the World's
            </span>
            <span className="relative inline-block">
              <span 
                className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text leading-[1.1] tracking-tight italic"
                style={{
                  background: `linear-gradient(to right, #b8956e, #eae0d5, #b8956e)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Best Travel Experiences
              </span>
              <span 
                className="absolute -bottom-0.5 left-0 w-full h-1 rounded-full blur-sm"
                style={{
                  background: `linear-gradient(to right, #b8956e80, #eae0d51A)`
                }}
              />
            </span>
          </h1>

          {/* Subtitle - Centered */}
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 font-light tracking-wide leading-relaxed">
            Curated luxury journeys to the most breathtaking destinations.
            <br className="hidden sm:block" />
            Let us craft your perfect escape.
          </p>

          {/* Search Engine Component */}
          <div className="relative z-20">
            <SearchEngine />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned at bottom center */}
      <div 
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-colors cursor-pointer z-10"
        style={{ color: '#b8956e80' }}
      >
        <div className="w-4 h-6 border border-white/15 rounded-full flex justify-center p-1">
          <div 
            className="w-0.5 h-1.5 rounded-full animate-bounce"
            style={{ backgroundColor: '#b8956e' }}
          />
        </div>
      </div>

      {/* Professional Floating Call Widget - Warm Theme (Adapted from AirlineHero) */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 group flex items-center gap-3">

        {/* Chat Card - appears on hover with optimized animation */}
        <div
          className="
            hidden sm:block
            w-[260px]
            rounded-2xl
            border border-gray-200/80
            bg-white/95
            backdrop-blur-xl
            p-4
            shadow-[0_20px_60px_rgba(94,80,63,0.18)]
            opacity-0
            translate-x-4
            scale-95
            pointer-events-none
            transition-all duration-400 
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            group-hover:opacity-100
            group-hover:translate-x-0
            group-hover:scale-100
            group-hover:pointer-events-auto
            will-change-transform
          "
        >
          <div className="flex items-start gap-3">

            {/* Support Icon with subtle animation */}
            <div className="relative mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#f5ede4] group-hover:scale-105 transition-transform duration-300">
              <span className="absolute inset-0 rounded-full bg-[#b8956e]/20 animate-ping"></span>
              <Headphones className="relative z-10 h-5 w-5 text-[#5e503f] group-hover:rotate-12 transition-transform duration-300" />
            </div>

            {/* Text */}
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

        {/* Circle Call Button with visible wave rings - Warm Theme */}
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          aria-label="Call support"
          className="
            relative flex h-16 w-16 items-center justify-center
            rounded-full
            text-white
            shadow-[0_12px_32px_rgba(94,80,63,0.38)]
            transition-all duration-400 
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-110
            hover:shadow-[0_20px_45px_rgba(94,80,63,0.48)]
            focus:outline-none focus:ring-4 focus:ring-[#b8956e]/30
            active:scale-95
            will-change-transform
          "
          style={{
            background: `linear-gradient(to right, #5e503f, #b8956e)`
          }}
        >

          {/* Wave Rings - with warm colored borders for visibility */}
          <span className="absolute inset-0 rounded-full border-2 border-[#b8956e]/60 animate-[ping_2s_ease-in-out_infinite]"></span>
          <span className="absolute inset-[-4px] rounded-full border-2 border-[#b8956e]/40 animate-[pulse_2.5s_ease-in-out_infinite_0.5s]"></span>
          <span className="absolute inset-[-8px] rounded-full border-2 border-[#b8956e]/25 animate-[pulse_3s_ease-in-out_infinite_1s]"></span>
          
          {/* Inner Glass Circle with improved hover effect */}
          <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all duration-300">
            <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </span>

          {/* Hover glow effect */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#b8956e]/0 to-[#5e503f]/0 group-hover:from-[#b8956e]/30 group-hover:to-[#5e503f]/30 transition-all duration-500 blur-xl"></span>
        </a>
      </div>
    </section>
  );
}