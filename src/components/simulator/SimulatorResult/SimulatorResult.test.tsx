import React from 'react';
import { screen } from '@testing-library/react';
import SimulatorResult from './SimulatorResult';
import { renderWith } from '@src/devUtils';

describe('SimulatorResult Component', () => {
  it('should render correctly', () => {
    renderWith(<SimulatorResult />);
    expect(screen.getByTestId('simulator-result')).toBeInTheDocument();
  });
});
