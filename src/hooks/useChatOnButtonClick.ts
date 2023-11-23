import { useQuery } from '@tanstack/react-query';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import { getAllChatRoomList } from '@api/chat/getAllChatRoomList';
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

import { CHAT_ROOM_TAB_TITLE } from '@consts/chatRoomTabTitle';
import { PATH_NAME } from '@consts/pathName';

type useChatOnButtonClickProps = {
  targetId: Member['id'];
  targetNickname: Member['nickname'];
  myId: Member['id'] | null;
  navigate: (path: string) => void;
};

export const useChatOnButtonClick = ({
  targetId,
  targetNickname,
  myId = null,
  navigate: moveToPage,
}: useChatOnButtonClickProps) => {
  const { refetch: fetchPersonalChatRoomExisted } = useQuery({
    queryKey: ['personal-room-existed', targetId],
    queryFn: () => getPersonalChatRoomExisted({ receiverId: targetId }),
    enabled: false,
  });

  const { refetch: fetchAllChatRoomList } = useQuery({
    queryKey: ['all-chat-room-list', CHAT_ROOM_TAB_TITLE.INDIVIDUAL],
    queryFn: () => getAllChatRoomList({ type: CHAT_ROOM_TAB_TITLE.INDIVIDUAL }),
    enabled: false,
  });

  const { mutateAsync } = useCreatePersonalChatRoomMutation();

  const handleExistingRoom = async (
    individualRooms: ChatRoom[],
    isSenderActive: boolean
  ) => {
    const { id: roomId } =
      individualRooms.find(
        ({ roomName }: { roomName: string }) => roomName === targetNickname
      ) || {};
    if (!roomId) {
      return;
    }

    if (isSenderActive) {
      moveToPage(PATH_NAME.GET_CHAT_PATH(String(roomId)));
    } else {
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
                moveToPage(PATH_NAME.GET_CHAT_PATH(String(received.roomId)));
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
    }
  };

  const handleClickChattingButton = async () => {
    if (!myId) {
      moveToPage(PATH_NAME.LOGIN);
      return;
    }

    const { data } = await fetchPersonalChatRoomExisted();
    if (!data) return;

    const { isRoomExisted, isSenderActive } = data;

    if (isRoomExisted) {
      const { data: individualRooms } = await fetchAllChatRoomList();
      if (individualRooms) {
        handleExistingRoom(individualRooms, isSenderActive);
      }
    } else {
      const { id: roomId } = await mutateAsync({
        receiverId: targetId,
      });
      moveToPage(PATH_NAME.GET_CHAT_PATH(String(roomId)));
    }
  };

  return { handleClickChattingButton };
};
