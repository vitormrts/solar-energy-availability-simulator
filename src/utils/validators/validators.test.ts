import validators from './validators';

describe('Required validators Util', () => {
  it('should return false if is not empty', () => {
    const output = validators.empty('test');
    expect(output).toBe(false);
  });

  it('should return true if is empty', () => {
    const output = validators.empty('');
    expect(output).toBe(true);
  });

  it('should return true if has only space (empty)', () => {
    const output = validators.empty(' ');
    expect(output).toBe(true);
  });
});

describe('Zip Code validators Util', () => {
  it('should return true if zip code is valid', () => {
    const output = validators.zipCode('12345-678');
    expect(output).toBe(true);
  });

  it('should return false if zip code is invalid', () => {
    const output = validators.zipCode('123');
    expect(output).toBe(false);
  });
});
