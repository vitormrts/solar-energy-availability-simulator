import { type ParsedSolarFeasibilityData } from '@src/types/solar.types';

export interface InstallmentsProps {
  testId?: string
  description?: string
  title?: string
  installments?: ParsedSolarFeasibilityData['installments']
};
