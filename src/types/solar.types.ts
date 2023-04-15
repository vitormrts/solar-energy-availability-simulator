export interface GetSolarFeasibilityProps {
  structure: string
  accountValue: string
  zipCode: string
}

export interface RawSolarFeasibilityData {
  co2: number
  economia: number
  integradores_regiao: number
  parcelamento: Array<{
    parcelas: number
    taxa_maxima: number
    taxa_minina: number
    valor_maximo: number
    valor_minimo: number
  }>
  potencial: string
  potencyCC: number
  qtdeInversores: number
  valor_instalacao: number
}

export interface ParsedSolarFeasibilityData {
  carbonDioxide: number
  economy: number
  installationValue: number
  integrators: number
  inverters: number
  potencyCC: number
  potential: string
  installments: Array<{
    installment: number
    minTax: number
    maxTax: number
    minValue: number
    maxValue: number
  }>
}
