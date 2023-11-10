import { axiosInstance } from '@api/axiosInstance';

import { PostCrewParticipateRequest } from '@type/api/crews';

export const postCrewParticipate = async ({
  crewId,
}: PostCrewParticipateRequest) => {
  await axiosInstance.post(`/crews/${crewId}/members`);
};
