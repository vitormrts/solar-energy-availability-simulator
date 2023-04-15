import { type Keys } from '@src/hooks/useSimulator/useSimulator.types';
import type React from 'react';

export interface FormProps {
  testId?: string
  onChange?: (key: Keys, value: string) => void
  formData?: any
  onSubmit?: (event: React.FormEvent) => void
  loading?: boolean
};
