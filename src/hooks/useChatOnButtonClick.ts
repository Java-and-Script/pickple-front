import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import { getPersonalChatRoomExisted } from '@api/chat/getPersonalChatRoomExisted';

import {
  connect,
  enter,
  stompConfig,
  subscribe,
} from '@pages/ChattingPage/stompApi';

import { useCreatePersonalChatRoomMutation } from '@hooks/mutations/useCreatePersonalChatRoomMutation';

import { SendMessageRequest } from '@type/api/chat';
import { Member } from '@type/models';
import { ChatMessage } from '@type/models/ChatMessage';
import { ChatRoom } from '@type/models/ChatRoom';

import { PATH_NAME } from '@consts/pathName';

type useChatOnButtonClickProps = {
  targetId: Member['id'];
  targetNickname: Member['nickname'];
  myId: Member['id'] | null;
  navigate: (path: string) => void;
};

export const useChatOnButtonClick = ({
  targetId,
  myId = null,
  navigate: moveToPage,
}: useChatOnButtonClickProps) => {
  const { refetch: fetchPersonalChatRoomExisted } = useQuery({
    queryKey: ['personal-room-existed', targetId],
    queryFn: () => getPersonalChatRoomExisted({ receiverId: targetId }),
    enabled: false,
  });

  const { mutateAsync } = useCreatePersonalChatRoomMutation();

  const enterChatRoom = async (roomId: ChatRoom['id']) => {
    const sock = new SockJS(stompConfig.webSocketEndpoint);
    const stompClient = Stomp.over(sock);

    connect({
      stompClient,
      connectEvent: () => {
        subscribe({
          stompClient,
          roomId,
          subscribeEvent: (received: ChatMessage) => {
            const {
              type,
              sender: { id: senderId },
            } = received;

            if (type === '입장' && senderId === myId) {
              sock.close();
            }
          },
        });

        const sendData: SendMessageRequest = {
          senderId: myId!,
          content: null,
        };

        enter({ stompClient, roomId, sendData });
      },
    });
  };

  const handleClickChattingButton = async () => {
    if (!myId) {
      moveToPage(PATH_NAME.LOGIN);
      return;
    }

    const { data, error } = await fetchPersonalChatRoomExisted();

    if (data) {
      const { roomId } = data;

      await enterChatRoom(roomId);

      moveToPage(PATH_NAME.GET_CHAT_PATH(String(roomId)));
    } else {
      if (error instanceof AxiosError) {
        if (error.response?.data.code === 'CHT-003') {
          const { id: roomId } = await mutateAsync({
            receiverId: targetId,
          });

          moveToPage(PATH_NAME.GET_CHAT_PATH(String(roomId)));
        }
      }
    }
  };

  return { handleClickChattingButton };
};
