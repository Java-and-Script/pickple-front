import { Member } from '.';

export type Message = {
  type: '입장' | '대화' | '퇴장';
  content: string;
  sender: Member;
  roomId: number;
  createdAt: string;
};
