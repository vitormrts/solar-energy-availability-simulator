import React from 'react';
import { type CircleCardProps } from './CircleCard.types';
import * as S from './CircleCard.style';

const CircleCard: React.FC<CircleCardProps> = ({ label = 'Default label', testId = 'circle-card', image, selected = false }: CircleCardProps) => (
  <S.Card data-testid={testId}>
    <S.ImageAdapter data-testid={`${testId}-image-adapter`} $selected={selected}>
      <S.Image src={image} alt={label} />
    </S.ImageAdapter>
    <S.Label>{label}</S.Label>
  </S.Card>
);

export default CircleCard;
