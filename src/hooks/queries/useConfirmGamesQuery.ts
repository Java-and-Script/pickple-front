import { useSuspenseQuery } from '@tanstack/react-query';

import { getConfirmedGames } from '@api/member/getConfirmedGames';

import { GetConfirmedGamesRequest } from '@type/api/member';

export const useConfirmGamesQuery = ({
  memberId,
}: GetConfirmedGamesRequest) => {
  return useSuspenseQuery({
    queryKey: ['confirmed-games', memberId],
    queryFn: () => getConfirmedGames({ memberId }),
  });
};
