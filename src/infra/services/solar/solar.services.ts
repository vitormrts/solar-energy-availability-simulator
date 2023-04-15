import { solarRequests } from '@src/infra/requests';
import { type GetSolarFeasibilityProps, type ParsedSolarFeasibilityData } from '@src/types/solar.types';
import solarAssembly from './solar.assembly';

const getSolarEnergyFeasibility = async ({ structure, accountValue, zipCode }: GetSolarFeasibilityProps): Promise<ParsedSolarFeasibilityData> => {
  const response = await solarRequests.get.energyFeasibility({ structure, accountValue, zipCode });
  const solarEnergyFeasibilityData = solarAssembly.parseSolarFeasibilityData(response?.data);
  return solarEnergyFeasibilityData;
};

const services = {
  get: {
    energyFeasibility: getSolarEnergyFeasibility
  }
};

export default services;
