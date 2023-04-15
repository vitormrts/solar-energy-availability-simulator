import React from 'react';
import { type SimulatorResultProps } from './SimulatorResult.types';
import * as S from './SimulatorResult.style';
import { IconCard } from '@src/components/common';
import { currency } from '@src/utils';

const SimulatorResult: React.FC<SimulatorResultProps> = ({ title = 'Default title', testId = 'simulator-result', results }: SimulatorResultProps) => {
  console.log(results);
  return (
    <S.Container data-testid={testId}>
      <S.Title>{title}</S.Title>
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
        title='Quantidade de inversores'
        image='/assets/icons/solar-panel.svg'
        emphasisLabel={`${results?.inverters || ''} inversores`}
      />
    </S.Container>
  );
};

export default SimulatorResult;
