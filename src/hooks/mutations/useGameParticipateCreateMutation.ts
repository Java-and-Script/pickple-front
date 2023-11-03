import { useMutation } from '@tanstack/react-query';

import { postGameParticipate } from '@api/games/postGameParticipate';

export const useGameParticipateCreateMutation = () => {
  return useMutation({
    mutationFn: postGameParticipate,
  });
};
