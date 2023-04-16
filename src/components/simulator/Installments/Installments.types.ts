import { type ParsedSolarFeasibilityData } from '@src/types/solar.types';

export interface InstallmentsProps {
  testId?: string
  installments?: ParsedSolarFeasibilityData['installments']
};
