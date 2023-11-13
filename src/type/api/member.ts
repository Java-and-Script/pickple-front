import {
  Authenticated,
  CrewProfile,
  Game,
  Member,
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

export type GetConfirmedGamesResponse = Game[];

export type GetCreatedGamesRequest = {
  memberId: Member['id'];
};
export type GetCreatedGamesResponse = Game[];

export type GetJoinedCrewsResponse = CrewProfile[];

export type GetCreatedCrewsRequest = { memberId: Member['id'] };

export type GetCreatedCrewsResponse = CrewProfile[];
