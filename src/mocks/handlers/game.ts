import { DefaultBodyType, HttpResponse, PathParams, http } from 'msw';

import { CommonErrorResponse } from '@type/api/error';
import {
  GetGameDetailResponse,
  PostGameRequest,
  PostGameResponse,
} from '@type/api/games';
import { Game, Member } from '@type/models';

import { games } from '@mocks/data/game';

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

export const gameHandlers = [mockPostGame, mockGetGames, mockGetGameDetail];
