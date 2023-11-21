import { create } from 'zustand';

import { ChatRoom } from '@type/models/ChatRoom.ts';

import { CHAT_ROOM_TAB_TITLE } from '@consts/chatRoomTabTitle.ts';

type UseChatRoomTabStore = {
  chatRoomTab: ChatRoom['type'];
  setChatRoomTab: (tab: ChatRoom['type']) => void;
};
export const useChatRoomTabStore = create<UseChatRoomTabStore>((set) => ({
  chatRoomTab: CHAT_ROOM_TAB_TITLE.INDIVIDUAL,
  setChatRoomTab: (tab: ChatRoom['type']) => set({ chatRoomTab: tab }),
}));
