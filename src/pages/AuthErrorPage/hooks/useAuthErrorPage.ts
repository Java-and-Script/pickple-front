import { useCallback } from 'react';
import { useLayoutEffect } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import { usePathnameChange } from '@hooks/usePathnameChange';

import { useTokenStore } from '@stores/accessToken.store';
import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PATH_NAME } from '@constants/pathName';

export const useAuthErrorPage = (
  resetErrorBoundary: FallbackProps['resetErrorBoundary']
) => {
  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const setLoginInfo = useLoginInfoStore((state) => state.setLoginInfo);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const reset = useCallback(() => {
    resetErrorBoundary();
    queryClient.clear();
  }, [queryClient, resetErrorBoundary]);

  usePathnameChange(reset);

  useLayoutEffect(() => {
    setAccessToken(null);
    setLoginInfo(null);
  }, [setAccessToken, setLoginInfo]);

  const navigateToLoginPage = () => navigate(PATH_NAME.LOGIN);
  const navigateToMainPage = () => navigate(PATH_NAME.MAIN);

  return { navigateToLoginPage, navigateToMainPage };
};
