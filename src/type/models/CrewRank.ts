import { CrewProfile } from '.';

export type CrewRank = {
  rank: number;
  crewActivityScore: number;
  mannerScore: number;
  totalScore: number;
} & Pick<
  CrewProfile,
  | 'id'
  | 'name'
  | 'memberCount'
  | 'maxMemberCount'
  | 'profileImageUrl'
  | 'addressDepth1'
  | 'addressDepth2'
>;
