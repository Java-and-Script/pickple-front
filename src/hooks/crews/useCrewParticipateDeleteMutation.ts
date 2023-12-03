import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { deleteCrewParticipate } from '@api/crews/deleteCrewParticipate';

import { useLoginInfoStore } from '@stores/loginInfo.store';

export const useCrewParticipateDeleteMutation = () => {
  const queryClient = useQueryClient();
  const id = useLoginInfoStore((state) => state.loginInfo?.id);

  return useMutation({
    mutationFn: deleteCrewParticipate,
    onSuccess: (_, { crewId }) => {
      queryClient.invalidateQueries({
        queryKey: ['crew-detail', crewId],
      });
      id &&
        queryClient.invalidateQueries({
          queryKey: ['crew-registration', id, crewId],
        });
    },
  });
};
