import { useSuspenseQuery } from '@tanstack/react-query';

import { getCreatedCrews } from '@api/member/getCreatedCrews';

import { GetCreatedCrewsRequest } from '@type/api/member';

export const useCreatedCrewsQuery = ({ memberId }: GetCreatedCrewsRequest) => {
  return useSuspenseQuery({
    queryKey: ['created-crews', memberId],
    queryFn: () => getCreatedCrews({ memberId }),
  });
};
