import { ChatMember } from './ChatMember';

export type ChatMessage = {
  type: '입장' | '퇴장' | '대화';
  content: string;
  sender: ChatMember;
  roomId: number;
  createdAt: Date;
};
