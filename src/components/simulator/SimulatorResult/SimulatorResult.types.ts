import { type ParsedSolarFeasibilityData } from '@src/types/solar.types';

export interface SimulatorResultProps {
  testId?: string
  title?: string
  description?: string
  results?: ParsedSolarFeasibilityData
};
