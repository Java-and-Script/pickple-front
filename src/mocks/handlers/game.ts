import { DefaultBodyType, HttpResponse, PathParams, http } from 'msw';

import { CommonErrorResponse } from '@type/api/error';
import {
  GetGameDetailResponse,
  GetGameMembersResponse,
  PatchGameMannerScoreReviewRequest,
  PatchGameParticipateApplyRequest,
  PostGameRequest,
  PostGameResponse,
} from '@type/api/games';
import { Game, Member } from '@type/models';

import { games, pendingMembersMap } from '@mocks/data/game';

const mockPostGame = http.post<
  PathParams,
  { data: PostGameRequest },
  PostGameResponse
>('/api/games', async ({ request }) => {
  const {
    data: { hostId, ...restRequestBody },
  } = await request.json();
  const gameId = new Date().getTime();

  const host: Member = {
    id: Number(hostId),
    addressDepth1: '서울시',
    addressDepth2: '강남구',
    email: 'example@example.com',
    introduction: '예시 소개글입니다.',
    mannerScore: 0,
    mannerScoreCount: 0,
    nickname: `testuser${hostId}`,
    positions: [],
    profileImageUrl: '',
  };

  const newGame: Game = {
    id: gameId,
    ...restRequestBody,
    playEndTime: '00:00',
    status: '모집 중',
    viewCount: 0,
    memberCount: 0,
    host,
    addressDepth1: '서울시',
    addressDepth2: '강남구',
    members: [],
  };

  games.push(newGame);

  return HttpResponse.json({ gameId });
});

/** TODO: category, value 구현해야함 */
const mockGetGames = http.get('/api/games', ({ request }) => {
  const { searchParams } = new URL(request.url);
  // const category = searchParams.get('category');
  // const value = searchParams.get('value');
  const page = Number(searchParams.get('page'));
  const size = Number(searchParams.get('size'));

  const startIndex = page * size;

  return HttpResponse.json(games.slice(startIndex, startIndex + size));
});

const mockPostGameParticipate = http.post<{ gameId: string }, DefaultBodyType>(
  '/api/games/:gameId/members',
  async ({ params }) => {
    const gameId = Number(params.gameId);

    const game = games.find((game) => game.id === gameId);
    if (!game) {
      return;
    }

    game.members.push({
      id: new Date().getTime(),
      email: 'james123@pickple.kr',
      nickname: 'james123',
      introduction: '안녕하십니까. 제임스입니다. 아이고~ 사장님~~',
      profileImageUrl: 'https://s3.amazonaws.com/pickple/james123.jpg',
      mannerScore: 21,
      mannerScoreCount: 30,
      addressDepth1: '서울시',
      addressDepth2: '강남구',
      positions: ['C', 'PF'],
    });

    return HttpResponse.json();
  }
);

const mockGetGameMembers = http.get<
  { gameId: string },
  DefaultBodyType,
  GetGameMembersResponse | CommonErrorResponse
>('/api/games/:gameId/members', ({ params, request }) => {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  const gameId = Number(params.gameId);

  if (!status || (status !== '대기' && status !== '확정')) {
    return HttpResponse.json({ code: 'COM-002' }, { status: 400 });
  }
  const game = games.find((game) => game.id === gameId);
  if (!game) {
    return HttpResponse.json({ code: 'COM-004' }, { status: 400 });
  }

  if (status === '대기') {
    return HttpResponse.json({
      ...game,
      members: pendingMembersMap[gameId],
    });
  }
  return HttpResponse.json(game);
});

const mockGetGameDetail = http.get<
  { gameId: string },
  DefaultBodyType,
  GetGameDetailResponse | CommonErrorResponse
>('/api/games/:gameId', ({ params }) => {
  const gameId = Number(params.gameId);
  const game = games.find((game) => game.id === gameId);

  if (!game) {
    return HttpResponse.json({ code: 'COM-002' }, { status: 400 });
  }

  return HttpResponse.json(game);
});

const mockPatchGameMannerScoreReview = http.patch<
  { gameId: string },
  { data: PatchGameMannerScoreReviewRequest }
>('/api/games/:gameId/members/manner-scores', async ({ params, request }) => {
  const gameId = Number(params.gameId);
  const game = games.find((game) => game.id === gameId);

  if (!game) {
    return HttpResponse.json({ code: 'COM-002' }, { status: 400 });
  }

  const {
    data: { mannerScoreReviews },
  } = await request.json();

  const reviews = [mannerScoreReviews];

  return HttpResponse.json(reviews, { status: 200 });
});

const mockPatchGameParticipate = http.patch<
  {
    gameId: string;
    memberId: string;
  },
  { data: PatchGameParticipateApplyRequest }
>('/api/games/:gameId/members/:memberId', async ({ request, params }) => {
  const gameId = Number(params.gameId);
  const memberId = Number(params.memberId);
  const game = games.find((game) => game.id === gameId);

  const {
    data: { status },
  } = await request.json();

  if (!status || status !== '확정') {
    return HttpResponse.json({ code: 'COM-002' }, { status: 400 });
  }

  if (!game) {
    return HttpResponse.json({ code: 'COM-002' }, { status: 400 });
  }

  if (status === '확정') {
    game.members.push({
      id: memberId,
      email: 'james789@pickple.kr',
      nickname: 'james789',
      introduction: '안녕하십니까. 제임스789입니다. 아이고~ 사장님~~',
      profileImageUrl: 'https://s3.amazonaws.com/pickple/james789.jpg',
      mannerScore: 26,
      mannerScoreCount: 30,
      addressDepth1: '서울시',
      addressDepth2: '강남구',
      positions: ['PG'],
    });
  }

  return HttpResponse.json(game, { status: 200 });
});

const mockDeleteGameParticipate = http.delete<{
  gameId: string;
  memberId: string;
}>('/api/games/:gameId/members/:memberId', async ({ params }) => {
  const gameId = Number(params.gameId);
  const memberId = Number(params.memberId);
  const game = games.find((game) => game.id === gameId);

  if (!game) {
    return HttpResponse.json({ code: 'COM-002' }, { status: 400 });
  }

  if (!game.members.find((member) => member.id === memberId)) {
    return HttpResponse.json({ code: 'MEM-001' }, { status: 400 });
  }

  const filteredMembers = game.members.filter(
    (member) => member.id !== Number(params.memberId)
  );

  if (game.members === filteredMembers) {
    return HttpResponse.json({ code: 'MEM-001' }, { status: 400 });
  }

  return HttpResponse.json(game, { status: 200 });
});

export const gameHandlers = [
  mockPostGame,
  mockGetGames,
  mockGetGameDetail,
  mockGetGameMembers,
  mockPostGameParticipate,
  mockPatchGameMannerScoreReview,
  mockPatchGameParticipate,
  mockDeleteGameParticipate,
];
