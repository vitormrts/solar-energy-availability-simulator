const zipCode = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
};

const removeLetters = (value: string): string => {
  return value.replace(/\D/g, '');
};

const mask = {
  zipCode,
  removeLetters
};

export default mask;
