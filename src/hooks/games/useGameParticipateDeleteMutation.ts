import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { deleteGameParticipate } from '@api/games/deleteGameParticipate';

import { useLoginInfoStore } from '@stores/loginInfo.store';

export const useGameParticipateDeleteMutation = () => {
  const queryClient = useQueryClient();
  const id = useLoginInfoStore((state) => state.loginInfo?.id);

  return useMutation({
    mutationFn: deleteGameParticipate,
    onSuccess: (_, { gameId }) => {
      queryClient.invalidateQueries({
        queryKey: ['game-detail', gameId],
      });
      id &&
        queryClient.invalidateQueries({
          queryKey: ['game-registration', id, gameId],
        });
    },
  });
};
