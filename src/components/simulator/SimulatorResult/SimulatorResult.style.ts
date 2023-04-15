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
    margin-bottom: 8px;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.low.dark};
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    width: 100%;
    max-width: 900px;
    margin: 0 auto 32px;
  `}
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
`;
