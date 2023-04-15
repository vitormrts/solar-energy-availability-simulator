import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import Form from './Form';
import { renderWith } from '@src/devUtils';
import userEvent from '@testing-library/user-event';

describe('Form Component', () => {
  it('should render correctly', () => {
    renderWith(<Form />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('should call onChange when input zipCode changes', () => {
    const onChange = jest.fn();
    renderWith(<Form onChange={onChange} />);
    const input = screen.getByTestId('form-cep-field');
    userEvent.type(input, '12345678');
    expect(onChange).toHaveBeenCalled();
  });

  it('should call onChange when input account value changes', () => {
    const onChange = jest.fn();
    renderWith(<Form onChange={onChange} />);
    const input = screen.getByTestId('form-account-value-field');
    userEvent.type(input, '12345678');
    expect(onChange).toHaveBeenCalled();
  });

  it('should not call onSubmit when form is not allowed to continue', () => {
    const onSubmit = jest.fn();
    renderWith(<Form onSubmit={onSubmit} allowedToContinue={false} />);
    const form = screen.getByTestId('form');
    fireEvent.submit(form);
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('should not call onSubmit when form is allowed to continue but is loading', () => {
    const onSubmit = jest.fn();
    renderWith(<Form onSubmit={onSubmit} allowedToContinue={true} loading={true} />);
    const form = screen.getByTestId('form');
    fireEvent.submit(form);
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('should not call onSubmit when is loading', () => {
    const onSubmit = jest.fn();
    renderWith(<Form onSubmit={onSubmit} loading={true} />);
    const form = screen.getByTestId('form');
    fireEvent.submit(form);
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('should call onSubmit when form is allowed to continue and is not loading', () => {
    const onSubmit = jest.fn();
    renderWith(<Form onSubmit={onSubmit} allowedToContinue={true} loading={false} />);
    const form = screen.getByTestId('form');
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalled();
  });
});
