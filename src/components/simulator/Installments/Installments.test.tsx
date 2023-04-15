import React from 'react';
import { screen } from '@testing-library/react';
import Installments from './Installments';
import { renderWith } from '@src/devUtils';

describe('Installments Component', () => {
  it('should render correctly', () => {
    renderWith(<Installments />);
    expect(screen.getByTestId('installments')).toBeInTheDocument();
  });
});
