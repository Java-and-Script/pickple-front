import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';

export const MatchStatus = styled(Flex)`
  background-color: ${({ theme }) => theme.PALETTE.GRAY_100};
  padding: 10px;
  width: 44px;
  height: 44px;
  border-radius: 8px;
`;

export const MatchStartTime = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 143%;
  white-space: nowrap;
`;

export const MatchDuration = styled.span`
  color: ${({ theme }) => theme.PALETTE.GRAY_400};
  font-size: 10px;
  font-weight: 700;
  line-height: 143%;
`;
