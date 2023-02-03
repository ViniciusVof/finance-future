import { post } from './api_methods';

async function Authenticate(params) {
  const { data } = await post(`auth`, params);
  return data;
}

export { Authenticate };
