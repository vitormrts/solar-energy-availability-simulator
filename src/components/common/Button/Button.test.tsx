import React from 'react';
import { screen } from '@testing-library/react';
import Button from './Button';
import { renderWith } from '@src/devUtils';
import userEvent from '@testing-library/user-event';

describe('Button Component', () => {
  it('should render correctly', () => {
    renderWith(<Button />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  it('should call onClick when click if is not disabled', () => {
    const onClick = jest.fn();
    renderWith(<Button onClick={onClick} disabled={false} />);
    userEvent.click(screen.getByTestId('button'));
    expect(onClick).toBeCalled();
  });

  it('should not call onClick when click if is disabled', () => {
    const onClick = jest.fn();
    renderWith(<Button onClick={onClick} disabled />);
    userEvent.click(screen.getByTestId('button'));
    expect(onClick).not.toBeCalled();
  });
});
