"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, ChevronRight, Calendar, Edit, CheckCircle, ArrowRight, Clock, Headphones } from "lucide-react";
import { BRAND, COMPANY } from "@/app/constants";
import type { AirlineData } from "../constants";

interface AirlinePolicyProps {
  airline: AirlineData;
}

export default function AirlinePolicy({ airline }: AirlinePolicyProps) {
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

  // Get phone number from airline data
  const phoneNumber = airline.airline.phoneNumber || COMPANY.phone || "+1-888-845-0220";
  
  // Get ONLY policy-related FAQs
  const policyFaqs = airline.faqs.filter((faq) => {
    const question = faq.question.toLowerCase();
    return (
      question.includes('policy') ||
      question.includes('change') ||
      question.includes('cancel') ||
      question.includes('reschedule') ||
      question.includes('refund') ||
      question.includes('fee') ||
      question.includes('same-day') ||
      question.includes('modification') ||
      question.includes('difference') ||
      question.includes('fare type')
    );
  });

  const steps = [
    {
      icon: Calendar,
      title: "Select Your New Flight",
      description: "Choose your preferred new flight dates and times from available options.",
    },
    {
      icon: Edit,
      title: "Review Change Details",
      description: "Review the change details, including any fare differences or applicable fees.",
    },
    {
      icon: CheckCircle,
      title: "Confirm & Get Confirmation",
      description: "Confirm your changes and receive your updated itinerary via email.",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 overflow-hidden" 
      style={{ backgroundColor: '#faf7f2' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Left Side - 70% */}
          <div className="lg:w-[70%] border-r-0 lg:border-r" style={{ borderColor: '#e2e8f0' }}>
            <div className="pr-0 lg:pr-8">
              {/* Heading */}
              <h2 
                className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ color: '#3d3226', transitionDelay: '100ms' }}
              >
                {airline.airline.name} Flight Change, Reschedule & Cancellation
              </h2>
              
              {/* Phone Number */}
              <div 
                className={`flex items-center gap-3 mb-6 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: '150ms' }}
              >
                <div 
                  className="p-2 rounded-full text-white"
                  style={{
                    background: `linear-gradient(to right, #5e503f, #b8956e)`
                  }}
                >
                  <Phone size={16} />
                </div>
                <span className="text-sm sm:text-base font-medium" style={{ color: '#2a2420' }}>
                  Call Airlines Helpdesk:{" "}
                  <a 
                    href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                    className="font-bold transition-colors"
                    style={{ color: '#5e503f' }}
                  >
                    {phoneNumber}
                  </a>
                </span>
              </div>

              {/* Hero Banner - Brand Style with Left Fade */}
              <div 
                className={`relative w-full mb-10 overflow-hidden border border-[#E2E8F0]/10 shadow-2xl transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ backgroundColor: '#3d3226', transitionDelay: '200ms' }}
              >
                {/* Background */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/flightposter.jpg"
                    alt={`Change or Cancel Flight - ${BRAND.name}`}
                    fill
                    className="object-cover object-center"
                  />

                  {/* Left-side fade overlay - Updated to warm brown theme */}
                  <div className="absolute inset-0" style={{
                    background: `linear-gradient(to right, #3d3226F2, #3d3226BF, transparent)`
                  }} />
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row min-h-[460px]">

                  {/* LEFT CONTENT */}
                  <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center max-w-2xl">

                    {/* Brand */}
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-3 backdrop-blur-md border border-white/10 text-white px-4 py-3" style={{ backgroundColor: '#5e503f1A' }}>
                        <Image
                          src="/logo/ticketlogo.png"
                          alt={BRAND.name}
                          width={24}
                          height={24}
                          className="object-contain brightness-0 invert"
                        />

                        <div className="leading-tight">
                          <p className="text-sm font-bold tracking-wide !text-white">
                            {BRAND.name.toLowerCase().replace(/\s/g, '')}.com
                          </p>
                          <p className="text-[11px] text-white/70 !text-white/70">
                            24/7 Airline Support
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-3">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight !text-white">
                        {airline.airline.name}
                      </h2>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold !text-white">
                        Change or Cancel
                      </h2>

                      {/* Flight Divider */}
                      <div className="flex items-center gap-4 py-2 max-w-md">
                        <div className="h-px flex-1 bg-white/20" />
                        <span className="text-3xl sm:text-4xl italic font-semibold !text-white">
                          Flight
                        </span>
                        <div className="h-px flex-1 bg-white/20" />
                      </div>

                      {/* With Brand - Updated accent color */}
                      <div className="flex items-center gap-3 text-lg text-white/90">
                        <span className="!text-white">with</span>
                        <Image
                          src="/logo/ticketlogo.png"
                          alt={BRAND.name}
                          width={24}
                          height={24}
                          className="object-contain brightness-0 invert"
                        />
                        <span className="font-extrabold !text-white italic" style={{ color: '#eae0d5' }}>
                          {BRAND.name}
                        </span>
                      </div>

                      <p className="max-w-xl text-sm sm:text-base text-white/75 leading-relaxed pt-2 !text-white/75">
                        Get instant assistance for flight changes, cancellations, same-day
                        rebooking, fare difference guidance, and refund-related queries from
                        our travel experts at {BRAND.name}.
                      </p>
                    </div>

                    {/* Features - Updated to warm theme */}
                    <div className="mt-8 space-y-5">
                      {[
                        { icon: Calendar, title: "Change or Cancel", desc: "Modify your flight hassle-free" },
                        { icon: Clock, title: "Save on Change Fees", desc: "Explore available fee-saving options" },
                        { icon: Headphones, title: "24/7 Support", desc: "Real travel assistance anytime" },
                      ].map((feature, idx) => (
                        <div 
                          key={idx}
                          className={`flex items-start gap-4 transition-all duration-700 ease-out ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                          }`}
                          style={{ transitionDelay: `${300 + idx * 100}ms` }}
                        >
                          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg" style={{ backgroundColor: '#5e503f' }}>
                            <feature.icon size={22} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-base !text-white">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-white/70 !text-white/70">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT SIDE - background image remains visible */}
                  <div className="lg:w-[38%]" />
                </div>

                {/* CALL BAR - Updated to warm theme */}
                <div className="relative z-10 text-white border-t border-white/10" style={{ backgroundColor: '#3d3226F2' }}>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#eae0d5' }}>
                        <Phone size={22} style={{ color: '#5e503f' }} />
                      </div>
                      <div>
                        <p className="text-sm text-white/80 font-medium !text-white/80">
                          Call Now
                        </p>
                        <p className="text-lg sm:text-xl font-extrabold tracking-wide !text-white">
                          {phoneNumber}
                        </p>
                      </div>
                    </div>
                    <a
                      href={"tel:" + phoneNumber.replace(/\s/g, "")}
                      className="inline-flex items-center gap-2 px-6 py-3 font-bold transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                      style={{
                        backgroundColor: '#eae0d5',
                        color: '#5e503f'
                      }}
                    >
                      <Phone size={18} />
                      Call 24/7
                    </a>
                  </div>
                </div>
              </div>

              {/* Policy Queries - Only Policy Related FAQs */}
              <div className="space-y-4">
                {policyFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`bg-white shadow-sm hover:shadow-md transition-all duration-300 p-5 border hover:border-[#b8956e]/30 group ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                    }`}
                    style={{
                      borderColor: '#e2e8f0',
                      transitionDelay: `${400 + index * 80}ms`
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                          style={{
                            backgroundColor: '#eae0d5',
                          }}
                        >
                          <ChevronRight size={14} style={{ color: '#5e503f' }} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base font-semibold transition-colors" style={{ color: '#3d3226' }}>
                          {faq.question}
                        </h3>
                        <div className="mt-2">
                          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#2a2420B3' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - 30% - Image with Fine Black Line Box */}
          <div 
            className={`lg:w-[30%] flex items-start justify-center transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="sticky top-24 w-full max-w-[400px]">
              <div className="p-0.5 bg-black/10">
                <div className="border border-black/15 overflow-hidden transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/sidepannelimage.png"
                    alt={`Review Us Now - ${BRAND.name}`}
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Steps Section */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: '#e2e8f0' }}>
          <div 
            className={`text-center mb-8 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: '#3d3226' }}>
              Change Your {airline.airline.name} Flight with {BRAND.name}
            </h3>
            <div 
              className="w-16 h-1 mx-auto mt-3 rounded-full"
              style={{
                background: `linear-gradient(to right, #5e503f, #b8956e)`
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-white shadow-md hover:shadow-xl transition-all duration-300 p-6 border hover:border-[#b8956e]/30 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  borderColor: '#e2e8f0',
                  transitionDelay: `${600 + index * 150}ms`
                }}
              >
                {/* Step Number */}
                <div 
                  className="absolute -top-3 -left-3 w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center shadow-lg"
                  style={{
                    background: `linear-gradient(to right, #5e503f, #b8956e)`
                  }}
                >
                  {index + 1}
                </div>

                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 rounded-full transition-colors duration-300 flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: '#eae0d5',
                    }}
                  >
                    <step.icon className="w-8 h-8 transition-colors duration-300" style={{ color: '#5e503f' }} />
                  </div>
                  <h4 className="text-base font-semibold transition-colors" style={{ color: '#3d3226' }}>
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm mt-2 leading-relaxed" style={{ color: '#2a242099' }}>
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6" style={{ color: '#b8956e4D' }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Unbeatable Deals CTA */}
          <div 
            className={`mt-10 p-6 sm:p-8 text-center text-white shadow-xl transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{
              background: `linear-gradient(to right, #5e503f, #b8956e)`,
              transitionDelay: '700ms'
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h4 className="text-xl sm:text-2xl font-bold flex items-center gap-2 !text-white">
                  <Phone className="w-6 h-6 animate-pulse !text-white" />
                  For Unbeatable Deals, Call Us Today!
                </h4>
                <p className="text-white/80 text-sm mt-1">
                  Get exclusive discounts and personalized assistance from our travel experts at {BRAND.name}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2.5">
                  <Phone className="w-4 h-4 !text-white" />
                  <span className="font-bold text-base !text-white">24/7 Support</span>
                </div>
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                  className="bg-white px-6 py-3 rounded-full font-bold hover:bg-[#faf7f2] transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap hover:scale-105 active:scale-95"
                  style={{ color: '#5e503f' }}
                >
                  <Phone size={18} />
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}