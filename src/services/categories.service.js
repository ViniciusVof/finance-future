import { get } from './api_methods';

async function getCategories() {
  const { data } = await get(`categories`);
  return data;
}

export { getCategories };
