import toast from 'react-hot-toast';

import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { deleteGameParticipate } from '@api/games/deleteGameParticipate';

export const useRefuseGameParticipateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteGameParticipate,
    onSuccess: (_, variables) => {
      toast.success('게임 참여를 거절했습니다.');

      const { gameId } = variables;

      queryClient.invalidateQueries({
        queryKey: ['game-members', gameId, '대기'],
      });
    },
    onError: () => {
      toast.error('게임 참여를 거절하지 못 했습니다. 다시 한 번 시도해주세요.');
    },
  });
};
