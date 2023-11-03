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
  const { data, ...query } = useSuspenseInfiniteQuery({
    queryKey: ['games', category, value],
    queryFn: ({ pageParam }) =>
      getGames({ category, value, page: pageParam, size: FETCH_SIZE }),
    getNextPageParam: (_, pages) => {
      return pages.length;
    },
    initialPageParam: 0,
  });
  const games = data.pages.flat();

  return {
    data,
    ...query,
    games,
  };
};
