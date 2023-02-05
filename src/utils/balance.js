export function formatBalance(amount) {
  return Number(amount).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
export function inputMaskBRL(value, acceptNegative = true) {
  if (acceptNegative) {
    return (
      (value.charAt(0) === '-' ? value.charAt(0) : '') +
      (Number(value.replace(/\D/g, '')) / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    );
  }
  return (Number(value.replace(/\D/g, '')) / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function inputUnmaskBRL(value, acceptNegative = true) {
  if (acceptNegative) {
    return typeof value === 'number'
      ? value
      : (value.charAt(0) === '-' ? value.charAt(0) : '') +
          Number(value.replace(/\D/g, '')) / 100;
  }
  return typeof value === 'number'
    ? value
    : Number(value.replace(/\D/g, '')) / 100;
}
