import {
  Authenticated,
  CrewProfile,
  Game,
  MemberProfile,
  Registration,
} from '@type/models';

export type GetOAuthLoginPageRedirectResponse = null;

export type GetLoginResponse = Authenticated | Registration;

export type PostRefreshAccessTokenRequest = null;
export type PostRefreshAccessTokenResponse = { accessToken: string };

export type PostRegistrationRequest = Omit<
  Registration,
  'accessToken' | 'refreshToken' | 'id'
>;
export type PostRegistrationResponse = Authenticated;

export type GetMemberProfileResponse = MemberProfile;

export type GetConfiremdGamesResponse = Game[];
export type GetCreatedGamesResponse = Game[];
export type GetJoinedCrewsResponse = CrewProfile[];
export type GetCreatedCrewsResponse = CrewProfile[];
