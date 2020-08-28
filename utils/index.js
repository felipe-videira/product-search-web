import { CURRENCIES_SYMBOLS } from '../contants';

export const formatMoney = (num) => {
  return parseFloat(num.toFixed(2), 10).toLocaleString('pt');
};

export const formatPrice = (currency, amount, decimals) => {
  return `${CURRENCIES_SYMBOLS[currency]} ${formatMoney(amount + decimals)}`;
};
