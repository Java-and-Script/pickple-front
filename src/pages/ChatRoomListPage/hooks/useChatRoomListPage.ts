import { useChatRoomTabStore } from '@stores/chatRoomTab.store';

export const useChatRoomListPage = () => {
  const { chatRoomTab, setChatRoomTab } = useChatRoomTabStore();

  return { chatRoomTab, setChatRoomTab };
};
