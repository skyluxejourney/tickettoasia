// app/contact/page.tsx
"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ZoomIn,
  ZoomOut,
  Maximize
} from "lucide-react";
import { CONTACT } from "@/app/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [mapZoom, setMapZoom] = useState(15);

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 1, 20));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 1, 1));
  };

  const handleResetZoom = () => {
    setMapZoom(15);
  };

  const mapSrc = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(CONTACT.address)}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=${mapZoom}`;

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white pt-28 pb-12">
        <div className="w-full px-4 sm:px-6 lg:px-20">
          {/* Header Section */}
          <div className="max-w-7xl mx-auto border-b pb-6 mb-8" style={{ borderColor: '#eae0d5' }}>
            <h1 className="text-3xl sm:text-4xl font-light mb-2 tracking-tight" style={{ color: '#3d3226' }}>
              Get In <span className="font-bold" style={{ color: '#5e503f' }}>Touch</span>
            </h1>
            <p className="text-sm max-w-xl font-light" style={{ color: '#2a242099' }}>
              Have questions about your next adventure? We're here to help you plan the perfect journey.
            </p>
          </div>

          {/* Contact Information Grid - 4 Cards */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Phone */}
            <div className="p-4 hover:bg-[#f5f0ea] transition-colors duration-300 flex flex-col items-center text-center" style={{ backgroundColor: '#faf7f2' }}>
              <div className="w-12 h-12 flex items-center justify-center mb-3" style={{ backgroundColor: '#5e503f' }}>
                <Phone size={20} className="text-white" />
              </div>
              <h3 className="text-[9px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#2a242040' }}>
                Phone
              </h3>
              <a 
                href={`tel:${CONTACT.phoneRaw}`} 
                className="text-xs font-medium hover:transition-colors" style={{ color: '#2a2420' }}
              >
                {CONTACT.phone}
              </a>
            </div>

            {/* Email */}
            <div className="p-4 hover:bg-[#f5f0ea] transition-colors duration-300 flex flex-col items-center text-center" style={{ backgroundColor: '#faf7f2' }}>
              <div className="w-12 h-12 flex items-center justify-center mb-3" style={{ backgroundColor: '#5e503f' }}>
                <Mail size={20} className="text-white" />
              </div>
              <h3 className="text-[9px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#2a242040' }}>
                Email
              </h3>
              <a 
                href={`mailto:${CONTACT.email}`} 
                className="text-xs font-medium hover:transition-colors break-all w-full" style={{ color: '#2a2420' }}
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Address */}
            <div className="p-4 hover:bg-[#f5f0ea] transition-colors duration-300 flex flex-col items-center text-center" style={{ backgroundColor: '#faf7f2' }}>
              <div className="w-12 h-12 flex items-center justify-center mb-3" style={{ backgroundColor: '#5e503f' }}>
                <MapPin size={20} className="text-white" />
              </div>
              <h3 className="text-[9px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#2a242040' }}>
                Address
              </h3>
              <p className="text-xs font-medium leading-relaxed" style={{ color: '#2a2420' }}>
                {CONTACT.address}
              </p>
            </div>

            {/* Support Hours */}
            <div className="p-4 hover:bg-[#f5f0ea] transition-colors duration-300 flex flex-col items-center text-center" style={{ backgroundColor: '#faf7f2' }}>
              <div className="w-12 h-12 flex items-center justify-center mb-3" style={{ backgroundColor: '#5e503f' }}>
                <Clock size={20} className="text-white" />
              </div>
              <h3 className="text-[9px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#2a242040' }}>
                Support Hours
              </h3>
              <p className="text-xs font-medium" style={{ color: '#2a2420' }}>
                {CONTACT.supportHours}
              </p>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="max-w-7xl mx-auto p-6 text-white flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8" style={{ backgroundColor: '#3d3226' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-base font-bold">
                24/7
              </div>
              <span className="text-xs font-light uppercase tracking-wider opacity-70">Support</span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-base font-bold">
                100%
              </div>
              <span className="text-xs font-light uppercase tracking-wider opacity-70">Satisfaction</span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-base font-bold">
                ✓
              </div>
              <span className="text-xs font-light uppercase tracking-wider opacity-70">Verified</span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-base font-bold">
                ★
              </div>
              <span className="text-xs font-light uppercase tracking-wider opacity-70">Premium</span>
            </div>
          </div>

          {/* Google Maps */}
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold tracking-wider uppercase flex items-center gap-2" style={{ color: '#3d3226' }}>
                <MapPin size={14} style={{ color: '#5e503f' }} />
                Find Us
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 text-white hover:opacity-80 transition-colors"
                  style={{ backgroundColor: '#5e503f' }}
                  title="Zoom Out"
                >
                  <ZoomOut size={14} />
                </button>
                <span className="text-[10px] font-medium min-w-[30px] text-center" style={{ color: '#2a242060' }}>
                  {mapZoom}x
                </span>
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 text-white hover:opacity-80 transition-colors"
                  style={{ backgroundColor: '#5e503f' }}
                  title="Zoom In"
                >
                  <ZoomIn size={14} />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="p-1.5 transition-colors"
                  style={{ backgroundColor: '#eae0d5', color: '#5e503f' }}
                  title="Reset Zoom"
                >
                  <Maximize size={14} />
                </button>
                <div className="w-px h-6" style={{ backgroundColor: '#e2e8f0' }} />
                <a 
                  href={`https://www.google.com/maps/search/${encodeURIComponent(CONTACT.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-medium hover:transition-colors"
                  style={{ color: '#5e503f' }}
                >
                  View on Maps →
                </a>
              </div>
            </div>
            <div className="h-64 sm:h-80 md:h-96 overflow-hidden relative" style={{ backgroundColor: '#eae0d5' }}>
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
              />
            </div>
            <div className="mt-1 text-[9px] text-right" style={{ color: '#2a242030' }}>
              Use + and - buttons to zoom, or scroll on the map
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}