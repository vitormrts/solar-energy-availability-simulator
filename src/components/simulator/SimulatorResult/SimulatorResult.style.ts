import { DefaultContainer } from '@src/themes/common';
import styled, { css } from 'styled-components';

export const Container = styled(DefaultContainer)``;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.low.dark};
    font-size: 38px;
    line-height: 54px;
    text-align: center;
    width: 100%;
  `}
`;
