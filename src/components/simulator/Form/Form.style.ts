import { DefaultContainer } from '@src/themes/common';
import styled, { css } from 'styled-components';

export const Container = styled(DefaultContainer)``;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 64px;
  justify-content: center;
`;

export const InputGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    gap: 24px;
    @media (max-width: ${theme.breakpoints.lg}) {
      flex-direction: column;
    }
  `}
`;

export const InputAdapter = styled.div``;
