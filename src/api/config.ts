import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';
axios.defaults.headers['Content-Type'] = 'application/json';

export const setAxiosAuth = (token?: string) =>
  (axios.defaults.headers.common['Authorization'] = token
    ? `Bearer ${token}`
    : undefined);
