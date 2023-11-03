import { InternalAxiosRequestConfig } from 'axios';

export const setAuthorization = (config: InternalAxiosRequestConfig) => {
  const stringifiedAccessToken = localStorage.getItem('ACCESS_TOKEN');
  if (!stringifiedAccessToken) {
    return config;
  }

  const { accessToken } = JSON.parse(stringifiedAccessToken);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};
