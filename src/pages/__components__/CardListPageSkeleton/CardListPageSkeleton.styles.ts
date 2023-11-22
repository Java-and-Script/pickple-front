import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';

export const PageWrapper = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const PageContent = styled(Flex)`
  margin: 10px 0;
`;
