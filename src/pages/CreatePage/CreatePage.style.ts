import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';

export const CreatePageContainer = styled(Flex)`
  width: 100%;
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  ${({ theme }) => theme.STYLES.LAYOUT}
  padding-top: 3.1rem;
`;

export const StyledCard = styled.div`
  width: 100%;
  background-color: white;
  padding: 1.25rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
