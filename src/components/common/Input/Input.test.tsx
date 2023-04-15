import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';
import { renderWith } from '@src/devUtils';
import defaultTheme from '@src/themes/defaultTheme';

describe('Input Component', () => {
  it('should render correctly', () => {
    renderWith(<Input />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('should render info text message correclty', () => {
    renderWith(<Input infoText="Info Text" />);
    expect(screen.getByTestId('input-info-text')).toBeInTheDocument();
  });

  it('should focus and blur correctly', () => {
    renderWith(<Input />);
    const field = screen.getByTestId('input-field');
    const fieldAdapter = screen.getByTestId('input-field-adapter');

    fireEvent.focus(field);
    expect(fieldAdapter).toHaveStyleRule('border-color', defaultTheme.colors.brand.primary.pure);

    fireEvent.blur(field);
    expect(fieldAdapter).not.toHaveStyleRule(
      'border-color',
      defaultTheme.colors.brand.primary.pure
    );
  });

  it('should call onClick correctly', () => {
    const onClick = jest.fn();

    renderWith(<Input onClick={onClick} />);

    userEvent.click(screen.getByTestId('input-field'));
    expect(onClick).toBeCalled();
  });

  it('should type input and call onChange correctly', () => {
    const onChange = jest.fn();

    renderWith(<Input onChange={onChange} />);

    userEvent.type(screen.getByTestId('input-field'), 'hostgator');
    expect(onChange).toBeCalled();
  });

  it('should render error correctly', () => {
    renderWith(<Input error="Error" />);
    expect(screen.getByTestId('input-field-adapter')).toHaveStyleRule(
      'border-color',
      defaultTheme.colors.feedback.problem.pure
    );
    expect(screen.getByTestId('input-error')).toBeInTheDocument();
  });

  it('should render success correctly', () => {
    renderWith(<Input success="Success" />);
    expect(screen.getByTestId('input-field-adapter')).toHaveStyleRule(
      'border-color',
      defaultTheme.colors.feedback.active.pure
    );
    expect(screen.getByTestId('input-success')).toBeInTheDocument();
  });

  it('should not render status message if input is disabled', () => {
    renderWith(<Input error="Error" disabled />);
    expect(screen.getByTestId('input-field-adapter')).not.toHaveStyleRule(
      'border-color',
      defaultTheme.colors.feedback.active.pure
    );
    expect(screen.queryByTestId('input-error')).not.toBeInTheDocument();
  });
});
