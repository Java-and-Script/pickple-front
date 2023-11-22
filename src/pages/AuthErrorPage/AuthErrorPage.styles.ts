import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';
import { Image } from '@components/shared/Image';

export const PageWrapper = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const PageContent = styled(Flex)`
  height: 100%;
  padding: 40px 0 20px 0;
`;

export const LogoImage = styled(Image)`
  padding-bottom: 40px;
`;

export const ButtonContainer = styled(Flex)`
  width: 100%;
  padding: 0 16px;
`;
