import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { deleteCrewParticipate } from '@api/crews/deleteCrewParticipate';

export const useDisallowCrewParticipateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCrewParticipate,
    onSuccess: (_, variables) => {
      const { crewId } = variables;

      queryClient.invalidateQueries({
        queryKey: ['crew-members', crewId, '대기'],
      });
    },
  });
};
