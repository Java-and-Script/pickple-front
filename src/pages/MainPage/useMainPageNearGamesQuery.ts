import { useSuspenseQuery } from '@tanstack/react-query';

import { getGames } from '@api/games/getGames';

const FETCH_SIZE = 3;

export const useMainPageNearGamesQuery = ({
  category,
  value,
}: {
  category?: string;
  value?: string;
}) => {
  return useSuspenseQuery({
    queryKey: ['games', category, value],
    queryFn: () => getGames({ category, value, page: 1, size: FETCH_SIZE }),
  });
};
