import axios from 'axios';

import { BASE_URL } from '@consts/network';

import { setAuthorization } from './interceptors';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(setAuthorization);
