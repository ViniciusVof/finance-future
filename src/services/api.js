import axios from 'axios';

const SECONDS_TIMEOUT = 20;

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
    Accept: '*/*',
  },
  timeout: SECONDS_TIMEOUT * 1000,
});
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('@finances:token');
    config.headers = {
      Authorization: token,
    };
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
api.interceptors.response.use(
  async response => {
    return response;
  },
  error => {
    if (error.response.status === 403 || error.response.status === 401) {
      localStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
export { api };
