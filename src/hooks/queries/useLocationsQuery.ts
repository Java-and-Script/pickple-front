import { useQuery } from '@tanstack/react-query';

import { getLocations } from '@api/data/getLocations';

export const useLocationQuery = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: () => getLocations(),
  });
};
