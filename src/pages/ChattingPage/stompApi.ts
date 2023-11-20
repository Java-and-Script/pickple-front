import Stomp from 'stompjs';

import { SendMessageRequest } from '@type/api/chat';
import { ChatMessage } from '@type/models/ChatMessage';

const BASE_URL = import.meta.env.VITE_BASE_URL;

type ChatId = string | number;

export const stompConfig = {
  webSocketEndpoint: `${BASE_URL}/chat`,
  subscribe: (roomId: ChatId) => `/receive/rooms/${roomId}`,
  enter: (roomId: ChatId) => `/send/messages/enter/${roomId}`,
  send: (roomId: ChatId) => `/send/messages/talk/${roomId}`,
  leave: (roomId: ChatId) => `/send/messages/leave/${roomId}`,
};

type ConnectChatProps = {
  stompClient: Stomp.Client;
  connectEvent: () => void;
};

type SubscribeChatRoomProps = {
  stompClient: Stomp.Client;
  roomId: ChatId;
  subscribeEvent: (received: ChatMessage) => void;
};

type SendToChatRoomProps = {
  stompClient: Stomp.Client;
  roomId: ChatId;
  senderId: ChatId;
  content: string;
};

type LeaveChatRoomProps = {
  stompClient: Stomp.Client;
  roomId: ChatId;
  senderId: ChatId;
};

export const connect = ({ stompClient, connectEvent }: ConnectChatProps) => {
  stompClient.connect(
    {},
    () => {
      connectEvent();
    },
    () => console.log('connect failed')
  );
};

export const subscribeChatRoom = ({
  stompClient,
  roomId,
  subscribeEvent,
}: SubscribeChatRoomProps) => {
  stompClient.subscribe(stompConfig.subscribe(roomId), ({ body }) => {
    const received: ChatMessage = JSON.parse(body);

    subscribeEvent(received);
  });
};

export const sendMessageToChatRoom = ({
  stompClient,
  roomId,
  senderId,
  content,
}: SendToChatRoomProps) => {
  const sendData: SendMessageRequest = {
    senderId,
    content,
  };

  stompClient.send(stompConfig.send(roomId), {}, JSON.stringify(sendData));
};

export const leaveChatRoom = ({
  stompClient,
  roomId,
  senderId,
}: LeaveChatRoomProps) => {
  const sendData: SendMessageRequest = {
    senderId,
    content: null,
  };

  stompClient.send(stompConfig.leave(roomId), {}, JSON.stringify(sendData));
};
