import React, { useCallback } from 'react';
import { type FormProps } from './Form.types';
import * as S from './Form.style';
import { Button, Input } from '@src/components/common';
import { currency, mask } from '@src/utils';
import { type Keys } from '@src/hooks/useSimulator/useSimulator.types';
import SelectRoof from './SelectRoof';

const Form: React.FC<FormProps> = ({
  allowedToContinue = false,
  testId = 'form',
  onChange,
  formData,
  onSubmit,
  loading
}: FormProps) => {
  const handleOnSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();

    if (!allowedToContinue || loading) {
      return;
    }

    onSubmit?.(event);
  }, [onSubmit]);

  const handleOnChange = useCallback((key: Keys, value: string) => {
    onChange?.(key, value);
  }, [onChange]);

  return (
    <S.Container>
      <S.Form data-testid={testId} onSubmit={handleOnSubmit}>
        <S.InputGroup>
          <Input
            testId={`${testId}-cep`}
            error={formData?.zipCode.errorMessage}
            infoText="Precisamos do seu CEP para medir o quanto de Sol incide na sua casa/empresa. Esse valor é de extrema importância para o cálculo dos sistemas fotovoltaicos, pois são nessas horas de Sol que a placa solar estará gerando energia."
            label="Insira o CEP de onde pretende instalar seu sistema solar"
            onChange={(value) => {
              handleOnChange('zipCode', mask.zipCode(value));
            }}
            placeholder="CEP"
            value={formData?.zipCode.value}
          />
          <Input
            testId={`${testId}-account-value`}
            error={formData?.accountValue.errorMessage}
            infoText="Precisamos do seu consumo (em Reais) para entender qual será o tamanho do seu projeto solar. Quanto maior seu consumo, maior será o número de placas para zerar sua conta de luz."
            label="Insira o seu consumo médio por mês com energia (R$)"
            onChange={(value) => {
              handleOnChange('accountValue', mask.removeLetters(value));
            }}
            placeholder="R$ 100"
            value={`${currency.format(Number(formData?.accountValue.value))}`}
          />
        </S.InputGroup>
        <SelectRoof selectedRoof={formData?.structure.value} onChange={handleOnChange} />
        <Button
          testId={`${testId}-button-submit`}
          label="Finalizar"
          type="submit"
          disabled={loading || !allowedToContinue}
        />
      </S.Form>
    </S.Container>
  );
};

export default Form;
