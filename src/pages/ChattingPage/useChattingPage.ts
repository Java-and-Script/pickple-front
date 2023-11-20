import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import { useAllChatMessagesQuery } from '@hooks/queries/useAllChatMessagesQuery';
import { useChatRoomDetails } from '@hooks/queries/useChatRoomDetails';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { ChatMessage } from '@type/models/ChatMessage';

import { PATH_NAME } from '@consts/pathName';

import {
  connect,
  leaveChatRoom,
  sendMessageToChatRoom,
  stompConfig,
  subscribeChatRoom,
} from './stompApi';

export const useChattingPage = () => {
  const navigate = useNavigate();

  const { id: roomId } = useParams();
  if (!roomId) {
    throw new Error('no room id provided');
  }
  const myId = useLoginInfoStore((state) => state.loginInfo?.id);

  const { data: roomDetails } = useChatRoomDetails({
    roomId: Number(roomId),
  });
  const { data: prevChatMessages } = useAllChatMessagesQuery({
    roomId: Number(roomId),
  });

  const [sock, setSock] = useState<WebSocket | null>(null);
  const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);
  const [chatMessages, setChatMessages] = useState(prevChatMessages);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  console.log('connected: ', isConnected);

  const chattingEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    chattingEndRef.current?.scrollIntoView();
  }, [chatMessages]);

  useEffect(() => {
    setChatMessages(prevChatMessages);
  }, [prevChatMessages]);

  useEffect(() => {
    const newSock = new SockJS(stompConfig.webSocketEndpoint);

    setSock(newSock);
    setStompClient(Stomp.over(newSock));
  }, []);

  useEffect(() => {
    if (!stompClient || !sock) {
      return;
    }

    connect({
      stompClient,
      connectEvent: () => {
        setIsConnected(true);

        subscribeChatRoom({
          stompClient,
          roomId,
          subscribeEvent: (received: ChatMessage) =>
            setChatMessages((prev: ChatMessage[]) => [...prev, received]),
        });
      },
    });

    return () => {
      setIsConnected(false);
      sock.close();
    };
  }, [roomId, sock, stompClient]);

  const sendChatMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current || inputRef.current.value === '' || !stompClient) {
      return;
    }

    const value = inputRef.current.value;

    sendMessageToChatRoom({
      stompClient,
      roomId,
      senderId: String(myId),
      content: value,
    });

    inputRef.current.value = '';
  };

  const quitChatting = () => {
    if (!stompClient) {
      return;
    }

    leaveChatRoom({ stompClient, roomId, senderId: String(myId) });

    navigate(PATH_NAME.MESSAGE);
  };

  const handleClickChattingMenu = () => {
    setIsModalOpen(true);
  };

  const moveToPage = (path: string) => {
    navigate(path);
  };

  return {
    roomDetails,
    chatMessages,
    myId,
    isModalOpen,
    inputRef,
    chattingEndRef,
    setIsModalOpen,
    moveToPage,
    sendChatMessage,
    quitChatting,
    handleClickChattingMenu,
  };
};
