import React from 'react';
import { type InstallmentsProps } from './Installments.types';
import * as S from './Installments.style';
import { InstallmentCard } from '@src/components/common';

const Installments: React.FC<InstallmentsProps> = ({
  title = 'Default title',
  description = 'Default description',
  testId = 'installments',
  installments = []
}: InstallmentsProps) => {
  const installmentsMap = installments.map(({ installment, minValue, minTax }, index) => (
    <InstallmentCard
      key={index}
      installmentLabel="Pague em até "
      minTaxLabel="Taxa mínima mensal de "
      minValueLabel="Valor mínimo da parcela: "
      buttonLabel="Quero economizar"
      installment={installment}
      minTax={minTax}
      minValue={minValue}
    />
  ));

  return (
    <S.Container data-testid={testId}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.InstallmentsWrapper data-testid={`${testId}-cards-wrapper`}>
        {installmentsMap}
      </S.InstallmentsWrapper>
    </S.Container>
  );
};

export default Installments;
