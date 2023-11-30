import toast from 'react-hot-toast';

import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

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
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.data.code === 'GAM-013') {
          return toast.error('게스트 모집 정원을 초과했습니다.');
        }
        if (error.response?.data.code === 'GAM-010') {
          return toast.error('권한이 없습니다.');
        }
      }

      toast.error(
        '게임 참여 수락에 실패했어요.\n새로고침 후, 다시 한 번 시도해주세요.'
      );
    },
  });
};
