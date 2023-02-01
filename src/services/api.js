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
export { api };
