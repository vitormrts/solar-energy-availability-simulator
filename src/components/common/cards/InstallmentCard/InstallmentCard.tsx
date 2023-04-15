import React from 'react';
import { type InstallmentCardProps } from './InstallmentCard.types';
import * as S from './InstallmentCard.style';
import { currency } from '@src/utils';
import { Button } from '@src/components/common';

const InstallmentCard: React.FC<InstallmentCardProps> = ({
  installment = 0,
  installmentLabel = 'Default installment label ',
  minTax = 0,
  minTaxLabel = 'Default min tax label ',
  minValue = 0,
  minValueLabel = 'Default min value label ',
  testId = 'installment-card',
  buttonLabel = 'Default button label'
}: InstallmentCardProps) => {
  const hasInstallment = minTax !== 0 && installment !== 1;

  return (
    <S.Card data-testid={testId}>
      <S.Title>
        {installmentLabel}<strong>{installment}x</strong>
      </S.Title>
      {hasInstallment && (
        <S.Label data-testid="min-tax">
          {minTaxLabel}
          <br />
          <strong>{minTax}%</strong>
        </S.Label>
      )}
      <S.Label>
        {hasInstallment && (
          <>
            {minValueLabel}
            <br />
          </>
        )}
        <strong>{currency.format(minValue)}</strong>
      </S.Label>
      <Button label={buttonLabel} />
    </S.Card>
  );
};

export default InstallmentCard;
