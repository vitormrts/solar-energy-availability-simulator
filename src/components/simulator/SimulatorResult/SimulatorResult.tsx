import React from 'react';
import { type SimulatorResultProps } from './SimulatorResult.types';
import * as S from './SimulatorResult.style';
import { IconCard } from '@src/components/common';
import { currency } from '@src/utils';

const SimulatorResult: React.FC<SimulatorResultProps> = ({
  testId = 'simulator-result',
  results
}: SimulatorResultProps) => {
  return (
    <S.Container data-testid={testId}>
      <S.Title>Economize na conta de luz com energia solar conosco</S.Title>
      <S.Description>Confira abaixo os resultados da simulação e descubra se a instalação de um sistema de energia solar é viável para sua residência. Analise a produção estimada de energia, os custos e benefícios esperados e comece a economizar na conta de energia elétrica agora mesmo!</S.Description>
      <S.CardsWrapper>
        <IconCard
          title='Você investe'
          image='/assets/icons/money.svg'
          emphasisLabel={currency.format(Number(results?.installationValue))}
        />
        <IconCard
          title='Você economiza'
          image='/assets/icons/cipher-money.svg'
          emphasisLabel={currency.format(Number(results?.economy))}
        />
        <IconCard
          title='Você instala um total de'
          image='/assets/icons/solar-panel.svg'
          emphasisLabel={`${results?.inverters || ''} inversores`}
        />
        <IconCard
          title='Na sua região temos'
          image='/assets/icons/builder.svg'
          emphasisLabel={`${results?.integrators || ''} integradores`}
        />
      </S.CardsWrapper>
    </S.Container>
  );
};

export default SimulatorResult;
