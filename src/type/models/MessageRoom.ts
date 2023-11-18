export type MessageRoom = {
  id: number;
  roomName: string;
  type: '개인' | '그룹';
  memberCount: number;
  maxMemberCount: number;
};
