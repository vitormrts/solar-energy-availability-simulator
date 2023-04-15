import { type ParsedSolarFeasibilityData } from '@src/types/solar.types';

export interface GetSolarFeasibility {
  success: boolean
  data?: ParsedSolarFeasibilityData
}
