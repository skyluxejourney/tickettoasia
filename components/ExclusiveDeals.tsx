"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, ArrowRight, Star, Users, Shield, Tag, Sparkles, Clock, Award } from "lucide-react";
import { COMPANY, CONTACT } from "@/app/constants";

export default function ExclusiveDealsPoster() {
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

  // Static positions for particles
  const particles = [
    { left: "10%", top: "20%", delay: "0s", duration: "4s" },
    { left: "25%", top: "45%", delay: "0.5s", duration: "5s" },
    { left: "40%", top: "15%", delay: "1s", duration: "3.5s" },
    { left: "55%", top: "60%", delay: "1.5s", duration: "4.5s" },
    { left: "70%", top: "25%", delay: "0.3s", duration: "5.5s" },
    { left: "85%", top: "50%", delay: "0.8s", duration: "4s" },
    { left: "15%", top: "75%", delay: "1.2s", duration: "3s" },
    { left: "35%", top: "85%", delay: "0.6s", duration: "6s" },
    { left: "50%", top: "35%", delay: "1.8s", duration: "4.2s" },
    { left: "65%", top: "80%", delay: "0.2s", duration: "5s" },
    { left: "80%", top: "15%", delay: "0.9s", duration: "3.8s" },
    { left: "5%", top: "50%", delay: "1.4s", duration: "4.7s" },
    { left: "45%", top: "70%", delay: "0.7s", duration: "5.2s" },
    { left: "75%", top: "40%", delay: "1.1s", duration: "3.3s" },
    { left: "95%", top: "30%", delay: "0.4s", duration: "4.8s" },
    { left: "20%", top: "10%", delay: "1.6s", duration: "5.8s" },
    { left: "60%", top: "90%", delay: "0.1s", duration: "3.9s" },
    { left: "30%", top: "55%", delay: "1.3s", duration: "4.3s" },
    { left: "88%", top: "70%", delay: "0.5s", duration: "5.1s" },
    { left: "12%", top: "90%", delay: "0.8s", duration: "4.6s" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-8 sm:py-12 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`relative overflow-hidden shadow-2xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
          }`}
          style={{
            background: `linear-gradient(135deg, #3d3226, #5e503f, #7a6a56)`
          }}
        >
          {/* Background Pattern - Updated with warm tones */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
              style={{ backgroundColor: '#b8956e' }}
            />
            <div 
              className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl"
              style={{ backgroundColor: '#eae0d5' }}
            />
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
              style={{ backgroundColor: '#b8956e33' }}
            />
          </div>

          {/* Decorative Pattern Lines */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#eae0d5] to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#eae0d5] to-transparent" />
            <div className="absolute top-1/2 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#eae0d5] to-transparent" />
            <div className="absolute top-1/2 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#eae0d5] to-transparent" />
          </div>

          {/* Static Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                  backgroundColor: i % 2 === 0 ? '#eae0d54D' : '#b8956e33',
                  width: i % 3 === 0 ? '3px' : '2px',
                  height: i % 3 === 0 ? '3px' : '2px',
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col lg:flex-row items-stretch">
            {/* Left Content */}
            <div className="flex-1 p-6 sm:p-8 lg:p-10 xl:p-12 text-center lg:text-left">
              {/* Premium Badge - New Design */}
              <div 
                className={`inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-[#eae0d5]/20 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ backgroundColor: '#5e503f66', transitionDelay: '100ms' }}
              >
                <Award size={16} style={{ color: '#eae0d5' }} />
                <span className="text-white text-xs font-semibold tracking-[0.2em] uppercase">
                  Premium Travel Deals
                </span>
              </div>

              <h2 
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white !text-white mb-4 leading-tight transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Exclusive{" "}
                <span className="relative">
                  <span className="relative z-10" style={{ color: '#eae0d5' }}>
                    Savings
                  </span>
                  <span 
                    className="absolute -bottom-1 left-0 w-full h-1 rounded-full blur-sm"
                    style={{ backgroundColor: '#eae0d54D' }}
                  />
                </span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light opacity-90">
                  Up to <span className="font-bold" style={{ color: '#eae0d5' }}>20%</span> Off
                </span>
              </h2>

              <p 
                className={`text-white/90 !text-white/90 text-sm sm:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 mb-6 leading-relaxed transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                Call now and let our professional agents book your ticket at the best price.
                Limited time offer – don't miss out!
              </p>

              {/* Trust Badges - Updated Design */}
              <div 
                className={`flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-6 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10" style={{ backgroundColor: '#5e503f4D' }}>
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-white/90 text-xs font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10" style={{ backgroundColor: '#5e503f4D' }}>
                  <Users size={14} className="text-white/80" />
                  <span className="text-white/90 text-xs font-medium">2.5M+ Bookings</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10" style={{ backgroundColor: '#5e503f4D' }}>
                  <Shield size={14} className="text-white/80" />
                  <span className="text-white/90 text-xs font-medium">Secure Payment</span>
                </div>
              </div>

              {/* CTA Buttons - Updated Design */}
              <div 
                className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-center gap-3 backdrop-blur-sm rounded-full px-5 sm:px-6 py-3 w-full sm:w-auto transition-all duration-300 border border-white/20 hover:scale-105 hover:shadow-xl"
                  style={{ backgroundColor: '#5e503f66' }}
                >
                  <Phone size={20} className="animate-pulse" style={{ color: '#eae0d5' }} />
                  <span className="text-white !text-white font-bold text-base sm:text-lg tracking-wider">
                    {CONTACT.phone}
                  </span>
                </a>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="text-[#3d3226] px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap w-full sm:w-auto flex items-center justify-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, #eae0d5, #f5efe8)`,
                    boxShadow: `0 10px 20px -5px #0000004D`
                  }}
                >
                  <span>Call Now</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Image - New warm-toned image */}
            <div 
              className={`relative lg:w-1/2 min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] xl:min-h-[400px] transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <img
                src="/images/exclusiveimage.png"
                alt="Exclusive Travel Deals"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div 
                className="absolute inset-0"
                style={{ background: `linear-gradient(to right, #3d322699, transparent 40%, transparent)` }}
              />
              
              {/* Floating Savings Badge - Updated Design */}
              <div 
                className={`absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-3 sm:p-4 shadow-2xl rotate-3 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 scale-100 rotate-3' : 'opacity-0 scale-75 -rotate-12'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <div 
                  className="px-4 sm:px-6 py-2 sm:py-3 text-white text-center"
                  style={{
                    background: `linear-gradient(135deg, #5e503f, #b8956e)`
                  }}
                >
                  <div className="text-xs sm:text-sm font-bold tracking-wider">Save Up To</div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">20%</div>
                  <div className="text-[8px] sm:text-[10px] opacity-80">Limited Time</div>
                </div>
              </div>

              {/* Floating Trust Badge - New */}
              <div 
                className={`absolute bottom-6 left-4 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-white/10 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ backgroundColor: '#3d3226CC', transitionDelay: '600ms' }}
              >
                <div className="flex items-center gap-3 text-white">
                  <div className="flex items-center gap-1">
                    <Clock size={14} style={{ color: '#b8956e' }} />
                    <span className="text-xs font-medium">24/7 Support</span>
                  </div>
                  <span className="w-px h-4 bg-white/20" />
                  <div className="flex items-center gap-1">
                    <Tag size={14} style={{ color: '#b8956e' }} />
                    <span className="text-xs font-medium">Exclusive Deals</span>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#eae0d5]/20" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#eae0d5]/20" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg); 
            opacity: 0.3; 
          }
          25% { 
            transform: translateY(-15px) translateX(8px) rotate(3deg); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(0) translateX(-8px) rotate(0deg); 
            opacity: 0.3; 
          }
          75% { 
            transform: translateY(15px) translateX(8px) rotate(-3deg); 
            opacity: 0.7; 
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}