import { useEffect, useRef, useState } from 'react';

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
  const [messages, setMessages] = useState(data);

  const messageEndRef = useRef<HTMLDivElement | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current || inputRef.current.value === '') {
      return;
    }

    const value = inputRef.current.value;

    setMessages((prev) => [
      ...prev,
      {
        id: 2,
        name: 'hi',
        content: value,
        time: '22:30',
        type: 'conversation',
      },
    ]);

    inputRef.current.value = '';
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <>
      <MessageRoomContainer>
        <Header
          isLogo={false}
          title={'10월 21일 용산구 (8명)'}
          isRightContainer={true}
        />
        <Main direction="column" gap={8}>
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
          ref={inputRef}
        >
          <SendButton>전송</SendButton>
        </Input>
      </InputWrapper>
      <div ref={messageEndRef}></div>
    </>
  );
};

const data: {
  id: number;
  name: string;
  content: string;
  time: string;
  type: 'conversation' | 'system';
}[] = [
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
    type: 'conversation',
  },
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
    type: 'conversation',
  },
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
    type: 'conversation',
  },
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
    type: 'conversation',
  },
  {
    id: 1,
    name: '원지',
    content: '안녕안녕안녕안녕안녕 안녕안녕안녕안녕안녕안녕안녕 안녕안녕',
    time: '20:30',
    type: 'conversation',
  },
  {
    id: 1,
    name: '원지',
    content: '원지님이 입장했습니다.',
    time: '20:30',
    type: 'system',
  },
  {
    id: 2,
    name: 'hi',
    content: '안녕',
    time: '22:30',
    type: 'conversation',
  },
  {
    id: 2,
    name: 'hi',
    content: '안녕',
    time: '22:30',
    type: 'conversation',
  },
];
