import toast from 'react-hot-toast';

import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

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
    onError: () => {
      toast.error('크루 가입를 수락하지 못 했습니다. 다시 한 번 시도해주세요.');
    },
  });
};
