import { Member } from './Member';

export type CrewProfile = {
  id: number;
  name: string;
  content: string | null;
  memberCount: number;
  profileImageUrl: string;
  backgroundImageUrl: string;
  status: string;
  likeCount: number;
  maxMemberCount: number;
  competitionPoint: number;
  leader: Member;
  addressDepth1: string;
  addressDepth2: string;
  members: Member[];
};
