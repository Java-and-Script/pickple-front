import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { deleteGameParticipate } from '@api/games/deleteGameParticipate';

export const useRefuseGameParticipateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteGameParticipate,
    onSuccess: (_, variables) => {
      const { gameId } = variables;

      queryClient.invalidateQueries({
        queryKey: ['game-members', gameId, '대기'],
      });
    },
  });
};
