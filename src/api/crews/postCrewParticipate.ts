import { axiosInstance } from '@api/axiosInstance';

import { PostCrewParticipateRequest } from '@type/api/crews';

export const postCrewParticipate = async ({
  crewId,
  memberId,
}: PostCrewParticipateRequest) => {
  await axiosInstance.post(`/crews/${crewId}/members`, {
    memberId,
  });
};
