import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getGames } from '@api/games/getGames';

import { FETCH_SIZE } from '@consts/network';

/**
 * 장소 기준 => ?category=location&value=서울시+영등포구&page=1&size=10
 * 날짜 기준 => ?category=playDate&value=2023-11-03&page=1&size=10
 * 포지션 기준 => ?category=positions&value=SF+SG&page=1&size=10
 * */
export type GamesQueryProps = {
  category: 'location' | 'playDate' | 'position';
  value: string;
};

export const useGamesQuery = ({ category, value }: GamesQueryProps) => {
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
