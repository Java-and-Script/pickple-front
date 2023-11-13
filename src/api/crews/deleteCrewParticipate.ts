import { axiosInstance } from '@api/axiosInstance';

import { DeleteCrewParticipateRequest } from '@type/api/crews';

export const deleteCrewParticipate = async ({
  crewId,
  memberId,
}: DeleteCrewParticipateRequest) => {
  await axiosInstance.delete(`/crews/${crewId}/members/${memberId}`, {});
};
