import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginRequireError } from '@routes/LoginRequireBoundary';

import { useAllChatRoomListQuery } from '@hooks/chats/useAllChatRoomListQuery';

import { useChatRoomTabStore } from '@stores/chatRoomTab.store';
import { useLoginInfoStore } from '@stores/loginInfo.store';

import { ChatRoom } from '@type/models/ChatRoom.ts';

export const useChatRoomList = () => {
  const navigate = useNavigate();

  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  if (!loginInfo?.id) {
    throw new LoginRequireError();
  }

  const { chatRoomTab } = useChatRoomTabStore();

  const { data: selectedTabChatRoomList, refetch: refetchChatRoomList } =
    useAllChatRoomListQuery({
      type: chatRoomTab,
    });

  const moveToPage = (pathName: string) => {
    navigate(pathName);
  };

  useEffect(() => {
    refetchChatRoomList();
  }, [refetchChatRoomList]);

  return {
    selectedTabChatRoomList: sortDate(selectedTabChatRoomList),
    chatRoomTab,
    moveToPage,
  };
};

const sortDate = (chatRooms: ChatRoom[]) => {
  chatRooms.sort(
    (prev: ChatRoom, cur: ChatRoom) =>
      new Date(cur.lastMessageCreatedAt).getTime() -
      new Date(prev.lastMessageCreatedAt).getTime()
  );

  return chatRooms;
};
