"use client";

import Image from "next/image";
import { Phone, ChevronRight, Calendar, Edit, CheckCircle, ArrowRight, Clock, Headphones } from "lucide-react";
import { airlinesData } from "../constants";
import { BRAND, COMPANY } from "@/app/constants";

interface AirlinePolicyProps {
  airlineName: string;
}

export default function AirlinePolicy({ airlineName }: AirlinePolicyProps) {
  // Find the airline data from constants
  const airlineEntry = Object.entries(airlinesData).find(
    ([_, data]) => data.name === airlineName
  );
  
  const airline = airlineEntry ? airlineEntry[1] : null;
  
  // Get phone number from constants or use default
  const phoneNumber = airline?.phoneNumber || COMPANY.phone || "+1-888-845-0220";
  
  // Get FAQs directly from constants
  const faqs = airline?.faqs || [];

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
    <section className="py-12 sm:py-16 bg-[#F5F9FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Left Side - 70% */}
          <div className="lg:w-[70%] border-r-0 lg:border-r border-[#E2E8F0]">
            <div className="pr-0 lg:pr-8">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-3">
                {airlineName} Flight Change, Reschedule & Cancellation
              </h2>
              
              {/* Phone Number */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] p-2 rounded-full text-white">
                  <Phone size={16} />
                </div>
                <span className="text-sm sm:text-base font-medium text-[#0A1628]">
                  Call Airlines Helpdesk:{" "}
                  <a 
                    href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                    className="text-[#1A3A6B] font-bold hover:text-[#4A8BCF] transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </span>
              </div>

              {/* Hero Banner - Brand Style with Left Fade */}
              <div className="relative w-full mb-10 overflow-hidden border border-[#E2E8F0]/10 bg-[#071426] shadow-2xl">

                {/* Background */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/changeflightposter.jpg"
                    alt={`Change or Cancel Flight - ${BRAND.name}`}
                    fill
                    className="object-cover object-center"
                  />

                  {/* Left-side fade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/95 via-[#071426]/75 to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row min-h-[460px]">

                  {/* LEFT CONTENT */}
                  <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center max-w-2xl">

                    {/* Brand */}
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-3">
                        <Image
                          src="/logo/ticket.png"
                          alt={BRAND.name}
                          width={28}
                          height={28}
                          className="object-contain"
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
                        {airlineName}
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

                      {/* With Brand */}
                      <div className="flex items-center gap-3 text-lg text-white/90">

                        <span className="!text-white">with</span>

                        <Image
                          src="/logo/ticket.png"
                          alt={BRAND.name}
                          width={24}
                          height={24}
                          className="object-contain"
                        />

                        <span className="font-extrabold !text-white italic">
                          {BRAND.name}
                        </span>
                      </div>

                      <p className="max-w-xl text-sm sm:text-base text-white/75 leading-relaxed pt-2 !text-white/75">
                        Get instant assistance for flight changes, cancellations, same-day
                        rebooking, fare difference guidance, and refund-related queries from
                        our travel experts at {BRAND.name}.
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mt-8 space-y-5">

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0A2A66] flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                          <Calendar size={22} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-base !text-white">
                            Change or Cancel
                          </h3>
                          <p className="text-sm text-white/70 !text-white/70">
                            Modify your flight hassle-free
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0A2A66] flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                          <Clock size={22} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-base !text-white">
                            Save on Change Fees
                          </h3>
                          <p className="text-sm text-white/70 !text-white/70">
                            Explore available fee-saving options
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0A2A66] flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                          <Headphones size={22} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-base !text-white">
                            24/7 Support
                          </h3>
                          <p className="text-sm text-white/70 !text-white/70">
                            Real travel assistance anytime
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* RIGHT SIDE - background image remains visible */}
                  <div className="lg:w-[38%]" />
                </div>

                {/* CALL BAR */}
                <div className="relative z-10 bg-[#0A2A66]/95 backdrop-blur-md text-white border-t border-white/10">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="w-11 h-11 rounded-full bg-white text-[#0A2A66] flex items-center justify-center shadow-lg">
                        <Phone size={22} />
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
                      className="inline-flex items-center gap-2 bg-white text-[#0A2A66] px-6 py-3 font-bold hover:bg-[#E8F0FE] transition-all duration-300 shadow-lg"
                    >
                      <Phone size={18} />
                      Call 24/7
                    </a>

                  </div>
                </div>
              </div>

              {/* Policy Queries - Directly from constants */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-sm hover:shadow-md transition-all duration-300 p-5 border border-[#E2E8F0] hover:border-[#4A8BCF]/30 group cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#E8F0FE] flex items-center justify-center group-hover:bg-[#1A3A6B] transition-colors">
                          <ChevronRight size={14} className="text-[#1A3A6B] group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base font-semibold text-[#0A1628] group-hover:text-[#1A3A6B] transition-colors">
                          {faq.question}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#0A1628]/60 mt-1">
                          {faq.answer.split('.')[0] + '.'}
                        </p>
                        <div className="mt-3 pt-3 border-t border-[#E8F0FE]">
                          <p className="text-xs sm:text-sm text-[#0A1628]/70 leading-relaxed">
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

          {/* Right Side - 30% - Image Only */}
          <div className="lg:w-[30%] flex items-start justify-center">
            <div className="sticky top-24">
              <Image
                src="/images/reviewposter.png"
                alt={`Review Us Now - ${BRAND.name}`}
                width={400}
                height={600}
                className="w-full max-w-[400px] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Three Steps Section */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1628]">
              Change Your {airlineName} Flight with {BRAND.name}
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-[#E2E8F0] hover:border-[#4A8BCF]/30 group"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] text-white text-sm font-bold flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#E8F0FE] group-hover:bg-[#1A3A6B] transition-colors duration-300 flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-[#1A3A6B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-base font-semibold text-[#0A1628] group-hover:text-[#1A3A6B] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0A1628]/60 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#4A8BCF]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Unbeatable Deals CTA */}
          <div className="mt-10 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] p-6 sm:p-8 text-center text-white shadow-xl">
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
                  className="bg-white text-[#1A3A6B] px-6 py-3 rounded-full font-bold hover:bg-[#E8F0FE] transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap"
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