import toast from 'react-hot-toast';

import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { deleteCrewParticipate } from '@api/crews/deleteCrewParticipate';

export const useDisallowCrewParticipateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCrewParticipate,
    onSuccess: (_, variables) => {
      toast.success('크루 가입을 거절했습니다.');

      const { crewId } = variables;

      queryClient.invalidateQueries({
        queryKey: ['crew-members', crewId, '대기'],
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.data.code === 'CRE-009') {
          return toast.error('권한이 없습니다.');
        }
      }

      toast.error(
        '크루 가입 거절에 실패했어요.\n새로고침 후, 다시 한 번 시도해주세요.'
      );
    },
  });
};
