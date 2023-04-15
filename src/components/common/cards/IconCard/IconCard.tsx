import React from 'react';
import { type IconCardProps } from './IconCard.types';
import * as S from './IconCard.style';

const IconCard: React.FC<IconCardProps> = ({ title = 'Default title', testId = 'icon-card', emphasisLabel = 'Default emphasis', image }: IconCardProps) => (
  <S.Card data-testid={testId}>
    <S.IconAdapter>
      <S.IconImage src={image} alt={title} />
    </S.IconAdapter>
    <S.InfoContainer>
      <S.Title>{title}</S.Title>
      <S.EmphasisLabel>{emphasisLabel}</S.EmphasisLabel>
    </S.InfoContainer>
  </S.Card>
);

export default IconCard;
