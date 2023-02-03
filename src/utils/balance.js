export function formatBalance(amount) {
  return Number(amount).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
export function inputMaskBRL(value) {
  return (
    (value.charAt(0) === '-' ? value.charAt(0) : '') +
    (Number(value.replace(/\D/g, '')) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  );
}

export function inputUnmaskBRL(value) {
  return typeof value === 'number'
    ? value
    : (value.charAt(0) === '-' ? value.charAt(0) : '') +
        Number(value.replace(/\D/g, '')) / 100;
}
