import React from 'react';
import { screen } from '@testing-library/react';
import Installments from './Installments';
import { fake, renderWith } from '@src/devUtils';

describe('Installments Component', () => {
  it('should render correctly', () => {
    renderWith(<Installments />);
    expect(screen.getByTestId('installments')).toBeInTheDocument();
  });

  it('should render with installments cards correctly', () => {
    renderWith(<Installments installments={fake.parsedSolarFeasibilityData.installments} />);
    expect(screen.getByTestId('installments-cards-wrapper')).toBeInTheDocument();
  });
});
