import currency from './currency';

describe('Currency util', () => {
  it('should format currency correctly', () => {
    const value = 1699.99;

    const formattedValue = currency.format(value);

    expect(formattedValue).toBe('R$ 1.699,99');

    const formattedZeroValue = currency.format(0);

    expect(formattedZeroValue).toBe('R$ 0,00');
  });
});
