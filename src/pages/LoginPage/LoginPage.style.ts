import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';
import { Image } from '@components/shared/Image';

export const LoginContainer = styled(Flex)`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const Main = styled.div`
  height: 100%;
  flex-grow: 1;
  ${({ theme }) => theme.STYLES.FLEX_ALIGN_CENTER};
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

export const MainImage = styled(Image)`
  border-radius: 50px;
  object-position: top;
  max-width: 767px;
`;

export const LogoImage = styled(Image)`
  margin-bottom: 20px;
`;

export const KakaoLoginImage = styled(Image)`
  max-width: 767px;
`;

export const KakaoLogin = styled(Flex)`
  height: 60px;
  width: 100%;
  background-color: #ffe617;
  border-radius: 10px;
`;
