import type { Authenticated, Crew, CrewProfile, Member } from '@type/models';

export type PostCrewRequest = Pick<
  Crew,
  'name' | 'content' | 'maxMemberCount' | 'addressDepth1' | 'addressDepth2'
>;

export type PostCrewResponse = {
  crewId: Crew['id'];
};

export type GetCrewDetailRequest = {
  crewId: Crew['id'];
};
export type GetCrewDetailResponse = CrewProfile;

export type PostCrewParticipateRequest = {
  crewId: Crew['id'];
};

export type GetCrewParticipateListRequest = {
  crewId: Crew['id'];
  status: '대기' | '확정';
};

export type GetCrewParticipateListResponse = CrewProfile;

export type PatchCrewParticipateAllowRequest = {
  crewId: Crew['id'];
  memberId: Member['id'];
  status: '확정';
};

export type GetNearCrewListRequest = {
  addressDepth1: Authenticated['addressDepth1'];
  addressDepth2: Authenticated['addressDepth2'];
  page: number;
  size: number;
};

export type GetNearCrewListResponse = CrewProfile[];

export type DeleteCrewParticipateRequest = {
  crewId: Crew['id'];
  memberId: Member['id'];
};
