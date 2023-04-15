import React from 'react';
import { type HeaderProps } from './Header.types';
import * as S from './Header.style';

const Header: React.FC<HeaderProps> = ({ testId = 'header' }: HeaderProps) => (
  <S.Header data-testid={testId}>
    <S.Container>
      <S.Logo src="/assets/logos/logo-white.svg" alt="Logo" />
    </S.Container>
  </S.Header>
);

export default Header;
