import { useSuspenseQuery } from '@tanstack/react-query';

import { getCrewDetail } from '@api/crews/getCrewDetail';

import { GetCrewDetailRequest } from '@type/api/crews';

export const useCrewDetailQuery = ({ crewId }: GetCrewDetailRequest) => {
  return useSuspenseQuery({
    queryKey: ['crew-detail', crewId],
    queryFn: () => getCrewDetail({ crewId }),
  });
};
