import { HttpResponse, http } from 'msw';

import { CREW_RANKING } from '@mocks/data/ranking';

const mockGetCrewsRanking = http.get('/api/ranking/crews', () => {
  return HttpResponse.json(CREW_RANKING);
});

export const rankingHandlers = [mockGetCrewsRanking];
