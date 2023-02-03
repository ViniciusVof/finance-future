import { get, post } from './api_methods';

async function createAccount(params) {
  const { data } = await post(`accounts`, params);
  return data;
}
async function getAccounts() {
  const { data } = await get(`accounts`);
  return data;
}

async function getTypeAccounts() {
  const { data } = await get(`typeaccounts`);
  return data;
}

export { getAccounts, getTypeAccounts, createAccount };
