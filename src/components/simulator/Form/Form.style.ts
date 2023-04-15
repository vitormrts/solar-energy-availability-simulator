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
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const InputAdapter = styled.div``;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.brand.primary.pure};
  `}
`;
