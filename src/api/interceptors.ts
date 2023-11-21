import { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { useTokenStore } from '@stores/accessToken.store';

import { CommonErrorResponse } from '@type/api/error';

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

export const handleAuthError = async (
  error: AxiosError<CommonErrorResponse>
) => {
  const data = error.response?.data;

  if (data?.code === 'AUT-002') {
    const { accessToken } = await postRefreshAccessToken();
    useTokenStore.getState().setAccessToken(accessToken);
  }

  if (error.config) {
    return axiosInstance(error.config);
  }
};
