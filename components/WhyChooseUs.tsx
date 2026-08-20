"use client";

import { useState, useEffect, useRef } from "react";
import { Users, DollarSign, Lock } from "lucide-react";
import { BRAND } from "@/app/constants";

export default function WhyTrustSection() {
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
      observer.disconnect();
    };
  }, []);

  const trustFeatures = [
    {
      icon: Users,
      title: "Team of Travel Professionals",
      description:
        "Our travel experts are available around the clock to assist with your flight bookings.",
    },
    {
      icon: DollarSign,
      title: "Best Price Guaranteed",
      description:
        "Say Goodbye to Expensive Flights – Grab Budget-Friendly Tickets Today.",
    },
    {
      icon: Lock,
      title: "Secure Payment",
      description:
        "Experience hassle-free and secure flight bookings with our user-friendly platform.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        pt-[260px]
        sm:pt-[240px]
        md:pt-[220px]
        lg:pt-40
        pb-12
        sm:pb-16
        overflow-hidden
      "
      style={{ backgroundColor: "#faf7f2" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-auto mx-auto">

          {/* Heading */}
          <div
            className={`mb-8 sm:mb-10 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: "#3d3226" }}
            >
              Why Millions Trust
              <br />

              <span
                className="text-transparent bg-clip-text"
                style={{
                  background:
                    "linear-gradient(to right, #5e503f, #b8956e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {BRAND.name}
              </span>
            </h2>

            <div
              className="w-12 h-1 rounded-full mt-3"
              style={{
                background:
                  "linear-gradient(to right, #5e503f, #b8956e)",
              }}
            />
          </div>

          {/* Trust Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className={`
                    group
                    bg-white
                    p-5
                    sm:p-6
                    transition-all
                    duration-500
                    ease-out
                    hover:bg-[#faf7f2]
                    border-r
                    border-[#e2e8f0]
                    hover:shadow-xl
                    hover:z-10
                    relative
                    hover:border-[#b8956e]/30
                    ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }
                  `}
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#e2e8f0",
                    transitionDelay: `${200 + index * 150}ms`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className="w-10 h-10 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-lg icon-wrapper"
                        style={{
                          backgroundColor: "#eae0d5",
                          color: "#5e503f",
                        }}
                      >
                        <Icon
                          size={20}
                          className="transition-colors duration-300"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-sm sm:text-base font-bold mb-1 transition-colors duration-300"
                        style={{ color: "#3d3226" }}
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm leading-relaxed"
                        style={{ color: "#2a2420B3" }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Hover */}
                  <style jsx>{`
                    .group:hover .icon-wrapper {
                      background: linear-gradient(
                        to right,
                        #5e503f,
                        #b8956e
                      );
                      color: white !important;
                    }

                    .group:hover .icon-wrapper svg {
                      color: white !important;
                    }
                  `}</style>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}