import toast from 'react-hot-toast';

import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

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
    onError: () => {
      toast.error('크루 가입를 거절하지 못 했습니다. 다시 한 번 시도해주세요.');
    },
  });
};
