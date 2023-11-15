import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

export const NotificationItemWrapper = styled(Flex)`
  border-radius: 14px;
  background-color: white;
  padding: 12px;
`;

export const AgoText = styled(Text)`
  align-self: center;
  position: relative;
`;

export const Badge = styled.div`
  position: absolute;
  top: -1px;
  right: -6px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.PALETTE.RED_500};
`;
