import toast from 'react-hot-toast';

import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

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
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.data.code === 'GAM-010') {
          return toast.error('권한이 없습니다.');
        }
      }

      toast.error(
        '게임 참여 거절에 실패했어요.\n새로고침 후, 다시 한 번 시도해주세요.'
      );
    },
  });
};
