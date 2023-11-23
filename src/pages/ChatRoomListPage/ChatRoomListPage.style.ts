import styled from '@emotion/styled';

import {
  MatchDuration,
  MatchStartTime,
  MatchStatus,
} from '@components/MatchItem/MatchItem.styles';
import { Flex } from '@components/shared/Flex';
import { Image } from '@components/shared/Image';
import { Text } from '@components/shared/Text';

export const MessagePageContainer = styled.div`
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
  color: black;
`;

export const ChatItemAvatar = styled(Image)`
  border-radius: 4px;
  min-width: 40px;
  border: 1px solid ${({ theme }) => theme.PALETTE.GRAY_400};
`;

export const Nickname = styled(Text)`
  width: 100%;
`;

export const DateText = styled(Text)`
  max-width: 200px;
  flex-grow: 0;
`;

export const ChatMatchStatus = styled(MatchStatus)`
  width: 40px;
  height: 40px;
`;

export const ChatMatchStartTime = styled(MatchStartTime)`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXS};
`;

export const ChatMatchDuration = styled(MatchDuration)`
  font-size: 8px;
`;

export const InformText = styled(Text)`
  padding: 16px;
`;

export const ChatMessage = styled(Text)``;

export const MessageContainer = styled(Flex)`
  flex-grow: 1;
`;
