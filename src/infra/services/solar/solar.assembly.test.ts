import { fake } from '@src/devUtils';
import solarAssembly from './solar.assembly';

describe('parseSolarFeasibilityData - Infra', () => {
  it('should return parsed solar feasibility data', () => {
    const result = solarAssembly.parseSolarFeasibilityData(fake.rawSolarFeasibilityData);
    expect(result).toEqual(fake.parsedSolarFeasibilityData);
  });

  it('should return undefined when rawData is null', () => {
    const result = solarAssembly.parseSolarFeasibilityData(null);
    expect(result).toEqual(fake.emptyParsedSolarFeasibilityData);
  });
});
