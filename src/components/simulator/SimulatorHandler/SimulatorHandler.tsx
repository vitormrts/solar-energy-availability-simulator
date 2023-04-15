import React, { useCallback, useState } from 'react';
import { type SimulatorHandlerProps } from './SimulatorHandler.types';
import * as S from './SimulatorHandler.style';
import { useSimulator } from '@src/hooks';
import { Form, SimulatorResult } from '@src/components/simulator';
import { type ParsedSolarFeasibilityData } from '@src/types/solar.types';

const SimulatorHandler: React.FC<SimulatorHandlerProps> = ({ testId = 'handler' }: SimulatorHandlerProps) => {
  const [solarFeasibilityData, setSolarFeasibilityData] = useState<ParsedSolarFeasibilityData>();
  const { onChange, formData, getEnergyFeasibility, loading } = useSimulator();

  const handleOnSubmit = useCallback(async (event: React.FormEvent) => {
    const solarFeasibilityData = await getEnergyFeasibility(event);
    setSolarFeasibilityData(solarFeasibilityData);
  }, [getEnergyFeasibility]);

  return (
    <S.Container data-testid={testId}>
      <S.FormSection>
        <Form formData={formData} onChange={onChange} onSubmit={handleOnSubmit} loading={loading} />
      </S.FormSection>
      <S.SimulatorResultSection>
        <SimulatorResult title="Confira o resultado da sua simulação" results={solarFeasibilityData} />
      </S.SimulatorResultSection>
    </S.Container>
  );
};

export default SimulatorHandler;
