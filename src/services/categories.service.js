import { get, post, put } from './api_methods';

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
async function updateCategory(params) {
  const { data } = await put(`categories`, params);
  return data;
}
async function updateSubCategory(params) {
  const { data } = await put(`subcategories`, params);
  return data;
}
export {
  getCategories,
  createCategory,
  createSubCategory,
  updateCategory,
  updateSubCategory,
};
