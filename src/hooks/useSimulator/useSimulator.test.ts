import { fake } from '@src/devUtils';
import { api } from '@src/infra/api';
import { renderHook } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
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
  it('should receive form data correctly', () => {
    const { result } = renderHook(() => useSimulator(), {
      wrapper: Provider
    });
    const instance = result.current;

    expect(instance.formData).toMatchObject(mockData);
  });

  it('should receive onChange with error correctly', () => {
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

  it('should receive onChange without error correctly', () => {
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

  it('should receive allowedToContinue correctly', () => {
    const { result } = renderHook(() => useSimulator(), {
      wrapper: Provider
    });
    const instance = result.current;
    expect(instance.allowedToContinue()).toBe(false);
  });

  it('should receive loading correctly', () => {
    const { result } = renderHook(() => useSimulator(), {
      wrapper: Provider
    });
    const instance = result.current;
    expect(instance.loading).toBe(false);
  });

  it('should submit correctly', async () => {
    const mockAdapter = new MockAdapter(api.instance);
    const mockResponse = fake.rawSolarFeasibilityData;
    mockAdapter.onGet().reply(200, mockResponse);

    const { result } = renderHook(() => useSimulator(), {
      wrapper: Provider
    });
    const instance = result.current;

    await act(async () => {
      const handleSubmit = await instance.getEnergyFeasibility();
      expect(handleSubmit).toMatchObject(fake.parsedSolarFeasibilityData);
    });
  });
});
