import styled, { css } from 'styled-components';

export const DefaultSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral.high.pure};
    padding: 60px 0px;
    position: relative;
  `}
`;

export const DefaultContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1216px;
  padding: 0 15px;
  width: 100%;
`;

export const DefaultImage = styled.img`
  height: auto;
  max-width: 100%;
`;
