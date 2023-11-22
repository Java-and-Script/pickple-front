import { useSuspenseQuery } from '@tanstack/react-query';

import { getPositions } from '@api/data/getPositions';

export const usePositionsQuery = () => {
  return useSuspenseQuery({
    queryKey: ['positions'],
    queryFn: () => getPositions(),
  });
};
