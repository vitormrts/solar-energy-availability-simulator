import React from 'react';
import { screen } from '@testing-library/react';
import InstallmentCard from './InstallmentCard';
import { renderWith } from '@src/devUtils';

describe('InstallmentCard Component', () => {
  it('should render correctly', () => {
    renderWith(<InstallmentCard />);
    expect(screen.getByTestId('installment-card')).toBeInTheDocument();
  });

  it('should render with intallment correctly', () => {
    renderWith(<InstallmentCard installment={12} minTax={0.1} />);
    expect(screen.getByTestId('min-tax')).toBeInTheDocument();
  });

  it('should render without intallment correctly', () => {
    renderWith(<InstallmentCard installment={1} minTax={0} />);
    expect(screen.queryByTestId('min-tax')).not.toBeInTheDocument();
  });
});
