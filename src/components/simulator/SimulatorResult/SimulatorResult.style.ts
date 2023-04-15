import { DefaultContainer } from '@src/themes/common';
import styled, { css } from 'styled-components';

export const Container = styled(DefaultContainer)``;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.low.dark};
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    width: 100%;
    margin-bottom: 8px;
    @media (max-width: ${theme.breakpoints.lg}) {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 16px;
    }
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
    @media (max-width: ${theme.breakpoints.lg}) {
      font-size: 12px;
      line-height: 20px;
    }
  `}
`;

export const CardsWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    width: 100%;
    @media (max-width: ${theme.breakpoints.lg}) {
      grid-template-columns: 1fr;
    }
  `}
`;
