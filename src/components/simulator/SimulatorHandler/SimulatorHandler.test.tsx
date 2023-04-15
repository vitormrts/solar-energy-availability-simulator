import React from 'react';
import { screen } from '@testing-library/react';
import { renderWith } from '@src/devUtils';
import SimulatorHandler from './SimulatorHandler';

describe('SimulatorHandler Component', () => {
  it('should render correctly', () => {
    renderWith(<SimulatorHandler />);
    expect(screen.getByTestId('handler')).toBeInTheDocument();
  });
});
