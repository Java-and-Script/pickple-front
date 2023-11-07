import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoginQuery } from '@hooks/queries/useLoginQuery';

import { Authenticated, Registration } from '@type/models';

export const RedirectPage = () => {
  const navigate = useNavigate();

  const authCode = new URL(window.location.href).searchParams.get('code');

  const { refetch } = useLoginQuery({
    oauthProvider: 'KAKAO',
    authCode: authCode!,
  });
  console.log('authCode', authCode);

  const isAuthenticated = (target: Authenticated | Registration) => {
    const result = target.refreshToken === null;

    return !result;
  };

  const getLoginInfo = useCallback(async () => {
    const { data } = await refetch();

    if (!data) {
      return;
    }

    localStorage.setItem('LOGIN_INFO', JSON.stringify(data));
    localStorage.setItem(
      'ACCESS_TOKEN',
      JSON.stringify({ accessToken: data.accessToken })
    );

    if (isAuthenticated(data)) {
      navigate('/');
    } else {
      navigate('/register');
    }
  }, [navigate, refetch]);

  useEffect(() => {
    getLoginInfo();
  }, [getLoginInfo]);

  return <div>로그인 중입니다.</div>;
};
