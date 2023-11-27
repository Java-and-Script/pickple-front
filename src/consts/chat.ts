import { ChatMessage } from '@type/models/ChatMessage';
import { ChatRoom } from '@type/models/ChatRoom';

export const CHAT_ROOM_TAB_TITLE: Record<string, ChatRoom['type']> = {
  INDIVIDUAL: '개인',
  GUEST: '게스트',
  CREW: '크루',
};

export const CHAT_TYPE: Record<string, ChatMessage['type']> = {
  ENTER: '입장',
  QUIT: '퇴장',
  MESSAGE: '대화',
  DATE: '날짜',
};
