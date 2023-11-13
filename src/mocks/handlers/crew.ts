import { HttpResponse, http } from 'msw';

import { CREW_DETAIL } from '@mocks/data/crew';
import { NEAR_CREWS } from '@mocks/data/crew';

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

export const crewHandlers = [mockGetNearCrewList, mockGetCrewDetail];
