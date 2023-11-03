import { HttpResponse, http } from 'msw';

import * as DATA from '../data/member';

const mockGetAuth = http.get('/api/auth/:oauthProvider', ({ params }) => {
  console.log('register page');

  const { oauthProvider } = params;

  if (oauthProvider !== 'KAKAO') {
    return HttpResponse.json({}, { status: 400 });
  }

  return HttpResponse.json(DATA.MEMBERS, {
    status: 200,
  });
});

const mockGetLogin = http.get(
  '/api/auth/login/:oauthProvider',
  ({ request, params }) => {
    const { oauthProvider } = params;

    if (oauthProvider !== 'KAKAO') {
      return HttpResponse.json({}, { status: 400 });
    }

    const url = new URL(request.url);
    const authCode = url.searchParams.get('authCode');

    if (authCode === undefined) {
      return HttpResponse.json({}, { status: 400 });
    }

    return HttpResponse.json(DATA.AUTH_LOGIN_MEMBER, {
      status: 201,
    });
  }
);

const mockGetAuthRefresh = http.post('/api/auth/refresh', () => {
  console.log('AuthToken Refreshed!');

  return HttpResponse.json(DATA.ACCESS_TOKEN, {
    status: 201,
  });
});

const mockGetRegistration = http.post('/api/members', () => {
  console.log('/members');

  return HttpResponse.json(DATA.MEMBERS, {
    status: 201,
  });
});

const mockGetMemberProfile = http.get(
  '/api/members/:memberId',
  ({ params }) => {
    const { memberId } = params;

    console.log('/members/:memberId');
    console.log(memberId);

    return HttpResponse.json(DATA.MEMBERS_MEMBERID, {
      status: 200,
    });
  }
);

const mockGetConfirmedGames = http.get(
  '/api/members/:memberId/confirmed-games',
  ({ params, cookies }) => {
    const { memberId } = params;

    console.log(cookies);
    // if (!cookies.accessToken) {
    //   return new HttpResponse(null, { status: 403 });
    // }
    console.log('/members/:memberId/confirmed-games');
    console.log(memberId);

    return HttpResponse.json(DATA.MEMBERS_MEMBERID_CONFIRMED_GAMES, {
      status: 200,
    });
  }
);
const mockGetCreatedGames = http.get(
  '/api/members/:memberId/created-games',
  ({ params }) => {
    const { memberId } = params;

    console.log('/members/:memberId/created-games');
    console.log(memberId);

    return HttpResponse.json(DATA.MEMBERS_MEMBERID_CREATED_GAMES, {
      status: 200,
    });
  }
);
const mockGetJoinedCrews = http.get(
  '/members/:memberId/joined-crews',
  ({ params }) => {
    const { memberId } = params;

    console.log('/members/:memberId/joined-crews');
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

    console.log('/members/:memberId/created-crews');
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
