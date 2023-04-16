import React, { useCallback, useState } from 'react';
import { type SimulatorHandlerProps } from './SimulatorHandler.types';
import * as S from './SimulatorHandler.style';
import { useSimulator } from '@src/hooks';
import { Form, Installments, SimulatorResult } from '@src/components/simulator';
import { type ParsedSolarFeasibilityData } from '@src/types/solar.types';
import { scrollTo } from '@src/utils';

const SimulatorHandler: React.FC<SimulatorHandlerProps> = ({ testId = 'simulator-handler' }: SimulatorHandlerProps) => {
  const [solarFeasibilityData, setSolarFeasibilityData] = useState<ParsedSolarFeasibilityData | null>();
  const { onChange, formData, getEnergyFeasibility, loading, allowedToContinue } = useSimulator();

  const handleOnSubmit = useCallback(async (event: React.FormEvent) => {
    const solarFeasibilityData = await getEnergyFeasibility(event);
    setSolarFeasibilityData(solarFeasibilityData);
    setTimeout(() => {
      scrollTo({ elementId: 'simulator-result-section', offsetTop: 80 });
    }, 100);
  }, [getEnergyFeasibility]);

  return (
    <S.Container data-testid={testId}>
      <S.Title>Simulador de energia solar</S.Title>
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
          <S.SimulatorResultSection id="simulator-result-section">
            <SimulatorResult results={solarFeasibilityData} />
          </S.SimulatorResultSection>
          <S.InstallmentsSection>
            <Installments installments={solarFeasibilityData?.installments} />
          </S.InstallmentsSection>
        </>
      )}
    </S.Container>
  );
};

export default SimulatorHandler;
