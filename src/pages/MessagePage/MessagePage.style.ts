import styled from '@emotion/styled';

import { Flex } from '@components/shared/Flex';
import { Image } from '@components/shared/Image';
import { Text } from '@components/shared/Text';

export const MessageContainer = styled.div`
  ${({ theme }) => theme.STYLES.LAYOUT}
  min-height: 100dvh;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 10px 0;
`;

export const TabBar = styled(Flex)``;

export const TabBarButton = styled.button<{ isSelected: boolean }>`
  width: 50%;
  background-color: white;
  border: none;
  border-bottom: ${({ isSelected }) =>
    isSelected ? ' 1px solid black' : ' 1px solid white'};
  padding: 10px;
`;

export const MessageRoomItem = styled(Flex)``;

export const MessageItemAvatar = styled(Image)`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.PALETTE.GRAY_400};
`;
export const Nickname = styled(Text)`
  width: 100%;
`;
export const DateText = styled(Text)`
  min-width: 70px;
`;
