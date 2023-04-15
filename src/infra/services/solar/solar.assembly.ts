import { type ParsedSolarFeasibilityData, type RawSolarFeasibilityData } from '@src/types/solar.types';

const parseSolarFeasibilityData = (rawData: RawSolarFeasibilityData | null): ParsedSolarFeasibilityData => {
  const installments = rawData?.parcelamento?.map((installment) => ({
    installment: installment.parcelas,
    minTax: installment.taxa_minina,
    maxTax: installment.taxa_maxima,
    minValue: installment.valor_minimo,
    maxValue: installment.valor_maximo
  }));

  return {
    carbonDioxide: rawData?.co2 || 0,
    potential: rawData?.potencial || '',
    economy: rawData?.economia || 0,
    installments: installments || [],
    potencyCC: rawData?.potencyCC || 0,
    installationValue: rawData?.valor_instalacao || 0,
    inverters: rawData?.qtdeInversores || 0,
    integrators: rawData?.integradores_regiao || 0
  };
};

const assembly = {
  parseSolarFeasibilityData
};

export default assembly;
