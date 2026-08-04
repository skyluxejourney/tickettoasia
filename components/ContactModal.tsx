"use client";

import { Phone, Mail, Ticket, PhoneCall, X as XIcon } from "lucide-react";
import { COMPANY, CONTACT } from "@/app/constants";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: string;
}

export default function ContactModal({ isOpen, onClose, selectedItem = "" }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl animate-in slide-in-from-bottom-4 duration-300 border" style={{ borderColor: '#e2e8f0' }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
        >
          <XIcon size={24} />
        </button>

        {/* Header */}
        <div 
          className="rounded-t-2xl p-6 text-white"
          style={{
            background: `linear-gradient(to right, #5e503f, #b8956e)`
          }}
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl">
              <Ticket size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold !text-white">
                Contact Us
              </h3>
              <p className="text-white/80 text-sm">
                Book Your Ticket - Get in touch with us
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <p className="text-sm leading-relaxed" style={{ color: '#2a2420B3' }}>
              Our team is ready to assist you with any questions about{" "}
              <span className="font-semibold" style={{ color: '#5e503f' }}>{selectedItem}</span>.
              Call us now for immediate support!
            </p>
          </div>

          {/* Contact Options */}
          <div className="space-y-3">
            {/* Phone */}
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group border"
              style={{
                backgroundColor: '#faf7f2',
                borderColor: '#e2e8f0',
              }}
            >
              <div 
                className="p-3 rounded-xl text-white shadow-lg transition-shadow"
                style={{
                  background: `linear-gradient(to right, #5e503f, #b8956e)`,
                  boxShadow: `0 10px 15px -3px #5e503f33`
                }}
              >
                <Phone size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs" style={{ color: '#2a242099' }}>Call Us Now</p>
                <p className="text-sm font-semibold transition-colors" style={{ color: '#2a2420' }}>
                  {CONTACT.phone}
                </p>
              </div>
              <PhoneCall size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#b8956e' }} />
            </a>

            {/* Email */}
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group border"
              style={{
                backgroundColor: '#faf7f2',
                borderColor: '#e2e8f0',
              }}
            >
              <div 
                className="p-3 rounded-xl text-white shadow-lg transition-shadow"
                style={{
                  background: `linear-gradient(to right, #5e503f, #b8956e)`,
                  boxShadow: `0 10px 15px -3px #5e503f33`
                }}
              >
                <Mail size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs" style={{ color: '#2a242099' }}>Email Us</p>
                <p className="text-sm font-semibold transition-colors" style={{ color: '#2a2420' }}>
                  {COMPANY.email}
                </p>
              </div>
            </a>
          </div>

          {/* Special Note */}
          <div 
            className="mt-6 p-4 rounded-xl border"
            style={{
              backgroundColor: '#eae0d5',
              borderColor: '#b8956e33'
            }}
          >
            <p className="text-xs text-center" style={{ color: '#2a2420B3' }}>
              {CONTACT.supportHours} for all your travel needs
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full mt-4 font-semibold py-3 rounded-xl transition-colors border"
            style={{
              backgroundColor: '#faf7f2',
              color: '#2a2420',
              borderColor: '#e2e8f0'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}