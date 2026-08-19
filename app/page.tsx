// app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import TravelDeals from "@/components/TravelDeals";
import ExclusiveDeals from "@/components/ExclusiveDeals";
import Whypaymore from "@/components/Whypaymoresection";
import AsiaDestinationsCarousel from "@/components/AsiaDestinationsCarousel";
import { COMPANY, CONTACT } from "./constants"


const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": COMPANY.name,
  "url": "https://tickettoasia.com",
  "logo": "https://tickettoasia.com/logo/ticketlogo.png",
  "description": "Book cheap flights, luxury hotels, and customized holiday packages to Asia. Best deals on Singapore, Bali, Dubai, Maldives & more.",
  "email": CONTACT.email,
  "telephone": CONTACT.phone,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110075",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": CONTACT.phone,
    "contactType": "customer service",
    "availableLanguage": ["English"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "opens": "00:00",
      "closes": "23:59",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday", "Sunday"
      ]
    }
  },
  "priceRange": "$$",
  "paymentAccepted": ["Credit Card", "Debit Card", "Bank Transfer"],
  "currenciesAccepted": ["USD", "INR", "EUR"],
 
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
        />
        <Hero />
        <WhyChooseUs />
        <TravelDeals />
        <ExclusiveDeals />
        <Whypaymore />
        <AsiaDestinationsCarousel />
      </main>
      <Footer />
    </>
  );
}