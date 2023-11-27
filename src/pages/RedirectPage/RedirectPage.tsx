import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { useLoginQuery } from '@hooks/queries/useLoginQuery';

import { theme } from '@styles/theme';

import { useTokenStore } from '@stores/accessToken.store';
import { useLoginInfoStore } from '@stores/loginInfo.store';

import { Authenticated, Registration } from '@type/models';

import LOGO_SRC from '@assets/logoSvg.svg';

import { LogoImage, PageContent, PageWrapper } from './RedirectPage.styles';

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

  const fetchLoginInfo = useCallback(async () => {
    const { data } = await refetch();

    if (!data) {
      return;
    }

    setAccessToken(data.accessToken);

    if (isAuthenticated(data)) {
      setLoginInfo(data);

      navigate('/');
    } else {
      navigate('/register', { state: data });
    }
  }, [navigate, refetch, setLoginInfo, setAccessToken]);

  useEffect(() => {
    fetchLoginInfo();
  }, [fetchLoginInfo]);

  return (
    <PageWrapper>
      <PageContent direction="column" gap={20} align="center" justify="start">
        <LogoImage src={LOGO_SRC} width="35%" height="auto" alt="pickle logo" />
        <Flex direction="column" gap={10}>
          <Text size={40} color={theme.PALETTE.RED_400}>
            로그인중...
          </Text>
          <Flex direction="column">
            <Text size={40}>잠시만</Text>
            <Text size={40}>기다려주세요</Text>
          </Flex>
        </Flex>
      </PageContent>
    </PageWrapper>
  );
};
