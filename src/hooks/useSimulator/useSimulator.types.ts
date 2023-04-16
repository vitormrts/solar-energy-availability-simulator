import { type ParsedSolarFeasibilityData, type Structures } from '@src/types/solar.types';
import type React from 'react';

export type Keys = 'zipCode' | 'structure' | 'accountValue';

export interface FormData {
  zipCode: {
    value: string
    errorMessage: string
  }
  accountValue: {
    errorMessage?: string
    value?: string
  }
  structure: {
    errorMessage?: string
    value?: Structures
  }

}

export interface UseSimulator {
  allowedToContinue: () => boolean
  formData: FormData
  getEnergyFeasibility: (event?: React.FormEvent) => Promise<ParsedSolarFeasibilityData | undefined>
  loading: boolean
  onChange: (key: Keys, value: string) => FormData
}
