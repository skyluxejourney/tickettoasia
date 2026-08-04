"use client";

import SearchEngine from "./SearchEngine";
import Image from "next/image";
import heroBanner from "@/public/images/skyluxe-hero-banner.jpg";

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

      {/* Scroll Indicator - Positioned at bottom of section */}
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
    </section>
  );
}