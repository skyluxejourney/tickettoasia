"use client";

import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Award,
  Shield,
  AlertCircle,
} from "lucide-react";
import ContactModal from "./ContactModal";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, CONTACT, BRAND } from "@/app/constants";
import { airlinesDataMap } from "@/app/airlines/[slug]/data";
import type { AirlineData } from "@/app/airlines/[slug]/airlines-data";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Updated Quick Links - Contact Us now links to /contact
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Contact Us", href: "/contact" },
    { name: "Site Map", href: "/sitemap" },
  ];

  // Legal Links
  const legalLinks = [
    { name: "Terms & Condition", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Price Match Promise", href: "/price-match-policy" },
    { name: "Fulfillment Policy", href: "/fulfillment-policy" },
    { name: "Fare Disclosure", href: "/fare-disclosure-policy" },
    { name: "Advertiser Disclosure", href: "/advertiser-disclosure-policy" },
    { name: "Cookies Policy", href: "/cookies" },
    { name: "Cancellation and Refund", href: "/cancellation-refund-policy" },
    { name: "Taxes and Fees", href: "/taxes-fees" },
  ];

  // Helper function to generate slug from airline name
  function getSlugFromName(name: string): string {
    if (!name || typeof name !== 'string') return "";
    
    const specialCases: Record<string, string> = {
      'Cathay Pacific': 'cathay-pacific',
      'Cathay Pacific Airways': 'cathay-pacific',
      'Singapore Airlines': 'singapore-airlines',
      'Korean Air': 'korean-air',
      'Philippine Airlines': 'philippine-airlines',
    };
    
    if (specialCases[name]) {
      return specialCases[name];
    }
    
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  // Get top airlines
  const allAirlines = Object.values(airlinesDataMap);
  const topAirlines = allAirlines
    .filter((airline: AirlineData) => airline.airline?.name)
    .slice(0, 7)
    .map((airline: AirlineData) => ({
      name: airline.airline.name,
      slug: getSlugFromName(airline.airline.name)
    }));

  const closeModal = () => {
    setShowModal(false);
    setSelectedLink("");
  };

  return (
    <>
      <footer 
        ref={footerRef}
        className="text-[#2a2420]/80 overflow-hidden" 
        style={{ backgroundColor: '#faf7f2' }}
      >
        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            
            {/* 1. Brand & About */}
            <div 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  <Image
                    src="/logo/ticketlogo.png"
                    alt={BRAND.name}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-wide font-heading italic transition-colors duration-300 hover:text-[#5e503f]" style={{ color: '#3d3226' }}>
                    {BRAND.name}
                  </h2>
                  <p className="text-xs font-medium tracking-wider uppercase" style={{ color: '#5e503f' }}>
                    {BRAND.tagline || "Travel Assistance"}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4 max-w-xs" style={{ color: '#2a242099' }}>
                Your trusted partner for unforgettable travel experiences across the world. We help
                you discover the world with ease and comfort.
              </p>
              <div className="flex items-center gap-3 text-sm" style={{ color: '#2a242099' }}>
                <div className="flex items-center gap-1 transition-all duration-300 hover:scale-105 hover:text-[#5e503f]">
                  <Award size={14} style={{ color: '#5e503f' }} />
                  <span>5 Years of Trust</span>
                </div>
                <div className="flex items-center gap-1 transition-all duration-300 hover:scale-105 hover:text-[#5e503f]">
                  <Shield size={14} style={{ color: '#5e503f' }} />
                  <span>Secure Booking</span>
                </div>
              </div>
            </div>

            {/* 2. Quick Links */}
            <div 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className="font-semibold text-lg mb-4 relative" style={{ color: '#3d3226' }}>
                Quick Links
                <span 
                  className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full"
                  style={{
                    background: `linear-gradient(to right, #5e503f, #b8956e)`
                  }}
                />
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link, index) => (
                  <li 
                    key={link.name}
                    className={`transition-all duration-500 ease-out ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${300 + index * 50}ms` }}
                  >
                    {link.name === "Home" ? (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-sm transition-colors duration-200 flex items-center gap-2 group cursor-pointer hover:translate-x-1"
                        style={{ color: '#2a242099' }}
                      >
                        <span 
                          className="w-1 h-1 rounded-full transition-colors"
                          style={{ 
                            backgroundColor: '#5e503f66',
                          }}
                        />
                        <span className="group-hover:text-[#5e503f] transition-colors duration-300">
                          {link.name}
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-200 flex items-center gap-2 group hover:translate-x-1"
                        style={{ color: '#2a242099' }}
                      >
                        <span 
                          className="w-1 h-1 rounded-full transition-colors"
                          style={{ 
                            backgroundColor: '#5e503f66',
                          }}
                        />
                        <span className="group-hover:text-[#5e503f] transition-colors duration-300">
                          {link.name}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Top Airlines */}
            <div 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <h3 className="font-semibold text-lg mb-4 relative" style={{ color: '#3d3226' }}>
                Top Airlines
                <span 
                  className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full"
                  style={{
                    background: `linear-gradient(to right, #5e503f, #b8956e)`
                  }}
                />
              </h3>
              <ul className="space-y-2.5">
                {topAirlines.map((airline, index) => (
                  <li 
                    key={airline.name}
                    className={`transition-all duration-500 ease-out ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${400 + index * 50}ms` }}
                  >
                    <Link
                      href={`/airlines/${airline.slug}`}
                      className="text-sm transition-colors duration-200 flex items-center gap-2 group hover:translate-x-1"
                      style={{ color: '#2a242099' }}
                    >
                      <span 
                        className="w-1 h-1 rounded-full transition-colors"
                        style={{ 
                          backgroundColor: '#5e503f66',
                        }}
                      />
                      <span className="group-hover:text-[#5e503f] transition-colors duration-300">
                        {airline.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Legal Links */}
            <div 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="font-semibold text-lg mb-4 relative" style={{ color: '#3d3226' }}>
                Legal
                <span 
                  className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full"
                  style={{
                    background: `linear-gradient(to right, #5e503f, #b8956e)`
                  }}
                />
              </h3>
              <ul className="space-y-2.5">
                {legalLinks.map((link, index) => (
                  <li 
                    key={link.name}
                    className={`transition-all duration-500 ease-out ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${500 + index * 30}ms` }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 flex items-center gap-2 group hover:translate-x-1"
                      style={{ color: '#2a242099' }}
                    >
                      <span 
                        className="w-1 h-1 rounded-full transition-colors"
                        style={{ 
                          backgroundColor: '#5e503f66',
                        }}
                      />
                      <span className="group-hover:text-[#5e503f] transition-colors duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div 
            className={`mt-8 pt-6 border-t transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ borderColor: '#5e503f1A', transitionDelay: '500ms' }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-base" style={{ color: '#3d3226' }}>
                  Subscribe to Our Newsletter
                </h4>
                <p className="text-sm" style={{ color: '#2a242040' }}>
                  Get the best travel deals straight to your inbox
                </p>
              </div>
              <div className="flex w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 sm:w-64 px-4 py-2.5 bg-white/80 border rounded-l-full focus:outline-none transition-colors text-sm focus:border-[#5e503f] focus:ring-2 focus:ring-[#5e503f]/20"
                  style={{
                    borderColor: '#5e503f33',
                    color: '#2a2420',
                  }}
                />
                <button 
                  className="px-5 py-2.5 text-white rounded-r-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm whitespace-nowrap shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 group"
                  style={{
                    background: `linear-gradient(to right, #5e503f, #b8956e)`,
                    boxShadow: `0 10px 15px -3px #5e503f33`
                  }}
                >
                  <Send size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div 
          className={`w-full transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundColor: '#2a242005', 
            borderTop: '1px solid #5e503f1A', 
            borderBottom: '1px solid #5e503f1A',
            transitionDelay: '600ms'
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#5e503f' }} />
              <p className="text-xs leading-relaxed" style={{ color: '#2a242099' }}>
                <span className="font-semibold" style={{ color: '#3d3226' }}>Disclaimer:</span>{" "}
                This Disclaimer governs the use of the website www.Tickettooasia.com (the "Website"), 
                operated by Noam Flyers Inc. ("Company," "we," "us," or "our"), a USA-registered 
                travel company. Tickettooasia.com is an independent online travel agency and is 
                not an airline. We are not affiliated with, owned by, or operated by any airline. 
                Our role is to facilitate travel bookings and provide customers with access to 
                available travel options from airlines and other travel service providers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className={`border-t transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ borderColor: '#5e503f1A', backgroundColor: '#faf7f2CC', transitionDelay: '700ms' }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: '#2a242040' }}>
              <p className="transition-colors duration-300 hover:text-[#5e503f]">
                &copy; {COMPANY.year || new Date().getFullYear()} {COMPANY.name || BRAND.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/privacy-policy" className="transition-colors hover:text-[#5e503f] hover:scale-105 duration-300" style={{ color: '#2a242040' }}>
                  Privacy Policy
                </Link>
                <span className="w-px h-3" style={{ backgroundColor: '#5e503f1A' }} />
                <Link href="/terms-of-service" className="transition-colors hover:text-[#5e503f] hover:scale-105 duration-300" style={{ color: '#2a242040' }}>
                  Terms of Service
                </Link>
                <span className="w-px h-3" style={{ backgroundColor: '#5e503f1A' }} />
                <Link href="/cookies" className="transition-colors hover:text-[#5e503f] hover:scale-105 duration-300" style={{ color: '#2a242040' }}>
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal - Still rendered but not used for Contact Us */}
      <ContactModal 
        isOpen={showModal}
        onClose={closeModal}
        selectedItem={selectedLink}
      />
    </>
  );
}