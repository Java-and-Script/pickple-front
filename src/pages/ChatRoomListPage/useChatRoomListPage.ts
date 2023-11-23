import { useNavigate } from 'react-router-dom';

import { useAllChatRoomListQuery } from '@hooks/queries/useAllChatRoomListQuery.ts';

import { useChatRoomTabStore } from '@stores/chatRoomTab.store';
import { useLoginInfoStore } from '@stores/loginInfo.store';

import { ChatRoom } from '@type/models/ChatRoom.ts';

export const useChatRoomListPage = () => {
  const navigate = useNavigate();

  const loginInfo = useLoginInfoStore((state) => state.loginInfo);
  if (!loginInfo?.id) {
    throw new Error('로그인이 필요한 서비스입니다.');
  }

  const { chatRoomTab, setChatRoomTab } = useChatRoomTabStore();

  const { data: selectedTabChatRoomList, refetch: refetchChatList } =
    useAllChatRoomListQuery({
      type: chatRoomTab,
    });

  const moveToPage = (pathName: string) => {
    navigate(pathName);
  };

  const handleClickTab = (tab: ChatRoom['type']) => {
    setChatRoomTab(tab);

    refetchChatList();
  };

  return {
    selectedTabChatRoomList,
    chatRoomTab,
    moveToPage,
    handleClickTab,
  };
};
