import { type ParsedSolarFeasibilityData, type RawSolarFeasibilityData } from '@src/types/solar.types';

const parseSolarFeasibilityData = (rawData: RawSolarFeasibilityData): ParsedSolarFeasibilityData => {
  const installments = rawData?.parcelamento?.map((installment) => ({
    installment: installment.parcelas,
    minTax: installment.taxa_minina,
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
    inverters: rawData?.qtdeInversores,
    integrators: rawData?.integradores_regiao
  };
};

const assembly = {
  parseSolarFeasibilityData
};

export default assembly;
