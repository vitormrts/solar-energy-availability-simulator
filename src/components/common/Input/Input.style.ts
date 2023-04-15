import styled, { css, type FlattenSimpleInterpolation } from 'styled-components';
import type { FeedbackLabelProps, FieldStyleProps } from './Input.types';
import defaultTheme from '@src/themes/defaultTheme';

const variantStatusStyles = ($status = ''): FlattenSimpleInterpolation | undefined =>
  ({
    error: css`
      border-color: ${defaultTheme.colors.feedback.problem.pure};
      color: ${defaultTheme.colors.feedback.problem.pure};
    `,
    success: css`
      border-color: ${defaultTheme.colors.feedback.active.pure};
      color: ${defaultTheme.colors.feedback.active.pure};
    `
  }[$status]);

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const FieldAdapter = styled.div<FieldStyleProps>`
  ${({ $status, $disabled, $selected, theme }) => css`
    border: ${theme.border.width.thin} solid ${theme.colors.feedback.cancelled.pure};
    border-radius: ${theme.border.radius.sm};
    display: flex;
    height: 53px;
    justify-content: space-between;
    margin-top: 8px;
    padding: 1px;
    transition: border-color ${theme.transitions.durations.default} ${theme.transitions.easings.out};
    width: 100%;
    ${$selected &&
    css`
      border-color: ${theme.colors.brand.primary.pure};
    `}
    ${$disabled &&
    css`
      background-color: ${theme.colors.neutral.high.light};
      border-color: ${theme.colors.neutral.high.medium};
    `}
    ${variantStatusStyles($status)}
    @media (max-width: ${theme.breakpoints.md}) {
      height: 45px;
    }
  `}
`;

export const Field = styled.input<FieldStyleProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral.high.medium};
    color: ${theme.colors.neutral.low.dark};
    height: 100%;
    padding: 8px;
    width: 100%;
    &::placeholder {
      color: ${theme.colors.feedback.cancelled.dark};
    }
    &:disabled {
      background-color: ${theme.colors.feedback.cancelled.medium};
      color: ${theme.colors.feedback.cancelled.medium};
    }
    &:-ms-reveal,
    &:-ms-clear {
      display: none;
      visibility: hidden !important;
    }

    @media (max-width: ${theme.breakpoints.md}) {
      height: 42px;
    }
  `}
`;

export const FeedbackLabel = styled.p<FeedbackLabelProps>`
  ${({ $status }) => css`
    margin-top: 8px;
    width: 100%;
    ${variantStatusStyles($status)}
  `}
`;

export const InfoText = styled(FeedbackLabel)`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.low.dark};
    font-size: 11px;
    line-height: 14px;
  `}
`;

export const Label = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.low.dark};
  `}
`;
