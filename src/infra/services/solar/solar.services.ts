import { solarRequests } from '@src/infra/requests';
import { type GetSolarFeasibilityProps } from '@src/types/solar.types';
import solarAssembly from './solar.assembly';
import { type GetSolarFeasibility } from './solar.services.types';

const getSolarEnergyFeasibility = async ({ structure, accountValue, zipCode }: GetSolarFeasibilityProps): Promise<GetSolarFeasibility> => {
  try {
    const response = await solarRequests.get.energyFeasibility({ structure, accountValue, zipCode });
    const solarEnergyFeasibilityData = solarAssembly.parseSolarFeasibilityData(response?.data);
    return { success: true, data: solarEnergyFeasibilityData };
  } catch (error) {
    return { success: false };
  }
};

const services = {
  get: {
    energyFeasibility: getSolarEnergyFeasibility
  }
};

export default services;
