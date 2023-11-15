import { Header } from '@components/Header';

import { Message } from './Message';
import { Main, MessageRoomContainer } from './MessageRoomPage.style';

export const MessageRoomPage = () => {
  return (
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
