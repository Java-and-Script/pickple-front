import { useSuspenseQuery } from '@tanstack/react-query';

import { getCrewRegistrationStatus } from '@api/member/getCrewRegistrationStatus';

import { GetCrewRegistrationStatusRequest } from '@type/api/member';

export const useCrewRegistrationStatusQuery = ({
  memberId,
  crewId,
}: GetCrewRegistrationStatusRequest) => {
  return useSuspenseQuery({
    queryKey: ['crew-registration', memberId, crewId],
    queryFn: () => getCrewRegistrationStatus({ memberId, crewId }),
  });
};
