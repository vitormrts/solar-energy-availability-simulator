import { type ParsedSolarFeasibilityData, type RawSolarFeasibilityData } from '@src/types/solar.types';

const selectOptions = [
  { label: 'First default label' },
  { label: 'Second default label' }
];

const rawSolarFeasibilityData: RawSolarFeasibilityData = {
  parcelamento: [
    {
      parcelas: 12,
      taxa_minina: 0.5,
      taxa_maxima: 0.8,
      valor_minimo: 1000,
      valor_maximo: 5000
    },
    {
      parcelas: 24,
      taxa_minina: 0.3,
      taxa_maxima: 0.6,
      valor_minimo: 5000,
      valor_maximo: 10000
    }
  ],
  co2: 500,
  potencial: 'Very Good',
  economia: 2000,
  potencyCC: 300,
  valor_instalacao: 15000,
  qtdeInversores: 5,
  integradores_regiao: 1
};

const parsedSolarFeasibilityData: ParsedSolarFeasibilityData = {
  carbonDioxide: 500,
  potential: 'Very Good',
  economy: 2000,
  installments: [
    {
      installment: 12,
      minTax: 0.5,
      maxTax: 0.8,
      minValue: 1000,
      maxValue: 5000
    },
    {
      installment: 24,
      minTax: 0.3,
      maxTax: 0.6,
      minValue: 5000,
      maxValue: 10000
    }
  ],
  potencyCC: 300,
  installationValue: 15000,
  inverters: 5,
  integrators: 1
};

const emptyParsedSolarFeasibilityData: ParsedSolarFeasibilityData = {
  carbonDioxide: 0,
  potential: '',
  economy: 0,
  installments: [],
  potencyCC: 0,
  installationValue: 0,
  inverters: 0,
  integrators: 0
};

const fake = {
  selectOptions,
  rawSolarFeasibilityData,
  parsedSolarFeasibilityData,
  emptyParsedSolarFeasibilityData
};

export default fake;
