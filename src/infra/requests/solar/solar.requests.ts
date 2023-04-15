import { api } from '@src/infra/api';
import { type GetSolarFeasibilityProps, type RawSolarFeasibilityData } from '@src/types/solar.types';
import { type AxiosResponse } from 'axios';

const getSolarEnergyFeasibility = async ({ structure, accountValue, zipCode }: GetSolarFeasibilityProps): Promise<AxiosResponse<RawSolarFeasibilityData>> =>
  await api.get({ url: `/busca-cep?estrutura=${structure}&valor_conta=${accountValue}&cep=${zipCode}` });

const requests = {
  get: {
    energyFeasibility: getSolarEnergyFeasibility
  }
};

export default requests;
