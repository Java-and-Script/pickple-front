import { ChatMember } from './ChatMember';

export type ChatRoom = {
  id: number;
  roomName: string;
  roomIconImageUrl: string | null;
  type: '개인' | '게스트' | '크루';
  memberCount: number;
  maxMemberCount: number;
  playStartTime: string | null;
  playTimeMinutes: number | null;
  lastMessageContent: string;
  lastMessageCreatedAt: Date;
  createdAt: Date;
};

export type ChatRoomDetail = Omit<
  ChatRoom,
  'lastMessageContent' | 'lastMessageCreatedAt'
> & {
  domainId: number;
  members: ChatMember[];
};
