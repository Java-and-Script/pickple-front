import { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { useTokenStore } from '@stores/accessToken.store';

import { isValidServerError } from '@utils/isValidServerError';

import { axiosInstance } from './axiosInstance';
import { postRefreshAccessToken } from './member/postRefreshAccessToken';

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

export const handleAuthError = async (error: AxiosError) => {
  if (error.config && isValidServerError(error)) {
    if (error.response?.data.code === 'AUT-002') {
      const { accessToken } = await postRefreshAccessToken();
      useTokenStore.getState().setAccessToken(accessToken);

      return axiosInstance(error.config);
    }
  }

  throw error;
};
