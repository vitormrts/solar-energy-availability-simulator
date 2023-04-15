import { DefaultContainer, DefaultImage } from '@src/themes/common';
import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.brand.primary.pure};
    display: flex;
    justify-content: center;
    min-height: 80px;
  `}
`;

export const Container = styled(DefaultContainer)``;

export const Logo = styled(DefaultImage)`
  width: 70px;
`;
