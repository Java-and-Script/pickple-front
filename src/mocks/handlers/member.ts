import { DefaultBodyType, HttpResponse, PathParams, http } from 'msw';

import { CommonErrorResponse } from '@type/api/error';
import {
  GetConfirmedGamesResponse,
  GetCreatedGamesResponse,
  GetLoginResponse,
  GetMemberProfileResponse,
  PostRefreshAccessTokenResponse,
  PostRegistrationResponse,
} from '@type/api/member';

import * as DATA from '@mocks/data/member';

//TODO : mockGetAuth
const mockGetAuth = http.get<{ oauthProvider: string }, DefaultBodyType>(
  '/api/auth/:oauthProvider',
  ({ params }) => {
    const { oauthProvider } = params;

    if (oauthProvider !== 'KAKAO') {
      return HttpResponse.json({}, { status: 400 });
    }

    return HttpResponse.json(
      {},
      {
        status: 200,
      }
    );
  }
);

const mockGetLogin = http.get<
  { oauthProvider: string },
  DefaultBodyType,
  GetLoginResponse | CommonErrorResponse
>('/api/auth/login/:oauthProvider', ({ request, params }) => {
  const { oauthProvider } = params;

  if (oauthProvider !== 'KAKAO') {
    return HttpResponse.json({ code: 'ADD-001' }, { status: 400 });
  }

  const url = new URL(request.url);
  const authCode = url.searchParams.get('authCode');

  if (authCode === undefined) {
    return HttpResponse.json({ code: 'ADD-001' }, { status: 400 });
  }

  return HttpResponse.json(DATA.AUTH_LOGIN_MEMBER, {
    status: 201,
  });
});

const mockGetAuthRefresh = http.post<
  PathParams,
  DefaultBodyType,
  PostRefreshAccessTokenResponse
>('/api/auth/refresh', () => {
  return HttpResponse.json(DATA.ACCESS_TOKEN, {
    status: 201,
  });
});

const mockGetRegistration = http.post<
  PathParams,
  {
    email: string;
    nickname: string;
    profileImageUrl: string;
    positions: string[];
    addressDepth1: string;
    addressDepth2: string;
    oauthId: number;
    oauthProvider: 'KAKAO';
  },
  PostRegistrationResponse
>('/api/members', () => {
  return HttpResponse.json(DATA.MEMBERS, {
    status: 201,
  });
});

const mockGetMemberProfile = http.get<
  { memberId: string },
  DefaultBodyType,
  GetMemberProfileResponse
>('/api/members/:memberId', ({ params }) => {
  const { memberId } = params;

  console.log(memberId);

  return HttpResponse.json(DATA.MEMBERS_MEMBERID, {
    status: 200,
  });
});

const mockGetConfirmedGames = http.get<
  { memberId: string },
  DefaultBodyType,
  GetConfirmedGamesResponse
>('/api/members/:memberId/confirmed-games', ({ params }) => {
  const { memberId } = params;

  console.log(memberId);

  return HttpResponse.json(DATA.MEMBERS_MEMBERID_CONFIRMED_GAMES, {
    status: 200,
  });
});

const mockGetCreatedGames = http.get<
  { memberId: string },
  DefaultBodyType,
  GetCreatedGamesResponse
>('/api/members/:memberId/created-games', ({ params }) => {
  const { memberId } = params;

  console.log(memberId);

  return HttpResponse.json(DATA.MEMBERS_MEMBERID_CREATED_GAMES, {
    status: 200,
  });
});

const mockGetJoinedCrews = http.get(
  '/members/:memberId/joined-crews',
  ({ params }) => {
    const { memberId } = params;

    console.log(memberId);

    return HttpResponse.json(DATA.MEMBERS_MEMBERID_JOINED_CREWS, {
      status: 200,
    });
  }
);

const mockGetCreatedCrews = http.get(
  '/api/members/:memberId/created-crews',
  ({ params }) => {
    const { memberId } = params;

    console.log(memberId);

    return HttpResponse.json(DATA.MEMBERS_MEMBERID_CREATED_CREWS, {
      status: 200,
    });
  }
);

export const memberHandlers = [
  mockGetAuth,
  mockGetLogin,
  mockGetAuthRefresh,
  mockGetRegistration,
  mockGetMemberProfile,
  mockGetConfirmedGames,
  mockGetCreatedGames,
  mockGetJoinedCrews,
  mockGetCreatedCrews,
];
