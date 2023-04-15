import styled, { css } from 'styled-components';

export const CardsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 64px;
    @media (max-width: ${theme.breakpoints.lg}) {
      gap: 40px;
    }
    @media (max-width: ${theme.breakpoints.md}) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
  `}
`;

export const CardAdapter = styled.div``;
