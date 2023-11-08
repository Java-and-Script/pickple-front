import { axiosInstance } from '@api/axiosInstance';

import { PatchCrewParticipateAllowRequest } from '@type/api/crews';

export const patchCrewParticipate = async ({
  status,
  crewId,
  memberId,
}: PatchCrewParticipateAllowRequest) => {
  await axiosInstance.patch(`/crews/${crewId}/members/${memberId}`, {
    data: { status },
  });
  return;
};
