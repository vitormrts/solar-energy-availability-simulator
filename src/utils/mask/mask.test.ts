import mask from './mask';

describe('Zip code mask - Util', () => {
  it('should return zip code masked correctly', () => {
    const output = mask.zipCode('99999999');
    expect(output).toBe('99999-999');
  });

  it('should return zip code masked correctly when type out of limit', () => {
    const output = mask.zipCode('999999999999');
    expect(output).toBe('99999-999');
  });

  it('should return empty when pass anything to the field', () => {
    const output = mask.zipCode('');
    expect(output).toBe('');
  });

  it('should return empty when pass others characters to the field', () => {
    const output = mask.zipCode('ajsmcj!@@%%');
    expect(output).toBe('');
  });
});

describe('Remove letters mask - Util', () => {
  it('should return only numbers', () => {
    const output = mask.removeLetters('99999999');
    expect(output).toBe('99999999');
  });

  it('should return empty when pass anything to the field', () => {
    const output = mask.removeLetters('');
    expect(output).toBe('');
  });

  it('should return empty when pass others characters to the field', () => {
    const output = mask.removeLetters('ajsmcj!@@%%');
    expect(output).toBe('');
  });

  it('should return only numbers when pass characters to the field', () => {
    const output = mask.removeLetters('aj1sm32cj!@@%%');
    expect(output).toBe('132');
  });
});
