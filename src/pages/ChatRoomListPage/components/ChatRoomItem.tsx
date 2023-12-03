import { Flex } from '@components/shared/Flex';

import { theme } from '@styles/theme';

import { ChatRoom } from '@type/models/ChatRoom.ts';

import { CHAT_ROOM_TAB_TITLE } from '@constants/chat.ts';

import { createdAtToString } from '@utils/createdAtToString.ts';

import {
  ChatItemAvatar,
  ChatMatchDuration,
  ChatMatchStartTime,
  ChatMatchStatus,
  DateText,
  LastMessage,
  MessageContainer,
  Nickname,
} from '../ChatRoomListPage.style.ts';

type ChatRoomItemProps = {
  chatRoomItem: ChatRoom;
  onClickChatRoomItem: () => void;
};

const GuestChatRoomProfile = ({
  playStartTime,
  playTimeMinutes,
}: Pick<ChatRoom, 'playStartTime' | 'playTimeMinutes'>) => {
  const playTimeHours = (playTimeMinutes as number) / 60;

  return (
    <ChatMatchStatus>
      <ChatMatchStartTime>{playStartTime?.slice(0, 5)}</ChatMatchStartTime>
      <ChatMatchDuration>{playTimeHours}h</ChatMatchDuration>
    </ChatMatchStatus>
  );
};

export const ChatRoomItem = ({
  chatRoomItem,
  onClickChatRoomItem,
}: ChatRoomItemProps) => {
  const {
    roomName,
    type: roomType,
    lastMessageCreatedAt,
    lastMessageContent,
    roomIconImageUrl,
    playStartTime,
    playTimeMinutes,
  } = chatRoomItem;

  return (
    <Flex justify="space-between" onClick={onClickChatRoomItem}>
      <Flex gap={8}>
        {roomType === CHAT_ROOM_TAB_TITLE.GUEST ? (
          <GuestChatRoomProfile
            playStartTime={playStartTime}
            playTimeMinutes={playTimeMinutes}
          ></GuestChatRoomProfile>
        ) : (
          <ChatItemAvatar
            width="40px"
            alt="avatar"
            src={roomIconImageUrl as string}
          />
        )}
        <MessageContainer direction="column">
          <Nickname size={12} weight={500} ellipsis={1}>
            {roomName}
          </Nickname>
          <LastMessage size={12} weight={300} ellipsis={1}>
            {lastMessageContent}
          </LastMessage>
        </MessageContainer>
      </Flex>
      <DateText size={8} color={theme.PALETTE.GRAY_500} nowrap>
        {createdAtToString(new Date(lastMessageCreatedAt))}
      </DateText>
    </Flex>
  );
};
