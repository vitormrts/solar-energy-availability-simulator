import { type ParsedSolarFeasibilityData, type RawSolarFeasibilityData } from '@src/types/solar.types';

const parseSolarFeasibilityData = (rawData: RawSolarFeasibilityData): ParsedSolarFeasibilityData => {
  const installments = rawData?.parcelamento?.map((installment: any) => ({
    installment: installment.parcelas,
    minTax: installment.taxa_minima,
    maxTax: installment.taxa_maxima,
    minValue: installment.valor_minimo,
    maxValue: installment.valor_maximo
  }));

  return {
    carbonDioxide: rawData?.co2,
    potential: rawData?.potencial,
    economy: rawData?.economia,
    installments,
    potencyCC: rawData?.potencyCC,
    installationValue: rawData?.valor_instalacao,
    inverters: rawData?.qtdeInversores
  };
};

const assembly = {
  parseSolarFeasibilityData
};

export default assembly;
