import { Game, Member } from '@type/models';

export type GetGamesResponse = Game[];

export type GetGameDetailRequest = { gameId: Game['id'] };

export type GetGameDetailResponse = Game;

export type GetGameMembersResponse = Game;

export type PostGameRequest = {
  hostId: number;
  latitude?: number;
  longitude?: number;
} & Pick<
  Game,
  | 'content'
  | 'playDate'
  | 'playStartTime'
  | 'playTimeMinutes'
  | 'mainAddress'
  | 'detailAddress'
  | 'cost'
  | 'maxMemberCount'
  | 'positions'
>;

export type PostGameResponse = {
  gameId: Game['id'];
};

export type PatchGameParticipateApplyRequest = {
  status: '확정';
};

export type PatchGameMannerScoreReviewRequest = {
  mannerScoreReviews: {
    memberId: number;
    mannerScore: -1 | 0 | 1;
  }[];
};

export type DeleteGameParticipateRequest = {
  gameId: Game['id'];
  memberId: Member['id'];
};
