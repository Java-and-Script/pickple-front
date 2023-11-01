import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getGames } from '@api/games/getGames';

const FETCH_SIZE = 20;

export const useGamesQuery = ({
  category,
  value,
}: {
  category?: string;
  value?: string;
}) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['games', category, value],
    queryFn: ({ pageParam }) =>
      getGames({ category, value, page: pageParam, size: FETCH_SIZE }),
    getNextPageParam: (page) => {
      return page.length / FETCH_SIZE;
    },
    initialPageParam: 0,
  });
};
