import { axiosInstance } from '@api/axiosInstance';

import { PatchGameParticipateApplyRequest } from '@type/api/games';
import { Game, Member } from '@type/models';

export const patchGameParticipate = async ({
  payload,
  gameId,
  memberId,
}: {
  payload: PatchGameParticipateApplyRequest;
  gameId: Game['id'];
  memberId: Member['id'];
}) => {
  await axiosInstance.patch(`/games/${gameId}/members/${memberId}`, payload);
  return;
};
