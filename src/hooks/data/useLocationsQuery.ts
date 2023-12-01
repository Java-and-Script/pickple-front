import { useSuspenseQuery } from '@tanstack/react-query';

import { getLocations } from '@api/data/getLocations';

export const useLocationsQuery = () => {
  return useSuspenseQuery({
    queryKey: ['locations'],
    queryFn: () => getLocations(),
  });
};
