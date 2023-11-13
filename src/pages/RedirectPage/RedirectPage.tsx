import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoginQuery } from '@hooks/queries/useLoginQuery';

import { useTokenStore } from '@stores/accessToken.store';
import { useLoginInfoStore } from '@stores/loginInfo.store';

import { Authenticated, Registration } from '@type/models';

export const RedirectPage = () => {
  const navigate = useNavigate();

  const authCode = new URL(window.location.href).searchParams.get('code');

  const { refetch } = useLoginQuery({
    oauthProvider: 'KAKAO',
    authCode: authCode!,
  });

  const isAuthenticated = (target: Authenticated | Registration) => {
    const result = target.refreshToken === null;

    return !result;
  };

  const { setLoginInfo } = useLoginInfoStore();
  const { setAccessToken } = useTokenStore();

  const getLoginInfo = useCallback(async () => {
    const { data } = await refetch();

    if (!data) {
      return;
    }
    setLoginInfo(data);
    setAccessToken(data.accessToken);

    if (isAuthenticated(data)) {
      navigate('/');
    } else {
      navigate('/register');
    }
  }, [navigate, refetch, setLoginInfo, setAccessToken]);

  useEffect(() => {
    getLoginInfo();
  }, [getLoginInfo]);

  return <div>로그인 중입니다.</div>;
};
