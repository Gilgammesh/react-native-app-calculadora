import 'intl';
import 'intl/locale-data/jsonp/es-PE';
import {locale} from '../configs/constants';

export const normalizarNumber = (txt: string) => {
  return txt.replace('-', '').replace('.', '');
};

export const formatDecimal = (value: string) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 20,
  });
  return formatter.format(Number(value));
};
