import React, { type ChangeEvent, useCallback, useState } from 'react';
import type { GetStatus, InputProps } from './Input.types';
import * as S from './Input.style';

const Input: React.FC<InputProps> = ({
  value,
  label = 'Label',
  placeholder = 'Placeholder',
  testId = 'input',
  error,
  name = 'input',
  success,
  disabled = false,
  onChange,
  onClick,
  infoText
}: InputProps) => {
  const [selected, setSelected] = useState(false);

  const handleOnFocus = useCallback(() => {
    setSelected(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setSelected(false);
  }, []);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    },
    [onChange]
  );

  const handleOnClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  const getStatus: GetStatus = () => {
    if (disabled) {
      return;
    }
    if (error) {
      return 'error';
    }
    if (success) {
      return 'success';
    }
  };

  const status = getStatus();
  const feedbackLabel = error || success;

  return (
    <S.Wrapper data-testid={testId}>
      <S.Label>{label}</S.Label>
      <S.FieldAdapter
        data-testid={`${testId}-field-adapter`}
        $status={status}
        $disabled={disabled}
        $selected={selected}
      >
        <S.Field
          data-testid={`${testId}-field`}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          onChange={handleOnChange}
          onClick={handleOnClick}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          type="text"
        />
      </S.FieldAdapter>
      {infoText && <S.InfoText data-testid={`${testId}-info-text`}>{infoText}</S.InfoText>}
      {status && (
        <S.FeedbackLabel data-testid={`${testId}-${status}`} $status={status}>
          {feedbackLabel}
        </S.FeedbackLabel>
      )}
    </S.Wrapper>
  );
};

export default Input;
