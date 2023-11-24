import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';

import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import { useAllChatMessagesQuery } from '@hooks/queries/useAllChatMessagesQuery';
import { useChatRoomDetails } from '@hooks/queries/useChatRoomDetails';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { SendMessageRequest } from '@type/api/chat';
import { ChatMember } from '@type/models/ChatMember';
import { ChatMessage } from '@type/models/ChatMessage';

import { PATH_NAME } from '@consts/pathName';

import { convertUTCToKoreanTime } from '@utils/convertUTCToKoreanTime';

import { useQuitCondition } from './quitChatCondition';
import { connect, leave, send, stompConfig, subscribe } from './stompApi';

export const useChattingPage = () => {
  const navigate = useNavigate();

  const { id: roomId } = useParams();
  if (!roomId) {
    throw new Error('no room id provided');
  }

  const { data: roomDetails } = useChatRoomDetails({
    roomId: Number(roomId),
  });
  const { data: prevChatMessages } = useAllChatMessagesQuery({
    roomId: Number(roomId),
  });
  const myId = useLoginInfoStore((state) => state.loginInfo?.id);
  if (!myId || !roomDetails.members.find(({ id }) => id === myId)) {
    throw new Error('채팅방의 멤버가 아닙니다.');
  }

  const { isChatroomExitAllowed } = useQuitCondition({
    myId,
    type: roomDetails.type,
    domainId: roomDetails.domainId,
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
    const allChatMessagesWithDates = prevChatMessages.reduce(
      (prevChats: ChatMessage[], chat: ChatMessage, idx) => {
        if (idx === 0) {
          const dateSystemMessage = createDateSystemMessage(chat);
          return [...prevChats, dateSystemMessage, chat];
        }

        const prevCreatedAt = getKoreanDay(prevChatMessages[idx - 1].createdAt);
        const curCreatedAt = getKoreanDay(chat.createdAt);

        if (prevCreatedAt !== curCreatedAt) {
          const dateSystemMessage = createDateSystemMessage(chat);
          return [...prevChats, dateSystemMessage, chat];
        }

        return [...prevChats, chat];
      },
      []
    );

    setChatMessages(allChatMessagesWithDates);
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

        subscribe({
          stompClient,
          roomId,
          subscribeEvent: (received: ChatMessage) =>
            setChatMessages((prev: ChatMessage[]) => {
              const prevCreatedAt = getKoreanDay(
                prev[prev.length - 1].createdAt
              );

              const curCreatedAt = getKoreanDay(received.createdAt);

              if (prevCreatedAt !== curCreatedAt) {
                const dateSystemMessage = createDateSystemMessage(received);
                return [...prev, dateSystemMessage, received];
              }

              return [...prev, received];
            }),
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

    const sendData: SendMessageRequest = {
      senderId: myId,
      content: inputRef.current.value,
    };

    send({ stompClient, roomId, sendData });

    inputRef.current.value = '';
  };

  const quitChatting = async () => {
    if (!stompClient) {
      return;
    }

    const sendData: SendMessageRequest = {
      senderId: myId,
      content: null,
    };

    const exitCondition = await isChatroomExitAllowed();

    if (exitCondition) {
      leave({ stompClient, roomId, sendData });
      flushSync(() => setIsModalOpen(false));
      navigate(PATH_NAME.CHAT, { replace: true });
    }
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

function formatDateString(created: Date) {
  const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

  const date = new Date(created);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const daysOfWeek = DAYS[date.getDay()];

  return `${year}년 ${month}월 ${day}일 ${daysOfWeek}요일`;
}

const createDateSystemMessage = (chat: ChatMessage) => ({
  type: '날짜' as ChatMessage['type'],
  content: formatDateString(chat.createdAt),
  sender: {
    id: 0,
    nickname: 'system',
    profileImageUrl: '',
  } as ChatMember,
  roomId: chat.roomId,
  createdAt: new Date(),
});

const getKoreanDay = (date: Date) =>
  String(convertUTCToKoreanTime(date)).slice(0, 10);
