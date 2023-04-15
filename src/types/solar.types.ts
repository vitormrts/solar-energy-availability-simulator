export interface GetSolarFeasibilityProps {
  structure: string
  accountValue: string
  zipCode: string
}

export interface RawSolarFeasibilityData {
  co2: number
  potencial: string
  economia: number
  potencyCC: number
  valor_instalacao: number
  qtdeInversores: number
  parcelamento: Array<{
    parcelas: number
    taxa_minima: number
    taxa_maxima: number
    valor_minimo: number
    valor_maximo: number
  }>
}

export interface ParsedSolarFeasibilityData {
  carbonDioxide: number
  potential: string
  economy: number
  installments: Array<{
    installment: number
    minTax: number
    maxTax: number
    minValue: number
    maxValue: number
  }>
  potencyCC: number
  installationValue: number
  inverters: number
}
