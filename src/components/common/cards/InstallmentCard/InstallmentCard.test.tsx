import React from 'react';
import { screen } from '@testing-library/react';
import InstallmentCard from './InstallmentCard';
import { renderWith } from '@src/devUtils';

describe('InstallmentCard Component', () => {
  it('should render correctly', () => {
    renderWith(<InstallmentCard />);
    expect(screen.getByTestId('installment-card')).toBeInTheDocument();
  });
});
