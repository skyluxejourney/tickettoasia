// app/airlines/[slug]/constants.ts

import { airlinesDataMap } from './data';
import type { AirlineData } from './airlines-data';

// Export types
export type { AirlineData };

// Export the data map
export { airlinesDataMap };

// Helper function to get airline by slug
export const getAirlineBySlug = (slug: string): AirlineData | undefined => {
  return airlinesDataMap[slug];
};

// Get all airline slugs
export const getAirlineSlugs = (): string[] => {
  return Object.keys(airlinesDataMap);
};

// Get all airlines
export const getAllAirlines = (): AirlineData[] => {
  return Object.values(airlinesDataMap);
};

// Export individual airlines for convenience
export const singaporeAirlines = airlinesDataMap['singapore-airlines'];
export const cathayPacific = airlinesDataMap['cathay-pacific'];
export const koreanAir = airlinesDataMap['korean-air'];
export const philippineAirlines = airlinesDataMap['philippine-airlines'];

// Default export
export default airlinesDataMap;