export type Authenticated = {
  accessToken: string;
  refreshToken: string;
  id: number;
  nickname: string;
  profileImageUrl: string;
  email: string;
  oauthId: number;
  oauthProvider: string;
  addressDepth1: string;
  addressDepth2: string;
};
