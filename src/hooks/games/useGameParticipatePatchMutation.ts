import { useMutation } from '@tanstack/react-query';

import { patchGameParticipate } from '@api/games/patchGameParticipate';

import { PatchGameParticipateApplyRequest } from '@type/api/games';
import { Game, Member } from '@type/models';

export const useGameParticipatePatchMutation = ({
  gameId,
  memberId,
  payload,
}: {
  gameId: Game['id'];
  memberId: Member['id'];
  payload: PatchGameParticipateApplyRequest;
}) => {
  return useMutation({
    mutationKey: ['patch-game-participate', gameId, memberId],
    mutationFn: () => patchGameParticipate({ gameId, memberId, payload }),
  });
};
