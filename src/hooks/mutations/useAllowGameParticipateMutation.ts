import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { patchGameParticipate } from '@api/games/patchGameParticipate';

export const useAllowGameParticipateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchGameParticipate,
    onSuccess: (_, variables) => {
      const { gameId } = variables;

      queryClient.invalidateQueries({
        queryKey: ['game-members', gameId, '대기'],
      });
    },
  });
};
