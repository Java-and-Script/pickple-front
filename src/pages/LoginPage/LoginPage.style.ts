import styled from '@emotion/styled';

import { Image } from '@components/shared/Image';

export const LoginContainer = styled.div`
  ${({ theme }) => theme.STYLES.FLEX_CENTER};
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
`;

export const MainImage = styled(Image)`
  border-radius: 50px;
  object-position: top;
`;

export const RemoveLayout = styled.div`
  margin: -50px -16px 0 -16px;
  padding: 50px 16px 80px 16px;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  display: flex;
  min-height: 100%;
`;
