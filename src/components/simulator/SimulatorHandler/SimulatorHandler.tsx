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
