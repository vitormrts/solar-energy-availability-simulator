import React from 'react';
import { screen } from '@testing-library/react';
import Header from './Header';
import { renderWith } from '@src/devUtils';

describe('Header Component', () => {
  it('should render correctly', () => {
    renderWith(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
