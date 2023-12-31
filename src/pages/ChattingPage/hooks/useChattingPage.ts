import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import { useAllChatMessagesQuery } from '@hooks/chats/useAllChatMessagesQuery';
import { useChatRoomDetails } from '@hooks/chats/useChatRoomDetails';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { SendMessageRequest } from '@type/api/chat';
import { ChatMember } from '@type/models/ChatMember';
import { ChatMessage } from '@type/models/ChatMessage';

import { CHAT_TYPE } from '@constants/chat';
import { PATH_NAME } from '@constants/pathName';

import { MODAL_CONTENTS } from '../constants/modalContents';
import { formatDateString, getSlicedTime } from '../services/formatDate';
import { useQuitCondition } from '../services/quitChatCondition';
import {
  connect,
  leave,
  send,
  stompConfig,
  subscribe,
} from '../services/stompApi';

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
  const [modalContents, setModalContents] = useState(MODAL_CONTENTS.DEFAULT);

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

        const prevCreatedAt = getSlicedTime(
          prevChatMessages[idx - 1].createdAt
        );
        const curCreatedAt = getSlicedTime(chat.createdAt);

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
    const client = Stomp.over(newSock);
    client.debug = () => null;

    setSock(newSock);
    setStompClient(client);

    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!stompClient || !sock) {
      return;
    }

    connect({
      stompClient,
      connectEvent: () => {
        subscribe({
          stompClient,
          roomId,
          subscribeEvent: (received: ChatMessage) =>
            setChatMessages((prev: ChatMessage[]) => {
              const prevCreatedAt = getSlicedTime(
                prev[prev.length - 1].createdAt
              );

              const curCreatedAt = getSlicedTime(received.createdAt);

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
      sock.close();
    };
  }, [roomId, sock, stompClient]);

  const sendChatMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current || inputRef.current.value === '' || !stompClient) {
      return;
    }

    if (inputRef.current.value.length > 500) {
      return toast.error('채팅 메세지는 500자를 넘길 수 없습니다.');
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
    flushSync(() => setIsModalOpen(false));
    navigate(path);
  };

  return {
    roomDetails,
    chatMessages,
    myId,
    isModalOpen,
    inputRef,
    chattingEndRef,
    modalContents,
    setModalContents,
    setIsModalOpen,
    moveToPage,
    sendChatMessage,
    quitChatting,
    handleClickChattingMenu,
  };
};

const createDateSystemMessage = (chat: ChatMessage) => ({
  type: CHAT_TYPE.DATE,
  content: formatDateString(chat.createdAt),
  sender: {
    id: 0,
    nickname: 'system',
    profileImageUrl: '',
  } as ChatMember,
  roomId: chat.roomId,
  createdAt: new Date(),
});
