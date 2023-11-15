import { useRef } from 'react';

import { Header } from '@components/Header';
import { Input } from '@components/shared/Input';

import { theme } from '@styles/theme';

import { Message } from './Message';
import {
  InputWrapper,
  Main,
  MessageRoomContainer,
  SendButton,
} from './MessageRoomPage.style';

export const MessageRoomPage = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!ref.current) {
      return;
    }
    console.log(ref.current.value);

    ref.current.value = '';
  };

  return (
    <>
      <MessageRoomContainer>
        <Header
          isLogo={false}
          title={'10월 21일 용산구 (8명)'}
          isRightContainer={true}
        />
        <Main>
          {messages.map((message, index) => (
            <Message key={index} message={message} isMe={message.id === 1} />
          ))}
        </Main>
      </MessageRoomContainer>
      <InputWrapper>
        <Input
          onSubmit={sendMessage}
          height="48px"
          backgroundColor={theme.PALETTE.GRAY_200}
          ref={ref}
        >
          <SendButton>전송</SendButton>
        </Input>
      </InputWrapper>
    </>
  );
};

const messages = [
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
  },
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
  },
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
  },
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
  },
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
  },
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
  },
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
  },
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
  },
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
  },
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
  },
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
  },
  {
    id: 1,
    name: '원지',
    content: ' 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:32',
  },
  {
    id: 2,
    name: 'hi',
    content: '안녕',
    time: '22:30',
  },
  {
    id: 2,
    name: 'hi',
    content: '안녕',
    time: '22:30',
  },
];
