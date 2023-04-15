import { fake } from '@src/devUtils';
import { api } from '@src/infra/api';
import MockAdapter from 'axios-mock-adapter';
import solarServices from './solar.services';

describe('solarServices - Infra', () => {
  it('should request get solar energy feasibility correctly', async () => {
    const mockUrl = '/busca-cep?estrutura=ceramico&valor_conta=100&cep=00000-000';
    const mockAdapter = new MockAdapter(api.instance);
    const mockResponse = fake.rawSolarFeasibilityData;
    mockAdapter.onGet(mockUrl).reply(200, mockResponse);

    const response = await solarServices.get.energyFeasibility({
      accountValue: '100',
      structure: 'ceramico',
      zipCode: '00000-000'
    });
    expect(response.data).toMatchObject(fake.parsedSolarFeasibilityData);
    expect(response.success).toBe(true);
  });

  it('should request get solar energy feasibility and return false when error', async () => {
    const mockUrl = '/busca-cep?estrutura=ceramico&valor_conta=100&cep=00000-000';
    const mockAdapter = new MockAdapter(api.instance);
    mockAdapter.onGet(mockUrl).reply(500);

    const response = await solarServices.get.energyFeasibility({
      accountValue: '100',
      structure: 'ceramico',
      zipCode: '00000-000'
    });

    expect(response.data).toBeUndefined();
    expect(response.success).toBe(false);
  });
});
