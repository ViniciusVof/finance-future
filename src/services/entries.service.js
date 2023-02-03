import { get } from './api_methods';

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

export { getEntries, getIncomesEntries, getExpensesEntries };
