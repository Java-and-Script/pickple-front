import toast from 'react-hot-toast';

import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { patchCrewParticipate } from '@api/crews/patchCrewParticipate';

export const useAllowCrewParticipateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchCrewParticipate,
    onSuccess: (_, variables) => {
      toast.success('크루 가입을 수락했습니다.');

      const { crewId } = variables;

      queryClient.invalidateQueries({
        queryKey: ['crew-members', crewId, '대기'],
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const errorCode = error.response?.data.code;

        if (errorCode === 'CRE-006' || errorCode === 'CHT-004') {
          return toast.error('크루의 정원을 초과했습니다.');
        }
        if (errorCode === 'CRE-009') {
          return toast.error('권한이 없습니다.');
        }
      }
      toast.error(
        '크루 가입 수락에 실패했어요.\n새로고침 후, 다시 한 번 시도해주세요.'
      );
    },
  });
};
