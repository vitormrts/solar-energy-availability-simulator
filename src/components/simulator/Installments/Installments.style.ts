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

export const InstallmentsWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    justify-content: center;
    align-items: center;
    @media (max-width: ${theme.breakpoints.lg}) {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    @media (max-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr;
    }
  `}
`;
