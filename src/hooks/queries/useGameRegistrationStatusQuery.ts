import { useSuspenseQuery } from '@tanstack/react-query';

import { getGameRegistrationStatus } from '@api/member/getGameRegistrationStatus';

import { GetGameRegistrationStatusRequest } from '@type/api/member';

export const useGameRegistrationStatusQuery = ({
  memberId,
  gameId,
}: GetGameRegistrationStatusRequest) => {
  return useSuspenseQuery({
    queryKey: ['game-registration', memberId, gameId],
    queryFn: () => getGameRegistrationStatus({ memberId, gameId }),
  });
};
