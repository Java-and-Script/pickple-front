import { useQuery } from '@tanstack/react-query';

import { getPositions } from '@api/data/getPositions';

export const usePositionsQuery = () => {
  return useQuery({
    queryKey: ['positions'],
    queryFn: () => getPositions(),
  });
};
