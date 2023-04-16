import { DefaultSection } from '@src/themes/common';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    margin-top: 80px;
`;

export const Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colors.brand.primary.pure};
        font-size: 35px;
        font-weight: 700;
        margin: 0 auto;
        padding-top: 56px;
        text-align: center;
    `}
`;

export const FormSection = styled(DefaultSection)``;

export const SimulatorResultSection = styled(DefaultSection)`
    ${({ theme }) => css`
        background-color: ${theme.colors.neutral.high.medium};
    `}
`;

export const InstallmentsSection = styled(DefaultSection)``;
