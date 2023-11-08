import { HttpResponse, http } from 'msw';

import { crewList } from '@mocks/data/crew/nearCrewList';

export const mockGetNearCrewList = http.get('/api/crews', ({ request }) => {
  const { searchParams } = new URL(request.url);
  const addressDepth1Value = searchParams.get('addressDepth1');
  const addressDepth2Value = searchParams.get('addressDepth2');
  const page = Number(searchParams.get('page'));
  const size = Number(searchParams.get('size'));

  const startIndex = page * size;

  return HttpResponse.json(
    crewList
      .filter(({ addressDepth1, addressDepth2 }) => {
        if (
          addressDepth1 === addressDepth1Value &&
          addressDepth2 === addressDepth2Value
        )
          return true;
      })
      .slice(startIndex, startIndex + size)
  );
});
