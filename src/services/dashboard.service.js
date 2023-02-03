import { get } from './api_methods';

async function getDashboard() {
  const { data } = await get(`dashboard`);
  return data;
}

export { getDashboard };
