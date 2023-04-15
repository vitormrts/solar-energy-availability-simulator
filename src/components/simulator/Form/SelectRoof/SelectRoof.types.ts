import { type Keys } from '@src/hooks/useSimulator/useSimulator.types';

export interface SelectRoofProps {
  testId?: string
  onChange?: (key: Keys, value: string) => void
  selectedRoof?: string
};
