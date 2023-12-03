import { useSuspenseQuery } from '@tanstack/react-query';

import { getGameDetail } from '@api/games/getGameDetail';

export const useGameDetailQuery = (id: number) => {
  return useSuspenseQuery({
    queryKey: ['game-detail', id],
    queryFn: () => getGameDetail({ gameId: id }),
  });
};
