import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postCrewParticipate } from '@api/crews/postCrewParticipate';

import { useLoginInfoStore } from '@stores/loginInfo.store';

export const useCrewParticipateCreateMutation = () => {
  const queryClient = useQueryClient();
  const id = useLoginInfoStore((state) => state.loginInfo?.id);

  return useMutation({
    mutationFn: postCrewParticipate,
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
