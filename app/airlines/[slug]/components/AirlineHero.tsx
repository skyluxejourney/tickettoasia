"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SearchEngine from "@/components/SearchEngine";
import { Phone, Headphones } from "lucide-react";
import type { AirlineData } from "../constants";

// Define the props interface
interface AirlineHeroProps {
  airline: AirlineData;
}

export default function AirlineHero({ airline }: AirlineHeroProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Extract airline name from the title
  const airlineName = airline.airline.name;
  
  // Split the title to highlight the airline name
  const titleParts = airline.hero.title.split(airlineName);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/airlinesheroback.jpg"
          alt={`${airline.airline.name} flights - Ticket to Europe`}
          fill
          className="object-cover object-center scale-105 transition-transform duration-[2s] ease-out"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Decorative Warm Accent Line - Top */}
      <div 
        className="absolute top-0 left-0 right-0 z-10 h-1"
        style={{
          background: `linear-gradient(to right, #5e503f, #b8956e, #eae0d5)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full">
          <h1 
            className={`mb-4 sm:mb-5 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            {titleParts.length > 1 ? (
              // If airline name is found in title
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight">
                {titleParts[0]}
                <span className="italic" style={{
                  background: `linear-gradient(to right, #b8956e, #eae0d5, #b8956e)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {airlineName}
                </span>
                {titleParts[1]}
              </span>
            ) : (
              // Fallback: If airline name not found, show full title with gradient
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight">
                <span className="italic" style={{
                  background: `linear-gradient(to right, #b8956e, #eae0d5, #b8956e)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {airline.hero.title}
                </span>
              </span>
            )}
          </h1>

          <p 
            className={`text-white/70 text-sm sm:text-base md:text-lg italic w-full mb-4 sm:mb-6 font-light tracking-wide transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            {airline.hero.subtitle}
          </p>

          <p 
            className={`text-white/80 text-sm sm:text-base md:text-lg italic w-full mb-6 sm:mb-8 font-light tracking-wide leading-relaxed transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            {airline.hero.disclaimer}
          </p>

          <div 
            className={`relative z-20 w-full transition-all duration-1000 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <SearchEngine />
          </div>
        </div>
      </div>

      {/* Decorative Warm Accent Line - Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-10 h-1"
        style={{
          background: `linear-gradient(to right, #eae0d5, #b8956e, #5e503f)`
        }}
      />

      {/* Professional Floating Call Widget - Fixed hover behavior */}
      <div 
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3"
        style={{ pointerEvents: 'none' }}
      >
        {/* Chat Card - Only appears when hovering the button directly */}
        <div
          className={`
            hidden sm:block
            w-[260px]
            rounded-2xl
            border border-gray-200/80
            bg-white/95
            backdrop-blur-xl
            p-4
            shadow-[0_20px_60px_rgba(94,80,63,0.18)]
            transition-all duration-400 
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            will-change-transform
            ${isHovered 
              ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto' 
              : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
            }
          `}
        >
          <div className="flex items-start gap-3">
            {/* Support Icon with subtle animation */}
            <div className="relative mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#f5ede4] transition-transform duration-300 group-hover:scale-105">
              <span className="absolute inset-0 rounded-full bg-[#b8956e]/20 animate-ping"></span>
              <Headphones className="relative z-10 h-5 w-5 text-[#5e503f] transition-transform duration-300 group-hover:rotate-12" />
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
              <p className="text-base font-bold text-gray-900 transition-colors duration-300">
                {airline.hero.ctaPhone}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Flight booking, changes and cancellations.
              </p>
            </div>
          </div>
        </div>

        {/* Circle Call Button with visible wave rings - Warm Theme */}
        <a
          href={`tel:${airline.hero.ctaPhone}`}
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
            background: `linear-gradient(to right, #5e503f, #b8956e)`,
            pointerEvents: 'auto'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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