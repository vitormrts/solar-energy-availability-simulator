import React from 'react';
import { screen } from '@testing-library/react';
import SelectRoof from './SelectRoof';
import { renderWith } from '@src/devUtils';

describe('SelectRoof Component', () => {
  it('should render correctly', () => {
    renderWith(<SelectRoof />);
    expect(screen.getByTestId('select-roof')).toBeInTheDocument();
  });
});
