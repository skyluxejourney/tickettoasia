// app/airlines/[slug]/data/index.ts

import type { AirlineData } from '../airlines-data';
import { singaporeAirlinesData } from './singapore-airlines';
import { cathayPacificData } from './cathay-airways';
import { koreanAirData } from './korean-airlines';
import { philippineAirlinesData } from './philippine-airlines';

export const airlinesDataMap: Record<string, AirlineData> = {
  'singapore-airlines': singaporeAirlinesData,
  'cathay-pacific': cathayPacificData,
  'korean-air': koreanAirData,
  'philippine-airlines': philippineAirlinesData,
};

export {
  singaporeAirlinesData,
  cathayPacificData,
  koreanAirData,
  philippineAirlinesData,
};

export default airlinesDataMap;