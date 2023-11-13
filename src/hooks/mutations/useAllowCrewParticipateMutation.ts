import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { patchCrewParticipate } from '@api/crews/patchCrewParticipate';

export const useAllowCrewParticipateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchCrewParticipate,
    onSuccess: (_, variables) => {
      const { crewId } = variables;

      queryClient.invalidateQueries({
        queryKey: ['crew-members', crewId, '대기'],
      });
    },
  });
};
