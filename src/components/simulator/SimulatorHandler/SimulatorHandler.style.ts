import { DefaultSection } from '@src/themes/common';
import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const FormSection = styled(DefaultSection)``;

export const SimulatorResultSection = styled(DefaultSection)`
    ${({ theme }) => css`
        background-color: ${theme.colors.neutral.high.medium};
    `}
`;
