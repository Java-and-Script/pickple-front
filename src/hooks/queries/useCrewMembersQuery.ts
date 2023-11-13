import { useSuspenseQuery } from '@tanstack/react-query';

import { getCrewMembers } from '@api/crews/getCrewMembers';

import { GetCrewParticipateListRequest } from '@type/api/crews';

export const useCrewMembersQuery = ({
  crewId,
  status,
}: GetCrewParticipateListRequest) => {
  return useSuspenseQuery({
    queryKey: ['crew-members', crewId, status],
    queryFn: () => getCrewMembers({ crewId, status }),
  });
};
