import React, { useCallback } from 'react';
import { type ButtonProps } from './Button.types';
import * as S from './Button.style';

const Button: React.FC<ButtonProps> = ({ label = 'Default label', testId = 'button', onClick, type, disabled = false }: ButtonProps) => {
  const handleOnClick = useCallback((event: React.FormEvent) => {
    onClick?.(event);
  }, [onClick]);

  return (
    <S.Button disabled={disabled} data-testid={testId} onClick={handleOnClick} type={type}>
      {label}
    </S.Button>
  );
};

export default Button;
