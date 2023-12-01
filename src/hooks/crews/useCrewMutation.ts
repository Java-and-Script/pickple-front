import { useMutation } from '@tanstack/react-query';

import { postCrew } from '@api/crews/postCrew';

export const useCrewMutation = () => {
  return useMutation({
    mutationFn: postCrew,
  });
};
