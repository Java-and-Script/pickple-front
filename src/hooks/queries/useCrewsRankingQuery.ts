import { useSuspenseQuery } from '@tanstack/react-query';

import { getCrewsRanking } from '@api/ranking/getCrewsRanking';

export const useCrewsRankingQuery = () => {
  return useSuspenseQuery({
    queryKey: ['crews-ranking'],
    queryFn: getCrewsRanking,
  });
};
