import axios from 'axios';

import { setAuthorization } from './interceptors';

const PROD = import.meta.env.MODE === 'production';
const baseURL = PROD ? import.meta.env.VITE_BASE_URL : '/api';

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(setAuthorization);
