import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAllChatRoomListQuery } from '@hooks/queries/useAllChatRoomListQuery.ts';

import { useChatRoomTabStore } from '@stores/chatRoomTab.store';

import { ChatRoom } from '@type/models/ChatRoom.ts';

import { CHAT_ROOM_TAB_TITLE } from '@consts/chatRoomTabTitle.ts';

export const useChatRoomListPage = () => {
  const navigate = useNavigate();

  const { data: individualRooms } = useAllChatRoomListQuery({
    type: CHAT_ROOM_TAB_TITLE.INDIVIDUAL,
  });
  const { data: guestRooms } = useAllChatRoomListQuery({
    type: CHAT_ROOM_TAB_TITLE.GUEST,
  });
  const { data: crewRooms } = useAllChatRoomListQuery({
    type: CHAT_ROOM_TAB_TITLE.CREW,
  });

  const { chatRoomTab, setChatRoomTab } = useChatRoomTabStore();

  const [selectedData, setSelectedData] = useState(individualRooms);

  const moveToPage = (pathName: string) => {
    navigate(pathName);
  };

  const handleClickTab = (tab: ChatRoom['type']) => {
    setChatRoomTab(tab);
  };

  useEffect(() => {
    if (chatRoomTab === CHAT_ROOM_TAB_TITLE.INDIVIDUAL) {
      setSelectedData(individualRooms);
    } else if (chatRoomTab === CHAT_ROOM_TAB_TITLE.GUEST) {
      setSelectedData(guestRooms);
    } else {
      setSelectedData(crewRooms);
    }
  }, [individualRooms, guestRooms, crewRooms, chatRoomTab]);

  return { selectedData, chatRoomTab, moveToPage, handleClickTab };
};
