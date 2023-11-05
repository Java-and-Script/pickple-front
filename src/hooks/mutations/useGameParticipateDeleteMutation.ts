import { useMutation } from '@tanstack/react-query';

import { deleteGameParticipate } from '@api/games/deleteGameParticipate';

import { DeleteGameParticipateRequest } from '@type/api/games';

export const useGameParticipateDeleteMutation = ({
  gameId,
  memberId,
}: DeleteGameParticipateRequest) => {
  return useMutation({
    mutationKey: ['delete-game-participate', gameId, memberId],
    mutationFn: () => deleteGameParticipate({ gameId, memberId }),
  });
};
