import { useMutation } from '@tanstack/react-query';

import { patchMannerScoreReview } from '@api/games/patchMannerScoreReview';

import { PatchGameMannerScoreReviewRequest } from '@type/api/games';
import { Game } from '@type/models';

export const usePatchMannerScoreReviewMutation = ({
  payload,
  gameId,
}: {
  payload: PatchGameMannerScoreReviewRequest;
  gameId: Game['id'];
}) => {
  return useMutation({
    mutationKey: ['patch-manner-score-review', gameId],
    mutationFn: () => patchMannerScoreReview({ payload, gameId }),
  });
};
