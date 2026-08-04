"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, HelpCircle } from "lucide-react";
import { airlinesData } from "../constants";

interface AirlineFAQProps {
  airlineName: string;
}

export default function AirlineFAQ({ airlineName }: AirlineFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Find the airline data from constants
  const airlineEntry = Object.entries(airlinesData).find(
    ([_, data]) => data.name === airlineName
  );
  
  const airline = airlineEntry ? airlineEntry[1] : null;
  
  // Get phone number from constants or use default
  const phoneNumber = airline?.phoneNumber || "+1-888-845-0220";
  
  // Use FAQs from constants if available, otherwise use fallback
  const faqs = airline?.faqs || [
    {
      question: `How do I change my ${airlineName} flight?`,
      answer: `You can change your ${airlineName} flight online through the "Manage Booking" section on the airline's website. Simply enter your confirmation number and last name to access your reservation, then select "Change Flight" and choose your new travel dates. You can also call ${airlineName} customer service at ${phoneNumber} for assistance with changes. Changes made within 24 hours of booking are typically free.`,
    },
    {
      question: `What is the ${airlineName} cancellation policy?`,
      answer: `${airlineName} cancellation policy varies by fare type. Fully refundable tickets are eligible for a full refund. Non-refundable tickets may receive an eCredit for future travel, valid for one year. Cancellations made within 24 hours of booking are eligible for a full refund regardless of fare type. Refunds typically take 7-10 business days to process.`,
    },
    {
      question: `Can I reschedule my ${airlineName} flight without penalty?`,
      answer: `Yes, ${airlineName} offers rescheduling options with no change fees for tickets booked in Business or First Class. Main Cabin tickets may have a change fee but no fare difference if you reschedule to a lower-priced flight. Basic Economy tickets cannot be rescheduled without paying the fare difference. Elite status members may receive complimentary changes.`,
    },
    {
      question: `How do I correct a name error on my ${airlineName} ticket?`,
      answer: `Minor name corrections (typos up to 3 characters) can be corrected for free on ${airlineName} within 24 hours of booking. For major name changes, you may need to pay a fee or reissue the ticket. Contact ${airlineName} customer service at ${phoneNumber} for name correction assistance.`,
    },
    {
      question: `What fees apply for changing my ${airlineName} flight?`,
      answer: `Change fees on ${airlineName} vary based on your fare type, route, and how close to departure you make the change. Basic Economy tickets typically have the highest change fees, while Business and First Class tickets often have no change fees. Same-day changes usually have a lower fee than changes made days before departure.`,
    },
    {
      question: `How do I get a refund from ${airlineName}?`,
      answer: `To request a refund from ${airlineName}, visit the "Manage Booking" section on their website and select "Cancel Flight" or "Request Refund". You can also call ${airlineName} customer service at ${phoneNumber} to initiate the refund process. Refunds for eligible tickets are processed within 7-10 business days.`,
    },
    {
      question: `Can I change my ${airlineName} flight online?`,
      answer: `Yes, most ${airlineName} flights can be changed online through the "Manage Booking" portal on the airline's website. You'll need your confirmation number and last name. Online changes are available up to 1 hour before departure for most flights. Some complex bookings may require calling customer service.`,
    },
    {
      question: `What happens if ${airlineName} cancels my flight?`,
      answer: `If ${airlineName} cancels your flight, you are entitled to a full refund to your original form of payment. You can also choose to rebook on the next available flight at no additional cost. ${airlineName} will typically notify you of cancellations via email or text message. For immediate assistance, call ${phoneNumber}.`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-4 sm:py-6 bg-white border-t" style={{ borderColor: '#e2e8f0' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Left Aligned */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5" style={{ color: '#5e503f' }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#5e503f' }}>
              FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#3d3226' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-sm mt-1" style={{ color: '#2a242099' }}>
            Find answers to the most common questions about {airlineName} flights
          </p>
          <div 
            className="w-12 h-0.5 mt-2"
            style={{
              background: `linear-gradient(to right, #5e503f, #b8956e)`
            }}
          />
        </div>

        {/* FAQ List - Full Width */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`
                border transition-all duration-300 overflow-hidden
                ${openIndex === index ? 'shadow-md' : 'hover:shadow-sm'}
              `}
              style={{
                backgroundColor: '#faf7f2',
                borderColor: openIndex === index ? '#b8956e' : '#e2e8f0'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-5 py-3 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-sm sm:text-base font-semibold flex-1" style={{ color: '#3d3226' }}>
                  {faq.question}
                </span>
                <span className={`
                  flex-shrink-0 w-7 h-7 flex items-center justify-center
                  transition-all duration-300
                  ${openIndex === index 
                    ? 'text-white' 
                    : ''
                  }
                `}
                style={{
                  backgroundColor: openIndex === index ? '#5e503f' : '#eae0d5',
                  color: openIndex === index ? 'white' : '#5e503f'
                }}>
                  {openIndex === index ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-5 pb-4">
                  <div className="pt-3 border-t" style={{ borderColor: '#e2e8f0' }}>
                    <p className="text-sm leading-relaxed" style={{ color: '#2a2420B3' }}>
                      {faq.answer}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs" style={{ color: '#5e503f' }}>
                      <Phone size={14} />
                      <span>Need help? Call us: </span>
                      <a 
                        href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                        className="font-semibold transition-colors"
                        style={{ color: '#5e503f' }}
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 text-left">
          <p className="text-sm" style={{ color: '#2a242099' }}>
            Still have questions? Our travel experts are here to help you 24/7
          </p>
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 text-white font-semibold transition-all duration-300 shadow-lg"
            style={{
              background: `linear-gradient(to right, #5e503f, #b8956e)`,
              boxShadow: `0 10px 15px -3px #5e503f33`
            }}
          >
            <Phone size={16} />
            Call Us Now: {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
}