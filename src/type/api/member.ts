import {
  Authenticated,
  CrewProfile,
  Game,
  Member,
  MemberGame,
  MemberProfile,
  Registration,
} from '@type/models';

export type GetOAuthLoginPageRedirectRequest = {
  oauthProvider: Registration['oauthProvider'];
};

export type GetOAuthLoginPageRedirectResponse = null;

export type GetLoginRequest = {
  oauthProvider: Authenticated['oauthProvider'];
  authCode: string;
};

export type GetLoginResponse = Authenticated | Registration;

export type PostRefreshAccessTokenResponse = { accessToken: string };

export type PostRegistrationRequest = {
  positions: MemberProfile['positions'];
} & Omit<Authenticated, 'accessToken' | 'refreshToken' | 'id'>;

export type PostRegistrationResponse = Authenticated;

export type GetMemberProfileRequest = {
  memberId: Member['id'];
};
export type GetMemberProfileResponse = MemberProfile;

export type GetConfirmedGamesRequest = {
  memberId: Member['id'];
};

export type GetConfirmedGamesResponse = MemberGame[];

export type GetCreatedGamesRequest = {
  memberId: Member['id'];
};
export type GetCreatedGamesResponse = MemberGame[];

export type GetJoinedCrewsResponse = CrewProfile[];

export type GetCreatedCrewsRequest = { memberId: Member['id'] };

export type GetCreatedCrewsResponse = CrewProfile[];

export type GetCrewRegistrationStatusRequest = {
  memberId: Member['id'];
  crewId: CrewProfile['id'];
};

export type GetGameRegistrationStatusRequest = {
  memberId: Member['id'];
  gameId: Game['id'];
};

export type GetRegistrationStatusResponse = {
  memberRegistrationStatus: '없음' | '대기' | '확정';
};

export type GetGameRegistrationStatusResponse =
  GetRegistrationStatusResponse & { isReviewDone: boolean };
