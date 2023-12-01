import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postGameParticipate } from '@api/games/postGameParticipate';

import { useLoginInfoStore } from '@stores/loginInfo.store';

export const useGameParticipateCreateMutation = () => {
  const queryClient = useQueryClient();
  const id = useLoginInfoStore((state) => state.loginInfo?.id);

  return useMutation({
    mutationFn: postGameParticipate,
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
