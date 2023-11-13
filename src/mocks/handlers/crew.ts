import { HttpResponse, PathParams, http } from 'msw';

import { PostCrewRequest, PostCrewResponse } from '@type/api/crews';
import { Crew } from '@type/models';

import { crews } from '@mocks/data/crew';
import { CREW_DETAIL } from '@mocks/data/crew';
import { NEAR_CREWS } from '@mocks/data/crew';

const mockPostCrew = http.post<PathParams, PostCrewRequest, PostCrewResponse>(
  '/api/crews',
  async ({ request }) => {
    const data = await request.json();
    const crewId = new Date().getTime();
    const leaderId = new Date().getTime();

    const newCrew: Crew = {
      id: crewId,
      name: '노드크루',
      content: '안녕하세요, 노드크루입니다. 백둥체육관 201호에서 진행합니다.',
      memberCount: 10,
      maxMemberCount: 15,
      profileImageUrl:
        'pickpleCrewProfileImage.s3.ap-northeast-2.amazonaws.com',
      backgroundImageUrl:
        'pickpleCrewBackgroundImage.s3.ap-northeast-2.amazonaws.com',
      status: '모집 중',
      likeCount: 9,
      competitionPoint: 104,
      leader: {
        id: leaderId,
        email: 'james123@pickple.kr',
        nickname: 'james123',
        introduction: '안녕하십니까. 제임스입니다. 아이고~ 사장님~~',
        profileImageUrl: 'https://s3.amazonaws.com/pickple/james123.jpg',
        mannerScore: 21,
        mannerScoreCount: 30,
        addressDepth1: '서울시',
        addressDepth2: '강남구',
        positions: ['C', 'PF'],
      },
      addressDepth1: '서울시',
      addressDepth2: '강남구',
    };

    crews.push(newCrew);

    return HttpResponse.json({ crewId, data });
  }
);

const mockGetCrewDetail = http.get('/api/crews/:crewId', () => {
  return HttpResponse.json(CREW_DETAIL);
});

const mockGetNearCrewList = http.get('/api/crews', ({ request }) => {
  const { searchParams } = new URL(request.url);
  //   const category = searchParams.get('addressDepth1');
  //   const value = searchParams.get('addressDepth2');
  const page = Number(searchParams.get('page'));
  const size = Number(searchParams.get('size'));

  const startIndex = page * size;

  return HttpResponse.json(NEAR_CREWS.slice(startIndex, startIndex + size));
});

export const crewHandlers = [
  mockGetNearCrewList,
  mockGetCrewDetail,
  mockPostCrew,
];
