import React from 'react';
import { screen } from '@testing-library/react';
import IconCard from './IconCard';
import { renderWith } from '@src/devUtils';

describe('IconCard Component', () => {
  it('should render correctly', () => {
    renderWith(<IconCard />);
    expect(screen.getByTestId('icon-card')).toBeInTheDocument();
  });
});
