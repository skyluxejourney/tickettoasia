// Company Information
export const COMPANY = {
  name: "Ticket to Asia",
  domain: "tickettoasia.com",
  email: "bookings@tickettoasia.com",
  phone: "+1-8662286373",
  phoneRaw: "18662286373",
  address: "123 Travel Street, New York, USA",
  year: new Date().getFullYear(),
};

// Social Media Links
export const SOCIAL = {
  facebook: "https://facebook.com/tickettoasia",
  twitter: "https://twitter.com/tickettoasia",
  instagram: "https://instagram.com/tickettoasia",
  youtube: "https://youtube.com/tickettoasia",
};

// Contact Information
export const CONTACT = {
  phone: COMPANY.phone,
  phoneRaw: COMPANY.phoneRaw,
  email: COMPANY.email,
  address: COMPANY.address,
  supportHours: "24/7 Customer Support",
};

// Brand Assets
export const BRAND = {
  name: COMPANY.name,
  tagline: "Travel & Adventures",
  logo: "/logo/ticketlogo.png", // Consider updating logo path if you have a new logo
  favicon: "/favicon.ico",
};

// Default Meta Information
export const META = {
  title: `${COMPANY.name} | Luxury Travel & Holiday Packages`,
  description: `Book luxury holiday packages, flights, hotels and customized trips with ${COMPANY.name}.`,
  keywords: [
    COMPANY.name,
    "travel agency",
    "holiday packages",
    "flights",
    "hotels",
    "Tokyo package",
    "Bangkok package",
    "Singapore package",
  ],
};

export default {
  COMPANY,
  SOCIAL,
  CONTACT,
  BRAND,
  META,
};