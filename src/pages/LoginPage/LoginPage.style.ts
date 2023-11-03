import styled from '@emotion/styled';

import { Image } from '@components/shared/Image';

export const LoginContainer = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const Main = styled.div`
  height: 100%;
  ${({ theme }) => theme.STYLES.FLEX_ALIGN_CENTER};
  flex-direction: column;
  justify-content: center;
  gap: 20px;
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
