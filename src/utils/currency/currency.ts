const format = (value: number): string => {
  if (Number.isNaN(value)) {
    return '';
  }

  const currency = 'BRL';
  const locale = 'pt-br';

  return value?.toLocaleString(locale, { style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const currency = {
  format
};

export default currency;
