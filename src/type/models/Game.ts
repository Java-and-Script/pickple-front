import { Member } from './Member';
import { Position } from './Position';

export type Game = {
  id: number;
  content: string;
  playDate: string;
  playStartTime: string;
  playEndTime: string;
  playTimeMinutes: number;
  mainAddress: string;
  detailAddress: string;
  latitude: number;
  longitude: number;
  status: string;
  viewCount: number;
  cost: number;
  memberCount: number;
  maxMemberCount: number;
  host: Member;
  addressDepth1: string;
  addressDepth2: string;
  positions: Position[];
  members: Member[];
};

export type MemberGame = Game & { isReviewDone: boolean };
