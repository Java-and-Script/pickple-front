export type Authenticated = {
  accessToken: string;
  refreshToken: string;
  id: number;
  nickname: string;
  profileImageUrl: string;
  email: string;
  oauthId: number;
  oauthProvider: 'KAKAO';
  addressDepth1: string;
  addressDepth2: string;
};
