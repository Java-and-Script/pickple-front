import { Header } from '@components/Header';
import { Navbar } from '@components/Navbar';
import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';

import { FallbackProps } from '@type/FallbackProps';

import { isValidServerError } from '@utils/isValidServerError';

import LOGO_SRC from '@assets/logoSvg.svg';

import {
  ButtonContainer,
  LogoImage,
  PageContent,
  PageWrapper,
} from './AuthErrorPage.styles';
import { AUTH_PAGE_BUTTON_PROPS } from './constants/buttonProps';
import { useAuthErrorPage } from './hooks/useAuthErrorPage';

export const AuthErrorPage = ({ error, resetErrorBoundary }: FallbackProps) => {
  if (!isValidServerError(error)) {
    throw error;
  }
  const errorCode = error.response?.data.code;
  if (errorCode !== 'AUT-003' && errorCode !== 'AUT-006') {
    throw error;
  }

  const { navigateToLoginPage, navigateToMainPage } =
    useAuthErrorPage(resetErrorBoundary);

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
            <Button {...AUTH_PAGE_BUTTON_PROPS} onClick={navigateToLoginPage}>
              로그인하기
            </Button>
            <Button {...AUTH_PAGE_BUTTON_PROPS} onClick={navigateToMainPage}>
              홈으로
            </Button>
          </ButtonContainer>
        </PageContent>
      </PageWrapper>
      <Navbar />
    </>
  );
};
