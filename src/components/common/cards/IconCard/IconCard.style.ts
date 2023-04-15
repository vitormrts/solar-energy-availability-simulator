import { DefaultImage } from '@src/themes/common';
import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral.high.pure};
    padding: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
    width: 100%;
    border-radius: ${theme.border.radius.sm};
  `}
`;

export const IconAdapter = styled.div`
  width: 48px;
  height: 48px;
`;

export const IconImage = styled(DefaultImage)``;

export const InfoContainer = styled.div``;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.low.pure};
    letter-spacing: 0.25px;
    font-size: 14px;
    margin-bottom: 4px;
  `}
`;

export const EmphasisLabel = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.brand.primary.pure};
    font-weight: ${theme.font.weights.bold};
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.25px;
  `}
`;
