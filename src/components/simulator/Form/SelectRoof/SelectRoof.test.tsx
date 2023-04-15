import React from 'react';
import { screen } from '@testing-library/react';
import SelectRoof from './SelectRoof';
import { renderWith } from '@src/devUtils';
import userEvent from '@testing-library/user-event';

describe('SelectRoof Component', () => {
  it('should render correctly', () => {
    renderWith(<SelectRoof />);
    expect(screen.getByTestId('select-roof')).toBeInTheDocument();
  });

  it('should call onChange when a card is clicked', () => {
    const onChange = jest.fn();
    renderWith(<SelectRoof onChange={onChange} />);
    const card = screen.getByTestId('select-roof').children[0];
    userEvent.click(card);
    expect(onChange).toHaveBeenCalled();
  });
});
