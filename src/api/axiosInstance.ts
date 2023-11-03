import axios from 'axios';

import { setAuthorization } from './interceptors';

export const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(setAuthorization);
