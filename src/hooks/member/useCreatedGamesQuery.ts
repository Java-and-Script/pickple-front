import { useSuspenseQuery } from '@tanstack/react-query';

import { getCreatedGames } from '@api/member/getCreatedGames';

import { GetCreatedGamesRequest } from '@type/api/member';

export const useCreatedGamesQuery = ({ memberId }: GetCreatedGamesRequest) => {
  return useSuspenseQuery({
    queryKey: ['created-games', memberId],
    queryFn: () => getCreatedGames({ memberId }),
  });
};
