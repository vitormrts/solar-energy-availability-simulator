import { renderHook } from '@testing-library/react';
import type React from 'react';
import { act } from 'react-dom/test-utils';
import useSimulator from './useSimulator';

const Provider = ({ children }: { children: React.ReactNode }): any => (
  children
);

const mockData = {
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
};

describe('useSimulator - Hook', () => {
  it('should receive form data', () => {
    const { result } = renderHook(() => useSimulator(), {
      wrapper: Provider
    });
    const instance = result.current;

    expect(instance.formData).toMatchObject(mockData);
  });

  it('should receive onChange with error', () => {
    const { result } = renderHook(() => useSimulator(), {
      wrapper: Provider
    });
    const instance = result.current;

    let newData = null;

    act(() => {
      newData = instance.onChange('accountValue', '');
    });

    expect(newData).toMatchObject({
      ...mockData,
      accountValue: {
        value: '',
        errorMessage: 'Insira um valor de conta válido'
      }
    });
  });

  it('should receive onChange without error', () => {
    const { result } = renderHook(() => useSimulator(), {
      wrapper: Provider
    });
    const instance = result.current;

    let newData = null;

    act(() => {
      newData = instance.onChange('accountValue', '100');
    });

    expect(newData).toMatchObject({
      ...mockData,
      accountValue: {
        value: '100',
        errorMessage: ''
      }
    });
  });

  it('should receive allowedToContinue', () => {
    const { result } = renderHook(() => useSimulator(), {
      wrapper: Provider
    });
    const instance = result.current;
    expect(instance.allowedToContinue()).toBe(false);
  });

  it('should receive loading', () => {
    const { result } = renderHook(() => useSimulator(), {
      wrapper: Provider
    });
    const instance = result.current;
    expect(instance.loading).toBe(false);
  });

  it('should submit', () => {
    const { result } = renderHook(() => useSimulator(), {
      wrapper: Provider
    });
    const instance = result.current;
    const handleSubmit = async (event: React.FormEvent) => await instance.getEnergyFeasibility(event);

    expect(handleSubmit).toEqual(expect.any(Function));
  });
});
