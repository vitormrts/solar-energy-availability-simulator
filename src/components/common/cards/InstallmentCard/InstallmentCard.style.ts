import styled, { css } from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-direction: column;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.16);
  padding: 24px;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.low.dark};
    font-size: 26px;
    text-align: center;
    strong {
      font-size: 28px;  
    }
  `}
`;

export const Label = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.low.dark};
    text-align: center;
    strong {    
      color: ${theme.colors.brand.primary.pure};
      font-size: 24px;
    }
  `}
`;
