import axios from 'axios';

import { setAuthorization } from './interceptors';

const PROD = import.meta.env.MODE === 'production';

const baseURL = PROD
  ? `${location.protocol}//${location.host}`
  : import.meta.env.VITE_BASE_URL;

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(setAuthorization);
