import { ChatRoom } from '@type/models/ChatRoom';

export const CHAT_ROOM_TAB_TITLE: Record<string, ChatRoom['type']> = {
  INDIVIDUAL: '개인',
  GUEST: '게스트',
  CREW: '크루',
};
