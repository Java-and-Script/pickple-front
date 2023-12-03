import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchMannerScoreReview } from '@api/games/patchMannerScoreReview';

import { useLoginInfoStore } from '@stores/loginInfo.store';

import { PatchGameMannerScoreReviewRequest } from '@type/api/games';
import { Game } from '@type/models';

export const useMannerScoreReviewPatchMutation = ({
  payload,
  gameId,
}: {
  payload: PatchGameMannerScoreReviewRequest;
  gameId: Game['id'];
}) => {
  const queryClient = useQueryClient();
  const loginInfo = useLoginInfoStore((state) => state.loginInfo);

  return useMutation({
    mutationKey: ['patch-manner-score-review', gameId, JSON.stringify(payload)],
    mutationFn: () => patchMannerScoreReview({ payload, gameId }),
    onSuccess: () => {
      console.log(['game-registration', loginInfo?.id, gameId]);
      queryClient.invalidateQueries({
        queryKey: ['created-games', loginInfo?.id],
      });
      queryClient.invalidateQueries({
        queryKey: ['confirmed-games', loginInfo?.id],
      });
      queryClient.invalidateQueries({
        queryKey: ['game-registration', loginInfo?.id, gameId],
      });
    },
  });
};
