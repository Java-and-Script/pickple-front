import toast from 'react-hot-toast';

import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { patchGameParticipate } from '@api/games/patchGameParticipate';

export const useAllowGameParticipateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchGameParticipate,
    onSuccess: (_, variables) => {
      toast.success('게임 참여를 수락했습니다.');

      const { gameId } = variables;

      queryClient.invalidateQueries({
        queryKey: ['game-members', gameId, '대기'],
      });
    },
    onError: () => {
      toast.error('게임 참여를 수락하지 못 했습니다. 다시 한 번 시도해주세요.');
    },
  });
};
