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

export const InstallmentsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  justify-content: center;
  align-items: center;
`;
