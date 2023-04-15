/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useMemo, useState } from 'react';
import { type Keys } from './useSimulator.types';
import { validators } from '@src/utils';
import { solarServices } from '@src/infra/services';
import { type Structures } from '@src/types/solar.types';
import { toast } from 'react-toastify';

const useSimulator = () => {
  const defaultFormState = useMemo(
    () => ({
      zipCode: {
        value: '',
        errorMessage: ''
      },
      accountValue: {
        value: '',
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
      structure: !validators.empty(value),
      accountValue: !validators.empty(value) && !(Number(value) === 0)
    };

    const errorMessages = {
      zipCode: 'Insira um CEP válido',
      structure: 'Selecione uma estrutura',
      accountValue: 'Insira um valor de conta válido'
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
    const params = {
      accountValue: formData.accountValue.value,
      zipCode: formData.zipCode.value,
      structure: formData.structure.value as Structures
    };
    const { data, success } = await solarServices.get.energyFeasibility(params);
    setLoading(false);

    if (!success) {
      toast.error('Ocorreu um erro ao buscar a viabilidade de energia solar. Tente novamente.');
    }
    return data;
  };

  const allowedToContinue = () => {
    const keys: Keys[] = ['accountValue', 'structure', 'zipCode'];
    const hasError = keys.find((key) => validateField(key, formData[key].value));
    return !hasError;
  };

  return {
    allowedToContinue,
    formData,
    getEnergyFeasibility,
    loading,
    onChange,
    registerModalFormData: formData,
    setFormData
  };
};

export default useSimulator;
