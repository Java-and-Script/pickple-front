import { Avatar } from '@components/Avatar';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

import {
  BalloonContainer,
  BalloonInfo,
  SystemMessage,
} from './MessageRoomPage.style';

type MessageProps = {
  message: {
    id: number;
    name: string;
    content: string;
    time: string;
    type: 'conversation' | 'system';
  };
  isMe: boolean;
};

export const Message = ({ message, isMe }: MessageProps) => {
  return message.type === 'conversation' ? (
    <Flex key={message.id} direction={isMe ? 'row' : 'row-reverse'}>
      {isMe && (
        <Avatar
          src={
            'https://velog.velcdn.com/images/sharphand1/post/e7f981a1-fe04-4687-800a-f7e411e6abff/image.png'
          }
          size={30}
        />
      )}
      <BalloonContainer
        isMe={isMe}
        direction="column"
        gap={4}
        align="flex-start"
      >
        {isMe && <span>{message.name}</span>}
        <Text>{message.content}</Text>
      </BalloonContainer>
      <BalloonInfo
        align={isMe ? 'flex-start' : 'flex-end'}
        justify="flex-end"
        direction="column"
      >
        <Text color={theme.PALETTE.RED_500} size={10}>
          1
        </Text>
        <Text size={10} weight={300}>
          {message.time}
        </Text>
      </BalloonInfo>
    </Flex>
  ) : (
    <SystemMessage>
      <Text size={10} weight={300} color="white">
        {message.content}
      </Text>
    </SystemMessage>
  );
};
