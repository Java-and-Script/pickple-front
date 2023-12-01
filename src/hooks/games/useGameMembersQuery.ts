import { useSuspenseQuery } from '@tanstack/react-query';

import { getGameMembers, getGameMembersProps } from '@api/games/getGameMembers';

export const useGameMembersQuery = ({
  gameId,
  status,
}: getGameMembersProps) => {
  return useSuspenseQuery({
    queryKey: ['game-members', gameId, status],
    queryFn: () => getGameMembers({ gameId, status }),
  });
};
