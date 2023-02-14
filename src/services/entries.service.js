import { get, patch, post, put, remove } from './api_methods';

async function createEntries(params) {
  const { data } = await post(`entries`, params);
  return data;
}
async function realizeEntries(params) {
  const { data } = await patch(`entries/realizeEntries`, params);
  return data;
}
async function updateEntries(params) {
  const { data } = await put(`entries`, params);
  return data;
}
async function getTypeEntries() {
  const { data } = await get(`typeentries`);
  return data;
}
async function getEntries() {
  const { data } = await get(`entries`);
  return data;
}
async function getExpensesEntries() {
  const { data } = await get(`entries/expense`);
  return data;
}

async function getIncomesEntries() {
  const { data } = await get(`entries/income`);
  return data;
}
async function deleteEntries(
  id,
  deleteRecurrency,
  recurrencyId,
  recurrencyIndex
) {
  const mountURL = `${deleteRecurrency ? `/${deleteRecurrency}` : ''}${
    recurrencyId ? `/${recurrencyId}` : ''
  }${recurrencyIndex >= 0 ? `/${recurrencyIndex}` : ''}`;
  const { data } = await remove(`entries/${id}${mountURL}`);
  return data;
}
export {
  getEntries,
  getIncomesEntries,
  getExpensesEntries,
  getTypeEntries,
  createEntries,
  realizeEntries,
  updateEntries,
  deleteEntries,
};
