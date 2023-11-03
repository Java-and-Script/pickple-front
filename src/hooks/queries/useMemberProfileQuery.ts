import { useSuspenseQuery } from '@tanstack/react-query';

import { getMemberProfile } from '@api/member/getMemberProfile';

import { GetMemberProfileRequest } from '@type/api/member';

export const useMemberProfileQuery = ({
  memberId,
}: GetMemberProfileRequest) => {
  return useSuspenseQuery({
    queryKey: ['member-profile', memberId],
    queryFn: () => getMemberProfile({ memberId }),
  });
};
