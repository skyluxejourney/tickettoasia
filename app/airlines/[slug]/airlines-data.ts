// app/airlines/[slug]/airlines-data.ts

export interface AirlineInfo {
  name: string;
  code: string;
  description: string;
  hub: string;
  founded: string;
  fleet: string;
  destinations: string;
  alliance?: string;
  website?: string;
  rating?: number;
  reviews?: number;
  highlights?: string[];
  phoneNumber: string;
  email?: string;
}

export interface FareClass {
  name: string;
  description: string;
  flexibility: string;
  icon?: string;
}

export interface ContentSection {
  paragraphs: string[];
  listItems: string[];
  closing: string;
}

export interface ChangeMethod {
  title: string;
  description: string;
  icon?: string;
}

export interface CabinClass {
  name: string;
  description: string;
  features: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Disclaimer {
  text: string;
  phone: string;
}

export interface AirlineData {
  slug: string;
  airline: AirlineInfo;
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaPhone: string;
    disclaimer: string;
  };
  introduction: {
    title: string;
    content: ContentSection;
  };
  canIChange: {
    title: string;
    content: ContentSection;
  };
  changePolicy: {
    title: string;
    subtitle: string;
    fareClasses: FareClass[];
    closing: string;
  };
  howToChange: {
    title: string;
    subtitle: string;
    methods: ChangeMethod[];
  };
  sameDayChange: {
    title: string;
    content: {
      paragraphs: string[];
      requirements: string[];
      closing: string;
    };
  };
  reschedule: {
    title: string;
    content: {
      paragraphs: string[];
      availableFor: string[];
      closing: string;
    };
  };
  dateChange: {
    title: string;
    content: {
      paragraphs: string[];
      process: string[];
      closing: string;
    };
  };
  cancellation: {
    title: string;
    content: {
      paragraphs: string[];
      factors: string[];
      closing: string;
    };
  };
  refund: {
    title: string;
    content: {
      paragraphs: string[];
      factors: string[];
      closing: string;
    };
  };
  bookingModification: {
    title: string;
    content: {
      paragraphs: string[];
      modifications: string[];
      closing: string;
    };
  };
  cabinClasses: {
    title: string;
    classes: CabinClass[];
  };
  whyChoose: {
    title: string;
    content: {
      paragraphs: string[];
      services: string[];
      closing: string;
    };
  };
  contactDirectly: {
    title: string;
    paragraphs: string[];
  };
  faqs: FAQ[];
  disclaimer: Disclaimer;
}

export type AirlinesDataMap = Record<string, AirlineData>;