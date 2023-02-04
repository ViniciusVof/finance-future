import { get, post } from './api_methods';

async function getCategories() {
  const { data } = await get(`categories`);
  return data;
}
async function createCategory(values) {
  const { data } = await post(`categories`, values);
  return data;
}
async function createSubCategory(values) {
  const { data } = await post(`subcategories`, values);
  return data;
}
export { getCategories, createCategory, createSubCategory };
