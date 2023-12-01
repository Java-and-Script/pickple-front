import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import LOGO_SRC from '@assets/logoSvg.svg';

import { LogoImage, PageContent, PageWrapper } from './RedirectPage.styles';
import { useRedirectPage } from './hooks/useRedirectPage';

export const RedirectPage = () => {
  useRedirectPage();

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
