import { api } from './api';

export const get = path => api.get(`${path}`);

export const post = (path, params) => api.post(`${path}`, params);

export const put = (path, params) => api.put(`${path}`, params);

export const patch = (path, params) => api.patch(`${path}`, params);

export const remove = path => api.delete(`${path}`);

export const handleRequestError = status => {
  if (status === 401 || status === 429 || status === 500) {
    return true;
  }
  return false;
};
