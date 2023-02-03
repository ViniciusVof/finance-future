import { get } from './api_methods';

async function getAccounts() {
  const { data } = await get(`accounts`);
  return data;
}

export { getAccounts };
