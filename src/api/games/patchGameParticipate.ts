import { axiosInstance } from '@api/axiosInstance';

import { PatchGameParticipateApplyRequest } from '@type/api/games';
import { Game, Member } from '@type/models';

export const patchMannerScoreReview = async ({
  payload,
  gameId,
  memberId,
}: {
  payload: PatchGameParticipateApplyRequest;
  gameId: Game['id'];
  memberId: Member['id'];
}) => {
  await axiosInstance.patch(`api/games/${gameId}/members/${memberId}`, {
    data: payload,
  });
  return;
};
