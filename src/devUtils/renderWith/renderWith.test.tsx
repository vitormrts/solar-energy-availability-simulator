import React from 'react';
import { screen } from '@testing-library/react';
import renderWith from './renderWith';

const Component: React.FC = () => <h1 data-testid="component">Component</h1>;

describe('renderWith util', () => {
  it('should render with theme correctly', () => {
    renderWith(<Component />, { theme: true });
    expect(screen.getByTestId('component')).toBeInTheDocument();
  });

  it('should render without correctly', () => {
    renderWith(<Component />, { theme: false });
    expect(screen.getByTestId('component')).toBeInTheDocument();
  });
});
