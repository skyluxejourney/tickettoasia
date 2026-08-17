"use client";

import { useState, useEffect, useRef } from "react";
import { BRAND } from "@/app/constants";

export default function WhyPayMoreSection() {
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
      className="py-12 sm:py-16 lg:py-20 overflow-hidden" 
      style={{ backgroundColor: '#faf7f2' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Heading - Top Left */}
          <div 
            className={`mb-6 sm:mb-8 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#3d3226' }}>
              Why Pay More?{" "}
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  background: `linear-gradient(to right, #5e503f, #b8956e)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Fly Cheap
              </span>{" "}
              with {BRAND.name}
            </h2>
            <div 
              className="w-16 h-1 rounded-full mt-3"
              style={{
                background: `linear-gradient(to right, #5e503f, #b8956e)`
              }}
            />
          </div>

          {/* Content - Full Width */}
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed" style={{ color: '#2a2420CC' }}>
            <p 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              Traveling is fun until it comes to online flight ticket booking. 
              Finding the best deal on domestic and international flights is 
              now easy with {BRAND.name}. It is one of the leading travel 
              agencies based in the USA.
            </p>

            <p 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Whether you are planning a family vacation, solo trip, 
              honeymoon trip, or friend's trip, {BRAND.name} helps you get 
              cheap flight tickets. From budget traveling to luxury traveling, 
              we have everything you need for your comfortable journey.
            </p>

            <p 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              With our premium flight booking services, you can book your 
              roundtrip or one-way air tickets in just a few minutes. If you 
              want to save your money on flight bookings, make sure you book 
              your all flight tickets with {BRAND.name}.
            </p>

            <p 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              We have been in business for the last 5 years and understand 
              each of your travel needs. We are working with 600+ airlines to 
              provide you with the best price for your flight booking. With 
              our lowest airfares, save a huge amount of money and invest it 
              in your next flight booking.
            </p>

            <p 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              If you're planning to explore the new city as per your travel 
              bucket list, we are here to help in make the best travel 
              arrangements. We have a team of dedicated travel experts who are 
              always ready to help you in choosing the best deals.
            </p>

            <p 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              We take pride in offering the cheapest flight tickets in the USA 
              for both domestic and international flights. Our website 
              interface is user-friendly and easy to use through which you can 
              easily book your flights. Even we offer the best last-minute 
              deals which makes us different from other travel agencies in the 
              USA.
            </p>

            <p 
              className={`font-semibold text-base sm:text-lg pt-2 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ color: '#3d3226', transitionDelay: '450ms' }}
            >
              When you're getting guaranteed cheap flight tickets at {BRAND.name}, 
              why are you delaying your exploration? Explore the world at 
              minimal cost. This world is waiting for you. Go grab the best 
              deals and save your hard-earned money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}