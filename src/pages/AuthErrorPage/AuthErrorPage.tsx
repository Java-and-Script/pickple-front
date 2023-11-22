import { useCallback, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import { Header } from '@components/Header';
import { Navbar } from '@components/Navbar';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';

import { usePathnameChange } from '@hooks/usePathnameChange';

import { theme } from '@styles/theme';

import { useTokenStore } from '@stores/accessToken.store';
import { useLoginInfoStore } from '@stores/loginInfo.store';

import { FallbackProps } from '@type/FallbackProps';

import { PATH_NAME } from '@consts/pathName';

import { isValidServerError } from '@utils/isValidServerError';

import LOGO_SRC from '@assets/logoSvg.svg';

import {
  ButtonContainer,
  LogoImage,
  PageContent,
  PageWrapper,
} from './AuthErrorPage.styles';

const buttonProps = {
  width: '100%',
  backgroundColor: 'transparent',
  fontWeight: 500,
  height: '2rem',
  textColor: theme.PALETTE.GRAY_400,
  borderColor: theme.PALETTE.GRAY_400,
} as const;

export const AuthErrorPage = ({ error, resetErrorBoundary }: FallbackProps) => {
  if (!isValidServerError(error)) {
    throw error;
  }
  const errorCode = error.response?.data.code;
  if (errorCode !== 'AUT-003' && errorCode !== 'AUT-006') {
    throw error;
  }

  const setAceessToken = useTokenStore((state) => state.setAccessToken);
  const setLoginInfo = useLoginInfoStore((state) => state.setLoginInfo);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const reset = useCallback(() => {
    resetErrorBoundary();
    queryClient.clear();
  }, [queryClient, resetErrorBoundary]);

  usePathnameChange(reset);

  useLayoutEffect(() => {
    setAceessToken(null);
    setLoginInfo(null);
  }, [setAceessToken, setLoginInfo]);

  return (
    <>
      <PageWrapper>
        <Header />
        <PageContent direction="column" gap={20} align="center" justify="start">
          <LogoImage
            src={LOGO_SRC}
            width="35%"
            height="auto"
            alt="pickle logo"
          />
          <div>
            <Text size={40}>세션이</Text>
            <Text size={40}>만료되었습니다</Text>
          </div>
          <ButtonContainer gap={16}>
            <Button {...buttonProps} onClick={() => navigate(PATH_NAME.LOGIN)}>
              로그인하기
            </Button>
            <Button {...buttonProps} onClick={() => navigate(PATH_NAME.MAIN)}>
              홈으로
            </Button>
          </ButtonContainer>
        </PageContent>
      </PageWrapper>
      <Navbar />
    </>
  );
};
