import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import { Button } from '@components/shared/Button';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { FallbackProps } from '@type/FallbackProps';

import { PATH_NAME } from '@consts/pathName';

import LOGO_SRC from '@assets/logoSvg.svg';

import {
  ButtonContainer,
  LogoImage,
  PageContent,
  PageWrapper,
} from './ErrorPage.styles';

const buttonProps = {
  width: '100%',
  backgroundColor: 'transparent',
  fontWeight: 500,
  height: '2rem',
  textColor: theme.PALETTE.GRAY_400,
  borderColor: theme.PALETTE.GRAY_400,
} as const;

export const ErrorPage = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  console.log(error);

  const reset = () => {
    resetErrorBoundary();
    queryClient.clear();
  };

  return (
    <PageWrapper>
      <PageContent direction="column" gap={20} align="center" justify="start">
        <LogoImage src={LOGO_SRC} width="35%" height="auto" alt="pickle logo" />
        <div>
          <Text size={40}>예상치 못한 오류가</Text>
          <Text size={40}>발생했습니다.</Text>
        </div>
        <ButtonContainer gap={16}>
          <Button {...buttonProps} onClick={reset}>
            페이지 다시 로드
          </Button>
          <Button
            {...buttonProps}
            onClick={() => {
              reset();
              navigate(PATH_NAME.MAIN);
            }}
          >
            홈페이지로
          </Button>
        </ButtonContainer>
      </PageContent>
    </PageWrapper>
  );
};