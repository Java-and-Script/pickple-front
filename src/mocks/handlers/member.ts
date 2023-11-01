import { HttpResponse, http } from 'msw';

import * as DATA from '../data/member';

export const memberHandlers = [
  http.get('/auth/:oAuthProvider', () => {
    console.log('register page');

    return HttpResponse.json(DATA.MEMBERS, {
      status: 200,
    });
  }),

  http.get('/auth/login/:oAuthProvider?authCode=:authCode', (req) => {
    const { memberId } = req.params;

    console.log(memberId);

    return HttpResponse.json(DATA.ACCESS_TOKEN, {
      status: 201,
    });
  }),

  http.post('/auth/refresh', () => {
    console.log('AuthToken Refreshed!');

    return HttpResponse.json(DATA.ACCESS_TOKEN, {
      status: 201,
    });
  }),

  http.post('/members', () => {
    console.log('/members');

    return HttpResponse.json(DATA.MEMBERS, {
      status: 302,
    });
  }),

  http.get('/members/:memberId', (req) => {
    const { memberId } = req.params;

    console.log('/members/:memberId');
    console.log(memberId);

    return HttpResponse.json(DATA.MEMBERS_MEMBERID, {
      status: 200,
    });
  }),

  http.get('/members/:memberId/confirmed-games', ({ params, cookies }) => {
    const { memberId } = params;

    if (cookies !== null) return HttpResponse.json({}, { status: 400 });

    console.log('/members/:memberId/confirmed-games');
    console.log(memberId);

    return HttpResponse.json(DATA.MEMBERS_MEMBERID_CONFIRMED_GAMES, {
      status: 200,
    });
  }),
  http.get('/members/:memberId/created-games', (req) => {
    const { memberId } = req.params;

    console.log('/members/:memberId/created-games');
    console.log(memberId);

    return HttpResponse.json(DATA.MEMBERS_MEMBERID_CREATED_GAMES, {
      status: 200,
    });
  }),
  http.get('/members/:memberId/joined-crews', (req) => {
    const { memberId } = req.params;

    console.log('/members/:memberId/joined-crews');
    console.log(memberId);

    return HttpResponse.json(DATA.MEMBERS_MEMBERID_JOINED_CREWS, {
      status: 200,
    });
  }),
  http.get('/members/:memberId/created-crews', (req) => {
    const { memberId } = req.params;

    console.log('/members/:memberId/created-crews');
    console.log(memberId);

    return HttpResponse.json(DATA.MEMBERS_MEMBERID_CREATED_CREWS, {
      status: 200,
    });
  }),
];
