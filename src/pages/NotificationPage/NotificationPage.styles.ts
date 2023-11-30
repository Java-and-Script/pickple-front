import styled from '@emotion/styled';

import { Button } from '@components/shared/Button';
import { Flex } from '@components/shared/Flex';

export const PageLayout = styled.div``;

export const PageWrapper = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 0.7rem;
  justify-content: flex-end;
`;

export const PageContent = styled(Flex)`
  padding: 10px 0 20px 0;
`;

export const DeleteButton = styled(Button)`
  ${({ theme }) => theme.STYLES.FLEX_CENTER}
`;
