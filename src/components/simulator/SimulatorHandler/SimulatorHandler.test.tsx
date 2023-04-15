import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { fake, renderWith } from '@src/devUtils';
import SimulatorHandler from './SimulatorHandler';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import { api } from '@src/infra/api';
import { act } from 'react-dom/test-utils';

describe('SimulatorHandler Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    renderWith(<SimulatorHandler />);
    expect(screen.getByTestId('simulator-handler')).toBeInTheDocument();
  });

  it('should fill the form and submit correctly', async () => {
    const mockUrl = '/busca-cep?estrutura=metalico&valor_conta=100&cep=00000-000';
    const mockAdapter = new MockAdapter(api.instance);
    const mockResponse = fake.rawSolarFeasibilityData;
    mockAdapter.onGet(mockUrl).reply(200, mockResponse);

    renderWith(<SimulatorHandler />);

    const zipCodeField = screen.getByTestId('form-cep-field');
    const accountValueField = screen.getByTestId('form-account-value-field');
    const form = screen.getByTestId('form');

    await act(async () => {
      userEvent.type(accountValueField, '100');
      userEvent.type(zipCodeField, '00000-000');
      fireEvent.submit(form);
    });

    expect(screen.getByTestId('simulator-result')).toBeInTheDocument();
    expect(screen.getByTestId('installments')).toBeInTheDocument();
  });

  it('should fill the form and submit but has error', async () => {
    const mockUrl = '/busca-cep?estrutura=metalico&valor_conta=100&cep=00000-000';
    const mockAdapter = new MockAdapter(api.instance);
    mockAdapter.onGet(mockUrl).reply(500);

    renderWith(<SimulatorHandler />);

    const zipCodeField = screen.getByTestId('form-cep-field');
    const accountValueField = screen.getByTestId('form-account-value-field');
    const form = screen.getByTestId('form');

    await act(async () => {
      userEvent.type(accountValueField, '100');
      userEvent.type(zipCodeField, '00000-000');
      fireEvent.submit(form);
    });

    expect(screen.queryByTestId('simulator-result')).not.toBeInTheDocument();
    expect(screen.queryByTestId('installments')).not.toBeInTheDocument();
  });
});
