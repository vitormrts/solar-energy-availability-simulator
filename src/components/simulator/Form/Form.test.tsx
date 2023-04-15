import React from 'react';
import { screen } from '@testing-library/react';
import Form from './Form';
import { renderWith } from '@src/devUtils';

describe('Form Component', () => {
  it('should render correctly', () => {
    renderWith(<Form />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});
