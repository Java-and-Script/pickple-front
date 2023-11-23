import Stomp from 'stompjs';

const BASE_URL = import.meta.env.VITE_BASE_URL;

type ChatId = string | number;

export const stompConfig = {
  webSocketEndpoint: `${BASE_URL}/chat`,
  subscribe: (roomId: ChatId) => `/receive/rooms/${roomId}`,
  enter: (roomId: ChatId) => `/send/messages/enter/${roomId}`,
  send: (roomId: ChatId) => `/send/messages/talk/${roomId}`,
  leave: (roomId: ChatId) => `/send/messages/leave/${roomId}`,
};

type ConnectProps = {
  stompClient: Stomp.Client;
  connectEvent: () => void;
};

type SubscribeProps<T> = {
  stompClient: Stomp.Client;
  roomId: ChatId;
  subscribeEvent: (received: T) => void;
};

type SendProps<T> = {
  stompClient: Stomp.Client;
  roomId: ChatId;
  sendData: T;
};

type LeaveProps<T> = {
  stompClient: Stomp.Client;
  roomId: ChatId;
  sendData: T;
};

export const connect = ({ stompClient, connectEvent }: ConnectProps) => {
  stompClient.connect(
    {},
    () => {
      connectEvent();
    },
    () => console.log('connect failed')
  );
};

export const subscribe = <T>({
  stompClient,
  roomId,
  subscribeEvent,
}: SubscribeProps<T>) => {
  stompClient.subscribe(stompConfig.subscribe(roomId), ({ body }) => {
    const received: T = JSON.parse(body);

    subscribeEvent(received);
  });
};

export const enter = <T>({ stompClient, roomId, sendData }: LeaveProps<T>) => {
  stompClient.send(stompConfig.enter(roomId), {}, JSON.stringify(sendData));
};

export const send = <T>({ stompClient, roomId, sendData }: SendProps<T>) => {
  stompClient.send(stompConfig.send(roomId), {}, JSON.stringify(sendData));
};

export const leave = <T>({ stompClient, roomId, sendData }: LeaveProps<T>) => {
  stompClient.send(stompConfig.leave(roomId), {}, JSON.stringify(sendData));
};
