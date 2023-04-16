import React from 'react';
import { type InstallmentsProps } from './Installments.types';
import * as S from './Installments.style';
import { InstallmentCard } from '@src/components/common';

const Installments: React.FC<InstallmentsProps> = ({
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
      <S.Title>Parcelamento sem complicação</S.Title>
      <S.Description>Confira abaixo nossas opções de parcelamento e encontre a que melhor se adapta às suas necessidades. Com taxas mínimas e valores acessíveis, nosso parcelamento é a forma mais fácil e prática de realizar suas compras na nossa loja.</S.Description>
      <S.InstallmentsWrapper data-testid={`${testId}-cards-wrapper`}>
        {installmentsMap}
      </S.InstallmentsWrapper>
    </S.Container>
  );
};

export default Installments;
