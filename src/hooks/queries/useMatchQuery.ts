import { useSuspenseQuery } from '@tanstack/react-query';

import { getMatch } from '@api/getMatch';

export const useMatchQuery = (id: string) => {
  return useSuspenseQuery({
    queryKey: ['match-detail', id],
    queryFn: () => getMatch(id),
  });
};
