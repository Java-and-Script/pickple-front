import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';

export const PageLayout = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  margin-top: -2rem;
`;

export const PageWrapper = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const StyledTitle = styled.div`
  margin-bottom: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PageContent = styled(Flex)`
  padding: 10px 0 20px 0;
`;
