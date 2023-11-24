import { Avatar } from '@components/Avatar';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import { ChatMessage } from '@type/models/ChatMessage';

import { convertUTCToKoreanTime } from '@utils/convertUTCToKoreanTime';

import {
  BalloonContainer,
  BalloonInfo,
  SystemMessage,
} from './ChattingPage.style';

type ChatProps = {
  chatInfo: ChatMessage;
  isOthersMessage: boolean;
  onClickAvatar: () => void;
};

export const Chat = ({
  chatInfo,
  isOthersMessage,
  onClickAvatar,
}: ChatProps) => {
  const { type: chatType, createdAt, sender, content } = chatInfo;

  return chatType === '대화' ? (
    <Flex
      key={String(createdAt)}
      direction={isOthersMessage ? 'row' : 'row-reverse'}
    >
      {isOthersMessage && (
        <Avatar
          src={sender.profileImageUrl}
          size={30}
          onClick={onClickAvatar}
        />
      )}
      <BalloonContainer
        isOthersMessage={isOthersMessage}
        direction="column"
        gap={4}
        align="flex-start"
      >
        {isOthersMessage && <p>{sender.nickname}</p>}
        <Text>{content}</Text>
      </BalloonContainer>
      <BalloonInfo
        align={isOthersMessage ? 'flex-start' : 'flex-end'}
        justify="flex-end"
        direction="column"
      >
        <Text color={theme.PALETTE.RED_500} size={10}>
          {}
        </Text>
        <Text size={10} weight={300}>
          {String(convertUTCToKoreanTime(createdAt)).slice(11, 16)}
        </Text>
      </BalloonInfo>
    </Flex>
  ) : (
    <SystemMessage type={chatType}>
      <Text size={10} weight={300} color="white">
        {content}
      </Text>
    </SystemMessage>
  );
};
