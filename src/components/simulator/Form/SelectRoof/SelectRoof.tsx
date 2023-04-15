import React, { useCallback } from 'react';
import { type SelectRoofProps } from './SelectRoof.types';
import * as S from './SelectRoof.style';
import { CircleCard } from '@src/components/common';
import { type Keys } from '@src/hooks/useSimulator/useSimulator.types';

const cards = [
  {
    id: 'fibrocimento-madeira',
    label: 'Fibrocimento Madeira',
    image: '/assets/roofs/wood-fiber-ciment.png'
  },
  {
    id: 'fibrocimento-metalico',
    label: 'Fibrocimento Metálico',
    image: '/assets/roofs/metalic-fiber-ciment.png'
  },
  {
    id: 'ceramico',
    label: 'Cerâmico',
    image: '/assets/roofs/ceramic.png'
  },
  {
    id: 'metalico',
    label: 'Metálico',
    image: '/assets/roofs/metalic.png'
  },
  {
    id: 'laje',
    label: 'Laje',
    image: '/assets/roofs/slab.png'
  },
  {
    id: 'solo',
    label: 'Solo',
    image: '/assets/roofs/ground.png'
  }
];

const SelectRoof: React.FC<SelectRoofProps> = ({ testId = 'select-roof', onChange, selectedRoof }: SelectRoofProps) => {
  const handleOnChange = useCallback((key: Keys, value: string) => {
    onChange?.(key, value);
  }, [onChange]);

  const cardsMap = cards.map((card) =>
    <S.CardAdapter key={card.label} onClick={() => { handleOnChange('structure', card.id); }} >
      <CircleCard
        label={card.label}
        image={card.image}
        selected={card.id === selectedRoof}
      />
    </S.CardAdapter>
  );

  return (
    <S.CardsWrapper data-testid={testId}>
      {cardsMap}
    </S.CardsWrapper>
  );
};

export default SelectRoof;
