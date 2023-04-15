const format = (value: number): string => {
  if (Number.isNaN(value)) {
    return '';
  }

  const currency = 'BRL';
  const locale = 'pt-br';

  if (value < 0) {
    return value?.toLocaleString(locale, { style: 'currency', currency }).replace('-', '').replace(/\s/g, ' -');
  }

  return value?.toLocaleString(locale, { style: 'currency', currency });
};

const unformat = (value: string): string => {
  return typeof (value) === 'number' ? String(value) : String((Number(value.replace(/\D/g, '')) / 100));
};

const currency = {
  format,
  unformat
};

export default currency;
