import React from 'react';
import { screen } from '@testing-library/react';
import CircleCard from './CircleCard';
import { renderWith } from '@src/devUtils';

describe('CircleCard Component', () => {
  it('should render correctly', () => {
    renderWith(<CircleCard />);
    expect(screen.getByTestId('circle-card')).toBeInTheDocument();
  });

  it('should render selected correctly', () => {
    renderWith(<CircleCard selected />);
    const image = screen.getByTestId('circle-card-image-adapter');
    expect(image).toHaveStyle('border-color: #063EF9');
    expect(image).not.toHaveStyle('border-color: transparent');
  });
});
