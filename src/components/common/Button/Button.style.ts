import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.brand.secondary.pure};
    padding: 10px 16px;
    cursor: pointer;
    color: ${theme.colors.neutral.low.darkest};
    font-size: 13px;
    line-height: 22px;
    border-radius: 4px;
    letter-spacing: 0.25px;
    width: 100%;
    border: none;
    transition: ${theme.transitions.durations.fast};
    font-weight: ${theme.font.weights.bold};
    &:disabled {
      background-color: ${theme.colors.neutral.high.light};
      color: ${theme.colors.neutral.high.dark};
      cursor: auto;
    }
    &:enabled {
      &:active {
        box-shadow: none;
      }
      &:active,
      &:hover {
        background-color: ${theme.colors.brand.secondary.light};
      }
    }
  `}
`;
