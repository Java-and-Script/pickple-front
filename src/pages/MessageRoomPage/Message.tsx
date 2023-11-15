import styled from '@emotion/styled';

import { Avatar } from '@components/Avatar';
import { Flex } from '@components/shared/Flex';
import { Text } from '@components/shared/Text';

import { theme } from '@styles/theme';

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
    <MessageItem key={message.id} isMe={isMe}>
      {isMe && (
        <Avatar
          src={
            'https://velog.velcdn.com/images/sharphand1/post/e7f981a1-fe04-4687-800a-f7e411e6abff/image.png'
          }
          size={30}
        />
      )}
      <BalloonContainer isMe={isMe}>
        {isMe && <span>{message.name}</span>}
        <Balloon isMe={isMe}>{message.content}</Balloon>
      </BalloonContainer>
      <BalloonInfo isMe={isMe} justify="flex-end" direction="column">
        <Text color={theme.PALETTE.RED_500} size={10}>
          1
        </Text>
        <Text size={10} weight={300}>
          {message.time}
        </Text>
      </BalloonInfo>
    </MessageItem>
  ) : (
    <SystemMessage>
      <Text size={10} weight={300} color="white">
        {message.content}
      </Text>
    </SystemMessage>
  );
};

const SystemMessage = styled.div`
  text-align: center;
  padding: 12px;
  & > p {
    display: inline;
    padding: 4px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.PALETTE.GRAY_400};
  }
`;

const BalloonInfo = styled(Flex)<{ isMe: boolean }>`
  align-items: ${({ isMe }) => (isMe ? 'flex-start' : 'flex-end')};
  padding-left: 4px;
`;

const BalloonContainer = styled.div<{ isMe: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 70%;
  padding-left: 10px;
  align-items: flex-start;
`;

const Balloon = styled(Text)<{ isMe: boolean }>`
  padding: 10px;
  white-space: pre-wrap;
  ${({ isMe, theme }) =>
    isMe
      ? ` 
      border-radius: 0 8px 8px 8px;
      background-color: ${theme.PALETTE.GRAY_200}; 
    `
      : `  
      border-radius: 8px 0 8px 8px;
      background-color: ${theme.PALETTE.RED_200};
  `};
`;

const MessageItem = styled.div<{ isMe: boolean }>`
  display: flex;
  flex-direction: row;
  ${({ isMe }) => !isMe && 'flex-direction: row-reverse;'};
`;
