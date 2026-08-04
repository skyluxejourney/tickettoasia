"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Award,
  Shield,
} from "lucide-react";
import ContactModal from "./ContactModal";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, CONTACT, BRAND } from "@/app/constants";
import { getAllAirlines, AirlineData } from "@/app/airlines/[slug]/constants";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Flights", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  // Get top airlines from the airlinesData - limit to 7 for display
  const allAirlines = getAllAirlines();
  const topAirlines = allAirlines.slice(0, 7).map((airline: AirlineData) => ({
    name: airline.name,
    slug: getSlugFromName(airline.name)
  }));

  // Helper function to generate slug from airline name
  function getSlugFromName(name: string): string {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  const handleLinkClick = (e: React.MouseEvent, linkName: string) => {
    e.preventDefault();
    setSelectedLink(linkName);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLink("");
  };

  return (
    <>
      <footer className="text-[#2a2420]/80" style={{ backgroundColor: '#faf7f2' }}>
        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {/* Brand & About */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src={BRAND.logo}
                    alt={BRAND.name}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-wide font-heading italic" style={{ color: '#3d3226' }}>
                    {BRAND.name}
                  </h2>
                  <p className="text-xs font-medium tracking-wider uppercase" style={{ color: '#5e503f' }}>
                    {BRAND.tagline}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4 max-w-xs" style={{ color: '#2a242099' }}>
                Your trusted partner for unforgettable travel experiences across the world. We help
                you discover the world with ease and comfort.
              </p>
              <div className="flex items-center gap-3 text-sm" style={{ color: '#2a242099' }}>
                <div className="flex items-center gap-1">
                  <Award size={14} style={{ color: '#5e503f' }} />
                  <span>5 Years of Trust</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield size={14} style={{ color: '#5e503f' }} />
                  <span>Secure Booking</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
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
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.name)}
                      className="text-sm transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                      style={{ color: '#2a242099' }}
                    >
                      <span 
                        className="w-1 h-1 rounded-full transition-colors"
                        style={{ 
                          backgroundColor: '#5e503f66',
                        }}
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Airlines */}
            <div>
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
                {topAirlines.map((airline) => (
                  <li key={airline.name}>
                    <Link
                      href={`/airlines/${airline.slug}`}
                      className="text-sm transition-colors duration-200 flex items-center gap-2 group"
                      style={{ color: '#2a242099' }}
                    >
                      <span 
                        className="w-1 h-1 rounded-full transition-colors"
                        style={{ 
                          backgroundColor: '#5e503f66',
                        }}
                      />
                      {airline.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-semibold text-lg mb-4 relative" style={{ color: '#3d3226' }}>
                Contact Us
                <span 
                  className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full"
                  style={{
                    background: `linear-gradient(to right, #5e503f, #b8956e)`
                  }}
                />
              </h3>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3 text-sm transition-colors group" style={{ color: '#2a242099' }}>
                  <Phone size={16} className="flex-shrink-0 mt-0.5 transition-transform" style={{ color: '#5e503f' }} />
                  <span>{CONTACT.phone}</span>
                </li>
                <li className="flex items-start gap-3 text-sm transition-colors group" style={{ color: '#2a242099' }}>
                  <Mail size={16} className="flex-shrink-0 mt-0.5 transition-transform" style={{ color: '#5e503f' }} />
                  <span>{COMPANY.email}</span>
                </li>
                <li className="flex items-start gap-3 text-sm transition-colors group" style={{ color: '#2a242099' }}>
                  <MapPin size={16} className="flex-shrink-0 mt-0.5 transition-transform" style={{ color: '#5e503f' }} />
                  <span>{COMPANY.address}</span>
                </li>
                <li className="flex items-start gap-3 text-sm transition-colors group" style={{ color: '#2a242099' }}>
                  <Clock size={16} className="flex-shrink-0 mt-0.5 transition-transform" style={{ color: '#5e503f' }} />
                  <span>{CONTACT.supportHours}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: '#5e503f1A' }}>
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
                  className="flex-1 sm:w-64 px-4 py-2.5 bg-white/80 border rounded-l-full focus:outline-none transition-colors text-sm"
                  style={{
                    borderColor: '#5e503f33',
                    color: '#2a2420',
                  }}
                />
                <button 
                  className="px-5 py-2.5 text-white rounded-r-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm whitespace-nowrap shadow-lg"
                  style={{
                    background: `linear-gradient(to right, #5e503f, #b8956e)`,
                    boxShadow: `0 10px 15px -3px #5e503f33`
                  }}
                >
                  <Send size={14} />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t" style={{ borderColor: '#5e503f1A', backgroundColor: '#faf7f2CC' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: '#2a242040' }}>
              <p>
                &copy; {COMPANY.year} {COMPANY.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="transition-colors" style={{ color: '#2a242040' }}>
                  Privacy Policy
                </a>
                <span className="w-px h-3" style={{ backgroundColor: '#5e503f1A' }} />
                <a href="#" className="transition-colors" style={{ color: '#2a242040' }}>
                  Terms of Service
                </a>
                <span className="w-px h-3" style={{ backgroundColor: '#5e503f1A' }} />
                <a href="#" className="transition-colors" style={{ color: '#2a242040' }}>
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal}
        onClose={closeModal}
        selectedItem={selectedLink}
      />
    </>
  );
}