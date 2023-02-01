/* eslint-disable no-return-assign */
export function getBalance(data) {
  const negativeBalance = data
    .filter(item => item.type === 'expenses')
    .reduce((total, item) => (total += item.amount), 0);
  const positiveBalance = data
    .filter(item => item.type === 'incomes')
    .reduce((total, item) => (total += item.amount), 0);
  const balance = positiveBalance - negativeBalance;

  return balance.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
