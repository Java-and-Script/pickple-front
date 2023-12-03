import { useNavigate } from 'react-router-dom';

import { Header } from '@components/Header';
import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { PATH_NAME } from '@constants/pathName';

import LOGO_SRC from '@assets/logoSvg.svg';

import {
  ButtonContainer,
  LogoImage,
  PageContent,
  PageWrapper,
} from './NotFoundPage.styles';

const buttonProps = {
  width: '100%',
  backgroundColor: 'transparent',
  fontWeight: 500,
  height: '2rem',
  textColor: theme.PALETTE.GRAY_400,
  borderColor: theme.PALETTE.GRAY_400,
} as const;

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Header />
      <PageContent direction="column" gap={20} align="center" justify="start">
        <LogoImage src={LOGO_SRC} width="35%" height="auto" alt="pickle logo" />
        <Flex direction="column" align="center" gap={10}>
          <Text size={40}>페이지가</Text>
          <Text size={40}>존재하지 않습니다</Text>
        </Flex>
        <ButtonContainer gap={16}>
          <Button {...buttonProps} onClick={() => navigate(-1)}>
            이전
          </Button>
          <Button {...buttonProps} onClick={() => navigate(PATH_NAME.MAIN)}>
            홈페이지로
          </Button>
        </ButtonContainer>
      </PageContent>
    </PageWrapper>
  );
};
