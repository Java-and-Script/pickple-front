import { useSuspenseQuery } from '@tanstack/react-query';

import { getConfirmedGames } from '@api/member/getConfirmedGames';

import { GetConfiremdGamesRequest } from '@type/api/member';

export const useConfirmGamesQuery = ({
  memberId,
}: GetConfiremdGamesRequest) => {
  return useSuspenseQuery({
    queryKey: ['confirmed-games', memberId],
    queryFn: () => getConfirmedGames({ memberId }),
  });
};
