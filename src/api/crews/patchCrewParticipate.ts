import { axiosInstance } from '@api/axiosInstance';

import { PatchCrewParticipateAllowRequest } from '@type/api/crews';
import { Crew, Member } from '@type/models';

export const patchCrewParticipate = async ({
  payload,
  crewId,
  memberId,
}: {
  payload: PatchCrewParticipateAllowRequest;
  crewId: Crew['id'];
  memberId: Member['id'];
}) => {
  await axiosInstance.patch(`/crews/${crewId}/members/${memberId}`, {
    data: payload,
  });
  return;
};
