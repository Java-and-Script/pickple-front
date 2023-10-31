export type Registration = {
  accessToken: string;
  refreshToken: string | null;
  id: number | null;
  nickname: string;
  profileImageUrl: string;
  email: string;
  oauthId: number;
  oauthProvider: string;
  addressDepth1: string | null;
  addressDepth2: string | null;
};
