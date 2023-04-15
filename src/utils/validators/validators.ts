const zipCode = (value: string): boolean => {
  const regex = /(^\d{2}\d{3}-\d{3}$)/;
  return regex.test(value);
};

const empty = (value: string): boolean => {
  if (!value) return true;
  const formattedValue = value.trim();
  if (formattedValue.length <= 0 || formattedValue === '') return true;
  return false;
};

const validation = {
  empty,
  zipCode
};

export default validation;
