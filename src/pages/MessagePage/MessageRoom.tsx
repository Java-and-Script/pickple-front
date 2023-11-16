import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { getGameStartDate, isGameEnded } from '@utils/domain.ts';

import {
  DateText,
  MessageItemAvatar,
  MessageMatchDuration,
  MessageMatchStartTime,
  MessageMatchStatus,
  MessageRoomItem,
  Nickname,
} from './MessagePage.style.ts';
import { MessageRoomInfo } from './MessagePage.tsx';

type MessageRoomProps = {
  messageRoom: MessageRoomInfo;
  onClickMessage: () => void;
};

export const MessageRoom = ({
  messageRoom,
  onClickMessage,
}: MessageRoomProps) => {
  const { nickname, content, date, img, type } = messageRoom;

  const startTime = getGameStartDate('2023-12-01', '11:30');

  return (
    <MessageRoomItem justify="space-between" onClick={onClickMessage}>
      <Flex gap={8}>
        {type === 'game' ? (
          <MessageMatchStatus>
            {isGameEnded(startTime, 90) ? (
              <MessageMatchStartTime>종료</MessageMatchStartTime>
            ) : (
              <>
                <MessageMatchStartTime>
                  {`${startTime.toTimeString().slice(0, 5)}`}
                </MessageMatchStartTime>
                <MessageMatchDuration>{`${90 / 60}h`}</MessageMatchDuration>
              </>
            )}
          </MessageMatchStatus>
        ) : (
          <MessageItemAvatar width="40" alt="avatar" src={img} />
        )}
        <Flex direction="column">
          <Nickname size={12} weight={500} ellipsis={1}>
            {nickname}
          </Nickname>
          <Text size={12} weight={300} ellipsis={1}>
            {content}
          </Text>
        </Flex>
      </Flex>
      <DateText size={8} color={theme.PALETTE.GRAY_500}>
        {date}
      </DateText>
    </MessageRoomItem>
  );
};
