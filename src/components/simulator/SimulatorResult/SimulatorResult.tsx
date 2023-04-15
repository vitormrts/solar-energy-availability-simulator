import React from 'react';
import { type SimulatorResultProps } from './SimulatorResult.types';
import * as S from './SimulatorResult.style';
import { IconCard } from '@src/components/common';
import { currency } from '@src/utils';

const SimulatorResult: React.FC<SimulatorResultProps> = ({
  title = 'Default title',
  description = 'Default description',
  testId = 'simulator-result',
  results
}: SimulatorResultProps) => {
  return (
    <S.Container data-testid={testId}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
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
