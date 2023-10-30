import styled from '@emotion/styled';

import { Image } from '@components/shared/Image';

const HEADER_HEIGHT = '2.5rem';
const NAV_HEIGHT = '4.375rem';

export const LoginContainer = styled.div`
  ${({ theme }) => theme.STYLES.FLEX_CENTER};
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  height: calc(100% - ${HEADER_HEIGHT} - ${NAV_HEIGHT});
`;

export const MainImage = styled(Image)`
  border-radius: 50px;
  object-position: top;
`;
