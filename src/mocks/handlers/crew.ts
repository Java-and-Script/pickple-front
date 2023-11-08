import { HttpResponse, http } from 'msw';

import { CREW_DETAIL } from '@mocks/data/crew';

const mockGetCrewDetail = http.get('/api/crews/:crewId', () => {
  return HttpResponse.json(CREW_DETAIL);
});

export const crewHandlers = [mockGetCrewDetail];
