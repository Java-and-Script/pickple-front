export type Member = {
  id: number;
  email: string;
  nickname: string;
  introduction: string | null;
  profileImageUrl: string;
  mannerScore: number;
  mannerScoreCount: number;
  addressDepth1: string;
  addressDepth2: string;
  positions: string[];
};
