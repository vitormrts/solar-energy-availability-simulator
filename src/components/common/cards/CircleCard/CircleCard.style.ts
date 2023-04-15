import { DefaultImage } from '@src/themes/common';
import styled, { css } from 'styled-components';

export const Card = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  width: 100%;
`;

export const ImageAdapter = styled.div<{ $selected: boolean }>`
  ${({ theme, $selected }) => css`
    width: 80px;
    height: 80px;
    border-radius: ${theme.border.radius.circular};
    border: ${theme.border.width.medium} solid;
    border-color: ${$selected ? theme.colors.brand.primary.pure : 'transparent'}
  `}
`;

export const Image = styled(DefaultImage)`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.circular};
    width: 100%;
  `}
`;

export const Label = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.low.dark};
    font-size: 13px;
    line-height: 18px;
    font-weight: ${theme.font.weights.bold};
    text-align: center;
  `}
`;
