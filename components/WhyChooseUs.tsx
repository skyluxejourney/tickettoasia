"use client";

import { Users, DollarSign, Lock, Shield, Award, Headphones } from "lucide-react";
import { BRAND } from "@/app/constants";

export default function WhyTrustSection() {
  const trustFeatures = [
    {
      icon: Users,
      title: "Team of Travel Professionals",
      description: "Our travel experts are available around the clock to assist with your flight bookings.",
    },
    {
      icon: DollarSign,
      title: "Best Price Guaranteed",
      description: "Say Goodbye to Expensive Flights – Grab Budget-Friendly Tickets Today.",
    },
    {
      icon: Lock,
      title: "Secure Payment",
      description: "Experience hassle-free and secure flight bookings with our user-friendly platform.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:pt-20 lg:py-5" style={{ backgroundColor: '#faf7f2' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading - Left Aligned */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight" style={{ color: '#3d3226' }}>
              Why Millions Trust
              <br />
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  background: `linear-gradient(to right, #5e503f, #b8956e)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {BRAND.name}
              </span>
            </h2>
            <div 
              className="w-12 h-1 rounded-full mt-3"
              style={{
                background: `linear-gradient(to right, #5e503f, #b8956e)`
              }}
            />
          </div>

          {/* Three Small Cards in a Row - Attached to each other */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`
                    group
                    bg-white
                    p-5 sm:p-6
                    transition-all duration-300
                    hover:bg-[#faf7f2]
                    border-r border-[#e2e8f0]
                    hover:shadow-xl
                    hover:z-10
                    relative
                    hover:border-[#b8956e]/30
                  `}
                  style={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e2e8f0',
                  }}
                >
                  {/* Icon on the left */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-10 h-10 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-lg icon-wrapper"
                        style={{
                          backgroundColor: '#eae0d5',
                          color: '#5e503f',
                        }}
                      >
                        <Icon size={20} className="transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 
                        className="text-sm sm:text-base font-bold mb-1 transition-colors duration-300"
                        style={{ color: '#3d3226' }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#2a2420B3' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect overlay for the icon */}
                  <style jsx>{`
                    .group:hover .icon-wrapper {
                      background: linear-gradient(to right, #5e503f, #b8956e);
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