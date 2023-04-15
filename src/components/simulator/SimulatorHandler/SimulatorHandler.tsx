import React, { useCallback, useState } from 'react';
import { type SimulatorHandlerProps } from './SimulatorHandler.types';
import * as S from './SimulatorHandler.style';
import { useSimulator } from '@src/hooks';
import { Form, Installments, SimulatorResult } from '@src/components/simulator';
import { type ParsedSolarFeasibilityData } from '@src/types/solar.types';

const SimulatorHandler: React.FC<SimulatorHandlerProps> = ({ testId = 'simulator-handler' }: SimulatorHandlerProps) => {
  const [solarFeasibilityData, setSolarFeasibilityData] = useState<ParsedSolarFeasibilityData | null>();
  const { onChange, formData, getEnergyFeasibility, loading, allowedToContinue } = useSimulator();

  const handleOnSubmit = useCallback(async (event: React.FormEvent) => {
    const solarFeasibilityData = await getEnergyFeasibility(event);
    setSolarFeasibilityData(solarFeasibilityData);
  }, [getEnergyFeasibility]);

  return (
    <S.Container data-testid={testId}>
      <S.FormSection>
        <Form
          allowedToContinue={allowedToContinue()}
          formData={formData}
          loading={loading}
          onChange={onChange}
          onSubmit={handleOnSubmit}
        />
      </S.FormSection>
      {solarFeasibilityData && (
        <>
          <S.SimulatorResultSection>
            <SimulatorResult
              title="Economize na conta de luz com energia solar conosco"
              description="Confira abaixo os resultados da simulação e descubra se a instalação de um sistema de energia solar é viável para sua residência. Analise a produção estimada de energia, os custos e benefícios esperados e comece a economizar na conta de energia elétrica agora mesmo!"
              results={solarFeasibilityData}
            />
          </S.SimulatorResultSection>
          <S.InstallmentsSection>
            <Installments
              title="Parcelamento sem complicação"
              description="Confira abaixo nossas opções de parcelamento e encontre a que melhor se adapta às suas necessidades. Com taxas mínimas e valores acessíveis, nosso parcelamento é a forma mais fácil e prática de realizar suas compras na nossa loja."
              installments={solarFeasibilityData?.installments}
            />
          </S.InstallmentsSection>
        </>
      )}
    </S.Container>
  );
};

export default SimulatorHandler;
