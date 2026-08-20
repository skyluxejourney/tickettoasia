// components/AsiaDestinationsCarousel.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";

const ASIA_DESTINATIONS = [
  {
    src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Marina Bay Sands and Gardens by the Bay in Singapore at sunset",
    title: "Singapore",
    subtitle: "Marina Bay Sands & Gardens by the Bay",
    meta: [
      { label: "Country", value: "Singapore" },
      { label: "Best Time", value: "Feb-Apr" },
      { label: "Popular For", value: "Cityscape, Cuisine" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Tanah Lot temple on the beach in Bali, Indonesia at sunset",
    title: "Bali",
    subtitle: "Tanah Lot Temple",
    meta: [
      { label: "Country", value: "Indonesia" },
      { label: "Best Time", value: "Apr-Oct" },
      { label: "Popular For", value: "Beaches, Temples" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1721170628208-dffed6eb3514?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Skyline of Dubai with Burj Khalifa and modern architecture",
    title: "Dubai",
    subtitle: "Burj Khalifa & City Skyline",
    meta: [
      { label: "Country", value: "UAE" },
      { label: "Best Time", value: "Nov-Mar" },
      { label: "Popular For", value: "Luxury, Shopping" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "White sandy beach and turquoise water in Maldives",
    title: "Maldives",
    subtitle: "Private Island Paradise",
    meta: [
      { label: "Country", value: "Maldives" },
      { label: "Best Time", value: "Nov-Apr" },
      { label: "Popular For", value: "Overwater Villas" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Fushimi Inari Shrine with red torii gates in Kyoto, Japan",
    title: "Japan",
    subtitle: "Fushimi Inari Shrine, Kyoto",
    meta: [
      { label: "Country", value: "Japan" },
      { label: "Best Time", value: "Mar-May, Oct-Nov" },
      { label: "Popular For", value: "Culture, Cherry Blossoms" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "View of the Grand Palace in Bangkok, Thailand",
    title: "Bangkok",
    subtitle: "Grand Palace & Temples",
    meta: [
      { label: "Country", value: "Thailand" },
      { label: "Best Time", value: "Nov-Feb" },
      { label: "Popular For", value: "Temples, Street Food" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1697850084120-4896a446a04d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Beautiful Ha Long Bay with limestone karsts in Vietnam",
    title: "Ha Long Bay",
    subtitle: "Limestone Karsts & Cruise",
    meta: [
      { label: "Country", value: "Vietnam" },
      { label: "Best Time", value: "Oct-Apr" },
      { label: "Popular For", value: "Cruises, Scenery" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1678110721308-a08ed05a7938?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Crowded street market in Hong Kong with neon signs",
    title: "Hong Kong",
    subtitle: "Night Markets & Skyline",
    meta: [
      { label: "Country", value: "China" },
      { label: "Best Time", value: "Oct-Dec" },
      { label: "Popular For", value: "Shopping, Cuisine" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1712601979098-15dccb4d0996?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Famous Petronas Twin Towers in Kuala Lumpur, Malaysia",
    title: "Kuala Lumpur",
    subtitle: "Petronas Twin Towers",
    meta: [
      { label: "Country", value: "Malaysia" },
      { label: "Best Time", value: "May-Jul, Dec-Feb" },
      { label: "Popular For", value: "Architecture, Food" },
    ],
  },
];

export default function AsiaDestinationsCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-12 sm:pt-16 lg:pt-20 overflow-hidden"
      style={{ backgroundColor: '#faf7f2' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-auto mx-auto">
          {/* Heading - With same style as WhyPayMoreSection */}
          <div
            className={`mb-6 sm:mb-8 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#3d3226' }}>
              Explore{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  background: `linear-gradient(to right, #5e503f, #b8956e)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Asia's Finest
              </span>
              {" "}Destinations
            </h2>
            <div
              className="w-16 h-1 rounded-full mt-3"
              style={{
                background: `linear-gradient(to right, #5e503f, #b8956e)`
              }}
            />
          </div>

          {/* Description */}
          <p
            className={`text-sm sm:text-base max-w-2xl mb-8 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ color: '#2a2420CC', transitionDelay: '150ms' }}
          >
            Discover the most breathtaking places across Asia - from stunning temples to pristine beaches, 
            and everything in between. Let TicketToAsia take you there.
          </p>

          {/* Carousel */}
          <div
            className={`w-full overflow-hidden transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <CoverflowCarousel
              slides={ASIA_DESTINATIONS}
              showCaption={true}
              showNavigation={true}
              showPagination={true}
              loop={true}
              rotate={45}
              depth={0.6}
              perspective={3.5}
              cardWidth="clamp(180px, 25vw, 320px)"
              label="Asia Destination Showcase"
            />
          </div>
        </div>
      </div>
    </section>
  );
}