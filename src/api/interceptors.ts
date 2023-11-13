import { InternalAxiosRequestConfig } from 'axios';

import { useTokenStore } from '@stores/accessToken.store';

export const setAuthorization = (config: InternalAxiosRequestConfig) => {
  const accessToken = useTokenStore.getState().accessToken;

  if (!accessToken) {
    return config;
  }

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};
