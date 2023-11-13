import { useQuery } from '@tanstack/react-query';

import {
  getJoinedCrews,
  getJoinedCrewsProps,
} from '@api/member/getJoinedCrews';

export const useJoinedCrewsQuery = ({
  memberId,
  status,
}: getJoinedCrewsProps) => {
  return useQuery({
    queryKey: ['joined-crews', memberId, status],
    queryFn: () => getJoinedCrews({ memberId, status }),
  });
};
