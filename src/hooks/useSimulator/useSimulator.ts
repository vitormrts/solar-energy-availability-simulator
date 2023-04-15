/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useMemo, useState } from 'react';
import { type Keys } from './useSimulator.types';
import { validators } from '@src/utils';
import { solarServices } from '@src/infra/services';

const useSimulator = () => {
  const defaultFormState = useMemo(
    () => ({
      zipCode: {
        value: '11750-000',
        errorMessage: ''
      },
      accountValue: {
        value: '11000',
        errorMessage: ''
      },
      structure: {
        value: 'metalico',
        errorMessage: ''
      }
    }),
    []
  );
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(defaultFormState);

  const validateField = (key: Keys, value: string) => {
    const rules = {
      zipCode: validators.zipCode(value),
      structure: validators.required(value),
      accountValue: validators.required(value)
    };

    const errorMessages = {
      zipCode: 'Erro zipcode',
      structure: 'Erro structure',
      accountValue: 'Erro account value'
    };

    const isValid = rules[key];
    return isValid ? '' : errorMessages[key];
  };

  const onChange = (key: Keys, value: string) => {
    let newFormData = { ...formData };

    newFormData = {
      ...newFormData,
      [key]: {
        value,
        errorMessage: validateField(key, value)
      }
    };

    setFormData(newFormData);
    return newFormData;
  };

  const getEnergyFeasibility = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    try {
      const params = {
        accountValue: formData.accountValue.value,
        zipCode: formData.zipCode.value,
        structure: formData.structure.value
      };
      const result = await solarServices.get.energyFeasibility(params);
      return result;
    } catch (error: any) {

    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    getEnergyFeasibility,
    loading,
    onChange,
    registerModalFormData: formData,
    setFormData
  };
};

export default useSimulator;
