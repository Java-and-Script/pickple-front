import { useMutation } from '@tanstack/react-query';

import { postCrewParticipate } from '@api/crews/postCrewParticipate';

export const useCrewParticipateCreateMutation = () => {
  return useMutation({
    mutationFn: postCrewParticipate,
  });
};
