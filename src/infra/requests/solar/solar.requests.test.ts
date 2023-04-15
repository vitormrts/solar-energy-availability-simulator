import { fake } from '@src/devUtils';
import { api } from '@src/infra/api';
import MockAdapter from 'axios-mock-adapter';
import solarRequests from './solar.requests';

describe('solarRequests - Infra', () => {
  it('should request get solar energy feasibility correctly', async () => {
    const mockUrl = '/busca-cep?estrutura=ceramico&valor_conta=100&cep=00000-000';
    const mockAdapter = new MockAdapter(api.instance);
    const mockResponse = fake.rawSolarFeasibilityData;
    mockAdapter.onGet(mockUrl).reply(200, mockResponse);

    const response = await solarRequests.get.energyFeasibility({
      accountValue: '100',
      structure: 'ceramico',
      zipCode: '00000-000'
    });
    expect(response.data).toMatchObject(fake.rawSolarFeasibilityData);
  });

  it('should request get solar energy feasibility and return false when error', async () => {
    const mockUrl = '/busca-cep?estrutura=ceramico&valor_conta=100&cep=00000-000';
    const mockAdapter = new MockAdapter(api.instance);
    mockAdapter.onGet(mockUrl).reply(500);

    const response = await solarRequests.get.energyFeasibility({
      accountValue: '100',
      structure: 'ceramico',
      zipCode: '00000-000'
    })
      .then(data => data)
      .catch(() => false);

    expect(response).toBeFalsy();
  });
});
