import { InternalAxiosRequestConfig } from 'axios';

export const setAuthorization = (config: InternalAxiosRequestConfig) => {
  const stringifiedAccssToken = localStorage.getItem('ACCESS_TOKEN');
  if (!stringifiedAccssToken) {
    return config;
  }

  const accessToken = JSON.parse(stringifiedAccssToken);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};
