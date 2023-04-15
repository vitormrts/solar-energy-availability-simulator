import validators from './validators';

describe('Required validators Util', () => {
  it('should return false if required is valid', () => {
    const output = validators.required('test');
    expect(output).toBe(false);
  });

  it('should return true if required is invalid', () => {
    const output = validators.required('');
    expect(output).toBe(true);
  });

  it('should return true if required is has only space (invalid)', () => {
    const output = validators.required(' ');
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
