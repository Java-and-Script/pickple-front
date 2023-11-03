import { axiosInstance } from '@api/axiosInstance';

import { PatchGameMannerScoreReviewRequest } from '@type/api/games';
import { Game } from '@type/models';

export const patchMannerScoreReview = async ({
  payload,
  gameId,
}: {
  payload: PatchGameMannerScoreReviewRequest;
  gameId: Game['id'];
}) => {
  await axiosInstance.patch(`/games/${gameId}/members/manner-scores`, {
    data: payload,
  });
  return;
};
